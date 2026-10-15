const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { JSDOM } = require('jsdom');
const { join } = require('node:path');

function page() {
  const root = join(__dirname, '..');
  const dom = new JSDOM(readFileSync(join(root, 'contact.html'), 'utf8'), {
    runScripts: 'outside-only', url: 'https://example.test/contact.html'
  });
  dom.window.eval(readFileSync(join(root, 'contact.js'), 'utf8'));
  const document = dom.window.document;
  return { dom, document, form: document.querySelector('form'), button: document.querySelector('#preview-message') };
}

test('demo is labelled and cannot submit through the preview button', () => {
  const { dom, document, form, button } = page();
  try {
    assert.equal(button.type, 'button');
    assert.match(document.getElementById(form.getAttribute('aria-describedby')).textContent, /does not send or store/);
    assert.equal(form.querySelector('[type="submit"]'), null);
    const event = new dom.window.Event('submit', { cancelable: true });
    assert.equal(form.dispatchEvent(event), false);
    assert.equal(event.defaultPrevented, true);
  } finally { dom.window.close(); }
});

test('invalid required fields and malformed email do not produce a success message', () => {
  const { dom, document, form, button } = page();
  try {
    button.click();
    assert.equal(form.checkValidity(), false);
    assert.equal(document.querySelector('[role="status"]').textContent, '');
    document.getElementById('name').value = 'Synthetic User';
    document.getElementById('email').value = 'invalid';
    document.getElementById('message').value = 'Synthetic message';
    button.click();
    assert.equal(form.checkValidity(), false);
    assert.equal(document.querySelector('[role="status"]').textContent, '');
  } finally { dom.window.close(); }
});

test('valid preview reports no delivery, preserves input, and clears stale status on edit', () => {
  const { dom, document, button } = page();
  try {
    document.getElementById('name').value = 'Synthetic User';
    document.getElementById('email').value = 'synthetic@example.test';
    const message = document.getElementById('message');
    message.value = '<b>Synthetic message</b>';
    button.click();
    const status = document.querySelector('[role="status"]');
    assert.match(status.textContent, /nothing was sent or stored/);
    assert.equal(message.value, '<b>Synthetic message</b>');
    assert.equal(status.children.length, 0);
    message.dispatchEvent(new dom.window.Event('input', { bubbles: true }));
    assert.equal(status.textContent, '');
  } finally { dom.window.close(); }
});

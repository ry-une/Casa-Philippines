const contactForm = document.querySelector('.form-demo');
const messageStatus = document.getElementById('message-status');

// Keep this demonstration local, including submit events triggered by keyboard or scripts.
contactForm.addEventListener('submit', event => event.preventDefault());
contactForm.addEventListener('input', () => { messageStatus.textContent = ''; });
document.getElementById('preview-message').addEventListener('click', () => {
  messageStatus.textContent = '';
  if (contactForm.reportValidity()) {
    messageStatus.textContent = 'Your message passes validation. This is a demo; nothing was sent or stored.';
  }
});


const button = document.getElementById('runaway-button');
const counter = document.getElementById('counter');
let total = 0;

document.addEventListener('mousemove', (e) => {
  const rect = button.getBoundingClientRect();
  const offset = 200;

  const dx = e.clientX - (rect.left + rect.width / 2);
  const dy = e.clientY - (rect.top + rect.height / 2);
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < offset) {
    const moveX = (rect.left - e.clientX + offset) * 1.5;
    const moveY = (rect.top - e.clientY + offset) * 1.5;
    button.style.transform = `translate(${moveX}px, ${moveY}px)`;
  } else {
    button.style.transform = "translate(0, 0)";
  }
});

button.addEventListener('click', () => {
  total += 1;
  counter.textContent = `Взыскано: ${total} ₽`;
});

export function validationForm() {
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.booking-form');
    const nameInput = document.querySelector('#name');
    const telInput = document.querySelector('#tel');
    const dateInput = document.querySelector('#date');
    const typeSelect = document.querySelector('#type');
    const timeInput = document.querySelector('#time');

    form.addEventListener('submit', (event) => {
      // Скидаємо стандартну поведінку форми
      event.preventDefault();

      // Очищаємо попередні повідомлення про помилки
      clearErrors();

      let hasErrors = false;

      // Валідація імені
      if (!nameInput.value.trim()) {
        showError(nameInput, 'Будь ласка, введіть своє ім’я.');
        hasErrors = true;
      }

      // Валідація телефону
      const telRegex = /^\+?\d{10,15}$/; // Перевіряємо міжнародний формат
      if (!telRegex.test(telInput.value.trim())) {
        showError(telInput, 'Будь ласка, введіть коректний номер телефону.');
        hasErrors = true;
      }

      // Валідація дати
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // Формат YYYY-MM-DD
      if (!dateRegex.test(dateInput.value.trim())) {
        showError(dateInput, 'Будь ласка, введіть дату у форматі YYYY-MM-DD.');
        hasErrors = true;
      }

      // Валідація типу діагностики
      if (typeSelect.value === 'type') {
        showError(typeSelect, 'Будь ласка, виберіть тип діагностики.');
        hasErrors = true;
      }

      // Валідація часу
      if (!timeInput.value.trim()) {
        showError(timeInput, 'Будь ласка, введіть час.');
        hasErrors = true;
      }

      // Якщо помилок немає, відправляємо форму
      if (!hasErrors) {
        alert('Форма успішно відправлена!');
        form.reset(); // Скидаємо форму
      }
    });

    // Функція для відображення помилки
    function showError(input, message) {
      const error = document.createElement('div');
      error.className = 'error-message';
      error.textContent = message;
      error.style.cssText = 'color: red; font-size: var(--fs-little);';
      input.parentElement.appendChild(error);
      input.classList.add('input-error');
    }

    // Функція для очищення помилок
    function clearErrors() {
      const errors = document.querySelectorAll('.error-message');
      errors.forEach((error) => error.remove());
      const inputs = document.querySelectorAll('.input-error');
      inputs.forEach((input) => input.classList.remove('input-error'));
    }
  });

}
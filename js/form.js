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

      // Якщо помилок немає, показуємо модальне вікно
      if (!hasErrors) {
        showModal(
          `Шановний ${nameInput.value}! </br> Вашу заявку за номером ${telInput.value} на діагностику ${typeSelect.value} на ${timeInput.value} ${dateInput.value} прийнято!`
        );
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

    // Функція для показу модального вікна
    function showModal(message) {
      const modal = document.createElement('div');
      modal.className = 'modal';
      modal.innerHTML = `
      <div class="modal-content">
        <p>${message}</p>
        <button class="modal-close">Закрити</button>
      </div>
    `;
      document.body.appendChild(modal);

      const closeButton = modal.querySelector('.modal-close');
      closeButton.addEventListener('click', () => {
        modal.remove();
      });

      // Додаємо стилі для модального вікна
      const style = document.createElement('style');
      style.textContent = `
      .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
      }
      .modal-content {
        width: 300px;
        background: var(--c-black);
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        text-align: center;
      }
      .modal-close {
        font-weight: var(--fw-semibold);
        font-family: var(--f-send);
        margin-top: 10px;
        padding: 10px 20px;
        background: var(--c-blue);
        color: var(--c-primary);
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: ease-in-out .3s;
      }
      .modal-close:hover {
        background: var(--c-primary);
        color: var(--c-blue);
      }
    `;
      document.head.appendChild(style);
    }
  });
}

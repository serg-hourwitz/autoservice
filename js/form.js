export function validationForm() {
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.booking-form');
    const nameInput = document.querySelector('#name');
    const telInput = document.querySelector('#tel');
    const dateInput = document.querySelector('#date');
    const typeSelect = document.querySelector('#type');
    const timeInput = document.querySelector('#time');

    const ukFlag = document.querySelector('.header-nav-lang-ukr');
    const deFlag = document.querySelector('.header-nav-lang-ger');
    const autFlag = document.querySelector('.header-nav-lang-aut');

    // Словник для перекладів
    const translations = {
      uk: {
        namePlaceholder: "Ваше ім'я",
        telPlaceholder: 'Ваш номер телефону',
        datePlaceholder: 'Виберіть дату',
        timePlaceholder: 'Виберіть час',
        typePlaceholder: 'Тип діагностики',
        submitBtn: 'Надіслати',
        errorName: 'Будь ласка, введіть своє ім’я.',
        errorTel: 'Будь ласка, введіть коректний номер телефону.',
        errorDate: 'Будь ласка, введіть дату у форматі YYYY-MM-DD.',
        errorType: 'Будь ласка, виберіть тип діагностики.',
        errorTime: 'Будь ласка, введіть час.',
        options: [
          'Діагностика',
          'Двигуна',
          'Ходової',
          'Електронна',
          'Гальмівної системи',
          'Кондиціонера',
        ],
        modalMessage: (name, tel, type, time, date) =>
          `Шановний ${name}! </br> Вашу заявку за номером ${tel} на діагностику ${type} на ${time} ${date} прийнято!`,
        closeBtn: 'Закрити',
      },
      de: {
        namePlaceholder: 'Ihr Name',
        telPlaceholder: 'Ihre Telefonnummer',
        datePlaceholder: 'Datum auswählen',
        timePlaceholder: 'Uhrzeit auswählen',
        typePlaceholder: 'Diagnosetyp',
        submitBtn: 'Senden',
        errorName: 'Bitte geben Sie Ihren Namen ein.',
        errorTel: 'Bitte geben Sie eine gültige Telefonnummer ein.',
        errorDate: 'Bitte geben Sie das Datum im Format JJJJ-MM-TT ein.',
        errorType: 'Bitte wählen Sie einen Diagnosetyp aus.',
        errorTime: 'Bitte geben Sie die Uhrzeit ein.',
        options: [
          'Diagnose',
          'Motor',
          'Fahrwerk',
          'Elektronik',
          'Bremssystem',
          'Klimaanlage',
        ],
        modalMessage: (name, tel, type, time, date) =>
          `Sehr geehrter ${name}, </br> Ihre Anfrage unter der Nummer ${tel} für eine Diagnose vom Typ ${type} am ${time} ${date} wurde angenommen!`,
        closeBtn: 'Schließen',
      },
    };

    // Функція для оновлення списку опцій
    function updateOptions(lang) {
      const t = translations[lang];
      typeSelect.innerHTML = ''; // Очищаємо список
      t.options.forEach((optionText, index) => {
        const option = document.createElement('option');
        option.value = index === 0 ? 'type' : optionText;
        option.textContent = optionText;
        typeSelect.appendChild(option);
      });
    }

    let currentLang = 'uk';

    // Функція для зміни тексту
    function translateForm(lang) {
      currentLang = lang;
      const t = translations[lang];

      nameInput.placeholder = t.namePlaceholder;
      telInput.placeholder = t.telPlaceholder;
      dateInput.placeholder = t.datePlaceholder;
      timeInput.placeholder = t.timePlaceholder;
      typeSelect.querySelector('option').textContent = t.typePlaceholder;
      form.querySelector('button[type="submit"]').textContent = t.submitBtn;

      updateOptions(lang); // Оновлюємо список опцій
    }

    // Додаємо обробники кліків для прапорів
    ukFlag.addEventListener('click', () => translateForm('uk'));
    deFlag.addEventListener('click', () => translateForm('de'));
    autFlag.addEventListener('click', () => translateForm('de'));

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      clearErrors(); // Видаляємо попередні помилки

      let hasErrors = false;
      const t = translations[currentLang]; // Отримуємо переклади для поточної мови

      // Валідація імені
      if (!nameInput.value.trim()) {
        showError(nameInput, t.errorName);
        hasErrors = true;
      }

      // Валідація телефону
      const telRegex = /^\+?\d{10,15}$/;
      if (!telRegex.test(telInput.value.trim())) {
        showError(telInput, t.errorTel);
        hasErrors = true;
      }

      // Валідація дати
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (!dateRegex.test(dateInput.value.trim())) {
        showError(dateInput, t.errorDate);
        hasErrors = true;
      }

      // Валідація типу діагностики
      if (typeSelect.value === 'type') {
        showError(typeSelect, t.errorType);
        hasErrors = true;
      }

      // Валідація часу
      if (!timeInput.value.trim()) {
        showError(timeInput, t.errorTime);
        hasErrors = true;
      }

      // Якщо немає помилок
      if (!hasErrors) {
        // Відображаємо модальне вікно
        showModal(
          t.modalMessage(
            nameInput.value,
            telInput.value,
            typeSelect.value,
            timeInput.value,
            dateInput.value
          )
        );

        // Скидаємо форму
        form.reset();

        // Очищаємо стилі полів (якщо було введено неправильні дані перед цим)
        clearErrors(); // Ця функція вже видаляє помилки й стилі
      }
    });

    function showError(input, message) {
      const error = document.createElement('div');
      error.className = 'error-message';
      error.textContent = message;
      error.style.cssText = 'color: red; font-size: var(--fs-little);';
      input.parentElement.appendChild(error);
      input.classList.add('input-error');
    }

    function clearErrors() {
      const errors = document.querySelectorAll('.error-message');
      errors.forEach((error) => error.remove());
      const inputs = document.querySelectorAll('.input-error');
      inputs.forEach((input) => input.classList.remove('input-error'));
    }

    function showModal(message) {
      const modal = document.createElement('div');
      modal.className = 'modal';
      modal.innerHTML = `
    <div class="modal-content">
      <p>${message}</p>
      <button class="modal-close">${translations[currentLang].closeBtn}</button>
    </div>
  `;
      document.body.appendChild(modal);

      const closeButton = modal.querySelector('.modal-close');
      closeButton.addEventListener('click', () => {
        modal.remove();
      });
    }
  });
}

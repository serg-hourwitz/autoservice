export function formTranslation() {
  document.addEventListener('DOMContentLoaded', () => {
    const translations = {
      uk: {
        name: 'Ім’я',
        tel: 'Номер телефону',
        date: 'Дата',
        time: 'Час',
        type: 'Тип діагностики',
        options: [
          'Діагностика',
          'Двигуна',
          'Ходової',
          'Електронна',
          'Гальмівної системи',
          'Кондиціонера',
        ],
        submit: 'Відправити',
      },
      de: {
        name: 'Name',
        tel: 'Telefonnummer',
        date: 'Datum',
        time: 'Zeit',
        type: 'Diagnosetyp',
        options: [
          'Diagnose',
          'Motor',
          'Fahrwerk',
          'Elektronisch',
          'Bremssystem',
          'Klimaanlage',
        ],
        submit: 'Senden',
      },
    };

    // Отримуємо елементи форми
    const formElements = {
      name: document.querySelector('#name'),
      tel: document.querySelector('#tel'),
      date: document.querySelector('#date'),
      time: document.querySelector('#time'),
      type: document.querySelector('#type'),
      submitButton: document.querySelector('#booking-submit-btn'),
    };

    const ukFlag = document.querySelector('.header-nav-lang-ukr');
    const deFlag = document.querySelector('.header-nav-lang-ger');
    const autFlag = document.querySelector('.header-nav-lang-aut');


    // Функція перекладу
    function translateForm(lang) {
      const translation = translations[lang];
      if (translation) {
        formElements.name.placeholder = translation.name;
        formElements.tel.placeholder = translation.tel;
        formElements.date.placeholder = translation.date;
        formElements.time.placeholder = translation.time;

        // Переклад опцій селекту
        if (formElements.type) {
          formElements.type.innerHTML = ''; // Очищаємо старі опції
          translation.options.forEach((optionText) => {
            const option = document.createElement('option');
            option.textContent = optionText;
            formElements.type.appendChild(option);
          });
        }

        // Переклад кнопки
        if (formElements.submitButton) {
          formElements.submitButton.textContent = translation.submit;
        }
      }
    }

    // Обробники кліків на прапори
    ukFlag.addEventListener('click', () => translateForm('uk'));
    deFlag.addEventListener('click', () => translateForm('de'));
    autFlag.addEventListener('click', () => translateForm('de'));
  });

}
export function siteTranslate() {
  document.addEventListener('DOMContentLoaded', () => {
    const translations = {
      uk: {
        // navigation
        aboutLink: 'Про нас',
        serviceLink: 'Послуги',
        advantageLink: 'Наші переваги',
        contactsLink: 'Контакти',
        // header-banner
        headerBannerText:
          'Комп’ютерна діагностика електронних систем авто – точність і швидкість виявлення несправностей',
        headerBannerBtn: 'Записатися на діагностику',
        // about
        aboutTitle: 'Про нас',
        aboutTextTop: 'Чому обирають саме нашу студію?',
        aboutTextBottom:
          'Ми віримо в якісний догляд за вашим авто! Захоплення автомобілями для нас — це не просто робота, а справжня пристрасть, тому ми досконало знаємо, як забезпечити найкращий сервіс. Дотримання термінів — наш пріоритет, і завдяки системі попереднього запису ви завжди отримуєте своє авто вчасно. Ми приділяємо увагу кожній дрібниці, викладаємося на всі 110% і робимо все, щоб ваш автомобіль виглядав бездоганно.',
        skillsTitle: 'Професіоналізм компанії: ',
        skills:
          'Кваліфіковані спеціалісти завжди готові надати якісні послуги нашим клієнтам з гарантією',
        supportTitle: 'Швидка підтримка:',
        support:
          'Кожного дня в нас працює контакт-центр для консультації та записів наших клієнтів.',
        shortTermsTitle: 'Швидкість виконання:',
        shortTerms:
          'Ми прагнемо оптимізувати процес покращення Вашого авто і прагнемо надати послуги  не тільки високоякісно, але й швидко.',
      },
      de: {
        // navigation
        aboutLink: 'Über uns',
        serviceLink: 'Dienstleistungen',
        advantageLink: 'Unsere Vorteile',
        contactsLink: 'Kontakte',
        // header-banner
        headerBannerText:
          'Computerdiagnose elektronischer Fahrzeugsysteme - Genauigkeit und Geschwindigkeit der Fehlererkennung',
        headerBannerBtn: 'Vereinbaren Sie einen Termin zur Diagnose',
        // about
        aboutTitle: 'Über uns',
        aboutTextTop: 'Warum unser Studio?',
        aboutTextBottom:
          'Wir glauben an die gute Pflege Ihres Autos! Für uns ist die Autopflege nicht nur ein Job, sondern eine echte Leidenschaft, deshalb wissen wir genau, wie wir den besten Service bieten können. Die Einhaltung von Terminen hat für uns Priorität, und dank des Vorbestellungssystems erhalten Sie Ihr Auto immer pünktlich. Wir achten auf jedes Detail, geben unsere 110 % und tun alles, damit Ihr Auto perfekt aussieht.',
        skillsTitle: 'Professionalität des Unternehmens: ',
        skills:
          'Qualifizierte Fachleute sind immer bereit, unseren Kunden hochwertige Dienstleistungen mit einer Garantie zu bieten',
        supportTitle: 'Schneller Support:',
        support:
          'Wir haben jeden Tag ein Kontaktzentrum für die Beratung und Aufnahme unserer Kunden.',
        shortTermsTitle: 'Schnelligkeit der Durchführung:',
        shortTerms:
          'Wir sind bestrebt, den Prozess der Verbesserung Ihres Fahrzeugs zu optimieren und wollen nicht nur qualitativ hochwertige, sondern auch schnelle Dienstleistungen anbieten.',
      },
    };

    const elementsToTranslate = {
      // navigation
      aboutLink: document.querySelector('.about-link'),
      serviceLink: document.querySelector('.service-link'),
      advantageLink: document.querySelector('.advantage-link'),
      contactsLink: document.querySelector('.contacts-link'),
      // header-banner
      headerBannerText: document.querySelector('.header-banner-text'),
      headerBannerBtn: document.querySelector('.header-banner-btn'),
      // about
      aboutTitle: document.querySelector('.about-title'),
      aboutTextTop: document.querySelector('.about-text-top'),
      aboutTextBottom: document.querySelector('.about-text-bottom'),
      skillsTitle: document.querySelector('.skills-title'),
      skills: document.querySelector('.skills'),
      supportTitle: document.querySelector('.support-title'),
      support: document.querySelector('.support'),
      shortTermsTitle: document.querySelector('.short-terms-title'),
      shortTerms: document.querySelector('.short-terms'),
    };

    const ukFlag = document.querySelector('.header-nav-lang-ukr');
    const deFlag = document.querySelector('.header-nav-lang-ger');

    ukFlag.addEventListener('click', () => {
      translatePage('uk');
    });

    deFlag.addEventListener('click', () => {
      translatePage('de');
    });

    function translatePage(lang) {
      const translation = translations[lang];
      if (translation) {
        for (const key in elementsToTranslate) {
          if (elementsToTranslate[key]) {
            elementsToTranslate[key].textContent = translation[key];
          }
        }
      }
    }
  });
}

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
        // car types
        carsText: 'Працюємо з різними типами автомобілей та систем',
        car: 'Легкові авто',
        electric: 'Електромобілі',
        tracks: 'Вантажні',
        hybrid: 'Гібриди',
        // car types - hidden
        carsHiddenText: 'Працюємо з різними типами автомобілей та систем',
        textHidden:
          'Ми віримо в якісний догляд за вашим авто! Захоплення автомобілями для нас — це не просто робота, а справжня пристрасть, тому ми досконало знаємо, як забезпечити найкращий сервіс. Дотримання термінів -',
        readMore: 'читати далі...',
        readLess: '...згорнути',
        textHiddenHidden:
          'наш пріоритет, і завдяки системі попереднього запису ви завжди отримуєте своє авто вчасно. Ми приділяємо увагу кожній дрібниці, викладаємося на всі 110% і робимо все, щоб ваш автомобіль виглядав бездоганно.',
        carHidden: 'легкові авто',
        electricHidden: 'електромобілі',
        tracksHidden: 'вантажні',
        hybridHidden: 'гібриди',
        // services
        services: 'Послуги',
        engineTitle: 'Комп’ютерна діагностика двигуна',
        engineDescription:
          'Точний аналіз роботи двигуна для виявлення несправностей.',
        chassisTitle: 'Діагностика ходової',
        chassisDescription:
          'Перевірка амортизаторів, підшипників, підвісок та інших елементів для безпечної їзди',
        diagnosticsTitle: 'Електронна діагностика',
        diagnosticsDescription:
          'Огляд електронних систем автомобіля — від сигналізації до мультимедійних систем.',
        brakeTitle: 'Діагностика гальмівної системи',
        brakeDescription:
          'Виявлення зносу колодок, стану гальмівних дисків та ефективності роботи гальм.',
        climateTitle: 'Перевірка кондиціонера та клімат-контролю',
        climateDescription:
          'Оцінка ефективності роботи системи охолодження та очищення повітря.',
        bookingBtn: 'Записатися на діагностику',
        // advantages
        advantagesTitle: 'Наші переваги',
        advantageOneTitle: 'Сучасне обладнання',
        advantageOneText:
          'Використовуємо новітні діагностичні системи для точного аналізу.',
        advantageTwoTitle: 'Досвідчені майстри',
        advantageTwoText:
          'Команда професіоналів з великим досвідом роботи в автосервісі.',
        advantageThreeTitle: 'Швидкість та зручність',
        advantageThreeText:
          'Діагностика проводиться швидко, щоб заощадити ваш час.',
        // numbers
        aboutNumbersTitle: 'Трохи цифр про нас',
        projectsNumber: 'Реалізованих проектів',
        clearNumber: 'Кількість поліровок',
        clearNumber: 'Кількість хімчисток',
        studioNumber: 'Кількість студій',
        // booking
        bookingHeaderText: 'Записатись на діагностику',
        bookingText: 'Зробіть перший крок до надійності вашого автомобіля!',
        // form
        // contacts
        contactsTitle: 'Контакти',
        contactsPhone: 'Телефон',
        contactsAddress: 'Адреса',
        address: 'Австрія, м. Гляйсдорф',
        shedule: 'Режим роботи:',
        weekdays: 'Понеділок - Пʼятниця 8:00-21:30',
        saturday: 'Субота',
        hours: '10:00-19:00',
        sunday: 'Неділя вихідний',
        socials: 'Ми в соціальних мережах:',
        copyright: 'Copyright © autodiagnosepro Всі права захищені',
        policy: 'Політика конфіденціальності',
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
        // car types
        carsText:
          'Wir arbeiten mit verschiedenen Arten von Fahrzeugen und Systemen',
        car: 'Personenkraftwagen',
        electric: 'Elektrische Fahrzeuge',
        tracks: 'Fracht',
        hybrid: 'Hybriden',
        // car types - hidden
        textHiddenTop: 'Warum unser Studio?',
        textHidden:
          ' Wir glauben an die Qualität der Pflege für Ihr Auto! Für uns ist die Leidenschaft für Autos nicht nur ein Job, sondern eine echte Leidenschaft. Deshalb wissen wir genau, wie wir Ihnen den besten Service bieten können. Einhaltung der Fristen -',
        readMore: 'mehr...',
        readLess: '...einstürzen',
        textHiddenHidden:
          'ist unsere Priorität, und dank des Terminsystems erhalten Sie Ihr Auto immer pünktlich. Wir achten auf jedes Detail, geben unsere 110% und tun alles, damit Ihr Auto perfekt aussieht.',
        carsHiddenText:
          'Wir arbeiten mit verschiedenen Arten von Fahrzeugen und Systemen',
        carHidden: 'personenkraftwagen',
        electricHidden: 'elektrische fahrzeuge',
        tracksHidden: 'fracht',
        hybridHidden: 'hybriden',
        // services
        services: 'Dienstleistungen',
        engineTitle: 'Computergestützte Motordiagnose',
        engineDescription:
          'Präzise Analyse der Motorleistung zur Ermittlung von Fehlern.',
        chassisTitle: 'Fahrgestell-Diagnose',
        chassisDescription:
          'Kontrolle von Stoßdämpfern, Lagern, Aufhängungen und anderen Elementen für sicheres Fahren',
        diagnosticsTitle: 'Elektronische Diagnostik',
        diagnosticsDescription:
          'Ein Überblick über die elektronischen Systeme des Fahrzeugs - von der Alarmanlage bis zum Multimediasystem.',
        brakeTitle: 'Diagnose der Bremsen',
        brakeDescription:
          'Erkennen Sie Belagverschleiß, Zustand der Bremsscheiben und Bremsleistung.',
        climateTitle: 'Überprüfung der Klimaanlage und Klimatisierung',
        climateDescription:
          'Bewertung der Effizienz des Kühl- und Luftreinigungssystems.',
        bookingBtn: 'Vereinbaren Sie einen Termin zur Diagnose',
        // advantages
        advantagesTitle: 'Unsere Vorteile',
        advantageOneTitle: 'Moderne Ausrüstung',
        advantageOneText:
          'Wir verwenden die neuesten Diagnosesysteme für eine genaue Analyse.',
        advantageTwoTitle: 'Erfahrene Fachleute',
        advantageTwoText:
          'Ein Team von Fachleuten mit langjähriger Erfahrung im Autoservice.',
        advantageThreeTitle: 'Schnelligkeit und Komfort',
        advantageThreeText:
          'Die Diagnosen werden schnell durchgeführt, damit Sie Zeit sparen.',
        // numbers
        aboutNumbersTitle: 'Einige Zahlen zu uns',
        projectsNumber: 'Realisierte Projekte',
        clearNumber: 'Anzahl der Polituren',
        polishNumber: 'Anzahl der Reinigungen',
        studioNumber: 'Zahl der Studios',
        // booking
        bookingHeaderText: 'Vereinbaren Sie einen Termin zur Diagnose',
        bookingText:
          'Machen Sie den ersten Schritt zur Zuverlässigkeit Ihres Autos!',
        // form
        // contacts
        contactsTitle: 'Kontakte',
        contactsPhone: 'Telefon:',
        contactsAddress: 'Adresse:',
        address: 'Österreich, Gleisdorf',
        shedule: 'Funktionsweise:',
        weekdays: 'Montag - Freitag: 8:00-21:30',
        saturday: 'Samstag',
        hours: '10:00-19:00',
        sunday: 'Sonntag ist ein freier Tag',
        socials: 'Wir sind in den sozialen Medien:',
        copyright: 'Copyright © autodiagnosepro Alle Rechte vorbehalten',
        policy: 'Datenschutzbestimmungen',
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
      // car types
      carsText: document.querySelector('.cars-text'),
      car: document.querySelector('.car'),
      electric: document.querySelector('.electric'),
      tracks: document.querySelector('.tracks'),
      hybrid: document.querySelector('.hybrid'),
      // cars types - hidden
      textHiddenTop: document.querySelector('.text-hidden-top'),
      textHidden: document.querySelector('.text-hidden-text'),
      textHiddenHidden: document.querySelector('.text-hidden-hidden'),
      readMore: document.querySelector('.read-more'),
      readLess: document.querySelector('.read-less'),
      carsHiddenText: document.querySelector('.cars-hidden-text'),
      carHidden: document.querySelector('.car-hidden'),
      electricHidden: document.querySelector('.electric-hidden'),
      tracksHidden: document.querySelector('.tracks-hidden'),
      hybridHidden: document.querySelector('.hybrid-hidden'),
      // services
      services: document.getElementById('services'),
      engineTitle: document.querySelector('.engine-title'),
      engineDescription: document.querySelector('.engine-description'),
      chassisTitle: document.querySelector('.chassis-title'),
      chassisDescription: document.querySelector('.chassis-description'),
      diagnosticsTitle: document.querySelector('.diagnostics-title'),
      diagnosticsDescription: document.querySelector(
        '.diagnostics-description'
      ),
      brakeTitle: document.querySelector('.brake-title'),
      brakeDescription: document.querySelector('.brake-description'),
      climateTitle: document.querySelector('.climate-title'),
      climateDescription: document.querySelector('.climate-description'),
      bookingBtn: document.querySelector('.booking-btn'),
      // advantages
      advantagesTitle: document.querySelector('.advantages-title'),
      advantageOneTitle: document.querySelector('.advantage-one-title'),
      advantageOneText: document.querySelector('.advantage-one-text'),
      advantageTwoTitle: document.querySelector('.advantage-two-title'),
      advantageTwoText: document.querySelector('.advantage-two-text'),
      advantageThreeTitle: document.querySelector('.advantage-three-title'),
      advantageThreeText: document.querySelector('.advantage-three-text'),
      // numbers
      aboutNumbersTitle: document.querySelector('.about-numbers-title'),
      projectsNumber: document.querySelector('.projects-number'),
      polishNumber: document.querySelector('.polish-number'),
      clearNumber: document.querySelector('.clear-number'),
      studioNumber: document.querySelector('.studio-number'),
      // booking
      bookingHeaderText: document.querySelector('.booking-header-text'),
      bookingText: document.querySelector('.booking-text'),
      // form
      // contacts
      contactsTitle: document.querySelector('.contacts-title'),
      contactsPhone: document.querySelector('.footer-contacts-phone-text'),
      contactsAddress: document.querySelector('.footer-contacts-address-text'),
      address: document.querySelector('.address'),
      shedule: document.querySelector('.footer-contacts-shedule-text'),
      weekdays: document.querySelector('.weekdays'),
      saturday: document.querySelector('.saturday'),
      hours: document.querySelector('.hours'),
      sunday: document.querySelector('.sunday'),
      socials: document.querySelector('.footer-contacts-socials-text'),
      copyright: document.querySelector('.copyright'),
      policy: document.querySelector('.policy'),
    };

    const ukFlag = document.querySelector('.header-nav-lang-ukr');
    const deFlag = document.querySelector('.header-nav-lang-ger');
    const autFlag = document.querySelector('.header-nav-lang-aut');

    ukFlag.addEventListener('click', () => {
      translatePage('uk');
    });

    deFlag.addEventListener('click', () => {
      translatePage('de');
    });

    autFlag.addEventListener('click', () => {
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

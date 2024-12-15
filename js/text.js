/* hidden text */

export function textHidden() {

  document.addEventListener('DOMContentLoaded', () => {
    const readMoreLink = document.querySelector('.read-more');
    const readLessLink = document.querySelector('.read-less');
    const hiddenText = document.querySelector('.text-hidden-hidden');

    const toggleVisibility = (isVisible) => {
      hiddenText.classList.toggle('visible', isVisible); // Текст стає видимим/прихованим
      readMoreLink.classList.toggle('hidden', isVisible); // Ховаємо/показуємо "читати далі"
    };

    readMoreLink.addEventListener('click', (event) => {
      event.preventDefault();
      toggleVisibility(true); // Розгортаємо текст
    });

    readLessLink.addEventListener('click', (event) => {
      event.preventDefault();
      toggleVisibility(false); // Згортаємо текст
    });
  });
}
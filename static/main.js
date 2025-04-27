document.addEventListener('DOMContentLoaded', () => {

  const heroImages = [
    'hero-images/hero1.jpg',
    'hero-images/hero2.jpg',
    'hero-images/hero3.jpg',
    'hero-images/hero4.jpg',
    'hero-images/hero5.jpg'
  ];

  const randomIndex = Math.floor(Math.random() * heroImages.length);
  const randomImage = heroImages[randomIndex];

  const heroImageEl = document.getElementById('heroImage');
  if (heroImageEl) {
    heroImageEl.src = randomImage;
  }
});
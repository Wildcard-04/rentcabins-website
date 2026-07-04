const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
}


// Version 4.5 - pricing section reveal animation
const pricingSection = document.querySelector('.pricing-v43');
if (pricingSection) {
  const showPricing = () => pricingSection.classList.add('is-visible');

  if ('IntersectionObserver' in window) {
    const pricingObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          showPricing();
          observer.disconnect();
        }
      });
    }, { threshold: 0.22 });

    pricingObserver.observe(pricingSection);
  } else {
    showPricing();
  }
}

import './Footer-section-component.css';

export function Footer() {
  return (
    <>
      <div className='footer-section'>
        <div className='wrapper'>
          <div className='footer-section__item-container'>
            <p className='footer-section__subtitle'>
              Copyright © 2025 — <span className='footer-section__text-emphasis'>Marina L.</span>
            </p>
            <p className='footer-section__subtitle'>The site is implemented in React</p>
            <div className='footer-section__contact-logo-container'>
              <a href="https://t.me/Rrrraaaarrrrrr" className='footer-section__contact-logo-tg'></a>
              <a href="https://github.com/FoxyRaspberry" className='footer-section__contact-logo-gh'></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

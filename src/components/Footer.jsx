import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';

const FOOTER_LINKS = [
  { to: '/', labelKey: 'nav.home', icon: 'bi-house-door' },
  { to: '/sahabah', labelKey: 'nav.sahabah', icon: 'bi-people' },
  { to: '/library', labelKey: 'nav.library', icon: 'bi-book' },
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="site-footer path-footer mt-auto">
      <div className="container py-5">
        <div className="row g-4 g-lg-5">
          <div className="col-md-4">
            <Link
              to="/"
              className="site-footer-brand d-inline-flex align-items-center gap-2 text-decoration-none mb-3"
            >
              <img
                src={logo}
                alt=""
                width={44}
                height={44}
                className="site-logo rounded-circle"
              />
              <span className="site-footer-brand-text">
                <span className="d-block text-white fw-bold site-brand-ar">طريق الأمة</span>
                <span className="d-block small text-white-50">Tariq al-Ummah</span>
              </span>
            </Link>
            <p className="site-footer-about mb-0 small lh-lg">{t('footer.about')}</p>
          </div>

          <div className="col-md-4">
            <h2 className="site-footer-heading h6 text-uppercase fw-bold mb-3">
              {t('footer.navigation')}
            </h2>
            <ul className="site-footer-nav list-unstyled mb-0">
              {FOOTER_LINKS.map(({ to, labelKey, icon }) => (
                <li key={to}>
                  <Link to={to} className="site-footer-link">
                    <i className={`bi ${icon} me-2`} aria-hidden="true" />
                    {t(labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-4">
            <h2 className="site-footer-heading h6 text-uppercase fw-bold mb-3">
              {t('footer.contactTitle')}
            </h2>
            <p className="site-footer-about small mb-3">{t('footer.contactHint')}</p>
            <a
              href={t('footer.contactUrl')}
              className="btn site-footer-contact-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-envelope me-2" aria-hidden="true" />
              {t('footer.contact')}
            </a>
          </div>
        </div>
      </div>

      <div className="site-footer-bottom text-center py-3">
        <p className="mb-0 small text-white-50">{t('footer.copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;

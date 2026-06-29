import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';
import PATH_CHAPTERS from '../constants/sections';

const MAIN_LINKS = [
  { to: '/', labelKey: 'nav.home', icon: 'bi-house-door' },
  { to: '/library', labelKey: 'nav.library', icon: 'bi-book' },
];

const CONTACT_LINKS = [
  {
    hrefKey: 'footer.telegramUrl',
    labelKey: 'footer.telegram',
    icon: 'bi-telegram',
  },
  {
    hrefKey: 'footer.emailUrl',
    labelKey: 'footer.email',
    icon: 'bi-envelope-at',
  },
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="site-footer path-footer mt-auto">
      <div className="container py-5">
        <div className="row g-4 g-lg-5">
          <div className="col-lg-4">
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
                <span className="d-block small text-white-50">{t('footer.brandName')}</span>
              </span>
            </Link>
            <p className="site-footer-about mb-0 small lh-lg">{t('footer.about')}</p>
          </div>

          <div className="col-6 col-lg-2">
            <h2 className="site-footer-heading h6 text-uppercase fw-bold mb-3">
              {t('footer.mainSections')}
            </h2>
            <ul className="site-footer-nav list-unstyled mb-0">
              {MAIN_LINKS.map(({ to, labelKey, icon }) => (
                <li key={to}>
                  <Link to={to} className="site-footer-link">
                    <i className={`bi ${icon} me-2`} aria-hidden="true" />
                    {t(labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-lg-3">
            <h2 className="site-footer-heading h6 text-uppercase fw-bold mb-3">
              {t('footer.epochs')}
            </h2>
            <ul className="site-footer-nav list-unstyled mb-0">
              {PATH_CHAPTERS.map(({ id, to }) => (
                <li key={to}>
                  <Link to={to} className="site-footer-link">
                    {t(`chapters.${id}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3">
            <h2 className="site-footer-heading h6 text-uppercase fw-bold mb-3">
              {t('footer.contactTitle')}
            </h2>
            <p className="site-footer-about small mb-3">{t('footer.contactHint')}</p>
            <div className="d-flex flex-column gap-2">
              {CONTACT_LINKS.map(({ hrefKey, labelKey, icon }) => (
                <a
                  key={hrefKey}
                  href={t(hrefKey)}
                  className="site-footer-contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`bi ${icon} me-2`} aria-hidden="true" />
                  {t(labelKey)}
                </a>
              ))}
            </div>
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

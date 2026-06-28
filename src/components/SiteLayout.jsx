import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';
import LanguageSwitcher from './LanguageSwitcher';

const SiteLayout = ({ children }) => {
  const { t } = useTranslation();

  return (
    <div className="d-flex flex-column min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark path-navbar shadow sticky-top">
        <div className="container d-flex align-items-center flex-wrap gap-2">
          <Link
            className="navbar-brand path-brand fw-bold fs-4 text-decoration-none d-flex align-items-center gap-2 me-auto"
            to="/"
          >
            <img
              src={logo}
              alt=""
              width={40}
              height={40}
              className="site-logo rounded-circle"
            />
            <span className="text-white site-brand-ar">طريق الأمة</span>
            <span className="brand-sub d-none d-sm-inline">Tariqu-l-ummah</span>
          </Link>
          <span className="navbar-text d-none d-lg-inline text-white-50 small">
            {t('site.title')}
          </span>
          <div className="d-flex align-items-center gap-2 ms-lg-3">
            <Link className="nav-link text-white-50 small text-decoration-none path-nav-link" to="/library">
              {t('nav.library')}
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      <main className="flex-grow-1">{children}</main>

      <footer className="path-footer text-center py-4 mt-auto">
        <p className="m-0 small">{t('site.footer')}</p>
      </footer>
    </div>
  );
};

export default SiteLayout;

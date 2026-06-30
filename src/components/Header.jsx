import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';
import LanguageSwitcher from './LanguageSwitcher';

export const NAV_COLLAPSE_ID = 'mainNavbar';

export const closeMobileNav = () => {
  const collapseEl = document.getElementById(NAV_COLLAPSE_ID);
  if (!collapseEl?.classList.contains('show')) return;

  const Collapse = window.bootstrap?.Collapse;
  if (Collapse) {
    Collapse.getOrCreateInstance(collapseEl, { toggle: false }).hide();
    return;
  }

  collapseEl.classList.remove('show');
};

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="site-header w-100">
      <nav className="navbar navbar-expand-lg navbar-dark path-navbar shadow-sm w-100">
        <div className="container-fluid path-navbar-inner px-3 px-lg-4">
          <Link
            className="navbar-brand path-brand fw-bold fs-5 text-decoration-none d-flex align-items-center gap-2 me-auto"
            to="/"
            onClick={closeMobileNav}
          >
            <span className="site-logo-wrap rounded-circle flex-shrink-0" aria-hidden="true">
              <img
                src={logo}
                alt=""
                className="site-logo"
              />
            </span>
            <span className="text-white site-brand-ar">طريق الأمّة</span>
            <span className="brand-sub d-none d-sm-inline">{t('footer.brandName')}</span>
          </Link>

          <button
            className="navbar-toggler path-navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${NAV_COLLAPSE_ID}`}
            aria-controls={NAV_COLLAPSE_ID}
            aria-expanded="false"
            aria-label={t('nav.toggle')}
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id={NAV_COLLAPSE_ID}>
            <span className="navbar-text d-none d-lg-inline text-white-50 small me-lg-3">
              {t('site.title')}
            </span>

            <ul className="navbar-nav ms-lg-auto align-items-lg-center gap-lg-1 path-navbar-nav">
              <li className="nav-item d-lg-none">
                <Link
                  className="nav-link path-mobile-nav-btn"
                  to="/"
                  onClick={closeMobileNav}
                >
                  <i className="bi bi-house-door me-2" aria-hidden="true" />
                  {t('nav.home')}
                </Link>
              </li>
              <li className="nav-item d-lg-none">
                <Link
                  className="nav-link path-mobile-nav-btn"
                  to="/sahabah"
                  onClick={closeMobileNav}
                >
                  <i className="bi bi-people me-2" aria-hidden="true" />
                  {t('nav.sahabah')}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link path-mobile-nav-btn path-nav-link-desktop"
                  to="/library"
                  onClick={closeMobileNav}
                >
                  <i className="bi bi-book d-lg-none me-2" aria-hidden="true" />
                  {t('nav.library')}
                </Link>
              </li>
            </ul>

            <div className="path-navbar-lang ms-lg-3">
              <LanguageSwitcher mobile />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

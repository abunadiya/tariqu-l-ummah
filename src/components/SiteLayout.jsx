import { Link } from 'react-router-dom';

const SiteLayout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark encyclopedia-navbar shadow sticky-top">
        <div className="container">
          <Link className="navbar-brand navbar-brand-encyclopedia fw-bold fs-4 text-decoration-none d-flex align-items-center gap-2" to="/">
            <span className="navbar-brand-mark" aria-hidden="true">
              <i className="bi bi-moon-stars" />
            </span>
            <span className="text-white">طريق الأمة</span>
            <span className="brand-sub ms-2">Tariqu-l-ummah</span>
          </Link>
          <span className="navbar-text d-none d-md-inline text-white-50 small ms-auto">
            Энциклопедия исламского мира
          </span>
        </div>
      </nav>

      <main className="flex-grow-1">{children}</main>

      <footer className="encyclopedia-footer text-center py-4 mt-auto">
        <p className="m-0 small">
          © 2026 طريق الأمة | Tariqu-l-ummah. Истина всегда остаётся за Таухидом.
        </p>
      </footer>
    </div>
  );
};

export default SiteLayout;

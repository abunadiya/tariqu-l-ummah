import { Link } from 'react-router-dom';

const SiteLayout = ({ children }) => {
  return (
    <div className="bg-light min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow sticky-top">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-3 text-decoration-none" to="/">
            طريق الأمة <span className="text-muted fs-5 ms-2">Tariqu-l-ummah</span>
          </Link>
        </div>
      </nav>

      {children}

      <footer className="bg-dark text-light text-center py-4 border-top border-secondary mt-auto">
        <p className="m-0 small">
          © 2026 طريق الأمة | Tariqu-l-ummah. Истина всегда остается за Таухидом.
        </p>
      </footer>
    </div>
  );
};

export default SiteLayout;

import BackButton from './BackButton';
import RelatedChapters from './RelatedChapters';

const PageShell = ({
  title,
  subtitle,
  accent = 'var(--emerald)',
  children,
}) => (
  <div className="path-page min-vh-100 py-4 py-md-5">
    <div className="container">
      <div className="mb-4">
        <BackButton />
      </div>

      <header className="page-hero mb-5 rounded-3 shadow-sm" style={{ borderLeftColor: accent }}>
        <div className="page-hero-inner p-4 p-md-5">
          <h1 className="display-5 fw-bold mb-3">{title}</h1>
          <p className="lead mb-0">{subtitle}</p>
        </div>
      </header>

      {children}

      <RelatedChapters />

      <div className="mt-5 pt-4 border-top border-emerald-subtle text-center text-md-start">
        <BackButton />
      </div>
    </div>
  </div>
);

export default PageShell;

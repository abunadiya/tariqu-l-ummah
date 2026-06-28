import { Link, useLocation } from 'react-router-dom';
import { getRelatedChapters } from '../constants/sections';

const RelatedChapters = () => {
  const location = useLocation();
  const relatedChapters = getRelatedChapters(location.pathname);

  if (!relatedChapters.length) {
    return null;
  }

  return (
    <section
      className="related-chapters rounded-4 shadow-sm p-4 p-md-5 mt-5"
      aria-label="Связанные главы пути Уммы"
    >
      <div className="d-flex align-items-center gap-2 mb-4">
        <span className="topic-icon flex-shrink-0">
          <i className="bi bi-signpost-2" aria-hidden="true" />
        </span>
        <div>
          <h2 className="h4 fw-bold text-emerald mb-1">Связанные главы</h2>
          <p className="text-muted mb-0">
            Продолжите путь Уммы через соседние главы — эпохи и регионы её истории.
          </p>
        </div>
      </div>

      <div className="row g-3">
        {relatedChapters.map((chapter) => (
          <div className="col-lg-4 col-md-6" key={chapter.to}>
            <Link
              to={chapter.to}
              className="related-chapters-link d-block h-100 text-decoration-none rounded-4 p-3"
            >
              <div className="d-flex align-items-start gap-3">
                <span className="related-chapters-icon flex-shrink-0">
                  <i className={`bi ${chapter.icon}`} aria-hidden="true" />
                </span>
                <div>
                  <div className="section-period-badge mb-2">{chapter.period}</div>
                  <h3 className="h6 fw-bold text-emerald mb-2">{chapter.title}</h3>
                  <p className="text-muted small mb-0 lh-base">{chapter.hint}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedChapters;

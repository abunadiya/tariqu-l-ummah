import { Link, useLocation } from 'react-router-dom';
import { getRelatedSections } from '../constants/sections';

const RelatedSections = () => {
  const location = useLocation();
  const relatedSections = getRelatedSections(location.pathname);

  if (!relatedSections.length) {
    return null;
  }

  return (
    <section className="related-sections rounded-4 shadow-sm p-4 p-md-5 mt-5">
      <div className="d-flex align-items-center gap-2 mb-4">
        <span className="topic-icon flex-shrink-0">
          <i className="bi bi-signpost-2" aria-hidden="true" />
        </span>
        <div>
          <h2 className="h4 fw-bold text-emerald mb-1">Связанные разделы</h2>
          <p className="text-muted mb-0">
            Продолжите чтение через соседние эпохи и регионы исламской истории.
          </p>
        </div>
      </div>

      <div className="row g-3">
        {relatedSections.map((section) => (
          <div className="col-lg-4 col-md-6" key={section.to}>
            <Link
              to={section.to}
              className="related-sections-link d-block h-100 text-decoration-none rounded-4 p-3"
            >
              <div className="d-flex align-items-start gap-3">
                <span className="related-sections-icon flex-shrink-0">
                  <i className={`bi ${section.icon}`} aria-hidden="true" />
                </span>
                <div>
                  <div className="section-period-badge mb-2">{section.period}</div>
                  <h3 className="h6 fw-bold text-emerald mb-2">{section.title}</h3>
                  <p className="text-muted small mb-0 lh-base">{section.hint}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedSections;

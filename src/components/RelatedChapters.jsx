import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getRelatedChapters, getChapterByPath } from '../constants/sections';
import { useChapterTranslation } from '../hooks/useChapterTranslation';

const RelatedChapterLink = ({ item, parentChapterId }) => {
  const { t } = useTranslation();
  const chapter = { id: item.id };
  const { title, period } = useChapterTranslation(chapter);

  return (
    <div className="col-lg-4 col-md-6">
      <Link
        to={item.to}
        className="related-chapters-link d-block h-100 text-decoration-none rounded-4 p-3"
      >
        <div className="d-flex align-items-start gap-3">
          <span className="related-chapters-icon flex-shrink-0">
            <i className={`bi ${item.icon}`} aria-hidden="true" />
          </span>
          <div>
            <div className="section-period-badge mb-2">{period}</div>
            <h3 className="h6 fw-bold text-emerald mb-2">{title}</h3>
            <p className="text-muted small mb-0 lh-base">
              {t(`chapters.${parentChapterId}.related.${item.hintKey}`)}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

const RelatedChapters = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const currentChapter = getChapterByPath(location.pathname);
  const relatedChapters = getRelatedChapters(location.pathname);

  if (!relatedChapters.length || !currentChapter) {
    return null;
  }

  return (
    <section
      className="related-chapters rounded-4 shadow-sm p-4 p-md-5 mt-5"
      aria-label={t('common.relatedChaptersAria')}
    >
      <div className="d-flex align-items-center gap-2 mb-4">
        <span className="topic-icon flex-shrink-0">
          <i className="bi bi-signpost-2" aria-hidden="true" />
        </span>
        <div>
          <h2 className="h4 fw-bold text-emerald mb-1">{t('common.relatedChapters')}</h2>
          <p className="text-muted mb-0">{t('common.relatedChaptersHint')}</p>
        </div>
      </div>

      <div className="row g-3">
        {relatedChapters.map((item) => (
          <RelatedChapterLink
            key={item.to}
            item={item}
            parentChapterId={currentChapter.id}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedChapters;

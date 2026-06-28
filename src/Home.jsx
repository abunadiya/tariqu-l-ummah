import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SiteLayout from './components/SiteLayout';
import HistoricalMap from './components/HistoricalMap';
import { PATH_CHAPTERS, getRelatedChapters } from './constants/sections';
import { useChapterTranslation } from './hooks/useChapterTranslation';

const chronologyIds = ['sahabah', 'righteous', 'omayyads', 'abbasids'];

const ChapterCard = ({ chapter }) => {
  const { t } = useTranslation();
  const { title, period, description } = useChapterTranslation(chapter);
  const relatedChapters = getRelatedChapters(chapter.to).slice(0, 3);

  return (
    <div className="col-md-6 col-lg-4" id={`chapter-${chapter.id}`}>
      <div className={`card h-100 path-card shadow-sm ${chapter.featured ? 'path-card--featured' : ''}`}>
        <div className="card-body d-flex flex-column p-4">
          <div className="card-icon-wrap">
            <i className={`bi ${chapter.icon}`} aria-hidden="true" />
          </div>
          <div className="section-period-badge mb-3">{period}</div>
          <h3 className="card-title fw-bold mb-2">{title}</h3>
          <p className="card-text text-muted small flex-grow-1 lh-base">{description}</p>
          {relatedChapters.length > 0 && (
            <div className="d-flex flex-wrap gap-2 mt-1">
              {relatedChapters.map((related) => (
                <Link
                  key={related.to}
                  to={related.to}
                  className="related-link-chip text-decoration-none"
                >
                  {t(`chapters.${related.id}.title`)}
                </Link>
              ))}
            </div>
          )}
          <Link to={chapter.to} className="btn btn-chapter-link btn-sm mt-3 align-self-start">
            {t('common.exploreEpoch')}
            <i className="bi bi-arrow-right ms-2 arrow-inline" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const ChronologyCard = ({ chapter }) => {
  const { title, period, description } = useChapterTranslation(chapter);

  return (
    <div className="col-lg-3 col-md-6">
      <Link
        to={chapter.to}
        className="chrono-era-card d-block h-100 rounded-4 p-4 text-decoration-none"
      >
        <div className="card-icon-wrap mb-3">
          <i className={`bi ${chapter.icon}`} aria-hidden="true" />
        </div>
        <div className="section-period-badge mb-3">{period}</div>
        <h4 className="h5 fw-bold text-emerald mb-2">{title}</h4>
        <p className="text-muted mb-0 lh-base">{description}</p>
      </Link>
    </div>
  );
};

const Home = () => {
  const { t } = useTranslation();

  const chronologyChapters = chronologyIds
    .map((id) => PATH_CHAPTERS.find((chapter) => chapter.id === id))
    .filter(Boolean);

  return (
    <SiteLayout>
      <header className="home-hero py-5 text-center">
        <div className="container py-4 hero-inner">
          <span className="hero-badge">{t('site.heroBadge')}</span>
          <h1>{t('site.title')}</h1>
          <p className="hero-lead">{t('site.subtitle')}</p>
        </div>
      </header>

      <HistoricalMap />

      <main className="container py-5">
        <div className="text-center mb-5">
          <h2 className="section-intro fw-bold mb-2 pb-2 border-bottom border-emerald-subtle d-inline-block">
            {t('home.milestonesTitle')}
          </h2>
          <p className="text-muted mt-3 mx-auto max-width-600">{t('home.milestonesIntro')}</p>
        </div>

        <div className="row g-4 mb-5">
          {PATH_CHAPTERS.map((chapter) => (
            <ChapterCard key={chapter.to} chapter={chapter} />
          ))}
        </div>

        <section className="chrono-timeline rounded-4 p-4 p-md-5 shadow-sm mb-5">
          <div className="text-center mb-4">
            <h3 className="fw-bold text-emerald mb-2">{t('home.chronoTitle')}</h3>
            <p className="text-muted mb-0 mx-auto max-width-600">{t('home.chronoIntro')}</p>
          </div>

          <div className="row g-3">
            {chronologyChapters.map((chapter) => (
              <ChronologyCard key={chapter.id} chapter={chapter} />
            ))}
          </div>
        </section>

        <section className="methodology-block rounded-3 p-4 p-md-5 shadow-sm">
          <h3 className="fw-bold text-emerald mb-3">
            <i className="bi bi-book me-2" aria-hidden="true" />
            {t('home.methodologyTitle')}
          </h3>
          <p className="text-muted mb-3 lh-lg">{t('home.methodologyBody')}</p>
          <ul className="text-muted mb-0 lh-lg methodology-sources">
            <li>{t('home.sources.tabari')}</li>
            <li>{t('home.sources.ibnKathir')}</li>
            <li>{t('home.sources.ibnAthir')}</li>
            <li>{t('home.sources.dhahabi')}</li>
          </ul>
        </section>
      </main>
    </SiteLayout>
  );
};

export default Home;

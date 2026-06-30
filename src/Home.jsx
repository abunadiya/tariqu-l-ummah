import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
  const prefaceParagraphs = t('home.authorPreface.paragraphs', { returnObjects: true });
  const prefaceList = Array.isArray(prefaceParagraphs) ? prefaceParagraphs : [];
  const disclaimerParagraphs = t('home.authorPreface.disclaimer.paragraphs', { returnObjects: true });
  const disclaimerList = Array.isArray(disclaimerParagraphs) ? disclaimerParagraphs : [];

  const chronologyChapters = chronologyIds
    .map((id) => PATH_CHAPTERS.find((chapter) => chapter.id === id))
    .filter(Boolean);

  return (
    <>
      <header className="home-hero py-5 text-center">
        <div className="container py-4 hero-inner">
          <span className="hero-badge">{t('site.heroBadge')}</span>
          <h1>{t('site.title')}</h1>
          <p className="hero-lead">{t('site.subtitle')}</p>
        </div>
      </header>

      <div className="container py-5">
        <div className="author-preface-accordion accordion mb-5 mx-auto" id="authorPrefaceAccordion">
          <div className="accordion-item author-preface-block border-0 rounded-4 shadow-sm overflow-hidden">
            <h2 className="accordion-header" id="authorPrefaceHeading">
              <button
                className="accordion-button collapsed author-preface-toggle fw-semibold text-emerald"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#authorPrefaceCollapse"
                aria-expanded="false"
                aria-controls="authorPrefaceCollapse"
              >
                <i className="bi bi-journal-text me-2 flex-shrink-0" aria-hidden="true" />
                {t('home.authorPreface.toggleLabel')}
              </button>
            </h2>
            <div
              id="authorPrefaceCollapse"
              className="accordion-collapse collapse"
              aria-labelledby="authorPrefaceHeading"
              data-bs-parent="#authorPrefaceAccordion"
            >
              <div className="accordion-body p-4 p-md-5">
                <div className="author-preface-header d-flex align-items-start gap-3 mb-4 pb-3 border-bottom border-emerald-subtle">
                  <span className="author-preface-icon flex-shrink-0" aria-hidden="true">
                    <i className="bi bi-feather" />
                  </span>
                  <div>
                    <p className="h4 fw-bold text-emerald mb-0 lh-base">
                      {t('home.authorPreface.title')}
                    </p>
                  </div>
                </div>
                <div className="author-preface-body">
                  {prefaceList.map((paragraph, index) => (
                    <p
                      key={index}
                      className={`text-muted lh-lg ${index === prefaceList.length - 1 ? 'mb-0' : 'mb-4'}`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <aside
                  className="author-preface-disclaimer alert alert-secondary border-0 mt-4 mt-md-5 mb-0"
                  aria-labelledby="author-preface-disclaimer-title"
                >
                  <h3 id="author-preface-disclaimer-title" className="h6 fw-bold text-secondary mb-3">
                    {t('home.authorPreface.disclaimer.title')}
                  </h3>
                  {disclaimerList.map((paragraph, index) => (
                    <p key={index} className="small text-muted lh-lg mb-3">
                      {paragraph}
                    </p>
                  ))}
                  <p className="small text-muted lh-lg mb-3">
                    {t('home.authorPreface.disclaimer.contactBefore')}
                    <a
                      href={t('footer.telegramUrl')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="alert-link"
                    >
                      {t('home.authorPreface.disclaimer.contactLink')}
                    </a>
                    {t('home.authorPreface.disclaimer.contactAfter')}
                  </p>
                  <p className="author-preface-closing mb-0 text-center fs-6" lang="ar" dir="rtl">
                    {t('home.authorPreface.disclaimer.closing')}
                  </p>
                </aside>
              </div>
            </div>
          </div>
        </div>

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
      </div>
    </>
  );
};

export default Home;

import { Link } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import DecorativeSilhouette from './components/DecorativeSilhouette';
import { ENCYCLOPEDIA_SECTIONS, getRelatedSections } from './constants/sections';

const chronologyIds = ['righteous', 'omayyads', 'abbasids'];

const chronologySections = chronologyIds
  .map((id) => ENCYCLOPEDIA_SECTIONS.find((section) => section.id === id))
  .filter(Boolean);

const Home = () => {
  return (
    <SiteLayout>
      <header className="home-hero py-5 text-center">
        <DecorativeSilhouette variant="traveler" className="home-hero-silhouette home-hero-silhouette--left" />
        <DecorativeSilhouette variant="warrior" className="home-hero-silhouette home-hero-silhouette--right" />
        <div className="container py-4 hero-inner">
          <span className="hero-badge">طريق الأمة · Tariqu-l-ummah</span>
          <h1>Энциклопедия исламского мира</h1>
          <p className="hero-lead">
            Сквозная хронология мусульманской цивилизации с опорой на классических суннитских
            историков: ат-Табари, Ибн Касира, Ибн аль-Асира и имама аз-Захаби.
          </p>
        </div>
      </header>

      <main className="container py-5">
        <div className="text-center mb-5">
          <h2 className="section-intro fw-bold mb-2 pb-2 border-bottom border-emerald-subtle d-inline-block">
            Разделы энциклопедии
          </h2>
          <p className="text-muted mt-3 mx-auto max-width-600">
            Выберите эпоху или регион для углублённого изучения. Каждый раздел содержит
            академический текст, двойные даты и верификацию первоисточников.
          </p>
        </div>

        <div className="row g-4 mb-5">
          {ENCYCLOPEDIA_SECTIONS.map((section) => {
            const relatedSections = getRelatedSections(section.to).slice(0, 3);

            return (
            <div className="col-md-6 col-lg-4" key={section.to}>
              <div className="card h-100 encyclopedia-card shadow-sm">
                <div className="card-body d-flex flex-column p-4">
                  <div className="card-icon-wrap">
                    <i className={`bi ${section.icon}`} aria-hidden="true" />
                  </div>
                  <div className="section-period-badge mb-3">{section.period}</div>
                  <h3 className="card-title fw-bold mb-2">{section.title}</h3>
                  <p className="card-text text-muted small flex-grow-1 lh-base">
                    {section.description}
                  </p>
                  {relatedSections.length > 0 && (
                    <div className="d-flex flex-wrap gap-2 mt-1">
                      {relatedSections.map((related) => (
                        <Link
                          key={related.to}
                          to={related.to}
                          className="related-link-chip text-decoration-none"
                        >
                          {related.title}
                        </Link>
                      ))}
                    </div>
                  )}
                  <Link to={section.to} className="btn btn-section-link btn-sm mt-3 align-self-start">
                    Перейти к разделу
                    <i className="bi bi-arrow-right ms-2" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
            );
          })}
        </div>

        <section className="chrono-timeline rounded-4 p-4 p-md-5 shadow-sm mb-5">
          <div className="text-center mb-4">
            <h3 className="fw-bold text-emerald mb-2">Хронологическая линия</h3>
            <p className="text-muted mb-0 mx-auto max-width-600">
              Три ключевые эпохи задают политический ритм всей энциклопедии: становление, расширение
              и зрелость исламского мира.
            </p>
          </div>

          <div className="row g-3">
            {chronologySections.map((section) => (
              <div className="col-lg-4" key={section.id}>
                <Link
                  to={section.to}
                  className="chrono-era-card d-block h-100 rounded-4 p-4 text-decoration-none"
                >
                  <div className="card-icon-wrap mb-3">
                    <i className={`bi ${section.icon}`} aria-hidden="true" />
                  </div>
                  <div className="section-period-badge mb-3">{section.period}</div>
                  <h4 className="h5 fw-bold text-emerald mb-2">{section.title}</h4>
                  <p className="text-muted mb-0 lh-base">{section.description}</p>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="methodology-block rounded-3 p-4 p-md-5 shadow-sm">
          <h3 className="fw-bold text-emerald mb-3">
            <i className="bi bi-book me-2" aria-hidden="true" />
            О методологии проекта
          </h3>
          <p className="text-muted mb-3 lh-lg">
            Проект <strong>Tariqu-l-ummah</strong> стремится к очищению исторических хроник от
            искажений и опирается на труды признанных суннитских историков. Политические решения
            прошлых эпох оцениваются через призму чистой акыды и шариатских фетв учёных своего
            времени.
          </p>
          <ul className="text-muted mb-0 lh-lg methodology-sources">
            <li>имам ат-Табари — «Тарих» (История пророков и царей)</li>
            <li>Ибн Касир — «Аль-Бидая ва-н-Нихая»</li>
            <li>Ибн аль-Асир — «Аль-Камиль фи-т-тарих»</li>
            <li>
              имам аз-Захаби — «Тарих аль-Ислам» и «Сияр а&apos;лям ан-нубала»
            </li>
          </ul>
          <p className="text-muted small mt-4 mb-0 lh-base visual-ethics-note">
            <i className="bi bi-shield-check me-1 text-emerald" aria-hidden="true" />
            Визуальная этика: допускаются исторические силуэты (воины, пустынные путники) только
            с полностью закрытым тканью лицом, без прорисовки глаз и черт. Изображения пророков
            исключены.
          </p>
        </section>
      </main>
    </SiteLayout>
  );
};

export default Home;

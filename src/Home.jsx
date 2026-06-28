import { Link } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import { PATH_CHAPTERS, getRelatedChapters } from './constants/sections';

const chronologyIds = ['righteous', 'omayyads', 'abbasids'];

const chronologyChapters = chronologyIds
  .map((id) => PATH_CHAPTERS.find((chapter) => chapter.id === id))
  .filter(Boolean);

const Home = () => {
  return (
    <SiteLayout>
      <header className="home-hero py-5 text-center">
        <div className="container py-4 hero-inner">
          <span className="hero-badge">طريق الأمة · Tariqu-l-ummah</span>
          <h1>Путь Уммы: Наследие и испытания</h1>
          <p className="hero-lead">
            Хроника мусульманской цивилизации: от истоков к осмыслению уроков прошлого, с опорой
            на труды классических суннитских историков.
          </p>
        </div>
      </header>

      <main className="container py-5">
        <div className="text-center mb-5">
          <h2 className="section-intro fw-bold mb-2 pb-2 border-bottom border-emerald-subtle d-inline-block">
            Основные вехи пути Уммы
          </h2>
          <p className="text-muted mt-3 mx-auto max-width-600">
            Выберите эпоху или регион для углублённого изучения. Каждая глава содержит
            академический текст, двойные даты и верификацию первоисточников.
          </p>
        </div>

        <div className="row g-4 mb-5">
          {PATH_CHAPTERS.map((chapter) => {
            const relatedChapters = getRelatedChapters(chapter.to).slice(0, 3);

            return (
            <div className="col-md-6 col-lg-4" key={chapter.to}>
              <div className="card h-100 path-card shadow-sm">
                <div className="card-body d-flex flex-column p-4">
                  <div className="card-icon-wrap">
                    <i className={`bi ${chapter.icon}`} aria-hidden="true" />
                  </div>
                  <div className="section-period-badge mb-3">{chapter.period}</div>
                  <h3 className="card-title fw-bold mb-2">{chapter.title}</h3>
                  <p className="card-text text-muted small flex-grow-1 lh-base">
                    {chapter.description}
                  </p>
                  {relatedChapters.length > 0 && (
                    <div className="d-flex flex-wrap gap-2 mt-1">
                      {relatedChapters.map((related) => (
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
                  <Link to={chapter.to} className="btn btn-chapter-link btn-sm mt-3 align-self-start">
                    К исследованию эпохи
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
              Три ключевые эпохи задают политический ритм всего пути Уммы: становление, расширение
              и зрелость исламского мира.
            </p>
          </div>

          <div className="row g-3">
            {chronologyChapters.map((chapter) => (
              <div className="col-lg-4" key={chapter.id}>
                <Link
                  to={chapter.to}
                  className="chrono-era-card d-block h-100 rounded-4 p-4 text-decoration-none"
                >
                  <div className="card-icon-wrap mb-3">
                    <i className={`bi ${chapter.icon}`} aria-hidden="true" />
                  </div>
                  <div className="section-period-badge mb-3">{chapter.period}</div>
                  <h4 className="h5 fw-bold text-emerald mb-2">{chapter.title}</h4>
                  <p className="text-muted mb-0 lh-base">{chapter.description}</p>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="methodology-block rounded-3 p-4 p-md-5 shadow-sm">
          <h3 className="fw-bold text-emerald mb-3">
            <i className="bi bi-book me-2" aria-hidden="true" />
            О методологии «Пути Уммы»
          </h3>
          <p className="text-muted mb-3 lh-lg">
            <strong>Путь Уммы</strong> (<strong>Tariqu-l-ummah</strong>) — это хроника мусульманской
            цивилизации, стремящаяся к очищению исторических повествований от искажений и опирающаяся
            на труды признанных суннитских историков. Политические решения прошлых эпох оцениваются
            через призму чистой акыды и шариатских фетв учёных своего времени.
          </p>
          <ul className="text-muted mb-0 lh-lg methodology-sources">
            <li>имам ат-Табари — «Тарих» (История пророков и царей)</li>
            <li>Ибн Касир — «Аль-Бидая ва-н-Нихая»</li>
            <li>Ибн аль-Асир — «Аль-Камиль фи-т-тарих»</li>
            <li>
              имам аз-Захаби — «Тарих аль-Ислам» и «Сияр а&apos;лям ан-нубала»
            </li>
          </ul>
        </section>
      </main>
    </SiteLayout>
  );
};

export default Home;

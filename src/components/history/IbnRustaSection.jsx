import { useTranslation } from 'react-i18next';

const HistoryCard = ({ title, body }) => (
  <div className="col-12 col-md-6 col-xl-4">
    <article className="card history-topic-card h-100 shadow-sm border-0">
      <div className="card-body p-4">
        <h4 className="card-title history-topic-card-title h6 fw-bold mb-3">{title}</h4>
        <p className="card-text text-muted small mb-0 lh-lg">{body}</p>
      </div>
    </article>
  </div>
);

const IbnRustaSection = ({ pageKey, topicId }) => {
  const { t } = useTranslation();
  const base = `pages.${pageKey}.topics.${topicId}`;

  const intro = t(`${base}.intro`, { returnObjects: true });
  const introList = Array.isArray(intro) ? intro : [];
  const geographyCards = t(`${base}.geographyCards`, { returnObjects: true });
  const sarir = t(`${base}.sarir`, { returnObjects: true });
  const kaytag = t(`${base}.kaytag`, { returnObjects: true });
  const derbentFortress = t(`${base}.derbentFortress`, { returnObjects: true });

  return (
    <div className="ibn-rusta-section">
      <header className="mb-4">
        <h3 className="history-section-heading h5 fw-bold text-emerald mb-3">
          {t(`${base}.heading`)}
        </h3>
        {introList.map((paragraph) => (
          <p key={paragraph.slice(0, 48)} className="mb-3">
            {paragraph}
          </p>
        ))}
      </header>

      <div className="row g-3 g-md-4 mb-4 mb-md-5">
        {Array.isArray(geographyCards) &&
          geographyCards.map((card) => (
            <HistoryCard key={card.title} title={card.title} body={card.body} />
          ))}
      </div>

      <section className="mb-4 mb-md-5">
        <h3 className="history-section-heading h5 fw-bold text-emerald mb-3">
          {sarir.title}
        </h3>
        <p className="mb-4">{sarir.intro}</p>
        <div className="row g-3 g-md-4">
          {Array.isArray(sarir.cards) &&
            sarir.cards.map((card) => (
              <HistoryCard key={card.title} title={card.title} body={card.body} />
            ))}
        </div>
      </section>

      <section className="mb-4 mb-md-5">
        <h3 className="history-section-heading h5 fw-bold text-emerald mb-3">
          {kaytag.title}
        </h3>
        {Array.isArray(kaytag.paragraphs) &&
          kaytag.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="mb-3">
              {paragraph}
            </p>
          ))}
        <aside
          className="alert history-theology-note border-0 mt-4 mb-0"
          role="note"
        >
          <div className="d-flex gap-3 align-items-start">
            <span className="history-note-icon flex-shrink-0" aria-hidden="true">
              <i className="bi bi-pin-angle-fill" />
            </span>
            <div>
              <h4 className="alert-heading h6 fw-bold mb-2">
                {kaytag.theologicalNote?.title}
              </h4>
              <p className="mb-0 small lh-lg">{kaytag.theologicalNote?.body}</p>
            </div>
          </div>
        </aside>
      </section>

      <section>
        <h3 className="history-section-heading h5 fw-bold text-emerald mb-3">
          {derbentFortress.title}
        </h3>
        <blockquote className="history-blockquote border-start border-4 border-emerald ps-3 ps-md-4 py-2 my-4 bg-white rounded-end">
          <p className="mb-0 fst-italic lh-lg">{derbentFortress.quote}</p>
        </blockquote>
        {Array.isArray(derbentFortress.paragraphs) &&
          derbentFortress.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="mb-3">
              {paragraph}
            </p>
          ))}
      </section>
    </div>
  );
};

export default IbnRustaSection;

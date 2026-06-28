import PageShell from '../components/PageShell';
import AccordionTopic from '../components/AccordionTopic';
import SourceVerification from '../components/SourceVerification';
import { SECTION_ICONS as I } from '../constants/sectionIcons';
import { useTranslation } from 'react-i18next';

const CALIPHS = ['abuBakr', 'umar', 'uthman', 'ali'];
const MUKHIRS = [
  'abuHurayra',
  'ibnUmar',
  'anasIbnMalik',
  'aisha',
  'ibnAbbas',
  'jabir',
  'abuSaeed',
];

const Sahabah = () => {
  const { t } = useTranslation();

  return (
    <PageShell
      title={t('sahabahPage.title')}
      subtitle={t('sahabahPage.subtitle')}
    >
      <p className="text-muted lh-lg mb-4">{t('sahabahPage.intro')}</p>

      <h2 className="h5 fw-bold text-emerald mb-3">{t('sahabahPage.caliphsHeading')}</h2>

      <div className="accordion path-accordion shadow-sm mb-5" id="sahabahAccordion">
        {CALIPHS.map((caliphId, index) => {
          const base = `sahabahPage.caliphs.${caliphId}`;
          const paragraphs = t(`${base}.paragraphs`, { returnObjects: true });
          const paragraphList = Array.isArray(paragraphs) ? paragraphs : [];

          return (
            <AccordionTopic
              key={caliphId}
              id={`sahabah-${caliphId}`}
              parentId="sahabahAccordion"
              icon={I.shield}
              title={t(`${base}.title`)}
              defaultOpen={index === 0}
            >
              {paragraphList.map((para, paraIndex) => (
                <p key={paraIndex} className={paraIndex === paragraphList.length - 1 ? 'mb-0' : undefined}>
                  {para}
                </p>
              ))}
              {t(`${base}.source`, { defaultValue: '' }) && (
                <SourceVerification
                  waqfeyaId="3812"
                  buttonClass="btn-source-emerald"
                  sourceText={t(`${base}.source`)}
                />
              )}
            </AccordionTopic>
          );
        })}
      </div>

      <section className="sahaba-mukhirs rounded-4 shadow-sm p-4 p-md-5 mb-5">
        <div className="d-flex align-items-start gap-3 mb-4">
          <span className="sahaba-mukhirs-icon flex-shrink-0" aria-hidden="true">
            <i className="bi bi-journal-richtext" />
          </span>
          <div>
            <h2 className="h5 fw-bold text-emerald mb-2">{t('sahabahPage.mukhirs.heading')}</h2>
            <p className="text-muted mb-0 lh-lg">{t('sahabahPage.mukhirs.intro')}</p>
          </div>
        </div>

        <div className="row g-3 g-md-4">
          {MUKHIRS.map((transmitterId) => {
            const base = `sahabahPage.mukhirs.transmitters.${transmitterId}`;
            const paragraphs = t(`${base}.paragraphs`, { returnObjects: true });
            const paragraphList = Array.isArray(paragraphs) ? paragraphs : [];

            return (
              <div key={transmitterId} className="col-md-6">
                <article className="sahaba-mukhirs-card h-100 p-4 rounded-3">
                  <h3 className="h6 fw-bold text-emerald mb-2">{t(`${base}.title`)}</h3>
                  {paragraphList.map((para, paraIndex) => (
                    <p key={paraIndex} className="text-muted small mb-0 lh-lg">
                      {para}
                    </p>
                  ))}
                </article>
              </div>
            );
          })}
        </div>
      </section>

      <section className="p-4 p-md-5 rounded-4 shadow-sm bg-white border border-emerald-subtle">
        <h2 className="h5 fw-bold text-emerald mb-3">{t('sahabahPage.otherSahaba.title')}</h2>
        <p className="text-muted mb-0 lh-lg">{t('sahabahPage.otherSahaba.placeholder')}</p>
      </section>
    </PageShell>
  );
};

export default Sahabah;

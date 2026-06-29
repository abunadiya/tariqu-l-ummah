import PageShell from '../components/PageShell';
import AccordionTopic from '../components/AccordionTopic';
import { SECTION_ICONS as I } from '../constants/sectionIcons';
import { useTranslation } from 'react-i18next';
import {
  Paragraphs,
  ScholarBlockquote,
  QuranQuote,
  HadithQuote,
  SectionHeading,
} from '../components/sahabah/SahabahQuotes';

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

const asArray = (value) => (Array.isArray(value) ? value : []);

const Sahabah = () => {
  const { t } = useTranslation();
  const base = 'sahabahPage.content';

  return (
    <PageShell
      title={t('sahabahPage.title')}
      subtitle={t('sahabahPage.subtitle')}
    >
      <article className="sahaba-article">
        <aside className="sahaba-disclaimer small text-muted border rounded-3 p-3 p-md-4 mb-4">
          <p className="mb-0 lh-lg">{t('sahabahPage.disclaimer.text')}</p>
        </aside>

        <p className="lead text-muted lh-lg mb-5">{t(`${base}.intro`)}</p>

        <section className="card sahaba-definition-card shadow-sm border-0 mb-5">
          <div className="card-body p-4 p-md-5">
            <h2 className="h5 fw-bold text-emerald mb-3">
              {t(`${base}.definition.title`)}
            </h2>
            <Paragraphs
              items={asArray(t(`${base}.definition.paragraphs`, { returnObjects: true }))}
            />
          </div>
        </section>

        <section>
          <SectionHeading>{t(`${base}.companionship.title`)}</SectionHeading>
          <Paragraphs
            items={asArray(t(`${base}.companionship.paragraphs`, { returnObjects: true }))}
          />
          <QuranQuote
            text={t(`${base}.companionship.ayah.text`)}
            reference={t(`${base}.companionship.ayah.reference`)}
          />
          <Paragraphs
            items={asArray(t(`${base}.companionship.afterAyah`, { returnObjects: true }))}
          />
        </section>

        <section>
          <SectionHeading>{t(`${base}.loveFaith.title`)}</SectionHeading>
          <Paragraphs
            items={asArray(t(`${base}.loveFaith.intro`, { returnObjects: true }))}
          />
          <HadithQuote
            text={t(`${base}.loveFaith.hadithAnas.text`)}
            source={t(`${base}.loveFaith.hadithAnas.source`)}
          />
          <Paragraphs
            items={asArray(t(`${base}.loveFaith.beforeVictory`, { returnObjects: true }))}
          />
          <QuranQuote
            arabic={t(`${base}.loveFaith.victoryAyah.arabic`)}
            text={t(`${base}.loveFaith.victoryAyah.text`)}
            reference={t(`${base}.loveFaith.victoryAyah.reference`)}
          />
          <Paragraphs
            items={asArray(t(`${base}.loveFaith.afterVictory`, { returnObjects: true }))}
          />
          <HadithQuote
            text={t(`${base}.loveFaith.hadithIbnMasud.text`)}
            source={t(`${base}.loveFaith.hadithIbnMasud.source`)}
          />
          <Paragraphs
            items={asArray(t(`${base}.loveFaith.beforeHour`, { returnObjects: true }))}
          />
          <HadithQuote
            text={t(`${base}.loveFaith.hadithHour.text`)}
            source={t(`${base}.loveFaith.hadithHour.source`)}
          />
          <Paragraphs
            items={asArray(t(`${base}.loveFaith.salafParagraphs`, { returnObjects: true }))}
          />
          <p className="small text-muted mb-3">{t(`${base}.loveFaith.salafSource`)}</p>
          {asArray(t(`${base}.loveFaith.scholars`, { returnObjects: true })).map((item, index) => (
            <ScholarBlockquote key={index} text={item.text} source={item.source} />
          ))}
        </section>

        <section>
          {asArray(t(`${base}.scholars`, { returnObjects: true })).map((item, index) => (
            <ScholarBlockquote key={index} text={item.text} source={item.source} />
          ))}
        </section>

        <section>
          <SectionHeading>{t(`${base}.bestGeneration.title`)}</SectionHeading>
          <Paragraphs
            items={asArray(t(`${base}.bestGeneration.paragraphs`, { returnObjects: true }))}
          />
        </section>

        <section>
          <SectionHeading>{t(`${base}.merits.title`)}</SectionHeading>
          <Paragraphs items={asArray(t(`${base}.merits.intro`, { returnObjects: true }))} />
          {asArray(t(`${base}.merits.ayat`, { returnObjects: true })).map((item, index) => (
            <QuranQuote key={index} text={item.text} reference={item.reference} />
          ))}
          {asArray(t(`${base}.merits.scholars`, { returnObjects: true })).map((item, index) => (
            <ScholarBlockquote key={index} text={item.text} source={item.source} />
          ))}
        </section>

        <section className="sahaba-prohibition rounded-4 p-4 p-md-5 mt-5 bg-white border border-emerald-subtle shadow-sm">
          <SectionHeading>{t(`${base}.prohibition.title`)}</SectionHeading>
          <HadithQuote
            text={t(`${base}.prohibition.hadith.text`)}
            source={t(`${base}.prohibition.hadith.source`)}
          />
        </section>

        <footer className="sahaba-source-note text-center mt-5 pt-4 border-top border-emerald-subtle">
          <p className="small text-muted mb-0">{t(`${base}.sourceAttribution`)}</p>
        </footer>

        <section className="sahaba-biographies mt-5 pt-4 border-top border-emerald-subtle">
          <SectionHeading>{t('sahabahPage.biographiesHeading')}</SectionHeading>
          <p className="text-muted lh-lg mb-4">{t('sahabahPage.biographiesIntro')}</p>

          <h3 className="h5 fw-bold text-emerald mb-3">{t('sahabahPage.caliphsHeading')}</h3>
          <div className="accordion path-accordion shadow-sm mb-5" id="sahabahAccordion">
            {CALIPHS.map((caliphId, index) => {
              const caliphBase = `sahabahPage.caliphs.${caliphId}`;
              const paragraphs = t(`${caliphBase}.paragraphs`, { returnObjects: true });
              const paragraphList = asArray(paragraphs);

              return (
                <AccordionTopic
                  key={caliphId}
                  id={`sahabah-${caliphId}`}
                  parentId="sahabahAccordion"
                  icon={I.shield}
                  title={t(`${caliphBase}.title`)}
                  defaultOpen={index === 0}
                >
                  {paragraphList.map((para, paraIndex) => (
                    <p key={paraIndex} className={paraIndex === paragraphList.length - 1 ? 'mb-0' : undefined}>
                      {para}
                    </p>
                  ))}
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
                <h3 className="h5 fw-bold text-emerald mb-2">{t('sahabahPage.mukhirs.heading')}</h3>
                <p className="text-muted mb-0 lh-lg">{t('sahabahPage.mukhirs.intro')}</p>
              </div>
            </div>

            <div className="row g-3 g-md-4">
              {MUKHIRS.map((transmitterId) => {
                const transmitterBase = `sahabahPage.mukhirs.transmitters.${transmitterId}`;
                const paragraphs = t(`${transmitterBase}.paragraphs`, { returnObjects: true });
                const paragraphList = asArray(paragraphs);

                return (
                  <div key={transmitterId} className="col-md-6">
                    <article className="sahaba-mukhirs-card h-100 p-4 rounded-3">
                      <h4 className="h6 fw-bold text-emerald mb-2">{t(`${transmitterBase}.title`)}</h4>
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
            <h3 className="h5 fw-bold text-emerald mb-3">{t('sahabahPage.otherSahaba.title')}</h3>
            <p className="text-muted mb-0 lh-lg">{t('sahabahPage.otherSahaba.placeholder')}</p>
          </section>
        </section>
      </article>
    </PageShell>
  );
};

export default Sahabah;

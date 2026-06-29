import PageShell from '../components/PageShell';
import { useTranslation } from 'react-i18next';
import {
  Paragraphs,
  ScholarBlockquote,
  QuranQuote,
  HadithQuote,
  SectionHeading,
} from '../components/sahabah/SahabahQuotes';

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
      </article>
    </PageShell>
  );
};

export default Sahabah;

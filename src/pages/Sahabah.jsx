import PageShell from '../components/PageShell';
import AccordionTopic from '../components/AccordionTopic';
import { SECTION_ICONS as I } from '../constants/sectionIcons';
import { useTranslation } from 'react-i18next';

const CALIPHS = ['abuBakr', 'umar', 'uthman', 'ali'];

const Sahabah = () => {
  const { t } = useTranslation();

  return (
    <PageShell
      title={t('sahabahPage.title')}
      subtitle={t('sahabahPage.subtitle')}
    >
      <p className="text-muted lh-lg mb-4">{t('sahabahPage.intro')}</p>

      <h2 className="h5 fw-bold text-emerald mb-3">{t('sahabahPage.caliphsHeading')}</h2>

      <div className="accordion path-accordion shadow-sm" id="sahabahAccordion">
        {CALIPHS.map((caliphId, index) => (
          <AccordionTopic
            key={caliphId}
            id={`sahabah-${caliphId}`}
            parentId="sahabahAccordion"
            icon={I.shield}
            title={t(`sahabahPage.caliphs.${caliphId}.title`)}
            defaultOpen={index === 0}
          >
            <p className="mb-0">{t(`sahabahPage.caliphs.${caliphId}.placeholder`)}</p>
          </AccordionTopic>
        ))}
      </div>

      <section className="mt-5 p-4 p-md-5 rounded-4 shadow-sm bg-white border border-emerald-subtle">
        <h2 className="h5 fw-bold text-emerald mb-3">{t('sahabahPage.otherSahaba.title')}</h2>
        <p className="text-muted mb-0 lh-lg">{t('sahabahPage.otherSahaba.placeholder')}</p>
      </section>
    </PageShell>
  );
};

export default Sahabah;

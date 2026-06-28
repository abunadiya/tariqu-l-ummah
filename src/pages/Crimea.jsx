import { useTranslation } from 'react-i18next';
import PageShell from '../components/PageShell';
import ChapterTopics from '../components/ChapterTopics';
import { CRIMEA_TOPICS } from '../constants/pageTopics';

const Crimea = () => {
  const { t } = useTranslation();
  const pageKey = 'crimea';

  return (
    <PageShell
      title={t(`pages.${pageKey}.title`)}
      subtitle={t(`pages.${pageKey}.subtitle`)}
      accent="var(--gold)"
    >
      <ChapterTopics
        pageKey={pageKey}
        topics={CRIMEA_TOPICS}
        parentId="crimeaAccordion"
      />
    </PageShell>
  );
};

export default Crimea;

import { useTranslation } from 'react-i18next';
import PageShell from '../components/PageShell';
import ChapterTopics from '../components/ChapterTopics';
import { ANDALUSIA_TOPICS } from '../constants/pageTopics';

const Andalusia = () => {
  const { t } = useTranslation();
  const pageKey = 'andalusia';

  return (
    <PageShell
      title={t(`pages.${pageKey}.title`)}
      subtitle={t(`pages.${pageKey}.subtitle`)}
      accent="#40916c"
    >
      <ChapterTopics
        pageKey={pageKey}
        topics={ANDALUSIA_TOPICS}
        parentId="andalusiaAccordion"
      />
    </PageShell>
  );
};

export default Andalusia;

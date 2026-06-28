import { useTranslation } from 'react-i18next';
import PageShell from '../components/PageShell';
import ChapterTopics from '../components/ChapterTopics';
import { CENTRAL_ASIA_TOPICS } from '../constants/pageTopics';

const CentralAsia = () => {
  const { t } = useTranslation();
  const pageKey = 'centralAsia';

  return (
    <PageShell
      title={t(`pages.${pageKey}.title`)}
      subtitle={t(`pages.${pageKey}.subtitle`)}
      accent="#2a9d8f"
    >
      <ChapterTopics
        pageKey={pageKey}
        topics={CENTRAL_ASIA_TOPICS}
        parentId="asiaAccordion"
      />
    </PageShell>
  );
};

export default CentralAsia;

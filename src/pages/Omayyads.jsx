import { useTranslation } from 'react-i18next';
import PageShell from '../components/PageShell';
import ChapterTopics from '../components/ChapterTopics';
import { OMAYYADS_TOPICS } from '../constants/pageTopics';

const Omayyads = () => {
  const { t } = useTranslation();
  const pageKey = 'omayyads';

  return (
    <PageShell
      title={t(`pages.${pageKey}.title`)}
      subtitle={t(`pages.${pageKey}.subtitle`)}
    >
      <ChapterTopics
        pageKey={pageKey}
        topics={OMAYYADS_TOPICS}
        parentId="omayyadAccordion"
      />
    </PageShell>
  );
};

export default Omayyads;

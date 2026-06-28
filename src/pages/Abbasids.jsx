import { useTranslation } from 'react-i18next';
import PageShell from '../components/PageShell';
import ChapterTopics from '../components/ChapterTopics';
import PageDecline from '../components/PageDecline';
import { ABBASIDS_TOPICS } from '../constants/pageTopics';

const Abbasids = () => {
  const { t } = useTranslation();
  const pageKey = 'abbasids';

  return (
    <PageShell
      title={t(`pages.${pageKey}.title`)}
      subtitle={t(`pages.${pageKey}.subtitle`)}
    >
      <ChapterTopics
        pageKey={pageKey}
        topics={ABBASIDS_TOPICS}
        parentId="abbasidAccordion"
      />
      <PageDecline pageKey={pageKey} waqfeyaId="3401" />
    </PageShell>
  );
};

export default Abbasids;

import { useTranslation } from 'react-i18next';
import PageShell from '../components/PageShell';
import ChapterTopics from '../components/ChapterTopics';
import PageDecline from '../components/PageDecline';
import { RIGHTEOUS_CALIPHATE_TOPICS } from '../constants/pageTopics';

const RighteousCaliphate = () => {
  const { t } = useTranslation();
  const pageKey = 'righteousCaliphate';

  return (
    <PageShell
      title={t(`pages.${pageKey}.title`)}
      subtitle={t(`pages.${pageKey}.subtitle`)}
    >
      <ChapterTopics
        pageKey={pageKey}
        topics={RIGHTEOUS_CALIPHATE_TOPICS}
        parentId="caliphateAccordion"
      />
    </PageShell>
  );
};

export default RighteousCaliphate;

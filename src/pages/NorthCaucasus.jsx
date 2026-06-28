import { useTranslation } from 'react-i18next';
import PageShell from '../components/PageShell';
import ChapterTopics from '../components/ChapterTopics';
import { NORTH_CAUCASUS_TOPICS } from '../constants/pageTopics';

const NorthCaucasus = () => {
  const { t } = useTranslation();
  const pageKey = 'northCaucasus';

  return (
    <PageShell
      title={t(`pages.${pageKey}.title`)}
      subtitle={t(`pages.${pageKey}.subtitle`)}
      accent="var(--emerald-light)"
    >
      <ChapterTopics
        pageKey={pageKey}
        topics={NORTH_CAUCASUS_TOPICS}
        parentId="caucasusAccordion"
      />
    </PageShell>
  );
};

export default NorthCaucasus;

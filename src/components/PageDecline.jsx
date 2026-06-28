import { useTranslation } from 'react-i18next';
import DeclineReflection from './DeclineReflection';

const PageDecline = ({ pageKey, waqfeyaId }) => {
  const { t } = useTranslation();
  const base = `pages.${pageKey}.decline`;
  const paragraphs = t(`${base}.paragraphs`, { returnObjects: true });
  const paragraphList = Array.isArray(paragraphs) ? paragraphs : [];

  if (!paragraphList.length) {
    return null;
  }

  return (
    <DeclineReflection
      title={t(`${base}.title`, { defaultValue: '' }) || undefined}
      waqfeyaId={waqfeyaId}
      sourceText={t(`${base}.source`, { defaultValue: '' }) || undefined}
    >
      {paragraphList.map((para, index) => (
        <p key={index}>{para}</p>
      ))}
    </DeclineReflection>
  );
};

export default PageDecline;

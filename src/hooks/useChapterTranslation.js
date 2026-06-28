import { useTranslation } from 'react-i18next';

export const useChapterTranslation = (chapter) => {
  const { t } = useTranslation();
  const base = `chapters.${chapter.id}`;

  return {
    title: t(`${base}.title`),
    period: t(`${base}.period`),
    description: t(`${base}.description`),
  };
};

export const useRelatedHint = (chapterId, relatedKey) => {
  const { t } = useTranslation();
  return t(`chapters.${chapterId}.related.${relatedKey}`);
};

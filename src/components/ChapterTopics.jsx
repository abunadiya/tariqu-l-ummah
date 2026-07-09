import { useTranslation } from 'react-i18next';
import AccordionTopic from './AccordionTopic';
import SourceVerification from './SourceVerification';
import IbnRustaSection from './history/IbnRustaSection';

const renderParagraph = (para, index) => {
  if (typeof para === 'object' && para !== null && para.html) {
    return (
      <p
        key={index}
        className={para.className}
        dangerouslySetInnerHTML={{ __html: para.html }}
      />
    );
  }

  return <p key={index}>{para}</p>;
};

const ChapterTopics = ({ pageKey, topics, parentId }) => {
  const { t } = useTranslation();

  return (
    <div className="accordion path-accordion shadow-sm" id={parentId}>
      {topics.map((topic, index) => {
        const base = `pages.${pageKey}.topics.${topic.id}`;
        const paragraphs = t(`${base}.paragraphs`, { returnObjects: true });
        const paragraphList = Array.isArray(paragraphs) ? paragraphs : [];

        return (
          <AccordionTopic
            key={topic.id}
            id={topic.accordionId}
            parentId={parentId}
            icon={topic.icon}
            title={t(`${base}.title`)}
            defaultOpen={topic.defaultOpen ?? index === 0}
          >
            {topic.variant === 'ibnRusta' ? (
              <IbnRustaSection pageKey={pageKey} topicId={topic.id} />
            ) : (
              paragraphList.map(renderParagraph)
            )}
            {topic.waqfeyaId && (
              <SourceVerification
                waqfeyaId={topic.waqfeyaId}
                buttonClass={topic.buttonClass ?? 'btn-source-emerald'}
                sourceText={t(`${base}.source`)}
              />
            )}
          </AccordionTopic>
        );
      })}
    </div>
  );
};

export default ChapterTopics;

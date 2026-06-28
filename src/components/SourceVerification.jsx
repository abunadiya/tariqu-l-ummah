import { useTranslation } from 'react-i18next';

const SourceVerification = ({ waqfeyaId, russianText, buttonClass = 'btn-source-arabic' }) => {
  const { t } = useTranslation();

  return (
    <div className="source-verification mt-4 p-3 p-md-4 rounded-3">
      <h6 className="fw-bold text-emerald mb-2 small text-uppercase tracking-wide">
        <i className="bi bi-patch-check me-2" aria-hidden="true" />
        {t('source.title')}
      </h6>
      <a
        href={`https://waqfeya.net/book.php?id=${waqfeyaId}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn btn-sm ${buttonClass} me-2 mb-2`}
      >
        <i className="bi bi-journal-bookmark me-1" aria-hidden="true" />
        {t('source.button')}
      </a>
      <span className="text-secondary small d-block mt-2 lh-base">
        <strong>{t('source.russianPrefix')}</strong> {russianText}
      </span>
    </div>
  );
};

export default SourceVerification;

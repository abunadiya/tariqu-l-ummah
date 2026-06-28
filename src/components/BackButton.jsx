import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const BackButton = ({ className = '' }) => {
  const { t } = useTranslation();

  return (
    <Link to="/" className={`btn btn-back-path btn-sm ${className}`.trim()}>
      <i className="bi bi-arrow-left me-2 arrow-inline" aria-hidden="true" />
      {t('common.backHome')}
    </Link>
  );
};

export default BackButton;

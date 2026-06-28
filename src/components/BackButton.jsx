import { Link } from 'react-router-dom';

const BackButton = ({ className = '' }) => (
  <Link to="/" className={`btn btn-back-path btn-sm ${className}`.trim()}>
    <i className="bi bi-arrow-left me-2" aria-hidden="true" />
    Назад на главную
  </Link>
);

export default BackButton;

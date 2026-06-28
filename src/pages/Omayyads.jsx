import { Link } from 'react-router-dom';

const Omayyads = () => {
  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">Омейядский Халифат</h1>
      <Link to="/" className="btn btn-outline-dark btn-sm">
        Назад
      </Link>
    </div>
  );
};

export default Omayyads;

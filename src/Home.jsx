import { Link } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';

const sections = [
  {
    title: 'Эпоха Праведных Халифов',
    description: 'Фундамент Таухида в Медине и первые века единства Уммы.',
    to: '/righteous',
    accent: 'secondary',
  },
  {
    title: 'Омейядский Халифат',
    description: 'Расширение Ислама на Западе, Кавказе и в Мавераннахре (41–132 гг.х.).',
    to: '/omayyads',
    accent: 'success',
  },
  {
    title: 'Аббасидский Халифат',
    description: 'Багдад, Золотой век науки и падение в 1258 году.',
    to: '/abbasids',
    accent: 'danger',
  },
  {
    title: 'Ислам на Северном Кавказе',
    description: 'Дербент, походы сахабов и укрепление суннитской акыды.',
    to: '/caucasus',
    accent: 'primary',
  },
  {
    title: 'Ислам в Средней Азии',
    description: 'Мавераннахр, Кутейба ибн Муслим и великие мухаддисы.',
    to: '/central-asia',
    accent: 'info',
  },
  {
    title: 'Ислам в Андалусии',
    description: 'Открытие Пиренейского полуострова до падения Гранады.',
    to: '/andalusia',
    accent: 'warning',
  },
  {
    title: 'Ислам в Крыму',
    description: 'Исторический путь мусульман на полуострове.',
    to: '/crimea',
    accent: 'dark',
  },
];

const Home = () => {
  return (
    <SiteLayout>
      <header
        className="bg-dark text-light py-5 text-center shadow-sm"
        style={{ borderBottom: '4px solid #198754' }}
      >
        <div className="container py-4">
          <h1 className="display-4 fw-bold mb-3">طريق الأمة — Энциклопедия исламского мира</h1>
          <p className="lead text-muted max-width-600 mx-auto mb-0">
            Сквозная хронология мусульманской цивилизации с опорой на достоверные суннитские
            источники.
          </p>
        </div>
      </header>

      <main className="container py-5">
        <h2 className="fw-bold text-center mb-2 border-bottom pb-3">Разделы энциклопедии</h2>
        <p className="text-muted text-center mb-5">
          Выберите тему для изучения. Материалы структурированы по эпохам и регионам.
        </p>

        <div className="row g-4">
          {sections.map((section) => (
            <div className="col-md-6 col-lg-4" key={section.to}>
              <div className="card h-100 shadow-sm border">
                <div className="card-body d-flex flex-column">
                  <h3 className={`card-title fw-bold text-${section.accent} fs-5`}>
                    {section.title}
                  </h3>
                  <p className="card-text text-muted small flex-grow-1">{section.description}</p>
                  <Link to={section.to} className={`btn btn-outline-${section.accent} btn-sm mt-3`}>
                    Перейти к разделу
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </SiteLayout>
  );
};

export default Home;

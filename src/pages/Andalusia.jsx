import React from 'react';
import { Link } from 'react-router-dom';

const Andalusia = () => {
  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">
        <div className="mb-4">
          <Link to="/" className="btn btn-outline-secondary btn-sm shadow-sm">
            ← Назад на главную
          </Link>
        </div>
        <div
          className="bg-dark text-light p-4 p-md-5 rounded shadow mb-5"
          style={{ borderLeft: '5px solid #198754' }}
        >
          <h1 className="fw-bold display-5 mb-3">Андалусский Халифат</h1>
          <p className="lead text-muted mb-0">
            138–897 гг.х. (756–1492 гг. н.э.) — От спасения суннитского правления в Европе до
            горьких уроков раздробленности.
          </p>
        </div>
        <div className="accordion shadow-sm border rounded" id="andalusiaAccordion">
          <div className="accordion-item border-0 border-bottom">
            <h2 className="accordion-header">
              <button
                className="accordion-button fw-bold text-dark bg-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collAn1"
              >
                Тема 1: 138 г.х. (756 г. н.э.) — Возрождение Омейядов в Кордове Абд ар-Рахманом I
              </button>
            </h2>
            <div
              id="collAn1"
              className="accordion-collapse collapse show"
              data-bs-parent="#andalusiaAccordion"
            >
              <div className="accordion-body bg-white text-muted">
                <p>
                  Чудом выжив после падения Дамаска, молодой принц Абд ар-Рахман I (ад-Дахиль)
                  пересекает Африку и основывает в Андалусии независимый Кордовский эмират. Он
                  объединил мусульман, восстановил строгое действие Шариата и заложил Великую
                  мечеть Кордовы.
                </p>
                <div className="mt-3 p-3 bg-light rounded border">
                  <h6 className="fw-bold text-dark mb-2 small">Верификация источников:</h6>
                  <a
                    href="https://waqfeya.net/book.php?id=3812"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-success me-2"
                  >
                    Оригинал на арабском (Waqfeya)
                  </a>
                  <span className="text-secondary small d-block mt-2">
                    На русском: См. Ибн Касир, «Аль-Бидая ван-Нихая», том 10, события 138 г.х.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item border-0 border-bottom">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fw-bold text-dark bg-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collAn2"
              >
                Тема 2: 317 г.х. (929 г. н.э.) — Провозглашение Халифата и защита акыды от
                Фатимидов
              </button>
            </h2>
            <div id="collAn2" className="accordion-collapse collapse" data-bs-parent="#andalusiaAccordion">
              <div className="accordion-body bg-white text-muted">
                <p>
                  Для защиты суннитской акыды на Западе от агрессивного шиитского лже-халифата
                  Фатимидов, эмир Абд ар-Рахман III в 317 г.х. принимает титул халифа. Великие
                  факихи (Ибн Хазм, имам аль-Куртуби) постановили: при невозможности управления из
                  одного центра из-за огромных морей и расстояний, существование двух суннитских
                  правителей допустимо ради спасения верующих.
                </p>
                <div className="mt-3 p-3 bg-light rounded border">
                  <h6 className="fw-bold text-dark mb-2 small">Верификация источников:</h6>
                  <a
                    href="https://waqfeya.net/book.php?id=1285"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-success me-2"
                  >
                    Оригинал на арабском (Waqfeya)
                  </a>
                  <span className="text-secondary small d-block mt-2">
                    На русском: См. Сборники правовых фетв имама аль-Куртуби и исторические
                    трактаты Ибн Хазма.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item border-0">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fw-bold text-dark bg-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collAn3"
              >
                Тема 3: 422 г.х. (1031 г. н.э.) — Распад на Тайфы и окончательное падение Гранады в
                1492 г.
              </button>
            </h2>
            <div id="collAn3" className="accordion-collapse collapse" data-bs-parent="#andalusiaAccordion">
              <div className="accordion-body bg-white text-muted">
                <p>
                  Погрязнув во внутренних заговорах и роскоши, единое государство рушится в 422
                  г.х., распадаясь на 20 мелких враждующих эмиратов (Тайфы). Гордыня местных
                  амиров, уплата дани кафирам и предательские союзы против братьев-мусульман
                  привели к катастрофе. В 1492 г. последний эмир Гранады Абу Абдаллах сдает город
                  без боя.
                </p>
                <div className="mt-3 p-3 bg-light rounded border">
                  <h6 className="fw-bold text-dark mb-2 small">Верификация источников:</h6>
                  <a
                    href="https://waqfeya.net/book.php?id=3401"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-success me-2"
                  >
                    Оригинал на арабском (Waqfeya)
                  </a>
                  <span className="text-secondary small d-block mt-2">
                    На русском: См. Ибн Хальдун, «Книга назиданий» (Аль-Ибар), раздел о падении
                    мусульманских династий.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Andalusia;

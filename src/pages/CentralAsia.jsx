import React from 'react';
import { Link } from 'react-router-dom';

const CentralAsia = () => {
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
          style={{ borderLeft: '5px solid #17a2b8' }}
        >
          <h1 className="fw-bold display-5 mb-3">Ислам в Средней Азии и Трагедия Туркестана</h1>
          <p className="lead text-muted mb-0">
            От блистательного суннитского Мавераннахра до колониального расчленения мусульманских
            земель.
          </p>
        </div>
        <div className="accordion shadow-sm border rounded" id="asiaAccordion">
          <div className="accordion-item border-0 border-bottom">
            <h2 className="accordion-header">
              <button
                className="accordion-button fw-bold text-dark bg-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collAs1"
              >
                Тема 1: 86–96 гг.х. (705–715 гг. н.э.) — Освобождение Мавераннахра Кутейбой ибн
                Муслимом
              </button>
            </h2>
            <div
              id="collAs1"
              className="accordion-collapse collapse show"
              data-bs-parent="#asiaAccordion"
            >
              <div className="accordion-body bg-white text-muted">
                <p>
                  Полномасштабное распространение Ислама в Мавераннахре произошло при полководце
                  Кутейбе ибн Муслиме, который освободил Бухару, Самарканд, Хорезм и Фергану. Он
                  действовал строго по Шариату: упразднял тиранические кастовые языческие культы,
                  строил первые соборные мечети и обучал местное население основам веры и
                  Единобожия.
                </p>
                <div className="mt-3 p-3 bg-light rounded border">
                  <h6 className="fw-bold text-dark mb-2 small">Верификация источников:</h6>
                  <a
                    href="https://waqfeya.net/book.php?id=3812"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-info text-white me-2"
                  >
                    Оригинал на арабском (Waqfeya)
                  </a>
                  <span className="text-secondary small d-block mt-2">
                    На русском: См. Хроники аль-Балазури, «Книга завоевания стран», раздел о
                    Хорасане и Мавераннахре.
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
                data-bs-target="#collAs2"
              >
                Тема 2: Мавераннахр как кузница мухаддисов и Золотой век Саманидов
              </button>
            </h2>
            <div id="collAs2" className="accordion-collapse collapse" data-bs-parent="#asiaAccordion">
              <div className="accordion-body bg-white text-muted">
                <p>
                  Приняв чистую суннитскую акыду, регион совершил колоссальный научный рывок,
                  особенно в эпоху Саманидов (204–390 гг.х. / 819–1005 гг. н.э.). Земля
                  Мавераннахра подарила миру величайших столпов Сунны: Имама Мухаммада ибн Исмаила
                  аль-Бухари, Имама ат-Тирмизи и сотни авторитетных факихов ханафитского мазхаба.
                </p>
                <div className="mt-3 p-3 bg-light rounded border">
                  <h6 className="fw-bold text-dark mb-2 small">Верификация источников:</h6>
                  <a
                    href="https://waqfeya.net/book.php?id=1239"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-info text-white me-2"
                  >
                    Оригинал на арабском (Waqfeya)
                  </a>
                  <span className="text-secondary small d-block mt-2">
                    На русском: См. Имам аз-Захаби, «Сияр а'лям ан-нубаля», биографии мухаддисов
                    Мавераннахра.
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
                data-bs-target="#collAs3"
              >
                Тема 3: Трагедия Туркестана: Оккупация Российской империей и Китаем
              </button>
            </h2>
            <div id="collAs3" className="accordion-collapse collapse" data-bs-parent="#asiaAccordion">
              <div className="accordion-body bg-white text-muted">
                <p>
                  В XIX–XX веках единый исламский Туркестан пережил трагедию искусственного
                  расчленения колонизаторами. Западный Туркестан подвергся жестокой военной
                  экспансии Российской империи, штурмовавшей мусульманские города и закрывавшей
                  шариатские институты. Восточный Туркестан был оккупирован цинским Китаем,
                  развернувшим масштабное искоренение исламской идентичности уйгуров.
                </p>
                <div className="mt-3 p-3 bg-light rounded border">
                  <h6 className="fw-bold text-dark mb-2 small">Верификация источников:</h6>
                  <a
                    href="https://waqfeya.net/book.php?id=3401"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-info text-white me-2"
                  >
                    Оригинал на арабском (Waqfeya)
                  </a>
                  <span className="text-secondary small d-block mt-2">
                    На русском: См. Хроники и аналитические записки упадка исламских территорий
                    XIX века.
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

export default CentralAsia;

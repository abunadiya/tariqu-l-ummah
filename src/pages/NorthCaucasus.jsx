import React from 'react';
import { Link } from 'react-router-dom';

const NorthCaucasus = () => {
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
          style={{ borderLeft: '5px solid #0d6efd' }}
        >
          <h1 className="fw-bold display-5 mb-3">Ислам на Северном Кавказе</h1>
          <p className="lead text-muted mb-0">
            Хронология стойкости, защиты северных рубежей Уммы и верности Таухиду от эпохи сахабов
            до утверждения Шариата.
          </p>
        </div>
        <div className="accordion shadow-sm border rounded" id="caucasusAccordion">
          <div className="accordion-item border-0 border-bottom">
            <h2 className="accordion-header">
              <button
                className="accordion-button fw-bold text-dark bg-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collNc1"
              >
                Тема 1: 22 г.х. (643 г. н.э.) — Поход сахабов и мирный договор в Дербенте
              </button>
            </h2>
            <div
              id="collNc1"
              className="accordion-collapse collapse show"
              data-bs-parent="#caucasusAccordion"
            >
              <div className="accordion-body bg-white text-muted">
                <p>
                  При халифе Умаре отряды мусульман под командованием Сураки ибн Амра подошли к
                  Дербенту (Баб аль-Абваб). Был заключен уникальный договор: освобождение местных
                  жителей от джизьи взамен на несение военной службы по охране границ Халифата.
                  Позже при халифе Усмане сподвижники Абдуррахман ибн Раби'а и Салман ибн Раби'а
                  закрепились в регионе. В боях у стен города 40 сахабов пали шахидами и были
                  похоронены на кладбище Кырхляр.
                </p>
                <div className="mt-3 p-3 bg-light rounded border">
                  <h6 className="fw-bold text-dark mb-2 small">Верификация источников:</h6>
                  <a
                    href="https://waqfeya.net/book.php?id=3812"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-primary me-2"
                  >
                    Оригинал на арабском (Waqfeya)
                  </a>
                  <span className="text-secondary small d-block mt-2">
                    На русском: См. Имам ат-Табари, «История пророков и царей», том 4, хроника
                    кавказских походов.
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
                data-bs-target="#collNc2"
              >
                Тема 2: 114 г.х. (733 г. н.э.) — Кампании Масламы и возведение Джума-мечети
              </button>
            </h2>
            <div id="collNc2" className="accordion-collapse collapse" data-bs-parent="#caucasusAccordion">
              <div className="accordion-body bg-white text-muted">
                <p>
                  Омейядский полководец Маслама ибн Абдул-Малик превращает Дербент в главный
                  военно-административный оплот Ислама на Кавказе для сдерживания хазар. Он
                  переселяет сюда мусульманские гарнизоны из Шама, делит город на 4 племенные
                  махалли и в 114 г.х. (733 г. н.э.) строит монументальную соборную Джума-мечеть —
                  старейший очаг Таухида в регионе.
                </p>
                <div className="mt-3 p-3 bg-light rounded border">
                  <h6 className="fw-bold text-dark mb-2 small">Верификация источников:</h6>
                  <a
                    href="https://waqfeya.net/book.php?id=5165"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-primary me-2"
                  >
                    Оригинал на арабском (Waqfeya)
                  </a>
                  <span className="text-secondary small d-block mt-2">
                    На русском: См. Ахмад аль-Куфи, «Китаб аль-Футюх» (Книга завоеваний), главы о
                    кавказских кампаниях Омейядов.
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
                data-bs-target="#collNc3"
              >
                Тема 3: Деятельность ученых-факихов и искоренение языческих пережитков
              </button>
            </h2>
            <div id="collNc3" className="accordion-collapse collapse" data-bs-parent="#caucasusAccordion">
              <div className="accordion-body bg-white text-muted">
                <p>
                  Исламизация Кавказа шла через внутреннее принятие справедливости Шариата народами
                  гор. Торговые пути и праведные ученые-правоведы суннитских мазхабов вели
                  бескомпромиссную борьбу с языческими обычаями (адатами), противоречащими
                  откровению, укореняя чистое Единобожие и формируя монолитную исламскую
                  идентичность.
                </p>
                <div className="mt-3 p-3 bg-light rounded border">
                  <h6 className="fw-bold text-dark mb-2 small">Верификация источников:</h6>
                  <a
                    href="https://waqfeya.net/book.php?id=3401"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-primary me-2"
                  >
                    Оригинал на арабском (Waqfeya)
                  </a>
                  <span className="text-secondary small d-block mt-2">
                    На русском: См. Ибн Хальдун, Мукаддима / Хроники (анализ правовых систем
                    окраин Халифата).
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

export default NorthCaucasus;

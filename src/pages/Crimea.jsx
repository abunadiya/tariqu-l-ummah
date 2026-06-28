import React from 'react';
import { Link } from 'react-router-dom';

const Crimea = () => {
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
          style={{ borderLeft: '5px solid #ffc107' }}
        >
          <h1 className="fw-bold display-5 mb-3">История Ислама в Крыму</h1>
          <p className="lead text-muted mb-0">
            От суннитского просвещения в Золотой Орде до Крымского Ханства и трагедии имперской
            аннексии.
          </p>
        </div>
        <div className="accordion shadow-sm border rounded" id="crimeaAccordion">
          <div className="accordion-item border-0 border-bottom">
            <h2 className="accordion-header">
              <button
                className="accordion-button fw-bold text-dark bg-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collCr1"
              >
                Тема 1: XIII век — Принятие Ислама ханом Берке и Крымский Юрт
              </button>
            </h2>
            <div
              id="collCr1"
              className="accordion-collapse collapse show"
              data-bs-parent="#crimeaAccordion"
            >
              <div className="accordion-body bg-white text-muted">
                <p>
                  Ислам укореняется на полуострове благодаря хану Берке (внуку Чингисхана), который
                  первым из правителей Золотой Орды принял Ислам и провозгласил Таухид. Позже
                  формируется независимое Крымское Ханство под властью Гираев. Суннитский Ислам
                  ханафитского мазхаба утверждается как государственная религия, обеспечивая
                  правопорядок.
                </p>
                <div className="mt-3 p-3 bg-light rounded border">
                  <h6 className="fw-bold text-dark mb-2 small">Верификация источников:</h6>
                  <a
                    href="https://waqfeya.net/book.php?id=3405"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-warning text-dark fw-bold me-2"
                  >
                    Оригинал на арабском (Waqfeya)
                  </a>
                  <span className="text-secondary small d-block mt-2">
                    На русском: См. Ибн аль-Асир, «Аль-Камиль фи-т-тарих», хроники принятия веры в
                    улусах Золотой Орды.
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
                data-bs-target="#collCr2"
              >
                Тема 2: Медресе Зинджирли и духовный союз с Османским Халифатом
              </button>
            </h2>
            <div id="collCr2" className="accordion-collapse collapse" data-bs-parent="#crimeaAccordion">
              <div className="accordion-body bg-white text-muted">
                <p>
                  Крым становится мощным очагом образования. В 1500 году хан Менгли I Гирай строит
                  знаменитое медресе Зинджирли в Бахчисарае для кодификации и изучения ханафитского
                  фикха и хадисоведения. Ханство находилось в прочном союзе с Османским Халифатом,
                  признавая халифа как духовного главу Уммы.
                </p>
                <div className="mt-3 p-3 bg-light rounded border">
                  <h6 className="fw-bold text-dark mb-2 small">Верификация источников:</h6>
                  <a
                    href="https://waqfeya.net/book.php?id=3812"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-warning text-dark fw-bold me-2"
                  >
                    Оригинал на арабском (Waqfeya)
                  </a>
                  <span className="text-secondary small d-block mt-2">
                    На русском: См. Османские государственные дефтеры и суннитские академические
                    хроники Причерноморья XVI-XVII вв.
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
                data-bs-target="#collCr3"
              >
                Тема 3: 1197 г.х. (1783 г. н.э.) — Трагедия первой аннексии Российской империей
              </button>
            </h2>
            <div id="collCr3" className="accordion-collapse collapse" data-bs-parent="#crimeaAccordion">
              <div className="accordion-body bg-white text-muted">
                <p>
                  В 1197 г.х. (1783 г. н.э.) мусульманский Крым подвергся незаконной аннексии со
                  стороны Российской империи. Оккупация обернулась катастрофой для коренных
                  мусульман (крымских татар): изъятие вакуфных земель мечетей и закрытие школ
                  спровоцировали массовое вынужденное переселение (мухаджирство) сотен тысяч
                  верующих в Турцию и вековое имперское давление.
                </p>
                <div className="mt-3 p-3 bg-light rounded border">
                  <h6 className="fw-bold text-dark mb-2 small">Верификация источников:</h6>
                  <a
                    href="https://waqfeya.net/book.php?id=3812"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-warning text-dark fw-bold me-2"
                  >
                    Оригинал на арабском (Waqfeya)
                  </a>
                  <span className="text-secondary small d-block mt-2">
                    На русском: См. Исторические хроники упадка исламских государств и вытеснения
                    мусульманского населения в XVIII веке.
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

export default Crimea;

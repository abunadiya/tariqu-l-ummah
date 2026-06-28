import React from 'react';
import { Link } from 'react-router-dom';

const RighteousCaliphate = () => {
  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">
        {/* КНОПКА НАЗАД */}
        <div className="mb-4">
          <Link to="/" className="btn btn-outline-secondary btn-sm shadow-sm">
            ← Назад на главную
          </Link>
        </div>

        {/* ШАПКА СТРАНИЦЫ */}
        <div
          className="bg-dark text-light p-4 p-md-5 rounded shadow mb-5"
          style={{ borderLeft: '5px solid #0d6efd' }}
        >
          <h1 className="fw-bold display-5 mb-3">Эпоха Праведного Халифата</h1>
          <p className="lead text-muted mb-0">
            11–41 гг.х. (632–661 гг. н.э.) — Золотой век формирования исламской
            государственности, кодификации основ Шариата и стремительного распространения Таухида.
          </p>
        </div>

        {/* АККОРДЕОН С ТЕМАМИ */}
        <div className="accordion shadow-sm border rounded" id="caliphateAccordion">
          {/* ТЕМА 1 */}
          <div className="accordion-item border-0 border-bottom">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button fw-bold text-dark bg-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Тема 1: 11–13 гг.х. (632–634 гг. н.э.) — Формирование государства при Абу Бакре
                ас-Сиддике и защита единства Уммы
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#caliphateAccordion"
            >
              <div className="accordion-body bg-white text-muted">
                <p>
                  После смерти Пророка Мухаммада ﷺ Умма столкнулась с тяжелейшим вызовом —
                  восстанием племен (войны с вероотступниками / Ридда) и появлением лжепророков.
                  Первый праведный халиф Абу Бакр ас-Сиддик проявил железную стойкость в защите
                  Шариата. Он жестко пресек попытки расколоть Умму, мобилизовал армию под
                  командованием Халида ибн аль-Валида и полностью восстановил контроль над
                  Аравийским полуостровом. Именно в этот критический период по приказу халифа
                  началась первая масштабная кодификация — сбор разрозненных свитков Корана в
                  единый текст (мусхаф), чтобы сохранить Слово Аллаха от искажений.
                </p>

                <div className="d-flex gap-2 mt-3">
                  <a
                    href="https://runivers.ru/lib/book6225/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline-primary"
                  >
                    Открыть на русском (Академический перевод ат-Табари)
                  </a>
                  <a
                    href="https://shamela.ws/book/9783"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-primary"
                  >
                    Оригинал на арабском (Шамиля)
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ТЕМА 2 */}
          <div className="accordion-item border-0 border-bottom">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed fw-bold text-dark bg-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Тема 2: 13–23 гг.х. (634–644 гг. н.э.) — Великие завоевания Умара ибн аль-Хаттаба
                (Шам, Ирак, Египет)
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#caliphateAccordion"
            >
              <div className="accordion-body bg-white text-muted">
                <p>
                  При втором халифе Умаре ибн аль-Хаттабе исламское государство превратилось в
                  мировую державу. Мусульманские армии нанесли сокрушительные поражения двум
                  сверхдержавам того времени. В битве при Ярмуке (15 г.х. / 636 г. н.э.) был
                  освобожден Шам (Сирия), а в битве при Кадисии (15 г.х. / 636 г. н.э.) разгромлены
                  силы Сасанидского Ирана. Был освобожден Кудс (Иерусалим) и открыт Египет под
                  руководством Амра ибн аль-Аса. Умар заложил основы государственного аппарата: ввел
                  систему министерств (диваны), учредил исламский календарь от Хиджры и зафиксировал
                  принципы шариатского судопроизводства на освобожденных землях.
                </p>

                <div className="d-flex gap-2 mt-3">
                  <a
                    href="https://runivers.ru/lib/book6225/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline-primary"
                  >
                    Открыть на русском (Академический перевод ат-Табари)
                  </a>
                  <a
                    href="https://shamela.ws/book/9783"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-primary"
                  >
                    Оригинал на арабском (Шамиля)
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ТЕМА 3 */}
          <div className="accordion-item border-0">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed fw-bold text-dark bg-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Тема 3: 23–41 гг.х. (644–661 гг. н.э.) — Выход к границам Кавказа и Мавераннахра,
                эпоха Усмана и Али
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#caliphateAccordion"
            >
              <div className="accordion-body bg-white text-muted">
                <p>
                  При халифе Усмане ибн Аффане границы государства расширились до максимума.
                  Мусульмане окончательно ликвидировали Сасанидскую империю и впервые вышли к
                  естественным границам Средней Азии (форсирование реки Амударья в 31 г.х. / 651 г.
                  н.э.) и Северного Кавказа (договор в Дербенте в 22 г.х. / 643 г. н.э.). Усман
                  стандартизировал чтение Корана, разослав заверенные копии по всем провинциям.
                  Период завершился правлением халифа Али ибн Абу Талиба, который перенес столицу в
                  Куфу и вел тяжелую борьбу за удержание стабильности и законности внутри
                  государства против первых мятежников (хариджитов), сохранив чистоту суннитского
                  пути.
                </p>

                <div className="d-flex gap-2 mt-3">
                  <a
                    href="https://runivers.ru/lib/book6225/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline-primary"
                  >
                    Открыть на русском (Академический перевод ат-Табари)
                  </a>
                  <a
                    href="https://shamela.ws/book/9783"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-primary"
                  >
                    Оригинал на арабском (Шамиля)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RighteousCaliphate;

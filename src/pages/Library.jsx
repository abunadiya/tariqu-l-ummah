import { useTranslation } from 'react-i18next';
import LibraryBookCard from '../components/library/LibraryBookCard';

/**
 * Каталог PDF из public/books — каждая книга явно перечислена по разделам.
 * Тексты карточек: src/locales/ru.json → library.books.<id>
 */
const LIBRARY_SECTIONS = [
  {
    category: 'arabicSources',
    books: [
      {
        id: 'tabariDagestan',
        pdfFilename: 'Тарих ар-русул вал-мулук ат-Табари.pdf',
        type: 'article',
      },
      {
        id: 'ibnRustaDagestan',
        pdfFilename: 'Китаб ал-а’лак ан-нафиса ибн Руста.pdf',
        type: 'article',
      },
      {
        id: 'daghestanGeography',
        pdfFilename: 'Сведения о Дагестане в арабском географическом.pdf',
        type: 'article',
      },
    ],
  },
  {
    category: 'dagestanScholars',
    books: [
      {
        id: 'kayaevBashlarov',
        pdfFilename: 'Из истории жизни и творчества.pdf',
        type: 'collection',
      },
      {
        id: 'damadanMuhi',
        pdfFilename: 'XVII–XVIII вв. Дамадана ал-Мухи.pdf',
        type: 'article',
      },
    ],
  },
  {
    category: 'islamOnCaucasus',
    books: [
      {
        id: 'islamSpreadDagestan',
        pdfFilename: 'Реконструкция последнего этапа распространения.pdf',
        type: 'article',
      },
    ],
  },
  {
    category: 'languageAndManuscripts',
    books: [
      {
        id: 'ivrManuscripts',
        pdfFilename: 'ИСТОРИЯ ВОСТОКА.pdf',
        type: 'catalog',
      },
      {
        id: 'makarovGrammar',
        pdfFilename: 'makarov_t_sost_tatarskaia_grammatika_kavkazskogo_narechiia.pdf',
        type: 'grammar',
      },
      {
        id: 'tserteliDialects',
        pdfFilename: 'Материалы для изучения арабских диалектов.pdf',
        type: 'monograph',
      },
    ],
  },
  {
    category: 'colonialPeriod',
    books: [
      {
        id: 'uprising1877',
        pdfFilename: 'prichiny_i_posledstviya_vosstaniya_1877_goda_v_dagestane_v_otsenke.pdf',
        type: 'article',
      },
      {
        id: 'clergyContradictions',
        pdfFilename: 'protivorechiya_v_musulmanskom_duhovenstve_posle_zaversheniya_narodno.pdf',
        type: 'article',
      },
      {
        id: 'gunibReview',
        pdfFilename: 'Шамиль.pdf',
        type: 'review',
      },
    ],
  },
  {
    category: 'regionalStudies',
    books: [
      {
        id: 'transcaucasica',
        pdfFilename: 'Южный Кавказ.pdf',
        type: 'yearbook',
      },
    ],
  },
];

const Library = () => {
  const { t } = useTranslation();
  const totalBooks = LIBRARY_SECTIONS.reduce(
    (sum, section) => sum + section.books.length,
    0,
  );

  return (
    <div className="path-page py-4 py-md-5">
      <div className="container">
        <header className="page-hero mb-4 mb-md-5 rounded-3 shadow-sm">
          <div className="page-hero-inner p-4 p-md-5">
            <p className="library-hero-badge mb-3">{t('library.heroBadge')}</p>
            <h1 className="display-5 fw-bold mb-3">{t('library.title')}</h1>
            <p className="lead mb-0">{t('library.subtitle')}</p>
          </div>
        </header>

        <p className="library-intro text-muted lh-lg mb-5">
          {t('library.intro', { count: totalBooks })}
        </p>

        {LIBRARY_SECTIONS.map((section) => (
          <section
            key={section.category}
            className="library-category-section mb-5"
            aria-labelledby={`library-category-${section.category}`}
          >
            <header className="library-category-header mb-4">
              <h2
                id={`library-category-${section.category}`}
                className="library-category-title h4 fw-bold mb-2"
              >
                {t(`library.categories.${section.category}`)}
              </h2>
              <p className="library-category-desc text-muted small mb-0">
                {t(`library.categoryDescriptions.${section.category}`)}
              </p>
            </header>

            <div className="row g-4">
              {section.books.map((book) => (
                <LibraryBookCard key={book.id} book={book} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Library;

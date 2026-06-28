import { useTranslation } from 'react-i18next';
import SiteLayout from '../components/SiteLayout';
import { LIBRARY_BOOKS } from '../constants/libraryBooks';

const Library = () => {
  const { t } = useTranslation();

  return (
    <SiteLayout>
      <div className="path-page min-vh-100 py-4 py-md-5">
        <div className="container">
          <header className="page-hero mb-5 rounded-3 shadow-sm">
            <div className="page-hero-inner p-4 p-md-5">
              <h1 className="display-5 fw-bold mb-3">{t('library.title')}</h1>
              <p className="lead mb-0">{t('library.subtitle')}</p>
            </div>
          </header>

          <div className="row g-4">
            {LIBRARY_BOOKS.map((book) => {
              const href = book.pdfUrl ?? book.externalUrl;
              const isExternal = Boolean(book.externalUrl && !book.pdfUrl);

              return (
                <div key={book.id} className="col-md-6 col-lg-4">
                  <article className="library-book-card h-100 rounded-4 shadow-sm p-4 d-flex flex-column">
                    <div className="library-book-icon mb-3" aria-hidden="true">
                      <i className="bi bi-journal-bookmark-fill" />
                    </div>
                    <h2 className="h5 fw-bold text-emerald mb-1">
                      {t(`library.books.${book.id}.title`)}
                    </h2>
                    <p className="text-muted small mb-2">
                      {t(`library.books.${book.id}.author`)}
                    </p>
                    <p className="text-muted small flex-grow-1 lh-lg mb-3">
                      {t(`library.books.${book.id}.description`)}
                    </p>
                    <a
                      href={href}
                      className="btn btn-chapter-link btn-sm align-self-start"
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      download={book.pdfUrl ? true : undefined}
                    >
                      {t('library.readButton')}
                      <i className="bi bi-file-earmark-pdf ms-2" aria-hidden="true" />
                    </a>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SiteLayout>
  );
};

export default Library;

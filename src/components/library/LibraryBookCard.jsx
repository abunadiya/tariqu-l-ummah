import { useTranslation } from 'react-i18next';
import { getBookPdfUrl } from '../../utils/bookPdfUrl';

const LibraryBookCard = ({ book }) => {
  const { t } = useTranslation();
  const base = `library.books.${book.id}`;
  const pdfHref = getBookPdfUrl(book.pdfFilename);

  return (
    <div className="col-sm-6 col-xl-4">
      <article className="card library-book-card h-100 border-0 shadow-sm">
        <div className="card-body p-4 d-flex flex-column">
          <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
            <div
              className="library-book-icon flex-shrink-0"
              aria-hidden="true"
            >
              <i className="bi bi-journal-bookmark-fill" />
            </div>
            <span className="library-type-badge badge rounded-pill">
              {t(`library.types.${book.type}`)}
            </span>
          </div>

          <h2 className="library-book-title h5 fw-bold mb-2">
            {t(`${base}.title`)}
          </h2>

          <p className="library-book-author text-muted small mb-3">
            {t(`${base}.author`)}
          </p>

          <p className="library-book-description text-muted small flex-grow-1 lh-lg mb-4">
            {t(`${base}.description`)}
          </p>

          <a
            href={pdfHref}
            className="btn btn-chapter-link btn-sm align-self-start"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('library.readButton')}
            <i className="bi bi-book ms-2" aria-hidden="true" />
          </a>
        </div>
      </article>
    </div>
  );
};

export default LibraryBookCard;

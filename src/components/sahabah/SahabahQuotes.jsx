export const Paragraphs = ({ items, className = 'text-muted lh-lg mb-3' }) =>
  items.map((text, index) => (
    <p key={index} className={className}>
      {text}
    </p>
  ));

export const ScholarBlockquote = ({ text, source }) => (
  <blockquote className="sahaba-blockquote border-start border-4 border-emerald ps-4 py-2 my-4 bg-white rounded-end">
    <p className="mb-0 lh-lg text-body-secondary">{text}</p>
    {source ? (
      <footer className="blockquote-footer small text-muted mt-2 mb-0">{source}</footer>
    ) : null}
  </blockquote>
);

export const QuranQuote = ({ arabic, text, reference }) => (
  <figure className="sahaba-quran-quote rounded-3 p-4 my-4">
    {arabic && (
      <p className="sahaba-quran-arabic text-center mb-3" dir="rtl" lang="ar">
        {arabic}
      </p>
    )}
    <blockquote className="mb-2 border-0 ps-0">
      <p className="mb-0 lh-lg fst-italic">{text}</p>
    </blockquote>
    <figcaption className="small text-emerald fw-semibold mt-2">{reference}</figcaption>
  </figure>
);

export const HadithQuote = ({ text, source }) => (
  <figure className="sahaba-hadith-quote rounded-3 p-4 my-4">
    <blockquote className="mb-2 border-0 ps-0">
      <p className="mb-0 lh-lg">{text}</p>
    </blockquote>
    {source && (
      <figcaption className="small text-muted fw-semibold">{source}</figcaption>
    )}
  </figure>
);

export const SectionHeading = ({ children, id }) => (
  <h2 id={id} className="h4 fw-bold text-emerald mb-3 mt-5 pt-2">
    {children}
  </h2>
);

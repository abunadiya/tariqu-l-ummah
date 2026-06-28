import SourceVerification from './SourceVerification';

const DeclineReflection = ({
  title = 'Анализ причин упадка',
  waqfeyaId,
  russianText,
  children,
}) => (
  <aside className="decline-reflection rounded-4 shadow-sm mt-5" aria-labelledby="decline-reflection-heading">
    <div className="decline-reflection-header d-flex align-items-start gap-3 mb-3">
      <span className="decline-reflection-icon flex-shrink-0" aria-hidden="true">
        <i className="bi bi-chat-square-quote-fill" />
      </span>
      <div>
        <h2 id="decline-reflection-heading" className="h5 fw-bold text-emerald mb-1">
          {title}
        </h2>
        <p className="text-muted small mb-0">Итоговое размышление</p>
      </div>
    </div>

    <blockquote className="decline-reflection-body mb-0">
      {children}
    </blockquote>

    {waqfeyaId && russianText && (
      <SourceVerification
        waqfeyaId={waqfeyaId}
        buttonClass="btn-source-emerald"
        russianText={russianText}
      />
    )}
  </aside>
);

export default DeclineReflection;

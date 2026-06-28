const AccordionTopic = ({
  id,
  parentId,
  icon,
  title,
  defaultOpen = false,
  children,
}) => (
  <div className="accordion-item path-accordion-item border-0 border-bottom">
    <h2 className="accordion-header" id={`heading-${id}`}>
      <button
        className={`accordion-button path-accordion-button fw-semibold ${defaultOpen ? '' : 'collapsed'}`}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#${id}`}
        aria-expanded={defaultOpen}
        aria-controls={id}
      >
        <span className="topic-icon me-3 flex-shrink-0">
          <i className={`bi ${icon}`} aria-hidden="true" />
        </span>
        <span className="text-start">{title}</span>
      </button>
    </h2>
    <div
      id={id}
      className={`accordion-collapse collapse ${defaultOpen ? 'show' : ''}`}
      aria-labelledby={`heading-${id}`}
      data-bs-parent={`#${parentId}`}
    >
      <div className="accordion-body path-accordion-body text-muted lh-lg">{children}</div>
    </div>
  </div>
);

export default AccordionTopic;

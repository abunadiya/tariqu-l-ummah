import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'ru', label: 'RU' },
  { code: 'fr', label: 'FR' },
];

const LanguageSwitcher = ({ mobile = false }) => {
  const { i18n, t } = useTranslation();
  const current = i18n.language?.split('-')[0] ?? 'ru';

  return (
    <div
      className={`language-switcher d-flex align-items-center gap-1 ${mobile ? 'language-switcher--menu' : ''}`}
      role="group"
      aria-label={t('nav.language')}
    >
      {LANGUAGES.map(({ code, label }, index) => (
        <span key={code} className="d-flex align-items-center">
          {index > 0 && <span className="language-switcher-sep text-white-50 mx-1">|</span>}
          <button
            type="button"
            className={`language-switcher-btn btn btn-sm ${current === code ? 'active' : ''} ${mobile ? 'language-switcher-btn--menu' : ''}`}
            onClick={() => i18n.changeLanguage(code)}
            aria-pressed={current === code}
          >
            {label}
          </button>
        </span>
      ))}
    </div>
  );
};

export default LanguageSwitcher;

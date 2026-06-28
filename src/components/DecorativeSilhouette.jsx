/**
 * Декоративные силуэты с полностью закрытыми лицами (без глаз, рта, черт).
 * Допустимые типы: воин, пустынный путник. Пророки — запрещены.
 */
const DecorativeSilhouette = ({ variant = 'traveler', className = '' }) => {
  if (variant === 'warrior') {
    return (
      <svg
        className={`decorative-silhouette ${className}`}
        viewBox="0 0 120 160"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <g fill="currentColor">
          {/* Щит */}
          <path d="M8 72 Q8 48 28 38 Q48 28 48 52 L48 96 Q48 118 28 128 Q8 118 8 96 Z" opacity="0.85" />
          {/* Тело */}
          <path d="M52 88 L52 148 L68 148 L68 88 Q68 72 60 68 Q52 72 52 88 Z" />
          {/* Плечи и руки */}
          <path d="M44 78 Q60 62 76 78 L82 92 L74 96 L68 86 L52 86 L46 96 L38 92 Z" />
          {/* Голова и шемаг — сплошной силуэт, лицо полностью скрыто */}
          <path d="M42 68 Q60 42 78 68 L82 78 Q78 82 60 84 Q42 82 38 78 Z" />
          <path d="M38 72 Q60 58 82 72 L80 64 Q60 50 40 64 Z" opacity="0.7" />
          {/* Чалма/ткань, закрывающая лицо */}
          <path d="M48 76 Q60 70 72 76 L70 88 Q60 92 50 88 Z" />
        </g>
      </svg>
    );
  }

  return (
    <svg
      className={`decorative-silhouette ${className}`}
      viewBox="0 0 140 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="currentColor">
        {/* Пустынные дюны (абстрактные) */}
        <path d="M0 100 Q35 88 70 96 Q105 104 140 92 L140 120 L0 120 Z" opacity="0.35" />
        {/* Посох путника */}
        <rect x="28" y="36" width="3" height="72" rx="1.5" opacity="0.8" />
        {/* Тело в мантии */}
        <path d="M44 78 L44 108 L76 108 L76 78 Q76 66 60 62 Q44 66 44 78 Z" />
        {/* Плечи */}
        <path d="M36 74 Q60 58 84 74 L88 82 L80 86 L76 78 L44 78 L40 86 L32 82 Z" />
        {/* Голова и шемаг — лицо полностью закрыто тканью, без черт */}
        <ellipse cx="60" cy="58" rx="22" ry="18" />
        <path d="M38 58 Q60 44 82 58 L80 68 Q60 74 40 68 Z" opacity="0.75" />
        <path d="M42 62 Q60 54 78 62 L76 72 Q60 78 44 72 Z" />
      </g>
    </svg>
  );
};

export default DecorativeSilhouette;

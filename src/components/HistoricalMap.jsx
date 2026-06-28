import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MAP_REGIONS } from '../constants/sections';

const REGION_PATHS = {
  hijaz: 'M 420 280 L 460 260 L 500 270 L 510 300 L 480 330 L 440 325 L 410 305 Z',
  sham: 'M 380 220 L 430 210 L 450 240 L 440 270 L 400 275 L 370 250 Z',
  egyptMaghreb: 'M 300 250 L 370 240 L 380 290 L 340 340 L 280 320 L 270 280 Z',
  mesopotamia: 'M 450 240 L 520 230 L 540 270 L 520 310 L 460 300 L 440 260 Z',
  andalusia: 'M 220 250 L 270 240 L 280 280 L 250 300 L 210 285 Z',
};

const HistoricalMap = () => {
  const { t } = useTranslation();
  const [activeRegion, setActiveRegion] = useState(null);
  const [tooltip, setTooltip] = useState(null);

  const scrollToChapter = (chapterId) => {
    const target = document.getElementById(`chapter-${chapterId}`);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleRegionEnter = (region, event) => {
    setActiveRegion(region.id);
    const rect = event.currentTarget.closest('.historical-map-wrap')?.getBoundingClientRect();
    if (rect) {
      setTooltip({
        id: region.id,
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
  };

  return (
    <section className="historical-map-section container py-4">
      <div className="historical-map-card rounded-4 shadow-sm p-4 p-md-5">
        <div className="text-center mb-4">
          <h2 className="h4 fw-bold text-emerald mb-2">{t('map.title')}</h2>
          <p className="text-muted mb-0">{t('map.hint')}</p>
        </div>

        <div className="historical-map-wrap position-relative mx-auto">
          <svg
            viewBox="0 0 720 420"
            className="historical-map-svg w-100"
            role="img"
            aria-label={t('map.title')}
          >
            <rect x="0" y="0" width="720" height="420" className="historical-map-ocean" />
            <path
              d="M 180 180 L 560 160 L 600 360 L 160 380 Z"
              className="historical-map-land"
            />
            {MAP_REGIONS.map((region) => (
              <path
                key={region.id}
                d={REGION_PATHS[region.id]}
                className={`historical-map-region ${activeRegion === region.id ? 'is-active' : ''}`}
                onMouseEnter={(event) => handleRegionEnter(region, event)}
                onMouseMove={(event) => handleRegionEnter(region, event)}
                onMouseLeave={() => {
                  setActiveRegion(null);
                  setTooltip(null);
                }}
                onClick={() => scrollToChapter(region.chapterId)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    scrollToChapter(region.chapterId);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`${t(`map.regions.${region.id}.arabic`)} / ${t(`map.regions.${region.id}.name`)}`}
              />
            ))}
          </svg>

          {tooltip && (
            <div
              className="historical-map-tooltip"
              style={{ left: tooltip.x, top: tooltip.y }}
            >
              <div className="historical-map-tooltip-ar">{t(`map.regions.${tooltip.id}.arabic`)}</div>
              <div className="historical-map-tooltip-local">{t(`map.regions.${tooltip.id}.name`)}</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HistoricalMap;

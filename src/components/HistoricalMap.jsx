import { useMemo, useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { useTranslation } from 'react-i18next';
import { MAP_REGIONS } from '../constants/sections';
import { getRegionForCountry } from '../constants/mapCountries';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const REGION_CHAPTER = Object.fromEntries(
  MAP_REGIONS.map((region) => [region.id, region.chapterId]),
);

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

  const handleCountryEnter = (regionId, event) => {
    setActiveRegion(regionId);
    const rect = event.currentTarget.closest('.historical-map-wrap')?.getBoundingClientRect();
    if (rect) {
      setTooltip({
        id: regionId,
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
  };

  const handleCountryMove = (regionId, event) => {
    const rect = event.currentTarget.closest('.historical-map-wrap')?.getBoundingClientRect();
    if (rect) {
      setTooltip({
        id: regionId,
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
  };

  const clearInteraction = () => {
    setActiveRegion(null);
    setTooltip(null);
  };

  const handleCountryClick = (regionId) => {
    const chapterId = REGION_CHAPTER[regionId];
    if (chapterId) {
      scrollToChapter(chapterId);
    }
  };

  const projectionConfig = useMemo(
    () => ({
      scale: 108,
      center: [42, 22],
    }),
    [],
  );

  return (
    <section className="historical-map-section container py-4">
      <div className="historical-map-card rounded-4 shadow-sm p-4 p-md-5">
        <div className="text-center mb-4">
          <h2 className="h4 fw-bold text-emerald mb-2">{t('map.title')}</h2>
          <p className="text-muted mb-0">{t('map.hint')}</p>
        </div>

        <div className="historical-map-wrap position-relative mx-auto">
          <ComposableMap
            className="historical-map-composable w-100"
            projection="geoMercator"
            projectionConfig={projectionConfig}
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const regionId = getRegionForCountry(geo.id);
                  const isHighlighted = Boolean(regionId);
                  const isActive = regionId && activeRegion === regionId;

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      className={`historical-map-country${
                        isHighlighted ? ' historical-map-country--highlighted' : ''
                      }${isActive ? ' is-active' : ''}`}
                      tabIndex={isHighlighted ? 0 : -1}
                      role={isHighlighted ? 'button' : undefined}
                      aria-label={
                        isHighlighted
                          ? `${t(`map.regions.${regionId}.arabic`)} / ${t(`map.regions.${regionId}.name`)}`
                          : geo.properties?.name
                      }
                      onMouseEnter={
                        isHighlighted
                          ? (event) => handleCountryEnter(regionId, event)
                          : undefined
                      }
                      onMouseMove={
                        isHighlighted
                          ? (event) => handleCountryMove(regionId, event)
                          : undefined
                      }
                      onMouseLeave={isHighlighted ? clearInteraction : undefined}
                      onClick={
                        isHighlighted ? () => handleCountryClick(regionId) : undefined
                      }
                      onKeyDown={
                        isHighlighted
                          ? (event) => {
                              if (event.key === 'Enter' || event.key === ' ') {
                                event.preventDefault();
                                handleCountryClick(regionId);
                              }
                            }
                          : undefined
                      }
                      style={{
                        default: {
                          fill: isHighlighted ? 'rgba(13, 92, 75, 0.72)' : '#e8e4dc',
                          stroke: isHighlighted ? '#0d5c4b' : '#c8c4bc',
                          strokeWidth: isHighlighted ? 0.6 : 0.35,
                          outline: 'none',
                          transition: 'fill 0.2s ease, stroke 0.2s ease',
                        },
                        hover: {
                          fill: isHighlighted ? 'rgba(184, 134, 11, 0.78)' : '#e8e4dc',
                          stroke: isHighlighted ? '#8b6914' : '#c8c4bc',
                          strokeWidth: isHighlighted ? 0.75 : 0.35,
                          outline: 'none',
                          cursor: isHighlighted ? 'pointer' : 'default',
                        },
                        pressed: {
                          fill: isHighlighted ? 'rgba(13, 92, 75, 0.9)' : '#e8e4dc',
                          stroke: isHighlighted ? '#0d5c4b' : '#c8c4bc',
                          outline: 'none',
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>

          {tooltip && (
            <div
              className="historical-map-tooltip"
              style={{ left: tooltip.x, top: tooltip.y }}
            >
              <div className="historical-map-tooltip-ar">
                {t(`map.regions.${tooltip.id}.arabic`)}
              </div>
              <div className="historical-map-tooltip-local">
                {t(`map.regions.${tooltip.id}.name`)}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HistoricalMap;

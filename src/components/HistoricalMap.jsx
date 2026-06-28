import { useMemo, useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { useTranslation } from 'react-i18next';
import { MAP_REGIONS } from '../constants/sections';
import { getRegionForCountry } from '../constants/mapCountries';
import {
  HISTORICAL_ZONES_GEOJSON,
  getHistoricalZoneRegion,
} from '../constants/mapHistoricalZones';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const REGION_CHAPTER = Object.fromEntries(
  MAP_REGIONS.map((region) => [region.id, region.chapterId]),
);

const NEUTRAL_STYLE = {
  default: {
    fill: '#e8e4dc',
    stroke: '#c8c4bc',
    strokeWidth: 0.35,
    outline: 'none',
  },
  hover: {
    fill: '#e8e4dc',
    stroke: '#c8c4bc',
    strokeWidth: 0.35,
    outline: 'none',
    cursor: 'default',
  },
  pressed: {
    fill: '#e8e4dc',
    stroke: '#c8c4bc',
    outline: 'none',
  },
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

  const handleRegionEnter = (regionId, event) => {
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

  const handleRegionMove = (regionId, event) => {
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

  const handleRegionClick = (regionId) => {
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

  const getHighlightedStyle = (regionId, isActive) => ({
    default: {
      fill: isActive ? 'rgba(184, 134, 11, 0.78)' : 'rgba(13, 92, 75, 0.72)',
      stroke: isActive ? '#8b6914' : '#0d5c4b',
      strokeWidth: 0.65,
      outline: 'none',
      transition: 'fill 0.2s ease, stroke 0.2s ease',
    },
    hover: {
      fill: 'rgba(184, 134, 11, 0.78)',
      stroke: '#8b6914',
      strokeWidth: 0.75,
      outline: 'none',
      cursor: 'pointer',
    },
    pressed: {
      fill: 'rgba(13, 92, 75, 0.9)',
      stroke: '#0d5c4b',
      outline: 'none',
    },
  });

  const renderGeography = (geo, regionId) => {
    if (!regionId) {
      return (
        <Geography
          key={geo.rsmKey}
          geography={geo}
          className="historical-map-country"
          style={NEUTRAL_STYLE}
        />
      );
    }

    const isActive = activeRegion === regionId;

    return (
      <Geography
        key={geo.rsmKey}
        geography={geo}
        className={`historical-map-country historical-map-country--highlighted${
          isActive ? ' is-active' : ''
        } historical-map-zone`}
        tabIndex={0}
        role="button"
        aria-label={`${t(`map.regions.${regionId}.arabic`)} / ${t(`map.regions.${regionId}.name`)}`}
        onMouseEnter={(event) => handleRegionEnter(regionId, event)}
        onMouseMove={(event) => handleRegionMove(regionId, event)}
        onMouseLeave={clearInteraction}
        onClick={() => handleRegionClick(regionId)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleRegionClick(regionId);
          }
        }}
        style={getHighlightedStyle(regionId, isActive)}
      />
    );
  };

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
                geographies.map((geo) =>
                  renderGeography(geo, getRegionForCountry(geo.id)),
                )
              }
            </Geographies>

            <Geographies geography={HISTORICAL_ZONES_GEOJSON}>
              {({ geographies }) =>
                geographies.map((geo) =>
                  renderGeography(geo, getHistoricalZoneRegion(geo)),
                )
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

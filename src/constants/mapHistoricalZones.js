/**
 * Исторические зоны, не совпадающие с границами современных государств.
 * Координаты GeoJSON: [долгота, широта].
 */
export const HISTORICAL_ZONES_GEOJSON = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { regionId: 'caucasus', name: 'North Caucasus' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [36.8, 43.8],
            [48.2, 44.2],
            [47.8, 41.8],
            [45.0, 41.2],
            [42.0, 41.5],
            [38.5, 42.0],
            [36.8, 43.8],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { regionId: 'volga', name: 'Volga Bulgaria' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [46.5, 54.8],
            [54.5, 55.8],
            [56.0, 53.5],
            [54.0, 51.5],
            [49.0, 52.0],
            [46.5, 54.8],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { regionId: 'volga', name: 'Crimea' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [32.5, 46.2],
            [36.6, 46.2],
            [36.4, 44.4],
            [33.0, 44.6],
            [32.5, 46.2],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { regionId: 'centralAsia', name: 'Southern Kazakhstan' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [50.0, 41.5],
            [77.0, 41.5],
            [77.0, 44.8],
            [50.0, 44.8],
            [50.0, 41.5],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { regionId: 'centralAsia', name: 'Xinjiang' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [74.0, 35.5],
            [93.5, 35.5],
            [93.5, 48.5],
            [74.0, 48.5],
            [74.0, 35.5],
          ],
        ],
      },
    },
  ],
};

export const getHistoricalZoneRegion = (geo) => geo.properties?.regionId ?? null;

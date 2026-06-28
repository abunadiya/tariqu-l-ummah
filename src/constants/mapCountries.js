/**
 * ISO 3166-1 numeric codes → historical map region id.
 * Только страны, чьи современные границы совпадают с историческими областями.
 * Россия, Китай, вся Украина и весь Казахстан — через mapHistoricalZones.js.
 */
export const COUNTRY_TO_REGION = {
  // Андалусия
  724: 'andalusia',
  620: 'andalusia',

  // Магриб и Египет
  504: 'maghrebEgypt',
  12: 'maghrebEgypt',
  788: 'maghrebEgypt',
  818: 'maghrebEgypt',
  434: 'maghrebEgypt',

  // Хиджаз и Наджд (Аравия)
  682: 'hijaz',
  887: 'hijaz',
  512: 'hijaz',
  784: 'hijaz',
  634: 'hijaz',
  48: 'hijaz',
  414: 'hijaz',

  // Шам
  760: 'sham',
  400: 'sham',
  422: 'sham',
  275: 'sham',

  // Месopotamia и Персия
  368: 'mesopotamia',
  364: 'mesopotamia',

  // Кавказ (отдельные государства; российский Северный Кавказ — зона на карте)
  31: 'caucasus',
  268: 'caucasus',
  51: 'caucasus',

  // Мавераннахр (южный Казахстан — зона на карте)
  860: 'centralAsia',
  762: 'centralAsia',
  795: 'centralAsia',
  417: 'centralAsia',

  // Индостан
  586: 'hindustan',
  356: 'hindustan',
  50: 'hindustan',
  4: 'hindustan',
};

/** Страны, которые никогда не подсвечиваются целиком (даже при ошибке в словаре). */
export const EXCLUDED_COUNTRY_IDS = new Set([
  643, // Russia
  156, // China
  398, // Kazakhstan (только южная зона)
  804, // Ukraine (только Крым — зона)
]);

export const getRegionForCountry = (geoId) => {
  const numeric = Number.parseInt(String(geoId), 10);
  if (Number.isNaN(numeric) || EXCLUDED_COUNTRY_IDS.has(numeric)) {
    return null;
  }
  return COUNTRY_TO_REGION[numeric] ?? null;
};

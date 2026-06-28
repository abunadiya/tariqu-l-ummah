/**
 * ISO 3166-1 numeric codes → historical map region id.
 * Source atlas: world-atlas@2 countries-110m
 */
export const COUNTRY_TO_REGION = {
  // Аравийский полуостров (Хиджаз)
  682: 'hijaz', // Saudi Arabia
  887: 'hijaz', // Yemen
  512: 'hijaz', // Oman
  784: 'hijaz', // UAE
  634: 'hijaz', // Qatar
  48: 'hijaz', // Bahrain
  414: 'hijaz', // Kuwait

  // Шам
  760: 'sham', // Syria
  400: 'sham', // Jordan
  422: 'sham', // Lebanon
  275: 'sham', // Palestine

  // Египет и Магриб
  818: 'egyptMaghreb', // Egypt
  434: 'egyptMaghreb', // Libya
  788: 'egyptMaghreb', // Tunisia
  12: 'egyptMaghreb', // Algeria
  504: 'egyptMaghreb', // Morocco

  // Месopotamia и Персия
  368: 'mesopotamia', // Iraq
  364: 'mesopotamia', // Iran

  // Андалусия
  724: 'andalusia', // Spain
  620: 'andalusia', // Portugal
};

export const getRegionForCountry = (geoId) => {
  const numeric = Number.parseInt(String(geoId), 10);
  if (Number.isNaN(numeric)) {
    return null;
  }
  return COUNTRY_TO_REGION[numeric] ?? null;
};

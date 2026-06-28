/**
 * ISO 3166-1 numeric codes → historical map region id.
 * Atlas: world-atlas@2 countries-110m
 */
export const COUNTRY_TO_REGION = {
  // Андалусия
  724: 'andalusia', // Spain
  620: 'andalusia', // Portugal

  // Магриб и Египет
  504: 'maghrebEgypt', // Morocco
  12: 'maghrebEgypt', // Algeria
  788: 'maghrebEgypt', // Tunisia
  818: 'maghrebEgypt', // Egypt
  434: 'maghrebEgypt', // Libya

  // Хиджаз и Наджд (Аравия)
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

  // Месopotamia и Персия
  368: 'mesopotamia', // Iraq
  364: 'mesopotamia', // Iran

  // Кавказ (Дагестан и Чечня — часть России на карте стран)
  643: 'caucasus', // Russia (Северный Кавказ)
  31: 'caucasus', // Azerbaijan
  268: 'caucasus', // Georgia
  51: 'caucasus', // Armenia

  // Поволжье и Крым (глава «Крым и Поволжье»)
  804: 'volga', // Ukraine (Крым в атласе world-atlas)

  // Мавераннахр / Средняя Азия
  860: 'centralAsia', // Uzbekistan
  762: 'centralAsia', // Tajikistan
  795: 'centralAsia', // Turkmenistan
  398: 'centralAsia', // Kazakhstan
  417: 'centralAsia', // Kyrgyzstan

  // Индостан
  586: 'hindustan', // Pakistan
  356: 'hindustan', // India
  50: 'hindustan', // Bangladesh
  4: 'hindustan', // Afghanistan (часть восточного исламского пространства)
};

export const getRegionForCountry = (geoId) => {
  const numeric = Number.parseInt(String(geoId), 10);
  if (Number.isNaN(numeric)) {
    return null;
  }
  return COUNTRY_TO_REGION[numeric] ?? null;
};

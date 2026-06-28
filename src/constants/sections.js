import { SECTION_ICONS as I } from './sectionIcons';

export const MAP_REGIONS = [
  { id: 'hijaz', chapterId: 'sahabah' },
  { id: 'sham', chapterId: 'righteous' },
  { id: 'maghrebEgypt', chapterId: 'omayyads' },
  { id: 'mesopotamia', chapterId: 'abbasids' },
  { id: 'andalusia', chapterId: 'andalusia' },
  { id: 'caucasus', chapterId: 'caucasus' },
  { id: 'volga', chapterId: 'crimea' },
  { id: 'centralAsia', chapterId: 'centralAsia' },
  { id: 'hindustan', chapterId: 'omayyads' },
];

export const PATH_CHAPTERS = [
  {
    id: 'sahabah',
    to: '/sahabah',
    icon: I.shield,
    mapRegion: 'hijaz',
    featured: true,
    related: [
      { to: '/righteous', hintKey: 'righteous' },
      { to: '/omayyads', hintKey: 'omayyads' },
      { to: '/caucasus', hintKey: 'caucasus' },
    ],
  },
  {
    id: 'righteous',
    to: '/righteous',
    icon: I.book,
    mapRegion: 'sham',
    related: [
      { to: '/omayyads', hintKey: 'omayyads' },
      { to: '/caucasus', hintKey: 'caucasus' },
      { to: '/abbasids', hintKey: 'abbasids' },
    ],
  },
  {
    id: 'omayyads',
    to: '/omayyads',
    icon: I.shield,
    mapRegion: 'maghrebEgypt',
    related: [
      { to: '/righteous', hintKey: 'righteous' },
      { to: '/andalusia', hintKey: 'andalusia' },
      { to: '/central-asia', hintKey: 'centralAsia' },
    ],
  },
  {
    id: 'abbasids',
    to: '/abbasids',
    icon: I.architecture,
    mapRegion: 'mesopotamia',
    related: [
      { to: '/omayyads', hintKey: 'omayyads' },
      { to: '/central-asia', hintKey: 'centralAsia' },
      { to: '/crimea', hintKey: 'crimea' },
    ],
  },
  {
    id: 'caucasus',
    to: '/caucasus',
    icon: I.shieldOutline,
    mapRegion: 'caucasus',
    related: [
      { to: '/omayyads', hintKey: 'omayyads' },
      { to: '/abbasids', hintKey: 'abbasids' },
      { to: '/crimea', hintKey: 'crimea' },
    ],
  },
  {
    id: 'centralAsia',
    to: '/central-asia',
    icon: I.manuscript,
    mapRegion: 'centralAsia',
    related: [
      { to: '/omayyads', hintKey: 'omayyads' },
      { to: '/abbasids', hintKey: 'abbasids' },
      { to: '/crimea', hintKey: 'crimea' },
    ],
  },
  {
    id: 'andalusia',
    to: '/andalusia',
    icon: I.mosque,
    mapRegion: 'andalusia',
    related: [
      { to: '/omayyads', hintKey: 'omayyads' },
      { to: '/abbasids', hintKey: 'abbasids' },
      { to: '/crimea', hintKey: 'crimea' },
    ],
  },
  {
    id: 'crimea',
    to: '/crimea',
    icon: I.crescent,
    mapRegion: 'volga',
    related: [
      { to: '/caucasus', hintKey: 'caucasus' },
      { to: '/central-asia', hintKey: 'centralAsia' },
      { to: '/abbasids', hintKey: 'abbasids' },
    ],
  },
];

const CHAPTER_BY_PATH = Object.fromEntries(
  PATH_CHAPTERS.map((chapter) => [chapter.to, chapter]),
);

export const getChapterByPath = (path) => CHAPTER_BY_PATH[path] ?? null;

export const getRelatedChapters = (path) => {
  const chapter = getChapterByPath(path);

  if (!chapter) {
    return [];
  }

  return chapter.related
    .map(({ to, hintKey }) => {
      const relatedChapter = getChapterByPath(to);

      if (!relatedChapter) {
        return null;
      }

      return {
        id: relatedChapter.id,
        to: relatedChapter.to,
        icon: relatedChapter.icon,
        hintKey,
        sourceChapterId: chapter.id,
      };
    })
    .filter(Boolean);
};

export default PATH_CHAPTERS;

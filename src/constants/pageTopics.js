import { SECTION_ICONS as I } from './sectionIcons';

export const RIGHTEOUS_CALIPHATE_TOPICS = [
  {
    id: 'abuBakr',
    accordionId: 'collapseOne',
    icon: I.shield,
    waqfeyaId: '3812',
    defaultOpen: true,
  },
  {
    id: 'umar',
    accordionId: 'collapseTwo',
    icon: I.map,
    waqfeyaId: '3812',
  },
  {
    id: 'uthmanAli',
    accordionId: 'collapseThree',
    icon: I.globe,
    waqfeyaId: '3812',
  },
  {
    id: 'ahmadIbnHanbal',
    accordionId: 'collapseFour',
    icon: I.manuscript,
    waqfeyaId: '1239',
  },
];

export const OMAYYADS_TOPICS = [
  { id: 'damascus', accordionId: 'collapseOm1', icon: I.architecture, waqfeyaId: '3812', defaultOpen: true },
  { id: 'expansion', accordionId: 'collapseOm2', icon: I.globe, waqfeyaId: '3812' },
  { id: 'tarik', accordionId: 'collapseOm3', icon: I.flag, waqfeyaId: '5165' },
  { id: 'umarAbdulAziz', accordionId: 'collapseOm4', icon: I.shield, waqfeyaId: '3812' },
  { id: 'fall', accordionId: 'collapseOm5', icon: I.warning, waqfeyaId: '3812' },
];

export const ABBASIDS_TOPICS = [
  { id: 'revolution', accordionId: 'collapseAb1', icon: I.architecture, waqfeyaId: '3812', defaultOpen: true },
  { id: 'harun', accordionId: 'collapseAb2', icon: I.crescent, waqfeyaId: '3812' },
  { id: 'science', accordionId: 'collapseAb3', icon: I.manuscript, waqfeyaId: '1239' },
  { id: 'mihna', accordionId: 'collapseAb4', icon: I.shield, waqfeyaId: '1239' },
  { id: 'baghdadFall', accordionId: 'collapseAb5', icon: I.warningDiamond, waqfeyaId: '3401' },
  { id: 'caliphateAbolition', accordionId: 'collapseAb6', icon: I.warning, waqfeyaId: '3812' },
];

export const ANDALUSIA_TOPICS = [
  { id: 'abdRahman', accordionId: 'collapseAn1', icon: I.castle, waqfeyaId: '3812', defaultOpen: true },
  { id: 'caliphate', accordionId: 'collapseAn2', icon: I.shield, waqfeyaId: '1285' },
  { id: 'fall', accordionId: 'collapseAn3', icon: I.marker, waqfeyaId: '3401' },
];

export const CENTRAL_ASIA_TOPICS = [
  { id: 'conquest', accordionId: 'collapseAs1', icon: I.marker, waqfeyaId: '3812', defaultOpen: true },
  { id: 'goldenAge', accordionId: 'collapseAs2', icon: I.manuscript, waqfeyaId: '1239' },
  { id: 'partition', accordionId: 'collapseAs3', icon: I.warningDiamond, waqfeyaId: '3401' },
  { id: 'consequences', accordionId: 'collapseAs4', icon: I.warning, waqfeyaId: '3812' },
];

export const NORTH_CAUCASUS_TOPICS = [
  { id: 'derbent', accordionId: 'collapseNc1', icon: I.shieldOutline, waqfeyaId: '3812', defaultOpen: true },
  { id: 'maslama', accordionId: 'collapseNc2', icon: I.mosque, waqfeyaId: '5165' },
  { id: 'sharia', accordionId: 'collapseNc3', icon: I.book, waqfeyaId: '3401' },
  { id: 'war', accordionId: 'collapseNc4', icon: I.shield, waqfeyaId: '3401' },
  { id: 'adjam', accordionId: 'collapseNc5', icon: I.scroll, waqfeyaId: '3812' },
  { id: 'ibnRusta', accordionId: 'collapseNc6', icon: I.manuscript, variant: 'ibnRusta', waqfeyaId: '3812' },
];

export const CRIMEA_TOPICS = [
  { id: 'goldenHorde', accordionId: 'collapseCr1', icon: I.crescent, waqfeyaId: '3405', defaultOpen: true },
  { id: 'education', accordionId: 'collapseCr2', icon: I.book, waqfeyaId: '3812' },
  { id: 'annexation', accordionId: 'collapseCr3', icon: I.flag, waqfeyaId: '3812' },
  { id: 'oppression', accordionId: 'collapseCr4', icon: I.mosque, waqfeyaId: '3401' },
  { id: 'adjam', accordionId: 'collapseCr5', icon: I.scroll, waqfeyaId: '3812' },
];

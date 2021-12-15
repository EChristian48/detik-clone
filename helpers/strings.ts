import faker from 'faker'
import { range } from './utils'

export const menus = [
  'detikNews',
  'detikFinance',
  'detikHot',
  'detikInet',
  'detikSport',
  'detikOto',
  'detikTravel',
  'detikFood',
  'detikHealth',
  'Wolipop',
  '20Detik'
]

export const mobileMenus = [
  'berbuatbaik.id',
  'Terpopuler',
  'Edukasi',
  'Hikmah',
  'Indeks'
]

export const secondMenus = [
  'Adsmart',
  'Foto',
  'detikX',
  'Sepakbola',
  'Pasangmata',
  'Hikmah',
  'Edukasi',
  'berbuatbaik.id'
]

export const footerMenus = [
  'Redaksi',
  'Pedoman Media Siber',
  'Karir',
  'Kotak Pos',
  'Info Iklan',
  'Privacy Policy',
  'Disclaimer'
]

export const categories = range(15).map(() => faker.lorem.word())
export const layanan = range(7).map(() => faker.lorem.word())
export const informasi = range(8).map(() => faker.lorem.word())
export const jaringanMedia = range(6).map(() => faker.lorem.word())

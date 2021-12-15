import { DefaultSeoProps } from 'next-seo'

const seoConfig: DefaultSeoProps = {
  canonical: 'https://detikclone.netlify.app/',
  defaultTitle: 'detikcom - Informasi Berita Terkini dan Terbaru Hari ini',
  titleTemplate: '%s - detikcom',
  description:
    'Indeks berita terkini dan terbaru hari ini dari peristiwa, kecelakaan, kriminal, hukum, berita unik, Politik, dan liputan khusus di Indonesia dan Internasional',
  openGraph: {
    url: 'https://detikclone.netlify.app/',
    type: 'website',
    title: 'detikcom - Informasi Berita Terkini dan Terbaru Hari ini',
    description:
      'Indeks berita terkini dan terbaru hari ini dari peristiwa, kecelakaan, kriminal, hukum, berita unik, Politik, dan liputan khusus di Indonesia dan Internasional'
  },
  twitter: {
    cardType: 'summary',
    site: 'https://detikclone.netlify.app/'
  }
}

export default seoConfig

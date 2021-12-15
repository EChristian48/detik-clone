import { Box, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import type { GetStaticProps, NextPage } from 'next'
import logo from '~/assets/logo.png'
import {
  DesktopSidebar,
  Footer,
  Header,
  Headline,
  Nav,
  NewsCard,
  SmallNewsCard,
  StyledImage,
  TagPopuler
} from '~/components'
import TopNews from '~/components/TopNews'
import {
  categories,
  dummyNews,
  dummyTags,
  footerMenus,
  informasi,
  jaringanMedia,
  layanan,
  menus,
  mobileMenus,
  secondMenus
} from '~/helpers/server'
import theme from '~/material.theme'
import { News } from '~/types'

interface HomeProps {
  categories: string[]
  footerMenus: string[]
  informasi: string[]
  jaringanMedia: string[]
  layanan: string[]
  news: News[]
  tags: string[]
  menus: string[]
  mobileMenus: string[]
  secondMenus: string[]
}

const Home: NextPage<HomeProps> = ({
  secondMenus,
  menus,
  tags,
  news,
  layanan,
  informasi,
  jaringanMedia,
  footerMenus,
  categories,
  mobileMenus
}) => {
  return (
    <>
      <Nav
        categories={categories}
        informasi={informasi}
        layanan={layanan}
        mobileMenus={mobileMenus}
      />

      <Container
        sx={{
          marginY: theme.spacing(2)
        }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sx={{
              [theme.breakpoints.down('sm')]: {
                display: 'none'
              }
            }}>
            <StyledImage src={logo.src} />
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              [theme.breakpoints.down('sm')]: {
                display: 'none'
              }
            }}>
            <Header menus={menus} secondMenus={secondMenus} />
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              [theme.breakpoints.down('md')]: {
                display: 'none'
              }
            }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplate: 'auto / repeat(5, 1fr)',
                gap: theme.spacing(2)
              }}>
              {news.map((item, index) => (
                <SmallNewsCard {...item} key={index} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container
        sx={{
          marginY: theme.spacing(2)
        }}>
        <Grid container columnSpacing={2}>
          <Grid item xs={12} sm={8}>
            <Stack spacing={2}>
              <Headline {...news[0]} />

              <Box
                sx={{
                  [theme.breakpoints.up('sm')]: {
                    display: 'none'
                  }
                }}>
                <TagPopuler tags={tags} />
              </Box>

              <Divider />

              {/* TODO: Make a separate component */}
              <Typography
                variant="h6"
                color="primary"
                fontWeight={theme.typography.fontWeightBold}>
                News Feed
              </Typography>

              <TopNews {...news[3]} />
              {news.map((item, index) => (
                <NewsCard {...item} key={index} />
              ))}

              <Divider />

              {/* TODO: Make a separate component */}
              <Typography
                variant="h6"
                color="primary"
                fontWeight={theme.typography.fontWeightBold}>
                Detik Network
              </Typography>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplate: 'auto / repeat(3, 1fr)',
                  [theme.breakpoints.down('sm')]: {
                    gridTemplate: 'auto / repeat(2, 1fr)'
                  },
                  gap: theme.spacing(2)
                }}>
                {news.slice(0, 4).map((item, index) => (
                  <SmallNewsCard {...item} key={index} />
                ))}
              </Box>
            </Stack>
          </Grid>

          <Grid
            item
            sm={4}
            sx={{
              [theme.breakpoints.down('sm')]: {
                display: 'none'
              }
            }}>
            <DesktopSidebar news={news} tags={tags} />
          </Grid>
        </Grid>
      </Container>

      <Footer
        categories={categories}
        footerMenus={footerMenus}
        informasi={informasi}
        jaringanMedia={jaringanMedia}
        layanan={layanan}
      />
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {
      categories,
      footerMenus,
      informasi,
      jaringanMedia,
      layanan,
      menus,
      secondMenus,
      mobileMenus,
      news: dummyNews(5),
      tags: dummyTags(5)
    }
  }
}

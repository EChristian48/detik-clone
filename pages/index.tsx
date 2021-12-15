import { Box, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import type { NextPage } from 'next'
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
import { dummyNews, dummyTags } from '~/helpers'
import theme from '~/material.theme'

const Home: NextPage = () => {
  return (
    <>
      <Nav />

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
            <Header />
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
              {dummyNews(5).map((item, index) => (
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
              <Headline {...dummyNews(1)[0]} />

              <Box
                sx={{
                  [theme.breakpoints.up('sm')]: {
                    display: 'none'
                  }
                }}>
                <TagPopuler tags={dummyTags(5)} />
              </Box>

              <Divider />

              <Typography
                variant="h6"
                color="primary"
                fontWeight={theme.typography.fontWeightBold}>
                News Feed
              </Typography>

              <TopNews {...dummyNews(1)[0]} />
              {dummyNews(4).map((item, index) => (
                <NewsCard {...item} key={index} />
              ))}

              <Divider />

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
                {dummyNews(5).map((item, index) => (
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
            <DesktopSidebar />
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  )
}

export default Home

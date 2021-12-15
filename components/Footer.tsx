import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube
} from '@mui/icons-material'
import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import { memo } from 'react'
import logo from '~/assets/logo.png'
import theme from '~/material.theme'
import { StyledImage } from '.'

export interface FooterProps {
  categories: string[]
  footerMenus: string[]
  informasi: string[]
  jaringanMedia: string[]
  layanan: string[]
}

function Component({
  categories,
  footerMenus,
  informasi,
  jaringanMedia,
  layanan
}: FooterProps) {
  return (
    <Box
      sx={{
        backgroundColor: '#e6e6e6',
        paddingY: theme.spacing(6),
        borderTop: `4px solid ${theme.palette.primary.main}`
      }}>
      <Container>
        <Grid container columnSpacing={1}>
          {/* Logos and socials */}
          <Grid item xs={12} md={3}>
            <Stack spacing={2}>
              <StyledImage
                src={logo.src}
                sx={{
                  maxWidth: { xs: '50%', sm: '80%' },
                  display: 'block',
                  marginX: 'auto'
                }}
              />

              <Stack
                direction="row"
                flexWrap="wrap"
                justifyContent="center"
                gap={1}>
                {footerMenus.map((item, index) => (
                  <Typography fontSize={12} key={index}>
                    {item}
                  </Typography>
                ))}
              </Stack>

              <Stack
                direction="row"
                flexWrap="wrap"
                justifyContent="center"
                gap={1}>
                <Facebook />
                <Twitter />
                <Instagram />
                <LinkedIn />
                <YouTube />
              </Stack>

              <Typography textAlign="center" fontSize={12}>
                Copyright @ 2021 detikcom, All right reserved
              </Typography>
            </Stack>
          </Grid>

          {/* Categories */}
          <Grid
            item
            md={3}
            sx={{
              [theme.breakpoints.down('md')]: {
                display: 'none'
              }
            }}>
            <Typography fontWeight={700} fontSize={14} marginBottom={2}>
              Kategori
            </Typography>
            <Stack flexWrap="wrap" maxHeight={200} spacing={1 / 2}>
              {categories.map((item, index) => (
                <Typography key={index} fontSize={12}>
                  {item}
                </Typography>
              ))}
            </Stack>
          </Grid>
          <Grid
            item
            md={2}
            sx={{
              [theme.breakpoints.down('md')]: {
                display: 'none'
              }
            }}>
            <Typography fontWeight={700} fontSize={14} marginBottom={2}>
              Layanan
            </Typography>
            <Stack flexWrap="wrap" maxHeight={200} spacing={1 / 2}>
              {layanan.map((item, index) => (
                <Typography key={index} fontSize={12}>
                  {item}
                </Typography>
              ))}
            </Stack>
          </Grid>
          <Grid
            item
            md={2}
            sx={{
              [theme.breakpoints.down('md')]: {
                display: 'none'
              }
            }}>
            <Typography fontWeight={700} fontSize={14} marginBottom={2}>
              Informasi
            </Typography>
            <Stack flexWrap="wrap" maxHeight={200} spacing={1 / 2}>
              {informasi.map((item, index) => (
                <Typography key={index} fontSize={12}>
                  {item}
                </Typography>
              ))}
            </Stack>
          </Grid>
          <Grid
            item
            md={2}
            sx={{
              [theme.breakpoints.down('md')]: {
                display: 'none'
              }
            }}>
            <Typography fontWeight={700} fontSize={14} marginBottom={2}>
              Jaringan Media
            </Typography>
            <Stack flexWrap="wrap" maxHeight={200} spacing={1 / 2}>
              {jaringanMedia.map((item, index) => (
                <Typography key={index} fontSize={12}>
                  {item}
                </Typography>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

const Footer = memo(Component)

export default Footer

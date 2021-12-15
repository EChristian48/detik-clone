import { Article, Close, LiveTv, Menu } from '@mui/icons-material'
import {
  AppBar,
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography
} from '@mui/material'
import { useCallback } from 'react'
import logoSmall from '~/assets/logo-small.png'
import logo from '~/assets/logo.png'
import { categories, informasi, layanan, useToggle } from '~/helpers'
import theme from '~/material.theme'
import { RoundedButton, SearchInput, StyledImage } from '..'
import MobileMenus from './MobileMenus'
export default function Nav() {
  const [isDrawerOpen, toggleDrawer] = useToggle(false)
  const buttonOnClick = useCallback(() => toggleDrawer(), [toggleDrawer])
  const drawerOnClose = useCallback(() => toggleDrawer(false), [toggleDrawer])

  return (
    <>
      <AppBar
        position="sticky"
        color="secondary"
        sx={{
          color: theme.palette.common.black,
          backgroundColor: theme.palette.common.white
        }}>
        <Container>
          <Toolbar
            variant="dense"
            sx={{ justifyContent: 'space-between', gap: theme.spacing(1) }}>
            <IconButton
              edge="start"
              aria-label="menu"
              onClick={buttonOnClick}
              sx={{
                marginRight: theme.spacing(1),
                [theme.breakpoints.up('sm')]: {
                  color: theme.palette.common.white,
                  backgroundColor: theme.palette.primary.main
                }
              }}>
              <Menu fontSize="small" />
            </IconButton>
            <StyledImage
              src={logo.src}
              sx={{
                height: 20,
                [theme.breakpoints.up('sm')]: {
                  display: 'none'
                },
                marginRight: 'auto'
              }}
            />
            <Typography
              onClick={buttonOnClick}
              sx={{
                fontSize: 13,
                fontWeight: theme.typography.fontWeightBold,
                cursor: 'pointer',
                [theme.breakpoints.down('sm')]: {
                  display: 'none'
                }
              }}>
              MENU
            </Typography>

            <Box
              sx={{
                marginX: 'auto',
                [theme.breakpoints.down('sm')]: {
                  display: 'none'
                }
              }}>
              <SearchInput placeholder="Cari Berita" />
            </Box>

            <IconButton
              edge="end"
              sx={{
                [theme.breakpoints.up('sm')]: {
                  display: 'none'
                }
              }}>
              <LiveTv />
            </IconButton>

            <Box
              sx={{
                display: 'flex',
                gap: theme.spacing(1 / 2),
                [theme.breakpoints.down('sm')]: {
                  display: 'none'
                }
              }}>
              <RoundedButton variant="contained" sx={{ whiteSpace: 'nowrap' }}>
                Daftar detikID
              </RoundedButton>
              <RoundedButton variant="outlined">Masuk</RoundedButton>
            </Box>
          </Toolbar>
        </Container>

        <MobileMenus />
      </AppBar>

      <Drawer anchor="left" open={isDrawerOpen} onClose={drawerOnClose}>
        <Stack spacing={1} padding={2} minWidth={400}>
          <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton onClick={drawerOnClose}>
              <Close />
            </IconButton>
            <StyledImage
              src={logoSmall.src}
              width={20}
              sx={{ flexShrink: 0 }}
            />{' '}
            detikcom
          </Typography>

          <Divider />
          <Typography variant="h6" fontSize={16} marginBottom={2}>
            Kategori Berita
          </Typography>

          <Stack maxHeight={250} flexWrap="wrap" spacing={1}>
            {categories.map((item, index) => (
              <Typography
                key={index}
                variant="body1"
                fontSize={12}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': { backgroundColor: '#eee' }
                }}>
                <Article /> {item}
              </Typography>
            ))}
          </Stack>

          <Divider />
          <Typography variant="h6" fontSize={16} marginBottom={2}>
            Layanan
          </Typography>

          <Stack maxHeight={250} flexWrap="wrap" spacing={1}>
            {layanan.map((item, index) => (
              <Typography
                key={index}
                variant="body1"
                fontSize={12}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': { backgroundColor: '#eee' }
                }}>
                <Article /> {item}
              </Typography>
            ))}
          </Stack>

          <Divider />
          <Typography variant="h6" fontSize={16} marginBottom={2}>
            Detik Network
          </Typography>

          <Stack maxHeight={250} flexWrap="wrap" spacing={1}>
            {informasi.map((item, index) => (
              <Typography
                key={index}
                variant="body1"
                fontSize={12}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': { backgroundColor: '#eee' }
                }}>
                <Article /> {item}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </Drawer>
    </>
  )
}

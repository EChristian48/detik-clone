import { LiveTv, Menu } from '@mui/icons-material'
import {
  AppBar,
  Box,
  Container,
  IconButton, Toolbar,
  Typography
} from '@mui/material'
import logo from '~/assets/logo.png'
import theme from '~/material.theme'
import { RoundedButton, SearchInput, StyledImage } from '..'
import MobileMenus from './MobileMenus'

export default function Nav() {
  return (
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
  )
}

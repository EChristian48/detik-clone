import { LiveTv } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import { menus, secondMenus } from '~/helpers'
import theme from '~/material.theme'
import HeaderLink from './HeaderLink'
import HeaderLinksContainer from './HeaderLinksContainer'
import SecondHeaderLink from './SecondHeaderLink'

export default function Header() {
  return (
    <Box>
      <HeaderLinksContainer direction="row" flexWrap="wrap" spacing={1}>
        {menus.map((menu) => (
          <HeaderLink key={menu}>{menu}</HeaderLink>
        ))}
      </HeaderLinksContainer>

      <Stack
        direction="row"
        flexWrap="wrap"
        spacing={1}
        sx={{
          backgroundColor: '#f0f0f0',
          borderRadius: theme.spacing(1 / 2),
          padding: theme.spacing(1 / 2, 1)
        }}>
        <SecondHeaderLink>
          <LiveTv sx={{ height: 16, marginRight: 1 / 2 }} />
          Live Tv
        </SecondHeaderLink>
        {secondMenus.map((menu) => (
          <SecondHeaderLink key={menu}>{menu}</SecondHeaderLink>
        ))}
      </Stack>
    </Box>
  )
}

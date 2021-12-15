import { LiveTv } from '@mui/icons-material'
import { Box, Stack } from '@mui/material'
import { memo } from 'react'
import theme from '~/material.theme'
import HeaderLink from './HeaderLink'
import HeaderLinksContainer from './HeaderLinksContainer'
import SecondHeaderLink from './SecondHeaderLink'

export interface HeaderProps {
  menus: string[]
  secondMenus: string[]
}

function Component({ menus, secondMenus }: HeaderProps) {
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

const Header = memo(Component)
export default Header

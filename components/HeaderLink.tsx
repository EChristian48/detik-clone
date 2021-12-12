import { Box, BoxProps, styled } from '@mui/material'

const HeaderLink = styled(Box)<BoxProps>(({ theme }) => ({
  textTransform: 'none',
  color: theme.header.default,
  ':hover': {
    color: theme.header.hover
  },
  transition: theme.header.transition,
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.fontSize,
  fontFamily: theme.typography.fontFamily,
  padding: theme.spacing(3 / 4),
  cursor: 'pointer'
}))

export default HeaderLink

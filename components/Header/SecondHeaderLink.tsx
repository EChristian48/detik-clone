import { Box, BoxProps, styled } from '@mui/material'

const SecondHeaderLink = styled(Box)<BoxProps>(({ theme }) => ({
  textTransform: 'none',
  color: theme.palette.common.black,
  ':hover': {
    color: theme.palette.primary.main
  },
  transition: theme.header.transition,
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.fontSize,
  fontFamily: theme.typography.fontFamily,
  padding: theme.spacing(3 / 4),
  cursor: 'pointer'
}))

export default SecondHeaderLink

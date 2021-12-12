import { Button, ButtonProps, styled } from '@mui/material'

const RoundedButton = styled(Button)<ButtonProps>(({ theme }) => ({
  textTransform: 'none',
  borderRadius: '9999px',
  '&.MuiButton-outlined': {
    border: '2px solid',
    borderColor: theme.palette.primary.main
  },
  transition: theme.header.transition,
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.fontSize,
  fontFamily: theme.typography.fontFamily,
  cursor: 'pointer'
}))

export default RoundedButton

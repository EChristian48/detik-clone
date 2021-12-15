import { Stack, StackProps, styled } from '@mui/material'

const HeaderLinksContainer = styled(Stack)<StackProps>(({ theme }) => ({
  background: 'linear-gradient(to right, #21409a 50%, #007cbd 100%)',
  borderRadius: theme.spacing(1/2),
  padding: theme.spacing(1/2, 1)
}))

export default HeaderLinksContainer

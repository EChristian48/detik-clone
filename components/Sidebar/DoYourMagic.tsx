import { Send } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import { memo } from 'react'
import dymLogo from '~/assets/logo-dym.png'
import { StyledImage } from '..'

function Component() {
  return (
    <Box>
      <StyledImage
        src={dymLogo.src}
        sx={{ display: 'block', maxWidth: '100%' }}
      />

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center'
        }}>
        <Typography fontSize={11}>
          Bagi Anda yang menemukan masalah perkotaan, silakan kabarkan ke kami
          lewat klik tombol kirim.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          endIcon={<Send />}
          size="small"
          sx={{ flexShrink: 0 }}>
          Kirim
        </Button>
      </Box>
    </Box>
  )
}

const DoYourMagic = memo(Component)

export default DoYourMagic

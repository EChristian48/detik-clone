import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import faker from 'faker'
import theme from '~/material.theme'

export default function Headline() {
  return (
    <Card
      sx={{
        display: 'grid',
        gridTemplateRows: '1fr',
        gridTemplateColumns: '1fr'
      }}>
      <CardMedia
        component="img"
        image={faker.image.image()}
        alt="green iguana"
        sx={{ gridArea: '1/1/1/1' }}
      />
      <CardContent
        sx={{
          padding: theme.spacing(3 / 2),
          paddingTop: theme.spacing(4),
          background:
            'linear-gradient(to top, #21409a 65%, rgba(255, 255, 255, 0) 100%)',
          color: theme.palette.common.white,
          gridArea: '1/1/1/1',
          alignSelf: 'end',
          '&:last-child': {
            padding: theme.spacing(3 / 2),
            paddingTop: theme.spacing(4)
          }
        }}>
        <Typography variant="h6" fontSize={20} fontWeight={600}>
          {faker.lorem.sentence()}
        </Typography>
        <Typography variant="caption">
          {faker.lorem.word()} | 8 menit yang lalu
        </Typography>
      </CardContent>
    </Card>
  )
}

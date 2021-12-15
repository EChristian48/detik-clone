import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { memo } from 'react'
import theme from '~/material.theme'
import { News } from '~/types'

export type HeadlineProps = News

function Component({ title, category, img }: HeadlineProps) {
  return (
    <Card
      sx={{
        display: 'grid',
        gridTemplateRows: '1fr',
        gridTemplateColumns: '1fr',
        cursor: 'pointer',
        '&:hover .headline-title': { color: theme.palette.secondary.light }
      }}>
      <CardMedia
        component="img"
        image={img}
        alt="green iguana"
        sx={{ gridArea: '1/1/1/1', maxHeight: 450 }}
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
        <Typography
          variant="h6"
          fontSize={20}
          fontWeight={600}
          className="headline-title"
          sx={{ transition: 'all 0.3s ease-in-out 0s' }}>
          {title}
        </Typography>
        <Typography variant="caption">
          {category} | 8 menit yang lalu
        </Typography>
      </CardContent>
    </Card>
  )
}

const Headline = memo(Component)

export default Headline

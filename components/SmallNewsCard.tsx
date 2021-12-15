import { Box, Typography } from '@mui/material'
import { memo } from 'react'
import theme from '~/material.theme'
import { News } from '~/types'
import { StyledImage } from '.'

export interface SmallNewsCardProps extends Omit<News, 'category'> {
  category?: string
}

function Component({ img, title, category }: SmallNewsCardProps) {
  return (
    <Box
      sx={{
        cursor: 'pointer',
        '&:hover .news-card-img': {
          transform: 'scale(1.1)'
        },
        '&:hover .news-card-title': {
          color: theme.palette.primary.main
        }
      }}>
      <Box
        sx={{
          overflow: 'hidden',
          borderRadius: theme.spacing(1 / 2),
          height: { sm: 100, md: 120 }
        }}>
        <StyledImage
          className="news-card-img"
          src={img}
          sx={{
            objectPosition: 'center',
            objectFit: 'cover',
            height: '100%',
            width: '100%',
            transition: 'all 0.3s ease'
          }}
        />
      </Box>

      <Typography
        fontSize={{ xs: 16 }}
        fontWeight={600}
        marginTop={1}
        sx={{ transition: 'all 0.3s ease' }}
        className="news-card-title">
        {title}
      </Typography>
      {category && (
        <Typography variant="caption">
          {category} | 8 menit yang lalu
        </Typography>
      )}
    </Box>
  )
}

const SmallNewsCard = memo(Component)

export default SmallNewsCard

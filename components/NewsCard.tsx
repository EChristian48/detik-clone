import { Box, Grid, Typography } from '@mui/material'
import { memo } from 'react'
import theme from '~/material.theme'
import { News } from '~/types'

export type NewsCardProps = News

function Component({ img, title, category }: NewsCardProps) {
  return (
    <Grid
      container
      sx={{
        cursor: 'pointer',
        '&:hover .news-card-img': {
          transform: 'scale(1.1)'
        },
        '&:hover .news-card-title': {
          color: theme.palette.primary.main
        }
      }}>
      <Grid item xs={4}>
        <Box
          sx={{
            overflow: 'hidden',
            borderRadius: theme.spacing(1),
            height: { xs: '100px', sm: '150px', md: '200px' }
          }}>
          <Box
            className="news-card-img"
            sx={{
              backgroundImage: `url(${img})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: '100%',
              transition: 'all 0.3s ease'
            }}
          />
        </Box>
      </Grid>

      <Grid
        item
        xs={8}
        paddingX={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: { md: 'center' }
        }}>
        <Typography
          fontSize={{ xs: 16, md: 20 }}
          fontWeight={600}
          className="news-card-title">
          {title}
        </Typography>
        <Typography variant="caption">
          {category} | 8 menit yang lalu
        </Typography>
      </Grid>
    </Grid>
  )
}

const NewsCard = memo(Component)

export default NewsCard

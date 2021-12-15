import { Box, Grid, Typography } from '@mui/material'
import { memo } from 'react'
import theme from '~/material.theme'
import { News } from '~/types'

export type TopNewsProps = News

function Component({ img, title, category }: TopNewsProps) {
  return (
    <Grid
      container
      sx={{
        [theme.breakpoints.down('sm')]: {
          backgroundColor: '#EEEEEE'
        },
        padding: theme.spacing(2),
        cursor: 'pointer',
        '&:hover .news-card-img': {
          transform: 'scale(1.1)'
        },
        '&:hover .news-card-title': {
          color: theme.palette.primary.main
        }
      }}>
      <Grid
        item
        xs={6}
        paddingRight={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
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

      <Grid item xs={6}>
        <Box
          sx={{
            overflow: 'hidden',
            borderRadius: theme.spacing(1),
            height: { xs: '120px', sm: '170px', md: '240px' }
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
    </Grid>
  )
}

const TopNews = memo(Component)
export default TopNews

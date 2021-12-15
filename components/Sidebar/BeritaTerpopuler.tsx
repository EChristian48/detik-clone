import { Box, Button, Stack, Typography } from '@mui/material'
import { memo } from 'react'
import theme from '~/material.theme'
import { News } from '~/types'

export interface TagPopulerProps {
  news: News[]
}

function Component({ news }: TagPopulerProps) {
  return (
    <Box>
      <Typography
        color={theme.palette.primary.main}
        fontWeight={theme.typography.fontWeightBold}
        marginBottom={theme.spacing(3 / 2)}>
        Berita Terpopuler
      </Typography>

      <Stack spacing={3 / 2}>
        {news.map(({ category, title }, index) => (
          <Box key={index} sx={{ display: 'flex' }}>
            <Typography
              fontSize={{ xs: 20 }}
              fontWeight={600}
              sx={{
                flexShrink: 0,
                paddingRight: theme.spacing(2),
                color: '#999999'
              }}>
              #{index + 1}
            </Typography>
            <Box>
              <Typography fontSize={{ xs: 16, md: 20 }} fontWeight={600}>
                {title}
              </Typography>
              <Typography variant="caption">
                {category} | 8 menit yang lalu
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>

      <Button
        variant="contained"
        color="secondary"
        sx={{ marginX: 'auto', marginY: theme.spacing(3), display: 'block' }}>
        Lihat Selengkapnya
      </Button>
    </Box>
  )
}

const BeritaTerpopuler = memo(Component)

export default BeritaTerpopuler

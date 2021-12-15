import { Box, Stack, Typography } from '@mui/material'
import { memo } from 'react'
import theme from '~/material.theme'

export interface TagPopulerProps {
  tags: string[]
}

function Component({ tags }: TagPopulerProps) {
  return (
    <Box>
      <Typography
        color={theme.palette.primary.main}
        fontWeight={theme.typography.fontWeightBold}
        marginBottom={theme.spacing(3 / 2)}>
        Tag Terpopuler
      </Typography>

      <Stack spacing={1 / 2}>
        {tags.map((item, index) => (
          <Typography
            key={index}
            fontSize={theme.typography.fontSize}
            fontWeight={theme.typography.fontWeightBold}>
            <Typography
              fontWeight={theme.typography.fontWeightRegular}
              color="#EE4023"
              component="span">
              #
            </Typography>{' '}
            {item}
          </Typography>
        ))}
      </Stack>
    </Box>
  )
}

const TagPopuler = memo(Component)

export default TagPopuler

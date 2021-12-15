import { Divider, Stack } from '@mui/material'
import { memo } from 'react'
import { News } from '~/types'
import { BeritaTerpopuler, DoYourMagic, TagPopuler } from '.'

export interface DesktopSidebarProps {
  tags: string[]
  news: News[]
}

function Component({ tags, news }: DesktopSidebarProps) {
  return (
    <Stack spacing={2} sx={{ position: 'sticky', top: '60px' }}>
      <Divider />
      <DoYourMagic />
      <Divider />
      <TagPopuler tags={tags} />
      <Divider />
      <BeritaTerpopuler news={news} />
      <Divider />
    </Stack>
  )
}

const DesktopSidebar = memo(Component)

export default DesktopSidebar

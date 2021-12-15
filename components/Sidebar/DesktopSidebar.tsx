import { Box, Divider, Stack } from '@mui/material'
import { dummyNews, dummyTags } from '~/helpers'
import { BeritaTerpopuler, DoYourMagic, TagPopuler } from '.'

export default function DesktopSidebar() {
  return (
    <Stack spacing={2} sx={{ position: 'sticky', top: '60px' }}>
      <Divider />
      <DoYourMagic />
      <Divider />
      <TagPopuler tags={dummyTags(5)} />
      <Divider />
      <BeritaTerpopuler news={dummyNews(5)} />
      <Divider />
    </Stack>
  )
}

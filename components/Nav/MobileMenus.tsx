import { Tab, Tabs } from '@mui/material'
import theme from '~/material.theme'

interface MobileMenusProps {
  mobileMenus: string[]
}
export default function MobileMenus({ mobileMenus }: MobileMenusProps) {
  return (
    <Tabs
      variant="scrollable"
      scrollButtons={false}
      sx={{
        [theme.breakpoints.up('sm')]: {
          display: 'none'
        }
      }}>
      {mobileMenus.map((menu, index) => (
        <Tab
          key={index}
          label={menu}
          sx={{
            textTransform: 'none',
            padding: theme.spacing(1, 3 / 2),
            fontSize: theme.typography.fontSize,
            fontWeight: 600,
            transition: 'all 0.3s ease-in-out 0s',
            color: theme.palette.common.black,
            '&:hover': {
              color: '#21409A'
            }
          }}
        />
      ))}
    </Tabs>
  )
}

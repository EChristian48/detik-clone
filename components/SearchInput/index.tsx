import { Search } from '@mui/icons-material'
import { InputBaseProps, styled } from '@mui/material'
import SearchInputField from './SearchInputField'

const SearchInputWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '9999px',
  borderColor: '#E5E5E5',
  backgroundColor: theme.palette.common.white,
  borderStyle: 'solid',
  borderWidth: '1px',
  padding: theme.spacing(0, 2),
  fontSize: theme.typography.fontSize
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  right: 0,
  top: 0,
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

export default function SearchInput(props: InputBaseProps) {
  return (
    <SearchInputWrapper>
      <SearchInputField {...props} />
      <SearchIconWrapper>
        <Search />
      </SearchIconWrapper>
    </SearchInputWrapper>
  )
}

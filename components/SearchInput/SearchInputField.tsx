import { InputBase, InputBaseProps, styled } from '@mui/material'

const SearchInputField = styled(InputBase)<InputBaseProps>(({ theme }) => ({
  color: 'inherit',
  fontSize: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 0),
    // vertical padding + font size from searchIcon
    paddingRight: `calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create('width'),
    width: '100%'
  }
}))

export default SearchInputField

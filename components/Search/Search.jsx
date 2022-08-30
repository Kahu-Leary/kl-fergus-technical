import React from 'react'
import { TWSearchContainer, TWSearchInput, TWMdSearch } from './styles'

const Search = ({ search, setSearch }) => {
  const handleSearch = (e) => {
    setSearch(e.target.value)
    console.log(search)
  }
  return (
    <TWSearchContainer>
      <TWMdSearch size='1.8em' />
      <TWSearchInput type='text' placeholder='Type to search...' onChange={e => handleSearch(e)}/>
    </TWSearchContainer>
  )
}

export default Search
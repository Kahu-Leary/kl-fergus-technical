import React from 'react'
import AddJobBtn from '../AddJobBtn'
import Search from '../Search'
import { TWLogo, TWSiteHeaderContainer } from './styles'

const SiteHeader = ({ search, setSearch, showModal, setShowModal }) => {
  return (
    <>
        <TWLogo size='5em' />
        <TWSiteHeaderContainer>
            <Search search={search} setSearch={setSearch}/>
            <AddJobBtn showModal={showModal} setShowModal={setShowModal}/>
        </TWSiteHeaderContainer>
    </>
  )
}

export default SiteHeader
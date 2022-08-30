import React from 'react'
import { TWModalOverlay, TWModalBox, TWModalContent } from './styles'
import AddJobForm from '../AddJobForm'

const Modal = ({ showModal, setShowModal }) => {
    return (
        <>
            <TWModalOverlay>
                <TWModalBox>
                    <TWModalContent>
                        <AddJobForm setShowModal={setShowModal} />
                    </TWModalContent>
                </TWModalBox>
            </TWModalOverlay>
        </>
    )
}

export default Modal
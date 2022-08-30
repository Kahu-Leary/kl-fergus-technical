import tw from 'tailwind-styled-components'
import { AiOutlineClose } from 'react-icons/ai'

export const TWFormTitle = tw.h2`
    text-red-400
    text-3xl
    mb-12
`
export const TWForm = tw.form`
    relative
`
export const TWInput = tw.input`
    rounded-lg
    p-1
`
export const TWSelect = tw.select`
    rounded-lg
    py-5
    px-16
`
export const TWFormSubmitBtn = tw.button`
    bg-orange-400
    rounded-xl
    my-5
    py-3
    px-20
`
export const TWCloseBtn = tw(AiOutlineClose)`
    text-6xl
    absolute
    right-10
    top-10
    cursor-pointer
`
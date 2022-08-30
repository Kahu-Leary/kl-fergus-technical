import tw from 'tailwind-styled-components'
import { AiOutlineDelete } from 'react-icons/ai'

export const TWNoteListCard = tw.div`
    relative
    bg-gray-900
    py-14
    px-10
    rounded-xl
    border
    border-solid
    border-slate-900
    hover:border-teal-500
    ease-in-out 
    duration-300
    transition-colors
    break-words
`
export const TWNoteListItemDelete = tw.div`
    absolute
    top-3
    right-3
    text-2xl
    cursor-pointer
`
export const TWDeleteIcon = tw(AiOutlineDelete)`
    hover:animate-pulse
`
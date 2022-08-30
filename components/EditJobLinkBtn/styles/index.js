import tw from "tailwind-styled-components/dist/tailwind";
import { AiOutlineEdit } from 'react-icons/ai'

export const TWBtn = tw.button`
    absolute
    right-7
    bottom-5
    border-2
    border-solid
    border-orange-500
    p-2
    my-2
    rounded-full
    ml-3

    hover:border-teal-500
    ease-in-out 
    duration-300
    transition-colors
`
export const TWAddIcon = tw(AiOutlineEdit)`
    hover:animate-pulse
`
import tw from "tailwind-styled-components/dist/tailwind";
import { AiOutlineSave } from 'react-icons/ai'

export const TWSaveBtn = tw.button`
    text-amber-400
    flex
    items-center
    justify-center
    border-2
    border-solid
    border-amber-400
    p-3
    mt-4
    rounded-xl
    mr-3

    hover:border-teal-500
    ease-in-out 
    duration-300
    transition-colors
`
export const TWSaveIcon = tw(AiOutlineSave)`
    mr-2
    hover:animate-pulse
`
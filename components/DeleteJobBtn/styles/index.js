import tw from "tailwind-styled-components/dist/tailwind";
import { AiOutlineDelete } from 'react-icons/ai'

export const TWBtn = tw.button`
    text-rose-400
    flex
    items-center
    justify-center
    border-2
    border-solid
    border-rose-400
    p-2
    mt-10
    rounded-xl

    hover:border-teal-500
    ease-in-out 
    duration-300
    transition-colors
`
export const TWDeleteIcon = tw(AiOutlineDelete)`
    mr-2
    hover:animate-pulse
`
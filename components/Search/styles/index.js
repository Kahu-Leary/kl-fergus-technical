import tw from "tailwind-styled-components/dist/tailwind";
import { MdSearch } from 'react-icons/md'

export const TWSearchContainer = tw.div`
    flex
    items-center
    p-2
    my-2
    rounded-full
    flex-auto

    border-2
    border-solid
    border-orange-500
`
export const TWSearchInput = tw.input`
    border-none
    bg-transparent
    w-full
    h-full
    py-1
    rounded-full

    focus:outline-none
    placeholder:text-white
`
export const TWMdSearch = tw(MdSearch)`
    text-white
    mx-2
`
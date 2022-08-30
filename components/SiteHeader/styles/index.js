import tw from "tailwind-styled-components/dist/tailwind";
import { FaDog } from 'react-icons/fa'

export const TWSiteHeaderContainer = tw.div`
    flex
    justify-center
    items-center
    mb-5
`

export const TWLogo = tw(FaDog)`
    text-white
    my-4
`
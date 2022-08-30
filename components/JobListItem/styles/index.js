import tw from 'tailwind-styled-components'

export const TWJobListCard = tw.div`
    relative
    bg-gray-900
    p-8
    rounded-xl
    min-h-50
    border
    border-solid
    border-slate-900
    hover:border-teal-500
    ease-in-out 
    duration-300
    transition-colors
    min-h-60
`
export const TWJobDataHighlight = tw.span`
    ${({ color }) => ( color ? color : "text-orange-400")}
`
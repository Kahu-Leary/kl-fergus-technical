import tw from 'tailwind-styled-components'

export const TWSingleJobBackBtn = tw.button`
    rounded-xl
    p-4
    border-2
    border-solid
    border-yellow-400
    mb-10

    hover:border-teal-500
    ease-in-out 
    duration-300
    transition-colors
`
export const TWJobPageContainer = tw.div`
    flex
    flex-col
    justify-center
    items-center
    min-h-screen
    p-10
`
export const TWJobDetailsContainer = tw.div`
    space-y-4
    w-full
    max-w-xl
`
export const TWJobDetails = tw.div`
    text-orange-400
`
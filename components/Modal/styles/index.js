import tw from 'tailwind-styled-components'

export const TWModalOverlay = tw.div`
    absolute
    top-0
    left-0
    right-0
    bottom-0

    bg-slate-900
    min-h-full
    w-full

    flex
    justify-center
    items-center
    z-50
`
export const TWModalBox = tw.div`
    flex
`
export const TWModalContent = tw.div`
    w-screen
    max-w-md
    flex
    items-center
    justify-center
`
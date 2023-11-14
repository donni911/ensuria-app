import customFonts from 'next/font/local'

export const tthoves = customFonts({
    src: [
        {
            path: '../../public/fonts/TTHoves-Regular.woff2',
            weight: '400',
        },
        {
            path: '../../public/fonts/TTHoves-Medium.woff2',
            weight: '500',
        },
    ],
});
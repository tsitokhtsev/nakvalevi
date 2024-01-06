import localFont from 'next/font/local';

export const mersad = localFont({
    src: [
        {
            path: 'mersad-thin.woff2',
            weight: '100',
        },
        {
            path: 'mersad-light.woff2',
            weight: '300',
        },
        {
            path: 'mersad-regular.woff2',
            weight: '400',
        },
        {
            path: 'mersad-medium.woff2',
            weight: '500',
        },
        {
            path: 'mersad-bold.woff2',
            weight: '700',
        },
        {
            path: 'mersad-black.woff2',
            weight: '900',
        },
    ],
});

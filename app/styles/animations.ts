export const cardUpAnimation = (delay?: number) => ({
    initial: (i: number) => ({
        y: "50%",
        x: `${i % 2 == 0 ? "-2.5%" : "2.5%"}`,
        scale: "0%",
        opacity: '0'
    }),
    enter: (i: number) => ({
        y: "0",
        x: "0",
        opacity: '1',
        scale: "100%",
        transition: {
            duration: 0.5,
            ease: "easeOut",
            delay: delay || 0.15 * i,
        },
    }),
});


export const fadeInAnimation = (delay?: number) => ({
    initial: (i: number) => ({
        scale: "0%",
        opacity: '0'
    }),
    enter: (i: number) => ({
        opacity: '1',
        scale: "100%",
        transition: {
            delay: delay || 0,
            duration: 0.25,
            ease: "easeOut",
        },
    }),
});

export const fadeUpAnimation = (delay?: number) => ({
    initial: { y: "100%", opacity: '0' },
    enter: () => ({
        y: "0%",
        opacity: 1,
        transition: {
            duration: 0.25,
            delay: delay || 0,
        },
    }),
});

export const fadeAnimation = (delay?: number) => ({
    initial: { opacity: '0' },
    enter: () => ({
        opacity: 1,
        transition: {
            duration: 0.25,
            ease: "easeOut",
            delay: delay || 0,
        },
    }),
});

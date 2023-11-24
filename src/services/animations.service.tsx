import gsap from 'gsap';

export const startAnimation = (
    title: HTMLElement,
    listButton: HTMLElement,
    paper: HTMLElement
): Promise<boolean> => {
    return new Promise((resolve) => {
        const tl = gsap.timeline({ defaults: { ease: 'slow' } });
        tl.to(title, {
            opacity: 0,
            duration: 0.5,
            ease: 'slow',
        })
            .to(listButton, {
                opacity: 0,
                duration: 0.5,
                ease: 'slow',
                display: 'none',
            })
            .to(paper, {
                opacity: 0,
                duration: 0.5,
                delay: 0,
                ease: 'slow',
                onComplete: () => {
                    return resolve(true);
                },
            });
    });
};
export const alternatingAnimation = (element: gsap.TweenTarget): void => {
    gsap.fromTo(
        element,
        {
            opacity: 0,
            duration: 0.5,
            delay: 0,
            ease: 'slow',
        },
        {
            opacity: 1,
            duration: 0.5,
            delay: 0,
            ease: 'slow',
        }
    );
};
export const fadeIn = (element: gsap.TweenTarget): void => {
    gsap.fromTo(
        element,
        {
            opacity: 0,
            duration: 1,
            delay: 0,
            ease: 'slow',
        },
        {
            opacity: 1,
            duration: 0.5,
            delay: 0.5,
            ease: 'slow',
        }
    );
};

export const moveLeft = (element: gsap.TweenTarget): void => {
    gsap.fromTo(
        element,
        {
            x: 0,
            opacity: 0,
            duration: 1,
            delay: 0.5,
            ease: 'slow',
        },
        {
            x: -160,
            opacity: 1,
            duration: 1,
            delay: 0.5,
            ease: 'slow',
        }
    );
};

export const fadeOutAndHide = (element: gsap.TweenTarget): void => {
    gsap.to(element, {
        opacity: 0,
        duration: 0.5,
        ease: 'slow',
        display: 'none',
    });
};

export const buttonClickResetAnimation = (
    elements: [HTMLElement, HTMLElement]
): void => {
    gsap.to(elements, {
        x: 0,
        opacity: 1,
        duration: 0.5,
    });
};

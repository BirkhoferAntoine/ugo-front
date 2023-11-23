import gsap from 'gsap';
export const buttonClickSwitchAnimation = (
    show: gsap.TweenTarget,
    hide: gsap.TweenTarget
): void => {
    gsap.to(hide, {
        opacity: 0,
        duration: 0.5,
        delay: 0,
    });
    gsap.fromTo(
        show,
        {
            x: 0,
            opacity: 0,
            duration: 1,
            delay: 0.5,
        },
        {
            x: -100,
            opacity: 1,
            duration: 1,
            delay: 0.5,
        }
    );
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

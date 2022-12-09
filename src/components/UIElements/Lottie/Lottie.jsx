import React from "react";
import lottie from "lottie-web";
import s from './Lottie.module.scss';

import { useThemeContext } from '../../../hooks/themeHook/themeHook';

const DisplayLottie = ({ lottieId, addClass = s.container, rendererSettings = {}, animationLight, animationDark }) => {

    const { dark } = useThemeContext();

    
    let anim = animationLight;
    
    if(dark && animationDark){
        anim = animationDark;
    }

    React.useEffect(() => {
        let element = document.querySelectorAll(`.${lottieId}`)
        element.forEach((el) => {
            var els = el.querySelectorAll('svg');
            if(els.length === 1){
                els[0].remove();
            }
            lottie.loadAnimation({
                container: el,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                name: lottieId,
                animationData: anim,
                rendererSettings: rendererSettings
            });
        })
    }, [anim, rendererSettings, lottieId]);

	return (
        <>
            <div className={`${lottieId} ${addClass}`}></div>
        </>
	);
};

export default DisplayLottie;

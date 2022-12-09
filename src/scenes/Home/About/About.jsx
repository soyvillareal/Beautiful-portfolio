import s from './About.module.scss';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import DisplayLottie from '../../../components/UIElements/Lottie/Lottie';
import CarouselList from './CarouselList';

import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from 'react-icons/ai';

const About = () => {
  
  const renderIndicator = (
      onClickHandler,
      isSelected,
      index,
      label,
    ) => {
      return (
        <li
          className={`${s.dotCarousel}${
            isSelected ? ` ${s.dotActive}` : ''
          }`}
          onClick={onClickHandler}
          onKeyDown={onClickHandler}
          value={index}
          key={index}
          role="button"
          tabIndex={0}
          aria-label={`${label} ${index + 1}`}
        ></li>
      );
    },
    renderArrowPrev = (clickHandler, hasPrev, label) => {
      return (
        hasPrev && (
          <button
            className={`btn_carousel ${s.btnCarousel} ${s.btnCarouselLeft}`}
            onClick={clickHandler}
            section="#about"
            aria-label={label}
          >
            <AiOutlineArrowLeft />
          </button>
        )
      );
    },
    renderArrowNext = (clickHandler, hasNext, label) => {
      return (
        hasNext && (
          <button
            className={`btn_carousel ${s.btnCarousel} ${s.btnCarouselRight}`}
            onClick={clickHandler}
            section="#about"
            aria-label={label}
          >
            <AiOutlineArrowRight />
          </button>
        )
      );
    };

  return (
    <div className={s.container}>
      <h1 className={s.title}>
        Acerca <span className={s.purple}> de mí</span>
      </h1>
      <Carousel
        showThumbs={false}
        showStatus={false}
        useKeyboardArrows={true}
        infiniteLoop={true}
        swipeable={false}
        renderArrowPrev={renderArrowPrev}
        renderArrowNext={renderArrowNext}
        renderIndicator={renderIndicator}
      >
        {CarouselList.map((item, i) => (
          <div
            key={i}
            className={`${s.content} ${
              item.image.position === 'right' ? s.rightImage : ''
            }`}
          >
            {item.image.type === 'png' ? (
              <figure className={s.imageFigure}>
                <div className={s.contentMainImage}>
                  <LazyLoadImage
                    wrapperClassName={s.aboutMainImage}
                    alt="avatar"
                    effect="blur"
                    src={item.image.src}
                  />
                </div>
                <figcaption className={s.imageFigcaption}>
                  Emprendedor
                </figcaption>
              </figure>
            ) : (
              <DisplayLottie
                lottieId={`about-${i}`}
                addClass={`${s.aboutMainSvg}${
                  item.image.addClass ? ` ${item.image.addClass}` : ''
                }`}
                animationLight={item.image.src}
                animationDark={item.image.srcDark}
              />
            )}

            <div className={s.aboutHeader}>
              <h2 className={s.subtitle}>{item.subtitle}</h2>
              <div className={s.description}>{item.description}</div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default About;

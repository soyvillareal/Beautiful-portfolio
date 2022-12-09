import s from './ProjectList.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import {
  AiFillGithub,
  AiFillEye,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from 'react-icons/ai';
import Button from '../../../components/UIElements/Button/Button';

import React from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import { motion } from 'framer-motion';

import Projects from './Projects';

const ProjectList = () => {
  const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);

  return (
    <>
      <div className={s.container}>
        <h1 className={s.title}>Proyectos</h1>
        <ReactSimplyCarousel
          containerProps={{
            className: s.content,
          }}
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={1}
          itemsToScroll={1}
          forwardBtnProps={{
            className: `btn_carousel ${s.btnCarousel} ${s.btnCarouselRight}`,
            section: '#projects',
            children: <AiOutlineArrowRight />,
          }}
          backwardBtnProps={{
            className: `btn_carousel ${s.btnCarousel} ${s.btnCarouselLeft}`,
            section: '#projects',
            children: <AiOutlineArrowLeft />,
          }}
          dotsNav={{
            containerProps: {
              className: s.dotContainer,
            },
            show: true,
            itemBtnProps: {
              className: s.dotCarousel,
            },
            activeItemBtnProps: {
              className: `${s.dotCarousel} ${s.dotActive}`,
            },
          }}
          responsiveProps={[
            { minWidth: 1060, itemsToShow: 3 },
            { minWidth: 711, maxWidth: 1059, itemsToShow: 2 },
            { maxWidth: 710, itemsToShow: 1 },
          ]}
          speed={400}
          easing="linear"
        >
          {Projects.map((Project, i) => (
            <div key={i}>
              <div className={`${s.itemProject} ${s.flex}`}>
                <div className={`${s.itemProjectImg} ${s.flex}`}>
                  <LazyLoadImage
                    alt="avatar"
                    effect="blur"
                    src={Project.img}
                  />
                  <div
                    className={`${s.itemProjectHover} ${s.flex}`}
                  >
                    {Project.links.demo && (
                      <Button
                        href={Project.links.demo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <motion.div
                          whileInView={{ scale: [0, 1] }}
                          whileHover={{ scale: [1, 0.9] }}
                          transition={{ duration: 0.25 }}
                          className={`${s.itemProjectLink} ${s.flex}`}
                        >
                          <AiFillEye />
                        </motion.div>
                      </Button>
                    )}
                    <Button
                      href={Project.links.source}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className={`${s.itemProjectLink} ${s.flex}`}
                      >
                        <AiFillGithub />
                      </motion.div>
                    </Button>
                  </div>
                  
                  <div
                    className={`${s.contentProjectTitle} ${s.flex}`}
                  >
                    <h4 className={s.itemProjectTitle}>
                      {Project.title}
                    </h4>
                  </div>
                </div>
                <div className={`${s.itemProjectContent} ${s.flex}`}>
                  <p className={s.itemProjectText}>{Project.text}</p>
                  <ul className={`${s.contentTags}`}>
                    {Project.tags.map((tag, i) => (
                      <li key={i}>
                        <span className={s.itemProjectTag}>
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </ReactSimplyCarousel>
      </div>
    </>
  );
};

export default ProjectList;

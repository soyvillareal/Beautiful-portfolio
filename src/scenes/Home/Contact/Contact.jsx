import s from './Contact.module.scss';
import '../../../styles/tooltip.scss';

import Astronaut from '../../../components/UIElements/Astronaut/Astronaut';

import { Icon } from '@iconify/react';


import { motion } from 'framer-motion';

import { UncontrolledTooltip } from 'reactstrap';
import Skills from './Skills';

const Contact = () => {
  let parseId = (name) => {
    return name.replace(/\s/g, '');
  };
  return (
    <div className={s.container}>
      <h1 className={s.title}>Contactame</h1>
      <div className={s.content}>
        <div className={s.contactLeft}>
          <h2 className={s.subTitle}>Desarollador Full Stack</h2>
          <ul className={s.devIcons}>
            {Skills.map((skill, i) => (
              <li key={i} className={s.softwareSkillInline}>
                <motion.div
                  id={parseId(skill.name)}
                  className={s[parseId(skill.name)]}
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  key={skill.name}
                >
                  <Icon
                    className={s.iconSkill}
                    icon={skill.icon}
                    data-inline="false"
                  ></Icon>
                </motion.div>
                <UncontrolledTooltip
                  delay={0}
                  placement="bottom"
                  target={parseId(skill.name)}
                >
                  {skill.name}
                </UncontrolledTooltip>
              </li>
            ))}
          </ul>
        </div>
        <Astronaut />
      </div>
    </div>
  );
};

export default Contact;

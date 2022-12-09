import Main from './Main/Main';
import Education from './Education/Education';
import About from './About/About';
import ProjectList from './ProjectList/ProjectList';
import Contact from './Contact/Contact';
import HomeLayout from '../../layouts/HomeLayout/HomeLayout';

import Section from '../../components/UIElements/Section/Section';

import MotionWrap from '../../components/UIElements/MotionWrap/MotionWrap';

const Home = () => {
  let Sections = [
    {
      id: 'main',
      children: <Main />,
    },
    {
      id: 'education',
      children: <Education />,
    },
    {
      id: 'about',
      children: <About />,
    },
    {
      id: 'projects',
      children: <ProjectList />,
    },
    {
      id: 'contact',
      children: <Contact />,
    },
  ];

  return (
    <HomeLayout>
      {Sections.map((section, i) => (
        <Section key={i} sectionId={section.id}>
          <MotionWrap>
            {section.children}
          </MotionWrap>
        </Section>
      ))}
    </HomeLayout>
  );
};

export default Home;

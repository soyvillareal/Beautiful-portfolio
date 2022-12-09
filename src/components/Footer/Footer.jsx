import s from './Footer.module.scss';
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.container}>
        <h3>Desarrollado por Oscar Garcés</h3>

        <ul className={s.socialIcons}>
          <li>
            <a
              href="https://github.com/soyvillareal"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/soyvillareal"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/soyvillareal"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/soyvillareal/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

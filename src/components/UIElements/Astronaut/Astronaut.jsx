import s from './Astronaut.module.scss';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import Button from '../../../components/UIElements/Button/Button';

function Astronaut() {
  const SocialNetworks = [
    {
      icon: 'logos:google-gmail',
      link: 'mailto:soyvillareal@gmail.com',
      class: 'gmail',
      type: 'left'
    },
    {
      icon: 'logos:facebook',
      link: 'https://facebook.com/soyvillareal',
      class: 'facebook',
      type: 'left'
    },
    {
      icon: 'grommet-icons:instagram',
      link: 'https://instagram.com/soyvillareal',
      class: 'instagram',
      type: 'right'
    },
    {
      icon: 'logos:linkedin-icon',
      link: 'https://linkedin.com/in/soyvillareal',
      class: 'linkedin',
      type: 'right'
    },
    {
      icon: 'logos:github-icon',
      link: 'https://github.com/soyvillareal',
      class: 'github',
      type: 'right'
    },
  ];

  return (
    <div className={s.containerAstronaut}>
      {SocialNetworks.map((Network, i) => (
          <motion.div
          key={i}
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                >
        <Button
          addClass={`${s.socialMediaContent} ${Network.type === 'left' ? s.socialMediaLeft : s.socialMediaRight} ${s[Network.class]}`}
          href={Network.link}
          target="_blank"
          rel="noreferrer"
        >
          
          <Icon
            className={s.iconSkill}
            icon={Network.icon}
            data-inline="false"
          ></Icon>
        </Button>
          </motion.div>
      ))}
      <svg
        className={s.illustration}
        viewBox="0 -20 478 530"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className={s.astronaut}>
          <path
            className={s.bag}
            d="M90.2396 142.592C90.2396 142.592 68.567 151.165 65.3799 171.99C62.1927 192.815 111.441 253.817 111.441 253.817L263.315 171.977L215.297 87.7089L90.2396 142.592Z"
          />
          <path
            className={s.outfit}
            d="M123.819 162.275C123.819 162.275 107.839 178.683 102.937 196.837C98.0354 214.991 97.4043 247.411 98.2203 259.554C122.06 281.615 216.291 263.13 216.291 263.13L307.1 156.309C307.1 156.309 291.706 127.083 283.891 119.07C276.076 111.058 250.744 101.095 221.518 112.855C204.365 137.199 123.819 162.275 123.819 162.275Z"
          />
          <g
            className="Vector_5"
            style={{ mixBlendMode: 'multiply' }}
          >
            <path
              className={s.outfit}
              d="M116.687 170.76C116.687 170.76 151.943 182.074 191.629 166.744C231.316 151.414 238.506 108.234 238.506 108.234L221.499 112.862L123.819 162.275L116.687 170.76Z"
            />
          </g>
          <path
            className={s.outfit}
            d="M260.21 303.211C260.21 303.211 304.786 303.498 317.311 306.698C329.837 309.898 362.99 384.93 376.707 392.113C390.425 399.297 402.077 387.365 417.19 378.504C432.304 369.644 446.155 358.922 446.588 354.448C447.022 349.973 440.603 332.093 435.051 328.485C429.499 324.877 413.378 324.622 404.779 330.13C392.146 295.709 374.183 245.511 357.712 238.601C341.24 231.692 291.323 228.402 291.323 228.402L260.21 303.211Z"
          />
          <path
            className={s.outfit}
            d="M140.45 296.442C140.45 296.442 167.859 353.931 192.719 369.612C217.579 385.293 262.62 384.024 275.043 394.293C287.467 404.562 284.841 453.893 297.258 466.96C309.675 480.028 327.147 488.034 343.478 486.561C359.809 485.089 372.876 477.255 373.042 469.905C373.207 462.556 372.551 456.182 364.876 452.261C357.202 448.341 346.391 445.078 345.925 440.507C345.46 435.937 336.778 366.355 333.177 347.442C329.575 328.53 301.605 302.223 265.558 288.971C231.424 260.389 178.995 272.634 178.995 272.634L140.45 296.442Z"
          />
          <g
            className="Vector_8"
            style={{ mixBlendMode: 'multiply' }}
          >
            <path
              className={s.outfit}
              d="M148.424 311.823C148.424 311.823 179.881 313.429 208.132 301.018C202.733 272.27 186.077 263.78 186.077 263.78L140.45 296.442L148.424 311.823Z"
            />
          </g>
          <path
            className={s.outfit}
            d="M191.954 11.5997C167.318 -1.58868 115.686 -6.03793 83.8144 33.4891C51.9429 73.0161 67.8276 114.009 81.22 133.094C95.2435 153.122 143.446 183.731 194.893 154.983C246.34 126.235 251.733 43.6115 191.954 11.5997Z"
          />
          <path
            className={s.glass}
            d="M187.715 35.7711C209.598 40.998 223.813 71.703 216.464 101.101C209.114 130.499 183.795 150.266 155.379 150.426C126.962 150.585 98.7047 131.182 98.8577 94.899C99.0107 60.0316 140.195 24.4248 187.715 35.7711Z"
          />
          <g
            className="Vector_11"
            style={{ mixBlendMode: 'multiply' }}
          >
            <path
              className={s.outfit}
              d="M124.667 265.412C153.179 252.179 131.851 221.964 160.274 215.093C197.749 220.422 208.113 218.509 208.113 218.509C208.113 218.509 136.421 281.475 124.667 265.412Z"
            />
          </g>
          <path
            className={s.paperOne}
            d="M148.424 184.598L195.874 306.698L263.002 305.098L324.412 266.227L342.706 210.695L298.284 77.4207L276.72 139.812L220.862 184.235L148.424 184.598Z"
          />
          <path
            className={s.outfit}
            d="M124.667 265.412C140.399 264.137 148.411 253.893 153.179 249.348C155.608 247.028 155.124 244.995 153.9 238.302C152.676 231.609 156.921 224.744 162.722 221.805C165.909 230.378 169.823 232.004 172.844 231.602C175.866 231.201 178.97 213.149 188.85 213.308C198.73 213.467 206.653 226.541 207.973 233.068C209.292 239.596 202.912 258.215 194.906 271.282C186.899 284.35 175.604 300.528 150.177 305.589C124.75 310.65 110.293 297.666 101.962 281.252C99.1509 275.712 98.1374 268.057 98.2266 259.528C98.2266 259.528 103.919 267.043 124.667 265.412Z"
          />
          <path
            className={s.outfit}
            d="M313.582 123.322C313.582 123.322 316.61 133.17 314.57 137.008C312.531 140.845 309.751 144.019 307.712 148.934C305.672 153.849 308.693 172.372 317.675 175.553C326.656 178.734 334.089 170.409 336.46 165.59C338.831 160.771 337.518 148.118 334.006 139.296C330.493 130.474 323.89 122.634 313.582 123.322Z"
          />
          <g
            className="Vector_15"
            style={{ mixBlendMode: 'soft-light' }}
            opacity="0.48"
          >
            <path
              d="M168.614 72.4223C184.301 68.9646 196.026 61.6634 194.803 56.1147C193.58 50.5659 179.872 48.8707 164.185 52.3284C148.498 55.786 136.772 63.0872 137.995 68.636C139.218 74.1848 152.927 75.88 168.614 72.4223Z"
              fill="white"
            />
          </g>
          <g
            className="Vector_16"
            style={{ mixBlendMode: 'multiply' }}
          >
            <path
              className={s.outfit}
              d="M204.34 251.375C204.34 251.375 186.294 235.248 183.024 235.248C179.754 235.248 171.047 247.997 173.01 251.375C174.973 254.754 185.057 265.82 196.129 269.223C199.718 262.377 204.34 251.375 204.34 251.375Z"
            />
          </g>
          <g
            className="Vector_17"
            style={{ mixBlendMode: 'multiply' }}
            opacity="0.5"
          >
            <path
              className={s.paperOne}
              d="M220.862 184.235L263.002 305.098L324.412 266.227L276.72 139.812L220.862 184.235Z"
            />
          </g>
          <g
            className="Vector_18"
            style={{ mixBlendMode: 'multiply' }}
          >
            <path
              className={s.outfit}
              d="M336.791 370.53C330.475 375.763 323.377 379.972 315.756 383.005C308.61 385.758 306.195 391.393 308.355 401.732C310.516 412.071 311.727 428.192 316.189 432.437C320.651 436.683 336.001 434.426 343.956 424.559C341.463 405.117 336.791 370.53 336.791 370.53Z"
            />
          </g>
          <g
            className="Vector_19"
            style={{ mixBlendMode: 'multiply' }}
          >
            <path
              className={s.outfit}
              d="M378.383 265.118C378.383 265.118 369.459 269.007 370.307 275.209C371.155 281.411 380.27 311.389 383.865 314.092C387.46 316.795 398.099 312.001 398.099 312.001C387.174 281.048 378.383 265.118 378.383 265.118Z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default Astronaut;

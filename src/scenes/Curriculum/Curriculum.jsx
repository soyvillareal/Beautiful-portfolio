import s from './Curriculum.module.scss';
import React from 'react';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import LinerProgress from '../../components/UIElements/LinerProgress/LinerProgress';
import Button from '../../components/UIElements/Button/Button';

import { FaFileDownload } from 'react-icons/fa';

import throttle from 'lodash.throttle';

import pdf from '../../assets/curriculum.pdf';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Curriculum = () => {
  
  const pdfWrapper = React.useRef(null);

  const [initialWidth, setInitialWidth] = React.useState(null);

  const setPdfSize = () => {
    if (pdfWrapper && pdfWrapper.current) {
      setInitialWidth(pdfWrapper.current.getBoundingClientRect().width);
    }
  };
  
  React.useEffect(() => {
    window.addEventListener('resize', throttle(setPdfSize, 2000));
    setPdfSize();
    return () => {
      window.removeEventListener('resize', throttle(setPdfSize, 2000));
    };
  }, []);


  const removeTextLayerOffset = () => {
    const textLayers = document.querySelectorAll(
      '.react-pdf__Page__textContent',
    );
    textLayers.forEach((layer) => {
      const { style } = layer;
      style.top = '0';
      style.left = '0';
      style.transform = '';
    });
  };

  return (
    <BaseLayout>
      <div className={s.content}>

        <div className={s.pdfWrapper} ref={pdfWrapper}>
          <Document
            loading={<LinerProgress />}
            file={pdf}
          >
            <Page
              onLoadSuccess={removeTextLayerOffset}
              loading={<LinerProgress />}
              width={initialWidth}
              pageNumber={1}
            />
          </Document>
        </div>

        <Button
          style={{ margin: 'auto', width: '15rem' }}
          btnClass={!0}
          className="primary"
          href={pdf}
          target="_blank"
          download={true}
        >
          <FaFileDownload />
          <span className={s.downloadText}>Descargar</span>
        </Button>
        
      </div>
    </BaseLayout>
  );
};

export default Curriculum;

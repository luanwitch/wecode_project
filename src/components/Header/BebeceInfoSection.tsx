import React from 'react';
import './BebeceInfoSection.scss'; // Importe o arquivo SCSS aqui

import image5 from '../../assets/imagens/image_5.png';
import image12 from '../../assets/imagens/image_12.png';
import frame6 from '../../assets/imagens/frame_6.png';

const BebeceInfoSection = () => {
  return (
    <section className="bebece-info-section">
      <h2 className="section-title">Conheça mais, fique por dentro de tudo que acontece na Bebecê.</h2>
      <div className="image-row">
        <img src={image5} alt="Banner 1" className="info-image" />
        <img src={image12} alt="Banner 2" className="info-image" />
        <img src={frame6} alt="Banner 3" className="info-image" />
      </div>
      <p className="section-subtitle">
        É amanhã — Simple and True: lançamento da nova coleção Outono Inverno 2024 da Bebecê
      </p>
    </section>
  );
};

export default BebeceInfoSection;

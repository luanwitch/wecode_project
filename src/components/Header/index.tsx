import React, { useState, useEffect } from 'react';
import './header.scss';
import '../../components/Carousel/carousel.scss';

import logo from '../../assets/imagens/bebece.svg';
import lupaIcon from '../../assets/imagens/Vector.png';
import userIcon from '../../assets/imagens/icone2.png';
import bagIcon from '../../assets/imagens/icone3.png';
import sapatoImage from '../../assets/imagens/Banner_Principal_2.png';
import scarpinImage from '../../assets/imagens/scarpins.png';
import sandaliaImage from '../../assets/imagens/sandalia.png';
import botaImage from '../../assets/imagens/botas.png';
import bannerPrincipal from '../../assets/imagens/banner_principal.png';
import banner2 from '../../assets/imagens/frame_72.png';

const Header: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(sapatoImage);

  const handleModalToggle = () => {
    setModalVisible(!isModalVisible);
  };

  const imageMap: Record<string, string> = {
    sapato: sapatoImage,
    scarpin: scarpinImage,
    sandalia: sandaliaImage,
    bota: botaImage,
  };

  const handleSubmenuClick = (key: string) => {
    setActiveImage(imageMap[key]);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header__container">
        <div className="header__left">
          <div className="header__logo">
            <img src={logo} alt="Logo da Bebecê" />
          </div>
          <nav className="header__nav">
            <ul>
              <li
                className="dropdown"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <a href="#">Produtos</a>
                {isDropdownOpen && (
                  <div className="dropdown-content">
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#" onClick={() => handleSubmenuClick('sapato')}>
                          Sapatos
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => handleSubmenuClick('scarpin')}>
                          Scarpins
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => handleSubmenuClick('sandalia')}>
                          Sandálias
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => handleSubmenuClick('bota')}>
                          Botas
                        </a>
                      </li>
                    </ul>
                    <div className="submenu-image">
                      <img src={activeImage} alt="Imagem Produtos" />
                    </div>
                  </div>
                )}
              </li>
              <li>
                <a href="#">Lançamentos</a>
              </li>
              <li>
                <a href="#" className="destaque">
                  Outlet
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header__icons">
          <img src={lupaIcon} alt="Buscar" className="icon" />
          <img src={userIcon} alt="Usuário" className="icon" />
          <img src={bagIcon} alt="Sacola" className="icon" />
        </div>
      </div>

      {/* Localização abaixo do conteúdo principal */}
      <div className="header__location">
        Você está em: São Paulo
        <button onClick={handleModalToggle} className="alterar-btn">
          Alterar
        </button>
      </div>

      {/* Banner Principal */}
      <div className="header__banner">
        <img src={bannerPrincipal} alt="Banner Principal" className="banner_principal" />
      </div>

      {/* Modal de localização */}
      {isModalVisible && (
        <div className="modal show">
          <div className="modal-content">
            <h2>Digite seu endereço</h2>
            <label>Código Postal*</label>
            <input type="text" placeholder="CEP" />
            <label>Cidade</label>
            <input type="text" placeholder="Cidade" />
            <label>Estado</label>
            <input type="text" placeholder="Estado" />
            <button onClick={handleModalToggle} className="fechar-btn">
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* Categorias */}
      <div className="categorias-label">Categorias</div>
      <section className="section-categorias">
        <div className="categoria-item">
          <img src={sapatoImage} alt="Categoria Sapato" />
          <span className="categoria-nome">Sapatilhas</span>
        </div>
        <div className="categoria-item">
          <img src={scarpinImage} alt="Categoria Scarpin" />
          <span className="categoria-nome">Scarpins</span>
        </div>
        <div className="categoria-item">
          <img src={sandaliaImage} alt="Categoria Sandália" />
          <span className="categoria-nome">Sandálias</span>
        </div>
        <div className="categoria-item">
          <img src={botaImage} alt="Categoria Bota" />
          <span className="categoria-nome bota">Botas</span>
        </div>
      </section>
      <img src={banner2} alt="Banner 2" className="banner_2" />
    </header>
  );
};

export default Header;

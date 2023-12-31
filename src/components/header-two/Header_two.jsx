import React, { useEffect, useState } from 'react';
import './header_two.css';
// import component 👇
import Drawer from 'react-modern-drawer';

//import styles 👇
import 'react-modern-drawer/dist/index.css';
import { AXIOS } from '../../utils';

const Header_two = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (isOpen) {
      document.body.className = 'locked';
    } else {
      document.body.removeAttribute('class');
    }
  }, [isOpen]);

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      const target = document.getElementById('novinki');
      if (window.scrollY >= target.offsetTop) {
        document.querySelector('.header-main').classList.add('shadow');
      } else {
        document.querySelector('.header-main').classList.remove('shadow');
      }
    });
  }, []);

  useEffect(() => {
    AXIOS.get('/categories/').then(({ data }) => setCategories(data));
  }, []);

  return (
    <>
      <div className="header-main">
        <div className="container">
          <div className="wrap_two">
            <div className="flex nav_two">
              {categories?.map((cat) => (
                <a href="#novinki" key={cat.id}>
                  {cat.name_ru}
                </a>
              ))}
            </div>
            <div className="korzinka flex">
              <button onClick={toggleDrawer}>
                <img
                  src="https://apexpizza.uz/static/media/korzinka-yellow-icon.336092f5a231762b5d5ff5360b1146e0.svg"
                  alt=""
                />
              </button>
            </div>
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="right"
              className="bla bla bla"
              size={400}
            >
              <div className="modal_block">
                <button className="close" onClick={toggleDrawer}>
                  X
                </button>
                <img
                  src="https://apexpizza.uz/static/media/pitsapart.d7047adf9bd1a887cbd4.png"
                  alt=""
                />
                <div className="modal-text">
                  <h4>Пока нет товаров</h4>
                  <h5>
                    Ваша корзина пуста, откройте «Меню» и выберите понравившийся
                    товар.
                  </h5>
                </div>
                <div onClick={toggleDrawer} className="modal-btn">
                  <a href="#novinki">
                    <button>Меню</button>
                  </a>
                </div>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
      <div className="container" id="novinki">
        {categories?.map((cat) => (
          <section key={cat.id}>
            <h1>{cat.name_ru}</h1>
            <div className="wrapper">
              {cat.burgers.map((burger) => (
                <div className="main-card">
                  <div className="cards_img">
                    <img src={burger.image} alt="" />
                  </div>
                  <div className="cards_detalis">
                    <h5>{burger.name_ru}</h5>
                    <div className="box">
                      <img
                        src="https://apexpizza.uz/static/media/aIcon.b1db301914d6a331f19e40c04820688f.svg"
                        alt=""
                      />

                      <h6 className="price">
                        от {burger.price.toLocaleString()} сум
                      </h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default Header_two;

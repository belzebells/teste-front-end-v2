import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { getProducts } from "../services/api";
import type { Product } from "../types/Product";

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => { 
    getProducts().then(setProducts).catch(console.error);
  }, []);

  const categories = [
    { n: 'Tecnologia', i: '/icons/tecnologia.png', active: true },
    { n: 'Supermercado', i: '/icons/supermercado.png' },
    { n: 'Bebidas', i: '/icons/bebidas.png' },
    { n: 'Ferramentas', i: '/icons/ferramentas.png' },
    { n: 'Saúde', i: '/icons/saude.png' },
    { n: 'Esportes', i: '/icons/esportes.png' },
    { n: 'Moda', i: '/icons/moda.png' },
  ];

  return (
    <>
      <header className="header">
        <div className="header__top"><span>Compra 100% segura</span><span>Frete grátis acima de R$ 200</span></div>
        <div className="header__main">
          <img src="/Group-35.png" alt="Logo" />
          <div className="header__search"><input type="text" placeholder="O que você está buscando?" /></div>
          <img src="/icons/Frame-2365.png" style={{height: '25px'}} alt="Icons" />
        </div>
        <nav className="header__nav"><span>Todas Categorias</span><span className="active">Ofertas do dia</span><span>Assinatura</span></nav>
      </header>

      <main>
        <section className="banner" style={{backgroundImage: "url('/Rectangle-250.png')"}}>
          <div>
            <h1>Venha conhecer nossas <br/> promoções</h1>
            <span className="highlight">50% Off nos produtos</span>
            <button>Ver produto</button>
          </div>
        </section>

        <section className="categories">
          {categories.map((cat) => (
            <div key={cat.n} className={`categories__item ${cat.active ? 'active' : ''}`}>
              <div><img src={cat.i} alt={cat.n} /></div>
              <p>{cat.n}</p>
            </div>
          ))}
        </section>

        <section className="vitrine">
          <h2 className="vitrine__title">Produtos relacionados</h2>
          <Swiper modules={[Navigation]} navigation spaceBetween={20} slidesPerView={4}>
            {products.map((p, i) => (
              <SwiperSlide key={i}>
                <div className="product-card">
                  <div className="product-card__image"><img src={p.photo} alt={p.productName} /></div>
                  <h3>{p.productName}</h3>
                  <p className="product-card__price">R$ {p.price.toLocaleString('pt-BR')}</p>
                  <button className="product-card__cta" onClick={() => setSelectedProduct(p)}>Ver Produto</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section className="partners">
          <div className="partners__box" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url('/banner-1.png')"}}>
            <h2>Parceiros</h2>
            <button>CONFIRA</button>
          </div>
          <div className="partners__box" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url('/banner-2.png')"}}>
            <h2>Parceiros</h2>
            <button>CONFIRA</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__content">
          <div><h4>Sobre nós</h4><p>Conheça</p><p>Como comprar</p></div>
          <div><h4>Informações</h4><p>Fale Conosco</p><p>Dúvidas</p></div>
          <div><h4>Pagamento</h4><img src="/compre por categoria.png" style={{width: '160px'}} /></div>
          <div><h4>Assine a newsletter</h4><p>Receba ofertas por e-mail</p></div>
        </div>
      </footer>

      {selectedProduct && (
        <div className="modal">
          <div className="modal__content">
            <button className="modal__close" onClick={() => setSelectedProduct(null)}>✕</button>
            <div className="modal__image"><img src={selectedProduct.photo} /></div>
            <div className="modal__info">
              <h2>{selectedProduct.productName}</h2>
              <p className="price">R$ {selectedProduct.price.toLocaleString('pt-BR')}</p>
              <button className="product-card__cta">Comprar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
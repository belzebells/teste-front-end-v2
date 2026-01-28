import type { Product } from "../types/Product";

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(product.price);

  return (
    <div className="product-card">
      <div className="product-card__image">
        <img src={product.photo} alt={product.productName} />
      </div>
      <div className="product-card__content">
        <h3 className="product-card__name">{product.productName}</h3>
        <p className="product-card__description">{product.descriptionShort}</p>
        <p className="product-card__price">{formattedPrice}</p>
        <button className="product-card__button" onClick={() => onClick(product)}>
          Ver Produto
        </button>
      </div>
    </div>
  );
}
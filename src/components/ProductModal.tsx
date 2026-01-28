import { useEffect } from "react"
import type { Product } from "../types/Product"

interface ProductModalProps {
  product: Product
  onClose: () => void
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [onClose])

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" type="button" onClick={onClose} aria-label="Fechar modal">
          ×
        </button>

        <div className="modal__content">
          <div className="modal__image">
            <img src={product.photo} alt={product.productName} />
          </div>

          <div className="modal__info">
            <h2 className="modal__title">{product.productName}</h2>
            <p className="modal__desc">{product.descriptionShort}</p>

            <strong className="modal__price">
              {product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
            </strong>

            <button className="modal__buy" type="button">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

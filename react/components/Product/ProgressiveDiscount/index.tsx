import React, { useEffect } from "react";
import { DescontoProgressivoProps } from "./types";
import { useProductDispatch } from "vtex.product-context/ProductDispatchContext";
import { useProduct } from "vtex.product-context";

import "./global.css";

const ProgressiveDiscount: StorefrontFunctionComponent<
  DescontoProgressivoProps
> = ({ value = 1, discountText = '' }) => {
  const dispatch = useProductDispatch();
  const product = useProduct();
  
  const descontoClusterHighlights = product?.product?.clusterHighlights.length;
  const desconto = product?.product?.clusterHighlights;


  
  const onChange = () => {
    dispatch({ type: 'SET_QUANTITY', args: { quantity: value } });
  };

  const productContextValue = useProduct();
  const productQuantity: any = productContextValue?.selectedQuantity ?? 0;

  const sellerPrices: number[] = productContextValue?.selectedItem?.sellers.map((sellers) => {
    return sellers.commertialOffer.Price;
  }) ?? [];

  function getDefaultSeller(sellerPrices: number[]): any {
    if (!sellerPrices || sellerPrices.length === 0) {
      return undefined;
    }

    const defaultSeller = sellerPrices.reduce((prev, current) => {
      return prev < current ? prev : current;
    });

    return defaultSeller;
  }

  function descontoCalc(discountRate: any) {
    const sellerPrice = getDefaultSeller(sellerPrices);
    const discount = sellerPrice - sellerPrice * discountRate;
    const newDesconto = discount.toFixed(2).toString().replace('.', ',');

    let newPrice = document?.querySelector<HTMLElement>(
      '.vtex-product-price-1-x-sellingPrice--product__price .vtex-product-price-1-x-customSellingPrice--product__price.valor-final'
    )!;
    let oldPriceMain = document?.querySelector<HTMLElement>(
      '.vtex-product-price-1-x-sellingPrice--product__price .vtex-product-price-1-x-sellingPriceValue--product__price'
    )!;

    if (oldPriceMain) {
      oldPriceMain.style.display = 'none';
    }

    if (!newPrice) {
      newPrice = window?.document?.createElement('div')
      newPrice?.classList.add('valor-final')
      newPrice?.classList.add('vtex-product-price-1-x-customSellingPrice--product__price')

      const oldPrice = window?.document?.querySelector(
        '.vtex-product-price-1-x-sellingPrice--product__price'
      )

      oldPrice?.append(newPrice)
    } else {
      newPrice.style.display = 'block';
    }
    newPrice.innerText = `R$ ${newDesconto}`;
  }

  useEffect(() => {
    console.log('Passei');
    console.log(descontoClusterHighlights, "descontoClusterHighlights");
    if (productQuantity < 10) {
      let oldPriceMain = document?.querySelector<HTMLElement>(
        '.vtex-product-price-1-x-sellingPrice--product__price .vtex-product-price-1-x-sellingPriceValue--product__price'
      )!;

      if (oldPriceMain) {
        oldPriceMain.style.display = 'block';
      }

      let newPrice = document?.querySelector<HTMLElement>(
        '.vtex-product-price-1-x-sellingPrice--product__price .vtex-product-price-1-x-customSellingPrice--product__price.valor-final'
      )!;

      if (newPrice) {
        newPrice.style.display = 'none';
      }
    }
    if (productQuantity >= 40 && productQuantity <= 59) {
      descontoCalc(0.03);
    } else if (productQuantity >= 60 && productQuantity <= 79) {
      descontoCalc(0.04);
    } else if (productQuantity >= 80) {
      descontoCalc(0.05);
    }
    
  }, [productQuantity, productContextValue?.selectedItem]);

  if (descontoClusterHighlights !== 0 && desconto && desconto[0].id === '138') {
    return (
      <div className="progressive-discount-container">
        <label onClick={onChange}>
          <span className="progressive-discount-number">
            {value}
            {value >= 80 ? '+' : ''}
          </span>
          <span className="progressive-discount-units">Unidades</span>
          <span className="progressive-discount-discounts">
            {discountText}% off
          </span>
        </label>
      </div>
    );
  } else {
  
    if (typeof document !== 'undefined') {
      document.querySelector('.vtex-flex-layout-0-x-flexRow--progressive-discount')?.setAttribute('style', 'display: none;');
      document.querySelector('.vtex-store-components-3-x-skuSelectorContainer')?.setAttribute('style', 'margin-top: 23px;');
    }
    return null
  }
};

export default ProgressiveDiscount;

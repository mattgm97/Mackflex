import React, { useEffect, useState } from 'react'
import useProduct from 'vtex.product-context/useProduct'

import styles from "./styles.css";

const ProductSpecification = () => {
    const { product } = useProduct()
    const spefication = product?.properties;

    console.log('spefication', spefication)
    console.log('product', product)

    if(spefication.length !== 0){ 
        return(
            <div className={styles.wrappedSpecification}>
                <div className={styles.containerSpecification}>
                    <div className={styles.containerSpecificationRow}>
                        <div className={styles.specificationTitle}>
                            <h2>DETALHES</h2>
                        </div>
                    </div>
                    <div className={styles.containerSpecificationRow}>              
                        <div className={styles.descrition}>
                            <p>{product?.properties[0].values[0] ? product?.properties[0].values[0] : product?.properties[1].values[0]}</p>
                        </div>
                        <div className={styles.specification}>
                            {spefication.map((items, index) => {
                                console.log('items', items)
                                if (items !== undefined) {
                                    return (
                                        <div key={index} className={styles.specificationGroup}>
                                                <div className={styles.specificationGroupTitle}>
                                                    <p>{items?.name}</p>
                                                </div>
                                                <div className={styles.specificationContent}>  
                                                    {/* <p>{items?.name}</p> */}
                                                    <p>{items?.values[0]}</p>
                                                </div>
                                        </div>
                                    )
                                } else return null
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    } else return null
}

export default ProductSpecification;
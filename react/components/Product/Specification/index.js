import React, { useEffect, useState } from 'react'
import useProduct from 'vtex.product-context/useProduct'

import styles from "./styles.css";

const ProductSpecification = () => {
    const { product } = useProduct()
    const spefication = product?.specificationGroups;

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
                            <p>{product?.properties[1].values[0]}</p>
                        </div>
                        <div className={styles.descrition}>
                            {spefication.map((items, index) => {
                                console.log('items', items?.specifications?.[1]?.name)
                                if (items !== undefined) {
                                    return (
                                        <div className={styles.specificationGroup}>
                                                <div className={styles.specificationGroupTitle}>
                                                    <p>{items?.name}</p>
                                                </div>
                                                <div className={styles.specificationContent}>  
                                                    <p>{items?.specifications?.[0]?.name}</p>
                                                    <p>{items?.specifications?.[1]?.name}</p>
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
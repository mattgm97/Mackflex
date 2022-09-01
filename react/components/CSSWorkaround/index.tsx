import React, { useEffect} from "react";
import "./global.css";
interface ProductAvailableProps {
    // children: any;
};

const CSSWorkaround: StorefrontFunctionComponent<ProductAvailableProps> = () => {
    useEffect(() => {

        

        let meta = document.createElement('meta');
        meta.setAttribute('name', 'google-site-verification');
        meta.setAttribute('content', 'ZcjfztjiP0x-KorHdi86CK3P5lm-0sOg8irZNaOwvGo');
        document.getElementsByTagName('head')[0].appendChild(meta);
    
          }, []);

        return (
         <>
   
         </>
        );
    };

export default CSSWorkaround;
import React, { useEffect} from "react";
import "./global.css";
interface ProductAvailableProps {
  // children: any;
}

const AvaliacoesStars: StorefrontFunctionComponent<
  ProductAvailableProps
> = () => {

    useEffect(() => {
      setTimeout(() => {
          
      var script = document.createElement('script');
      script.setAttribute('src', 'https://apis.google.com/js/platform.js?onload=renderBadge');
      script.setAttribute('async', 'true');
      script.setAttribute('defer', 'true');
      
      // document.body.appendChild(script);
      document.head.appendChild(script) as HTMLElement;

      var script2 =  document.createElement('script');
      script2.text = `window.renderBadge = function() {

        var ratingBadgeContainer = document.createElement("div");
        
        document.body.appendChild(ratingBadgeContainer);
        
        window.gapi.load('ratingbadge', function() {
        
        window.gapi.ratingbadge.render(ratingBadgeContainer, {"merchant_id": "634471877"});
        
        });
        
        }`;
        document.body.appendChild(script2)
      }, 3000);

    
 
      }, []);
  return (
    <>
    <div className="google-avaliacao">
    
    </div>
    </>
  );
};

export default AvaliacoesStars;

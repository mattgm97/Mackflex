import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const Headscript = () => {
  useEffect(() => {
    console.log("useEffect do Headscript foi chamado!");

    // Adiciona scripts de rastreamento Egoimmerce ao corpo do documento
    var egoimmerceScript = document.createElement("script");
    egoimmerceScript.type = "text/javascript";
    egoimmerceScript.innerHTML = `
      var _egoiaq = _egoiaq || [];
      // Adiciona o primeiro produto ao pedido
      _egoiaq.push(['addEcommerceItem',
        "A10000123", // (required) Product unique identifier (SKU or ID)
        "Endurance: Shackleton's Incredible Voyage", // (optional) Product name
        ["Adventure Books", "Best sellers"], // (optional) Product category, string or array of up to 5 categories
        8.8, // (recommended) Product price
        1 // (optional, default to 1) Product quantity
      ]);

      // Aqui é importante adicionar todos os outros produtos encontrados no carrinho,
      // mesmo os produtos não atualizados pelo clique atual em "Adicionar ao carrinho"
      // Repetir o comando anterior para cada produto no carrinho, especificando a quantidade
      // [...]

      // Especifica os detalhes do pedido para o servidor Egoimmerce e envia os dados para o servidor Egoimmerce
      _egoiaq.push(['trackEcommerceOrder',
        "A10000123", // (required) Unique Order ID
        35, // (required) Order Revenue grand total (includes tax, shipping, and subtracted discount)
        30, // (optional) Order sub total (excludes shipping)
        5.5, // (optional) Tax amount
        4.5, // (optional) Shipping amount
        false // (optional) Discount offered (set to false for unspecified parameter)
      ]);

      // Recomendamos deixar a chamada para trackPageView() na página de confirmação do pedido, mas
      // se o console mostrar duas mensagens de coleta, remova esta linha
      _egoiaq.push(['trackPageView']);
    `;

    // Adiciona o script de rastreamento Egoimmerce ao <head> usando Helmet
    const scriptTag = document.createElement("script");
    scriptTag.type = "text/javascript";
    scriptTag.innerHTML = egoimmerceScript.innerHTML;
    document.head.appendChild(scriptTag);

    // Adiciona outro script ao corpo do documento (exemplo)
    var outroScript = document.createElement("script");
    outroScript.type = "text/javascript";
    outroScript.innerHTML = `
    var _egoiaq = _egoiaq || [];
    // Adiciona o primeiro produto ao pedido
    _egoiaq.push(['addEcommerceItem',
      "A10000123", // (required) Product unique identifier (SKU or ID)
      "Endurance: Shackleton's Incredible Voyage", // (optional) Product name
      ["Adventure Books", "Best sellers"], // (optional) Product category, string or array of up to 5 categories
      8.8, // (recommended) Product price
      1 // (optional, default to 1) Product quantity
    ]);

    // Aqui é importante adicionar todos os outros produtos encontrados no carrinho,
    // mesmo os produtos não atualizados pelo clique atual em "Adicionar ao carrinho"
    // Repetir o comando anterior para cada produto no carrinho, especificando a quantidade
    // [...]

    // Records the cart for this visit
    _egoiaq.push(['trackEcommerceCartUpdate',
      15.5]); // (recommended) Cart amount

    // If your console shows two collect messages, remove this line
    _egoiaq.push(['trackPageView']);

      console.log("Outro script adicionado!");
    `;

    document.body.appendChild(outroScript);

    // Lembre-se de limpar os efeitos se necessário
    return () => {
      document.head.removeChild(scriptTag);
      document.body.removeChild(outroScript);
    };
  }, []); // Dependência vazia para garantir que o efeito seja executado apenas uma vez

  return (
    <div className="widgetCointainer">
      {/* Conteúdo do seu componente */}
    </div>
  );
};

export default Headscript;

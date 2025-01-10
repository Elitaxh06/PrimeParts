import React, { useEffect } from "react";
import { useCart } from "../../Context/CartContext";
const PayPalButton = () => {
    const { cart } = useCart()
    const getTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
      };
  useEffect(() => {
    if (window.paypal) {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: getTotal(), // Cambia a la cantidad dinámica que desees.
                },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            alert(`Pago exitoso por ${details.payer.name.given_name}`);
          });
        },
        onError: (err) => {
          console.error("Error en el pago:", err);
        },
      }).render("#paypal-button-container"); // Renderiza el botón en este contenedor
    }
  }, [cart]);

  return (
    <div>

    <form 
      action="https://www.paypal.com/ncp/payment/C8BX6E3VSR6Y8" 
      method="post" 
      target="_top" 
      style={{ display: "inline-grid", justifyItems: "center", alignContent: "start", gap: "0.5rem" }}
      >
      <input 
        className="pp-C8BX6E3VSR6Y8 rounded-lg bg-yellow-300 w-40 mt-5 mb-3 hover:bg-yellow-400 cursor-pointer" 
        type="submit" 
        value="Comprar ahora"
        
        />
        </form>
      <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" />
      
        </div>
  );
};

export  {PayPalButton}

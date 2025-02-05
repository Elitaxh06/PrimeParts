import React, { useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useCart } from "../../Context/CartContext";
const PayPalButton = () => {
  const { cart } = useCart()
  const total = cart.reduce((total, item) => total + item.price, 0)
  return (
    <PayPalScriptProvider options={{ "client-id": "AQw9y4jPrzoLOG1eNsf29tt1Smg7zkPLLhQkNr5-kgMlonOp79C7z53a3UhQYqwEvxF" }}>
      <div style={{ maxWidth: "300px", margin: "0 auto" }}>
        <h1>lkjasl</h1>
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "10.00", // Cambia este valor según tu producto
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              alert("¡Pago completado por " + details.payer.name.given_name + "!");
            });
          }}
          onError={(err) => {
            console.error("Error al procesar el pago", err);
            alert("Hubo un error con el pago. Intenta de nuevo.");
          }}
        />
      </div>
    </PayPalScriptProvider>
  );
  
};

export  {PayPalButton}

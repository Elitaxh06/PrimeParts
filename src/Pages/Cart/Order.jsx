import React, { useState } from "react";
import { useCart } from "../../Context/CartContext";
import { NavLink } from "react-router";

function Order() {
    const [discount, setDiscount] = useState(false);
    const [promoCode, setPromoCode] = useState("");
    const [discountName, setDiscountName] = useState("");
    const discountCodes = {
        'gcc1': 'Descuento de grettel'
    };

    const { cart } = useCart();
    const total = cart.reduce((total, item) => total + item.price, 0);
    const discountAmount = discount ? total * 0.06 : 0;
    const totalWithDiscount = total - discountAmount;

    const handleKeyDown = (e) => {
        if(e.key === 'Enter' ) {
            e.preventDefault();
            applyDiscount();
        }
    }

    const applyDiscount = () => {
        if (discountCodes[promoCode]) {
            setDiscount(true);
            setDiscountName(discountCodes[promoCode]);
        } else {
            setDiscount(false);
            setDiscountName("");
        }
    };

    const messageWhatsApp = () => {
        const groupedCart = cart.reduce((acc, item) => {
            if (acc[item.id]) {
                acc[item.id].cantidad += 1;
            } else {
                acc[item.id] = { ...item, cantidad: 1 };
            }
            return acc;
        }, {});
        const cartMessage = Object.values(groupedCart)
            .map((item) =>
                item.cantidad > 1
                    ? `${item.name} x ${item.cantidad} - ₡${item.price * item.cantidad}`
                    : `${item.name} - ₡${item.price}`
            )
            .join('\n');

        let message = cart.length === 1
            ? `¡Hola! Estoy interesado en el siguiente producto:\n\n${cartMessage}\n\nSubtotal: ₡${total}\nDescuento (${discountName}): ₡${discountAmount}\nTotal: ₡${totalWithDiscount}\n\nGracias!`
            : `¡Hola! Estoy interesado en los siguientes productos:\n\n${cartMessage}\n\nSubtotal: ₡${total}\nDescuento (${discountName}): ₡${discountAmount}\nTotal: ₡${totalWithDiscount}\n\nGracias!`;
        const url = `https://wa.me/50683745485?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <section className="w-full">
            {cart.length > 0 && (
                <div className="bg-slate-100 p-4">
                    <h3 className="font-bold text-xl">Resumen del pedido</h3>
                    <div className="flex justify-between mt-2">
                        <p>Subtotal:</p>
                        <p className="font-bold">₡{total}</p>
                    </div>
                    {discount ? (
                        <div className="flex justify-between mt-1">
                            <p className="text-green-500">Descuento:</p>
                            <p className="text-green-500 font-bold">-₡{discountAmount}</p>
                        </div>

                    ): (
                        <div className="flex justify-between mt-1">
                            <p>Descuento:</p>
                            <p>₡{discountAmount}</p>
                        </div>
                    )}
                    <div className="flex justify-between border-t border-slate-300 mt-2">
                        <p>Total:</p>
                        <p className="font-bold">₡{totalWithDiscount}</p>
                    </div>
                    <div className="flex justify-center flex-col items-center gap-1 mt-4">
                        <div className="flex gap-2 items-center justify-center w-full">
                            <input
                                className="w-full h-8 rounded-md border border-slate-700 px-2 text-sm"
                                type="text"
                                placeholder="Código promocional"
                                value={promoCode}
                                onKeyDown={handleKeyDown}
                                onChange={(e) => setPromoCode(e.target.value)}
                            />
                            <button
                                onClick={applyDiscount}
                                className="bg-black h-8 w-80 rounded-md text-white hover:bg-slate-800"
                            >
                                Aplicar
                            </button>
                        </div>
                        <button
                            onClick={messageWhatsApp}
                            className="bg-black w-full mt-4 h-9 rounded-md text-white hover:bg-slate-800"
                        >
                            Confirmar Pedido
                        </button>
                        {/* <PayPalButton /> */}
                        <NavLink to="/products" className="pt-3 border-b-2 border-slate-900">
                            Continuar Comprando
                        </NavLink>
                    </div>
                </div>
            )}
        </section>
    );
}

export { Order };
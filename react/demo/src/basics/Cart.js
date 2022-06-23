import React from "react";

export default function Cart(props) {
    return (
        <>
            <h2>Cart</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {props.cartItems.map((item) => (
                        <CartItem item={item} />
                    ))}
                    <Total items={props.cartItems} />
                </tbody>
            </table>
        </>
    );
}



function CartItem(props) {
    return (
        <tr>
            <td>{props.item.name}</td>
            <td>{props.item.price}</td>
            <td>{props.item.qty}</td>
            <td>{props.item.price * props.item.qty}</td>
        </tr>
    );
}


function Total(props) {

    return (
        <tr>
            <td colSpan="3">Total</td>
            <td>
                {
                    props.items.reduce(
                        (total, object) => {
                            return total + object.price * object.qty;
                        }, 0)
                }
            </td>
        </tr>
    );
}
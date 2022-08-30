import React from 'react';


function ProductRow(props) {
    return (
        <tr>
            <td>
                {props.product.id}
            </td>
            <td>
                {props.product.name}
            </td>
            <td>
                {props.product.brand}
            </td>
            <td>
                {props.product.price}
            </td>
            <td>
                {props.product.stock}
            </td>
            <td>
                {props.product.discount}
            </td>
        </tr>
    )
}
export default ProductRow;
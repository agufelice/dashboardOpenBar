import React from 'react';


function UserRow(props) {
    console.log(props.user)
    return (
        <tr>
            <td>
                {props.user.id}
            </td>
            <td>
                {props.user.first_name}
            </td>
            <td>
                {props.user.last_name}
            </td>
            <td>
                {props.user.email}
            </td>
            <td>
                {props.user.role.name}
            </td>
        </tr>
    )
}
export default UserRow;
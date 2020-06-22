import React from 'react'

export default function TableTotal({ total }) {
    return (
        <>
            <tr >
                <td colSpan="4">
                    Total : {total} €
                 </td>
            </tr>
        </>
    )
}

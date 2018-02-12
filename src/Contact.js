import React from 'react';

const Contact  =({contact}) =>

    <tr>
        <th>{contact.name}</th>
        <td>{contact.phone}</td>
        <td>{contact.company}</td>
        <td>{contact.email}</td>
    </tr>

export default Contact;
import React from 'react';

const Contact  =({contact}) =>
                <li className="list-group-item">
                    {contact.name} {contact.phone}
                </li>

export default Contact;
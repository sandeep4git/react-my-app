import React from 'react';
import ReactDOM from 'react-dom';
import ContactList from './ContactList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/fontawesome/index.js'
import '../node_modules/jquery/dist/jquery.js'
import Popper from '../node_modules/popper.js/dist/popper-utils.js';
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import './index.css';

let contacts=[{
    id:1,
    name:'Sandeep',
    phone:'573 789 1477',
    company:"PayPal Inc",
    email:"abc@abc.com"
    },
    {
        id:2,
        name:'Supriya',
        phone:'573 789 1488',
        company:"Microsoft Inc",
        email:"dex@abc.com"
    },
    {
        id:3,
        name:'Cydney',
        phone:'573 789 1455',
        company:"Google Inc",
        email:"efg@abc.com"
    },
    {
        id:4,
        name:'Pradeep',
        phone:'573 789 1499',
        company:"eBay Inc",
        email:"tobb@abc.com"
    }
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1
        }

    }
    render() {
        console.log(this.props.contacts);
        return (

            <div>
                <ContactList contacts={this.props.contacts}/>
            </div>
        );
    }

}

// ========================================

ReactDOM.render(
    <App contacts={contacts}/>,
    document.getElementById('root')
);

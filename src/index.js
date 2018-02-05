import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
import ContactList from './ContactList';
import './index.css';

let contacts=[{
    id:1,
    name:'Sandeep',
    phone:'573 789 1477'
    },
    {
        id:2,
        name:'Supriya',
        phone:'573 789 1488'
    },
    {
        id:3,
        name:'Cydney',
        phone:'573 789 1455'
    },
    {
        id:4,
        name:'Pradeep',
        phone:'573 789 1499'
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
                <h1>Contact List</h1>
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

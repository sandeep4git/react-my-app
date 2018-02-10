import React from 'react';
import Contact from './Contact';
import './index.css';

class ContactList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            contacts: props.contacts
        }

    }

    updateValue(event) {
        this.setState({
            value: event.target.value
        });
    }

    addContact(event) {
        if (this.refs.phone.value!=='' || this.refs.phone.value!=='') {
            event.preventDefault();
            console.log(this.refs.phone.value);
            var name = this.refs.name.value;
            var phone = this.refs.phone.value;
            var id = Math.floor((Math.random() * 100) + 1);
            this.setState({
                contacts: this.state.contacts.concat({id, name, phone})
            })
            this.refs.name.value = '';
            this.refs.phone.value = '';
        }
    }

    render(){
        let filteredContacts=this.state.contacts.filter(
            (contact)=>{
                return contact.name.toLowerCase().indexOf(this.state.value)!==-1;
            }
        );
        return(
            <div>
                <input className="input-group-lg" type="text" placeholder="Search" value={this.state.value} onChange={this.updateValue.bind(this)}/>
                <form onSubmit={this.addContact.bind(this)}>
                    <input className="input-group-lg" type="" ref="name"/>
                    <input className="input-group-lg" type="" ref="phone"/>
                    <button type="submit" className="btn btn-outline-primary btn-sm">Add</button>
                </form>
                <ul className="list-group">
                    {filteredContacts.map((contact)=>{
                    return <Contact contact={contact} key={contact.id}/>
                    })}
                </ul>
            </div>
        )
    }
}

export default ContactList;
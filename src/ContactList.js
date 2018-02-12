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
            var company=this.refs.company.value;
            var email=this.refs.email.value;
            var id = Math.floor((Math.random() * 100) + 1);
            this.setState({
                contacts: this.state.contacts.concat({id, name, phone,company,email})
            })
            this.refs.name.value = '';
            this.refs.phone.value = '';
            this.refs.company.value = '';
            this.refs.email.value = '';
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
                <nav className="navbar navbar-inverse bg-primary justify-content-between">
                    <a className="navbar-brand">MY Contacts</a>
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" value={this.state.value} onChange={this.updateValue.bind(this)}/>
                </nav>
                <div class="card bg-light">
                <form  className="card-body" onSubmit={this.addContact.bind(this)}>
                    <h3 className="heading">Create Contact</h3>
                    <input className="form-control mr-sm-2" placeholder="Name" type="" ref="name" required/>
                    <input className="form-control mr-sm-2" placeholder="Phone" type="" ref="phone" required/>
                    <input className="form-control mr-sm-2" placeholder="Company" type="" ref="company" />
                    <input className="form-control mr-sm-2" placeholder="Email" type="" ref="email" required/>
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">ADD</button>
                </form>
                </div>
                <table className="table table-hover">
                    <thead>
                    <tr className="bg-primary text-white">
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Company</th>
                        <th scope="col">Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredContacts.map((contact)=>{
                        return <Contact contact={contact} key={contact.id}/>
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ContactList;
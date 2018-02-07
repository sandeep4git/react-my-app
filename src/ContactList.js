import React from 'react';
import Contact from './Contact';

class ContactList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            contacts:props.contacts
        }

    }
    updateValue(event){
        this.setState({
            value:event.target.value
        });
    }
    addContact(event){
        event.preventDefault();
        console.log(this.refs.phone.value);
        var name = this.refs.name.value;
        var phone= this.refs.phone.value;
        var id= Math.floor((Math.random()*100)+1);
        //console.log(this.state.contacts)
        //console.log({id,name,phone});
        this.setState({
            contacts:this.state.contacts.concat({id,name,phone})
        })
        this.refs.name.value='';
        this.refs.phone.value='';
    }
    render(){
        let filteredContacts=this.state.contacts.filter(
            (contact)=>{
                return contact.name.toLowerCase().indexOf(this.state.value)!==-1;
            }
        );
        return(
            <div>
                <input type="text" placeholder="Search" value={this.state.value} onChange={this.updateValue.bind(this)}/>
                <form onSubmit={this.addContact.bind(this)}>
                    <input type="" ref="name"/>
                    <input type="" ref="phone"/>
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
                <ul>
                    {filteredContacts.map((contact)=>{
                    return <Contact contact={contact} key={contact.id}/>
                    })}
                </ul>
            </div>
        )
    }
}

export default ContactList;
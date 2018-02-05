import React from 'react';
import Contact from './Contact';

class ContactList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: 'Search'
        }

    }

    updateValue(event){
        this.setState({
            value:event.target.value
        });
    }
    render(){
        return(
            <div>
                <input type="text" value={this.state.value} onChange={this.updateValue.bind(this)}/>
            <ul>
                {this.props.contacts.map((contact)=>{
                    return <Contact contact={contact} key={contact.id}/>
                })}
            </ul>
            </div>
        )
    }
}

export default ContactList;
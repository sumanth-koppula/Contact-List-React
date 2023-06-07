import React,{ Component } from "react"; 
import './ContactDetails.css';

class ContactDetails extends Component{
    constructor(props){
        super(props);
        // binding the handleDeleteContact, handleEditContact  functions.
        this.handleDeleteContact = this.handleDeleteContact.bind(this);
        this.handleEditContact = this.handleEditContact.bind(this);
        
    }
    // fetching api and making a dummy DELETE call to the server
    handleDeleteContact(){
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.contact.id}`, {
            method: 'DELETE',
        });
    }

    // fetching api and making a dummy PUT call to the server
    handleEditContact(){
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.contact.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }

    
    render(){
        const contact = this.props.contact;
        return(
            <div> 
                {/* visible details of a contact */}
                <h3 id="visible-details">
                    {contact.name}
                    <div id="edit-delete-icons">
                    
                        <img className="icon" src="https://as2.ftcdn.net/v2/jpg/01/97/22/97/1000_F_197229786_vWEFpeQEOtIcjvtKVRAyPPP91ANs43uq.jpg" alt="edit" onClick={this.handleEditContact}></img>
                        <img className="icon" src="https://as2.ftcdn.net/v2/jpg/00/98/26/11/1000_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg" alt="delete" onClick={this.handleDeleteContact}></img>
                    </div>
                </h3>   
                    <div id={contact.id} >
                        <div id="phone">
                            <img className="contact-details" src="https://t4.ftcdn.net/jpg/00/82/56/67/240_F_82566747_T7dXb2E3KI6cV5yFekgL7BO58kOtFt6Y.jpg" alt="phone"></img>
                            {contact.phone}
                        </div>
                        <div id="email">
                        <img className="contact-details" src="https://t4.ftcdn.net/jpg/01/26/39/73/240_F_126397385_YSHBFkORjoxhn1GbUoSWC8mKhYey8orW.jpg" alt="phone"></img>
                            {contact.email}
                        </div>
                        <div>
                        <img className="contact-details" src="https://t4.ftcdn.net/jpg/02/72/89/67/240_F_272896745_tlTivOH81qWIVzz34KqFGm8LO3N9hMYQ.jpg" alt="phone"></img>
                            <div id="address">
                                {"street:"} {contact.address.street} <br></br>
                                {"suite:"} {contact.address.suite} <br></br>
                                {"city:"} {contact.address.city} <br></br>
                                {"zipcode:"} {contact.address.zipcode}
                            </div>
                        </div>
                        <div>{"Website:"} {contact.website}</div>
                    </div>
                <hr></hr>
            </div>
        );
    }
}

export default ContactDetails;

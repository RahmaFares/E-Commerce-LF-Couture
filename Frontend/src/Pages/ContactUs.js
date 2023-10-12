import React from "react";
import { ContactContainer, GetInTouch, ContactInfo, ContactForm, FormInput, FormTextarea } from '../styles/Contact.style'



const ContactUS = () => {


    return (
        <ContactContainer>
            <GetInTouch>GET IN TOUCH</GetInTouch>
            <ContactInfo>
                <p>Phone Number: +201008085424</p>
                <p>Email: Leilaafaress@gmail.com</p>
                <p>Address: 5th settlement, Cairo, Egypt</p>
                <p>Address: Tarh Al-Bahr street, PortSaid, Egypt</p>
            </ContactInfo>
            <ContactForm>
                <FormInput type="text" placeholder="Name" />
                <FormInput type="text" placeholder="Phone Number" />
                <FormInput type="email" placeholder="Email" />
                <FormTextarea placeholder="Message" />
                <button>Submit</button>
            </ContactForm>
        </ContactContainer>
    );
};

export default ContactUS;

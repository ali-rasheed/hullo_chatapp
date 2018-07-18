import { Contact } from "../contact";
import { ContactViewModel } from "../../view-model/contact-view-model";

export class ContactValidator {
    sanitize(obj: ContactViewModel): Contact {
        if (obj.name != "" || obj.name.length >= 6) {
            return new Contact(obj.name, obj.messages);
        } 
        
        throw "Please enter a valid name";
    }
}
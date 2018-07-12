/// <reference path="Contact.ts" />
class ContactFactory {
    public createContact(name: String, message?: String): Contact {
        if (message == undefined) {
            return new Contact(name);
        } else {
            return new Contact(name, message);
        }
    }
}

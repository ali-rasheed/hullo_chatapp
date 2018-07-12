/// <reference path="contactTemplate.ts" />


class Contact implements contactTemplate {
  // constructor(contactName: string, message: any[]) {
  //   message = this.msgs;
  //   contactName = this.contactName;
  // }
  constructor(contactName, messages?){
  if(messages!=undefined) { messages= this.msgs;}

    contactName= this.contactName;
  }
  msgs: String[];
  contactName: string;
}

var contacts: Array<Contact> = [new Contact("Mike", []),
new Contact("Molly", []), new Contact("Peter", []),
new Contact("Kevin", [])];



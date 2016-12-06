//List of contacts//

var contacts = [

    {name: 'Mike',
    phone: '(407) 320-5605',
    address: { street: '100 Church St', city: 'Orlando', state: 'FL'},
    added: new Date()
  },
    {
    name: 'Mary',
    phone: '(407) 578-1433',
    address: { street: '200 Main St', city: 'Orlando', state: 'FL' },
    added: new Date()
  },

  {
    name: 'Rob',
    phone: '(407) 433-9006',
    address: { street: '300 Orlando St', city: 'Orlando', state: 'FL' },
    added: new Date(),

 }
]

//Function to get the contacts information//

var Contact = function(name, phone, address, added, id) {
  this.name = name
  this.phone = phone
  this.addres = address
  this.added = new Date()

}

//Creating contacts//

var mike = new Contact (contacts[0].name, contacts[0].phone, contacts[0].address, contacts[0].added)
var mary = new Contact (contacts[1].name, contacts[1].phone, contacts[1].address, contacts[1].added)
var rob = new Contact (contacts[2].name, contacts[2].phone, contacts[2].address, contacts[2].added)


var ContactList = function () {
  this.contacts = []
  this.add = function (contact) {
  this.contacts.push(contact)
  }
}

var myContactList = new ContactList







// myContactList.find = function (name) {
//   return this.contacts.filter( (contact) => contact.name.includes(name));
//
// }

const Page = require('watch_framework').Page;

const ContactsCollection = require('../collections/contacts');
const ContactView = require('../views/contact');

const template = require('../../templates/pages/contacts.hbs');
const $ = require('jquery');

const contactsPage = Page.extend({

  id: 'contacts',

  template,

  buttonEvents: {
    right: 'goToHomePage',
    face: 'screenClickExample',
    left: 'back',
  },

  initialize() {
    this.contactsCollection = new ContactsCollection();
    this.seedContacts();
    this.render();
  },

  // TODO use jquery to load a JSON file async test?
  seedContacts() {
    this.contactsCollection.reset([
      { name: 'Andrew', phoneNumber: '0431 333 111' },
      { name: 'Ray', phoneNumber: '0431 333 222' },
    ]);
  },

  screenClickExample() {
    this.$el.html('<div>Oh noes!</div>');
  },

  goToHomePage() {
    window.App.navigate('');
  },

  render() {
    this.$el.html(this.template());

    const contactsHTML = document.createDocumentFragment();

    this.contactsCollection.each(function collectionFunction(contact) {
      $(contactsHTML).append(this.createContactHTML(contact));
    }, this);

    this.$el.find('ul').html(contactsHTML);

    return this;
  },

  createContactHTML(contact) {
    const view = new ContactView({
      model: contact,
    });
    return view.render().el;
  },

});

module.exports = contactsPage;

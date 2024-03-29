const User = function(name) {
  this.name = name;
  this.chatroom = null;

}

User.prototype = {
  send: function(message, to) {
    this.chatroom.send(message, this, to);
  },
  recieve: function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

const Chatroom = function() {
  let users = {}; // list of users

  return {
    register: function(user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function(message, from, to ){
      if(to) {
        //single user message
        to.recieve(message, from);
      } else{
        // mass message
        for(key in users) {
          if(users[key] !== from) {
            users[key].recieve(message, from)
          }
        }
      }
    }
  }
}

const brad = new User('Brad');
const alyssa = new User('Alyssa');
const jose = new User('Jose');

const chatroom = new chatroom();

chatroom.register(brad);
chatroom.register(alyssa);
chatroom.register(jose);

brad.send('hello alyssa', alyssa);
jose.send('hello brad you are the best dev ever', brad);
alyssa.send('hello everyone!!');
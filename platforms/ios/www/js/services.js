angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    title: 'Tennis',
    location: 'CRC',
    description: 'Looking for someone to play tennis with me later today. We can hit balls and talk about the Williams sisters, or whatever people who play Tennis do.',
    time: 'Today, 4:00pm',
  }, {
    id: 1,
    title: 'Pickup Soccer',
    location: 'CRC',
    description: 'blah',
    time: 'Today, 5:00pm',
  }, {
    id: 2,
    title: 'Calc II HW5 Help',
    location: 'CULC',
    description: 'blah',
    time: 'Tomorrow, 1:00pm',
  }, {
    id: 3,
    title: 'CS 2110 Recursive Assembly Help',
    location: 'College of Computing',
    description: 'blah',
    time: 'Tomorrow, 9:00pm',
  }, {
    id: 4,
    title: 'Need Members for Hackathon Group',
    location: 'Klaus Atrium',
    description: 'blah',
    time: 'Tomorrow, 6:00pm',
  },
  {
    id: 5,
    title: 'Teach me how to swim',
    location: 'Florida',
    description: 'Sharks',
    time: 'Today, 6:00am',
  },
  {
    id: 6,
    title: 'Free juggling lessons',
    location: 'Skiles',
    description: 'blah',
    time: 'Tomorrow, 4:00pm',
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

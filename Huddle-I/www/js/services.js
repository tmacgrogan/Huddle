angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    imgLink: 'img/animal39.png',
    title: 'Tennis',
    location: 'CRC',
    description: 'Looking for someone to play tennis with me later today. We can hit balls and talk about the Williams sisters, or whatever people who play Tennis do.',
    time: 'Today, 4:00pm',
    initials: 'VX'
  }, {
    id: 1,
    imgLink: 'img/cat19.png',
    title: 'Pickup Soccer',
    location: 'CRC',
    description: 'blah',
    time: 'Today, 5:00pm',
    initials: 'AS'
  }, {
    id: 2,
    imgLink: 'img/deer4.png',
    title: 'Calc II HW5 Help',
    location: 'CULC',
    description: 'blah',
    time: 'Tomorrow, 1:00pm',
    initials: 'MS'
  }, {
    id: 3,
    imgLink: 'img/dolphin1.png',
    title: 'CS 2110 Recursive Assembly Help',
    location: 'College of Computing',
    description: 'blah',
    time: 'Tomorrow, 9:00pm',
    initials: 'TM'
  }, {
    id: 4,
    imgLink: 'img/elephant6.png',
    title: 'Need Members for Hackathon Group',
    location: 'Klaus Atrium',
    description: 'blah',
    time: 'Tomorrow, 6:00pm',
    initials: 'LW'
  },
  {
    id: 5,
    imgLink: 'img/ewe2.png',
    title: 'Teach me how to swim',
    location: 'Florida',
    description: 'Sharks',
    time: 'Today, 6:00am',
    initials: 'AK'
  },
  {
    id: 6,
    imgLink: 'img/pig4.png',
    title: 'Free juggling lessons',
    location: 'Skiles',
    description: 'blah',
    time: 'Tomorrow, 4:00pm',
    initials: 'JC'
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

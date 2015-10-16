angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Tennis',
    lastText: 'CRC',
    description: 'Looking for someone to play tennis with me later today. We can hit balls and talk about the Williams sisters, or whatever people who play Tennis do.',
    time: 'Today, 4:00pm',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Pickup Soccer',
    lastText: 'CRC',
    description: 'blah',
    time: 'Today, 5:00pm',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Calc II HW5 Help',
    lastText: 'CULC',
    description: 'blah',
    time: 'Tomorrow, 1:00pm',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'CS 2110 Recursive Assembly Help',
    lastText: 'College of Computing',
    description: 'blah',
    time: 'Tomorrow, 9:00pm',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Need Members for Hackathon Group',
    lastText: 'Klaus Atrium',
    description: 'blah',
    time: 'Tomorrow, 6:00pm',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  },
      {
          id: 5,
          name: 'Teach me how to swim',
          lastText: 'Florida',
          description: 'Sharks',
          time: 'Today, 6:00am',
          face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
      },
      {
          id: 6,
          name: 'Free juggling lessons',
          lastText: 'Skiles',
          description: 'blah',
          time: 'Tomorrow, 4:00pm',
          face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
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

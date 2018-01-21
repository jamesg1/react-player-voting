window.Seed = (function () {
  function generateVoteCount() {
    return Math.floor((Math.random() * 40) + 20);
  }

  const players = [
    {
      id: 1,
      title: 'Alex Brosque',
      description: 'Striker',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/players/player.png',
      playerImageUrl: 'images/players/player.png',
    },
    {
      id: 2,
      title: 'David Carney',
      description: 'Defender',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/players/player.png',
      playerImageUrl: 'images/players/player.png',
    },
    {
      id: 3,
      title: 'Bobo',
      description: 'Striker',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/players/player.png',
      playerImageUrl: 'images/players/player.png',
    },
    {
      id: 4,
      title: "Brendan O'neil",
      description: 'Defender',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/players/player.png',
      playerImageUrl: 'images/players/player.png',
    },
  ];

  return { players: players };
}());

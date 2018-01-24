window.MockApi = (function () {
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
      dob: '12/10/83',
      playerImageUrl: 'images/players/brosque.png',
    },
    {
      id: 2,
      title: 'David Carney',
      description: 'Defender',
      url: '#',
      votes: generateVoteCount(),
      dob: '30/11/83',
      playerImageUrl: 'images/players/carney.png',
    },
    {
      id: 3,
      title: 'Bobo',
      description: 'Striker',
      url: '#',
      votes: generateVoteCount(),
      dob: '9/1/85',
      playerImageUrl: 'images/players/bobo.png',
    },
    {
      id: 4,
      title: "Brendan O'neil",
      description: 'Defender',
      url: '#',
      votes: generateVoteCount(),
      dob: '12/4/94',
      playerImageUrl: 'images/players/oneill.png',
    },
  ];

  return { players: players };
}());

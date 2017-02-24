const names = language => kind => Object.freeze({
  en: {
    trump: [
      'The Moron',
      'Knobby',
      'Ballbag Jones',
      'Small-hands',
      'The Orange goblin',
      '"Orange"',
      'Pube-toupée',
      'The fascist clown',
      'The orange manatee',
      'Cheeto Jesus',
      'The Sociopathic, 70-year-old toddler',
      'America’s back mole',
      'The Orange slug',
      'The Human Corncob',
      'The national emberassment',
      'Goatboy',
      '"small-hands"',
      'knobby',
      'Sauron jr',
      '"smelly"',
    ],
  },
  no: {
    trump: [
      'Ballefranz',
      'Slaggleif',
      'Den gamle nissen',
    ],
  },
})[language][kind];

export default names;

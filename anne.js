const bigFiveResults = [
  { id: 1,
    characterId: 1,
    'openness': 4,
    'conscientiousness': 5,
    'extroversion': 3,
    'agreeableness': 5,
    'neuroticism': 4
  },
  {
    id: 2,
    characterId: 2,
    'openness': 5,
    'conscientiousness': 3,
    'extroversion': 2,
    'agreeableness': 4,
    'neuroticism': 3
  }
];

const characters = [
  { id: 1,
    name: 'Sally',
    height: 120,
    weight: 125,
    age: 30,
    attributes: {
      'dexterity': 0,
      'strength': 0,
      'intelligence': 0,
      'willpower': 0,
      'charisma': 0,
    },
  },
  { id: 2,
    name: 'Sam',
    height: 125,
    weight: 145,
    age: 50,
    attributes: {
      'dexterity': 0,
      'strength': 0,
      'intelligence': 0,
      'willpower': 0,
      'charisma': 0,
    }
  }
]

function calculateStrengthAttributeForCharacter(character) { 
  let strength = 0;
  if (character.height<=120) strength+=10;
  return strength;
}

function calculateCharismaForCharacter(character) {
  const results = bigFiveResults.find(x=>x.characterId===character.id);
  return results.agreeableness;
}

function buildCharacterAttributes() {
  for (const character of characters) {
    character.attributes['strength'] = calculateStrengthAttributeForCharacter(character);
    character.attributes['charisma'] = calculateCharismaForCharacter(character);
    // etc.
  }
}

buildCharacterAttributes();
console.log(characters);
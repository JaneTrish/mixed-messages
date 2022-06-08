const astrology = {
  planet: [
    'Mercury',
    'Mars',
    'Venus',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune',
  ],
  sign: [
    'Aries',
    'Taurus',
    'Gemini',
    'Cancer',
    'Leo',
    'Virgo',
    'Libra',
    'Scorpio',
    'Sagittarius',
    'Capricorn',
    'Aquarius',
    'Pisces',
  ],
  body: [
    'toes',
    'jaw',
    'glutes',
    'knees',
    'wrists',
    'eyes',
    'teeth',
    'hair',
    'lower back',
    'belly',
  ],
  tip: [
    'have a healthy breakfast',
    'stay away from caffeine',
    'discuss the meaning of life',
    'dig deep into matters of the heart',
    'have a spa day',
    'have some time off',
    'feed ducks in a park',
    'stay in bed',
    'make new friends',
    'go shopping',
  ],
};

const button = document.getElementById('generator');
const prediction = document.querySelector('.prediction');

//Generate random number
function randomNumber(array) {
  let num = Math.floor(Math.random() * array.length);
  return num;
}

const generatePrediction = () => {
  let personalInfo = [];

  for (proper in astrology) {
    let generatedIndex = randomNumber(astrology[proper]);
    switch (proper) {
      case 'planet':
        let planet = astrology[proper][generatedIndex];
        personalInfo.push(`${planet} is in `);
        break;
      case 'sign':
        let sign = astrology[proper][generatedIndex];
        personalInfo.push(`${sign}.`);
        break;
      case 'body':
        let signBody = astrology[proper][generatedIndex];
        personalInfo.push(`Pay extra attention to your ${signBody}.`);
        break;
      case 'tip':
        let signAdvice = astrology[proper][generatedIndex];
        personalInfo.push(
          `The best thing you can do today is to ${signAdvice}.`
        );
        break;
      default:
        console.log(
          `Sorry, the stars are silent today. There is not enough info.`
        );
    }
  }

  const astroMessage = personalInfo.join(' ');
  console.log(astroMessage);
  prediction.textContent = astroMessage;
};

button.addEventListener('click', generatePrediction);

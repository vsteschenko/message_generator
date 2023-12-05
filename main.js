
const zodiacSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];

const adjectives = ['romantic', 'adventurous', 'positive', 'ambitious', 'creative', 'energetic', 'charming', 'enthusiastic', 'intuitive', 'patient'];

const activities = ['exploring new opportunities', 'meeting new people', 'learning something new', 'taking a break and relaxing', 'focusing on personal growth', 'spending time with loved ones'];

const energy = ['abounds', 'permeates the atmosphere', 'fills the air', 'surrounds you', 'radiates throughout', 'is in the air']

const great = ['fantastic', 'superb', 'excellent', 'marvelous', 'outstanding']

const generateHoroscope = () => {
  let randomZodiacSign = Math.floor(Math.random() * zodiacSigns.length);
  let randomAdjective = Math.floor(Math.random() * adjectives.length);
  let randomActivity = Math.floor(Math.random() * activities.length)
  let randomEnergy = Math.floor(Math.random() * energy.length)
  let randomGreat = Math.floor(Math.random() * great.length)

  const horoscope = `Today's horoscope for ${zodiacSigns[randomZodiacSign]}: ${adjectives[randomAdjective]} energy ${energy[randomEnergy]}. It's a ${great[randomGreat]} day for ${activities[randomActivity]}.`
  return console.log(horoscope)
};
generateHoroscope();
generateHoroscope();
generateHoroscope();
generateHoroscope();
generateHoroscope();
generateHoroscope();
const horoscopePredictions = [
  ["Today, you'll discover a new passion for extreme knitting. Watch out for those wild yarn burns!"],
  ["Your lucky snack today is pickles dipped in chocolate. Don't knock it until you've tried it—strange cravings lead to unexpected delights."],
  ["Expect a surprise encounter with a talking squirrel today. It may have important nut-related advice for you."],
  ["Your pet rock will reveal its deep thoughts to you today. Spoiler alert: it's contemplating the meaning of gravel."],
  ["Beware of rogue rubber ducks in your bathtub. They may look innocent, but they're plotting a soapy rebellion."],
  ["Today, your GPS will lead you to a hidden treasure—probably a long-lost sock or a forgotten bag of chips."],
  ["You will be tempted to break into spontaneous interpretive dance today. Embrace it—your coworkers will appreciate the midday entertainment."],
  ["A talking parrot will offer you relationship advice today. Remember, squawking loudly is not an acceptable form of communication."],
  ["Your lucky color today is glitter. Wear it proudly and watch as the world becomes a sparklier place."],
  ["Today, you'll have the sudden urge to break into song at inappropriate moments. Your coworkers may not appreciate your spontaneous musical numbers."],
  ["Embrace your inner superhero today. Your superpower is the ability to find lost TV remote controls—no more channel surfing woes."],
  ["Beware of falling coconuts today. Your head might be a magnet for tropical fruit, but at least you'll have a delicious snack."],
  ["Your spontaneous decision to wear a tutu to work will bring unexpected joy to your colleagues."],
  ["Beware of a mischievous squirrel stealing your morning coffee. It might have a caffeine addiction."],
  ["Today is the day you finally conquer your fear of garden gnomes. They've been plotting against you for too long."],
  ["Your lucky word today is 'serendipity.' Say it aloud and see what magical events unfold."],
  ["Embrace your inner pirate. Speak in pirate lingo all day, and see how many doubloons you can collect."],
  ["Your pet goldfish will share its life philosophy with you. Spoiler alert: it involves swimming in circles and forgetting things every three seconds."],
  ["You'll receive a mysterious package today. Spoiler: it's not a bomb; it's just glitter. Brace yourself for sparkle overload."],
  ["A fortune cookie will predict fame and fortune for you. Don't forget to share your newfound wealth with your cookie supplier."],
  ["Your lucky dance move today is the 'funky chicken moonwalk.' Bust it out during awkward silences."],
  ["An origami frog will bring you unexpected luck. Kiss it, and who knows what amphibious adventures await."],
  ["Your pet rock wants a vacation. Consider taking it on a tour of the local pebble beaches."],
  ["Your alter ego, Captain Clumsy, will make a grand entrance today. Tripping over your own shoelaces has never been so heroic."],
  ["Beware of rogue rubber chickens today. They're not just for comedy; they're also plotting world domination."],
  ["Your lucky number today is the square root of negative pi. Good luck finding it on the lottery ticket."],
  ["Today, you will discover that your toaster is a portal to an alternate universe. Be cautious; they may have different rules about burnt toast."],
  ["Embrace your inner sloth today. Napping is not a sign of laziness; it's a strategic energy conservation technique."],
  ["You will be tempted to break into song at inappropriate moments. Your coworkers may not appreciate your spontaneous musical numbers."],
  ["Beware of rogue rubber ducks in your bathtub. They may look innocent, but they're plotting a soapy rebellion."],
  ["Your psychic abilities will be at their peak today. Use them wisely—like predicting when the office coffee machine will break down."],
];

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
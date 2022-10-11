// random_quote.js -->
var howMany = 55
var quote = new Array(howMany+1)

quote[1]="As I let go of my feelings of guilt, I can get in touch with my Inner Sociopath."
quote[2]="I have the power to channel my imagination into ever-soaring levels of suspicion and paranoia."
quote[3]="I assume full responsibility for my actions, except the ones that are someone else's fault."
quote[4]="I no longer need to punish, deceive or compromise myself.  Unless, of course, I want to stay employed."
quote[5]="In some cultures what I do would be considered normal."
quote[6]="Having control over myself is nearly as good as having control over others."
quote[7]="My intuition nearly makes up for my lack of good judgment."
quote[8]="I honor my personality flaws, for without them I would have no personality at all."
quote[9]="Joan of Arc heard voices too."
quote[10]="I am grateful that I am not as judgmental as all those censorious, self-righteous people around me."
quote[11]="I need not suffer in silence while I can still moan, whimper and complain."
quote[12]="As I learn the innermost secrets of the people around me, they reward me in many ways to keep me quiet."
quote[13]="When someone hurts me, forgiveness is cheaper than a lawsuit.  But not nearly as gratifying."
quote[14]="The first step is to say nice things about myself.  The second, to do nice things for myself.  The third, to find someone to buy me nice things."
quote[15]="As I learn to trust the universe, I no longer need to carry a gun."
quote[16]="All of me is beautiful and valuable, even the ugly, stupid, and disgusting parts."
quote[17]="I am at one with my duality."
quote[18]="Blessed are the flexible, for they can tie themselves into knots."
quote[19]="I will strive to live each day as if it were my 40th birthday."
quote[20]="Only a lack of imagination saves me from immobilizing myself with imaginary fears."
quote[21]="I honor and express all facets of my being, regardless of state and local laws."
quote[22]="Today I will gladly share my experience and advice, for there are no sweeter words than 'I told you so.'"
quote[23]="False hope is nicer than no hope at all."
quote[24]="A good scapegoat is nearly as welcome as a solution to the problem."
quote[25]="Just for today, I will not sit in my living room all day watching TV.  Instead I will move my TV into the bedroom."
quote[26]="Who can I blame for my own problems?  Give me just a minute... I'll find someone."
quote[27]="Why should I waste my time reliving the past when I can spend it worrying about the future?"
quote[28]="The complete lack of evidence is the surest sign that the conspiracy is working."
quote[29]="I am learning that criticism is not nearly as effective as sabotage."
quote[30]="Becoming aware of my character defects leads me to the next step -- blaming my parents."
quote[31]="To have a successful relationship, I must learn to make it look like I'm giving as much as I'm getting."
quote[32]="I am willing to make the mistakes if someone else is willing to learn from them."
quote[33]="If a man is standing in the middle of the forest speaking and there is no woman around to hear him, is he still wrong?"
quote[34]="If a deaf person swears, does his mother wash his hands with soap?"
quote[35]="If someone with multiple personalities threatens to kill himself, is it considered a hostage situation?"
quote[36]="Is there another word for synonym?"
quote[37]="Isn't it a bit unnerving that doctors call what they do 'practice?'"
quote[38]="When sign makers go on strike, is anything written on their signs?"
quote[39]="Where do forest rangers go to 'get away from it all?'"
quote[40]="Why isn't there mouse flavored cat food?"
quote[41]="What do you do when you see an endangered animal eating an endangered plant?"
quote[42]="If a parsley farmer is sued, can they garnish his wages?"
quote[43]="Would a fly without wings be called a walk?"
quote[44]="Why do they lock gas station bathrooms?  Are they afraid someone will clean them?"
quote[45]="If a stealth bomber crashes in a forest, will it make a sound?"
quote[46]="If a turtle doesn't have a shell, is he homeless or naked?"
quote[47]="Why don't sheep shrink when it rains?"
quote[48]="Can vegetarians eat animal crackers?"
quote[49]="If the police arrest a mime, do they tell him he has the right to remain silent?"
quote[50]="Why do they put Braille on the drive-through bank machines?"
quote[51]="How do they get the deer to cross at that yellow road sign?"
quote[52]="Why do they sterilize the needles for lethal injections?"
quote[53]="Why did kamikaze pilots wear helmets?"
quote[54]="Is it true that cannibals don't eat clowns because they taste funny?"
quote[55]="Eagles may soar, but weasles don't get sucked into jet engines."

function rndnumber()
{
  var randscript = -1
  while (randscript < 0 || randscript > howMany || isNaN(randscript))
    {
      randscript = parseInt(Math.random()*(howMany+1))
    }
  return randscript
}

function rand_quote()
{
  quo = rndnumber();
  quox = new String(quote[quo]);
  document.write(quox);
}

rand_quote();

// End -->

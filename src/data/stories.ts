export type Mood = 'warm' | 'dark' | 'nostalgic';

export interface Story {
  id: string;
  title: string;
  cover: string;
  excerpt: string;
  author: string;
  designer: string;
  readingTime: string;
  mood: Mood;
  content: string[];
}

export const stories: Story[] = [
{
  id: '1',
  title: 'Echoes of Downtown Cairo',
  cover:
  'https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2000&auto=format&fit=crop',
  excerpt:
  'A deep dive into the architectural beauty of downtown Cairo, where vintage streetlights still flicker in the winter rain.',
  author: 'Ahmed Hassan',
  designer: 'Mahmoud Ali',
  readingTime: '6 min read',
  mood: 'dark',
  content: [
  'The rain never truly stops in the lower sectors. It just changes tempo. Sometimes it’s a mist that clings to your coat, other times it’s a deluge that washes the neon reflections into abstract watercolor paintings on the asphalt.',
  'I spent three weeks wandering these streets, guided only by the flickering signs of establishments that officially closed decades ago. There is a strange comfort in the hum of failing electricity.',
  'The architecture here tells a story of a future that was promised but never delivered. Towering brutalist structures wrapped in holographic advertisements that glitch and stutter, repeating the same cheerful slogans to empty streets.',
  'What remains of the population here are ghosts of the analog age. They move with a quiet dignity, ignoring the towering skyscrapers above them, finding warmth in small, subterranean noodle bars where the broth is always boiling and the tea is always bitter.']

},
{
  id: '2',
  title: 'Sunset over the Nile',
  cover:
  'https://images.unsplash.com/photo-1506744626753-1fa44df31c78?q=80&w=2000&auto=format&fit=crop',
  excerpt:
  "Capturing the fleeting moments of warmth and golden reflections before the sun dips below the horizon along the Nile.",
  author: 'Omar Tariq',
  designer: 'Salma Yasser',
  readingTime: '4 min read',
  mood: 'warm',
  content: [
  'There is a specific quality to the light just before dusk that changes how we perceive reality. Shadows stretch, colors saturate, and for a brief moment, everything feels significant.',
  'We traveled to the remote valleys of the northern hemisphere to document this phenomenon. The locals call it "the breathing time," a period where work ceases and people simply watch the light change.',
  'In these isolated communities, time is not measured by clocks, but by the angle of the sun. The golden hour is a daily ritual, a collective pause that grounds them to the earth.',
  'Through our lenses, we tried to capture not just the visual beauty, but the emotional weight of these moments. The resulting archive is a testament to the quiet, enduring power of the natural world.']

},
{
  id: '3',
  title: 'Letters from Alexandria',
  cover:
  'https://images.unsplash.com/photo-1523812554286-903204780d6f?q=80&w=2000&auto=format&fit=crop',
  excerpt:
  'A collection of unsent letters found in an old Alexandrian post office, revealing the beautiful secrets of the coastal city.',
  author: 'Nourhan Sameh',
  designer: 'Karim Magdy',
  readingTime: '8 min read',
  mood: 'nostalgic',
  content: [
  'The box was tucked away in the back room of the old post office, covered in a thick layer of dust. Inside were hundreds of letters, all dated 1994, all stamped, but none ever sent.',
  'Reading them felt like an intrusion, a violation of privacy decades after the fact. Yet, the stories they contained were too compelling to ignore. They spoke of unrequited love, hidden regrets, and dreams that were quietly abandoned.',
  'One letter, written by a woman named Eleanor to her estranged sister, detailed a summer they spent by the sea. The ink was smudged, perhaps by tears, perhaps by the damp coastal air.',
  'These letters are a time capsule of human emotion. They remind us that while technology has changed how we communicate, the fundamental desires and fears that drive us remain exactly the same.']

},
{
  id: '4',
  title: 'Midnight at Al-Orman Gardens',
  cover:
  'https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&w=2000&auto=format&fit=crop',
  excerpt:
  'When the gates close, the hidden life of the gardens begins. A photographic journey into nocturnal flora right in Cairo.',
  author: 'Youssef Ibrahim',
  designer: 'Habiba Adel',
  readingTime: '5 min read',
  mood: 'dark',
  content: [
  'Most people only see the gardens in the harsh light of day, when the colors are loud and the paths are crowded. But the true magic happens after midnight.',
  'We were granted exclusive access to the conservatory after hours. Armed with low-light cameras and a sense of reverence, we stepped into a world that felt entirely alien.',
  'Certain flowers only bloom in the dark, releasing intoxicating scents designed to attract nocturnal pollinators. The air was thick with perfume and the quiet rustle of unseen insects.',
  'The resulting photographs are a study in contrast: the delicate, pale petals glowing against the deep, impenetrable blackness of the night. It is a reminder that beauty exists even when no one is looking.']

},
{
  id: '5',
  title: 'The Egyptian Coffee Ritual',
  cover:
  'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2000&auto=format&fit=crop',
  excerpt:
  'Meeting the passionate local artisans who dedicate their mornings to crafting the perfect, rich cup of traditional coffee.',
  author: 'Mostafa Kamal',
  designer: 'Mariam Farouk',
  readingTime: '7 min read',
  mood: 'warm',
  content: [
  'It is a pursuit of perfection that borders on madness. The variables are endless: the grind size, the water temperature, the tamping pressure, the humidity in the air.',
  'I spent a month in Naples, observing the masters at work. They move with the precision of surgeons and the flair of orchestra conductors. Every shot pulled is an event.',
  'For them, espresso is not a beverage; it is a philosophy. It is about extracting the very essence of the bean, a concentrated burst of flavor that tells the story of its origin.',
  'The perfect espresso is elusive. Even the masters admit that they only achieve it a few times a year. But it is the chase, the relentless pursuit of that fleeting moment of perfection, that keeps them going.']

},
{
  id: '6',
  title: 'Vintage Cairo on Film',
  cover:
  'https://images.unsplash.com/photo-1528697203043-733daf42c010?q=80&w=2000&auto=format&fit=crop',
  excerpt:
  'Why the resurgence of film photography among Egyptian youth is more than a trend—it’s a desire to preserve our authentic culture.',
  author: 'Nada Hossam',
  designer: 'Amr Zaki',
  readingTime: '5 min read',
  mood: 'nostalgic',
  content: [
  'In an age where we take thousands of photos a year and look at them once, the appeal of film is its limitation. You have 36 exposures. Every click costs money. Every shot requires thought.',
  'The resurgence of analog photography is a rebellion against the ephemeral nature of digital media. A printed photograph is a physical object, a tangible piece of memory that you can hold in your hands.',
  'There is a distinct aesthetic to film—the grain, the unpredictable color shifts, the soft focus—that digital filters can only mimic. It is imperfect, and in that imperfection, it feels more real.',
  'We spoke to a new generation of photographers who are choosing the darkroom over Lightroom. For them, the process is just as important as the result. It is a slow, deliberate act of creation in a fast-paced world.']

}];
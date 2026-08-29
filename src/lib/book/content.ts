export type ChapterId = "basics" | "phone" | "creative" | "go";

export type OverlayKind = "thirds" | "focus" | "lines";

export type PageKind =
  | "cover"
  | "toc"
  | "photo"
  | "compare"
  | "play"
  | "tips"
  | "practice"
  | "end";

export type BookPage = {
  id: string;
  kind: PageKind;
  chapter?: ChapterId;
  kicker?: string;
  title: string;
  body?: string;
  image?: string;
  alt?: string;
  caption?: string;
  overlay?: OverlayKind;
  left?: { image: string; alt: string; label: string; caption: string };
  right?: { image: string; alt: string; label: string; caption: string };
  tips?: { title: string; text: string }[];
  steps?: { title: string; text: string }[];
};

export const CHAPTERS: {
  id: ChapterId;
  label: string;
  line: string;
}[] = [
  { id: "basics", label: "The basics", line: "Light, frame, distance" },
  { id: "phone", label: "Phone craft", line: "The buttons you already have" },
  { id: "creative", label: "Make it yours", line: "Color, people, a light edit" },
  { id: "go", label: "Go shoot", line: "Ten minutes, then out the door" },
];

export const PAGES: BookPage[] = [
  {
    id: "cover",
    kind: "cover",
    title: "You Can Shoot This",
    body: "A how-to picture book for the camera in your pocket.",
    image: "/book/cover.jpg",
    alt: "A woman photographs a sunlit bakery window from the sidewalk, phone raised in both hands.",
  },
  {
    id: "contents",
    kind: "toc",
    title: "What’s inside",
    body: "Twenty short pages. Big pictures. One job per spread. Swipe, tap the arrows, or open any chapter from here.",
  },
  {
    id: "camera",
    kind: "photo",
    chapter: "basics",
    kicker: "Start here",
    title: "You already have a camera",
    body: "Not a toy. Not a compromise. Two hands, a clean lens, and a decision about light will beat a fancy body you left at home.",
    image: "/book/hands.jpg",
    alt: "Two hands holding a smartphone horizontally at chest height, ready to take a photo.",
    caption: "Hold it with two hands. Phone at chest height. You’re already more stable.",
  },
  {
    id: "light",
    kind: "compare",
    chapter: "basics",
    kicker: "The only rule that matters",
    title: "Light is the whole game",
    body: "Cameras don’t make photos. Light does. Same person, two rooms. One has a window. One has a ceiling bulb. You can see which one is kinder.",
    left: {
      image: "/book/window-light.jpg",
      alt: "A woman sitting by a large window, face softly lit by daylight, a leafy plant beside her.",
      label: "Window",
      caption: "Sit them by the glass. The light wraps. Skin looks like skin.",
    },
    right: {
      image: "/book/bad-light.jpg",
      alt: "A woman in a kitchen under overhead indoor light, holding a mug.",
      label: "Overhead",
      caption: "Ceiling light is hard and yellow. Fine for a snapshot. Weak for a portrait.",
    },
  },
  {
    id: "good-light",
    kind: "photo",
    chapter: "basics",
    kicker: "Where to stand",
    title: "Find the good light",
    body: "Face people toward a window. Shoot in open shade. Put the sun behind you so faces aren’t squinting. Cloudy days are a giant softbox — use them.",
    image: "/book/window-light.jpg",
    alt: "Soft window light on a woman’s face, with a plant in the foreground.",
    caption: "One window. One plant. No extra gear.",
  },
  {
    id: "exposure",
    kind: "play",
    chapter: "basics",
    kicker: "Bright or dark on purpose",
    title: "Slide the little sun",
    body: "Tap the screen, then drag the sun icon. Brighter isn’t always better. Expose for the thing you care about — a face, a pastry, a sky — and let the rest fall.",
    image: "/book/window-light.jpg",
    alt: "Window-lit portrait used as an exposure playground.",
  },
  {
    id: "thirds",
    kind: "photo",
    chapter: "basics",
    kicker: "Composition",
    title: "Put the subject off-center",
    body: "Turn on the grid. Place a person, a horizon, or a pair of eyes on a line — not in the dead middle. The frame gets calmer. The photo gets stronger.",
    image: "/book/thirds.jpg",
    alt: "A cyclist on a coastal road, placed on the right third of the frame, with sea and cliffs to the left.",
    caption: "The rider lives on the right third. The sea gets the rest of the frame.",
    overlay: "thirds",
  },
  {
    id: "lines",
    kind: "photo",
    chapter: "basics",
    kicker: "Composition",
    title: "Let lines do the walking",
    body: "Roads, rails, walls, shadows. They pull the eye. Stand where a line points at your subject, then wait a beat.",
    image: "/book/leading-lines.jpg",
    alt: "A cobblestone alley with building edges drawing the eye to a person walking in the distance.",
    caption: "The street is a funnel. You just stand at the wide end.",
    overlay: "lines",
  },
  {
    id: "frame",
    kind: "photo",
    chapter: "basics",
    kicker: "Composition",
    title: "Make a frame inside the frame",
    body: "Doorways, windows, arches, even a gap between two shoulders. Framing tells the viewer where to look — and makes a busy street feel intentional.",
    image: "/book/framing.jpg",
    alt: "A person at a cafe table, seen through a dark stone archway, with a sunlit plaza beyond.",
    caption: "The arch is a ready-made picture frame. Walk until it fits.",
  },
  {
    id: "closer",
    kind: "photo",
    chapter: "basics",
    kicker: "Distance",
    title: "Get closer. Then closer again.",
    body: "Fill the frame. Cut the clutter. If you can’t crop with your feet, you’re still too far away. Details beat wide, timid shots every time.",
    image: "/book/closer.jpg",
    alt: "Extreme close-up of a yellow blossom with raindrops on green leaves.",
    caption: "Rain on a lemon blossom. Nothing else in the shot.",
  },
  {
    id: "hold",
    kind: "photo",
    chapter: "phone",
    kicker: "The physical bit",
    title: "Hold still, then tap",
    body: "Two hands. Elbows in. Tap the face, the flower, the sign. Press and hold to lock focus and exposure. If it moves — a kid, a dog, a busker — hold burst.",
    image: "/book/street.jpg",
    alt: "A street musician playing guitar on a sunny sidewalk, in sharp focus.",
    caption: "Tap the musician. Let the street stay a little messy.",
    overlay: "focus",
  },
  {
    id: "portrait",
    kind: "photo",
    chapter: "phone",
    kicker: "Depth",
    title: "Soft backgrounds, the honest way",
    body: "Portrait mode is a suggestion, not a requirement. Stand closer, put the subject far from the wall, and the blur happens for free. If the phone edges hair badly, turn it off.",
    image: "/book/window-light.jpg",
    alt: "A window-lit portrait with a softly receding interior behind the subject.",
    caption: "Distance between person and background does more than a fake blur.",
  },
  {
    id: "tricks",
    kind: "tips",
    chapter: "phone",
    kicker: "Hidden in plain sight",
    title: "The buttons you already own",
    body: "You don’t need a new app. You need the ones sitting in Settings → Camera.",
    image: "/book/hands.jpg",
    alt: "Hands holding a phone, ready to shoot.",
    tips: [
      {
        title: "Wipe the lens",
        text: "Your pocket is an oil slick. One cloth, every time you shoot.",
      },
      {
        title: "Turn the grid on",
        text: "Thirds become obvious. Horizons stop tilting.",
      },
      {
        title: "Don’t pinch-zoom",
        text: "Walk closer. Digital zoom is a crop that costs you sharpness.",
      },
      {
        title: "Lock AE / AF",
        text: "Press and hold the square. Exposure stops jumping when you reframe.",
      },
      {
        title: "Use burst",
        text: "Hold the shutter for anything that moves. Keep the one sharp frame.",
      },
      {
        title: "Trust Night mode",
        text: "When the phone offers it, hold still and let it. Brace on a wall.",
      },
    ],
  },
  {
    id: "golden",
    kind: "photo",
    chapter: "creative",
    kicker: "Free filter",
    title: "Golden hour is a free filter",
    body: "The hour after sunrise and before sunset makes everything look expensive. Long shadows. Warm color. Go outside then, even if it’s just the corner store.",
    image: "/book/thirds.jpg",
    alt: "A cyclist on a sunlit coastal road in late-afternoon light.",
    caption: "This light shows up every day, twice. You just have to be outside.",
  },
  {
    id: "color",
    kind: "photo",
    chapter: "creative",
    kicker: "Make it pop",
    title: "One color against a quiet background",
    body: "Yellow on green. Red on gray. A blue door on a beige wall. Walk until the color is the subject — then get close enough that nothing else argues with it.",
    image: "/book/closer.jpg",
    alt: "A bright yellow blossom against deep green leaves.",
    caption: "The yellow is the photo. The leaves are the rest.",
  },
  {
    id: "street",
    kind: "photo",
    chapter: "creative",
    kicker: "People",
    title: "People, if they’ll let you",
    body: "Ask. Wait. Shoot the in-between. Street photos are about timing, not sneaking. Be kind, then be ready — and tap the person, not the background.",
    image: "/book/street.jpg",
    alt: "A smiling street musician in a striped shirt playing guitar in bright daylight.",
    caption: "Candid doesn’t mean invisible. It means present.",
  },
  {
    id: "edit",
    kind: "play",
    chapter: "creative",
    kicker: "After the shot",
    title: "Edit like a grown-up",
    body: "Crop. Straighten. A little contrast. Warm it if it feels cold. Stop before it looks like a filter pack. The photo should still be the photo.",
    image: "/book/framing.jpg",
    alt: "Cafe scene through an arch, used to show a light edit.",
  },
  {
    id: "traps",
    kind: "tips",
    chapter: "creative",
    kicker: "Skip these",
    title: "The usual traps",
    body: "Most ‘my phone takes bad photos’ problems are one of these. Fix the habit, not the hardware.",
    tips: [
      {
        title: "Dirty glass",
        text: "Haze, flare, and ‘soft’ shots are often just fingerprints.",
      },
      {
        title: "Shooting from standing height",
        text: "Kneel. Climb a step. Food from above. Kids at eye level.",
      },
      {
        title: "Noon, from the front",
        text: "Overhead sun carves raccoon eyes. Turn, wait, or find shade.",
      },
      {
        title: "HDR on everything",
        text: "Great for a bright window. Weird on skin and night lights.",
      },
      {
        title: "The 50-shot spray",
        text: "Make one decision, then shoot three. Review. Adjust. Repeat.",
      },
      {
        title: "Filters first",
        text: "Get the crop and the light right. Color is the last 5%.",
      },
    ],
  },
  {
    id: "practice",
    kind: "practice",
    chapter: "go",
    kicker: "Do this today",
    title: "A ten-minute practice",
    body: "One window. One object. Ten frames. Change only one thing each time. You will like frame eight more than frame one.",
    steps: [
      { title: "1. The obvious shot", text: "Stand where you always stand. Take it. That’s your control." },
      { title: "2. Move your feet", text: "Three steps closer. Then three to the side." },
      { title: "3. Change the height", text: "One at waist height. One at the floor." },
      { title: "4. Chase the light", text: "Turn the object toward the window. Then away." },
      { title: "5. Fill the frame", text: "So close you only see texture." },
      { title: "6. Keep one", text: "Delete the rest. Living with one good photo teaches faster than keeping twenty." },
    ],
  },
  {
    id: "end",
    kind: "end",
    chapter: "go",
    title: "Now go shoot something",
    body: "The next interesting photo is probably between the couch and the corner store. Make twenty frames before dinner. Keep one.",
    image: "/book/cover.jpg",
    alt: "A woman on a sunlit sidewalk photographing a bakery window.",
    caption: "You can shoot this. So shoot it.",
  },
];

export const LAST_PAGE_INDEX = PAGES.length - 1;

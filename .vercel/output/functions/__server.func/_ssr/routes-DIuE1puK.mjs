import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as SunMedium, c as List, d as Focus, f as Droplets, g as Aperture, h as ChevronLeft, i as Timer, l as Hand, m as ChevronRight, n as X, o as Sparkles, p as Contrast, s as MoveUp, t as ZoomIn, u as Grid3x3 } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DIuE1puK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Photo({ src, alt, caption, className, imgClassName, imgStyle, aspect = "photo", children }) {
	const aspectClass = aspect === "wide" ? "aspect-wide" : aspect === "compact" ? "h-36" : aspect === "auto" ? "" : "aspect-photo";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: cn("min-w-0", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("relative max-h-80 overflow-hidden bg-soft shadow-photo", aspectClass),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt,
				className: cn("size-full object-cover outline outline-1 -outline-offset-1 outline-ink/10", imgClassName),
				style: imgStyle,
				draggable: false
			}), children]
		}), caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "mt-2 text-caption text-muted text-pretty",
			children: caption
		}) : null]
	});
}
function ThirdsOverlay() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none absolute inset-0",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-y-0 left-1/3 w-px bg-cream/90 mix-blend-overlay" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-y-0 left-1/3 w-px bg-ink/40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-y-0 left-2/3 w-px bg-cream/90 mix-blend-overlay" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-y-0 left-2/3 w-px bg-ink/40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-1/3 h-px bg-cream/90 mix-blend-overlay" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-1/3 h-px bg-ink/40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-2/3 h-px bg-cream/90 mix-blend-overlay" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-2/3 h-px bg-ink/40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-[62%] left-[66%] size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold shadow-mark" })
		]
	});
}
function LinesOverlay() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className: "pointer-events-none absolute inset-0 size-full",
		viewBox: "0 0 100 100",
		preserveAspectRatio: "none",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M8 92 L48 38",
				fill: "none",
				stroke: "currentColor",
				className: "text-cream/80",
				strokeWidth: "1.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M92 92 L52 38",
				fill: "none",
				stroke: "currentColor",
				className: "text-cream/80",
				strokeWidth: "1.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "50",
				cy: "36",
				r: "1.6",
				className: "fill-gold"
			})
		]
	});
}
function FocusOverlay() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none absolute inset-0",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[42%] left-[48%] size-[28%] -translate-x-1/2 -translate-y-1/2 rounded-sm border-2 border-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "absolute top-[58%] left-[48%] -translate-x-1/2 rounded-full bg-ink/70 px-2.5 py-1 text-micro font-medium tracking-wide text-cream",
			children: "Tap to focus"
		})]
	});
}
function ExposurePlay({ src, alt }) {
	const [ev, setEv] = (0, import_react.useState)(0);
	const brightness = 1 + ev * .45;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
		src,
		alt,
		aspect: "photo",
		imgStyle: { filter: `brightness(${brightness})` },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute top-3 right-3 rounded-full bg-ink/70 px-2.5 py-1 text-micro font-medium tabular-nums text-cream",
			children: [ev > 0 ? `+${ev.toFixed(1)}` : ev.toFixed(1), " EV"]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "mt-4 flex flex-col gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-kicker text-muted",
				children: "Drag to match a face — or a sky"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "range",
				min: -1,
				max: 1,
				step: .1,
				value: ev,
				onChange: (e) => setEv(Number(e.target.value)),
				className: "ev-slider"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex justify-between text-caption text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Darker" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Brighter" })]
			})
		]
	})] });
}
function EditPlay({ src, alt }) {
	const [amount, setAmount] = (0, import_react.useState)(.55);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative max-h-80 overflow-hidden bg-soft shadow-photo aspect-photo",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt,
				className: "size-full object-cover outline outline-1 -outline-offset-1 outline-ink/10",
				draggable: false
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt: "",
				"aria-hidden": "true",
				className: "absolute inset-0 size-full object-cover",
				style: {
					clipPath: `inset(0 0 0 ${amount * 100}%)`,
					filter: "contrast(1.14) saturate(1.1) sepia(0.12) brightness(1.04)"
				},
				draggable: false
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-y-0 w-0.5 bg-cream",
				style: { left: `${amount * 100}%` },
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute top-3 left-3 rounded-full bg-ink/70 px-2.5 py-1 text-micro font-medium uppercase tracking-wider text-cream",
				children: "Straight"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute top-3 right-3 rounded-full bg-ink/70 px-2.5 py-1 text-micro font-medium uppercase tracking-wider text-cream",
				children: "A little edit"
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "mt-4 flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-kicker text-muted",
			children: "Pull to compare. Stop before it shouts."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "range",
			min: 0,
			max: 1,
			step: .01,
			value: amount,
			onChange: (e) => setAmount(Number(e.target.value)),
			className: "ev-slider"
		})]
	})] });
}
function CloserPair({ src, alt }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-2 gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex aspect-photo items-center justify-center bg-soft p-7 shadow-photo",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt: "",
				className: "w-5/12 outline outline-1 -outline-offset-1 outline-ink/10",
				draggable: false
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "mt-2 text-caption text-muted",
			children: "Too far"
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "aspect-photo overflow-hidden bg-soft shadow-photo",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt,
				className: "size-full object-cover outline outline-1 -outline-offset-1 outline-ink/10",
				draggable: false
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "mt-2 text-caption text-muted",
			children: "Fill the frame"
		})] })]
	});
}
function CompareToggle({ left, right }) {
	const [side, setSide] = (0, import_react.useState)("left");
	const current = side === "left" ? left : right;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
			src: current.image,
			alt: current.alt
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-x-2 bottom-2 z-10 grid grid-cols-2 gap-1 rounded-full bg-ink/70 p-1",
			role: "tablist",
			"aria-label": "Compare lighting",
			children: ["left", "right"].map((key) => {
				const item = key === "left" ? left : right;
				const active = side === key;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					role: "tab",
					"aria-selected": active,
					onClick: () => setSide(key),
					className: cn("h-10 rounded-full text-sm font-medium transition-colors duration-150", active ? "bg-cream text-ink" : "text-cream/80"),
					children: item.label
				}, key);
			})
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-2 text-caption text-muted text-pretty",
		children: current.caption
	})] });
}
var CHAPTERS = [
	{
		id: "basics",
		label: "The basics",
		line: "Light, frame, distance"
	},
	{
		id: "phone",
		label: "Phone craft",
		line: "The buttons you already have"
	},
	{
		id: "creative",
		label: "Make it yours",
		line: "Color, people, a light edit"
	},
	{
		id: "go",
		label: "Go shoot",
		line: "Ten minutes, then out the door"
	}
];
var PAGES = [
	{
		id: "cover",
		kind: "cover",
		title: "You Can Shoot This",
		body: "A how-to picture book for the camera in your pocket.",
		image: "/book/cover.jpg",
		alt: "A woman photographs a sunlit bakery window from the sidewalk, phone raised in both hands."
	},
	{
		id: "contents",
		kind: "toc",
		title: "What’s inside",
		body: "Twenty short pages. Big pictures. One job per spread. Swipe, tap the arrows, or open any chapter from here."
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
		caption: "Hold it with two hands. Phone at chest height. You’re already more stable."
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
			caption: "Sit them by the glass. The light wraps. Skin looks like skin."
		},
		right: {
			image: "/book/bad-light.jpg",
			alt: "A woman in a kitchen under overhead indoor light, holding a mug.",
			label: "Overhead",
			caption: "Ceiling light is hard and yellow. Fine for a snapshot. Weak for a portrait."
		}
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
		caption: "One window. One plant. No extra gear."
	},
	{
		id: "exposure",
		kind: "play",
		chapter: "basics",
		kicker: "Bright or dark on purpose",
		title: "Slide the little sun",
		body: "Tap the screen, then drag the sun icon. Brighter isn’t always better. Expose for the thing you care about — a face, a pastry, a sky — and let the rest fall.",
		image: "/book/window-light.jpg",
		alt: "Window-lit portrait used as an exposure playground."
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
		overlay: "thirds"
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
		overlay: "lines"
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
		caption: "The arch is a ready-made picture frame. Walk until it fits."
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
		caption: "Rain on a lemon blossom. Nothing else in the shot."
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
		overlay: "focus"
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
		caption: "Distance between person and background does more than a fake blur."
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
				text: "Your pocket is an oil slick. One cloth, every time you shoot."
			},
			{
				title: "Turn the grid on",
				text: "Thirds become obvious. Horizons stop tilting."
			},
			{
				title: "Don’t pinch-zoom",
				text: "Walk closer. Digital zoom is a crop that costs you sharpness."
			},
			{
				title: "Lock AE / AF",
				text: "Press and hold the square. Exposure stops jumping when you reframe."
			},
			{
				title: "Use burst",
				text: "Hold the shutter for anything that moves. Keep the one sharp frame."
			},
			{
				title: "Trust Night mode",
				text: "When the phone offers it, hold still and let it. Brace on a wall."
			}
		]
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
		caption: "This light shows up every day, twice. You just have to be outside."
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
		caption: "The yellow is the photo. The leaves are the rest."
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
		caption: "Candid doesn’t mean invisible. It means present."
	},
	{
		id: "edit",
		kind: "play",
		chapter: "creative",
		kicker: "After the shot",
		title: "Edit like a grown-up",
		body: "Crop. Straighten. A little contrast. Warm it if it feels cold. Stop before it looks like a filter pack. The photo should still be the photo.",
		image: "/book/framing.jpg",
		alt: "Cafe scene through an arch, used to show a light edit."
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
				text: "Haze, flare, and ‘soft’ shots are often just fingerprints."
			},
			{
				title: "Shooting from standing height",
				text: "Kneel. Climb a step. Food from above. Kids at eye level."
			},
			{
				title: "Noon, from the front",
				text: "Overhead sun carves raccoon eyes. Turn, wait, or find shade."
			},
			{
				title: "HDR on everything",
				text: "Great for a bright window. Weird on skin and night lights."
			},
			{
				title: "The 50-shot spray",
				text: "Make one decision, then shoot three. Review. Adjust. Repeat."
			},
			{
				title: "Filters first",
				text: "Get the crop and the light right. Color is the last 5%."
			}
		]
	},
	{
		id: "practice",
		kind: "practice",
		chapter: "go",
		kicker: "Do this today",
		title: "A ten-minute practice",
		body: "One window. One object. Ten frames. Change only one thing each time. You will like frame eight more than frame one.",
		steps: [
			{
				title: "1. The obvious shot",
				text: "Stand where you always stand. Take it. That’s your control."
			},
			{
				title: "2. Move your feet",
				text: "Three steps closer. Then three to the side."
			},
			{
				title: "3. Change the height",
				text: "One at waist height. One at the floor."
			},
			{
				title: "4. Chase the light",
				text: "Turn the object toward the window. Then away."
			},
			{
				title: "5. Fill the frame",
				text: "So close you only see texture."
			},
			{
				title: "6. Keep one",
				text: "Delete the rest. Living with one good photo teaches faster than keeping twenty."
			}
		]
	},
	{
		id: "end",
		kind: "end",
		chapter: "go",
		title: "Now go shoot something",
		body: "The next interesting photo is probably between the couch and the corner store. Make twenty frames before dinner. Keep one.",
		image: "/book/cover.jpg",
		alt: "A woman on a sunlit sidewalk photographing a bakery window.",
		caption: "You can shoot this. So shoot it."
	}
];
var LAST_PAGE_INDEX = PAGES.length - 1;
var TIP_ICONS = [
	Droplets,
	Grid3x3,
	ZoomIn,
	Focus,
	Timer,
	SunMedium
];
var TRAP_ICONS = [
	Droplets,
	MoveUp,
	SunMedium,
	Contrast,
	Aperture,
	Sparkles
];
function ChapterMark({ id }) {
	const chapter = CHAPTERS.find((c) => c.id === id);
	if (!chapter) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-kicker text-gold",
		children: chapter.label
	});
}
function Heading({ kicker, title, chapter }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mb-3",
		children: [kicker ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-kicker text-gold",
			children: kicker
		}) : chapter ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterMark, { id: chapter }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-title text-ink",
			children: title
		})]
	});
}
function Body({ children }) {
	if (!children) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mb-4 text-body text-ink/90 text-pretty",
		children
	});
}
function Overlay({ kind }) {
	if (kind === "thirds") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThirdsOverlay, {});
	if (kind === "lines") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinesOverlay, {});
	if (kind === "focus") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusOverlay, {});
	return null;
}
function PageView({ page, onJump, resumeFrom }) {
	if (page.kind === "cover") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-full flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative min-h-72 flex-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: page.image,
				alt: page.alt ?? "",
				className: "absolute inset-0 size-full object-cover object-top",
				draggable: false
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-6 pb-5 pt-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-kicker text-signal",
					children: "Picture book · 20 pages"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-display text-ink text-balance",
					children: page.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-sm text-body text-ink/85 text-pretty",
					children: page.body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => onJump(1),
						className: "inline-flex h-12 items-center rounded-full bg-signal px-5 text-sm font-semibold text-cream transition-transform duration-150 ease-out active:scale-[0.96]",
						children: "Open the book"
					}), resumeFrom && resumeFrom > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onJump(resumeFrom),
						className: "inline-flex h-12 items-center rounded-full bg-cream px-5 text-sm font-semibold text-ink shadow-border transition-transform duration-150 ease-out active:scale-[0.96]",
						children: ["Continue · ", String(resumeFrom + 1).padStart(2, "0")]
					}) : null]
				})
			]
		})]
	});
	if (page.kind === "toc") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-6 pb-8 pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, { title: page.title }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, { children: page.body }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "flex flex-col gap-6",
				children: CHAPTERS.map((chapter) => {
					const entries = PAGES.map((p, index) => ({
						p,
						index
					})).filter(({ p }) => p.chapter === chapter.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-kicker text-gold",
							children: chapter.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 font-display text-lg text-ink",
							children: chapter.line
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex flex-col",
							children: entries.map(({ p, index }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => onJump(index),
								className: "flex min-h-11 w-full items-baseline justify-between gap-3 border-b border-ink/8 py-2 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-ink text-pretty",
									children: p.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-sm tabular-nums text-signal",
									children: String(index + 1).padStart(2, "0")
								})]
							}) }, p.id))
						})
					] }, chapter.id);
				})
			})
		]
	});
	if (page.kind === "compare" && page.left && page.right) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "px-6 pb-8 pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
				kicker: page.kicker,
				title: page.title,
				chapter: page.chapter
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, { children: page.body }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompareToggle, {
				left: page.left,
				right: page.right
			})
		]
	});
	if (page.kind === "play" && page.image) {
		const isEdit = page.id === "edit";
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "px-6 pb-8 pt-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
					kicker: page.kicker,
					title: page.title,
					chapter: page.chapter
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, { children: page.body }),
				isEdit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditPlay, {
					src: page.image,
					alt: page.alt ?? ""
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExposurePlay, {
					src: page.image,
					alt: page.alt ?? ""
				})
			]
		});
	}
	if (page.kind === "tips" && page.tips) {
		const icons = page.id === "traps" ? TRAP_ICONS : TIP_ICONS;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "px-6 pb-8 pt-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
					kicker: page.kicker,
					title: page.title,
					chapter: page.chapter
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, { children: page.body }),
				page.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
					src: page.image,
					alt: page.alt ?? "",
					aspect: "compact",
					className: "mb-4",
					imgClassName: "object-top"
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col gap-3",
					children: page.tips.map((tip, i) => {
						const Icon = icons[i] ?? Hand;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 rounded-2xl bg-cream p-3 shadow-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-soft text-signal",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-5",
									strokeWidth: 1.75
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium text-ink",
								children: tip.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted text-pretty",
								children: tip.text
							})] })]
						}, tip.title);
					})
				})
			]
		});
	}
	if (page.kind === "practice" && page.steps) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "px-6 pb-8 pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
				kicker: page.kicker,
				title: page.title,
				chapter: page.chapter
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, { children: page.body }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "flex flex-col gap-3",
				children: page.steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-2xl bg-cream p-4 shadow-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg text-ink",
						children: step.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted text-pretty",
						children: step.text
					})]
				}, step.title))
			})
		]
	});
	if (page.kind === "end") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex min-h-full flex-col px-6 pb-8 pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
				title: page.title,
				chapter: page.chapter
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, { children: page.body }),
			page.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
				src: page.image,
				alt: page.alt ?? "",
				caption: page.caption
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 font-display text-xl text-ink text-balance",
				children: "Twenty frames. One keeper. That’s the whole practice."
			})
		]
	});
	const wide = page.image?.endsWith("thirds.jpg") || page.image?.endsWith("hands.jpg");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "px-6 pb-8 pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
				kicker: page.kicker,
				title: page.title,
				chapter: page.chapter
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, { children: page.body }),
			page.id === "closer" && page.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloserPair, {
					src: page.image,
					alt: page.alt ?? ""
				}), page.caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-caption text-muted text-pretty",
					children: page.caption
				}) : null]
			}) : page.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
				src: page.image,
				alt: page.alt ?? "",
				caption: page.caption,
				aspect: wide ? "wide" : "photo",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlay, { kind: page.overlay })
			}) : null
		]
	});
}
function TocSheet({ open, current, onJump, onClose }) {
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-30 flex flex-col bg-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between px-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-xl text-ink",
				children: "Contents"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onClose,
				className: "flex size-11 items-center justify-center rounded-full text-ink",
				"aria-label": "Close contents",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
					className: "size-5",
					strokeWidth: 1.75
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1 overflow-y-auto px-6 pb-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageView, {
				page: PAGES[1],
				onJump
			})
		})]
	});
}
var STORAGE_KEY = "you-can-shoot-this:page";
function clampPage(n) {
	return Math.max(0, Math.min(LAST_PAGE_INDEX, n));
}
function readSavedPage() {
	if (typeof window === "undefined") return 0;
	const raw = window.localStorage.getItem(STORAGE_KEY);
	const n = raw ? Number.parseInt(raw, 10) : 0;
	return Number.isFinite(n) ? clampPage(n) : 0;
}
function BookReader() {
	const [page, setPage] = (0, import_react.useState)(0);
	const [saved, setSaved] = (0, import_react.useState)(0);
	const [toc, setToc] = (0, import_react.useState)(false);
	const [dir, setDir] = (0, import_react.useState)(1);
	const touch = (0, import_react.useRef)(null);
	const scroller = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		setSaved(readSavedPage());
	}, []);
	const go = (0, import_react.useCallback)((next, direction) => {
		const clamped = clampPage(next);
		setDir(direction);
		setPage(clamped);
		setSaved(clamped);
		setToc(false);
		window.localStorage.setItem(STORAGE_KEY, String(clamped));
		scroller.current?.scrollTo({ top: 0 });
	}, []);
	const next = (0, import_react.useCallback)(() => go(page + 1, 1), [go, page]);
	const prev = (0, import_react.useCallback)(() => go(page - 1, -1), [go, page]);
	const jump = (0, import_react.useCallback)((index) => go(index, index >= page ? 1 : -1), [go, page]);
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			if (e.key === "ArrowRight" || e.key === "PageDown") {
				e.preventDefault();
				go(page + 1, 1);
			} else if (e.key === "ArrowLeft" || e.key === "PageUp") {
				e.preventDefault();
				go(page - 1, -1);
			} else if (e.key === "Home") {
				e.preventDefault();
				go(0, -1);
			} else if (e.key === "End") {
				e.preventDefault();
				go(LAST_PAGE_INDEX, 1);
			} else if (e.key === "Escape") setToc(false);
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [go, page]);
	const current = PAGES[page];
	const isCover = current.kind === "cover";
	const progress = (page + 1) / PAGES.length * 100;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-dvh bg-desk",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto flex h-dvh w-full max-w-md flex-col overflow-hidden bg-paper shadow-page",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-x-0 top-0 z-20 h-0.5 bg-soft",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full bg-signal transition-[width] duration-200 ease-out",
						style: { width: `${progress}%` }
					})
				}),
				!isCover ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "relative z-10 grid grid-cols-3 items-center px-2 pt-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setToc(true),
							className: "flex h-11 w-fit items-center gap-1.5 rounded-full px-3 text-ink",
							"aria-label": "Open contents",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
								className: "size-5",
								strokeWidth: 1.75
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium",
								children: "Index"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "justify-self-center font-display text-sm tabular-nums text-signal",
							"aria-live": "polite",
							children: [String(page + 1).padStart(2, "0"), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted",
								children: [" / ", String(PAGES.length).padStart(2, "0")]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "aria-hidden": "true" })
					]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: scroller,
					className: "relative min-h-0 flex-1 overflow-y-auto overscroll-contain",
					onTouchStart: (e) => {
						const t = e.changedTouches[0];
						touch.current = {
							x: t.clientX,
							y: t.clientY
						};
					},
					onTouchEnd: (e) => {
						if (!touch.current) return;
						if (e.target.closest("input, button, a")) {
							touch.current = null;
							return;
						}
						const t = e.changedTouches[0];
						const dx = t.clientX - touch.current.x;
						const dy = t.clientY - touch.current.y;
						touch.current = null;
						if (Math.abs(dx) < 56 || Math.abs(dx) < Math.abs(dy) * 1.2) return;
						if (dx < 0) next();
						else prev();
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("min-h-full", dir === 1 ? "page-in-next" : "page-in-prev"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageView, {
							page: current,
							onJump: jump,
							resumeFrom: saved
						})
					}, current.id)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "relative z-10 flex items-center justify-between gap-3 border-t border-ink/8 bg-paper px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: prev,
						disabled: page === 0,
						className: "flex h-12 min-w-12 items-center justify-center rounded-full pl-3 pr-3.5 text-ink disabled:text-muted/40",
						"aria-label": "Previous page",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
							className: "size-5",
							strokeWidth: 1.75
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium",
							children: "Back"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: next,
						disabled: page === LAST_PAGE_INDEX,
						className: "flex h-12 min-w-12 items-center justify-center rounded-full bg-signal pl-4 pr-3.5 text-cream disabled:bg-soft disabled:text-muted/50",
						"aria-label": "Next page",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-semibold",
							children: page === LAST_PAGE_INDEX ? "Done" : "Next"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
							className: "size-5",
							strokeWidth: 1.75
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TocSheet, {
					open: toc,
					current: page,
					onJump: jump,
					onClose: () => setToc(false)
				})
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookReader, {});
}
//#endregion
export { Home as component };

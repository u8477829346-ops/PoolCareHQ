import {
  Droplets,
  FlaskConical,
  Wrench,
  AlertTriangle,
  Waves,
  CalendarClock,
  BarChart3,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const SITE_NAME = 'PoolCareHQ'

export type Category = {
  slug: string
  title: string
  description: string
  icon: LucideIcon
  articleCount: number
  image: string
  accent: string
}

export const categories: Category[] = [
  {
    slug: 'mantenimiento-y-limpieza',
    title: 'Maintenance & Cleaning',
    description:
      'Cleaning routines, filtration, brushing, and manual and automatic pool vacuums.',
    icon: Droplets,
    articleCount: 8,
    image: '/images/mantenimiento.png',
    accent: 'oklch(0.58 0.13 220)',
  },
  {
    slug: 'quimica-del-agua',
    title: 'Water Chemistry',
    description:
      'pH, chlorine, algaecides, flocculants, salt, and water color and odor problems.',
    icon: FlaskConical,
    articleCount: 10,
    image: '/images/quimica-agua.png',
    accent: 'oklch(0.7 0.12 190)',
  },
  {
    slug: 'equipos-y-accesorios',
    title: 'Equipment & Accessories',
    description:
      'Pumps, filters, salt chlorinators, heaters, robots, covers, and lighting.',
    icon: Wrench,
    articleCount: 12,
    image: '/images/equipos.png',
    accent: 'oklch(0.45 0.1 240)',
  },
  {
    slug: 'problemas-piscina',
    title: 'Problems & Solutions',
    description:
      'Green water, cloudy water, leaks, pump noises, and stubborn algae.',
    icon: AlertTriangle,
    articleCount: 10,
    image: '/images/agua-verde.png',
    accent: 'oklch(0.65 0.15 30)',
  },
  {
    slug: 'tipos-de-piscina',
    title: 'Types of Pools',
    description:
      'Above-ground, in-ground, prefabricated fiberglass, natural, kiddie pools, and spas.',
    icon: Waves,
    articleCount: 8,
    image: '/images/tipos-piscina.png',
    accent: 'oklch(0.6 0.13 200)',
  },
  {
    slug: 'puesta-en-marcha-invernaje',
    title: 'Opening & Winterizing',
    description:
      'Season opening, active or passive winterizing, and winter protection.',
    icon: CalendarClock,
    articleCount: 7,
    image: '/images/invernaje.png',
    accent: 'oklch(0.55 0.1 250)',
  },
  {
    slug: 'comparativas',
    title: 'Comparisons & Buying Guides',
    description:
      '"Best X of the year" roundups, brand comparisons, and real pricing guides.',
    icon: BarChart3,
    articleCount: 5,
    image: '/images/comparativas.png',
    accent: 'oklch(0.82 0.14 90)',
  },
]

export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'tip'; text: string }

export type Article = {
  slug: string
  title: string
  excerpt: string
  category: string
  categorySlug: string
  type: string
  image?: string
  readingTime: number
  content: ContentBlock[]
}

// Default per-category image, used as the fallback image for each article.
const CAT_IMAGE: Record<string, string> = {
  'mantenimiento-y-limpieza': '/images/mantenimiento.png',
  'quimica-del-agua': '/images/quimica-agua.png',
  'equipos-y-accesorios': '/images/equipos.png',
  'problemas-piscina': '/images/agua-verde.png',
  'tipos-de-piscina': '/images/tipos-piscina.png',
  'puesta-en-marcha-invernaje': '/images/invernaje.png',
  comparativas: '/images/comparativas.png',
}

const CAT_TITLE: Record<string, string> = {
  'mantenimiento-y-limpieza': 'Maintenance & Cleaning',
  'quimica-del-agua': 'Water Chemistry',
  'equipos-y-accesorios': 'Equipment & Accessories',
  'problemas-piscina': 'Problems & Solutions',
  'tipos-de-piscina': 'Types of Pools',
  'puesta-en-marcha-invernaje': 'Opening & Winterizing',
  comparativas: 'Comparisons & Buying Guides',
}

// Compact article definition before filling in category/image.
type RawArticle = {
  slug: string
  title: string
  excerpt: string
  categorySlug: string
  type: string
  image?: string
  readingTime: number
  content: ContentBlock[]
}

const raw: RawArticle[] = [
  // ─── MAINTENANCE & CLEANING (8) ───
  {
    slug: 'rutina-semanal-mantenimiento-piscina',
    title: 'Weekly pool maintenance routine, step by step',
    excerpt: 'A simple checklist to keep your water perfect every week.',
    categorySlug: 'mantenimiento-y-limpieza',
    type: 'Guide',
    image: '/images/mantenimiento.png',
    readingTime: 7,
    content: [
      { type: 'p', text: 'Keeping your pool in perfect condition doesn\u2019t take much time if you follow a consistent routine. With 15-20 minutes spread across the week, you\u2019ll avoid most green or cloudy water problems.' },
      { type: 'h2', text: 'Weekly checklist' },
      { type: 'list', items: ['Skim leaves and debris with a surface net every 1-2 days.', 'Empty the skimmer and pump baskets.', 'Brush the walls, floor, and waterline.', 'Measure and adjust pH (7.2-7.4) and chlorine (1-2 ppm) twice a week.', 'Run the pool vacuum and check the filter pressure.'] },
      { type: 'tip', text: 'Take your readings before swimming, once the water has been still for a few hours, when the values are more reliable.' },
    ],
  },
  {
    slug: 'como-limpiar-fondo-piscina-limpiafondos',
    title: 'How to clean the pool floor with a manual vacuum',
    excerpt: 'The right technique to vacuum the floor without stirring up dirt.',
    categorySlug: 'mantenimiento-y-limpieza',
    type: 'Guide',
    readingTime: 6,
    content: [
      { type: 'p', text: 'Vacuuming the floor is the task that cleans the most. If you rush it, you\u2019ll stir up dirt and cloud the water, so it\u2019s best to go slowly with the filter well prepared.' },
      { type: 'h2', text: 'Step by step' },
      { type: 'list', items: ['Connect the manual vacuum head to the hose and bleed the air out underwater.', 'Plug the hose into the skimmer or the vacuum port.', 'Move the head slowly in a straight line, without crossing areas you\u2019ve already cleaned.', 'When you\u2019re done, clean the filter if the pressure has risen.'] },
      { type: 'tip', text: 'If the floor has a lot of fine sediment, use the "waste" setting on the valve so you don\u2019t clog the filter.' },
    ],
  },
  {
    slug: 'cepillado-paredes-linea-flotacion',
    title: 'Brushing walls and the waterline',
    excerpt: 'Why brushing prevents algae and stuck-on stains.',
    categorySlug: 'mantenimiento-y-limpieza',
    type: 'Informational',
    readingTime: 5,
    content: [
      { type: 'p', text: 'Brushing loosens biofilm and early-stage algae before they grip onto surfaces. It\u2019s a job that takes a couple of minutes and saves you from shock treatments.' },
      { type: 'h2', text: 'How to do it right' },
      { type: 'list', items: ['Always brush toward the drain or suction area.', 'Pay close attention to corners, steps, and shaded areas.', 'Scrub the waterline with a cleaner made for sunscreen residue.', 'Do it at least once a week during summer.'] },
    ],
  },
  {
    slug: 'limpiar-filtro-arena-piscina',
    title: 'How to clean a sand filter (backwashing)',
    excerpt: 'Backwashing step by step to restore flow.',
    categorySlug: 'mantenimiento-y-limpieza',
    type: 'Guide',
    readingTime: 6,
    content: [
      { type: 'p', text: 'A sand filter traps dirt until it becomes saturated and pressure rises. Backwashing reverses the flow to flush that dirt out through the waste line.' },
      { type: 'h2', text: 'Backwashing process' },
      { type: 'list', items: ['Turn off the pump before moving the multiport valve.', 'Set the valve to "backwash" and run it for 1-2 minutes until the water runs clear.', 'Turn off, switch to "rinse" for 20-30 seconds, then back to "filter".', 'Repeat whenever the pressure rises 0.3-0.5 bar above its normal value.'] },
      { type: 'tip', text: 'Never turn the multiport valve while the pump is running \u2014 you can damage the internal gasket.' },
    ],
  },
  {
    slug: 'cuantas-horas-depuradora-dia',
    title: 'How many hours a day should the pump run',
    excerpt: 'The temperature rule for calculating filtration hours.',
    categorySlug: 'mantenimiento-y-limpieza',
    type: 'Informational',
    readingTime: 5,
    content: [
      { type: 'p', text: 'Insufficient filtration is the hidden cause of many water problems. The pump needs to turn over the pool\u2019s entire volume several times a day.' },
      { type: 'h2', text: 'The practical rule' },
      { type: 'list', items: ['Divide the water temperature by 2 to get the approximate daily hours.', 'At 30 \u00b0C (86 \u00b0F), around 15 hours a day.', 'Spread filtration across the hottest and busiest swimming hours.', 'In winter, with active winterizing, a few hours are enough.'] },
    ],
  },
  {
    slug: 'como-limpiar-skimmer-cestillos',
    title: 'How to clean the skimmer and baskets',
    excerpt: 'Keep the flow going by cleaning the pre-filters often.',
    categorySlug: 'mantenimiento-y-limpieza',
    type: 'Informational',
    readingTime: 4,
    content: [
      { type: 'p', text: 'The skimmer and pump baskets are the first barrier against leaves and insects. If they fill up, the pump loses flow and works harder than it should.' },
      { type: 'h2', text: 'Quick routine' },
      { type: 'list', items: ['Empty the skimmer basket every 1-2 days during leaf season.', 'Turn off the pump before opening its pre-filter basket.', 'Rinse the baskets and check they\u2019re not cracked.', 'Replace cracked baskets so they don\u2019t damage the pump.'] },
    ],
  },
  {
    slug: 'eliminar-cal-linea-flotacion',
    title: 'How to remove limescale from the waterline',
    excerpt: 'Remove the white scale ring without damaging the surface.',
    categorySlug: 'mantenimiento-y-limpieza',
    type: 'Guide',
    readingTime: 5,
    content: [
      { type: 'p', text: 'The white ring on the waterline is limescale precipitated by high hardness or high pH. It\u2019s removed with specific products and by adjusting the water chemistry.' },
      { type: 'h2', text: 'What to do' },
      { type: 'list', items: ['Use a pool descaling cleaner and a non-abrasive sponge.', 'On liner pools, avoid metal scouring pads that scratch the surface.', 'Correct pH and hardness so it doesn\u2019t form again.', 'In severe cases, consider lowering the water level and treating the line dry.'] },
    ],
  },
  {
    slug: 'mantenimiento-piscina-vacaciones',
    title: 'How to leave your pool before going on vacation',
    excerpt: 'Avoid coming back to green water after two weeks away.',
    categorySlug: 'mantenimiento-y-limpieza',
    type: 'Guide',
    readingTime: 6,
    content: [
      { type: 'p', text: 'If you\u2019re leaving for several days, the challenge is making sure the pool holds up without daily upkeep. The key is leaving the water balanced, with long-lasting disinfection and scheduled filtration.' },
      { type: 'h2', text: 'Before you leave' },
      { type: 'list', items: ['Balance the pH and raise the chlorine slightly.', 'Add slow-dissolving chlorine (tablets) to the feeder.', 'Program the pump with a timer or smart controller.', 'Cover the pool to reduce dirt and evaporation.'] },
      { type: 'tip', text: 'A long-lasting algaecide is good extra insurance for trips longer than a week.' },
    ],
  },

  // ─── WATER CHEMISTRY (10) ───
  {
    slug: 'por-que-agua-verde-piscina',
    title: 'Why is my pool water green and how to fix it',
    excerpt: 'Algae are the number one cause of green water. We explain the shock treatment step by step to get clear water back in 48 hours.',
    categorySlug: 'quimica-del-agua',
    type: 'Guide',
    image: '/images/agua-verde.png',
    readingTime: 8,
    content: [
      { type: 'p', text: 'Green water is the most common problem in home pools and is almost always caused by algae growth. It shows up when chlorine levels drop, pH gets out of control, or the filter doesn\u2019t run enough hours. The good news is that, by following an organized shock treatment, you can get crystal-clear water back in 24 to 48 hours.' },
      { type: 'h2', text: 'Why the water turns green' },
      { type: 'p', text: 'Algae are microorganisms that arrive with wind, rain, and swimmers. When they find warm water, sun, and little disinfectant, they multiply very quickly.' },
      { type: 'list', items: ['Free chlorine level below 1 ppm.', 'High pH (above 7.6), which reduces chlorine\u2019s effectiveness.', 'Insufficient filtration: too few pump hours per day.', 'Intense heat and summer storms.'] },
      { type: 'h2', text: 'Shock treatment step by step' },
      { type: 'list', items: ['Adjust the pH to between 7.2 and 7.4 first; chlorine doesn\u2019t work well when pH is high.', 'Brush the walls and floor to loosen attached algae.', 'Apply a shock dose of chlorine based on your pool\u2019s volume.', 'Add a maintenance algaecide to reinforce the treatment.', 'Run the pump continuously for 24 hours.', 'Once the water goes from green to cloudy/gray, use flocculant and vacuum the residue the next day.'] },
      { type: 'tip', text: 'Use our chlorine calculator to find the exact shock dose for your pool\u2019s volume so you don\u2019t come up short.' },
    ],
  },
  {
    slug: 'cuanto-cloro-echar-piscina',
    title: 'How much chlorine to add to a pool based on its volume (table)',
    excerpt: 'A dosing table by water volume, plus a calculator to get the exact amount of chlorine right without overdoing it.',
    categorySlug: 'quimica-del-agua',
    type: 'Informational',
    image: '/images/quimica-agua.png',
    readingTime: 6,
    content: [
      { type: 'p', text: 'Getting the chlorine dose right is key: too little leaves the water unprotected, and too much irritates eyes and skin. The amount depends on your pool\u2019s volume and whether you\u2019re doing routine maintenance or a shock treatment.' },
      { type: 'h2', text: 'General dosing rule' },
      { type: 'list', items: ['Maintenance: keep free chlorine between 1 and 2 ppm.', 'Shock treatment: raise it temporarily to 5-10 ppm.', 'Always check the pH (7.2-7.4) so the chlorine works effectively.'] },
      { type: 'tip', text: 'Our chlorine calculator gives you the exact amount in grams based on your volume and treatment type.' },
      { type: 'h2', text: 'Application tips' },
      { type: 'p', text: 'Apply chlorine in the evening so the sun doesn\u2019t break it down, with the pump running. Never mix different chemical products directly in the same container.' },
    ],
  },
  {
    slug: 'ph-ideal-piscina-medir-ajustar',
    title: 'Ideal pool pH: how to measure and adjust it',
    excerpt: 'The right pH range and how to correct it when it spikes.',
    categorySlug: 'quimica-del-agua',
    type: 'Informational',
    readingTime: 5,
    content: [
      { type: 'p', text: 'pH measures how acidic or basic the water is. It\u2019s the most important parameter after chlorine, because it determines whether the disinfectant works and whether the water irritates skin or damages equipment.' },
      { type: 'h2', text: 'What is the ideal pH' },
      { type: 'p', text: 'The recommended range is between 7.2 and 7.6. Below that, the water is corrosive; above it, chlorine loses effectiveness and cloudiness and limescale buildup appear.' },
      { type: 'h2', text: 'How to adjust it' },
      { type: 'list', items: ['High pH: add pH reducer (pH-) following the dose on the label.', 'Low pH: add pH increaser (pH+).', 'Apply it with the pump running and re-test a few hours later.'] },
    ],
  },
  {
    slug: 'alcalinidad-total-piscina',
    title: 'Total alkalinity: the parameter that stabilizes pH',
    excerpt: 'What alkalinity is and why it keeps pH from swinging on its own.',
    categorySlug: 'quimica-del-agua',
    type: 'Informational',
    readingTime: 6,
    content: [
      { type: 'p', text: 'Total alkalinity acts as a pH buffer: when it\u2019s right, pH stays stable; when it\u2019s low, pH "bounces around" with every product you add.' },
      { type: 'h2', text: 'Values and adjustment' },
      { type: 'list', items: ['Ideal range: 80-120 ppm.', 'Low alkalinity: add an alkalinity increaser (sodium bicarbonate).', 'High alkalinity: correct it with pH reducer in several small doses.', 'Adjust alkalinity before pH.'] },
    ],
  },
  {
    slug: 'cloro-libre-combinado-total',
    title: 'Free, combined, and total chlorine: the differences',
    excerpt: 'Understand what you\u2019re actually measuring and why combined chlorine matters.',
    categorySlug: 'quimica-del-agua',
    type: 'Informational',
    readingTime: 5,
    content: [
      { type: 'p', text: 'Not all chlorine disinfects. Knowing the difference between free, combined, and total chlorine helps you tell when the water is truly protected and when it smells bad.' },
      { type: 'h2', text: 'The three values' },
      { type: 'list', items: ['Free chlorine: the part that actually disinfects (keep it at 1-2 ppm).', 'Combined chlorine (chloramines): the part that smells strong and irritates eyes.', 'Total chlorine: the sum of both.', 'If combined chlorine goes above 0.6 ppm, do a shock treatment.'] },
    ],
  },
  {
    slug: 'algicida-piscina-cuando-usar',
    title: 'Pool algaecide: when and how to use it',
    excerpt: 'Algaecide prevents algae, it doesn\u2019t replace chlorine. Learn to combine them.',
    categorySlug: 'quimica-del-agua',
    type: 'Buying Guide',
    readingTime: 5,
    content: [
      { type: 'p', text: 'Algaecide is a preventive product: it stops algae from sprouting, but it doesn\u2019t disinfect. It works as a booster for chlorine, especially in extreme heat or after storms.' },
      { type: 'h2', text: 'Recommended use' },
      { type: 'list', items: ['Add maintenance algaecide weekly during summer.', 'Reinforce after rain or heavy swimmer traffic.', 'Use it alongside chlorine, never in place of it.', 'Choose a foam-free algaecide if you have a waterfall or spa jets.'] },
    ],
  },
  {
    slug: 'floculante-clarificante-diferencias',
    title: 'Flocculant vs. clarifier: which one to use for cloudy water',
    excerpt: 'Two similar products with different uses for clearing up the water.',
    categorySlug: 'quimica-del-agua',
    type: 'Informational',
    readingTime: 5,
    content: [
      { type: 'p', text: 'When the water is cloudy but balanced, flocculant and clarifier both group together tiny particles so you can remove them. The difference is in the size of the "clump" they form.' },
      { type: 'h2', text: 'Which one to choose' },
      { type: 'list', items: ['Flocculant: forms large clumps that sink to the floor to be vacuumed to waste. Ideal for sand filters.', 'Clarifier: groups fine particles so the filter can trap them. Ideal for cartridge filters.', 'With flocculant, vacuum on waste rather than through the filter so you don\u2019t clog it.'] },
    ],
  },
  {
    slug: 'estabilizante-acido-cianurico',
    title: 'Stabilizer (cyanuric acid): protects chlorine from the sun',
    excerpt: 'Keeps the sun from breaking down chlorine, but use it in moderation.',
    categorySlug: 'quimica-del-agua',
    type: 'Informational',
    readingTime: 5,
    content: [
      { type: 'p', text: 'Stabilizer, or cyanuric acid, protects chlorine from UV radiation, reducing how quickly it\u2019s consumed. But in excess it "locks up" chlorine and reduces its effectiveness.' },
      { type: 'h2', text: 'The right level' },
      { type: 'list', items: ['Ideal range: 30-50 ppm.', 'Below 20, the sun burns off chlorine very quickly.', 'Above 80, chlorine loses its disinfecting power.', 'The only way to lower it is to replace part of the water.'] },
    ],
  },
  {
    slug: 'dureza-agua-piscina-cal',
    title: 'Water hardness: how to prevent limescale buildup',
    excerpt: 'Control calcium levels to protect equipment and surfaces.',
    categorySlug: 'quimica-del-agua',
    type: 'Informational',
    readingTime: 5,
    content: [
      { type: 'p', text: 'Hardness measures dissolved calcium. Too much calcium causes scale and buildup; too little makes the water aggressive toward materials.' },
      { type: 'h2', text: 'Reference values' },
      { type: 'list', items: ['Ideal range: 200-400 ppm calcium hardness.', 'High hardness: white staining and cloudy water appear. Use a scale sequestrant.', 'Low hardness: the water attacks gaskets and surfaces.', 'A good scale inhibitor prevents deposits inside a salt chlorinator.'] },
    ],
  },
  {
    slug: 'sal-piscina-cuanta-echar',
    title: 'How much salt to add to a pool with a salt chlorinator',
    excerpt: 'The correct salt concentration for the electrolytic cell to work.',
    categorySlug: 'quimica-del-agua',
    type: 'Informational',
    readingTime: 5,
    content: [
      { type: 'p', text: 'In a saltwater pool, the chlorinator needs a specific concentration to produce chlorine. Too little and it won\u2019t generate any; too much and it damages the cell.' },
      { type: 'h2', text: 'Concentration and dosing' },
      { type: 'list', items: ['Most units work between 4 and 6 grams per liter (check your manual).', 'For 4 g/L in 50,000 L (about 13,200 gallons), you\u2019ll need roughly 200 kg (440 lb) of salt.', 'Add the salt with the pump running and no swimmers in the water.', 'Top up salt only when you replace water; it isn\u2019t consumed by chlorinating.'] },
    ],
  },

  // ─── EQUIPMENT & ACCESSORIES (12) ───
  {
    slug: 'mejor-robot-limpiafondos-2026',
    title: 'Best robotic pool cleaner in 2026',
    excerpt: 'We compare the best-selling robots by pool type, surface, and budget so you can choose without mistakes.',
    categorySlug: 'equipos-y-accesorios',
    type: 'Comparison',
    image: '/images/robot-limpiafondos.png',
    readingTime: 12,
    content: [
      { type: 'p', text: 'An electric robotic pool cleaner is the investment that saves you the most time on pool maintenance. It works on its own, filters the water as it cleans, and doesn\u2019t depend on the main pump.' },
      { type: 'h2', text: 'What to consider before buying' },
      { type: 'list', items: ['Floor type: a liner is not the same as tile or fiberglass.', 'Surface area to cover: power and cable length based on the pool size.', 'Does it clean walls and the waterline, or just the floor?', 'Filter capacity and how easy it is to empty.', 'Weight and handle: you\u2019ll be lifting it out of the water daily.'] },
      { type: 'h2', text: 'Recommendation by profile' },
      { type: 'list', items: ['Above-ground or small pool: a basic floor-cleaning robot is enough.', 'Medium in-ground pool (up to 8x4 m / 26x13 ft): a floor-and-wall robot with a large filter.', 'Large pool or lots of trees nearby: a high-end robot with a dual filter and app control.'] },
      { type: 'tip', text: 'Check that the cable length reaches the farthest point from the outlet.' },
    ],
  },
  {
    slug: 'clorador-salino-ventajas-precio',
    title: 'Salt chlorinator: pros, cons, and price',
    excerpt: 'Is switching to salt worth it? We break down costs and upkeep.',
    categorySlug: 'equipos-y-accesorios',
    type: 'Product',
    readingTime: 9,
    content: [
      { type: 'p', text: 'A salt chlorinator produces chlorine from salt dissolved in the water, so you don\u2019t have to keep buying and handling tablets. It\u2019s one of the most popular upgrades for home pools.' },
      { type: 'h2', text: 'Pros' },
      { type: 'list', items: ['Softer water that\u2019s less irritating to eyes and skin.', 'Less handling of chemical products.', 'Medium-term savings on chlorine.'] },
      { type: 'h2', text: 'Cons' },
      { type: 'list', items: ['Upfront cost of the equipment.', 'The cell wears out and needs replacing every few years.', 'You still need to monitor pH and other levels.'] },
    ],
  },
  {
    slug: 'bomba-piscina-como-elegir',
    title: 'How to choose your pool pump (flow rate and power)',
    excerpt: 'Calculate the flow rate you need based on your pool\u2019s volume.',
    categorySlug: 'equipos-y-accesorios',
    type: 'Guide',
    readingTime: 7,
    content: [
      { type: 'p', text: 'The pump is the heart of the filtration system. An undersized one filters poorly, and an oversized one wastes power. The key is matching flow rate to water volume and the filter.' },
      { type: 'h2', text: 'How to size it' },
      { type: 'list', items: ['The pump should recirculate the entire volume every 4-6 hours.', 'The flow rate needs to be compatible with the filter\u2019s size.', 'Variable-speed pumps save a lot of electricity.', 'Respect the suction lift height and the pipe diameter.'] },
    ],
  },
  {
    slug: 'filtro-arena-vs-cartucho',
    title: 'Sand filter vs. cartridge filter: which is right for you',
    excerpt: 'The pros and cons of the two most common filter types.',
    categorySlug: 'equipos-y-accesorios',
    type: 'Comparison',
    readingTime: 6,
    content: [
      { type: 'p', text: 'Sand and cartridge are the most common filtration systems for home pools. Each one fits better depending on pool size and how much maintenance you want to do.' },
      { type: 'h2', text: 'Key differences' },
      { type: 'list', items: ['Sand: maintained by backwashing, ideal for medium and large pools.', 'Cartridge: filters finer, doesn\u2019t waste water on washes, better for small pools.', 'Cartridges need to be rinsed or replaced periodically.', 'Filter glass can replace sand and filters even better.'] },
    ],
  },
  {
    slug: 'calentador-piscina-tipos',
    title: 'Pool heaters: types and running costs',
    excerpt: 'Solar, electric, or heat pump: which one pays off.',
    categorySlug: 'equipos-y-accesorios',
    type: 'Informational',
    readingTime: 7,
    content: [
      { type: 'p', text: 'Extending your swimming season means heating the water. There are several technologies with very different purchase and running costs.' },
      { type: 'h2', text: 'Main options' },
      { type: 'list', items: ['Solar cover: cheap, raises the temperature a few degrees using the sun.', 'Solar panels: no running cost, depend on sunlight.', 'Heat pump: the most efficient way to maintain temperature.', 'Electric heating element: fast but very expensive to run.'] },
    ],
  },
  {
    slug: 'bomba-de-calor-piscina',
    title: 'Pool heat pump: how it works and when it pays off',
    excerpt: 'The most efficient way to keep the water warm.',
    categorySlug: 'equipos-y-accesorios',
    type: 'Product',
    readingTime: 8,
    content: [
      { type: 'p', text: 'A heat pump pulls heat from the air and transfers it to the water using very little electricity. It\u2019s the preferred option for reliably heating a pool.' },
      { type: 'h2', text: 'What to look for when buying' },
      { type: 'list', items: ['Look at the COP: the higher it is, the more efficient.', 'Size the power output based on volume and climate zone.', 'Inverter models are quieter and save energy.', 'Pair it with a cover so you don\u2019t lose heat overnight.'] },
    ],
  },
  {
    slug: 'cubierta-piscina-tipos',
    title: 'Types of pool covers and what each one is for',
    excerpt: 'Thermal blanket, slatted cover, automatic, or safety cover.',
    categorySlug: 'equipos-y-accesorios',
    type: 'Informational',
    readingTime: 6,
    content: [
      { type: 'p', text: 'A good cover reduces evaporation, dirt, and chemical use, and some also provide safety against falls. Choosing the right one depends on your priority.' },
      { type: 'h2', text: 'Main types' },
      { type: 'list', items: ['Solar bubble blanket: retains heat and reduces evaporation.', 'Slatted cover: protects against cold and dirt.', 'Safety cover: bears weight, protects kids and pets.', 'Automatic cover: maximum convenience, bigger investment.'] },
    ],
  },
  {
    slug: 'iluminacion-led-piscina',
    title: 'LED pool lighting: a basic guide',
    excerpt: 'Submersible LED lights: power use, colors, and safety.',
    categorySlug: 'equipos-y-accesorios',
    type: 'Informational',
    readingTime: 5,
    content: [
      { type: 'p', text: 'LED lights have replaced old halogen bulbs: they use much less power, last longer, and let you change colors. Installing them properly is mainly a matter of electrical safety.' },
      { type: 'h2', text: 'What to keep in mind' },
      { type: 'list', items: ['Always work with low voltage (12V) and a certified transformer.', 'Choose lights with a good waterproof rating (IP68).', 'RGB lights let you create colored moods; white lights give more brightness.', 'Leave the electrical installation to a professional.'] },
    ],
  },
  {
    slug: 'limpiafondos-manual-vs-automatico',
    title: 'Manual vs. automatic pool vacuum: which to choose',
    excerpt: 'Compare effort, price, and results for each system.',
    categorySlug: 'equipos-y-accesorios',
    type: 'Comparison',
    readingTime: 6,
    content: [
      { type: 'p', text: 'To vacuum the floor you can use a manual vacuum connected to the pump or a self-contained robot. The decision depends on how much time you want to spend and your budget.' },
      { type: 'h2', text: 'Quick comparison' },
      { type: 'list', items: ['Manual: cheap, but takes your time and depends on the pump.', 'Automatic suction cleaner: moves on its own using the pump\u2019s flow.', 'Electric robot: self-contained, filters separately, and cleans walls too.', 'For large pools, a robot pays off in the long run.'] },
    ],
  },
  {
    slug: 'skimmer-funcionamiento',
    title: 'What a skimmer is and how it works',
    excerpt: 'The component that collects debris from the surface.',
    categorySlug: 'equipos-y-accesorios',
    type: 'Informational',
    readingTime: 4,
    content: [
      { type: 'p', text: 'The skimmer draws in water from the surface, where leaves, insects, and oils build up, and sends it to the filter. It\u2019s key to keeping the water clean without effort.' },
      { type: 'h2', text: 'Proper operation' },
      { type: 'list', items: ['Keep the water level at the middle of the skimmer opening.', 'Empty the basket often.', 'The flap valve keeps debris from washing back in.', 'Large pools benefit from having more than one skimmer.'] },
    ],
  },
  {
    slug: 'dosificador-cloro-flotador',
    title: 'Floating chlorine dispenser: how to use it properly',
    excerpt: 'Dose chlorine tablets steadily and safely.',
    categorySlug: 'equipos-y-accesorios',
    type: 'Informational',
    readingTime: 4,
    content: [
      { type: 'p', text: 'A floating dispenser releases chlorine tablets gradually, keeping levels steadier than dumping them in all at once. Adjusting its vents is the key.' },
      { type: 'h2', text: 'Tips for use' },
      { type: 'list', items: ['Adjust the vents based on chlorine consumption.', 'Remove it while swimmers are in the water to avoid direct contact with the tablets.', 'Don\u2019t leave the floater resting against the liner \u2014 it can bleach it.', 'Combine it with frequent testing.'] },
    ],
  },
  {
    slug: 'medidor-digital-vs-tiras',
    title: 'Digital tester vs. test strips: which is more reliable',
    excerpt: 'We compare methods for measuring chlorine and pH at home.',
    categorySlug: 'equipos-y-accesorios',
    type: 'Comparison',
    readingTime: 5,
    content: [
      { type: 'p', text: 'Measuring the water accurately is the foundation of everything. There are test strips, liquid reagent kits, and digital photometers, each with different accuracy and price.' },
      { type: 'h2', text: 'Which method to choose' },
      { type: 'list', items: ['Strips: fast and cheap, useful for an approximate daily check.', 'Reagent kit: more accurate, a bit more effort.', 'Digital photometer: the highest accuracy, ideal if you want precision.', 'Store reagents and strips away from moisture.'] },
    ],
  },

  // ─── PROBLEMS & SOLUTIONS (10) ───
  {
    slug: 'agua-turbia-piscina-causas-solucion',
    title: 'Cloudy pool water: causes and solutions',
    excerpt: 'Diagnosing the 5 most common causes of milky water.',
    categorySlug: 'problemas-piscina',
    type: 'Informational',
    readingTime: 6,
    content: [
      { type: 'p', text: 'Cloudy or milky water doesn\u2019t always mean algae: it\u2019s usually caused by suspended particles the filter can\u2019t catch. Identifying the cause is the first step to fixing it.' },
      { type: 'h2', text: 'Most common causes' },
      { type: 'list', items: ['Insufficient filtration or a dirty filter.', 'pH and alkalinity imbalance.', 'Excess limescale (high hardness).', 'Fine particles passing through the filter sand.', 'Insufficient chlorination after heavy use.'] },
      { type: 'tip', text: 'If the water is still cloudy after balancing it, a flocculant will clump the particles together so you can remove them.' },
    ],
  },
  {
    slug: 'algas-negras-piscina-eliminar',
    title: 'Black algae in the pool: how to get rid of it',
    excerpt: 'The toughest kind: dark stains that cling to the floor.',
    categorySlug: 'problemas-piscina',
    type: 'Guide',
    readingTime: 7,
    content: [
      { type: 'p', text: 'Black algae forms dark, deeply attached spots with roots that dig into the surface. It\u2019s the hardest kind to remove and requires mechanical action in addition to chemicals.' },
      { type: 'h2', text: 'How to tackle it' },
      { type: 'list', items: ['Scrub the spots hard with a stiff brush (steel bristles only on concrete).', 'Apply a strong shock chlorination.', 'Use an algaecide made specifically for black algae.', 'Repeat brushing and chlorinating over several days.'] },
      { type: 'tip', text: 'Rub a chlorine tablet directly onto the most stubborn spots after brushing them.' },
    ],
  },
  {
    slug: 'agua-verde-transparente-pero-verde',
    title: 'Clear water with a green tint: why it happens',
    excerpt: 'When the water is clear but has a greenish hue.',
    categorySlug: 'problemas-piscina',
    type: 'Informational',
    readingTime: 5,
    content: [
      { type: 'p', text: 'If the water is clear but has a green tint, it usually isn\u2019t algae, but dissolved metals (mainly copper and iron) that oxidize when you chlorinate.' },
      { type: 'h2', text: 'Solution' },
      { type: 'list', items: ['Check whether your fill water contains metals.', 'Use a metal sequestrant.', 'Avoid raising the chlorine before sequestering the metals first.', 'Filter, and use flocculant if needed.'] },
    ],
  },
  {
    slug: 'manchas-fondo-piscina',
    title: 'Stains on the pool floor: types and causes',
    excerpt: 'Tell apart organic, metallic, and limescale stains.',
    categorySlug: 'problemas-piscina',
    type: 'Informational',
    readingTime: 6,
    content: [
      { type: 'p', text: 'Floor stains have different origins, and each one is treated differently. Checking the color and texture helps identify the cause.' },
      { type: 'h2', text: 'Types of stains' },
      { type: 'list', items: ['Organic green/brown: leaves and algae; remove with chlorine and brushing.', 'Reddish-brown metallic: iron or manganese; use a sequestrant.', 'Blue-green: copper; check pH and copper-containing products.', 'White: limescale from high hardness.'] },
    ],
  },
  {
    slug: 'fuga-agua-piscina-detectar',
    title: 'How to detect a water leak in your pool',
    excerpt: 'The bucket test to tell if you\u2019re losing water or it\u2019s just evaporation.',
    categorySlug: 'problemas-piscina',
    type: 'Guide',
    readingTime: 6,
    content: [
      { type: 'p', text: 'Losing a couple of inches of water in summer is usually normal evaporation. If it drops more than expected, there could be a leak. The bucket test will settle it.' },
      { type: 'h2', text: 'The bucket test' },
      { type: 'list', items: ['Fill a bucket with pool water and mark the level inside it.', 'Place it on a step, with the water level the same inside and outside.', 'Wait 24-48 hours without swimming.', 'If the pool drops more than the bucket, you have a leak.'] },
    ],
  },
  {
    slug: 'bomba-piscina-hace-ruido',
    title: 'Pool pump making noise: possible causes',
    excerpt: 'Noises, vibrations, and cavitation: what causes them.',
    categorySlug: 'problemas-piscina',
    type: 'Informational',
    readingTime: 5,
    content: [
      { type: 'p', text: 'A noisy pump is usually a warning sign of a suction problem or worn bearings. Catching it early prevents a bigger breakdown.' },
      { type: 'h2', text: 'Common causes' },
      { type: 'list', items: ['Cavitation from low water or blocked suction.', 'Clogged basket or skimmer.', 'Worn motor bearings (metallic whine).', 'A poorly anchored pump vibrating against its base.'] },
    ],
  },
  {
    slug: 'presion-alta-filtro',
    title: 'High pressure on the filter gauge: what to do',
    excerpt: 'A dirty filter drives up pressure and cuts flow.',
    categorySlug: 'problemas-piscina',
    type: 'Informational',
    readingTime: 4,
    content: [
      { type: 'p', text: 'When the pressure gauge reads higher than normal, it\u2019s almost always a sign that the filter is dirty and needs cleaning.' },
      { type: 'h2', text: 'What to check' },
      { type: 'list', items: ['Backwash the sand filter or clean the cartridge.', 'Empty the skimmer and pump baskets.', 'Check that the return valves are open.', 'If it persists, check the condition of the filter media.'] },
    ],
  },
  {
    slug: 'agua-huele-cloro-fuerte',
    title: 'Water smells strongly of chlorine: what it means',
    excerpt: 'Paradoxically, a strong smell points to a lack of free chlorine.',
    categorySlug: 'problemas-piscina',
    type: 'Informational',
    readingTime: 4,
    content: [
      { type: 'p', text: 'The classic strong "chlorine" smell isn\u2019t caused by the chlorine that disinfects, but by chloramines (combined chlorine). It\u2019s a sign you need more chlorine, not less.' },
      { type: 'h2', text: 'Solution' },
      { type: 'list', items: ['Measure combined chlorine: if it\u2019s above 0.6 ppm, take action.', 'Run a shock treatment to "burn off" the chloramines.', 'Ventilate and replace some of the water if it\u2019s an indoor pool.', 'Keep free chlorine stable so it doesn\u2019t come back.'] },
    ],
  },
  {
    slug: 'espuma-en-piscina',
    title: 'Foam in the pool: why it happens and how to remove it',
    excerpt: 'Product residue and organic matter create foam.',
    categorySlug: 'problemas-piscina',
    type: 'Informational',
    readingTime: 4,
    content: [
      { type: 'p', text: 'Persistent foam on the surface is usually caused by an excess of products (especially cheap algaecides) or a buildup of residue like sunscreen.' },
      { type: 'h2', text: 'How to remove it' },
      { type: 'list', items: ['Use an anti-foam product made for pools.', 'Check your algaecide dose and switch to a foam-free one.', 'Replace some of the water if there\u2019s a heavy buildup of products.', 'Have swimmers shower beforehand to cut down on lotions and oils.'] },
    ],
  },
  {
    slug: 'piscina-pierde-agua-evaporacion',
    title: 'Pool losing water: leak or evaporation?',
    excerpt: 'How much water loss is normal in summer, and when to worry.',
    categorySlug: 'problemas-piscina',
    type: 'Informational',
    readingTime: 5,
    content: [
      { type: 'p', text: 'In the middle of summer it\u2019s normal to lose water to evaporation, especially with heat, wind, and no cover. It helps to know what loss to expect before assuming there\u2019s a leak.' },
      { type: 'h2', text: 'Reference figures' },
      { type: 'list', items: ['Typical evaporation is around 0.2-0.4 in (0.5-1 cm) a day in summer.', 'Wind and lack of a cover increase the loss.', 'Use a thermal blanket to reduce it noticeably.', 'If you\u2019re losing several inches a day, run the bucket test.'] },
    ],
  },

  // ─── TYPES OF POOLS (8) ───
  {
    slug: 'mantenimiento-piscina-desmontable-guia',
    title: 'Above-ground pool maintenance: the complete guide',
    excerpt: 'Specific care for tube-frame and freestanding pools.',
    categorySlug: 'tipos-de-piscina',
    type: 'Guide',
    readingTime: 10,
    content: [
      { type: 'p', text: 'Above-ground pools need the same water care as an in-ground one, but with particularities related to their size, materials, and typically more modest pump.' },
      { type: 'h2', text: 'Maintenance essentials' },
      { type: 'list', items: ['Use a cover when it\u2019s not in use to reduce dirt.', 'Filter enough hours a day despite the pump\u2019s lower power.', 'Monitor pH and chlorine just like any other pool.', 'Protect the walls from sharp objects to avoid punctures.'] },
      { type: 'h2', text: 'At the end of the season' },
      { type: 'p', text: 'Drain, clean, and dry the pool thoroughly before folding it up and storing it somewhere dry. Good storage adds several years to its lifespan.' },
    ],
  },
  {
    slug: 'piscina-obra-hormigon-mantenimiento',
    title: 'In-ground concrete pools: maintenance and care',
    excerpt: 'The most durable option, but with a finish that needs attention.',
    categorySlug: 'tipos-de-piscina',
    type: 'Informational',
    readingTime: 7,
    content: [
      { type: 'p', text: 'An in-ground concrete pool is the most durable and customizable option, but its finish (tile, paint, or microcement) needs attention so it doesn\u2019t deteriorate.' },
      { type: 'h2', text: 'Key points' },
      { type: 'list', items: ['Watch the pH: aggressive water attacks the tile grout.', 'Brush frequently to prevent algae in grout lines and corners.', 'Check the condition of the finish every season.', 'Control hardness to avoid limescale on the walls.'] },
    ],
  },
  {
    slug: 'piscina-poliester-prefabricada',
    title: 'Prefabricated fiberglass pools: benefits and care',
    excerpt: 'Fast installation and a smooth surface that\u2019s easy to clean.',
    categorySlug: 'tipos-de-piscina',
    type: 'Informational',
    readingTime: 6,
    content: [
      { type: 'p', text: 'Prefabricated fiberglass pools are installed in just a few days and have a smooth surface that algae grip onto less easily. Their maintenance is simple.' },
      { type: 'h2', text: 'Basic care' },
      { type: 'list', items: ['Avoid abrasive products that scratch the gelcoat.', 'Control the pH to protect the surface layer.', 'The smooth surface makes it easier for a robot to work.', 'Watch the water level so you don\u2019t undermine the shell when draining.'] },
    ],
  },
  {
    slug: 'piscina-natural-ecologica',
    title: 'Natural or ecological pools: how they\u2019re maintained',
    excerpt: 'No chlorine, with plants that purify the water.',
    categorySlug: 'tipos-de-piscina',
    type: 'Informational',
    readingTime: 8,
    content: [
      { type: 'p', text: 'Natural pools replace chemicals with a biological filtration system using aquatic plants. Maintenance is different: you\u2019re caring for an ecosystem, not a chlorinated basin.' },
      { type: 'h2', text: 'Specific maintenance' },
      { type: 'list', items: ['Look after the regeneration zone with purifying plants.', 'Remove leaves and organic matter so you don\u2019t overload the system.', 'Focus on biological balance more than chemicals.', 'The recirculation pump needs to run continuously.'] },
    ],
  },
  {
    slug: 'piscina-infantil-cuidados',
    title: 'Kiddie pools: water hygiene and safety',
    excerpt: 'Water care for small children\u2019s pools.',
    categorySlug: 'tipos-de-piscina',
    type: 'Informational',
    readingTime: 5,
    content: [
      { type: 'p', text: 'Small-volume kiddie pools get dirty and warm up very quickly, which favors bacteria. Hygiene and safety come first.' },
      { type: 'h2', text: 'Recommendations' },
      { type: 'list', items: ['If it\u2019s very small, drain and refill it with clean water often.', 'On models with a pump, monitor chlorine and pH.', 'Never leave children unsupervised.', 'Drain or cover it when it\u2019s not in use.'] },
    ],
  },
  {
    slug: 'spa-jacuzzi-mantenimiento',
    title: 'Spa or hot tub maintenance: hot water without bacteria',
    excerpt: 'Hot water demands stricter chemical control.',
    categorySlug: 'tipos-de-piscina',
    type: 'Guide',
    readingTime: 7,
    content: [
      { type: 'p', text: 'In a spa the water is hot and moving \u2014 ideal conditions for bacteria. That\u2019s why disinfection needs to be checked more often than in a regular pool.' },
      { type: 'h2', text: 'Spa routine' },
      { type: 'list', items: ['Use bromine or chlorine formulated for hot water.', 'Test pH and disinfectant levels almost daily.', 'Clean or replace the cartridge frequently.', 'Replace the water completely every few months.'] },
    ],
  },
  {
    slug: 'piscina-liner-cuidados',
    title: 'Liner pools: how to care for the lining',
    excerpt: 'Prevent wrinkles, discoloration, and punctures in your liner.',
    categorySlug: 'tipos-de-piscina',
    type: 'Informational',
    readingTime: 6,
    content: [
      { type: 'p', text: 'A liner is a PVC sheet that lines many pools. It\u2019s affordable and watertight, but sensitive to extreme pH, undissolved chlorine, and sharp objects.' },
      { type: 'h2', text: 'Liner care' },
      { type: 'list', items: ['Don\u2019t drop chlorine tablets directly onto the liner.', 'Keep pH in range to avoid discoloration.', 'Use non-abrasive brushes and vacuum heads.', 'Repair small punctures early with the right patches.'] },
    ],
  },
  {
    slug: 'piscina-gresite-mantenimiento',
    title: 'Tiled pools: maintaining the grout',
    excerpt: 'The classic tiled finish and how to care for its grout lines.',
    categorySlug: 'tipos-de-piscina',
    type: 'Informational',
    readingTime: 6,
    content: [
      { type: 'p', text: 'Tile gives a beautiful, long-lasting finish, but its grout lines are the weak point: if the water is out of balance, they deteriorate and algae grip onto them.' },
      { type: 'h2', text: 'Maintenance' },
      { type: 'list', items: ['Keep pH and hardness in range to protect the grout.', 'Brush the grout lines regularly.', 'Check and repair loose grout to prevent leaks.', 'Avoid sudden pH drops, which attack the cement.'] },
    ],
  },

  // ─── OPENING & WINTERIZING (7) ───
  {
    slug: 'como-abrir-piscina-temporada-checklist',
    title: 'How to open your pool at the start of the season: a checklist',
    excerpt: 'Every step for starting up after winter.',
    categorySlug: 'puesta-en-marcha-invernaje',
    type: 'Guide',
    readingTime: 8,
    content: [
      { type: 'p', text: 'Opening the season right makes the difference between crystal-clear water from day one or weeks of fighting green water. Follow this checklist for a hassle-free start-up.' },
      { type: 'h2', text: 'Opening steps' },
      { type: 'list', items: ['Remove the winter cover and clean it before storing it.', 'Bring the water level back up to the middle of the skimmer.', 'Clean the filter and check the pump, gaskets, and valves.', 'Run the pump for 24-48 hours.', 'Balance the pH and run an initial shock chlorination.', 'Use flocculant and vacuum the residue before the first swim.'] },
    ],
  },
  {
    slug: 'invernaje-activo-piscina',
    title: 'Active winterizing: keeping the pool running through winter',
    excerpt: 'Leave the water ready without draining, with minimal filtration.',
    categorySlug: 'puesta-en-marcha-invernaje',
    type: 'Guide',
    readingTime: 7,
    content: [
      { type: 'p', text: 'Active winterizing keeps the pool full of water with minimal filtration through the winter. It\u2019s the recommended option in mild climates because it makes spring opening much easier.' },
      { type: 'h2', text: 'How to do it' },
      { type: 'list', items: ['Balance the water and add a winterizing product.', 'Reduce filtration hours to a daily minimum.', 'Program the pump to avoid freezing on cold nights.', 'Cover the pool to reduce dirt.'] },
    ],
  },
  {
    slug: 'invernaje-pasivo-piscina',
    title: 'Passive winterizing: shutting the pool down for the whole winter',
    excerpt: 'For cold climates: lower the level, drain the pipes, and cover it.',
    categorySlug: 'puesta-en-marcha-invernaje',
    type: 'Guide',
    readingTime: 8,
    content: [
      { type: 'p', text: 'Passive winterizing shuts the system down completely for the winter. It\u2019s used in cold climates where ice can damage pipes and equipment.' },
      { type: 'h2', text: 'Main steps' },
      { type: 'list', items: ['Balance the water and apply winterizer before shutting down.', 'Lower the level below the skimmers.', 'Drain and protect the pipes, pump, and filter from freezing.', 'Place freeze protectors (ice gizmos, floats) and cover the pool.'] },
      { type: 'tip', text: 'Don\u2019t fully drain an in-ground concrete or liner pool in winter \u2014 it can suffer structural damage.' },
    ],
  },
  {
    slug: 'productos-invernador-piscina',
    title: 'Winterizing product: what it\u2019s for and how to use it',
    excerpt: 'Prevents algae and scale during the months the pool is shut down.',
    categorySlug: 'puesta-en-marcha-invernaje',
    type: 'Informational',
    readingTime: 5,
    content: [
      { type: 'p', text: 'Winterizer is a product that prevents algae growth and limescale buildup while the pool is shut down, making the following start-up easier.' },
      { type: 'h2', text: 'Correct use' },
      { type: 'list', items: ['Apply it with the water balanced and the pump running.', 'Distribute the product throughout the pool.', 'Combine it with a good cover.', 'It doesn\u2019t replace cleaning the water beforehand.'] },
    ],
  },
  {
    slug: 'proteger-piscina-hielo',
    title: 'How to protect your pool from ice in winter',
    excerpt: 'Keep freezing from bursting pipes and skimmers.',
    categorySlug: 'puesta-en-marcha-invernaje',
    type: 'Guide',
    readingTime: 6,
    content: [
      { type: 'p', text: 'Ice is the pool\u2019s biggest enemy in winter: as water freezes it expands and can crack skimmers, pipes, and equipment. There are several ways to protect against it.' },
      { type: 'h2', text: 'Ice-prevention measures' },
      { type: 'list', items: ['Place freeze-protection floats that absorb the pressure of the ice.', 'Lower the level below the skimmers.', 'Drain the pipes or run the pump during hard freezes.', 'Protect the filtration equipment from extreme cold.'] },
    ],
  },
  {
    slug: 'cubrir-piscina-invierno',
    title: 'Covering your pool in winter: which cover to choose',
    excerpt: 'Reduce dirt and protect the water during the off-season.',
    categorySlug: 'puesta-en-marcha-invernaje',
    type: 'Informational',
    readingTime: 5,
    content: [
      { type: 'p', text: 'A good winter cover greatly reduces the dirt that gets into the pool and makes opening easier. Options range from inexpensive tarps to full safety covers.' },
      { type: 'h2', text: 'Options' },
      { type: 'list', items: ['Winter tarp: inexpensive, traps leaves and debris.', 'Slatted cover: more durable and offers some safety.', 'Safety cover: protects against falls.', 'Drain any rainwater that pools on top of the tarp.'] },
    ],
  },
  {
    slug: 'nivel-agua-invierno',
    title: 'What water level to leave in winter',
    excerpt: 'Neither fully drained nor fully full: the right level.',
    categorySlug: 'puesta-en-marcha-invernaje',
    type: 'Informational',
    readingTime: 4,
    content: [
      { type: 'p', text: 'A common mistake is draining the pool in winter. Water pressure is what supports the shell; leaving it empty can damage it. But the summer level isn\u2019t right either if there\u2019s a risk of ice.' },
      { type: 'h2', text: 'Recommended level' },
      { type: 'list', items: ['With active winterizing, keep the normal working level.', 'With passive winterizing, lower it below the skimmers.', 'Never fully drain an in-ground concrete or liner pool.', 'Watch the level after heavy rain.'] },
    ],
  },

  // ─── COMPARISONS & BUYING GUIDES (5) ───
  {
    slug: 'mejor-clorador-salino-2026',
    title: 'Best salt chlorinator in 2026: buying guide',
    excerpt: 'How to choose the right electrolytic cell based on your pool\u2019s volume.',
    categorySlug: 'comparativas',
    type: 'Comparison',
    readingTime: 9,
    content: [
      { type: 'p', text: 'A salt chlorinator is one of the most cost-effective upgrades for never dealing with tablets again. Choosing the right one depends mostly on your water volume and any extra features you need.' },
      { type: 'h2', text: 'What to check before buying' },
      { type: 'list', items: ['Chlorine output (g/h) that matches your pool\u2019s volume.', 'Built-in pH control, highly recommended.', 'Self-cleaning cell via polarity reversal.', 'How easy and how expensive it is to replace the cell.'] },
      { type: 'tip', text: 'Choose a unit with some margin: if your pool is right at the limit, go one size up.' },
    ],
  },
  {
    slug: 'mejor-bomba-calor-piscina-2026',
    title: 'Best pool heat pump in 2026',
    excerpt: 'We compare efficiency, noise, and power output by pool size.',
    categorySlug: 'comparativas',
    type: 'Comparison',
    readingTime: 10,
    content: [
      { type: 'p', text: 'A heat pump is the most efficient way to heat a pool. In this guide we look at what separates a good unit from one that falls short.' },
      { type: 'h2', text: 'Selection criteria' },
      { type: 'list', items: ['High COP for the best energy performance.', 'Inverter technology for less noise and lower consumption.', 'Power (kW) matched to volume and climate.', 'Materials that hold up well against the weather.'] },
    ],
  },
  {
    slug: 'mejor-limpiafondos-manual-2026',
    title: 'Best manual pool vacuum in 2026',
    excerpt: 'Affordable options for vacuuming the floor without a robot.',
    categorySlug: 'comparativas',
    type: 'Comparison',
    readingTime: 7,
    content: [
      { type: 'p', text: 'If you\u2019d rather not invest in a robot, a good manual vacuum connected to the pump cleans the floor effectively. We compare what to look for based on your pool.' },
      { type: 'h2', text: 'What to consider' },
      { type: 'list', items: ['A head suited to your floor type (liner, tile, concrete).', 'Wheels or brushes that won\u2019t scratch the surface.', 'Compatibility with your hose and suction port.', 'Weight and ease of handling with the pole.'] },
    ],
  },
  {
    slug: 'mejor-kit-analisis-agua-2026',
    title: 'Best water testing kit in 2026',
    excerpt: 'Strips, reagents, and photometers: which one is worth it for your level of control.',
    categorySlug: 'comparativas',
    type: 'Comparison',
    readingTime: 6,
    content: [
      { type: 'p', text: 'Measuring the water accurately prevents most problems. Depending on how demanding you want to be, there are options from affordable strips to highly precise digital photometers.' },
      { type: 'h2', text: 'Comparison by profile' },
      { type: 'list', items: ['Occasional use: multi-parameter test strips.', 'Regular monitoring: a liquid reagent kit.', 'Maximum precision: a digital photometer.', 'Make sure it measures at least free chlorine, pH, and alkalinity.'] },
    ],
  },
  {
    slug: 'mejor-cubierta-piscina-2026',
    title: 'Best pool cover in 2026',
    excerpt: 'Thermal, safety, or automatic: which one to choose.',
    categorySlug: 'comparativas',
    type: 'Comparison',
    readingTime: 8,
    content: [
      { type: 'p', text: 'The right cover saves on chemicals, heat, and cleaning, and some also add safety. Your choice depends on whether you prioritize savings, convenience, or protection.' },
      { type: 'h2', text: 'Based on your priority' },
      { type: 'list', items: ['Energy savings: a solar bubble blanket.', 'Child safety: a certified safety cover.', 'Convenience: a motorized automatic cover.', 'Winter: a durable tarp or slatted cover.'] },
    ],
  },
]

export const allArticles: Article[] = raw.map((a) => ({
  ...a,
  category: CAT_TITLE[a.categorySlug],
  image: a.image ?? CAT_IMAGE[a.categorySlug],
}))

const bySlug = (slug: string) => allArticles.find((a) => a.slug === slug)!

export const featuredArticles: Article[] = [
  'por-que-agua-verde-piscina',
  'mejor-robot-limpiafondos-2026',
  'cuanto-cloro-echar-piscina',
].map(bySlug)

export const latestArticles: Article[] = [
  'rutina-semanal-mantenimiento-piscina',
  'ph-ideal-piscina-medir-ajustar',
  'clorador-salino-ventajas-precio',
  'como-abrir-piscina-temporada-checklist',
  'agua-turbia-piscina-causas-solucion',
  'mantenimiento-piscina-desmontable-guia',
].map(bySlug)

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}

export function getArticleBySlug(slug: string): Article | undefined {
  return allArticles.find((a) => a.slug === slug)
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return allArticles.filter((a) => a.categorySlug === categorySlug)
}

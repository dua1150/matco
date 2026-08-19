export type ProjectCategory =
  | "interior"
  | "exterior"
  | "building-construction"
  | "carpentry"
  | "aluminium-upvc"
  | "steel-fabrication";

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  interior: "Interior",
  exterior: "Exterior",
  "building-construction": "Building Construction",
  carpentry: "Carpentry",
  "aluminium-upvc": "Aluminium & UPVC",
  "steel-fabrication": "Steel & Fabrication",
};

export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  id: string;
  slug: string;
  name: string;
  category: ProjectCategory[];
  location: string;
  description: string;
  servicesProvided: string[];
  completionDate?: string;
  coverImage: ProjectImage;
  images: ProjectImage[];
  featured: boolean;
};

// NOTE: location values are Omani city labels used for project presentation.
// These are not confirmed to be the exact real project locations unless
// separately verified by the client — treat as location labels, not
// verified addresses.

export const projects: Project[] = [
  {
    id: "prj-01",
    slug: "private-majlis",
    name: "Private Majlis — Custom Woodwork",
    category: ["interior", "carpentry"],
    location: "Muscat, Sultanate of Oman",
    description:
      "A private majlis featuring fully custom carved wood paneling, built-in cabinetry, and matching furniture — designed as a cohesive, traditionally-inspired seating hall.",
    servicesProvided: [
      "Interior Design",
      "Custom Carpentry",
      "Wood Carving & Finishing",
    ],
    coverImage: {
      src: "/images/projects/private-majlis/cover.jpg",
      alt: "Private majlis with carved wood paneling and custom cabinetry",
    },
    images: [
      {
        src: "/images/projects/private-majlis/cover.jpg",
        alt: "Private majlis seating hall with carved wood paneling",
      },
      {
        src: "/images/projects/private-majlis/2.jpg",
        alt: "Private majlis, alternate view showing wood cabinetry detail",
      },
    ],
    featured: true,
  },
  {
    id: "prj-02",
    slug: "entrance-doors",
    name: "Grand Entrance Doors",
    category: ["exterior", "carpentry"],
    location: "Sohar, Sultanate of Oman",
    description:
      "A custom-carved solid wood entrance door featuring a circular glass inlay pattern — designed as a statement piece for a residential entrance.",
    servicesProvided: ["Custom Carpentry", "Door Fabrication"],
    coverImage: {
      src: "/images/projects/entrance-doors/cover.jpg",
      alt: "Custom carved wood entrance door with circular glass inlay",
    },
    images: [
      {
        src: "/images/projects/entrance-doors/cover.jpg",
        alt: "Custom carved wood entrance door with circular glass inlay",
      },
    ],
    featured: true,
  },
  {
    id: "prj-03",
    slug: "al-manarah-office",
    name: "Al-Manarah Office Fit-Out",
    category: ["interior", "aluminium-upvc"],
    location: "Muscat, Sultanate of Oman",
    description:
      "A full glass and aluminium partition fit-out for Al-Manarah Engineering Consultancy — frosted glass office cubicles with branded signage, framed in slim aluminium sections.",
    servicesProvided: ["Aluminium & Glass Partitions", "Office Interior Fit-Out"],
    coverImage: {
      src: "/images/projects/al-manarah-office/cover.jpg",
      alt: "Glass and aluminium office partition corridor",
    },
    images: [
      {
        src: "/images/projects/al-manarah-office/cover.jpg",
        alt: "Glass and aluminium office partition corridor",
      },
      {
        src: "/images/services/aluminium-upvc.jpg",
        alt: "Close-up of branded glass office partition",
      },
    ],
    featured: true,
  },
  {
    id: "prj-04",
    slug: "modern-kitchen",
    name: "Modern Kitchen Interior",
    category: ["interior", "carpentry"],
    location: "Salalah, Sultanate of Oman",
    description:
      "A navy-and-white two-tone kitchen with marble-effect backsplash, brushed gold hardware, and custom cabinetry throughout.",
    servicesProvided: ["Custom Carpentry", "Interior Design"],
    coverImage: {
      src: "/images/projects/modern-kitchen/cover.jpg",
      alt: "Navy and white two-tone kitchen with gold hardware",
    },
    images: [
      {
        src: "/images/projects/modern-kitchen/cover.jpg",
        alt: "Navy and white two-tone kitchen with gold hardware",
      },
    ],
    featured: true,
  },
  {
    id: "prj-05",
    slug: "kitchen-cabinetry-collection",
    name: "Interior Design — Portfolio Collection",
    category: ["interior", "carpentry"],
    location: "Nizwa, Sultanate of Oman",
    description:
      "A collection of completed interior installations — kitchens, living spaces, and lounges — showcasing MATCO's range in custom cabinetry and interior finishing.",
    servicesProvided: ["Custom Carpentry", "Interior Design", "Kitchen Cabinetry"],
    coverImage: {
      src: "/images/projects/kitchen-cabinetry-collection/cover.jpg",
      alt: "Classic white kitchen cabinetry with black sink",
    },
    images: [
      {
        src: "/images/projects/kitchen-cabinetry-collection/cover.jpg",
        alt: "Classic white kitchen cabinetry with black sink",
      },
      {
        src: "/images/projects/kitchen-cabinetry-collection/2.jpg",
        alt: "White gloss kitchen cabinetry, installation in progress",
      },
      {
        src: "/images/projects/kitchen-cabinetry-collection/3.jpg",
        alt: "Cream-toned kitchen cabinetry with patterned backsplash",
      },
      {
        src: "/images/projects/kitchen-cabinetry-collection/4.jpg",
        alt: "Modern grey and wood-tone kitchen island cabinetry",
      },
      {
        src: "/images/projects/kitchen-cabinetry-collection/5.jpg",
        alt: "Luxury lounge interior with gold-lit wall paneling",
      },
      {
        src: "/images/projects/kitchen-cabinetry-collection/6.jpg",
        alt: "Cream-toned living room with wall-mounted television",
      },
      {
        src: "/images/projects/kitchen-cabinetry-collection/7.jpg",
        alt: "Modern black and white living room with fireplace",
      },
      {
        src: "/images/projects/kitchen-cabinetry-collection/8.jpg",
        alt: "Neutral-toned living room with statement chandelier",
      },
      {
        src: "/images/projects/kitchen-cabinetry-collection/9.jpg",
        alt: "Bright open-plan living and dining interior",
      },
    ],
    featured: false,
  },
  {
    id: "prj-06",
    slug: "custom-door-collection",
    name: "Custom Door Craftsmanship",
    category: ["exterior", "carpentry"],
    location: "Sur, Sultanate of Oman",
    description:
      "A showcase of custom-carved wooden doors, each designed with a distinct pattern — from woven lattice work to sculpted curved handles.",
    servicesProvided: ["Custom Carpentry", "Door Fabrication"],
    coverImage: {
      src: "/images/projects/custom-door-collection/cover.jpg",
      alt: "Carved wood door with curved metal handles",
    },
    images: [
      {
        src: "/images/projects/custom-door-collection/cover.jpg",
        alt: "Carved wood door with curved metal handles",
      },
      {
        src: "/images/projects/custom-door-collection/2.jpg",
        alt: "Wood double door with woven lattice pattern",
      },
      {
        src: "/images/projects/custom-door-collection/3.jpg",
        alt: "Single carved wood door with floral panel detail",
      },
    ],
    featured: false,
  },
  {
    id: "prj-07",
    slug: "steel-fabrication-works",
    name: "Steel Fabrication Works",
    category: ["steel-fabrication"],
    location: "Sohar, Sultanate of Oman",
    description:
      "Structural steel fabrication and custom ironwork — from welding and precision cutting to ornamental gates, railings, and staircases.",
    servicesProvided: ["Steel Fabrication", "Welding & Metalwork", "Custom Gates & Railings"],
    coverImage: {
      src: "/images/services/steel-fabrication.jpg",
      alt: "Welder cutting steel with angle grinder, sparks flying",
    },
    images: [
      {
        src: "/images/services/steel-fabrication.jpg",
        alt: "Welder cutting steel with angle grinder, sparks flying",
      },
      {
        src: "/images/projects/steel-fabrication-works/2.jpg",
        alt: "Two welders working on a steel structure",
      },
      {
        src: "/images/projects/steel-fabrication-works/3.jpg",
        alt: "Grinding steel structure, sparks flying",
      },
      {
        src: "/images/projects/steel-fabrication-works/4.jpg",
        alt: "Ornamental bronze scrollwork entrance gate",
      },
      {
        src: "/images/projects/steel-fabrication-works/5.jpg",
        alt: "Black wrought-iron staircase railing detail",
      },
      {
        src: "/images/projects/steel-fabrication-works/6.jpg",
        alt: "Ornate wrought-iron interior staircase railing",
      },
      {
        src: "/images/projects/steel-fabrication-works/7.jpg",
        alt: "Bronze custom gate with monogram detail",
      },
      {
        src: "/images/projects/steel-fabrication-works/8.jpg",
        alt: "Welder working with blue flame torch, sparks flying",
      },
    ],
    featured: false,
  },
  {
    id: "prj-08",
    slug: "construction-site-progress",
    name: "Construction Site Progress",
    category: ["building-construction"],
    location: "Muscat, Sultanate of Oman",
    description:
      "Progress documentation across multiple active building construction sites, showing structural steelwork, residential builds, and commercial developments underway.",
    servicesProvided: ["Building Construction", "Site Management"],
    coverImage: {
      src: "/images/services/building-construction.jpg",
      alt: "Construction site at night with crane and structural steelwork",
    },
    images: [
      {
        src: "/images/services/building-construction.jpg",
        alt: "Construction site at night with crane and structural steelwork",
      },
      {
        src: "/images/projects/construction-site-progress/2.jpg",
        alt: "Steel-framed high-rise building under construction with tower crane",
      },
      {
        src: "/images/projects/construction-site-progress/3.jpg",
        alt: "Steel warehouse structure under construction",
      },
      {
        src: "/images/projects/construction-site-progress/4.jpg",
        alt: "Glass high-rise tower under construction with crane",
      },
      {
        src: "/images/projects/construction-site-progress/5.jpg",
        alt: "Steel skyscraper frame under construction against the sky",
      },
      {
        src: "/images/projects/construction-site-progress/6.jpg",
        alt: "Modern residential villas under construction with workers on site",
      },
      {
        src: "/images/projects/construction-site-progress/7.jpg",
        alt: "Structural steel frame of a building under construction",
      },
      {
        src: "/images/projects/construction-site-progress/8.jpg",
        alt: "Commercial building construction site, aerial view",
      },
    ],
    featured: false,
  },
  {
    id: "prj-09",
    slug: "exterior-facade-collection",
    name: "Exterior & Facade Collection",
    category: ["exterior"],
    location: "Muscat, Sultanate of Oman",
    description:
      "A collection of exterior and facade work — modern architectural finishes, glass facades, and finished home exteriors reflecting MATCO's exterior design capabilities.",
    servicesProvided: ["Exterior Finishing", "Facade Design"],
    coverImage: {
      src: "/images/projects/exterior-facade-collection/1.jpg",
      alt: "Modern house exterior with glass and dark wood facade",
    },
    images: [
      {
        src: "/images/projects/exterior-facade-collection/1.jpg",
        alt: "Modern house exterior with glass and dark wood facade",
      },
      {
        src: "/images/projects/exterior-facade-collection/2.jpg",
        alt: "Contemporary black-toned house exterior with landscaped driveway",
      },
      {
        src: "/images/projects/exterior-facade-collection/3.jpg",
        alt: "Glass facade of a modern commercial building at dusk",
      },
    ],
    featured: false,
  },
  {
    id: "prj-10",
    slug: "aluminium-upvc-collection",
    name: "Aluminium & UPVC Collection",
    category: ["aluminium-upvc"],
    location: "Sohar, Sultanate of Oman",
    description:
      "A showcase of aluminium and UPVC installations — glass partitions, sliding doors, entrance systems, and window/door framing across residential and office projects.",
    servicesProvided: ["Aluminium & UPVC Installations", "Glass Door & Window Systems"],
    coverImage: {
      src: "/images/projects/aluminium-upvc-collection/1.jpg",
      alt: "Glass-walled office meeting room with black aluminium framing",
    },
    images: [
      {
        src: "/images/projects/aluminium-upvc-collection/1.jpg",
        alt: "Glass-walled office meeting room with black aluminium framing",
      },
      {
        src: "/images/projects/aluminium-upvc-collection/2.jpg",
        alt: "Modern glass entrance door with slim aluminium framing",
      },
      {
        src: "/images/projects/aluminium-upvc-collection/3.jpg",
        alt: "Glass entrance door with pendant lanterns",
      },
      {
        src: "/images/projects/aluminium-upvc-collection/4.jpg",
        alt: "Aluminium-framed glass sliding door opening to a living room",
      },
      {
        src: "/images/projects/aluminium-upvc-collection/5.jpg",
        alt: "White UPVC bifold door installation",
      },
    ],
    featured: false,
  },
];
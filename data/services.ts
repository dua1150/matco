export type ServiceSlug =
  | "interior-exterior"
  | "building-construction"
  | "carpentry"
  | "aluminium-upvc"
  | "steel-fabrication";

export type Service = {
  slug: ServiceSlug;
  name: string;
  description: string;
  capabilities: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "interior-exterior",
    name: "Interior & Exterior",
    description:
      "Elegant interior design and finishing paired with striking exterior solutions that bring every space to life.",
    capabilities: [
      "Interior design & finishing",
      "False ceiling & paint work",
      "Flooring & decorative detailing",
      "Exterior treatments & facades",
    ],
    image: "/images/services/interior-exterior.jpg",
  },
  {
    slug: "building-construction",
    name: "Building Construction",
    description:
      "Complete residential and commercial construction, managed end-to-end with structural precision.",
    capabilities: [
      "Residential construction",
      "Commercial construction",
      "Structural coordination",
      "End-to-end project execution",
    ],
    image: "/images/services/building-construction.jpg",
  },
  {
    slug: "carpentry",
    name: "Carpentry",
    description:
      "Custom woodwork — doors, wardrobes, kitchens, and hand-finished furniture crafted to last.",
    capabilities: [
      "Custom doors & wardrobes",
      "Kitchen cabinetry",
      "Bespoke furniture",
      "Hand-finished detailing & carving",
    ],
    image: "/images/services/carpentry.jpg",
  },
  {
    slug: "aluminium-upvc",
    name: "Aluminium & UPVC",
    description:
      "High-performance aluminium and UPVC windows, doors, and partition systems built for durability.",
    capabilities: [
      "Windows & doors",
      "Glass partition systems",
      "Aluminium framing",
      "UPVC installations",
    ],
    image: "/images/services/aluminium-upvc.jpg",
  },
  {
    slug: "steel-fabrication",
    name: "Steel & Fabrication",
    description:
      "Durable steel fabrication for gates, railings, structures, and custom metalwork.",
    capabilities: [
      "Custom gates & railings",
      "Structural steelwork",
      "Welding & metal finishing",
      "Bespoke fabrication",
    ],
    image: "/images/services/steel-fabrication.jpg",
  },
];
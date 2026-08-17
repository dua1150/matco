export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote:
      "MATCO delivered our project exactly how we imagined. Their workmanship and attention to detail were truly exceptional.",
    name: "Ahmed Al-Harthy",
    role: "Business Owner",
    rating: 5,
  },
  {
    id: "testimonial-2",
    quote:
      "Professional, reliable, and highly skilled team. Communication was clear throughout, and the project was completed on time.",
    name: "Khalid Al-Rashdi",
    role: "Home Owner",
    rating: 5,
  },
  {
    id: "testimonial-3",
    quote:
      "From planning to final execution, the entire experience was smooth and well-coordinated. Highly recommended for quality craftsmanship.",
    name: "Mohammed Al-Balushi",
    role: "Project Manager",
    rating: 5,
  },
];
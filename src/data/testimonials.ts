export interface Testimonial {
  name: string;
  role: string;
  location: string;
  text: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sofía Fernández",
    role: "Pastora",
    location: "Argentina",
    text: "A viagem à Terra Santa foi um sonho realizado. A Carmel Tour cuidou de cada detalhe, o que me permitiu desfrutar de cada momento sem preocupações. Voltei transformada.",
    avatar: "/images/testimonials/sofia.jpg",
  },
  {
    name: "Mariana López",
    role: "Líder de Grupo",
    location: "México",
    text: "Minha experiência em Israel foi inesquecível. Senti a presença de Deus em cada lugar que visitamos. Voltei com uma fé renovada e novas perspectivas espirituais.",
    avatar: "/images/testimonials/mariana.jpg",
  },
  {
    name: "Pedro Silva",
    role: "Pastor",
    location: "Brasil",
    text: "Turquia e Grécia foram muito mais do que destinos turísticos. Aprendi a ver as Escrituras de uma nova perspectiva e me conectei profundamente com minha comunidade.",
    avatar: "/images/testimonials/pedro.jpg",
  },
];

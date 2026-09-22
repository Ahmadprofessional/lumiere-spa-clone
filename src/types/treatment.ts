export interface Treatment {
  title: string;
  image: { src: string; alt: string };
  priceLines: string[];
  description: string;
  bookHref: string;
}

export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

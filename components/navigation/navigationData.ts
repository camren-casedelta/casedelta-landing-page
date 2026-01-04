export interface DropdownItem {
  title: string;
  description: string;
  href: string;
}

export interface DropdownSection {
  title?: string;
  items: DropdownItem[];
}

export interface NavItemData {
  id: string;
  label: string;
  href?: string;
  dropdown?: DropdownSection[];
}

export const navigationData: NavItemData[] = [
  {
    id: "platform",
    label: "Platform",
    dropdown: [
      {
        items: [
          {
            title: "Document Collection",
            description: "Automated client document requests and tracking",
            href: "#document-collection",
          },
          {
            title: "AI Verification",
            description: "Smart document validation before submission",
            href: "#ai-verification",
          },
          {
            title: "Client Portal",
            description: "Secure portal for client communications",
            href: "#client-portal",
          },
          {
            title: "Integrations",
            description: "Connect with your existing legal tools",
            href: "#integrations",
          }
        ],
      },
    ],
  },
  {
    id: "solutions",
    label: "Solutions",
    dropdown: [
      {
        items: [
          {
            title: "Personal Injury Firms",
            description: "Streamline case intake and documentation",
            href: "#personal-injury",
          },
          {
            title: "Corporate Law",
            description: "Manage complex corporate documentation",
            href: "#corporate-law",
          },
          {
            title: "Family Law",
            description: "Simplify sensitive client document collection",
            href: "#family-law",
          },
          {
            title: "Immigration Law",
            description: "Handle immigration paperwork efficiently",
            href: "#immigration-law",
          },
        ],
      },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    dropdown: [
      {
        items: [
          {
            title: "Blog",
            description: "Industry insights and product updates",
            href: "#blog",
          },
          {
            title: "Guides & Templates",
            description: "Free resources for legal professionals",
            href: "#guides",
          },
          {
            title: "Case Studies",
            description: "See how firms transform their workflows",
            href: "#case-studies",
          },
          {
            title: "Support Center",
            description: "Get help and find answers",
            href: "#support",
          },
        ],
      },
    ],
  },
  {
    id: "pricing",
    label: "Pricing",
    href: "#pricing",
  },
  {
    id: "about",
    label: "About",
    dropdown: [
      {
        items: [
          {
            title: "Our Story",
            description: "Learn about our mission and values",
            href: "#our-story",
          },
          {
            title: "Careers",
            description: "Join our team",
            href: "#careers",
          },
          {
            title: "Contact Us",
            description: "Get in touch with our team",
            href: "#contact",
          },
        ],
      },
    ],
  },
];

import { getImgPath } from "@/utils/image";

export const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Réferences", href: "#clients" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "/#blog" },
];

export const count = [
    {
        icon: getImgPath("/images/counter/star.svg"),
        value: "10+",
        description: "dizaines d'années d'experience",
    },
    {
        icon: getImgPath("/images/counter/admin.svg"),
        value: "24/7",
        description: "Service 24h/24 – 7j/7",
    },
    {
        icon: getImgPath("/images/counter/bag.svg"),
        value: "15",
        description: "projets accompagnés",
    },
];

export const Progress = [
    { title: 'Produits de marque', Progress: 99 },
    { title: 'Clients satisfaits', Progress: 90 },
    { title: 'Recherche et innovation', Progress: 75 }
];

export const Servicebox = [
    {
        icon: getImgPath('/images/services/ux-design-product_1.svg'),
        title: 'Photovoltaïque',
        description: 'Conception, installation et maintenance de systèmes photovoltaïques performants pour les particuliers, les entreprises et les sites industriels.',
 },
    {
        icon: getImgPath('/images/services/perfomance-optimization.svg'),
        title: 'Automatisme & Électricité Industrielle',
        description: 'Conception et intégration de solutions d’automatisation, programmation d’automates (PLC), supervision et installations électriques industrielles.',
  },
    {
        icon: getImgPath('/images/services/ux-design-product_2.svg'),
        title: 'Sécurité Électronique',
        description: 'Installation de systèmes de vidéosurveillance, contrôle d’accès, détection d’intrusion et solutions de sécurité intelligentes pour protéger vos infrastructures.',
 },
]

export const portfolioinfo = [
    {
        image: getImgPath('/images/portfolio/cozycasa.png'),
        alt: 'Portfolio',
        title: 'Cozycasa',
        slug: 'Cozycasa',
        info: 'Designation',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/mars.png'),
        alt: 'Portfolio',
        title: 'Mars',
        slug: 'Mars',
        info: 'Designation',
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/humans.png'),
        alt: 'Portfolio',
        title: 'Everyday Humans',
        slug: 'everyday-humans',
        info: 'Designation',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/roket-squred.png'),
        alt: 'Portfolio',
        title: 'Rocket Squared',
        slug: 'rocket-squared',
        info: 'Designation',
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/panda-logo.png'),
        alt: 'Portfolio',
        title: 'Panda Logo',
        slug: 'panda-logo',
        info: 'Designation',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/humans.png'),
        alt: 'Portfolio',
        title: 'Fusion Dynamics',
        slug: 'fusion-dynamics',
        info: 'Designation',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/cozycasa.png'),
        alt: 'Portfolio',
        title: 'InnovateX Ventures',
        slug: 'innovate-x-ventures',
        info: 'Designation',
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/mars.png'),
        alt: 'Portfolio',
        title: 'Nebula Holdings',
        slug: 'nebula-holdings',
        info: 'Designation',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/panda-logo.png'),
        alt: 'Portfolio',
        title: 'Summit Partners',
        slug: 'summit-partners',
        info: 'Designation',
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/roket-squred.png'),
        alt: 'Portfolio',
        title: 'Apex Strategies',
        slug: 'apex-strategies',
        info: 'Designation',
        Class: 'md:mt-0'
    },
    
]
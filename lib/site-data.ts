export const company = {
  name: "ID TITAND MBATACK SARL",
  shortName: "ID TitanD MBataCK",
  slogan: "L'ID du futur informatique.",
  email: "contact@idtitand.com",
  phone: "+237 6XX XXX XXX",
  address: "Douala, Cameroun",
};

export const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export const serviceOptions = [
  "Assistance, Maintenance et Dépannage",
  "Infrastructure et Réseaux",
  "Cybersécurité",
  "Développement et Transformation Digitale",
  "Conseil, Formation et Vente",
  "Autre",
];

export const contactInfo = {
  hours: "Lun – Ven : 8h00 – 18h00",
  responseTime: "Réponse sous 24 heures",
};

export const heroSlides = [
  {
    id: "hero",
    image:
      "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=2400",
    eyebrow: "Bienvenue chez ID TitanD",
    title: "L'ID du futur informatique.",
    description:
      "Nous accompagnons les entreprises et institutions dans la sécurisation, la modernisation et la transformation de leurs systèmes numériques.",
    cta: { label: "Découvrir nos services", href: "#services" },
    fadeColor: "#2E3192",
  },
  {
    id: "solutions",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2400&q=80",
    eyebrow: "Infrastructure & Cybersécurité",
    title: "Protégeons vos données, renforçons vos réseaux.",
    description:
      "De l'audit de sécurité au déploiement d'infrastructures résilientes, nous construisons des environnements IT fiables et conformes.",
    cta: { label: "Voir la cybersécurité", href: "#cybersecurite" },
    fadeColor: "#f8f9fa",
    light: true,
  },
  {
    id: "transformation",
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=2400",
    eyebrow: "Développement & Conseil",
    title: "Transformez votre vision en solutions concrètes.",
    description:
      "Applications sur mesure, formation des équipes et conseil stratégique pour accélérer votre transformation digitale.",
    cta: { label: "Rencontrer l'équipe", href: "/about#team" },
    fadeColor: "#2E3192",
  },
  {
    id: "support",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=80",
    eyebrow: "Assistance & Proximité",
    title: "Une équipe réactive, à vos côtés au quotidien.",
    description:
      "Dépannage, maintenance et support utilisateur pour garantir la continuité de vos activités à Douala et au-delà.",
    cta: { label: "Nous contacter", href: "/contact" },
    fadeColor: "#1D1D1B",
  },
];

/** @deprecated Use heroSlides for the header carousel */
export const heroSections = heroSlides.map((slide, index) => ({
  ...slide,
  size: (index === 0 ? "full" : "large") as "full" | "large" | "medium",
}));

export const mainServices = [
  {
    title: "Assistance, Maintenance et Dépannage",
    shortTitle: "Assistance & Dépannage",
    description:
      "Support technique réactif, maintenance préventive et résolution rapide des incidents.",
    featured: true,
    icon: "wrench",
    href: "#assistance",
    items: [
      "Helpdesk et support utilisateur",
      "Dépannage sur site et à distance",
      "Maintenance préventive",
    ],
  },
  {
    title: "Infrastructure et Réseaux",
    shortTitle: "Infrastructure & Réseaux",
    description:
      "Conception, déploiement et administration de réseaux et serveurs performants.",
    featured: false,
    icon: "network",
    href: "#infrastructure",
    items: [
      "Câblage et Wi-Fi professionnel",
      "Serveurs et virtualisation",
      "Interconnexion multi-sites",
    ],
  },
  {
    title: "Cybersécurité",
    shortTitle: "Cybersécurité",
    description:
      "Protection complète de vos données, systèmes et utilisateurs contre les menaces.",
    featured: false,
    icon: "shield",
    href: "#cybersecurite",
    items: [
      "Audits et tests d'intrusion",
      "Pare-feu et antivirus",
      "Plans de reprise d'activité",
    ],
  },
  {
    title: "Développement et Transformation Digitale",
    shortTitle: "Développement Digital",
    description:
      "Applications, sites web et automatisation pour moderniser vos processus métier.",
    featured: false,
    icon: "code",
    href: "#developpement",
    items: [
      "Sites et applications sur mesure",
      "Migration cloud",
      "Automatisation des workflows",
    ],
  },
  {
    title: "Conseil, Formation et Vente",
    shortTitle: "Conseil & Formation",
    description:
      "Stratégie IT, montée en compétences et fourniture de matériel adapté.",
    featured: false,
    icon: "book",
    href: "#conseil",
    items: [
      "Audit et feuille de route IT",
      "Formations pratiques",
      "Vente de matériel et licences",
    ],
  },
];

export const brandServices = [
  {
    id: "assistance",
    code: "svc.support()",
    shortTitle: "Assistance",
    title: "Assistance, Maintenance et Dépannage",
    badge: "Support",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1400",
    summary:
      "Intervention rapide, maintenance préventive et helpdesk pour garantir la continuité de vos activités.",
    highlights: [
      "Dépannage sur site et à distance",
      "Maintenance préventive du parc IT",
      "Support utilisateur réactif",
    ],
    details: {
      description:
        "Notre pôle Assistance prend en charge vos incidents rapidement, entretient votre parc en amont et assure un support humain pour vos collaborateurs — sur site à Douala ou à distance.",
      includes: [
        "Helpdesk et tickets utilisateurs",
        "Dépannage matériel et logiciel",
        "Maintenance préventive planifiée",
        "Installation et mises à jour logicielles",
      ],
      benefits: [
        "Moins de temps d'arrêt",
        "Coûts IT maîtrisés",
        "Un seul interlocuteur dédié",
      ],
      forWho: "PME, écoles, ONG et administrations sans équipe IT interne.",
    },
  },
  {
    id: "infrastructure",
    code: "net.deploy()",
    shortTitle: "Réseaux",
    title: "Infrastructure et Réseaux",
    badge: "Infra",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1400&q=80",
    summary:
      "Réseaux, serveurs et Wi-Fi professionnels dimensionnés pour la performance et la croissance.",
    highlights: [
      "Câblage structuré et Wi-Fi pro",
      "VPN et interconnexion multi-sites",
      "Administration serveurs & virtualisation",
    ],
    details: {
      description:
        "Nous concevons et déployons des infrastructures réseau fiables : câblage, Wi-Fi, routeurs, serveurs et VPN pour connecter vos sites en toute sécurité.",
      includes: [
        "Architecture et schéma réseau",
        "Câblage structuré et baies",
        "Wi-Fi entreprise et segmentation",
        "VPN site-à-site et accès distant",
      ],
      benefits: [
        "Connectivité stable partout",
        "Infrastructure évolutive",
        "Supervision de l'état réseau",
      ],
      forWho: "Entreprises en croissance et institutions multi-sites.",
    },
  },
  {
    id: "cybersecurite",
    code: "sec.shield()",
    shortTitle: "Cybersécurité",
    title: "Cybersécurité",
    badge: "Sécurité",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80",
    summary:
      "Audits, pare-feu, sauvegardes et sensibilisation pour protéger vos données et votre réputation.",
    highlights: [
      "Audit et durcissement des systèmes",
      "Pare-feu, antivirus et MFA",
      "Plan de reprise après sinistre",
    ],
    details: {
      description:
        "Nous évaluons vos vulnérabilités, déployons des protections adaptées et formons vos équipes. En cas d'incident, un plan de réponse structuré est activé.",
      includes: [
        "Audit et analyse des failles",
        "Pare-feu, antivirus et EDR",
        "Sauvegarde chiffrée et PRA",
        "Sensibilisation anti-phishing",
      ],
      benefits: [
        "Protection proactive",
        "Conformité renforcée",
        "Résilience en cas de sinistre",
      ],
      forWho: "Organisations manipulant des données sensibles.",
    },
  },
  {
    id: "developpement",
    code: "dev.build()",
    shortTitle: "Digital",
    title: "Développement et Transformation Digitale",
    badge: "Dev",
    image:
      "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1400",
    summary:
      "Sites web, applications métier et automatisation pour moderniser vos processus.",
    highlights: [
      "Sites et apps sur mesure (React, Next.js)",
      "Intégration cloud et API",
      "Automatisation des workflows",
    ],
    details: {
      description:
        "Nous concevons des solutions web et mobiles sur mesure, automatisons vos tâches répétitives et intégrons vos outils via API pour un écosystème numérique cohérent.",
      includes: [
        "Sites vitrines et e-commerce",
        "Applications métier web/mobile",
        "Intégration API et cloud",
        "Maintenance évolutive",
      ],
      benefits: [
        "Processus dématérialisés",
        "Meilleure expérience client",
        "Solutions qui grandissent avec vous",
      ],
      forWho: "PME en digitalisation et institutions modernisant leurs outils.",
    },
  },
  {
    id: "conseil",
    code: "ops.advise()",
    shortTitle: "Conseil",
    title: "Conseil, Formation et Vente",
    badge: "Conseil",
    image:
      "https://images.pexels.com/photos/7376/pexels-photo-7376.jpeg?auto=compress&cs=tinysrgb&w=1400",
    summary:
      "Stratégie IT, formations pratiques et fourniture de matériel adapté à votre budget.",
    highlights: [
      "Audit et feuille de route digitale",
      "Formations cyber, réseau et bureautique",
      "Vente de matériel et licences",
    ],
    details: {
      description:
        "Nous auditons votre maturité IT, formons vos équipes et fournissons le matériel adapté — ordinateurs, serveurs et licences au meilleur rapport qualité-prix.",
      includes: [
        "Audit et feuille de route IT",
        "Formations présentiel ou distanciel",
        "Accompagnement au changement",
        "Fourniture matériel et licences",
      ],
      benefits: [
        "Décisions IT éclairées",
        "Équipes autonomes",
        "Matériel livré clé en main",
      ],
      forWho: "Directions et responsables IT structurant leur stratégie numérique.",
    },
  },
];

export const serviceProcess = [
  {
    step: "01",
    title: "Écoute & Diagnostic",
    description:
      "Nous analysons vos besoins, votre infrastructure existante et vos objectifs pour proposer la meilleure approche.",
  },
  {
    step: "02",
    title: "Proposition Sur Mesure",
    description:
      "Un plan d'action clair avec délais, budget et livrables adaptés à votre contexte et à vos priorités.",
  },
  {
    step: "03",
    title: "Déploiement & Suivi",
    description:
      "Mise en œuvre par nos experts avec un accompagnement continu et un support réactif après livraison.",
  },
];

export const detailedServices = [
  {
    title: "Maintenance IT",
    description:
      "Interventions sur site et à distance pour maintenir vos postes, serveurs et périphériques en parfait état de fonctionnement.",
  },
  {
    title: "Cybersécurité",
    description:
      "Audits, durcissement des systèmes, sensibilisation des utilisateurs et plans de réponse aux incidents.",
    highlighted: true,
  },
  {
    title: "Réseaux & Télécom",
    description:
      "Câblage structuré, Wi-Fi professionnel, VPN et interconnexion de sites pour une connectivité fluide et sécurisée.",
  },
  {
    title: "Développement Web",
    description:
      "Création de plateformes performantes, responsives et optimisées pour le référencement et l'expérience utilisateur.",
  },
  {
    title: "Formation & Conseil",
    description:
      "Accompagnement des équipes, ateliers pratiques et feuilles de route digitales adaptées à votre secteur.",
  },
  {
    title: "Vente de Matériel",
    description:
      "Fourniture d'équipements informatiques, licences logicielles et solutions adaptées à votre budget.",
  },
];

export const teamMembers = [
  {
    name: "Samuel Mbata",
    role: "Directeur Général",
    bio: "Visionnaire passionné par l'innovation technologique et le développement des talents locaux.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Clarisse Ndjomo",
    role: "Experte Cybersécurité",
    bio: "Spécialiste en audit de sécurité et protection des infrastructures critiques.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Arnaud Fokou",
    role: "Ingénieur Réseaux",
    bio: "Architecte de solutions réseau et télécom pour entreprises de toutes tailles.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Grace Ewane",
    role: "Développeuse Full-Stack",
    bio: "Conçoit des applications web et mobiles élégantes, performantes et évolutives.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
  },
];

export const aboutContent = {
  mission:
    "ID TITAND MBATACK SARL est née de la conviction que chaque organisation mérite un partenaire IT de confiance — capable d'assurer la continuité opérationnelle, de sécuriser les données et d'accélérer la transformation numérique.",
  vision:
    "Devenir la référence en solutions informatiques intégrées en Afrique centrale, en alliant expertise technique, proximité humaine et innovation durable.",
  values: [
    {
      title: "Excellence",
      description: "Des standards élevés dans chaque intervention, du dépannage à la conception d'architectures complexes.",
    },
    {
      title: "Confiance",
      description: "Transparence, confidentialité et engagement sur la durée avec nos clients et partenaires.",
    },
    {
      title: "Innovation",
      description: "Veille technologique permanente pour proposer des solutions à la pointe et adaptées au contexte local.",
    },
  ],
};

export const serviceGallery = [
  {
    title: "Assistance & Dépannage",
    description:
      "Intervention rapide sur site ou à distance pour résoudre vos pannes, configurer vos équipements et assurer la continuité de vos opérations.",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200",
    badge: "Support 24/7",
    featured: true,
  },
  {
    title: "Infrastructure & Réseaux",
    description:
      "Conception et déploiement de réseaux locaux, Wi-Fi professionnel, VPN et interconnexion multi-sites pour une connectivité fiable.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    badge: "Réseaux",
    featured: false,
  },
  {
    title: "Cybersécurité",
    description:
      "Audits de sécurité, pare-feu, protection anti-malware et plans de réponse aux incidents pour défendre votre patrimoine numérique.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    badge: "Sécurité",
    featured: false,
  },
  {
    title: "Développement Web",
    description:
      "Sites vitrines, plateformes e-commerce et applications métier sur mesure, performantes et adaptées à vos utilisateurs.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    badge: "Digital",
    featured: false,
  },
  {
    title: "Transformation Digitale",
    description:
      "Automatisation des processus, migration cloud et modernisation de vos outils pour gagner en efficacité et compétitivité.",
    image:
      "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1200",
    badge: "Cloud",
    featured: false,
  },
  {
    title: "Formation & Conseil",
    description:
      "Ateliers pratiques, coaching IT et feuilles de route stratégiques pour faire monter vos équipes en compétences.",
    image:
      "https://images.pexels.com/photos/7376/pexels-photo-7376.jpeg?auto=compress&cs=tinysrgb&w=1200",
    badge: "Formation",
    featured: false,
  },
  {
    title: "Sauvegarde & Recovery",
    description:
      "Solutions de backup automatisées et plans de reprise après sinistre pour protéger vos données critiques.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    badge: "Data",
    featured: false,
  },
  {
    title: "Vente de Matériel",
    description:
      "Fourniture d'ordinateurs, serveurs, licences logicielles et périphériques adaptés à votre budget et vos besoins.",
    image:
      "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    badge: "Matériel",
    featured: false,
  },
];

export const stats = [
  { value: "150+", label: "Clients accompagnés" },
  { value: "500+", label: "Interventions réalisées" },
  { value: "10+", label: "Années d'expertise" },
  { value: "24h", label: "Délai de réponse moyen" },
];

export const faqs = [
  {
    question: "Quels types d'entreprises accompagnez-vous ?",
    answer:
      "Nous travaillons avec des PME, des institutions publiques, des ONG et des grandes entreprises en Afrique centrale. Chaque client bénéficie d'un accompagnement adapté à sa taille et à son secteur d'activité.",
  },
  {
    question: "Proposez-vous une assistance en urgence ?",
    answer:
      "Oui. Notre équipe de dépannage intervient rapidement pour les incidents critiques affectant la continuité de vos activités, sur site ou à distance selon la nature du problème.",
  },
  {
    question: "Comment se déroule un audit de cybersécurité ?",
    answer:
      "Nous commençons par un diagnostic de votre infrastructure, identifions les vulnérabilités, puis vous remettons un rapport détaillé avec des recommandations priorisées et un plan d'action concret.",
  },
  {
    question: "Développez-vous des applications sur mesure ?",
    answer:
      "Absolument. Nous concevons des sites web, des applications métier et des intégrations API adaptés à vos processus, avec un suivi post-livraison et des mises à jour évolutives.",
  },
  {
    question: "Proposez-vous des formations pour nos équipes ?",
    answer:
      "Oui, nous organisons des sessions de formation sur la cybersécurité, l'utilisation des outils IT, le développement web et la gestion d'infrastructure, en présentiel ou à distance.",
  },
];

export const testimonials = [
  {
    quote:
      "ID TitanD a transformé notre infrastructure réseau. Leur réactivité et leur expertise en cybersécurité nous ont permis de sécuriser l'ensemble de nos données sensibles.",
    name: "Marie Nguema",
    role: "Directrice Administrative, Groupe Sahel",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
  },
  {
    quote:
      "Un partenaire fiable pour notre transformation digitale. L'équipe a développé notre plateforme web et formé nos collaborateurs avec un professionnalisme remarquable.",
    name: "Jean-Pierre Owona",
    role: "CEO, TechAfrika Solutions",
    image:
      "https://images.unsplash.com/photo-1519080108295-0b96b2f0a6f2?auto=format&fit=crop&w=400&q=80",
  },
];

// ALL website content lives here. Edit this file to update the site.

export const company = {
  name: "AZKIS Cosmopolitan",
  tagline: "Government & Defence — Mobility Made Seamless",
  established: 1973,
  registeredMod: 1975,
  staff: 15,
  emails: ["azkis@azkis.com.pk", "azkiscosmopolitan@gmail.com"],
  hours: "Mon – Fri, 9 am – 6 pm",
  whatsapp: "", // e.g. "923001234567" (country code, no + or spaces). Empty hides the button.
  offices: [
    {
      city: "Rawalpindi",
      label: "Head Office",
      address: ["Suite No. 75, 2nd Floor, Mobi Plaza,", "Haider Road, Saddar, Rawalpindi, Pakistan"],
      phones: ["+92-51-5512425", "+92-51-5514777"],
      fax: "92-21-5514352",
    },
    {
      // NOTE: the live website lists this address; the PowerPoint lists "Suite 725 & 726, UP Society".
      // Confirm which is current and edit here.
      city: "Karachi",
      label: "Branch Office",
      address: ["72 Dilkusha Chambers,", "Marston Road, Plaza Quarters, Karachi, Pakistan"],
      phones: ["+92-21-32721173", "+92-21-32736806"],
      fax: "92-21-32742870",
    },
  ],
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services#power", label: "Power & Electrical" },
      { href: "/services#data", label: "Data & Networking" },
      { href: "/services#voice", label: "Voice & Communication" },
      { href: "/services#security", label: "Security & Low-Current" },
      { href: "/services#civil", label: "Civil & Construction" },
      { href: "/services#interior", label: "Interior & Finishing" },
      { href: "/services#energy", label: "Alternative Energy" },
      { href: "/services#turnkey", label: "Turnkey & Materials" },
    ],
  },
  { href: "/products", label: "Products" },
  { href: "/about#industries", label: "Industries" },
  { href: "/association", label: "Association" },
  { href: "/contact", label: "Contact" },
];

export const glance = [
  "A passion to serve our customers",
  "Group of professionals under one roof",
  "Extraordinary relations with our customers",
  "4 decades of experience",
  "Personalized, focused service",
  "Service flexibility",
  "Major project handling capability",
];

export const about = {
  intro:
    "AZKIS Cosmopolitan is an integrated infrastructure and turnkey project solutions company serving the banking, corporate, commercial and Ministry of Defence (MoD) sectors, backed by extensive experience in engineering, construction and infrastructure development.",
  story: [
    "Established in 1973 and registered with the Ministry of Defence in 1975, AZKIS Cosmopolitan has grown over four decades into a diversified marketing and engineering support organization, synonymous with cutting-edge technology and trading. After its initial success the company diversified into other fields and operations, and has served the MoD and its allied establishments with an impeccable record.",
    "The company delivers civil, electrical, mechanical and integrated infrastructure projects across commercial, corporate and public sectors, with experience in roads, airports, motorways, housing and industrial projects. Its expertise also covers power systems, structured cabling, voice systems, interiors, finishing and turnkey execution.",
    "AZKIS integrates energy-efficient and renewable energy solutions and manages projects from feasibility and design through construction, commissioning and post-completion support. We contribute our share to the development of the country and provide a base for foreign investors to promote their products in Pakistan.",
  ],
  philosophy:
    "AZKIS Cosmopolitan is well versed with business procedures and modalities, which has yielded excellent relations with many foreign companies and a very satisfied clientele. We believe in long-term, mutually beneficial relations based on honesty and customer confidence. We commit the same resources, time and energy to customer service as we do to our technical knowledge, providing round-the-clock service throughout the year.",
  pillars: [
    { title: "One-window delivery", text: "Multiple services managed through one team." },
    { title: "Banking-sector focus", text: "Solutions designed around branch requirements." },
    { title: "Coordinated execution", text: "Planning, installation, finishing and handover." },
  ],
  mission: {
    text: "To deliver dependable, safe and high-quality infrastructure and turnkey solutions through ethical business practices, technical expertise, innovation and advanced technologies.",
    extra:
      "We simplify project delivery through disciplined management, attention to detail and seamless coordination from planning to final handover, building long-term client relationships through exceptional service and repeat business.",
    values: ["Quality", "Safety", "Accountability"],
  },
  vision: {
    text: "To become a trusted national partner in banking and commercial infrastructure, recognized for reliable execution, integrated solutions, engineering excellence and exceptional quality.",
    extra:
      "We aspire to exceed client expectations through authenticity, hard work, innovation and responsive after-sales support, transforming ambitious ideas into reality.",
    values: [
      { title: "Trust", text: "Transparent working relationships" },
      { title: "Consistency", text: "Repeatable standards and quality" },
      { title: "Growth", text: "Capability across regions and sectors" },
    ],
  },
  md: {
    title: "Message from the Managing Director",
    text: "Establishing close relationships with our clients is a key element to reaching total solutions. We cultivate each client relationship from the initial concept to completion, often maintaining this contact years after a project is finished. We believe successful consulting is achieved through a balance of significant experience, a working knowledge of today's best practices, and access to cutting-edge technology. We offer expertise that goes beyond the “state of the practice” to include innovative solutions using techniques usually found in both Defence and Civil sectors.",
  },
};

export const team = [
  { title: "Management & Client Coordination", text: "Client liaison, planning, reporting and approvals.", icon: "users" },
  { title: "Project & Site Management", text: "Scheduling, site supervision, coordination and progress tracking.", icon: "clipboard" },
  { title: "Power, Data & Voice Engineers", text: "Installation, configuration, testing and commissioning.", icon: "bolt" },
  { title: "Civil & Finishing Teams", text: "Construction, masonry, flooring, glass, iron and finishing works.", icon: "building" },
  { title: "Procurement & Logistics", text: "Materials, vendor coordination, delivery and inventory.", icon: "truck" },
  { title: "Quality, Safety & Handover", text: "Inspection, snag resolution, documentation and handover.", icon: "shield" },
];

export const clients = [
  { title: "Ministry of Defence & allied establishments", text: "Import and indenting of foreign goods to MoD since 1975." },
  { title: "Banking & Financial Institutions", text: "New branches, renovations, relocations and maintenance." },
  { title: "Corporate & Commercial Offices", text: "Workplace power, connectivity, communication and fit-outs." },
  { title: "Retail & Service Networks", text: "Multi-site rollouts, standardization and branch upgrades." },
  { title: "Developers & Project Consultants", text: "Specialist subcontracting and integrated project packages." },
];

export const structure = {
  top: "Management Team",
  branches: [
    { head: "Commercial", items: ["Procurement", "Supplies"] },
    { head: "Project Management", items: ["Project Operation", "Construction"] },
    { head: "Admin / Finance", items: ["Planning / Design", "Engineering Consultancy"] },
  ],
};

export const services = [
  { id: "power", short: "Power & Electrical", img: "/images/services/power.jpg", icon: "bolt", title: "Power & Electrical", text: "Electrical installation, lighting, power distribution, cabling, earthing and related works." },
  { id: "data", short: "Data & Networking", img: "/images/services/data.jpg", icon: "network", title: "Data & Networking", text: "Structured cabling, LAN points, racks, patch panels, switches, Wi-Fi and network testing." },
  { id: "voice", short: "Voice & Communication", img: "/images/services/voice.jpg", icon: "phone", title: "Voice & Communication", text: "PABX / IP-PBX systems, telephone extensions, voice cabling and communication setup." },
  { id: "security", short: "Security & Low-Current", img: "/images/services/security.jpg", icon: "camera", title: "Security & Low-Current", text: "CCTV / IP cameras, NVRs, access control, attendance systems and related low-current works." },
  { id: "civil", short: "Civil & Construction", img: "/images/services/civil.jpg", icon: "building", title: "Civil, Environmental & Construction", text: "Civil and environmental works, site preparation, engineering design, estimates, construction and renovations." },
  { id: "interior", short: "Interior & Finishing", img: "/images/services/interior.jpg", icon: "brush", title: "Interior, Finishing & Maintenance", text: "Interiors, glass and aluminium, doors, ceilings, painting, fixtures, repairs, alterations and ongoing maintenance." },
  { id: "energy", short: "Alternative Energy", img: "/images/services/energy.jpg", icon: "leaf", title: "Sustainable & Alternative Energy", text: "Alternative and renewable energy systems, energy-efficient construction, zero-energy buildings and houses." },
  { id: "turnkey", short: "Turnkey & Materials", img: "/images/services/turnkey.jpg", icon: "clipboard", title: "Turnkey Projects & Materials", text: "End-to-end project coordination, infrastructure development and operations, material sourcing, workforce management, quality checks, testing and handover." },
];

export const categories = [
  {
    id: "defence", icon: "shield", title: "Defence & Military",
    blurb: "Hardware, optics and power systems for the armed forces.",
    items: [
      { name: "Military Hardware / Systems", desc: "Land, sea and air systems indented for MoD and allied establishments." },
      { name: "APU (Auxiliary Power Unit) for Tanks", desc: "Auxiliary power for armoured platforms." },
      { name: "Night Vision Devices", desc: "Binoculars, monoculars and weapon-mounted night vision." },
    ],
  },
  {
    id: "training", icon: "monitor", title: "Simulators & Training",
    blurb: "Simulation systems for driver, pilot and weapons training.",
    items: [
      { name: "Vehicle Driving Simulators", desc: "Car, jeep, bus, truck and motorcycle driving simulators." },
      { name: "Tank & Aviation Simulators", desc: "Tank and aviation simulators and civil armed forces training systems." },
      { name: "Small Arms & Sniper Training Simulators", desc: "Rifle and sniper simulators for training on weapons and anti-terrorism." },
    ],
  },
  {
    id: "aviation", icon: "plane", title: "Aviation & Ground Support",
    blurb: "Aircraft servicing and airfield maintenance equipment.",
    items: [
      { name: "Aircraft Refuelers", desc: "Mobile refuelling vehicles for airfields." },
      { name: "Aviation Parts", desc: "Spares and components for aviation platforms." },
      { name: "Runway Rubber Removal", desc: "Truck-mounted systems that restore runway friction." },
    ],
  },
  {
    id: "safety", icon: "flame", title: "Fire, CBRN & Safety",
    blurb: "Protection against fire, contamination and pressure-related emergencies.",
    items: [
      { name: "Firefighting Vehicles / Equipment", desc: "Fire vehicles, portable pumps and fire-fighting equipment." },
      { name: "CBRN / NBC Decontamination Products", desc: "Decontamination units for chemical, biological, radiological and nuclear threats." },
      { name: "Gamow Bags", desc: "Portable hyperbaric chambers for altitude sickness." },
    ],
  },
  {
    id: "medical", icon: "cross", title: "Medical & Healthcare",
    blurb: "Field and hospital equipment.",
    items: [
      { name: "Medical Products / Hospital Beds", desc: "Hospital beds, stretchers and emergency dressings." },
      { name: "Hospital Equipment", desc: "Equipment for hospitals and clinics." },
      { name: "Mobile Hospitals", desc: "Deployable medical facilities." },
    ],
  },
  {
    id: "industrial", icon: "cog", title: "Industrial & Workshop",
    blurb: "Machinery for workshops, plants and heavy work sites.",
    items: [
      { name: "Workshop Machinery / Equipment", desc: "CNC machining centres, water-jet cutters and blasting cabinets." },
      { name: "Heavy Machinery Parts", desc: "Parts for heavy and industrial machinery." },
      { name: "Earthmoving Construction Machinery", desc: "Loaders and earthmoving plant." },
      { name: "Compressors", desc: "Industrial air compressors." },
    ],
  },
  {
    id: "energy", icon: "leaf", title: "Energy & Environment",
    blurb: "Cleaner power and waste conversion.",
    items: [
      { name: "Alternate Energies", desc: "Alternative and renewable energy systems." },
      { name: "Waste to Energy Plants", desc: "Plants that convert waste into usable energy." },
    ],
  },
  {
    id: "construction", icon: "building", title: "Construction",
    blurb: "Building work for civil and government clients.",
    items: [
      { name: "Construction — Civil & Government", desc: "Construction in both civil and government establishments." },
    ],
  },
];

export const partners = [
  // Add partner companies here. Example:
  // { name: "Partner Name", country: "Country", scope: "What they supply", url: "https://..." },
];

export const approach = [
  { title: "Understand", text: "We study the requirement, the end user and the approval route." },
  { title: "Source", text: "We work with trusted local and international principals to find the right product." },
  { title: "Import & indent", text: "We handle documentation, import and indenting to MoD and other clients." },
  { title: "Support", text: "Installation, training and round-the-clock after-sales service." },
];

// Process shown on the home page ("One-Window Project Solution")
export const process = [
  { icon: "ruler", title: "Planning & Design" },
  { icon: "cube", title: "Material Procurement" },
  { icon: "cog", title: "Installation & Integration" },
  { icon: "check", title: "Testing & Commissioning" },
  { icon: "handshake", title: "Handover & Support" },
];

// "Why AZKIS" strip on the home page
export const why = [
  { icon: "shield", title: "Quality & Safety", text: "Highest standards in every project." },
  { icon: "users", title: "Technical Expertise", text: "Skilled team with proven experience." },
  { icon: "clock", title: "On-Time Delivery", text: "Committed to your timelines." },
  { icon: "handshake", title: "Accountability", text: "One partner. Full responsibility." },
];

// Featured projects (home page). PLACEHOLDER: generic project types taken from the design.
// Replace with real projects (and drop photos in public/images/projects/) when available.
export const projects = [
  { title: "Bank Branch Network", tags: "Power | Data | CCTV | Access Control", img: "/images/projects/bank.jpg" },
  { title: "Corporate Office", tags: "Networking | ELV | Interiors", img: "/images/projects/office.jpg" },
  { title: "Commercial Building", tags: "Construction | MEP | Turnkey", img: "/images/projects/commercial.jpg" },
  { title: "Industrial Facility", tags: "Electrical | Civil | Automation", img: "/images/projects/industrial.jpg" },
];

// Industries strip (home page) - taken from the "Who we serve" slide + MoD
export const industries = [
  { icon: "shield", title: "Defence & MoD" },
  { icon: "bank", title: "Banking & Finance" },
  { icon: "building", title: "Corporate Offices" },
  { icon: "cart", title: "Retail & Service" },
  { icon: "factory", title: "Developers & Consultants" },
];

// Social links: only those with a URL are shown in the footer.
export const social = [
  { name: "LinkedIn", short: "in", url: "" },
  { name: "Facebook", short: "f", url: "" },
  { name: "Instagram", short: "ig", url: "" },
];

// "What We Do" block on the home page - copy from the live website (azkis.com.pk)
export const whatWeDo = {
  title: "Government & Defence Imports, Indenting and Turnkey Projects",
  text: "AZKIS Cosmopolitan is a composite company, always looking for new avenues, engaged in imports/indenting of foreign goods to the MoD. Everything you can imagine in the defence sector, backed by four decades of experience.",
};

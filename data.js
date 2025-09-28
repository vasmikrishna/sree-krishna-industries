window.skiData = {
  brand: {
    name: 'Sree Krishna Industries',
    short: 'SKI',
    tagline: 'Precision CNC Machining • On-Time • ISO Certified',
  },
  usp: [
    '±5µm repeatability across key ops',
    'Prototype to 10K+ batch scalability',
    'DFM reviews within 24h (workdays)',
    'Traceability + PPAP on request',
  ],
  certifications: [
    { code: 'ISO 9001:2015', desc: 'Quality Management System' },
    { code: 'ISO 14001:2015', desc: 'Environmental Management' },
    { code: 'ISO 45001:2018', desc: 'Occupational Health & Safety' },
  ],
  clients: [
    {
      name: 'Arjas Steel Pvt. Ltd.',
      href: 'https://www.arjas.com/',
      logo: 'public/logos/arjas-steel.jpg',
    },
    {
      name: 'Professional Engineers',
      href: 'https://www.professionalengg.co.in/',
      logo: 'public/logos/professional-engineers.svg',
    },
    {
      name: 'Danieli India Limited',
      href: 'https://www.danieli.com/en',
      logo: 'public/logos/danieli-india.svg',
    },
    {
      name: 'TAKRAF India Pvt. Ltd. (DELKOR)',
      href: 'https://www.takraf.com/',
      logo: 'public/logos/takraf-india.webp',
    },
    {
      name: 'British Engines (India) Pvt. Ltd.',
      href: 'https://www.britishengines.com/',
      logo: 'public/logos/british-engines.avif',
    },
  ],
  machines: [
    // VMC Machines
    {
      slug: 'feeler-mp45a',
      name: 'Feeler VMP-45A',
      type: 'VMC Machine',
      category: 'VMC',
      image: 'public/images/VMC45A.jpg',
      travel: '1100 x 610 x 600mm',
      badges: ['VMC', 'Large Capacity'],
      description: 'High-precision vertical machining center with large work envelope for complex parts. Features 10,000rpm spindle speed and 36m/min rapid traverse.',
      capabilities: ['Large work envelope', 'High precision', 'Heavy duty construction', '10,000rpm spindle'],
      materials: ['Steel', 'Aluminium', 'Stainless Steel'],
      tolerances: '±0.01 mm',
      throughput: 'Production ready',
    },
    {
      slug: 'feeler-mp35a',
      name: 'Feeler VMP-32A',
      type: 'VMC Machine',
      category: 'VMC',
      image: 'public/images/VMC35A.jpg',
      travel: '820 x 520 x 505mm',
      badges: ['VMC', 'Medium Capacity'],
      description: 'Versatile vertical machining center for medium-sized precision components. Features 10,000rpm spindle speed and 40m/min rapid traverse.',
      capabilities: ['Medium work envelope', 'High accuracy', 'Reliable performance', '10,000rpm spindle'],
      materials: ['Steel', 'Aluminium', 'Brass'],
      tolerances: '±0.01 mm',
      throughput: 'Batch production',
    },
    {
      slug: 'snt-vl610',
      name: 'STM VL/VD 610 (S2)',
      type: 'VMC Machine',
      category: 'VMC',
      image: 'public/images/S&TVL610.png',
      travel: '640 x 450 x 500mm',
      badges: ['VMC', 'Compact'],
      description: 'Compact vertical machining center for small to medium precision parts. Features 8,000rpm spindle speed and 36m/min rapid traverse with LM roller guideways.',
      capabilities: ['Compact design', 'High precision', 'Efficient operation', '8,000rpm spindle', 'LM roller guideways'],
      materials: ['Steel', 'Aluminium', 'Engineering Plastics'],
      tolerances: '±0.01 mm',
      throughput: 'Small batch production',
    },
    
    // CNC Turning Centre
    {
      slug: 'askar-spinner-22',
      name: 'ASKAR MICRON SPINNER 22',
      type: 'CNC Turning Centre',
      category: 'CNC Turning',
      image: 'public/images/ASKAR MICRON SPINNER 22.jpg',
      travel: 'Ø450 x 700mm',
      badges: ['CNC Turning', 'Large Diameter'],
      description: 'High-precision CNC turning center for large diameter components.',
      capabilities: ['Large diameter capacity', 'High precision', 'Production ready'],
      materials: ['Steel', 'Stainless Steel', 'Aluminium'],
      tolerances: '±0.005 mm',
      throughput: 'High volume production',
    },
    {
      slug: 'askar-spinner-15-dx',
      name: 'ASKAR MICRON SPINNER 15 DX',
      type: 'CNC Turning Centre',
      category: 'CNC Turning',
      image: 'public/images/machine-turning-center.jpg',
      travel: 'Ø250 x 500mm',
      badges: ['CNC Turning', 'Medium Size'],
      description: 'Versatile CNC turning center for medium-sized precision components.',
      capabilities: ['Medium capacity', 'High accuracy', 'Reliable operation'],
      materials: ['Steel', 'Aluminium', 'Brass'],
      tolerances: '±0.005 mm',
      throughput: 'Batch production',
    },
    {
      slug: 'sands-slt250-1200',
      name: 'SANDS SLT250-1200',
      type: 'CNC Turning Centre',
      category: 'CNC Turning',
      image: 'public/images/machine-turning-center.jpg',
      travel: 'Ø400 x 1250mm',
      badges: ['CNC Turning', 'Long Length'],
      description: 'Long-bed CNC turning center for extended length components.',
      capabilities: ['Long length capacity', 'High precision', 'Heavy duty'],
      materials: ['Steel', 'Stainless Steel', 'Alloy Steel'],
      tolerances: '±0.005 mm',
      throughput: 'Long component production',
    },
    {
      slug: 'askar-spinner-18-dx',
      name: 'ASKAR MICRON SPINNER 18 DX',
      type: 'CNC Turning Centre',
      category: 'CNC Turning',
      image: 'public/images/machine-turning-center.jpg',
      travel: 'Ø300 x 500mm',
      badges: ['CNC Turning', 'Standard Size'],
      description: 'Standard CNC turning center for general precision turning operations.',
      capabilities: ['Standard capacity', 'High accuracy', 'Versatile operation'],
      materials: ['Steel', 'Aluminium', 'Brass'],
      tolerances: '±0.005 mm',
      throughput: 'General production',
    },
    {
      slug: 'jyothi-turning',
      name: 'JYOTHI CNC DX-150',
      type: 'CNC Turning Centre',
      category: 'CNC Turning',
      image: 'public/images/JYOTHI-CNC-Turning-Machine-DX-150.jpg',
      travel: 'Ø300 x 500mm',
      badges: ['CNC Turning', 'High Precision'],
      description: 'High precision CNC turning machine with dry machining technology and 90-degree angle design. Features vertical chip fall and efficient coolant system.',
      capabilities: ['High precision', 'Dry machining', 'Long lifespan', 'Vertical chip fall', '90-degree angle design', 'Efficient coolant'],
      materials: ['Steel', 'Cast Iron', 'Aluminium'],
      tolerances: '±0.005 mm',
      throughput: 'High precision production',
    },
    
    // Lathe Machine
    {
      slug: 'balaji-lathe-600-1000',
      name: 'Balaji Heavy Duty Lathe VH-15',
      type: 'Lathe Machine',
      category: 'Lathe',
      image: 'public/images/lache-machine.webp',
      travel: '600 x 1000mm',
      badges: ['Lathe', 'Heavy Duty'],
      description: 'Heavy duty lathe machine engineered for precision, power, and durability. Ideal for large-scale industrial machining with robust structure and high-torque motor.',
      capabilities: ['Heavy duty construction', 'High-torque motor', 'Rigid bed design', 'Advanced gearbox system', 'Smooth operations', 'Minimal vibrations'],
      materials: ['Steel', 'Cast Iron', 'Aluminium'],
      tolerances: '±0.02 mm',
      throughput: 'Heavy duty turning work',
    },
    {
      slug: 'balaji-lathe-800-1500',
      name: 'Balaji Light Duty Lathe VL',
      type: 'Lathe Machine',
      category: 'Lathe',
      image: 'public/images/balaji-late_800_1500_mm.webp',
      travel: '800 x 1500mm',
      badges: ['Lathe', 'Light Duty'],
      description: 'Light duty lathe machine designed for small-scale machining tasks, offering precision, efficiency, and durability. Ideal for workshops, tool rooms, and educational institutions.',
      capabilities: ['Compact design', 'Sturdy cast iron frame', 'Minimal vibrations', 'Precision-ground bed ways', 'Advanced spindle system', 'Controlled speed variations'],
      materials: ['Steel', 'Cast Iron', 'Aluminium'],
      tolerances: '±0.02 mm',
      throughput: 'Small-scale machining work',
    },
    {
      slug: 'balaji-lathe-450-3000',
      name: 'Balaji Extra Heavy Duty Lathe VH-20',
      type: 'Lathe Machine',
      category: 'Lathe',
      image: 'public/images/balaji-lathe_450_3000_mm.webp',
      travel: '450 x 3000mm',
      badges: ['Lathe', 'Extra Heavy Duty'],
      description: 'Extra heavy duty lathe machine built for high-performance industrial applications, ensuring maximum strength, precision, and durability. Designed for large-scale workshops and industries.',
      capabilities: ['High-performance industrial', 'Robust cast iron construction', 'High-torque motor', 'Advanced spindle system', 'User-friendly controls', 'Heavy workload handling'],
      materials: ['Steel', 'Cast Iron', 'Alloy Steel'],
      tolerances: '±0.02 mm',
      throughput: 'Heavy-duty industrial work',
    },
    
    // Drilling Machine
    {
      slug: 'one-inch-drilling',
      name: 'ITCO Pillar Drilling Machine DM-18',
      type: 'Drilling Machine',
      category: 'Drilling',
      image: 'public/images/pillar-drilling-machine-18.jpg',
      travel: '18mm Steel / 20mm Cast Iron',
      badges: ['Drilling', 'Heavy Duty'],
      description: 'Heavy duty pillar drilling machine with precision accuracy. Features 4-speed spindle, MT-2 taper, and robust construction for industrial drilling operations.',
      capabilities: ['Heavy duty construction', '4-speed spindle', 'MT-2 taper', 'Precision accuracy', 'Industrial drilling', 'Multi-purpose operations'],
      materials: ['Steel', 'Cast Iron', 'Aluminium'],
      tolerances: '±0.01 mm',
      throughput: 'Industrial drilling operations',
    },
    
    // Grinding Machine
    {
      slug: 'okama-cylindrical-grinding',
      name: 'Okamoto OGM 250 UDXB Cylindrical Grinding',
      type: 'Grinding Machine',
      category: 'Grinding',
      image: 'public/images/Okamoto-OGM-250-UDXB-CYLINDRICAL-GRINDING.jpg',
      travel: 'Ø200 x 500mm',
      badges: ['Grinding', 'Universal'],
      description: 'Universal cylindrical grinding machine with 200mm diameter capacity and 500mm between centres. Ideal for toolroom and small batch production with comprehensive standard equipment.',
      capabilities: ['Universal grinding', 'Internal grinding unit', 'PLC control', 'Double-V table slideways', 'AC motor ball screw drive', 'Quick setup'],
      materials: ['Hardened Steel', 'Tool Steel', 'Alloy Steel'],
      tolerances: '±0.001 mm',
      throughput: 'Toolroom and small batch production',
    },
  ],
  parts: [
    {
      slug: 'impeller-6061',
      name: '5-Axis Milled Impeller',
      material: 'Aluminium 6061-T6',
      image: 'public/images/part-1.webp',
      description: 'Complex impeller milled on 5-axis with perfect blade symmetry.',
      highlights: ['5-axis toolpaths', 'Mirror finish', 'Dynamic balancing available'],
    },
    {
      slug: 'surgical-housing',
      name: 'Surgical Housing',
      material: 'Stainless Steel 316L',
      image: 'public/images/part-2.jpg',
      description: 'Precision housing for medical devices with tight tolerance press fits.',
      highlights: ['Electropolished', 'Passivated', 'Full traceability'],
    },
    {
      slug: 'sensor-bracket',
      name: 'Sensor Bracket',
      material: 'ABS with Machined Inserts',
      image: 'public/images/part-3.webp',
      description: 'Hybrid bracket with machined metal inserts overmolded with ABS for automation systems.',
      highlights: ['Hybrid assembly', 'Insert molding ready', 'Dimensional report provided'],
    },
    {
      slug: 'gear-hub',
      name: 'Hardened Gear Hub',
      material: 'EN-24',
      image: 'public/images/part-4.avif',
      description: 'Heat-treated hub machined for drivetrain assemblies with tight tolerances.',
      highlights: ['Carburized & ground', 'CMM verified', 'Batch production'],
    },
  ],
  industries: [
    { 
      name: 'Aerospace', 
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>`, 
      description: 'Precision parts for propulsion, structural, and actuation systems.' 
    },
    { 
      name: 'Automotive', 
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18.4 10.2c-.3-.8-1-1.2-1.8-1.2H7.4c-.8 0-1.5.4-1.8 1.2L4.5 11.1C3.7 11.3 3 12.1 3 13v3c0 .6.4 1 1 1h2"/>
        <circle cx="7" cy="17" r="2"/>
        <circle cx="17" cy="17" r="2"/>
        <path d="M9 17h6"/>
      </svg>`, 
      description: 'Powertrain, drivetrain, and custom tooling components.' 
    },
    { 
      name: 'Medical', 
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M9 12l2 2 4-4"/>
        <path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1h18z"/>
        <path d="M3 12v6c0 .552.448 1 1 1h16c.552 0 1-.448 1-1v-6"/>
      </svg>`, 
      description: 'Biocompatible implants, housings, and surgical instrument components.' 
    },
    { 
      name: 'Electronics', 
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
        <circle cx="6" cy="8" r="1"/>
        <circle cx="10" cy="8" r="1"/>
        <circle cx="14" cy="8" r="1"/>
        <circle cx="18" cy="8" r="1"/>
        <circle cx="6" cy="12" r="1"/>
        <circle cx="10" cy="12" r="1"/>
        <circle cx="14" cy="12" r="1"/>
        <circle cx="18" cy="12" r="1"/>
      </svg>`, 
      description: 'Heat sinks, EMI-shielded enclosures, and precision brackets.' 
    },
    { 
      name: 'Industrial Automation', 
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
        <path d="M20.2 4.2l-4.2 4.2m-8.4 8.4l-4.2 4.2"/>
        <path d="M20.2 19.8l-4.2-4.2m-8.4-8.4l-4.2-4.2"/>
      </svg>`, 
      description: 'Fixtures, end-effectors, and sensor mounts for high-mix lines.' 
    },
    { 
      name: 'Energy', 
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
      </svg>`, 
      description: 'Critical components for renewables and conventional power systems.' 
    },
  ],
  process: [
    { step: '01', title: 'Quote in 24h', desc: 'Upload drawings/STEP. Receive DFM + costing fast.' },
    { step: '02', title: 'Tooling & CAM', desc: 'Optimized toolpaths, fixtures, and runbooks.' },
    { step: '03', title: 'CNC Production', desc: 'Milling, turning, EDM, and finishing under one roof.' },
    { step: '04', title: 'QC & Dispatch', desc: 'CMM/vision reports, packing, pan-India shipping.' },
  ],
};

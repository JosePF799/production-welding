const fs = require("fs");
const path = require("path");

const root = __dirname;
const today = "2026-04-25";

const site = {
  name: "Production Welding",
  slogan: "Your Welding Solution",
  url: "https://productionwelding.org",
  phone: "(510) 589-4985",
  phoneHref: "tel:+15105894985",
  email: "Ismael@Productionwelding.org",
  emailHref: "mailto:Ismael@Productionwelding.org",
  logo: "assets/production-welding-logo.png",
  baseCity: "Hayward",
  state: "CA",
  serviceArea: "the Bay Area",
  serviceAreaBadge: "Bay Area Service"
};

const cities = [
  {
    name: "Hayward",
    slug: "hayward",
    titleLead: "Hayward mobile welding",
    intro: "Production Welding is based around Hayward and provides on-site welding for homes, shops, commercial properties, contractors, and equipment owners who need a certified, insured welder to come to the job.",
    localFit: "Hayward calls often involve gates, railings, equipment brackets, trailer repairs, stair details, and metal components that are easier to repair on site than haul to a shop.",
    nearby: "San Leandro, Castro Valley, Union City, San Lorenzo, and Fremont"
  },
  {
    name: "Oakland",
    slug: "oakland",
    titleLead: "Oakland mobile welding",
    intro: "Production Welding serves Oakland with mobile welding, repair welding, gate welding, railing work, and small fabrication support for residential and commercial properties.",
    localFit: "Older properties, busy storefronts, apartments, industrial yards, and repair projects can all benefit from a welder who brings the setup to the site.",
    nearby: "Emeryville, Alameda, Berkeley, San Leandro, and Piedmont"
  },
  {
    name: "San Jose",
    slug: "san-jose",
    titleLead: "San Jose mobile welding",
    intro: "Production Welding provides mobile and shop welding service in San Jose for repairs, fabrication, structural details, gates, railings, trailers, and job-site metal work.",
    localFit: "San Jose projects often need dependable scheduling, clean welds, and a welder who can solve the problem without moving heavy pieces off site.",
    nearby: "Milpitas, Santa Clara, Sunnyvale, Fremont, and Newark"
  },
  {
    name: "San Francisco",
    slug: "san-francisco",
    titleLead: "San Francisco mobile welding",
    intro: "Production Welding travels to San Francisco for on-site welding where access, timing, and clean work matter for homes, buildings, storefronts, railings, and repair projects.",
    localFit: "From tight service calls to metal repairs that need to be handled in place, mobile welding helps avoid the cost and hassle of transporting the work.",
    nearby: "Daly City, South San Francisco, Brisbane, Oakland, and Alameda"
  },
  {
    name: "Alameda",
    slug: "alameda",
    titleLead: "Alameda mobile welding",
    intro: "Production Welding serves Alameda with mobile welding for gates, railings, stairs, trailers, brackets, repairs, and custom metal details.",
    localFit: "For homes, multifamily properties, shops, and light commercial sites, a mobile welder can repair or fabricate the piece where it belongs.",
    nearby: "Oakland, San Leandro, Emeryville, Hayward, and Berkeley"
  },
  {
    name: "Berkeley",
    slug: "berkeley",
    titleLead: "Berkeley mobile welding",
    intro: "Production Welding provides Berkeley mobile welding for property repairs, gate work, railings, custom brackets, equipment repairs, and small fabrication.",
    localFit: "Berkeley properties often need careful repair work around existing structures, older metalwork, and spaces where removal is not practical.",
    nearby: "Albany, Emeryville, Oakland, El Cerrito, and Alameda"
  },
  {
    name: "San Mateo",
    slug: "san-mateo",
    titleLead: "San Mateo mobile welding",
    intro: "Production Welding brings certified, insured mobile welding to San Mateo for gates, railings, metal repair, trailer repair, equipment repair, and custom fabrication.",
    localFit: "Mobile welding is a good fit when the repair is part of a building, vehicle, trailer, or fixed metal assembly that should stay on site; shop work is available when off-site welding makes more sense.",
    nearby: "Foster City, Burlingame, Redwood City, Belmont, and South San Francisco"
  },
  {
    name: "South San Francisco",
    slug: "south-san-francisco",
    titleLead: "South San Francisco mobile welding",
    intro: "Production Welding serves South San Francisco with mobile welding and repair welding for properties, contractors, shops, gates, railings, and metal assemblies.",
    localFit: "Industrial, commercial, and residential projects can move faster when a welder can meet the work in place and make practical repairs on site.",
    nearby: "San Francisco, Daly City, Brisbane, San Mateo, and Burlingame"
  },
  {
    name: "Fremont",
    slug: "fremont",
    titleLead: "Fremont mobile welding",
    intro: "Production Welding provides Fremont mobile welding for repair work, gates, handrails, trailers, equipment, brackets, and job-site fabrication.",
    localFit: "Fremont service calls often need durable repairs, direct communication, and a mobile setup that can handle work at homes, yards, shops, and commercial properties.",
    nearby: "Newark, Union City, Hayward, Milpitas, and San Jose"
  }
];

const cityHeroSlugs = {
  hayward: "gallery-08",
  oakland: "gallery-09",
  "san-jose": "gallery-10",
  "san-francisco": "gallery-11",
  alameda: "gallery-12",
  berkeley: "gallery-13",
  "san-mateo": "gallery-14",
  "south-san-francisco": "gallery-15",
  fremont: "gallery-16"
};

const serviceCards = [
  {
    title: "Mobile Welding",
    href: "mobile-welding.html",
    text: "On-site welding for homes, commercial properties, contractors, trailers, shops, yards, and field repairs.",
    items: ["Job-site repair welding", "Steel and metal assemblies", "Bay Area mobile service"]
  },
  {
    title: "Shop Welding",
    href: "custom-metal-fabrication.html",
    text: "Shop-based welding and fabrication for parts, brackets, gates, rails, repairs, and metal assemblies that are better handled off site.",
    items: ["Shop work", "Drop-off coordination", "No walk-in address"]
  },
  {
    title: "Gate, Fence, and Railing Welding",
    href: "gate-railing-welding.html",
    text: "Welding support for gate frames, hinges, handrails, stair rails, posts, brackets, and access points.",
    items: ["Gate repair and reinforcement", "Handrail and stair rail welding", "Metal fence and frame repairs"]
  },
  {
    title: "Trailer and Equipment Repair",
    href: "trailer-equipment-repair.html",
    text: "Practical weld repairs for trailers, utility equipment, metal brackets, cracked components, and broken assemblies.",
    items: ["Trailer frame repairs", "Equipment brackets", "Utility and shop repairs"]
  },
  {
    title: "Custom Metal Fabrication",
    href: "custom-metal-fabrication.html",
    text: "Small fabrication, field fitting, custom brackets, reinforcement plates, and metal details built around the project.",
    items: ["Custom steel details", "Repair plates and tabs", "Fit-up and finish work"]
  }
];

const servicePages = [
  {
    title: "Mobile Welding",
    slug: "mobile-welding",
    heroSlug: "mobile-welding",
    description: "Certified, insured mobile welding for homes, contractors, trailers, equipment, shops, yards, and Bay Area job sites, with shop work available.",
    intro: "When the metal is attached to a property, trailer, gate, machine, or job site, mobile service keeps the repair simple. Production Welding also handles shop work when a part or assembly is better welded off site.",
    bestFor: ["On-site weld repair", "Steel brackets and supports", "Field fabrication", "Property and facility repairs", "Trailer and equipment repairs", "Shop work"],
    process: ["Send photos and the job location", "Confirm access, material, and repair details", "Decide whether mobile service or shop work fits best", "Complete the repair or fabrication on site or in the shop"]
  },
  {
    title: "Gate and Railing Welding",
    slug: "gate-railing-welding",
    heroSlug: "gate-railing",
    description: "Gate and railing welding for hinges, frames, posts, brackets, handrails, stair rails, metal fence repairs, and access points across the Bay Area.",
    intro: "Gates and railings take daily abuse. Production Welding handles practical repair and reinforcement work for homes, apartments, shops, yards, and commercial properties.",
    bestFor: ["Gate hinge welding", "Gate frame repair", "Handrail and stair rail welding", "Post and bracket reinforcement", "Metal fence repair", "Access-point repairs"],
    process: ["Photograph the damaged gate or rail", "Share measurements and access notes", "Confirm whether repair or reinforcement is best", "Schedule the on-site welding visit"]
  },
  {
    title: "Trailer and Equipment Repair",
    slug: "trailer-equipment-repair",
    heroSlug: "trailer-equipment",
    description: "Bay Area mobile trailer and equipment welding repair for cracked metal, brackets, ramps, frames, tabs, utility trailers, and work equipment.",
    intro: "A broken trailer, bracket, ramp, or piece of equipment can stop work fast. Production Welding handles mobile repair welding when the item is better fixed where it sits.",
    bestFor: ["Trailer frame repair", "Ramp and tab welding", "Equipment brackets", "Utility trailer repairs", "Cracked metal components", "Shop and yard equipment"],
    process: ["Send clear photos of the damaged area", "Share trailer or equipment type", "Confirm repair access and safety needs", "Schedule a mobile repair visit"]
  },
  {
    title: "Custom Metal Fabrication",
    slug: "custom-metal-fabrication",
    heroSlug: "custom-fabrication",
    description: "Custom metal fabrication for brackets, plates, supports, field-fit steel details, reinforcement work, small fabrication, and repair parts near Hayward, CA.",
    intro: "Some jobs need a part made, fit, reinforced, or adjusted on site or in the shop. Production Welding handles small fabrication and custom metal details for practical real-world use.",
    bestFor: ["Custom brackets", "Reinforcement plates", "Tabs and supports", "Small steel details", "Shop fabrication", "Repair parts"],
    process: ["Send a sketch, photos, or measurements", "Confirm material and finish expectations", "Review fit-up, access, and shop-work needs", "Fabricate or weld the part into place"]
  },
  {
    title: "Commercial Welding",
    slug: "commercial-welding",
    heroSlug: "commercial-welding",
    description: "Commercial mobile welding for property managers, contractors, yards, storefronts, facilities, gates, railings, repairs, and job-site metal work in the Bay Area.",
    intro: "Commercial welding calls need clear communication, insurance, scheduling, and practical repair work. Production Welding supports property owners, managers, contractors, and facilities.",
    bestFor: ["Property maintenance welding", "Contractor welding support", "Commercial gate and railing repair", "Facility metal repairs", "Yard and shop repairs", "Job-site fabrication"],
    process: ["Send scope, photos, and site contact details", "Confirm insurance and scheduling needs", "Coordinate access and work area", "Complete the on-site welding work"]
  }
];

const reviews = [
  {
    name: "Ted Kugelman",
    date: "2023-09-30",
    source: "Public website review",
    rating: 5,
    text: "It was a pleasure to work with Ismael on my project. I designed a center support pole for a set of circular stairs that required flanges placed with considerable precision and welded in place. I was totally satisfied with the finished product; it more than met my expectations and made the construction of the stairs very easy."
  },
  {
    name: "Allison Fisher",
    date: "2023-03-11",
    source: "Google review",
    rating: 5,
    text: "Needed a welding job done on short notice and this business was able to accommodate me. They did a fantastic job!"
  },
  {
    name: "Roland Beausoleil",
    date: "2023-01-24",
    source: "Google review",
    rating: 5,
    text: "Used the welder and was amazed by the quality of work and friendly service. Mine did the job perfectly I highly recommend them for all your welding needs! thank you."
  },
  {
    name: "Jennifer Lopez",
    date: "2023-01-16",
    source: "Google review",
    rating: 5,
    text: "I recently used this welder and was blown away by the quality of work and the friendly service. I highly recommend them for all your welding needs!"
  },
  {
    name: "Maria Tinoco",
    date: "2022-05-22",
    source: "Google review",
    rating: 5,
    text: "Im very Satisfied! with the great and fast service. Ismael is very personal and knowledgeable. 100% recommend to who ever needs a great Professional Welder."
  },
  {
    name: "Lee Tavare",
    date: "2022-05-14",
    source: "Public website review",
    rating: 5,
    text: "Ismael came out very quickly and on a Saturday. I was amazed that he came out to the ranch right away. Did a small repair on a tractor at a very reasonable price. Was friendly and professional. Hate to say it but I can't wait to use him again."
  },
  {
    name: "T. Lynch",
    date: "2021-03-23",
    source: "Public website review",
    rating: 5,
    text: "I own a small manufacturing firm that consists of old equipment that needs welding repairs from time to time. I have worked with these guys for the past months and they have done nothing but satisfy me with their quality welding service. My old equipment now runs like they were bought yesterday and I am planning to have more of them repaired soon. Thanks!"
  }
];

const galleryItems = [
  ["Gate Repair", "On-site welding for hinges, frames, posts, latches, and reinforcement details."],
  ["Handrails and Stair Rails", "Certified welding for rail repairs, railing connections, brackets, and safety-minded fixes."],
  ["Trailer Welding", "Mobile trailer repair welding for cracked parts, tabs, brackets, ramps, and utility frames."],
  ["Equipment Repair", "Weld repair for metal equipment, shop fixtures, supports, frames, and field-use components."],
  ["Custom Brackets", "Small fabrication, fit-up, reinforcement plates, tabs, and custom metal details."],
  ["Commercial Welding", "Practical welding support for contractors, property managers, storefronts, yards, and facilities."]
];

const galleryCaptionPool = [
  ["Custom Gate and Entry Welding", "Mobile welding and fabrication for steel gates, entry frames, hinges, and access points."],
  ["Stair and Railing Welding", "On-site welding for stairs, guardrails, balcony rails, handrails, and structural railing details."],
  ["Structural Steel Fabrication", "Steel tube, beam, bracket, and frame welding for residential and commercial projects."],
  ["Trailer and Equipment Welding", "Practical weld repair for trailers, metal equipment, ramps, frames, tabs, and utility parts."],
  ["Commercial Site Welding", "Mobile welding support for contractors, yards, facilities, storefronts, and job-site metal work."],
  ["Pipe and Industrial Welding", "Welding for pipe assemblies, flanges, supports, equipment connections, and industrial details."],
  ["Canopy and Awning Steelwork", "Custom steel framing, support posts, and welded connections for shade structures and covers."],
  ["Fence and Security Metalwork", "Welded steel fence panels, security gates, posts, frames, and metal access repairs."]
];

const galleryCaptionOverrides = [
  ["Stair and Balcony Railing Welding", "Welded exterior stair rails, balcony guards, posts, and metal connections."],
  ["Decorative Iron Gate Welding", "Custom gate welding, hinge work, frames, and entry metalwork."],
  ["Steel Beam and Post Fabrication", "On-site steel beam, post, base plate, and bracket fabrication."],
  ["Custom Roof Metal Structure", "Custom fabricated roof steel structure with welded beams, framing, and support connections."],
  ["Custom Steel Roof Structure", "Steel roof structure fabrication with welded framing, beams, and job-site fit-up."],
  ["Job-Site Structural Steel Welding", "Mobile welding support for beams, frames, and construction steel."],
  ["Poolside Steel Frame Fabrication", "Custom steel framing and welded support work for exterior projects."],
  ["Roofline Steel Beam Repair", "Steel beam welding and reinforcement around roofline and framing conditions."],
  ["Custom Fabricated Planter Box", "Custom steel planter box fabrication for an exterior balcony and hillside property."],
  ["Steel Planter Box Fabrication", "Fabricated planter box metalwork built to fit the balcony and exterior wall conditions."],
  ["Custom Balcony Planter Box", "Custom fabricated planter box work with welded steel details for an exterior balcony."],
  ["Steel Post Base Welding", "Base plate, post, bracket, and connection welding for steel supports."],
  ["Interior Steel Support Welding", "Interior support steel welding for beams, posts, and structural details."],
  ["Parking Structure Metal Repair", "On-site welding for commercial parking, railing, and metal support repairs."],
  ["Roof Beam Reinforcement Welding", "Welded reinforcement for roof beams, brackets, and support members."],
  ["Steel Framework Fabrication", "Custom welded steel framework for exterior and commercial metal projects."],
  ["Soffit Steel Beam Repair", "Beam repair and reinforcement welding below overhangs and soffit areas."],
  ["Wall-Mounted Beam Installation", "Mobile welding for wall-mounted steel beams and support framing."],
  ["Interior Beam Connection Welding", "Welded steel connections for interior framing and support work."],
  ["Exterior Structural Beam Welding", "Exterior beam installation, welding, and steel connection support."],
  ["Steel Canopy Frame Fabrication", "Custom steel canopy and cover framing for exterior structures."],
  ["Dump Trailer Height Extension", "Custom fabricated trailer extension that raised the dump trailer walls for more hauling capacity."],
  ["Handrail and Stair Rail Welding", "Welding for handrails, stair rails, posts, brackets, and access rails."],
  ["Custom Truck Flatbed", "Custom fabricated flatbed truck body with welded steel framing, storage, and deck details."],
  ["Steel Post and Support Welding", "Welded posts, supports, base plates, and job-site metal components."],
  ["Shop Steel Frame Fabrication", "Steel frame layout, fabrication, repair, and fitting in the shop."],
  ["Custom Flatbed Truck", "Custom flatbed truck fabrication with welded frame, deck, and steel body details."],
  ["Workshop Fabrication and Repair", "Shop fabrication for steel assemblies, repairs, and custom metalwork."],
  ["Boat Repair Welding", "Boat repair welding and custom metal repair completed with mobile welding support."],
  ["Utility Trailer Deck Welding", "Welded trailer deck, frame, panel, and utility support repairs."],
  ["Security Screen and Enclosure Welding", "Custom welded steel screens, enclosures, gates, and site security metalwork."],
  ["Commercial Security Fence Welding", "Welded steel fence, gate, and commercial security metal fabrication."],
  ["Dump Trailer Metal Repair", "Repair welding for dump trailers, utility trailers, and heavy metal panels."],
  ["Metal Gate and Fence Installation", "Mobile welding for metal gates, posts, panels, and fence access points."],
  ["Exterior Stair Railing Welding", "Exterior stair rail welding for homes, decks, and multi-level access."],
  ["Custom Steel Gate Fabrication", "Modern steel gate fabrication, welding, fitting, and installation support."],
  ["Modern Steel Gate Welding", "Custom welded gate panels, posts, frames, and entry metalwork."],
  ["Side Yard Security Gate Welding", "Welded security gate and side-yard access metalwork for residential sites."],
  ["Chain Link Gate Post Welding", "Gate post, frame, and chain link access repair welding."],
  ["Trailer and Frame Fabrication", "Trailer frame, rail, bracket, and steel support fabrication."],
  ["Driveway Gate Fabrication", "Driveway gate welding, frame fabrication, posts, hinges, and installation support."],
  ["Steel Rail Fabrication On Site", "On-site rail fabrication, fit-up, and welded steel connections."],
  ["Heavy Bracket Repair Welding", "Heavy bracket, plate, tab, and support repair welding."],
  ["Commercial Gate Welding", "Commercial gate frame, hinge, rail, and access repair welding."],
  ["Steel Plate and Bracket Welding", "Welded plates, brackets, tabs, and reinforcement details."],
  ["Canopy Steel Support Welding", "Steel support posts and welded canopy framing for covered areas."],
  ["Shop Gate and Railing Fabrication", "Shop fabrication for gates, railings, frames, and custom metal assemblies."],
  ["Elevated Pipe Welding", "Pipe welding and support work for elevated or hard-to-access locations."],
  ["Flatbed Truck Fabrication", "Flatbed truck fabrication and welding with custom steel frame and deck work."],
  ["Pipe and Flange Welding", "Pipe, flange, connection, and support welding for industrial metalwork."],
  ["Driveway Security Gate Welding", "Driveway gate welding, security access frames, posts, and hinges."],
  ["Commercial Canopy Steelwork", "Steel canopy, post, and frame welding for commercial properties."],
  ["Industrial Pipe Flange Welding", "Industrial pipe flange welding, connection prep, and metal fitting."],
  ["Interior Pipe Seam Welding", "Interior pipe seam, support, and connection welding."],
  ["Site Utility Welding", "On-site welding for utility areas, supports, rails, and metal connections."],
  ["Pipe Support and Bracket Welding", "Pipe support, bracket, clamp, and connection welding."],
  ["Awning Frame Welding", "Awning, canopy, and exterior steel frame welding."],
  ["Interior Handrail Welding", "Interior handrail, guardrail, and access rail welding."],
  ["Flanged Pipe Assembly Welding", "Flanged pipe assembly welding, fitting, and support details."],
  ["Custom Stair Steel Support", "Custom fabricated steel support built for stairs with welded framing and fit-up details."]
];

const featuredWorkIndexes = [1, 2, 4, 22, 24, 29];

const servicePhotoIndexes = {
  "mobile-welding": [1, 22, 24],
  "gate-railing-welding": [1, 2, 23],
  "trailer-equipment-repair": [22, 24, 27],
  "custom-metal-fabrication": [4, 9, 60],
  "commercial-welding": [4, 5, 53]
};

const allFiles = [
  "index.html",
  "services.html",
  "gallery.html",
  "testimonials.html",
  "service-areas.html",
  "contact.html",
  "thank-you.html",
  ...servicePages.map(service => `${service.slug}.html`),
  ...cities.map(city => `${city.slug}-mobile-welding.html`)
];

const sitemapFiles = allFiles.filter(file => file !== "thank-you.html");

function writeFile(relativePath, content) {
  fs.writeFileSync(path.join(root, relativePath), content.trim() + "\n", "utf8");
}

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function canonical(file) {
  return file === "index.html" ? `${site.url}/` : `${site.url}/${file}`;
}

function areaServedSchema() {
  return [
    ...cities.map(city => ({ "@type": "City", name: city.name })),
    { "@type": "Place", name: "Bay Area communities near Hayward" }
  ];
}

function businessNode() {
  return {
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${site.url}/#business`,
    name: site.name,
    url: `${site.url}/`,
    logo: `${site.url}/${site.logo}`,
    image: `${site.url}/${site.logo}`,
    telephone: "+1-510-589-4985",
    email: site.email,
    slogan: site.slogan,
    priceRange: "$$",
    description: "Certified and insured mobile and shop welding service based near Hayward, CA and serving the Bay Area.",
    areaServed: areaServedSchema(),
    knowsAbout: [
      "Mobile welding",
      "Shop welding",
      "Weld repair",
      "Gate welding",
      "Railing welding",
      "Trailer welding repair",
      "Equipment welding repair",
      "Custom metal fabrication",
      "Commercial welding"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-510-589-4985",
      email: site.email,
      contactType: "customer service",
      areaServed: "US-CA",
      availableLanguage: ["English", "Spanish"]
    }
  };
}

function baseSchema(extraNodes = []) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      businessNode(),
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        name: site.name,
        url: `${site.url}/`,
        publisher: { "@id": `${site.url}/#business` }
      },
      ...extraNodes
    ]
  };
}

function faqSchema(faqs) {
  return {
    "@type": "FAQPage",
    "@id": `${site.url}/#faq`,
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a
      }
    }))
  };
}

function serviceSchema(name, file, areaName = site.serviceArea) {
  return {
    "@type": "Service",
    "@id": `${canonical(file)}#service`,
    name,
    url: canonical(file),
    provider: { "@id": `${site.url}/#business` },
    serviceType: "Mobile welding, shop welding, weld repair, gate welding, railing welding, trailer welding repair, commercial welding, and custom metal fabrication",
    areaServed: [{ "@type": "Place", name: areaName }]
  };
}

function reviewNodes(list) {
  return list.map((review, index) => ({
    "@type": "Review",
    "@id": `${site.url}/#review-${index + 1}`,
    itemReviewed: { "@id": `${site.url}/#business` },
    author: { "@type": "Person", name: review.name },
    datePublished: review.date,
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(review.rating || 5),
      bestRating: "5",
      worstRating: "1"
    },
    reviewBody: review.text,
    publisher: { "@type": "Organization", name: review.source }
  }));
}

function aggregateRatingNode(list) {
  const total = list.reduce((sum, review) => sum + Number(review.rating || 5), 0);
  const average = total / list.length;
  return {
    "@type": "AggregateRating",
    "@id": `${site.url}/#aggregate-rating`,
    itemReviewed: { "@id": `${site.url}/#business` },
    ratingValue: average.toFixed(1),
    reviewCount: String(list.length),
    bestRating: "5",
    worstRating: "1"
  };
}

function header() {
  const nav = [
    ["index.html", "Home"],
    ["services.html", "Services"],
    ["gallery.html", "Gallery"],
    ["testimonials.html", "Reviews"],
    ["service-areas.html", "Service Areas"],
    ["contact.html", "Contact"]
  ];

  return `
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header">
      <a class="brand" href="index.html" aria-label="Production Welding home">
        <img src="${site.logo}" alt="Production Welding logo">
        <span>${site.slogan}</span>
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>
      <nav class="site-nav" id="site-nav" aria-label="Primary navigation">
        ${nav.map(([href, label]) => `<a href="${href}">${label}</a>`).join("")}
      </nav>
      <a class="header-call" href="${site.phoneHref}">${site.phone}</a>
    </header>
  `;
}

function footer() {
  const cityLinks = cities.map(city => `<a href="${city.slug}-mobile-welding.html">${city.name}</a>`).join("");
  return `
    <footer class="site-footer">
      <div class="footer-main">
        <div>
          <img class="footer-logo" src="${site.logo}" alt="Production Welding logo">
          <p>Certified and insured mobile and shop welding service based near Hayward, CA. Serving homes, commercial properties, contractors, trailers, equipment owners, shop projects, and job sites across ${site.serviceArea}.</p>
          <div class="footer-actions">
            <a href="${site.phoneHref}">${site.phone}</a>
            <a href="${site.emailHref}">${site.email}</a>
          </div>
        </div>
        <div>
          <h2>Services</h2>
          ${servicePages.map(service => `<a href="${service.slug}.html">${service.title}</a>`).join("")}
        </div>
        <div>
          <h2>Service Areas</h2>
          <div class="footer-city-grid">${cityLinks}</div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; 2026 Production Welding. All rights reserved.</span>
        <span>Mobile welding and shop work - no public shop address.</span>
      </div>
    </footer>
  `;
}

function mobileActionBar() {
  return `
    <div class="mobile-action-bar" aria-label="Quick contact actions">
      <a href="${site.phoneHref}">Call Now</a>
      <a href="contact.html">Send Photos</a>
    </div>
  `;
}

function layout({ file, title, description, bodyClass = "", body, schema, robots = "index, follow", preloads = [] }) {
  const schemaJson = JSON.stringify(schema || baseSchema(), null, 2).replace(/</g, "\\u003c");
  const ogTitle = esc(title);
  const ogDescription = esc(description);
  const url = canonical(file);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${ogTitle}</title>
  <meta name="description" content="${ogDescription}">
  <meta name="robots" content="${robots}">
  <link rel="canonical" href="${url}">
  <meta property="og:locale" content="en_US">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${esc(site.name)}">
  <meta property="og:title" content="${ogTitle}">
  <meta property="og:description" content="${ogDescription}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${site.url}/${site.logo}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${ogTitle}">
  <meta name="twitter:description" content="${ogDescription}">
  <meta name="twitter:image" content="${site.url}/${site.logo}">
  <script type="application/ld+json">${schemaJson}</script>
  <link rel="preload" href="assets/fonts/outfit.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="assets/fonts/roboto-slab.woff2" as="font" type="font/woff2" crossorigin>${preloads.map(p => `\n  ${p}`).join("")}
  <link rel="stylesheet" href="styles.css">
  <link rel="icon" type="image/svg+xml" href="favicon.svg">
  <link rel="icon" type="image/png" sizes="32x32" href="favicon-32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="favicon-16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
</head>
<body class="${bodyClass}">
  ${header()}
  <main id="main">
    ${body}
  </main>
  ${footer()}
  ${mobileActionBar()}
  <script src="script.js"></script>
</body>
</html>`;
}

function ctaBand() {
  return `
    <section class="cta-band">
      <div>
        <p class="eyebrow">Get a Welding Estimate</p>
        <h2>Need a certified, insured welder for mobile or shop work?</h2>
        <p>Call Production Welding or send the project details, location, photos, and timing. Mobile service and shop work are available across ${site.serviceArea}.</p>
      </div>
      <div class="cta-actions">
        <a class="button button-dark" href="${site.phoneHref}">Call ${site.phone}</a>
        <a class="button button-light" href="contact.html">Request an Estimate</a>
      </div>
    </section>
  `;
}

function serviceCardMarkup(cards = serviceCards) {
  return cards.map((card, index) => {
    const slug = card.href ? card.href.replace(/\.html$/, "") : `service-${index + 1}`;
    return `
    <article class="service-card" id="${slug}">
      <div class="card-number">${String(index + 1).padStart(2, "0")}</div>
      <h3>${esc(card.title)}</h3>
      <p>${esc(card.text)}</p>
      <ul>
        ${card.items.map(item => `<li>${esc(item)}</li>`).join("")}
      </ul>
      ${card.href ? `<a class="card-link" href="${card.href}">Learn more</a>` : ""}
    </article>
  `;
  }).join("");
}

function cityLinkGrid() {
  return cities.map(city => `
    <a class="city-link" href="${city.slug}-mobile-welding.html">
      <strong>${city.name}</strong>
      <span>Mobile welding, shop work, repairs, gates, railings, and fabrication</span>
    </a>
  `).join("");
}

function getGalleryPhotos() {
  const galleryDir = path.join(root, "assets", "gallery");
  if (!fs.existsSync(galleryDir)) return [];

  return fs.readdirSync(galleryDir)
    .filter(file => /^production-welding-project-\d+\.jpg$/i.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file, index) => {
      const caption = galleryCaptionOverrides[index] || galleryCaptionPool[index % galleryCaptionPool.length];
      const thumb = `thumb-${file}`;
      return {
        src: `assets/gallery/${file}`,
        thumb: fs.existsSync(path.join(galleryDir, thumb)) ? `assets/gallery/${thumb}` : `assets/gallery/${file}`,
        title: caption[0],
        text: caption[1],
        alt: caption[1]
      };
    });
}

function selectGalleryPhotos(indexes) {
  const photos = getGalleryPhotos();
  return indexes
    .map(index => photos[index - 1])
    .filter(Boolean);
}

function galleryHeroSrc(slug) {
  const match = /^gallery-(\d+)$/.exec(slug);
  if (!match) return "";
  return `assets/gallery/production-welding-project-${match[1].padStart(2, "0")}.jpg`;
}

function isGalleryHero(slug) {
  return /^gallery-\d+$/.test(slug);
}

function projectPhotoCards(indexes) {
  return selectGalleryPhotos(indexes).map(photo => `
    <article class="project-photo-card">
      <a class="project-photo-link" href="gallery.html" aria-label="Open gallery to view ${esc(photo.title)}">
        <img src="${photo.thumb}" alt="${esc(photo.alt)}" loading="lazy" decoding="async">
      </a>
      <h3>${esc(photo.title)}</h3>
      <p>${esc(photo.text)}</p>
    </article>
  `).join("");
}

function projectPhotoSection(indexes, eyebrow, title, text, className = "") {
  const cards = projectPhotoCards(indexes);
  if (!cards) return "";
  return `
    <section class="section project-photo-section ${className}">
      <div class="section-heading">
        <p class="eyebrow">${esc(eyebrow)}</p>
        <h2>${esc(title)}</h2>
        ${text ? `<p>${esc(text)}</p>` : ""}
      </div>
      <div class="project-photo-grid">
        ${cards}
      </div>
      <div class="center-actions">
        <a class="button button-dark" href="gallery.html">View Full Gallery</a>
      </div>
    </section>
  `;
}

function starRating(review) {
  const rating = Number(review.rating || 5);
  const stars = "&#9733;".repeat(Math.max(0, Math.min(5, rating)));
  return `<div class="star-rating" aria-label="${rating} out of 5 star review"><span>${stars}</span><strong>${rating}.0</strong></div>`;
}

function reviewMeta(review) {
  return review.date ? `${esc(review.source)} - ${esc(review.date)}` : esc(review.source);
}

function homePage() {
  const file = "index.html";
  const faqs = [
    {
      q: "Does Production Welding have a public shop address?",
      a: "Production Welding handles mobile welding and shop work, but the shop address is not published for walk-in traffic. Call or send photos first so the work can be reviewed properly."
    },
    {
      q: "What area does Production Welding serve?",
      a: "Production Welding serves the Bay Area from Hayward, including Hayward, Oakland, San Jose, San Francisco, Alameda, Berkeley, San Mateo, South San Francisco, Fremont, and nearby communities."
    },
    {
      q: "Is Production Welding certified and insured?",
      a: "Yes. Production Welding is led by a certified and insured welder."
    },
    {
      q: "What kind of welding work does Production Welding handle?",
      a: "Common work includes mobile welding, shop welding, weld repair, gate welding, railing welding, trailer repair, equipment repair, custom brackets, and small fabrication."
    }
  ];

  return layout({
    file,
    title: "Production Welding | Mobile and Shop Welding in Hayward, CA",
    description: "Certified, insured Bay Area mobile and shop welding based near Hayward, CA for weld repair, gates, railings, trailers, equipment, and fabrication.",
    bodyClass: "home",
    schema: baseSchema([
      serviceSchema("Mobile and Shop Welding Service in Hayward, CA", file),
      faqSchema(faqs),
      aggregateRatingNode(reviews),
      ...reviewNodes(reviews.slice(0, 3))
    ]),
    preloads: [
      `<link rel="preload" as="image" href="assets/video/production-welding-hero-poster.jpg">`
    ],
    body: `
      <section class="hero hero-with-image">
        <picture class="hero-image">
          <img src="assets/video/production-welding-hero-poster.jpg" alt="Production Welding setting a steel beam on a Bay Area job site" fetchpriority="high" decoding="async">
        </picture>
        <video class="hero-video" autoplay muted loop playsinline preload="metadata" poster="assets/video/production-welding-hero-poster.jpg" aria-hidden="true">
          <source src="assets/video/production-welding-hero.mp4" type="video/mp4">
        </video>
        <div class="hero-inner">
          <p class="eyebrow">Mobile and Shop Welding - Hayward, CA</p>
          <h1>Certified, insured welding across the Bay Area.</h1>
          <p class="hero-copy">Production Welding handles mobile welding and shop work for repair welding, gates, railings, trailers, equipment, custom brackets, and fabrication across the Bay Area.</p>
          <div class="hero-actions">
            <a class="button button-dark" href="${site.phoneHref}">Call ${site.phone}</a>
            <a class="button button-light" href="services.html">View Services</a>
          </div>
          <div class="trust-row" aria-label="Production Welding highlights">
            <span>Certified Welder</span>
            <span>Insured</span>
            <span>Mobile Service</span>
            <span>Shop Work</span>
            <span>${site.serviceAreaBadge}</span>
          </div>
        </div>
      </section>

      <section class="section intro-section">
        <div class="section-heading">
          <p class="eyebrow">Built Around Real Welding Needs</p>
          <h2>Mobile and shop welding for repairs, gates, railings, trailers, and custom metal work.</h2>
        </div>
        <div class="intro-grid">
          <div>
            <h3>Mobile welding that comes to you.</h3>
            <p>For fixed gates, railings, trailers, equipment, and job-site repairs, send the location, photos, and project details so Production Welding can review the work before scheduling the visit.</p>
          </div>
          <div>
            <h3>Shop work.</h3>
            <p>Parts, brackets, gates, rail sections, and metal assemblies can be handled as shop work when that is the better fit. The shop address stays private, so call or send photos first.</p>
          </div>
          <div>
            <h3>Serving the Bay Area from Hayward.</h3>
            <p>Production Welding serves Bay Area homes, businesses, contractors, yards, trailers, shop projects, and job sites from a Hayward base.</p>
          </div>
        </div>
      </section>

      <section class="section section-contrast">
        <div class="section-heading">
          <p class="eyebrow">Services</p>
          <h2>Mobile welding, shop welding, repair welding, and fabrication support.</h2>
        </div>
        <div class="service-grid">
          ${serviceCardMarkup()}
        </div>
      </section>

      ${projectPhotoSection(
        featuredWorkIndexes,
        "Recent Work",
        "Real welding projects from the Bay Area.",
        "A quick look at Production Welding projects including railings, gates, roof steel, trailer work, flatbeds, and boat repair.",
        "recent-work-section"
      )}

      <section class="section">
        <div class="split">
          <div>
            <p class="eyebrow">Bay Area Service</p>
            <h2>Mobile and shop welding across the Bay Area from Hayward, CA.</h2>
            <p>Production Welding covers East Bay, Peninsula, South Bay, nearby job sites, and shop work. Open a city page below to confirm local welding service for that area.</p>
            <a class="text-link" href="service-areas.html">See all service areas</a>
          </div>
          <div class="city-grid">
            ${cityLinkGrid()}
          </div>
        </div>
      </section>

      <section class="section section-contrast">
        <div class="section-heading">
          <p class="eyebrow">Customer Reviews</p>
          <h2>Real customer feedback from Production Welding customers.</h2>
        </div>
        <div class="review-grid review-grid-home">
          ${reviews.slice(0, 3).map(review => `
            <article class="review-card">
              ${starRating(review)}
              <p>"${esc(review.text)}"</p>
              <footer>
                <strong>${esc(review.name)}</strong>
                <span>${esc(review.source)}</span>
              </footer>
            </article>
          `).join("")}
        </div>
        <div class="center-actions">
          <a class="button button-dark" href="testimonials.html">Read Reviews</a>
        </div>
      </section>

      <section class="section faq-section">
        <div class="section-heading">
          <p class="eyebrow">Common Questions</p>
          <h2>Helpful answers before you call.</h2>
        </div>
        <div class="faq-list">
          ${faqs.map(faq => `
            <details>
              <summary>${esc(faq.q)}</summary>
              <p>${esc(faq.a)}</p>
            </details>
          `).join("")}
        </div>
      </section>

      ${ctaBand()}
    `
  });
}

function servicesPage() {
  const file = "services.html";
  const heroSlug = "gallery-01";
  return layout({
    file,
    title: "Mobile and Shop Welding Services | Production Welding Hayward, CA",
    description: "Mobile and shop welding services for weld repair, gates, railings, trailers, equipment, construction support, and fabrication near Hayward, CA.",
    bodyClass: "services-page",
    schema: baseSchema([
      serviceSchema("Mobile and Shop Welding Services", file)
    ]),
    preloads: [heroPreloadLink(heroSlug)],
    body: `
      ${pageHero({
        eyebrow: "Services",
        title: "Mobile and shop welding services for repairs and custom metal work.",
        text: "Production Welding is built for practical service calls and shop work: get the welding setup where it fits best, make the repair correctly, and leave the project stronger than it was.",
        heroSlug,
        altText: "Mobile and shop welding service work by Production Welding"
      })}

      <section class="section">
        <div class="service-grid wide">
          ${serviceCardMarkup([
            ...serviceCards,
            {
              title: "Construction Welding Support",
              href: "commercial-welding.html",
              text: "Welding support for contractors and property owners who need on-site fit-up, reinforcement, repair, or metal details completed cleanly.",
              items: ["Job-site welding", "Steel connections and supports", "Commercial repair work"]
            },
            {
              title: "Emergency Repair Requests",
              href: "contact.html",
              text: "When a broken gate, trailer, bracket, rail, or piece of equipment is holding up the day, call with photos and location details.",
              items: ["Fast project review", "Photo-based estimates when possible", "Clear scheduling and communication"]
            }
          ])}
        </div>
      </section>

      <section class="section section-contrast">
        <div class="split">
          <div>
            <p class="eyebrow">How It Works</p>
            <h2>Simple photo-based estimating.</h2>
            <p>Send photos, measurements, project location, access notes, and the timeline. Production Welding will review the project and recommend mobile service or shop work when the scope is a good fit.</p>
          </div>
          <ol class="process-list">
            <li><strong>Call or email.</strong><span>Share the repair, fabrication need, or welding issue.</span></li>
            <li><strong>Send photos.</strong><span>Photos help confirm material, access, prep work, and whether the repair can be done on site.</span></li>
            <li><strong>Schedule the service.</strong><span>A certified, insured welder comes to the job site or coordinates shop work.</span></li>
          </ol>
        </div>
      </section>

      ${ctaBand()}
    `
  });
}

function heroPicture(slug, altText) {
  if (isGalleryHero(slug)) {
    return `<picture class="hero-image">
          <img src="${galleryHeroSrc(slug)}" alt="${esc(altText)}" fetchpriority="high" decoding="async">
        </picture>`;
  }

  return `<picture class="hero-image">
          <source type="image/webp" srcset="assets/hero/hero-${slug}-768.webp 768w, assets/hero/hero-${slug}-1200.webp 1200w, assets/hero/hero-${slug}-1600.webp 1600w" sizes="100vw">
          <img src="assets/hero/hero-${slug}-1600.jpg" srcset="assets/hero/hero-${slug}-768.jpg 768w, assets/hero/hero-${slug}-1200.jpg 1200w, assets/hero/hero-${slug}-1600.jpg 1600w" sizes="100vw" alt="${esc(altText)}" fetchpriority="high" decoding="async">
        </picture>`;
}

function heroPreloadLink(slug) {
  if (isGalleryHero(slug)) {
    return `<link rel="preload" as="image" href="${galleryHeroSrc(slug)}">`;
  }

  return `<link rel="preload" as="image" href="assets/hero/hero-${slug}-1600.webp" imagesrcset="assets/hero/hero-${slug}-768.webp 768w, assets/hero/hero-${slug}-1200.webp 1200w, assets/hero/hero-${slug}-1600.webp 1600w" imagesizes="100vw" type="image/webp">`;
}

function pageHero({ eyebrow, title, text, heroSlug, altText, actions = "" }) {
  return `<section class="page-hero page-hero-with-image">
        ${heroPicture(heroSlug, altText)}
        <div class="page-hero-inner">
          <p class="eyebrow">${esc(eyebrow)}</p>
          <h1>${esc(title)}</h1>
          <p>${esc(text)}</p>
          ${actions}
        </div>
      </section>`;
}

function detailServicePage(service) {
  const file = `${service.slug}.html`;
  const heroSlug = service.heroSlug;
  return layout({
    file,
    title: `${service.title} | Production Welding Hayward, CA`,
    description: service.description,
    bodyClass: "service-detail-page",
    schema: baseSchema([
      serviceSchema(service.title, file)
    ]),
    preloads: heroSlug ? [heroPreloadLink(heroSlug)] : [],
    body: `
      <section class="page-hero${heroSlug ? " page-hero-with-image" : ""}">
        ${heroSlug ? heroPicture(heroSlug, `${service.title} project by Production Welding`) : ""}
        <div class="page-hero-inner">
          <p class="eyebrow">${esc(service.title)}</p>
          <h1>${esc(service.title)} across the Bay Area.</h1>
          <p>${esc(service.intro)}</p>
          <div class="hero-actions">
            <a class="button button-dark" href="${site.phoneHref}">Call ${site.phone}</a>
            <a class="button button-light" href="contact.html">Send Photos for an Estimate</a>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="split">
          <div>
            <p class="eyebrow">Good Fit Projects</p>
            <h2>Where this service helps most.</h2>
            <p>Production Welding handles mobile and shop work, so the fastest way to quote accurately is to send photos, measurements, the job city, and any access details.</p>
          </div>
          <div class="area-panel">
            <strong>${esc(service.title)} includes</strong>
            ${service.bestFor.map(item => `<span>${esc(item)}</span>`).join("")}
          </div>
        </div>
      </section>

      ${projectPhotoSection(
        servicePhotoIndexes[service.slug] || featuredWorkIndexes.slice(0, 3),
        "Project Examples",
        `Real ${service.title.toLowerCase()} work.`,
        "A few examples from the Production Welding project gallery that match this service.",
        "service-examples-section"
      )}

      <section class="section section-contrast">
        <div class="split">
          <div>
            <p class="eyebrow">Estimate Process</p>
            <h2>Designed for fast photo-based review.</h2>
            <p>Photos help confirm whether the material can be welded safely on site, whether shop work is a better fit, what prep is needed, and which tools should be used.</p>
          </div>
          <ol class="process-list">
            ${service.process.map((step, index) => `<li><strong>Step ${index + 1}</strong><span>${esc(step)}</span></li>`).join("")}
          </ol>
        </div>
      </section>

      <section class="section">
        <div class="section-heading">
          <p class="eyebrow">Related Services</p>
          <h2>More welding support from Production Welding.</h2>
        </div>
        <div class="service-grid wide">
          ${serviceCardMarkup(servicePages.filter(other => other.slug !== service.slug).slice(0, 3).map(other => ({
            title: other.title,
            href: `${other.slug}.html`,
            text: other.intro,
            items: other.bestFor.slice(0, 3)
          })))}
        </div>
      </section>

      ${ctaBand()}
    `
  });
}

function serviceAreasPage() {
  const file = "service-areas.html";
  const heroSlug = "gallery-02";
  return layout({
    file,
    title: "Service Areas | Mobile and Shop Welder Near Hayward, CA",
    description: "Production Welding serves the Bay Area from Hayward, CA with mobile welding, shop welding, weld repair, gates, railings, trailers, equipment, and fabrication.",
    bodyClass: "areas-page",
    schema: baseSchema([
      serviceSchema("Mobile and Shop Welding Service Areas", file)
    ]),
    preloads: [heroPreloadLink(heroSlug)],
    body: `
      ${pageHero({
        eyebrow: "Service Areas",
        title: "Bay Area mobile and shop welding service based near Hayward, CA.",
        text: "Production Welding serves homes, commercial properties, shops, yards, trailers, equipment, job sites, and shop projects across the Bay Area.",
        heroSlug,
        altText: "Bay Area mobile welding project by Production Welding"
      })}

      <section class="section">
        <div class="section-heading">
          <p class="eyebrow">City Landing Pages</p>
          <h2>Core Bay Area city coverage for welding service calls.</h2>
        </div>
        <div class="city-grid city-grid-large">
          ${cityLinkGrid()}
        </div>
      </section>

      <section class="section section-contrast">
        <div class="split">
          <div>
            <p class="eyebrow">No Public Shop Address</p>
            <h2>Shop work is available, but the address stays private.</h2>
            <p>Production Welding handles mobile service and shop work, but customers should call or email with photos, project details, and scheduling needs instead of driving to a storefront.</p>
          </div>
          <div class="area-panel">
            <strong>Common service requests</strong>
            <span>Gate welding and hinge repair</span>
            <span>Handrails, stair rails, and brackets</span>
            <span>Trailer and equipment welding</span>
            <span>Commercial and residential repair welding</span>
            <span>Custom metal fabrication</span>
            <span>Shop welding</span>
          </div>
        </div>
      </section>

      ${ctaBand()}
    `
  });
}

function galleryPage() {
  const file = "gallery.html";
  const photos = getGalleryPhotos();
  const heroSlug = "gallery-03";
  return layout({
    file,
    title: "Gallery | Production Welding Projects",
    description: "Production Welding gallery for mobile welding, shop welding, repair welding, gate welding, railing welding, trailer repair, equipment repair, and custom fabrication projects.",
    bodyClass: "gallery-page",
    schema: baseSchema(),
    preloads: [heroPreloadLink(heroSlug)],
    body: `
      ${pageHero({
        eyebrow: "Gallery",
        title: "Welding project gallery.",
        text: "Browse real Production Welding project photos including gates, railings, stairs, trailers, steel framing, pipe work, shop work, and custom metal fabrication.",
        heroSlug,
        altText: "Steel roof structure welding project by Production Welding"
      })}

      <section class="section">
        ${photos.length ? `
        <div class="gallery-count">
          <p class="eyebrow">Project Photos</p>
          <h2>${photos.length} real welding project photos</h2>
        </div>
        <div class="gallery-grid gallery-photo-grid">
          ${photos.map((photo, index) => `
            <article class="gallery-card gallery-photo-card">
              <button class="gallery-image-button" type="button" data-gallery-src="${photo.src}" data-gallery-alt="${esc(photo.alt)}" data-gallery-caption="${esc(photo.title)}">
                <img src="${photo.thumb}" alt="${esc(photo.alt)}" loading="${index < 6 ? "eager" : "lazy"}" decoding="async">
              </button>
              <h2>${esc(photo.title)}</h2>
              <p>${esc(photo.text)}</p>
            </article>
          `).join("")}
        </div>
        <div class="gallery-lightbox" hidden aria-hidden="true">
          <button class="gallery-lightbox-close" type="button" aria-label="Close project photo">Close</button>
          <figure>
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==" alt="Selected Production Welding project photo">
            <figcaption></figcaption>
          </figure>
        </div>
        ` : `
        <div class="gallery-grid">
          ${galleryItems.map(([title, text], index) => `
            <article class="gallery-card">
              <div class="gallery-placeholder" aria-label="${esc(title)} project photo placeholder">
                <span>${String(index + 1).padStart(2, "0")}</span>
              </div>
              <h2>${esc(title)}</h2>
              <p>${esc(text)}</p>
            </article>
          `).join("")}
        </div>
        `}
      </section>

      ${ctaBand()}
    `
  });
}

function testimonialsPage() {
  const file = "testimonials.html";
  const heroSlug = "gallery-04";
  return layout({
    file,
    title: "Testimonials | Production Welding Reviews",
    description: "Read customer reviews for Production Welding, a certified and insured mobile and shop welding service serving Hayward and nearby Bay Area cities.",
    bodyClass: "testimonials-page",
    schema: baseSchema([
      aggregateRatingNode(reviews),
      ...reviewNodes(reviews)
    ]),
    preloads: [heroPreloadLink(heroSlug)],
    body: `
      ${pageHero({
        eyebrow: "Testimonials",
        title: "Actual customer reviews for Production Welding.",
        text: "Read verified public review snippets from customers who hired Production Welding for welding, repair, and fabrication work.",
        heroSlug,
        altText: "Gate and railing welding work by Production Welding"
      })}

      <section class="section">
        <div class="review-grid">
          ${reviews.map(review => `
            <article class="review-card review-card-large">
              ${starRating(review)}
              <p>"${esc(review.text)}"</p>
              <footer>
                <strong>${esc(review.name)}</strong>
                <span>${reviewMeta(review)}</span>
              </footer>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="section section-contrast">
        <div class="split">
          <div>
            <p class="eyebrow">More Reviews</p>
            <h2>Customer feedback helps local homeowners and contractors choose the right welder.</h2>
          </div>
          <p>After each completed job, Production Welding welcomes honest Google reviews about the service, communication, project type, and finished weld work.</p>
        </div>
      </section>

      ${ctaBand()}
    `
  });
}

function contactPage() {
  const file = "contact.html";
  const heroSlug = "gallery-05";
  return layout({
    file,
    title: "Contact Production Welding | Mobile and Shop Welder Hayward, CA",
    description: "Call Production Welding at (510) 589-4985 or email Ismael@Productionwelding.org for certified, insured Bay Area mobile and shop welding.",
    bodyClass: "contact-page",
    schema: baseSchema(),
    preloads: [heroPreloadLink(heroSlug)],
    body: `
      ${pageHero({
        eyebrow: "Contact",
        title: "Request a welding estimate.",
        text: "Call, email, or send the form with photos, project details, site or shop-work needs, measurements, and timing.",
        heroSlug,
        altText: "Custom metal fabrication work by Production Welding"
      })}

      <section class="section contact-layout">
        <div class="contact-card">
          <h2>Production Welding</h2>
          <p>Certified and insured mobile and shop welding service based near Hayward, CA. No public shop address. Call or send photos first for mobile visits and shop work.</p>
          <a href="${site.phoneHref}">${site.phone}</a>
          <a href="${site.emailHref}">${site.email}</a>
          <span>${site.serviceAreaBadge}</span>
        </div>

        <form class="contact-form" name="production-welding-estimate" method="POST" enctype="multipart/form-data" data-netlify="true" netlify-honeypot="bot-field" action="thank-you.html">
          <input type="hidden" name="form-name" value="production-welding-estimate">
          <p class="hidden">
            <label>Do not fill this out: <input name="bot-field"></label>
          </p>
          <label>
            Name
            <input type="text" name="name" autocomplete="name" required>
          </label>
          <label>
            Phone
            <input type="tel" name="phone" autocomplete="tel" required>
          </label>
          <label>
            Email
            <input type="email" name="email" autocomplete="email">
          </label>
          <label>
            Job Location or Shop Work City
            <input type="text" name="city" autocomplete="address-level2" placeholder="Example: Hayward, CA">
          </label>
          <label>
            What do you need welded?
            <textarea name="message" rows="6" required placeholder="Tell us about the repair, fabrication, gate, railing, trailer, equipment, shop welding, or job-site welding request."></textarea>
          </label>
          <label>
            Project Photos
            <input type="file" name="project-photos" accept="image/*" multiple>
            <span class="field-note">Upload photos of the damaged area, gate, trailer, railing, bracket, equipment, or part so the estimate can be reviewed faster.</span>
          </label>
          <button class="button button-dark" type="submit">Send Request</button>
        </form>
      </section>
    `
  });
}

function notFoundPage() {
  const file = "404.html";
  const heroSlug = "gallery-06";
  return layout({
    file,
    title: "Page Not Found | Production Welding",
    description: "The page you were looking for is not available. Return to Production Welding for mobile and shop welding service in Hayward, CA.",
    bodyClass: "not-found-page",
    robots: "noindex, follow",
    schema: baseSchema(),
    preloads: [heroPreloadLink(heroSlug)],
    body: `
      ${pageHero({
        eyebrow: "404",
        title: "That page is not available.",
        text: `The link may be old, mistyped, or removed. Return home or call ${site.phone} for welding service.`,
        heroSlug,
        altText: "Commercial welding project by Production Welding",
        actions: `<div class="hero-actions">
          <a class="button button-dark" href="${site.phoneHref}">Call ${site.phone}</a>
          <a class="button button-light" href="index.html">Back Home</a>
        </div>`
      })}

      <section class="section">
        <div class="section-heading">
          <p class="eyebrow">Try one of these</p>
          <h2>Popular pages</h2>
        </div>
        <div class="city-grid city-grid-large">
          <a class="city-link" href="services.html"><strong>Services</strong><span>Mobile welding, shop work, repair, fabrication</span></a>
          <a class="city-link" href="gallery.html"><strong>Gallery</strong><span>Real welding project photos</span></a>
          <a class="city-link" href="service-areas.html"><strong>Service Areas</strong><span>Bay Area mobile welding cities</span></a>
          <a class="city-link" href="testimonials.html"><strong>Reviews</strong><span>Customer feedback</span></a>
          <a class="city-link" href="contact.html"><strong>Contact</strong><span>Send photos and details</span></a>
        </div>
      </section>
    `
  });
}

function thankYouPage() {
  const file = "thank-you.html";
  const heroSlug = "gallery-07";
  return layout({
    file,
    title: "Thank You | Production Welding",
    description: "Thank you for contacting Production Welding. We will review your welding request and respond as soon as possible.",
    bodyClass: "thank-you-page",
    robots: "noindex, nofollow",
    schema: baseSchema(),
    preloads: [heroPreloadLink(heroSlug)],
    body: `
      ${pageHero({
        eyebrow: "Request Sent",
        title: "Thank you for contacting Production Welding.",
        text: `Your request has been received. For urgent welding needs, call ${site.phone}.`,
        heroSlug,
        altText: "Welding project by Production Welding",
        actions: `<div class="hero-actions">
          <a class="button button-dark" href="${site.phoneHref}">Call ${site.phone}</a>
          <a class="button button-light" href="index.html">Back Home</a>
        </div>`
      })}
    `
  });
}

function cityPage(city) {
  const file = `${city.slug}-mobile-welding.html`;
  const title = `${city.name} Mobile and Shop Welding | Production Welding`;
  const description = `Mobile and shop welding in ${city.name}, CA for weld repair, gates, railings, trailers, equipment, and custom metal work. Call ${site.phone}.`;
  const heroSlug = cityHeroSlugs[city.slug] || "gallery-08";

  return layout({
    file,
    title,
    description,
    bodyClass: "city-page",
    schema: baseSchema([
      serviceSchema(`${city.name} Mobile and Shop Welding`, file, `${city.name}, CA`)
    ]),
    preloads: [heroPreloadLink(heroSlug)],
    body: `
      ${pageHero({
        eyebrow: `${city.name} Welding Service`,
        title: `Certified, insured mobile and shop welding in ${city.name}, CA.`,
        text: city.intro,
        heroSlug,
        altText: `Mobile welding project serving ${city.name}, CA by Production Welding`,
        actions: `<div class="hero-actions">
          <a class="button button-dark" href="${site.phoneHref}">Call ${site.phone}</a>
          <a class="button button-light" href="contact.html">Request an Estimate</a>
        </div>`
      })}

      <section class="section">
        <div class="split">
          <div>
            <p class="eyebrow">Local Welding Service</p>
            <h2>Mobile welding and shop work for ${esc(city.name)} projects.</h2>
            <p>${esc(city.localFit)}</p>
            <p>Common requests include gate welding, railing repair, trailer welding, equipment repair, shop welding, brackets, cracked metal repairs, reinforcement plates, and custom fabrication.</p>
          </div>
          <div class="area-panel">
            <strong>${esc(city.name)} service focus</strong>
            <span>Mobile welding</span>
            <span>Shop work</span>
            <span>Weld repair</span>
            <span>Gate and railing welding</span>
            <span>Trailer and equipment repair</span>
            <span>Custom metal fabrication</span>
          </div>
        </div>
      </section>

      <section class="section section-contrast">
        <div class="section-heading">
          <p class="eyebrow">Why Call Production Welding</p>
          <h2>A practical welder for ${esc(city.name)} repairs and fabrication.</h2>
        </div>
        <div class="intro-grid">
          <div>
            <h3>Certified and insured</h3>
            <p>Work is handled by a certified, insured welder with a mobile setup built for on-site repair and fabrication.</p>
          </div>
          <div>
            <h3>Clear communication</h3>
            <p>Send photos, measurements, access notes, and timing so the project can be reviewed before the service visit.</p>
          </div>
          <div>
            <h3>Nearby coverage</h3>
            <p>Production Welding also serves ${esc(city.nearby)} and other Bay Area communities near the ${esc(city.name)} service area for mobile service and shop work.</p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="section-heading">
          <p class="eyebrow">Other Service Areas</p>
          <h2>Mobile and shop welding across the Bay Area.</h2>
        </div>
        <div class="city-grid">
          ${cities.filter(other => other.slug !== city.slug).slice(0, 8).map(other => `
            <a class="city-link" href="${other.slug}-mobile-welding.html">
              <strong>${other.name}</strong>
              <span>Mobile welding, shop work, and repair service</span>
            </a>
          `).join("")}
        </div>
      </section>

      ${ctaBand()}
    `
  });
}

function sitemap() {
  const urls = sitemapFiles.map(file => {
    return `  <url>
    <loc>${canonical(file)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${file === "index.html" ? "weekly" : "monthly"}</changefreq>
    <priority>${file === "index.html" ? "1.0" : file.includes("mobile-welding") ? "0.8" : "0.7"}</priority>
  </url>`;
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

function robots() {
  return `User-agent: *
Allow: /

Sitemap: ${site.url}/sitemap.xml`;
}

function redirects() {
  return `https://www.productionwelding.org/* https://productionwelding.org/:splat 301!
/home / 301
/reviews /testimonials.html 301
/service-area /service-areas.html 301`;
}

function netlifyToml() {
  return `[build]
  publish = "."

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Strict-Transport-Security = "max-age=31536000; includeSubDomains; preload"
    Permissions-Policy = "geolocation=(), camera=(), microphone=(), interest-cohort=()"
    Content-Security-Policy = "default-src 'self'; script-src 'self'; style-src 'self'; font-src 'self'; img-src 'self' data:; connect-src 'self'; form-action 'self' https://*.netlify.com; frame-ancestors 'none'; base-uri 'self'; object-src 'none'"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"`;
}

function readme() {
  return `# Production Welding Website

Static website for Production Welding at productionwelding.org.

## Business details used

- Phone: ${site.phone}
- Email: ${site.email}
- Service model: mobile welding and shop work, no public shop address
- Service area: ${site.serviceArea}
- Positioning: certified and insured welder

## City landing pages

The city landing pages mirror the Pro Fence city set:

${cities.map(city => `- ${city.name}: ${city.slug}-mobile-welding.html`).join("\n")}

## Service pages

${servicePages.map(service => `- ${service.title}: ${service.slug}.html`).join("\n")}

## Reviews

Production Welding has 13 Google reviews according to the business owner. This build includes ${reviews.length} public review snippets I could verify from the existing public website/search result. Add the remaining Google review text/screenshots to build-site.js before publishing them on the testimonials page.

## Gallery photos

The original uploaded project photos are in the root Gallery folder. Optimized web copies and thumbnails are generated under assets/gallery/ with filenames like:

- production-welding-project-01.jpg
- thumb-production-welding-project-01.jpg

gallery.html is generated from the optimized files in assets/gallery/.

After editing build-site.js, run:

\`\`\`powershell
node build-site.js
\`\`\`
`;
}

function googleBusinessProfileChecklist() {
  return `# Google Business Profile Setup for Production Welding

This checklist handles the service-area business cleanup that requires logging into the owner's Google account.

## Core Profile

- Business name: Production Welding
- Phone: ${site.phone}
- Website: ${site.url}
- Email for website contact: ${site.email}
- Primary category: Welder
- Recommended secondary categories if available: Metal Fabricator, Welding Supply Store should not be used unless he actually sells supplies.
- Address visibility: hide the public address because the shop is not for walk-in traffic.
- Service area: add cities instead of a radius when possible. Start with ${cities.map(city => city.name).join(", ")}.
- Hours: use the real hours Ismael wants to answer calls. Do not list 24 hours unless he truly wants emergency calls overnight.

## Services to Add

${servicePages.map(service => `- ${service.title}`).join("\n")}
- Weld Repair
- Gate Repair Welding
- Trailer Welding Repair
- Equipment Welding Repair

## Photos to Upload

- Real logo
- Service truck, mobile welding setup, or shop work photos
- Before and after gate repairs
- Trailer repairs
- Railing or stair rail work
- Custom brackets and fabrication details
- Finished weld closeups where the work looks clean

## Review Work

- Copy the remaining Google reviews into build-site.js so testimonials.html can show all 13 accurately.
- Reply to every Google review using natural language and mention the project type when appropriate.
- Use the Google review link in follow-up texts after finished jobs.

## Important Cleanup

- Replace the old wrong phone number wherever Google still shows it.
- Remove public street address display if the profile is configured as a storefront.
- Remove any service wording that implies water-based specialty welding unless Production Welding actually offers it.
- Add productionwelding.org as the website once the new domain is live.
`;
}

const css = `
@font-face {
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 400 800;
  font-display: swap;
  src: url('assets/fonts/outfit.woff2') format('woff2');
}

@font-face {
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 500 700;
  font-display: swap;
  src: url('assets/fonts/roboto-slab.woff2') format('woff2');
}

:root {
  --ink: #17211d;
  --ink-2: #2a3731;
  --steel: #61706b;
  --steel-2: #8d9992;
  --paper: #f6f2eb;
  --paper-2: #fffaf1;
  --line: rgba(23, 33, 29, 0.14);
  --gold: #c58b2c;
  --gold-2: #efc46d;
  --white: #ffffff;
  --shadow: 0 18px 48px rgba(23, 33, 29, 0.14);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Outfit", Arial, sans-serif;
  color: var(--ink);
  background: var(--paper);
  line-height: 1.6;
}

body.nav-open {
  overflow: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

.skip-link {
  position: fixed;
  left: 16px;
  top: -80px;
  z-index: 100;
  background: var(--ink);
  color: var(--white);
  padding: 10px 14px;
  border-radius: 6px;
}

.skip-link:focus {
  top: 16px;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 22px;
  align-items: center;
  padding: 18px clamp(18px, 4vw, 54px);
  background: rgba(255, 250, 241, 0.94);
  border-bottom: 1px solid var(--line);
  backdrop-filter: blur(14px);
  transition: padding 180ms ease, box-shadow 180ms ease;
}

.site-header.is-scrolled {
  padding-top: 14px;
  padding-bottom: 14px;
  box-shadow: 0 10px 30px rgba(23, 33, 29, 0.08);
}

.brand {
  display: flex;
  align-items: center;
  gap: 14px;
  min-height: 44px;
  min-width: 220px;
}

.brand img {
  width: clamp(220px, 22vw, 340px);
  height: auto;
  transition: width 180ms ease;
}

.site-header.is-scrolled .brand img {
  width: min(240px, 38vw);
}

.brand span {
  display: none;
}

.site-nav {
  display: flex;
  justify-content: center;
  gap: 5px;
}

.site-nav a,
.header-call,
.nav-toggle {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.92rem;
}

.site-nav a {
  padding: 10px 13px;
  color: var(--ink-2);
}

.site-nav a:hover,
.site-nav a.active {
  background: var(--ink);
  color: var(--white);
}

.header-call {
  padding: 11px 16px;
  background: var(--gold);
  color: #1d160b;
  box-shadow: 0 10px 22px rgba(197, 139, 44, 0.22);
}

.nav-toggle {
  display: none;
  border: 1px solid var(--line);
  background: var(--white);
  color: var(--ink);
  padding: 10px 14px;
}

.hero {
  position: relative;
  min-height: calc(100vh - 78px);
  display: grid;
  align-items: center;
  padding: clamp(54px, 7vw, 96px) clamp(18px, 5vw, 76px);
  background:
    linear-gradient(110deg, rgba(246, 242, 235, 0.96), rgba(246, 242, 235, 0.82) 54%, rgba(42, 55, 49, 0.88)),
    repeating-linear-gradient(135deg, rgba(23, 33, 29, 0.08) 0, rgba(23, 33, 29, 0.08) 1px, transparent 1px, transparent 16px),
    linear-gradient(45deg, #f6f2eb, #d7dbd5);
  border-bottom: 1px solid var(--line);
  overflow: hidden;
  isolation: isolate;
}

.hero-with-image {
  background: var(--ink);
  color: var(--white);
}

.hero-image {
  position: absolute;
  inset: 0;
  z-index: -2;
  display: block;
}

.hero-video {
  position: absolute;
  inset: 0;
  z-index: -2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 35%;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 35%;
}

.hero-with-image::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    linear-gradient(105deg, rgba(13, 19, 16, 0.86) 0%, rgba(13, 19, 16, 0.62) 46%, rgba(13, 19, 16, 0.18) 78%, rgba(13, 19, 16, 0.05) 100%),
    linear-gradient(180deg, rgba(13, 19, 16, 0.35) 0%, rgba(13, 19, 16, 0) 35%);
}

.hero-with-image .hero-copy {
  color: rgba(255, 255, 255, 0.9);
}

.hero-with-image .trust-row span {
  background: rgba(255, 255, 255, 0.14);
  border-color: rgba(255, 255, 255, 0.28);
  color: var(--white);
  backdrop-filter: blur(6px);
}

.hero-inner {
  width: min(1040px, 100%);
  position: relative;
}

.hero h1,
.page-hero h1,
.section-heading h2,
.cta-band h2 {
  font-family: "Roboto Slab", Georgia, serif;
  line-height: 1.06;
  letter-spacing: 0;
}

.hero h1 {
  max-width: 860px;
  margin: 0;
  font-size: clamp(2.35rem, 5.2vw, 4.9rem);
}

.hero-copy {
  max-width: 740px;
  margin: 22px 0 0;
  font-size: clamp(1.05rem, 2vw, 1.35rem);
  color: var(--ink-2);
}

.eyebrow {
  margin: 0 0 12px;
  color: var(--gold);
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.78rem;
}

.hero-actions,
.cta-actions,
.center-actions,
.footer-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  margin-top: 28px;
}

.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-height: 48px;
  padding: 13px 18px;
  border-radius: 6px;
  border: 1px solid transparent;
  font-weight: 800;
}

.button-dark {
  background: var(--ink);
  color: var(--white);
}

.button-light {
  background: var(--white);
  color: var(--ink);
  border-color: var(--line);
}

.button:hover,
.header-call:hover,
.text-link:hover {
  transform: translateY(-1px);
}

.trust-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 34px;
}

.trust-row span {
  padding: 9px 12px;
  border: 1px solid rgba(23, 33, 29, 0.18);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.55);
  font-weight: 700;
}

.section,
.page-hero,
.cta-band {
  padding: clamp(54px, 7vw, 96px) clamp(18px, 5vw, 76px);
}

.page-hero {
  position: relative;
  background:
    linear-gradient(100deg, rgba(23, 33, 29, 0.94), rgba(42, 55, 49, 0.88)),
    repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0, rgba(255, 255, 255, 0.07) 1px, transparent 1px, transparent 18px);
  color: var(--white);
  overflow: hidden;
  isolation: isolate;
}

.page-hero-with-image {
  background: var(--ink);
  min-height: clamp(360px, 56vh, 560px);
  display: grid;
  align-content: center;
}

.page-hero-with-image .hero-image {
  position: absolute;
  inset: 0;
  z-index: -2;
  display: block;
}

.page-hero-with-image .hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.page-hero-with-image::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    linear-gradient(105deg, rgba(13, 19, 16, 0.86) 0%, rgba(13, 19, 16, 0.66) 50%, rgba(13, 19, 16, 0.28) 84%, rgba(13, 19, 16, 0.1) 100%),
    linear-gradient(180deg, rgba(13, 19, 16, 0.32) 0%, rgba(13, 19, 16, 0) 35%);
}

.page-hero-inner {
  position: relative;
  width: min(1040px, 100%);
}

.page-hero h1 {
  max-width: 980px;
  margin: 0;
  font-size: clamp(2.2rem, 5vw, 4.7rem);
}

.page-hero p:not(.eyebrow) {
  max-width: 760px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 1.12rem;
}

.section-heading {
  max-width: 860px;
  margin-bottom: 32px;
}

.section-heading h2,
.cta-band h2 {
  margin: 0;
  font-size: clamp(1.9rem, 4vw, 3.6rem);
}

.section-heading p:last-child {
  margin-bottom: 0;
}

.section-contrast {
  background: var(--paper-2);
  border-block: 1px solid var(--line);
}

.intro-grid,
.service-grid,
.review-grid,
.gallery-grid,
.city-grid {
  display: grid;
  gap: 18px;
}

.intro-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.intro-grid > div,
.service-card,
.review-card,
.gallery-card,
.contact-card,
.area-panel,
.contact-form {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 8px;
  box-shadow: var(--shadow);
}

.intro-grid > div,
.service-card,
.review-card,
.gallery-card,
.contact-card,
.area-panel {
  padding: 24px;
}

.intro-grid h3,
.service-card h3,
.gallery-card h2,
.contact-card h2 {
  margin: 0 0 10px;
  font-size: 1.25rem;
}

.intro-grid p,
.service-card p,
.review-card p,
.gallery-card p,
.contact-card p,
.area-panel span {
  color: #4d5b55;
}

.service-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.service-grid.wide {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.service-card {
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: "";
  position: absolute;
  inset: 0 0 auto;
  height: 5px;
  background: linear-gradient(90deg, var(--gold), var(--steel));
}

.card-number {
  color: var(--gold);
  font-weight: 800;
  margin-bottom: 18px;
}

.service-card ul {
  padding-left: 18px;
  margin-bottom: 0;
}

.card-link {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  margin-top: 18px;
  padding: 4px 0;
  font-weight: 800;
  color: var(--ink);
  border-bottom: 2px solid var(--gold);
}

.project-photo-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.project-photo-card {
  overflow: hidden;
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 8px;
  box-shadow: var(--shadow);
}

.project-photo-link {
  display: block;
  background: var(--paper);
}

.project-photo-link img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  transition: transform 220ms ease;
}

.project-photo-link:hover img {
  transform: scale(1.035);
}

.project-photo-card h3,
.project-photo-card p {
  margin-left: 22px;
  margin-right: 22px;
}

.project-photo-card h3 {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 1.22rem;
}

.project-photo-card p {
  margin-bottom: 24px;
  color: #4d5b55;
}

.project-photo-section .center-actions {
  margin-top: 26px;
}

.split {
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
  gap: clamp(24px, 5vw, 60px);
  align-items: start;
}

.text-link {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  margin-top: 12px;
  padding: 4px 0;
  font-weight: 800;
  color: var(--ink);
  border-bottom: 2px solid var(--gold);
}

.city-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.city-grid-large {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.city-link {
  display: grid;
  gap: 4px;
  min-height: 112px;
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--white);
}

.city-link strong {
  font-size: 1.16rem;
}

.city-link span {
  color: #59665f;
}

.city-link:hover {
  border-color: rgba(197, 139, 44, 0.7);
  box-shadow: 0 12px 28px rgba(23, 33, 29, 0.1);
}

.review-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.review-grid-home {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.review-card p {
  margin-top: 0;
  font-size: 1.05rem;
}

.review-card footer {
  display: grid;
  gap: 2px;
  padding-top: 16px;
  border-top: 1px solid var(--line);
}

.review-card span {
  color: #68756e;
}

.star-rating {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 14px;
  color: var(--gold);
  font-weight: 800;
}

.star-rating span {
  letter-spacing: 0.08em;
}

.star-rating strong {
  color: var(--ink);
  font-size: 0.95rem;
}

.faq-list {
  display: grid;
  gap: 12px;
  max-width: 980px;
}

details {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 18px 20px;
}

summary {
  cursor: pointer;
  font-weight: 800;
}

details p {
  color: #4d5b55;
}

.cta-band {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 24px;
  align-items: center;
  background: var(--gold);
  color: #1d160b;
}

.cta-band .eyebrow {
  color: #5b3b05;
}

.cta-band p {
  max-width: 720px;
}

.process-list {
  display: grid;
  gap: 14px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.process-list li {
  display: grid;
  gap: 5px;
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 20px;
}

.process-list span {
  color: #59665f;
}

.area-panel {
  display: grid;
  gap: 10px;
}

.area-panel strong {
  font-size: 1.24rem;
}

.area-panel span {
  padding: 10px 0;
  border-top: 1px solid var(--line);
}

.gallery-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.gallery-count {
  max-width: 860px;
  margin-bottom: 28px;
}

.gallery-count h2 {
  margin: 0;
  font-family: "Roboto Slab", Georgia, serif;
  font-size: clamp(1.7rem, 3vw, 2.8rem);
  line-height: 1.1;
}

.gallery-photo-card {
  overflow: hidden;
  padding-bottom: 22px;
}

.gallery-image-button {
  display: block;
  width: calc(100% + 48px);
  margin: -24px -24px 20px;
  padding: 0;
  border: 0;
  background: var(--paper);
  cursor: zoom-in;
}

.gallery-image-button img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  transition: transform 220ms ease;
}

.gallery-image-button:hover img {
  transform: scale(1.035);
}

.gallery-placeholder {
  min-height: 230px;
  display: grid;
  place-items: center;
  margin: -24px -24px 20px;
  background:
    linear-gradient(130deg, rgba(23, 33, 29, 0.95), rgba(97, 112, 107, 0.88)),
    repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.16) 0, rgba(255, 255, 255, 0.16) 1px, transparent 1px, transparent 18px);
  color: var(--gold-2);
}

.gallery-placeholder span {
  width: 72px;
  height: 72px;
  display: grid;
  place-items: center;
  border: 2px solid rgba(239, 196, 109, 0.7);
  border-radius: 50%;
  font-weight: 800;
  font-size: 1.3rem;
}

.gallery-lightbox {
  position: fixed;
  inset: 0;
  z-index: 80;
  display: grid;
  place-items: center;
  padding: clamp(14px, 4vw, 42px);
  background: rgba(13, 20, 17, 0.9);
}

.gallery-lightbox[hidden] {
  display: none;
}

.gallery-lightbox figure {
  width: min(1120px, 100%);
  max-height: 90vh;
  margin: 0;
  display: grid;
  gap: 12px;
}

.gallery-lightbox img {
  max-width: 100%;
  max-height: 78vh;
  justify-self: center;
  border-radius: 8px;
  box-shadow: 0 28px 70px rgba(0, 0, 0, 0.4);
}

.gallery-lightbox figcaption {
  color: var(--white);
  font-weight: 800;
  text-align: center;
}

.gallery-lightbox-close {
  position: absolute;
  right: 18px;
  top: 18px;
  border: 1px solid rgba(255, 255, 255, 0.26);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  color: var(--white);
  padding: 10px 14px;
  font: inherit;
  font-weight: 800;
  cursor: pointer;
}

.contact-layout {
  display: grid;
  grid-template-columns: minmax(280px, 0.75fr) minmax(0, 1.25fr);
  gap: 24px;
}

.contact-card {
  display: grid;
  gap: 12px;
  align-self: start;
}

.contact-card a,
.contact-card span {
  display: block;
  padding: 13px 0;
  border-top: 1px solid var(--line);
  font-weight: 800;
}

.contact-form {
  display: grid;
  gap: 16px;
  padding: 24px;
}

.contact-form label {
  display: grid;
  gap: 7px;
  font-weight: 800;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  border: 1px solid rgba(23, 33, 29, 0.2);
  border-radius: 6px;
  padding: 13px 14px;
  font: inherit;
  background: #fffdf8;
}

.contact-form input[type="file"] {
  padding: 12px;
}

.field-note {
  color: #647069;
  font-size: 0.92rem;
  font-weight: 500;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: 3px solid rgba(197, 139, 44, 0.28);
  border-color: var(--gold);
}

.hidden {
  display: none;
}

.site-footer {
  background: var(--ink);
  color: rgba(255, 255, 255, 0.86);
  padding: 46px clamp(18px, 5vw, 76px) 24px;
}

.footer-main {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(180px, 0.5fr) minmax(260px, 0.8fr);
  gap: 34px;
}

.footer-logo {
  width: min(420px, 92vw);
  filter: invert(1) brightness(1.5);
}

.site-footer h2 {
  color: var(--white);
  font-size: 1.05rem;
  margin: 0 0 12px;
}

.site-footer a {
  display: flex;
  align-items: center;
  min-height: 44px;
  padding: 8px 0;
}

.footer-actions a {
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  padding: 10px 12px;
}

.footer-city-grid {
  columns: 2;
}

.footer-bottom {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: space-between;
  margin-top: 34px;
  padding-top: 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
  font-size: 0.92rem;
}

.mobile-action-bar {
  display: none;
}

@media (max-width: 1020px) {
  .site-header {
    grid-template-columns: auto 1fr auto;
  }

  .nav-toggle {
    display: inline-flex;
    justify-self: end;
  }

  .site-nav {
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    display: none;
    padding: 18px;
    background: var(--paper-2);
    border-bottom: 1px solid var(--line);
    box-shadow: var(--shadow);
  }

  body.nav-open .site-nav {
    display: grid;
    justify-content: stretch;
  }

  .site-nav a {
    border-radius: 6px;
    padding: 13px 14px;
  }

  .header-call {
    justify-self: end;
    padding: 9px 12px;
    font-size: 0.86rem;
  }

  .intro-grid,
  .service-grid,
  .service-grid.wide,
  .project-photo-grid,
  .review-grid,
  .review-grid-home,
  .gallery-grid,
  .city-grid-large,
  .footer-main {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .split,
  .contact-layout,
  .cta-band {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 680px) {
  body {
    padding-bottom: 78px;
  }

  .site-header {
    padding-inline: 14px;
  }

  .brand {
    min-width: 0;
  }

  .brand img {
    width: min(195px, 56vw);
  }

  .site-header.is-scrolled .brand img {
    width: min(170px, 50vw);
  }

  .header-call {
    display: none;
  }

  .hero {
    min-height: auto;
    padding-top: 64px;
    padding-bottom: 74px;
  }

  .hero h1 {
    font-size: clamp(1.85rem, 8vw, 2.6rem);
    line-height: 1.12;
  }

  .hero-copy {
    font-size: 1rem;
    margin-top: 14px;
  }

  .hero-actions {
    margin-top: 18px;
  }

  .hero-actions,
  .cta-actions,
  .center-actions {
    align-items: stretch;
  }

  .hero .trust-row {
    margin-top: 24px;
    gap: 6px;
  }

  .hero .trust-row span {
    padding: 6px 10px;
    font-size: 0.82rem;
  }

  .button {
    width: 100%;
  }

  .intro-grid,
  .service-grid,
  .service-grid.wide,
  .project-photo-grid,
  .review-grid,
  .review-grid-home,
  .gallery-grid,
  .city-grid,
  .city-grid-large,
  .footer-main {
    grid-template-columns: 1fr;
  }

  .section,
  .page-hero,
  .cta-band {
    padding-inline: 16px;
  }

  .footer-city-grid {
    columns: 1;
  }

  .mobile-action-bar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 30;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    padding: 10px 12px calc(10px + env(safe-area-inset-bottom));
    background: rgba(255, 250, 241, 0.96);
    border-top: 1px solid var(--line);
    box-shadow: 0 -12px 28px rgba(23, 33, 29, 0.14);
    backdrop-filter: blur(14px);
  }

  .mobile-action-bar a {
    display: grid;
    place-items: center;
    min-height: 48px;
    border-radius: 6px;
    font-weight: 800;
  }

  .mobile-action-bar a:first-child {
    background: var(--ink);
    color: var(--white);
  }

  .mobile-action-bar a:last-child {
    background: var(--gold);
    color: #1d160b;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  .hero-video {
    display: none;
  }

  *,
  *::before,
  *::after {
    transition-duration: 0ms !important;
    animation-duration: 0ms !important;
  }

  .button:hover,
  .header-call:hover,
  .text-link:hover,
  .project-photo-link:hover img,
  .gallery-image-button:hover img {
    transform: none !important;
  }
}
`;

const js = `
(function () {
  var servicePages = ${JSON.stringify(servicePages.map(service => `${service.slug}.html`))};
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector("#site-nav");

  function updateHeaderState() {
    if (!header) return;
    if (window.scrollY > 56) {
      header.classList.add("is-scrolled");
    } else if (window.scrollY < 4) {
      header.classList.remove("is-scrolled");
    }
  }

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  var current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav a").forEach(function (link) {
    var href = link.getAttribute("href");
    if (
      href === current ||
      (current !== "mobile-welding.html" && current.indexOf("mobile-welding") > -1 && href === "service-areas.html") ||
      (servicePages.indexOf(current) > -1 && href === "services.html")
    ) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  var lightbox = document.querySelector(".gallery-lightbox");
  if (lightbox) {
    var lightboxImage = lightbox.querySelector("img");
    var lightboxCaption = lightbox.querySelector("figcaption");
    var closeButton = lightbox.querySelector(".gallery-lightbox-close");

    function closeLightbox() {
      lightbox.hidden = true;
      lightbox.setAttribute("aria-hidden", "true");
      lightboxImage.removeAttribute("src");
      lightboxImage.removeAttribute("alt");
    }

    document.querySelectorAll(".gallery-image-button").forEach(function (button) {
      button.addEventListener("click", function () {
        lightboxImage.src = button.dataset.gallerySrc;
        lightboxImage.alt = button.dataset.galleryAlt || "";
        lightboxCaption.textContent = button.dataset.galleryCaption || "";
        lightbox.hidden = false;
        lightbox.setAttribute("aria-hidden", "false");
        closeButton.focus();
      });
    });

    closeButton.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
    });
  }
})();
`;

function build() {
  fs.mkdirSync(path.join(root, "assets"), { recursive: true });
  fs.mkdirSync(path.join(root, "assets", "gallery"), { recursive: true });

  writeFile("index.html", homePage());
  writeFile("services.html", servicesPage());
  writeFile("service-areas.html", serviceAreasPage());
  writeFile("gallery.html", galleryPage());
  writeFile("testimonials.html", testimonialsPage());
  writeFile("contact.html", contactPage());
  writeFile("thank-you.html", thankYouPage());
  writeFile("404.html", notFoundPage());
  for (const service of servicePages) {
    writeFile(`${service.slug}.html`, detailServicePage(service));
  }
  for (const city of cities) {
    writeFile(`${city.slug}-mobile-welding.html`, cityPage(city));
  }

  writeFile("styles.css", css);
  writeFile("script.js", js);
  writeFile("sitemap.xml", sitemap());
  writeFile("robots.txt", robots());
  writeFile("_redirects", redirects());
  writeFile("netlify.toml", netlifyToml());
  writeFile("README.md", readme());
  writeFile("GOOGLE_BUSINESS_PROFILE_SETUP.md", googleBusinessProfileChecklist());
  writeFile("assets/gallery/README.md", "Optimized gallery images live here. The original uploaded photos are kept in the root Gallery folder. gallery.html is generated from production-welding-project-*.jpg files, with thumb-production-welding-project-*.jpg used as fast-loading thumbnails.");

  console.log(`Built ${allFiles.length} pages for ${site.name}.`);
}

build();

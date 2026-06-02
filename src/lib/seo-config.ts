/**
 * Configuración SEO centralizada para Tyler Movers IL
 * Contiene keywords, ciudades servidas y metadata compartida
 */

export const SEO_CONFIG = {
  businessName: "Tyler Movers IL",
  phone: "+1-773-573-7886",
  email: "services@tylermoversil.com",
  baseUrl: "https://tylermoversil.com",
  
  mainAddress: {
    street: "184 N Bloomingdale Rd",
    city: "Bloomingdale",
    state: "IL",
    zip: "60108",
    country: "US",
  },

  serviceCities: [
    { name: "Bloomingdale", priority: 1 },
    { name: "Schaumburg", priority: 1 },
    { name: "Naperville", priority: 1 },
    { name: "Oak Brook", priority: 2 },
    { name: "Evanston", priority: 2 },
    { name: "Chicago", priority: 1 },
  ],

  keywords: {
    primary: [
      "micro moves",
      "minivan moving service",
      "same day delivery",
      "studio apartment movers",
      "small office relocation",
    ],
    secondary: [
      "Facebook Marketplace delivery",
      "IKEA furniture delivery",
      "man with van",
      "small load movers",
      "Chicagoland moving service",
    ],
  },

  services: {
    studioMoves: {
      slug: "studio-apartment-movers",
      title: "Studio Apartment Movers",
      description: "Affordable studio and small apartment moving service",
    },
    ikeaDelivery: {
      slug: "ikea-furniture-delivery",
      title: "IKEA Furniture Delivery",
      description: "Same-day IKEA pickup and delivery service",
    },
    officeRelocation: {
      slug: "small-office-movers",
      title: "Small Office Movers",
      description: "Professional small office and home office relocation",
    },
  },
} as const;

export type ServiceCity = (typeof SEO_CONFIG.serviceCities)[number];
export type ServiceType = keyof typeof SEO_CONFIG.services;

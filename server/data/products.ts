// Curated showcase seed data: temporary source before real DB persistence, with fictional controlled products for UI showcase quality.
import type { Product } from '~/types'

export const mockProducts: Product[] = [{
  id: 'prod-aurora-runner-01',
  slug: 'northline-aurora-runner-cream-sage',
  brand: 'Northline',
  name: 'Aurora Runner',
  description: 'A layered mesh and suede runner with cushioned everyday comfort and a soft archival profile.',
  category: 'sneakers',
  colorway: 'Cream / Sage / Gum',
  images: [{
    id: 'img-aurora-runner-01-primary',
    src: '/images/mock-products/aurora-runner-cream-sage-01.webp',
    alt: 'Northline Aurora Runner sneaker in cream and sage',
    width: 1600,
    height: 2000,
    position: 1,
    isPrimary: true
  }, {
    id: 'img-aurora-runner-01-side',
    src: '/images/mock-products/aurora-runner-cream-sage-02.webp',
    alt: 'Side view of the Northline Aurora Runner sneaker',
    width: 1600,
    height: 2000,
    position: 2
  }],
  price: {
    amount: 148,
    originalAmount: 148,
    currency: 'USD'
  },
  saleState: 'regular',
  sizes: [{
    id: 'aurora-us-7',
    label: 'US 7',
    value: '7',
    available: true,
    stock: 3
  }, {
    id: 'aurora-us-8',
    label: 'US 8',
    value: '8',
    available: true,
    stock: 5
  }, {
    id: 'aurora-us-9',
    label: 'US 9',
    value: '9',
    available: true,
    stock: 4
  }, {
    id: 'aurora-us-10',
    label: 'US 10',
    value: '10',
    available: false,
    stock: 0
  }, {
    id: 'aurora-us-11',
    label: 'US 11',
    value: '11',
    available: true,
    stock: 2
  }],
  sku: 'NL-AR-CSG-001',
  styleCode: 'AR-24-CSG',
  releaseDate: '2026-02-14',
  releaseYear: 2026,
  source: {
    provider: 'looma-seed',
    externalId: 'seed-aurora-runner-cream-sage',
    importedAt: '2026-05-01T10:00:00.000Z',
    lastSyncedAt: '2026-05-01T10:00:00.000Z'
  }
}, {
  id: 'prod-vanta-court-02',
  slug: 'vanta-court-low-black-ivory',
  brand: 'Vanta',
  name: 'Court Low',
  description: 'A minimal leather court sneaker with a low profile, padded collar, and contrast rubber sole.',
  category: 'sneakers',
  colorway: 'Black / Ivory',
  images: [{
    id: 'img-vanta-court-02-primary',
    src: '/images/mock-products/vanta-court-low-black-ivory-01.webp',
    alt: 'Vanta Court Low sneaker in black and ivory',
    width: 1600,
    height: 2000,
    position: 1,
    isPrimary: true
  }],
  price: {
    amount: 120,
    originalAmount: 150,
    currency: 'USD'
  },
  saleState: 'sale',
  sizes: [{
    id: 'vanta-us-7',
    label: 'US 7',
    value: '7',
    available: false,
    stock: 0
  }, {
    id: 'vanta-us-8',
    label: 'US 8',
    value: '8',
    available: true,
    stock: 2
  }, {
    id: 'vanta-us-9',
    label: 'US 9',
    value: '9',
    available: true,
    stock: 7
  }, {
    id: 'vanta-us-10',
    label: 'US 10',
    value: '10',
    available: true,
    stock: 4
  }, {
    id: 'vanta-us-11',
    label: 'US 11',
    value: '11',
    available: false,
    stock: 0
  }],
  sku: 'VN-CL-BIV-002',
  styleCode: 'CL-25-BIV',
  releaseDate: '2025-09-20',
  releaseYear: 2025,
  source: {
    provider: 'looma-seed',
    externalId: 'seed-vanta-court-low-black-ivory',
    importedAt: '2026-05-01T10:05:00.000Z',
    lastSyncedAt: '2026-05-01T10:05:00.000Z'
  }
}, {
  id: 'prod-kin-loop-03',
  slug: 'kin-loop-trail-sand-rust',
  brand: 'Kin Supply',
  name: 'Loop Trail',
  description: 'A trail-inspired sneaker with ripstop panels, toggle laces, and a sculpted lug outsole.',
  category: 'sneakers',
  colorway: 'Sand / Rust / Charcoal',
  images: [{
    id: 'img-kin-loop-03-primary',
    src: '/images/mock-products/kin-loop-trail-sand-rust-01.webp',
    alt: 'Kin Supply Loop Trail sneaker in sand and rust',
    width: 1600,
    height: 2000,
    position: 1,
    isPrimary: true
  }],
  price: {
    amount: 176,
    originalAmount: 176,
    currency: 'USD'
  },
  saleState: 'regular',
  sizes: [{
    id: 'kin-loop-us-8',
    label: 'US 8',
    value: '8',
    available: true,
    stock: 4
  }, {
    id: 'kin-loop-us-9',
    label: 'US 9',
    value: '9',
    available: true,
    stock: 3
  }, {
    id: 'kin-loop-us-10',
    label: 'US 10',
    value: '10',
    available: true,
    stock: 5
  }, {
    id: 'kin-loop-us-11',
    label: 'US 11',
    value: '11',
    available: true,
    stock: 1
  }, {
    id: 'kin-loop-us-12',
    label: 'US 12',
    value: '12',
    available: false,
    stock: 0
  }],
  sku: 'KS-LT-SRC-003',
  styleCode: 'LT-26-SRC',
  releaseDate: '2026-03-08',
  releaseYear: 2026,
  source: {
    provider: 'looma-seed',
    externalId: 'seed-kin-loop-trail-sand-rust',
    importedAt: '2026-05-01T10:10:00.000Z',
    lastSyncedAt: '2026-05-01T10:10:00.000Z'
  }
}, {
  id: 'prod-studio-fleece-04',
  slug: 'maison-row-studio-fleece-hoodie-washed-oat',
  brand: 'Maison Row',
  name: 'Studio Fleece Hoodie',
  description: 'A heavyweight brushed fleece hoodie with a cropped box fit, tonal drawcords, and ribbed trims.',
  category: 'streetwear',
  colorway: 'Washed Oat',
  images: [{
    id: 'img-studio-fleece-04-primary',
    src: '/images/mock-products/studio-fleece-hoodie-washed-oat-01.webp',
    alt: 'Maison Row Studio Fleece Hoodie in washed oat',
    width: 1600,
    height: 2000,
    position: 1,
    isPrimary: true
  }],
  price: {
    amount: 132,
    originalAmount: 132,
    currency: 'USD'
  },
  saleState: 'regular',
  sizes: [{
    id: 'studio-hoodie-xs',
    label: 'XS',
    value: 'xs',
    available: true,
    stock: 2
  }, {
    id: 'studio-hoodie-s',
    label: 'S',
    value: 's',
    available: true,
    stock: 5
  }, {
    id: 'studio-hoodie-m',
    label: 'M',
    value: 'm',
    available: true,
    stock: 6
  }, {
    id: 'studio-hoodie-l',
    label: 'L',
    value: 'l',
    available: false,
    stock: 0
  }, {
    id: 'studio-hoodie-xl',
    label: 'XL',
    value: 'xl',
    available: true,
    stock: 1
  }],
  sku: 'MR-SFH-WOA-004',
  styleCode: 'SFH-26-WOA',
  releaseDate: '2026-01-18',
  releaseYear: 2026,
  source: {
    provider: 'looma-seed',
    externalId: 'seed-studio-fleece-hoodie-washed-oat',
    importedAt: '2026-05-01T10:15:00.000Z',
    lastSyncedAt: '2026-05-01T10:15:00.000Z'
  }
}, {
  id: 'prod-metro-shell-05',
  slug: 'echelon-metro-shell-jacket-slate',
  brand: 'Echelon',
  name: 'Metro Shell Jacket',
  description: 'A water-resistant city shell with hidden snap closures, articulated sleeves, and a matte finish.',
  category: 'streetwear',
  colorway: 'Slate / Ink',
  images: [{
    id: 'img-metro-shell-05-primary',
    src: '/images/mock-products/metro-shell-jacket-slate-01.webp',
    alt: 'Echelon Metro Shell Jacket in slate',
    width: 1600,
    height: 2000,
    position: 1,
    isPrimary: true
  }],
  price: {
    amount: 188,
    originalAmount: 248,
    currency: 'USD'
  },
  saleState: 'sale',
  sizes: [{
    id: 'metro-shell-s',
    label: 'S',
    value: 's',
    available: true,
    stock: 1
  }, {
    id: 'metro-shell-m',
    label: 'M',
    value: 'm',
    available: true,
    stock: 2
  }, {
    id: 'metro-shell-l',
    label: 'L',
    value: 'l',
    available: false,
    stock: 0
  }, {
    id: 'metro-shell-xl',
    label: 'XL',
    value: 'xl',
    available: true,
    stock: 1
  }],
  sku: 'EC-MSJ-SLI-005',
  styleCode: 'MSJ-25-SLI',
  releaseDate: '2025-11-02',
  releaseYear: 2025,
  source: {
    provider: 'looma-seed',
    externalId: 'seed-metro-shell-jacket-slate',
    importedAt: '2026-05-01T10:20:00.000Z',
    lastSyncedAt: '2026-05-01T10:20:00.000Z'
  }
}, {
  id: 'prod-arc-tee-06',
  slug: 'public-format-arc-logo-tee-faded-black',
  brand: 'Public Format',
  name: 'Arc Logo Tee',
  description: 'A garment-dyed heavyweight jersey tee with a relaxed fit and small chest graphic.',
  category: 'streetwear',
  colorway: 'Faded Black',
  images: [{
    id: 'img-arc-tee-06-primary',
    src: '/images/mock-products/arc-logo-tee-faded-black-01.webp',
    alt: 'Public Format Arc Logo Tee in faded black',
    width: 1600,
    height: 2000,
    position: 1,
    isPrimary: true
  }],
  price: {
    amount: 52,
    originalAmount: 68,
    currency: 'USD'
  },
  saleState: 'sale',
  sizes: [{
    id: 'arc-tee-xs',
    label: 'XS',
    value: 'xs',
    available: false,
    stock: 0
  }, {
    id: 'arc-tee-s',
    label: 'S',
    value: 's',
    available: true,
    stock: 4
  }, {
    id: 'arc-tee-m',
    label: 'M',
    value: 'm',
    available: true,
    stock: 8
  }, {
    id: 'arc-tee-l',
    label: 'L',
    value: 'l',
    available: true,
    stock: 6
  }, {
    id: 'arc-tee-xl',
    label: 'XL',
    value: 'xl',
    available: false,
    stock: 0
  }],
  sku: 'PF-ALT-FBK-006',
  styleCode: 'ALT-25-FBK',
  releaseDate: '2025-08-16',
  releaseYear: 2025,
  source: {
    provider: 'looma-seed',
    externalId: 'seed-arc-logo-tee-faded-black',
    importedAt: '2026-05-01T10:25:00.000Z',
    lastSyncedAt: '2026-05-01T10:25:00.000Z'
  }
}, {
  id: 'prod-ridge-longsleeve-07',
  slug: 'sable-ridge-thermal-longsleeve-ash',
  brand: 'Sable Ridge',
  name: 'Thermal Longsleeve',
  description: 'A textured cotton thermal longsleeve with overlocked seams and an easy layered silhouette.',
  category: 'streetwear',
  colorway: 'Ash Grey',
  images: [{
    id: 'img-ridge-longsleeve-07-primary',
    src: '/images/mock-products/thermal-longsleeve-ash-grey-01.webp',
    alt: 'Sable Ridge Thermal Longsleeve in ash grey',
    width: 1600,
    height: 2000,
    position: 1,
    isPrimary: true
  }],
  price: {
    amount: 84,
    originalAmount: 84,
    currency: 'USD'
  },
  saleState: 'regular',
  sizes: [{
    id: 'thermal-ls-s',
    label: 'S',
    value: 's',
    available: true,
    stock: 3
  }, {
    id: 'thermal-ls-m',
    label: 'M',
    value: 'm',
    available: true,
    stock: 5
  }, {
    id: 'thermal-ls-l',
    label: 'L',
    value: 'l',
    available: true,
    stock: 2
  }, {
    id: 'thermal-ls-xl',
    label: 'XL',
    value: 'xl',
    available: false,
    stock: 0
  }],
  sku: 'SR-TLS-ASH-007',
  styleCode: 'TLS-26-ASH',
  releaseDate: '2026-02-01',
  releaseYear: 2026,
  source: {
    provider: 'looma-seed',
    externalId: 'seed-thermal-longsleeve-ash-grey',
    importedAt: '2026-05-01T10:30:00.000Z',
    lastSyncedAt: '2026-05-01T10:30:00.000Z'
  }
}, {
  id: 'prod-utility-cargo-08',
  slug: 'common-thread-utility-cargo-pant-olive',
  brand: 'Common Thread',
  name: 'Utility Cargo Pant',
  description: 'A relaxed cotton-nylon cargo pant with adjustable hems, secure pockets, and a soft washed hand.',
  category: 'streetwear',
  colorway: 'Olive Drab',
  images: [{
    id: 'img-utility-cargo-08-primary',
    src: '/images/mock-products/utility-cargo-pant-olive-01.webp',
    alt: 'Common Thread Utility Cargo Pant in olive drab',
    width: 1600,
    height: 2000,
    position: 1,
    isPrimary: true
  }],
  price: {
    amount: 118,
    originalAmount: 118,
    currency: 'USD'
  },
  saleState: 'regular',
  sizes: [{
    id: 'cargo-xs',
    label: 'XS',
    value: 'xs',
    available: false,
    stock: 0
  }, {
    id: 'cargo-s',
    label: 'S',
    value: 's',
    available: true,
    stock: 2
  }, {
    id: 'cargo-m',
    label: 'M',
    value: 'm',
    available: true,
    stock: 4
  }, {
    id: 'cargo-l',
    label: 'L',
    value: 'l',
    available: true,
    stock: 3
  }, {
    id: 'cargo-xl',
    label: 'XL',
    value: 'xl',
    available: true,
    stock: 1
  }],
  sku: 'CT-UCP-OLV-008',
  styleCode: 'UCP-26-OLV',
  releaseDate: '2026-04-05',
  releaseYear: 2026,
  source: {
    provider: 'looma-seed',
    externalId: 'seed-utility-cargo-pant-olive',
    importedAt: '2026-05-01T10:35:00.000Z',
    lastSyncedAt: '2026-05-01T10:35:00.000Z'
  }
}, {
  id: 'prod-transit-sling-09',
  slug: 'offgrid-transit-sling-graphite',
  brand: 'Offgrid',
  name: 'Transit Sling',
  description: 'A compact crossbody sling with recycled nylon shell, internal organizer, and matte hardware.',
  category: 'accessories',
  colorway: 'Graphite',
  images: [{
    id: 'img-transit-sling-09-primary',
    src: '/images/mock-products/transit-sling-graphite-01.webp',
    alt: 'Offgrid Transit Sling bag in graphite',
    width: 1600,
    height: 2000,
    position: 1,
    isPrimary: true
  }],
  price: {
    amount: 74,
    originalAmount: 92,
    currency: 'USD'
  },
  saleState: 'sale',
  sizes: [{
    id: 'transit-sling-os',
    label: 'OS',
    value: 'one-size',
    available: true,
    stock: 9
  }],
  sku: 'OG-TSL-GPH-009',
  styleCode: 'TSL-25-GPH',
  releaseDate: '2025-10-12',
  releaseYear: 2025,
  source: {
    provider: 'looma-seed',
    externalId: 'seed-transit-sling-graphite',
    importedAt: '2026-05-01T10:40:00.000Z',
    lastSyncedAt: '2026-05-01T10:40:00.000Z'
  }
}, {
  id: 'prod-beacon-cap-10',
  slug: 'harbor-club-beacon-cap-navy',
  brand: 'Harbor Club',
  name: 'Beacon Cap',
  description: 'A low-profile cotton twill cap with an embroidered mark and adjustable metal clasp.',
  category: 'accessories',
  colorway: 'Navy',
  images: [{
    id: 'img-beacon-cap-10-primary',
    src: '/images/mock-products/beacon-cap-navy-01.webp',
    alt: 'Harbor Club Beacon Cap in navy',
    width: 1600,
    height: 2000,
    position: 1,
    isPrimary: true
  }],
  price: {
    amount: 44,
    originalAmount: 44,
    currency: 'USD'
  },
  saleState: 'sold-out',
  sizes: [{
    id: 'beacon-cap-os',
    label: 'OS',
    value: 'one-size',
    available: false,
    stock: 0
  }],
  sku: 'HC-BCP-NVY-010',
  styleCode: 'BCP-26-NVY',
  releaseDate: '2026-03-22',
  releaseYear: 2026,
  source: {
    provider: 'looma-seed',
    externalId: 'seed-beacon-cap-navy',
    importedAt: '2026-05-01T10:45:00.000Z',
    lastSyncedAt: '2026-05-01T10:45:00.000Z'
  }
}]

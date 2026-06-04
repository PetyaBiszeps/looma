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
}, {
  id: 'prod-cinder-track-11',
  slug: 'oreline-cinder-track-moonstone-pewter',
  brand: 'Oreline',
  name: 'Cinder Track',
  description: 'A low-slung runner with layered suede, breathable mesh, and a softened foam midsole for daily rotation.',
  category: 'sneakers',
  colorway: 'Moonstone / Pewter / Bone',
  images: [{
    id: 'img-cinder-track-11-primary',
    src: '/images/mock-products/oreline-cinder-track-moonstone-pewter-01.webp',
    alt: 'Oreline Cinder Track sneaker in moonstone and pewter',
    width: 1600,
    height: 2000,
    position: 1,
    isPrimary: true
  }],
  price: {
    amount: 162,
    originalAmount: 162,
    currency: 'USD'
  },
  saleState: 'regular',
  sizes: [{
    id: 'cinder-track-us-7',
    label: 'US 7',
    value: '7',
    available: true,
    stock: 2
  }, {
    id: 'cinder-track-us-8',
    label: 'US 8',
    value: '8',
    available: true,
    stock: 5
  }, {
    id: 'cinder-track-us-9',
    label: 'US 9',
    value: '9',
    available: true,
    stock: 6
  }, {
    id: 'cinder-track-us-10',
    label: 'US 10',
    value: '10',
    available: false,
    stock: 0
  }, {
    id: 'cinder-track-us-11',
    label: 'US 11',
    value: '11',
    available: true,
    stock: 1
  }],
  sku: 'OR-CT-MPB-011',
  styleCode: 'CT-26-MPB',
  releaseDate: '2026-04-18',
  releaseYear: 2026,
  source: {
    provider: 'looma-seed',
    externalId: 'seed-oreline-cinder-track-moonstone-pewter',
    importedAt: '2026-05-01T10:50:00.000Z',
    lastSyncedAt: '2026-05-01T10:50:00.000Z'
  }
}, {
  id: 'prod-nova-court-12',
  slug: 'lumen-hall-nova-court-chalk-ink',
  brand: 'Lumen Hall',
  name: 'Nova Court',
  description: 'A clean court silhouette in tumbled leather with a cushioned footbed and narrow contrast foxing.',
  category: 'sneakers',
  colorway: 'Chalk / Ink',
  images: [{
    id: 'img-nova-court-12-primary',
    src: '/images/mock-products/lumen-hall-nova-court-chalk-ink-01.webp',
    alt: 'Lumen Hall Nova Court sneaker in chalk and ink',
    width: 1600,
    height: 2000,
    position: 1,
    isPrimary: true
  }],
  price: {
    amount: 118,
    originalAmount: 148,
    currency: 'USD'
  },
  saleState: 'sale',
  sizes: [{
    id: 'nova-court-us-6',
    label: 'US 6',
    value: '6',
    available: false,
    stock: 0
  }, {
    id: 'nova-court-us-7',
    label: 'US 7',
    value: '7',
    available: true,
    stock: 3
  }, {
    id: 'nova-court-us-8',
    label: 'US 8',
    value: '8',
    available: true,
    stock: 4
  }, {
    id: 'nova-court-us-9',
    label: 'US 9',
    value: '9',
    available: true,
    stock: 2
  }, {
    id: 'nova-court-us-10',
    label: 'US 10',
    value: '10',
    available: false,
    stock: 0
  }],
  sku: 'LH-NC-CHI-012',
  styleCode: 'NC-25-CHI',
  releaseDate: '2025-07-24',
  releaseYear: 2025,
  source: {
    provider: 'looma-seed',
    externalId: 'seed-lumen-hall-nova-court-chalk-ink',
    importedAt: '2026-05-01T10:55:00.000Z',
    lastSyncedAt: '2026-05-01T10:55:00.000Z'
  }
}, {
  id: 'prod-haze-runner-13',
  slug: 'field-archive-haze-runner-fog-moss',
  brand: 'Field Archive',
  name: 'Haze Runner',
  description: 'A tonal mesh runner with brushed overlays, rope laces, and a subtle trail-influenced tread.',
  category: 'sneakers',
  colorway: 'Fog / Moss / Clay',
  images: [{
    id: 'img-haze-runner-13-primary',
    src: '/images/mock-products/field-archive-haze-runner-fog-moss-01.webp',
    alt: 'Field Archive Haze Runner sneaker in fog and moss',
    width: 1600,
    height: 2000,
    position: 1,
    isPrimary: true
  }],
  price: {
    amount: 184,
    originalAmount: 184,
    currency: 'USD'
  },
  saleState: 'regular',
  sizes: [{
    id: 'haze-runner-us-8',
    label: 'US 8',
    value: '8',
    available: true,
    stock: 2
  }, {
    id: 'haze-runner-us-9',
    label: 'US 9',
    value: '9',
    available: true,
    stock: 3
  }, {
    id: 'haze-runner-us-10',
    label: 'US 10',
    value: '10',
    available: true,
    stock: 3
  }, {
    id: 'haze-runner-us-11',
    label: 'US 11',
    value: '11',
    available: true,
    stock: 1
  }, {
    id: 'haze-runner-us-12',
    label: 'US 12',
    value: '12',
    available: false,
    stock: 0
  }],
  sku: 'FA-HR-FMC-013',
  styleCode: 'HR-26-FMC',
  releaseDate: '2026-05-09',
  releaseYear: 2026,
  source: {
    provider: 'looma-seed',
    externalId: 'seed-field-archive-haze-runner-fog-moss',
    importedAt: '2026-05-01T11:00:00.000Z',
    lastSyncedAt: '2026-05-01T11:00:00.000Z'
  }
}, {
  id: 'prod-axis-knit-14',
  slug: 'noon-grid-axis-knit-runner-graph',
  brand: 'Noon Grid',
  name: 'Axis Knit Runner',
  description: 'A sock-like knit runner with suede eyestays, molded heel support, and a quiet monochrome finish.',
  category: 'sneakers',
  colorway: 'Graph / Smoke',
  images: [{
    id: 'img-axis-knit-14-primary',
    src: '/images/mock-products/noon-grid-axis-knit-runner-graph-01.webp',
    alt: 'Noon Grid Axis Knit Runner sneaker in graph and smoke',
    width: 1600,
    height: 2000,
    position: 1,
    isPrimary: true
  }],
  price: {
    amount: 96,
    originalAmount: 156,
    currency: 'USD'
  },
  saleState: 'sale',
  sizes: [{
    id: 'axis-knit-us-7',
    label: 'US 7',
    value: '7',
    available: false,
    stock: 0
  }, {
    id: 'axis-knit-us-8',
    label: 'US 8',
    value: '8',
    available: false,
    stock: 0
  }, {
    id: 'axis-knit-us-9',
    label: 'US 9',
    value: '9',
    available: true,
    stock: 2
  }, {
    id: 'axis-knit-us-10',
    label: 'US 10',
    value: '10',
    available: true,
    stock: 1
  }, {
    id: 'axis-knit-us-11',
    label: 'US 11',
    value: '11',
    available: false,
    stock: 0
  }],
  sku: 'NG-AKR-GSM-014',
  styleCode: 'AKR-25-GSM',
  releaseDate: '2025-12-05',
  releaseYear: 2025,
  source: {
    provider: 'looma-seed',
    externalId: 'seed-noon-grid-axis-knit-runner-graph',
    importedAt: '2026-05-01T11:05:00.000Z',
    lastSyncedAt: '2026-05-01T11:05:00.000Z'
  }
}, {
  id: 'prod-pier-deck-15',
  slug: 'salt-studio-pier-deck-low-ecru-navy',
  brand: 'Salt Studio',
  name: 'Pier Deck Low',
  description: 'A canvas deck sneaker refined with suede trim, tonal stitching, and a flexible vulcanized sole.',
  category: 'sneakers',
  colorway: 'Ecru / Navy',
  images: [{
    id: 'img-pier-deck-15-primary',
    src: '/images/mock-products/salt-studio-pier-deck-low-ecru-navy-01.webp',
    alt: 'Salt Studio Pier Deck Low sneaker in ecru and navy',
    width: 1600,
    height: 2000,
    position: 1,
    isPrimary: true
  }],
  price: {
    amount: 88,
    originalAmount: 88,
    currency: 'USD'
  },
  saleState: 'sold-out',
  sizes: [{
    id: 'pier-deck-us-7',
    label: 'US 7',
    value: '7',
    available: false,
    stock: 0
  }, {
    id: 'pier-deck-us-8',
    label: 'US 8',
    value: '8',
    available: false,
    stock: 0
  }, {
    id: 'pier-deck-us-9',
    label: 'US 9',
    value: '9',
    available: false,
    stock: 0
  }, {
    id: 'pier-deck-us-10',
    label: 'US 10',
    value: '10',
    available: false,
    stock: 0
  }],
  sku: 'SS-PDL-ENV-015',
  styleCode: 'PDL-24-ENV',
  releaseDate: '2024-06-13',
  releaseYear: 2024,
  source: {
    provider: 'looma-seed',
    externalId: 'seed-salt-studio-pier-deck-low-ecru-navy',
    importedAt: '2026-05-01T11:10:00.000Z',
    lastSyncedAt: '2026-05-01T11:10:00.000Z'
  }
}, {
  id: 'prod-terrace-pro-16',
  slug: 'motion-house-terrace-pro-cedar-gum',
  brand: 'Motion House',
  name: 'Terrace Pro',
  description: 'A terrace-inspired sneaker with paneled nubuck, a slim gum sole, and a softly padded tongue.',
  category: 'sneakers',
  colorway: 'Cedar / Cream / Gum',
  images: [{
    id: 'img-terrace-pro-16-primary',
    src: '/images/mock-products/motion-house-terrace-pro-cedar-gum-01.webp',
    alt: 'Motion House Terrace Pro sneaker in cedar and gum',
    width: 1600,
    height: 2000,
    position: 1,
    isPrimary: true
  }],
  price: {
    amount: 136,
    originalAmount: 136,
    currency: 'USD'
  },
  saleState: 'regular',
  sizes: [{
    id: 'terrace-pro-us-7',
    label: 'US 7',
    value: '7',
    available: true,
    stock: 1
  }, {
    id: 'terrace-pro-us-8',
    label: 'US 8',
    value: '8',
    available: true,
    stock: 4
  }, {
    id: 'terrace-pro-us-9',
    label: 'US 9',
    value: '9',
    available: true,
    stock: 4
  }, {
    id: 'terrace-pro-us-10',
    label: 'US 10',
    value: '10',
    available: true,
    stock: 2
  }, {
    id: 'terrace-pro-us-11',
    label: 'US 11',
    value: '11',
    available: false,
    stock: 0
  }],
  sku: 'MH-TP-CGM-016',
  styleCode: 'TP-26-CGM',
  releaseDate: '2026-01-29',
  releaseYear: 2026,
  source: {
    provider: 'looma-seed',
    externalId: 'seed-motion-house-terrace-pro-cedar-gum',
    importedAt: '2026-05-01T11:15:00.000Z',
    lastSyncedAt: '2026-05-01T11:15:00.000Z'
  }
}, {
  id: 'prod-volume-overshirt-17',
  slug: 'grain-index-volume-overshirt-charcoal',
  brand: 'Grain Index',
  name: 'Volume Overshirt',
  description: 'A structured cotton overshirt with dropped shoulders, hidden placket snaps, and oversized utility pockets.',
  category: 'streetwear',
  colorway: 'Charcoal',
  images: [{
    id: 'img-volume-overshirt-17-primary',
    src: '/images/mock-products/grain-index-volume-overshirt-charcoal-01.webp',
    alt: 'Grain Index Volume Overshirt in charcoal',
    width: 1600,
    height: 2000,
    position: 1,
    isPrimary: true
  }],
  price: {
    amount: 128,
    originalAmount: 168,
    currency: 'USD'
  },
  saleState: 'sale',
  sizes: [{
    id: 'volume-overshirt-xs',
    label: 'XS',
    value: 'xs',
    available: true,
    stock: 1
  }, {
    id: 'volume-overshirt-s',
    label: 'S',
    value: 's',
    available: true,
    stock: 3
  }, {
    id: 'volume-overshirt-m',
    label: 'M',
    value: 'm',
    available: false,
    stock: 0
  }, {
    id: 'volume-overshirt-l',
    label: 'L',
    value: 'l',
    available: true,
    stock: 2
  }, {
    id: 'volume-overshirt-xl',
    label: 'XL',
    value: 'xl',
    available: false,
    stock: 0
  }],
  sku: 'GI-VO-CHR-017',
  styleCode: 'VO-25-CHR',
  releaseDate: '2025-10-03',
  releaseYear: 2025,
  source: {
    provider: 'looma-seed',
    externalId: 'seed-grain-index-volume-overshirt-charcoal',
    importedAt: '2026-05-01T11:20:00.000Z',
    lastSyncedAt: '2026-05-01T11:20:00.000Z'
  }
}, {
  id: 'prod-canvas-work-pant-18',
  slug: 'tallway-canvas-work-pant-stone',
  brand: 'Tallway',
  name: 'Canvas Work Pant',
  description: 'A straight-leg canvas pant with double-knee panels, clean pocketing, and a garment-washed finish.',
  category: 'streetwear',
  colorway: 'Stone',
  images: [{
    id: 'img-canvas-work-pant-18-primary',
    src: '/images/mock-products/tallway-canvas-work-pant-stone-01.webp',
    alt: 'Tallway Canvas Work Pant in stone',
    width: 1600,
    height: 2000,
    position: 1,
    isPrimary: true
  }],
  price: {
    amount: 112,
    originalAmount: 112,
    currency: 'USD'
  },
  saleState: 'regular',
  sizes: [{
    id: 'canvas-work-pant-28',
    label: '28',
    value: '28',
    available: true,
    stock: 2
  }, {
    id: 'canvas-work-pant-30',
    label: '30',
    value: '30',
    available: true,
    stock: 4
  }, {
    id: 'canvas-work-pant-32',
    label: '32',
    value: '32',
    available: true,
    stock: 5
  }, {
    id: 'canvas-work-pant-34',
    label: '34',
    value: '34',
    available: false,
    stock: 0
  }, {
    id: 'canvas-work-pant-36',
    label: '36',
    value: '36',
    available: true,
    stock: 1
  }],
  sku: 'TW-CWP-STN-018',
  styleCode: 'CWP-26-STN',
  releaseDate: '2026-02-26',
  releaseYear: 2026,
  source: {
    provider: 'looma-seed',
    externalId: 'seed-tallway-canvas-work-pant-stone',
    importedAt: '2026-05-01T11:25:00.000Z',
    lastSyncedAt: '2026-05-01T11:25:00.000Z'
  }
}, {
  id: 'prod-box-crew-19',
  slug: 'atlas-blank-box-crew-heather-clay',
  brand: 'Atlas Blank',
  name: 'Box Crew Sweatshirt',
  description: 'A dense loopback crewneck cut with a broad body, compact ribbing, and softly washed color.',
  category: 'streetwear',
  colorway: 'Heather Clay',
  images: [{
    id: 'img-box-crew-19-primary',
    src: '/images/mock-products/atlas-blank-box-crew-heather-clay-01.webp',
    alt: 'Atlas Blank Box Crew Sweatshirt in heather clay',
    width: 1600,
    height: 2000,
    position: 1,
    isPrimary: true
  }],
  price: {
    amount: 98,
    originalAmount: 98,
    currency: 'USD'
  },
  saleState: 'regular',
  sizes: [{
    id: 'box-crew-xs',
    label: 'XS',
    value: 'xs',
    available: false,
    stock: 0
  }, {
    id: 'box-crew-s',
    label: 'S',
    value: 's',
    available: true,
    stock: 5
  }, {
    id: 'box-crew-m',
    label: 'M',
    value: 'm',
    available: true,
    stock: 7
  }, {
    id: 'box-crew-l',
    label: 'L',
    value: 'l',
    available: true,
    stock: 3
  }, {
    id: 'box-crew-xl',
    label: 'XL',
    value: 'xl',
    available: false,
    stock: 0
  }],
  sku: 'AB-BCS-HCL-019',
  styleCode: 'BCS-26-HCL',
  releaseDate: '2026-01-11',
  releaseYear: 2026,
  source: {
    provider: 'looma-seed',
    externalId: 'seed-atlas-blank-box-crew-heather-clay',
    importedAt: '2026-05-01T11:30:00.000Z',
    lastSyncedAt: '2026-05-01T11:30:00.000Z'
  }
}, {
  id: 'prod-cropped-rain-shell-20',
  slug: 'rivet-works-cropped-rain-shell-ink',
  brand: 'Rivet Works',
  name: 'Cropped Rain Shell',
  description: 'A matte technical shell with sealed seams, a cropped hem, and concealed zip storage.',
  category: 'streetwear',
  colorway: 'Ink',
  images: [{
    id: 'img-cropped-rain-shell-20-primary',
    src: '/images/mock-products/rivet-works-cropped-rain-shell-ink-01.webp',
    alt: 'Rivet Works Cropped Rain Shell in ink',
    width: 1600,
    height: 2000,
    position: 1,
    isPrimary: true
  }],
  price: {
    amount: 224,
    originalAmount: 280,
    currency: 'USD'
  },
  saleState: 'sale',
  sizes: [{
    id: 'cropped-rain-shell-s',
    label: 'S',
    value: 's',
    available: true,
    stock: 1
  }, {
    id: 'cropped-rain-shell-m',
    label: 'M',
    value: 'm',
    available: true,
    stock: 2
  }, {
    id: 'cropped-rain-shell-l',
    label: 'L',
    value: 'l',
    available: false,
    stock: 0
  }, {
    id: 'cropped-rain-shell-xl',
    label: 'XL',
    value: 'xl',
    available: true,
    stock: 1
  }],
  sku: 'RW-CRS-INK-020',
  styleCode: 'CRS-25-INK',
  releaseDate: '2025-11-18',
  releaseYear: 2025,
  source: {
    provider: 'looma-seed',
    externalId: 'seed-rivet-works-cropped-rain-shell-ink',
    importedAt: '2026-05-01T11:35:00.000Z',
    lastSyncedAt: '2026-05-01T11:35:00.000Z'
  }
}, {
  id: 'prod-quilt-liner-21',
  slug: 'north-form-quilt-liner-jacket-moss',
  brand: 'North Form',
  name: 'Quilt Liner Jacket',
  description: 'A lightweight quilted liner with snap closure, rounded patch pockets, and a relaxed collarless shape.',
  category: 'streetwear',
  colorway: 'Moss',
  images: [{
    id: 'img-quilt-liner-21-primary',
    src: '/images/mock-products/north-form-quilt-liner-jacket-moss-01.webp',
    alt: 'North Form Quilt Liner Jacket in moss',
    width: 1600,
    height: 2000,
    position: 1,
    isPrimary: true
  }],
  price: {
    amount: 190,
    originalAmount: 190,
    currency: 'USD'
  },
  saleState: 'regular',
  sizes: [{
    id: 'quilt-liner-xs',
    label: 'XS',
    value: 'xs',
    available: true,
    stock: 2
  }, {
    id: 'quilt-liner-s',
    label: 'S',
    value: 's',
    available: true,
    stock: 2
  }, {
    id: 'quilt-liner-m',
    label: 'M',
    value: 'm',
    available: true,
    stock: 3
  }, {
    id: 'quilt-liner-l',
    label: 'L',
    value: 'l',
    available: true,
    stock: 1
  }, {
    id: 'quilt-liner-xl',
    label: 'XL',
    value: 'xl',
    available: false,
    stock: 0
  }],
  sku: 'NF-QLJ-MOS-021',
  styleCode: 'QLJ-26-MOS',
  releaseDate: '2026-03-15',
  releaseYear: 2026,
  source: {
    provider: 'looma-seed',
    externalId: 'seed-north-form-quilt-liner-jacket-moss',
    importedAt: '2026-05-01T11:40:00.000Z',
    lastSyncedAt: '2026-05-01T11:40:00.000Z'
  }
}, {
  id: 'prod-rib-tank-22',
  slug: 'soft-axis-rib-tank-cloud',
  brand: 'Soft Axis',
  name: 'Rib Tank',
  description: 'A compact rib tank with clean binding, a close fit, and a smooth heavyweight hand.',
  category: 'streetwear',
  colorway: 'Cloud',
  images: [{
    id: 'img-rib-tank-22-primary',
    src: '/images/mock-products/soft-axis-rib-tank-cloud-01.webp',
    alt: 'Soft Axis Rib Tank in cloud',
    width: 1600,
    height: 2000,
    position: 1,
    isPrimary: true
  }],
  price: {
    amount: 42,
    originalAmount: 56,
    currency: 'USD'
  },
  saleState: 'sale',
  sizes: [{
    id: 'rib-tank-xs',
    label: 'XS',
    value: 'xs',
    available: true,
    stock: 4
  }, {
    id: 'rib-tank-s',
    label: 'S',
    value: 's',
    available: true,
    stock: 7
  }, {
    id: 'rib-tank-m',
    label: 'M',
    value: 'm',
    available: true,
    stock: 5
  }, {
    id: 'rib-tank-l',
    label: 'L',
    value: 'l',
    available: false,
    stock: 0
  }],
  sku: 'SA-RTK-CLD-022',
  styleCode: 'RTK-25-CLD',
  releaseDate: '2025-05-30',
  releaseYear: 2025,
  source: {
    provider: 'looma-seed',
    externalId: 'seed-soft-axis-rib-tank-cloud',
    importedAt: '2026-05-01T11:45:00.000Z',
    lastSyncedAt: '2026-05-01T11:45:00.000Z'
  }
}, {
  id: 'prod-wide-leg-sweatpant-23',
  slug: 'plain-circuit-wide-leg-sweatpant-ash',
  brand: 'Plain Circuit',
  name: 'Wide Leg Sweatpant',
  description: 'A heavyweight fleece sweatpant with a wide leg, elastic drawcord waist, and minimal side branding.',
  category: 'streetwear',
  colorway: 'Ash',
  images: [{
    id: 'img-wide-leg-sweatpant-23-primary',
    src: '/images/mock-products/plain-circuit-wide-leg-sweatpant-ash-01.webp',
    alt: 'Plain Circuit Wide Leg Sweatpant in ash',
    width: 1600,
    height: 2000,
    position: 1,
    isPrimary: true
  }],
  price: {
    amount: 108,
    originalAmount: 108,
    currency: 'USD'
  },
  saleState: 'regular',
  sizes: [{
    id: 'wide-leg-sweatpant-xs',
    label: 'XS',
    value: 'xs',
    available: false,
    stock: 0
  }, {
    id: 'wide-leg-sweatpant-s',
    label: 'S',
    value: 's',
    available: true,
    stock: 3
  }, {
    id: 'wide-leg-sweatpant-m',
    label: 'M',
    value: 'm',
    available: true,
    stock: 6
  }, {
    id: 'wide-leg-sweatpant-l',
    label: 'L',
    value: 'l',
    available: true,
    stock: 2
  }, {
    id: 'wide-leg-sweatpant-xl',
    label: 'XL',
    value: 'xl',
    available: true,
    stock: 1
  }],
  sku: 'PC-WLS-ASH-023',
  styleCode: 'WLS-26-ASH',
  releaseDate: '2026-02-09',
  releaseYear: 2026,
  source: {
    provider: 'looma-seed',
    externalId: 'seed-plain-circuit-wide-leg-sweatpant-ash',
    importedAt: '2026-05-01T11:50:00.000Z',
    lastSyncedAt: '2026-05-01T11:50:00.000Z'
  }
}, {
  id: 'prod-denim-shop-coat-24',
  slug: 'union-shift-denim-shop-coat-rinse',
  brand: 'Union Shift',
  name: 'Denim Shop Coat',
  description: 'A long denim chore coat with a boxy drape, horn buttons, and oversized work pockets.',
  category: 'streetwear',
  colorway: 'Rinse Indigo',
  images: [{
    id: 'img-denim-shop-coat-24-primary',
    src: '/images/mock-products/union-shift-denim-shop-coat-rinse-01.webp',
    alt: 'Union Shift Denim Shop Coat in rinse indigo',
    width: 1600,
    height: 2000,
    position: 1,
    isPrimary: true
  }],
  price: {
    amount: 214,
    originalAmount: 214,
    currency: 'USD'
  },
  saleState: 'sold-out',
  sizes: [{
    id: 'denim-shop-coat-s',
    label: 'S',
    value: 's',
    available: false,
    stock: 0
  }, {
    id: 'denim-shop-coat-m',
    label: 'M',
    value: 'm',
    available: false,
    stock: 0
  }, {
    id: 'denim-shop-coat-l',
    label: 'L',
    value: 'l',
    available: false,
    stock: 0
  }, {
    id: 'denim-shop-coat-xl',
    label: 'XL',
    value: 'xl',
    available: false,
    stock: 0
  }],
  sku: 'US-DSC-RIN-024',
  styleCode: 'DSC-24-RIN',
  releaseDate: '2024-09-07',
  releaseYear: 2024,
  source: {
    provider: 'looma-seed',
    externalId: 'seed-union-shift-denim-shop-coat-rinse',
    importedAt: '2026-05-01T11:55:00.000Z',
    lastSyncedAt: '2026-05-01T11:55:00.000Z'
  }
}, {
  id: 'prod-packable-vest-25',
  slug: 'ridge-room-packable-vest-black',
  brand: 'Ridge Room',
  name: 'Packable Vest',
  description: 'A low-bulk insulated vest with a matte ripstop shell, two-way zip, and packable interior pocket.',
  category: 'streetwear',
  colorway: 'Black',
  images: [{
    id: 'img-packable-vest-25-primary',
    src: '/images/mock-products/ridge-room-packable-vest-black-01.webp',
    alt: 'Ridge Room Packable Vest in black',
    width: 1600,
    height: 2000,
    position: 1,
    isPrimary: true
  }],
  price: {
    amount: 156,
    originalAmount: 196,
    currency: 'USD'
  },
  saleState: 'sale',
  sizes: [{
    id: 'packable-vest-xs',
    label: 'XS',
    value: 'xs',
    available: true,
    stock: 1
  }, {
    id: 'packable-vest-s',
    label: 'S',
    value: 's',
    available: true,
    stock: 2
  }, {
    id: 'packable-vest-m',
    label: 'M',
    value: 'm',
    available: true,
    stock: 3
  }, {
    id: 'packable-vest-l',
    label: 'L',
    value: 'l',
    available: false,
    stock: 0
  }, {
    id: 'packable-vest-xl',
    label: 'XL',
    value: 'xl',
    available: true,
    stock: 1
  }],
  sku: 'RR-PKV-BLK-025',
  styleCode: 'PKV-25-BLK',
  releaseDate: '2025-12-19',
  releaseYear: 2025,
  source: {
    provider: 'looma-seed',
    externalId: 'seed-ridge-room-packable-vest-black',
    importedAt: '2026-05-01T12:00:00.000Z',
    lastSyncedAt: '2026-05-01T12:00:00.000Z'
  }
}, {
  id: 'prod-garment-dye-short-26',
  slug: 'studio-narrow-garment-dye-short-lichen',
  brand: 'Studio Narrow',
  name: 'Garment Dye Short',
  description: 'A relaxed cotton twill short with a soft elastic waist, tonal drawcord, and muted summer wash.',
  category: 'streetwear',
  colorway: 'Lichen',
  images: [{
    id: 'img-garment-dye-short-26-primary',
    src: '/images/mock-products/studio-narrow-garment-dye-short-lichen-01.webp',
    alt: 'Studio Narrow Garment Dye Short in lichen',
    width: 1600,
    height: 2000,
    position: 1,
    isPrimary: true
  }],
  price: {
    amount: 76,
    originalAmount: 76,
    currency: 'USD'
  },
  saleState: 'regular',
  sizes: [{
    id: 'garment-dye-short-xs',
    label: 'XS',
    value: 'xs',
    available: true,
    stock: 2
  }, {
    id: 'garment-dye-short-s',
    label: 'S',
    value: 's',
    available: true,
    stock: 5
  }, {
    id: 'garment-dye-short-m',
    label: 'M',
    value: 'm',
    available: true,
    stock: 4
  }, {
    id: 'garment-dye-short-l',
    label: 'L',
    value: 'l',
    available: false,
    stock: 0
  }, {
    id: 'garment-dye-short-xl',
    label: 'XL',
    value: 'xl',
    available: true,
    stock: 1
  }],
  sku: 'SN-GDS-LIC-026',
  styleCode: 'GDS-26-LIC',
  releaseDate: '2026-04-02',
  releaseYear: 2026,
  source: {
    provider: 'looma-seed',
    externalId: 'seed-studio-narrow-garment-dye-short-lichen',
    importedAt: '2026-05-01T12:05:00.000Z',
    lastSyncedAt: '2026-05-01T12:05:00.000Z'
  }
}, {
  id: 'prod-commuter-tote-27',
  slug: 'offgrid-commuter-tote-olive-black',
  brand: 'Offgrid',
  name: 'Commuter Tote',
  description: 'A structured nylon tote with a padded laptop sleeve, exterior bottle pocket, and reinforced base.',
  category: 'accessories',
  colorway: 'Olive / Black',
  images: [{
    id: 'img-commuter-tote-27-primary',
    src: '/images/mock-products/offgrid-commuter-tote-olive-black-01.webp',
    alt: 'Offgrid Commuter Tote bag in olive and black',
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
    id: 'commuter-tote-os',
    label: 'OS',
    value: 'one-size',
    available: true,
    stock: 6
  }],
  sku: 'OG-CTO-OLB-027',
  styleCode: 'CTO-26-OLB',
  releaseDate: '2026-03-03',
  releaseYear: 2026,
  source: {
    provider: 'looma-seed',
    externalId: 'seed-offgrid-commuter-tote-olive-black',
    importedAt: '2026-05-01T12:10:00.000Z',
    lastSyncedAt: '2026-05-01T12:10:00.000Z'
  }
}, {
  id: 'prod-nylon-daypack-28',
  slug: 'porter-field-nylon-daypack-slate',
  brand: 'Porter Field',
  name: 'Nylon Daypack',
  description: 'A compact everyday backpack with smooth nylon panels, padded straps, and low-profile zip pulls.',
  category: 'accessories',
  colorway: 'Slate',
  images: [{
    id: 'img-nylon-daypack-28-primary',
    src: '/images/mock-products/porter-field-nylon-daypack-slate-01.webp',
    alt: 'Porter Field Nylon Daypack in slate',
    width: 1600,
    height: 2000,
    position: 1,
    isPrimary: true
  }],
  price: {
    amount: 132,
    originalAmount: 168,
    currency: 'USD'
  },
  saleState: 'sale',
  sizes: [{
    id: 'nylon-daypack-os',
    label: 'OS',
    value: 'one-size',
    available: true,
    stock: 3
  }],
  sku: 'PF-NDP-SLT-028',
  styleCode: 'NDP-25-SLT',
  releaseDate: '2025-09-27',
  releaseYear: 2025,
  source: {
    provider: 'looma-seed',
    externalId: 'seed-porter-field-nylon-daypack-slate',
    importedAt: '2026-05-01T12:15:00.000Z',
    lastSyncedAt: '2026-05-01T12:15:00.000Z'
  }
}, {
  id: 'prod-rib-beanie-29',
  slug: 'harbor-club-rib-beanie-oat',
  brand: 'Harbor Club',
  name: 'Rib Beanie',
  description: 'A soft rib knit beanie with a shallow fold, dense hand feel, and subtle woven label.',
  category: 'accessories',
  colorway: 'Oat',
  images: [{
    id: 'img-rib-beanie-29-primary',
    src: '/images/mock-products/harbor-club-rib-beanie-oat-01.webp',
    alt: 'Harbor Club Rib Beanie in oat',
    width: 1600,
    height: 2000,
    position: 1,
    isPrimary: true
  }],
  price: {
    amount: 38,
    originalAmount: 38,
    currency: 'USD'
  },
  saleState: 'regular',
  sizes: [{
    id: 'rib-beanie-os',
    label: 'OS',
    value: 'one-size',
    available: true,
    stock: 12
  }],
  sku: 'HC-RBN-OAT-029',
  styleCode: 'RBN-26-OAT',
  releaseDate: '2026-01-06',
  releaseYear: 2026,
  source: {
    provider: 'looma-seed',
    externalId: 'seed-harbor-club-rib-beanie-oat',
    importedAt: '2026-05-01T12:20:00.000Z',
    lastSyncedAt: '2026-05-01T12:20:00.000Z'
  }
}, {
  id: 'prod-leather-cardholder-30',
  slug: 'minor-room-leather-cardholder-espresso',
  brand: 'Minor Room',
  name: 'Leather Cardholder',
  description: 'A slim vegetable-tanned cardholder with four slots, a center pocket, and hand-burnished edges.',
  category: 'accessories',
  colorway: 'Espresso',
  images: [{
    id: 'img-leather-cardholder-30-primary',
    src: '/images/mock-products/minor-room-leather-cardholder-espresso-01.webp',
    alt: 'Minor Room Leather Cardholder in espresso',
    width: 1600,
    height: 2000,
    position: 1,
    isPrimary: true
  }],
  price: {
    amount: 64,
    originalAmount: 84,
    currency: 'USD'
  },
  saleState: 'sale',
  sizes: [{
    id: 'leather-cardholder-os',
    label: 'OS',
    value: 'one-size',
    available: true,
    stock: 5
  }],
  sku: 'MR-LCH-ESP-030',
  styleCode: 'LCH-25-ESP',
  releaseDate: '2025-08-02',
  releaseYear: 2025,
  source: {
    provider: 'looma-seed',
    externalId: 'seed-minor-room-leather-cardholder-espresso',
    importedAt: '2026-05-01T12:25:00.000Z',
    lastSyncedAt: '2026-05-01T12:25:00.000Z'
  }
}, {
  id: 'prod-web-belt-31',
  slug: 'common-thread-web-belt-taupe',
  brand: 'Common Thread',
  name: 'Web Belt',
  description: 'A durable woven belt with a matte alloy buckle, tonal keeper, and clean utility finish.',
  category: 'accessories',
  colorway: 'Taupe',
  images: [{
    id: 'img-web-belt-31-primary',
    src: '/images/mock-products/common-thread-web-belt-taupe-01.webp',
    alt: 'Common Thread Web Belt in taupe',
    width: 1600,
    height: 2000,
    position: 1,
    isPrimary: true
  }],
  price: {
    amount: 46,
    originalAmount: 46,
    currency: 'USD'
  },
  saleState: 'regular',
  sizes: [{
    id: 'web-belt-s-m',
    label: 'S/M',
    value: 's-m',
    available: true,
    stock: 4
  }, {
    id: 'web-belt-l-xl',
    label: 'L/XL',
    value: 'l-xl',
    available: false,
    stock: 0
  }],
  sku: 'CT-WBT-TAU-031',
  styleCode: 'WBT-26-TAU',
  releaseDate: '2026-04-21',
  releaseYear: 2026,
  source: {
    provider: 'looma-seed',
    externalId: 'seed-common-thread-web-belt-taupe',
    importedAt: '2026-05-01T12:30:00.000Z',
    lastSyncedAt: '2026-05-01T12:30:00.000Z'
  }
}, {
  id: 'prod-canvas-duffel-32',
  slug: 'echelon-canvas-duffel-washed-black',
  brand: 'Echelon',
  name: 'Canvas Duffel',
  description: 'A weekend duffel in washed canvas with leather tabs, removable strap, and internal mesh divider.',
  category: 'accessories',
  colorway: 'Washed Black',
  images: [{
    id: 'img-canvas-duffel-32-primary',
    src: '/images/mock-products/echelon-canvas-duffel-washed-black-01.webp',
    alt: 'Echelon Canvas Duffel in washed black',
    width: 1600,
    height: 2000,
    position: 1,
    isPrimary: true
  }],
  price: {
    amount: 148,
    originalAmount: 148,
    currency: 'USD'
  },
  saleState: 'sold-out',
  sizes: [{
    id: 'canvas-duffel-os',
    label: 'OS',
    value: 'one-size',
    available: false,
    stock: 0
  }],
  sku: 'EC-CDU-WBK-032',
  styleCode: 'CDU-24-WBK',
  releaseDate: '2024-11-16',
  releaseYear: 2024,
  source: {
    provider: 'looma-seed',
    externalId: 'seed-echelon-canvas-duffel-washed-black',
    importedAt: '2026-05-01T12:35:00.000Z',
    lastSyncedAt: '2026-05-01T12:35:00.000Z'
  }
}, {
  id: 'prod-panel-sock-pack-33',
  slug: 'lumen-hall-panel-sock-pack-neutral',
  brand: 'Lumen Hall',
  name: 'Panel Sock Pack',
  description: 'A three-pack of cushioned rib socks with paneled color blocking and a soft combed cotton blend.',
  category: 'accessories',
  colorway: 'Neutral Mix',
  images: [{
    id: 'img-panel-sock-pack-33-primary',
    src: '/images/mock-products/lumen-hall-panel-sock-pack-neutral-01.webp',
    alt: 'Lumen Hall Panel Sock Pack in neutral mix',
    width: 1600,
    height: 2000,
    position: 1,
    isPrimary: true
  }],
  price: {
    amount: 32,
    originalAmount: 42,
    currency: 'USD'
  },
  saleState: 'sale',
  sizes: [{
    id: 'panel-sock-pack-s-m',
    label: 'S/M',
    value: 's-m',
    available: true,
    stock: 8
  }, {
    id: 'panel-sock-pack-l-xl',
    label: 'L/XL',
    value: 'l-xl',
    available: true,
    stock: 6
  }],
  sku: 'LH-PSP-NTM-033',
  styleCode: 'PSP-25-NTM',
  releaseDate: '2025-06-21',
  releaseYear: 2025,
  source: {
    provider: 'looma-seed',
    externalId: 'seed-lumen-hall-panel-sock-pack-neutral',
    importedAt: '2026-05-01T12:40:00.000Z',
    lastSyncedAt: '2026-05-01T12:40:00.000Z'
  }
}, {
  id: 'prod-nylon-crossbody-34',
  slug: 'sable-ridge-nylon-crossbody-clay',
  brand: 'Sable Ridge',
  name: 'Nylon Crossbody',
  description: 'A small crossbody pouch with a wide adjustable strap, padded phone pocket, and water-resistant lining.',
  category: 'accessories',
  colorway: 'Clay',
  images: [{
    id: 'img-nylon-crossbody-34-primary',
    src: '/images/mock-products/sable-ridge-nylon-crossbody-clay-01.webp',
    alt: 'Sable Ridge Nylon Crossbody in clay',
    width: 1600,
    height: 2000,
    position: 1,
    isPrimary: true
  }],
  price: {
    amount: 72,
    originalAmount: 72,
    currency: 'USD'
  },
  saleState: 'regular',
  sizes: [{
    id: 'nylon-crossbody-os',
    label: 'OS',
    value: 'one-size',
    available: true,
    stock: 7
  }],
  sku: 'SR-NCB-CLY-034',
  styleCode: 'NCB-26-CLY',
  releaseDate: '2026-05-01',
  releaseYear: 2026,
  source: {
    provider: 'looma-seed',
    externalId: 'seed-sable-ridge-nylon-crossbody-clay',
    importedAt: '2026-05-01T12:45:00.000Z',
    lastSyncedAt: '2026-05-01T12:45:00.000Z'
  }
}]

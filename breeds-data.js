// breeds-data.js — Dog breed database for Bloodline Acres

var BREED_LIFESPANS = {
  "Australian Cattle Dog": 14,
  "Australian Shepherd": 14,
  "Australian Stumpy Tail Cattle Dog": 14,
  "Bearded Collie": 13,
  "Belgian Malinois": 13,
  "Belgian Sheepdog": 13,
  "Belgian Tervuren": 13,
  "Bergamasco Sheepdog": 14,
  "Berger Picard": 12,
  "Border Collie": 14,
  "Bouvier des Flandres": 11,
  "Briard": 11,
  "Canaan Dog": 14,
  "Cardigan Welsh Corgi": 14,
  "Collie": 13,
  "Entlebucher Mountain Dog": 12,
  "Finnish Lapphund": 13,
  "German Shepherd Dog": 11,
  "Icelandic Sheepdog": 13,
  "Miniature American Shepherd": 12,
  "Norwegian Buhund": 14,
  "Old English Sheepdog": 11,
  "Pembroke Welsh Corgi": 12,
  "Polish Lowland Sheepdog": 12,
  "Puli": 12,
  "Pumi": 12,
  "Pyrenean Shepherd": 16,
  "Shetland Sheepdog": 13,
  "Spanish Water Dog": 13,
  "Swedish Vallhund": 14,
  "Akita": 12,
  "Alaskan Malamute": 12,
  "Anatolian Shepherd Dog": 12,
  "Bernese Mountain Dog": 8,
  "Black Russian Terrier": 11,
  "Boerboel": 10,
  "Boxer": 11,
  "Bullmastiff": 8,
  "Cane Corso": 10,
  "Chinook": 14,
  "Doberman Pinscher": 12,
  "Dogo Argentino": 12,
  "Dogue de Bordeaux": 6,
  "German Pinscher": 13,
  "Giant Schnauzer": 14,
  "Great Dane": 8,
  "Great Pyrenees": 11,
  "Greater Swiss Mountain Dog": 10,
  "Komondor": 11,
  "Kuvasz": 11,
  "Leonberger": 8,
  "Mastiff": 8,
  "Neapolitan Mastiff": 8,
  "Newfoundland": 9,
  "Portuguese Water Dog": 12,
  "Rottweiler": 10,
  "Saint Bernard": 9,
  "Samoyed": 13,
  "Siberian Husky": 13,
  "Standard Schnauzer": 14,
  "Tibetan Mastiff": 11,
  "Kangal Shepherd Dog": 14,
  "Brittany": 13,
  "Chesapeake Bay Retriever": 12,
  "Clumber Spaniel": 11,
  "Cocker Spaniel": 12,
  "Curly-Coated Retriever": 11,
  "English Cocker Spaniel": 13,
  "English Setter": 13,
  "English Springer Spaniel": 13,
  "Field Spaniel": 12,
  "Flat-Coated Retriever": 9,
  "German Shorthaired Pointer": 13,
  "German Wirehaired Pointer": 13,
  "Golden Retriever": 11,
  "Gordon Setter": 11,
  "Irish Red and White Setter": 13,
  "Irish Setter": 13,
  "Irish Water Spaniel": 11,
  "Labrador Retriever": 11,
  "Nova Scotia Duck Tolling Retriever": 13,
  "Pointer": 14,
  "Spinone Italiano": 11,
  "Sussex Spaniel": 12,
  "Vizsla": 13,
  "Weimaraner": 12,
  "Welsh Springer Spaniel": 14,
  "Wirehaired Pointing Griffon": 13,
  "Afghan Hound": 13,
  "American English Coonhound": 12,
  "American Foxhound": 12,
  "Basenji": 14,
  "Basset Hound": 11,
  "Beagle": 12,
  "Black and Tan Coonhound": 11,
  "Bloodhound": 8,
  "Bluetick Coonhound": 12,
  "Borzoi": 12,
  "Cirneco dell Etna": 13,
  "Dachshund": 14,
  "English Foxhound": 12,
  "Greyhound": 12,
  "Harrier": 14,
  "Ibizan Hound": 12,
  "Irish Wolfhound": 7,
  "Norwegian Elkhound": 14,
  "Otterhound": 12,
  "Petit Basset Griffon Vendeen": 15,
  "Pharaoh Hound": 12,
  "Plott Hound": 13,
  "Portuguese Podengo": 14,
  "Redbone Coonhound": 12,
  "Rhodesian Ridgeback": 11,
  "Saluki": 13,
  "Scottish Deerhound": 10,
  "Sloughi": 14,
  "Treeing Walker Coonhound": 12,
  "Whippet": 14,
  "Airedale Terrier": 12,
  "American Hairless Terrier": 15,
  "American Staffordshire Terrier": 14,
  "Australian Terrier": 13,
  "Bedlington Terrier": 14,
  "Border Terrier": 14,
  "Bull Terrier": 12,
  "Cairn Terrier": 14,
  "Cesky Terrier": 14,
  "Dandie Dinmont Terrier": 14,
  "Glen of Imaal Terrier": 12,
  "Irish Terrier": 14,
  "Jack Russell Terrier": 14,
  "Kerry Blue Terrier": 14,
  "Lakeland Terrier": 14,
  "Manchester Terrier": 15,
  "Miniature Bull Terrier": 12,
  "Miniature Schnauzer": 14,
  "Norfolk Terrier": 14,
  "Norwich Terrier": 14,
  "Parson Russell Terrier": 14,
  "Rat Terrier": 15,
  "Russell Terrier": 13,
  "Scottish Terrier": 12,
  "Sealyham Terrier": 13,
  "Skye Terrier": 13,
  "Smooth Fox Terrier": 14,
  "Soft Coated Wheaten Terrier": 13,
  "Staffordshire Bull Terrier": 13,
  "Welsh Terrier": 14,
  "West Highland White Terrier": 14,
  "Wire Fox Terrier": 14,
  "Affenpinscher": 14,
  "Biewer Terrier": 16,
  "Brussels Griffon": 14,
  "Cavalier King Charles Spaniel": 12,
  "Chihuahua": 15,
  "Chinese Crested": 16,
  "English Toy Spaniel": 11,
  "Havanese": 15,
  "Italian Greyhound": 14,
  "Japanese Chin": 11,
  "Maltese": 14,
  "Miniature Pinscher": 14,
  "Papillon": 15,
  "Pekingese": 14,
  "Pomeranian": 14,
  "Pug": 14,
  "Shih Tzu": 14,
  "Silky Terrier": 14,
  "Toy Fox Terrier": 14,
  "Toy Manchester Terrier": 15,
  "Yorkshire Terrier": 13,
  "American Eskimo Dog": 14,
  "Bichon Frise": 14,
  "Boston Terrier": 12,
  "Bulldog": 9,
  "Chinese Shar-Pei": 10,
  "Chow Chow": 10,
  "Coton de Tulear": 17,
  "Dalmatian": 12,
  "Finnish Spitz": 14,
  "French Bulldog": 11,
  "Keeshond": 14,
  "Lhasa Apso": 14,
  "L\xF6wchen": 14,
  "Norwegian Lundehund": 13,
  "Poodle": 14,
  "Schipperke": 14,
  "Shiba Inu": 14,
  "Tibetan Spaniel": 14,
  "Tibetan Terrier": 16,
  "Xoloitzcuintli": 16,
  "Azawakh": 14,
  "Barbet": 13,
  "Belgian Laekenois": 11,
  "Bergamasco": 14,
  "Bracco Italiano": 12,
  "Catahoula Leopard Dog": 12,
  "Czechoslovakian Vlcak": 14,
  "Lagotto Romagnolo": 16,
  "Mudi": 13,
  "Nederlandse Kooikerhondje": 14,
  "Perro de Presa Canario": 10,
  "Peruvian Inca Orchid": 13,
  "Porcelaine": 12,
  "Slovensky Cuvac": 12,
  "Slovensky Kopov": 12,
  "Thai Ridgeback": 12,
  "Transylvanian Hound": 11
};
var SIZE_LIFESPAN = {
  XS: 15,
  S: 13,
  M: 12,
  L: 10,
  XL: 8
};

// Get lifespan in game months for a breed
function getLifespan(breed) {
  var years = BREED_LIFESPANS[breed.name] || SIZE_LIFESPAN[breed.size || "M"] || 12;
  return years * 12; // convert to game months
}

// Get age stage label
function getAgeStage(ageMonths) {
  if (ageMonths < 3) return {
    label: "Newborn",
    color: "#94a3b8",
    canWork: false,
    canBreed: false
  };
  if (ageMonths < 18) return {
    label: "Puppy",
    color: "#38bdf8",
    canWork: false,
    canBreed: false
  };
  if (ageMonths < 36) return {
    label: "Young Adult",
    color: "#22c55e",
    canWork: true,
    canBreed: true
  };
  if (ageMonths < 96) return {
    label: "Prime",
    color: "#a78bfa",
    canWork: true,
    canBreed: true
  };
  if (ageMonths < 110) return {
    label: "Senior",
    color: "#eab308",
    canWork: true,
    canBreed: false
  };
  return {
    label: "Elder",
    color: "#f97316",
    canWork: false,
    canBreed: false
  };
}

// Mixed breed hybrid vigor bonus: +1 to +3 years based on diversity
function mixedLifespanBonus(sire, dam) {
  if (!sire || !dam || sire.breed === dam.breed) return 0;
  // More different = bigger bonus
  var sireGroup = sire.group || "";
  var damGroup = dam.group || "";
  return sireGroup !== damGroup ? 3 : 1; // cross-group gets full bonus
}

// ── DEMO BREEDS ───────────────────────────────────────────────
var DEMO_BREEDS = [{
  "name": "Border Collie",
  "group": "Herding",
  "size": "M",
  "coat": "medium",
  "colors": ["black & white", "red & white", "blue merle", "sable"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 10,
    "energy": 10,
    "trainability": 10,
    "loyalty": 8,
    "playfulness": 9,
    "aggression": 2,
    "preyDrive": 6,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 92,
    "joints": 82
  },
  "aptitudes": ["Agility", "Herding", "Flyball", "Obedience"]
}, {
  "name": "Rough Collie",
  "group": "Herding",
  "size": "L",
  "coat": "long",
  "colors": ["sable", "tricolor", "blue merle"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 4,
    "barkTendency": 7,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 80,
    "eyes": 78,
    "heart": 88,
    "joints": 80
  },
  "aptitudes": ["Herding", "Conformation", "Obedience"]
}, {
  "name": "Smooth Collie",
  "group": "Herding",
  "size": "L",
  "coat": "short",
  "colors": ["sable", "tricolor", "blue merle"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 4,
    "barkTendency": 6,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Herding", "Obedience", "Agility"]
}, {
  "name": "Shetland Sheepdog",
  "group": "Herding",
  "size": "S",
  "coat": "long",
  "colors": ["sable", "tricolor", "blue merle", "black & white"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 9,
    "energy": 7,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 4,
    "barkTendency": 8,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Agility", "Obedience", "Rally-O"]
}, {
  "name": "Pembroke Welsh Corgi",
  "group": "Herding",
  "size": "S",
  "coat": "medium",
  "colors": ["red", "sable", "tricolor", "black & tan"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 4,
    "barkTendency": 7,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 80
  },
  "aptitudes": ["Herding", "Agility", "Conformation"]
}, {
  "name": "Cardigan Welsh Corgi",
  "group": "Herding",
  "size": "S",
  "coat": "medium",
  "colors": ["red", "sable", "brindle", "blue merle"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 4,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 8
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 88,
    "joints": 78
  },
  "aptitudes": ["Herding", "Agility", "Rally-O"]
}, {
  "name": "Bearded Collie",
  "group": "Herding",
  "size": "M",
  "coat": "long",
  "colors": ["black", "brown", "blue", "fawn"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 4,
    "barkTendency": 6,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Herding", "Agility", "Conformation"]
}, {
  "name": "Old English Sheepdog",
  "group": "Herding",
  "size": "L",
  "coat": "long",
  "colors": ["gray & white", "blue & white", "grizzle & white"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 3,
    "barkTendency": 6,
    "sociability": 8,
    "adaptability": 6
  },
  "health": {
    "hips": 72,
    "eyes": 75,
    "heart": 80,
    "joints": 72
  },
  "aptitudes": ["Herding", "Conformation", "Agility"]
}, {
  "name": "German Shepherd",
  "group": "Herding",
  "size": "L",
  "coat": "medium",
  "colors": ["sable", "black", "black & tan", "white"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 9,
    "energy": 8,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 6,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 8
  },
  "health": {
    "hips": 70,
    "eyes": 88,
    "heart": 85,
    "joints": 70
  },
  "aptitudes": ["Schutzhund", "Obedience", "Tracking"]
}, {
  "name": "Dutch Shepherd",
  "group": "Herding",
  "size": "L",
  "coat": "wire",
  "colors": ["gold brindle", "silver brindle"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 9,
    "energy": 9,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 8
  },
  "health": {
    "hips": 80,
    "eyes": 85,
    "heart": 88,
    "joints": 80
  },
  "aptitudes": ["Schutzhund", "Agility", "Obedience"]
}, {
  "name": "Schapendoes",
  "group": "Herding",
  "size": "M",
  "coat": "long",
  "colors": ["black", "gray", "brown", "fawn", "blue"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 5,
    "barkTendency": 6,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Herding", "Agility", "Conformation"]
}, {
  "name": "Belgian Malinois",
  "group": "Herding",
  "size": "L",
  "coat": "short",
  "colors": ["fawn", "mahogany", "red"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 9,
    "energy": 10,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 5,
    "preyDrive": 8,
    "barkTendency": 6,
    "sociability": 6,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 88,
    "heart": 90,
    "joints": 82
  },
  "aptitudes": ["Schutzhund", "Agility", "Tracking"]
}, {
  "name": "Belgian Tervuren",
  "group": "Herding",
  "size": "L",
  "coat": "long",
  "colors": ["fawn & black", "mahogany & black", "gray & black"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 9,
    "energy": 9,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 6,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Schutzhund", "Agility", "Obedience"]
}, {
  "name": "Belgian Groenendael",
  "group": "Herding",
  "size": "L",
  "coat": "long",
  "colors": ["black"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 9,
    "energy": 9,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 6,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Schutzhund", "Obedience", "Tracking"]
}, {
  "name": "Belgian Laekenois",
  "group": "Herding",
  "size": "L",
  "coat": "wire",
  "colors": ["fawn", "red", "gray"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 9,
    "energy": 9,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 6,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Schutzhund", "Obedience", "Conformation"]
}, {
  "name": "Berger Picard",
  "group": "Herding",
  "size": "M",
  "coat": "wire",
  "colors": ["fawn", "brindle", "gray"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 5,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Herding", "Agility", "Conformation"]
}, {
  "name": "Pyrenean Shepherd",
  "group": "Herding",
  "size": "S",
  "coat": "medium",
  "colors": ["fawn", "brindle", "gray", "merle"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 9,
    "energy": 9,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 9,
    "aggression": 3,
    "preyDrive": 6,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Herding", "Agility", "Flyball"]
}, {
  "name": "Beauceron",
  "group": "Herding",
  "size": "L",
  "coat": "short",
  "colors": ["black & tan", "harlequin"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 4,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 82,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Schutzhund", "Herding", "Obedience"]
}, {
  "name": "Briard",
  "group": "Herding",
  "size": "L",
  "coat": "long",
  "colors": ["black", "fawn", "gray"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 4,
    "preyDrive": 5,
    "barkTendency": 6,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 82,
    "joints": 75
  },
  "aptitudes": ["Herding", "Schutzhund", "Conformation"]
}, {
  "name": "Bouvier des Flandres",
  "group": "Herding",
  "size": "L",
  "coat": "wire",
  "colors": ["fawn", "black", "gray brindle"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 4,
    "preyDrive": 5,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 75,
    "eyes": 80,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Schutzhund", "Herding", "Obedience"]
}, {
  "name": "Australian Shepherd",
  "group": "Herding",
  "size": "M",
  "coat": "medium",
  "colors": ["merle", "black", "red", "blue merle"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 9,
    "energy": 9,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 5,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 80,
    "eyes": 85,
    "heart": 90,
    "joints": 80
  },
  "aptitudes": ["Agility", "Herding", "Obedience"]
}, {
  "name": "Miniature American Shepherd",
  "group": "Herding",
  "size": "S",
  "coat": "medium",
  "colors": ["blue merle", "black", "red merle", "red"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 9,
    "energy": 8,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 5,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 90,
    "joints": 82
  },
  "aptitudes": ["Agility", "Herding", "Rally-O"]
}, {
  "name": "Australian Cattle Dog",
  "group": "Herding",
  "size": "M",
  "coat": "short",
  "colors": ["blue", "red speckle", "blue speckle"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 9,
    "energy": 9,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 4,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 7
  },
  "health": {
    "hips": 85,
    "eyes": 88,
    "heart": 92,
    "joints": 85
  },
  "aptitudes": ["Herding", "Agility", "Flyball"]
}, {
  "name": "Australian Kelpie",
  "group": "Herding",
  "size": "M",
  "coat": "short",
  "colors": ["black", "red", "fawn", "chocolate", "blue"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 9,
    "energy": 10,
    "trainability": 9,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 6,
    "adaptability": 8
  },
  "health": {
    "hips": 85,
    "eyes": 88,
    "heart": 90,
    "joints": 85
  },
  "aptitudes": ["Herding", "Agility", "Obedience"]
}, {
  "name": "Australian Stumpy Tail Cattle Dog",
  "group": "Herding",
  "size": "M",
  "coat": "short",
  "colors": ["blue speckle", "red speckle"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 9,
    "energy": 9,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 7
  },
  "health": {
    "hips": 85,
    "eyes": 88,
    "heart": 90,
    "joints": 85
  },
  "aptitudes": ["Herding", "Agility"]
}, {
  "name": "Puli",
  "group": "Herding",
  "size": "M",
  "coat": "corded",
  "colors": ["black", "white", "gray", "cream"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Herding", "Agility", "Conformation"]
}, {
  "name": "Pumi",
  "group": "Herding",
  "size": "S",
  "coat": "curly",
  "colors": ["black", "white", "gray", "fawn"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 9,
    "energy": 9,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 6,
    "barkTendency": 8,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Herding", "Agility", "Obedience"]
}, {
  "name": "Mudi",
  "group": "Herding",
  "size": "M",
  "coat": "wavy",
  "colors": ["black", "white", "fawn", "gray", "merle"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 9,
    "energy": 9,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 6,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Agility", "Herding", "Flyball"]
}, {
  "name": "Komondor",
  "group": "Herding",
  "size": "XL",
  "coat": "corded",
  "colors": ["white"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 5,
    "preyDrive": 4,
    "barkTendency": 7,
    "sociability": 5,
    "adaptability": 4
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Herding", "Conformation", "LGD"]
}, {
  "name": "Bergamasco Sheepdog",
  "group": "Herding",
  "size": "L",
  "coat": "corded",
  "colors": ["black", "gray", "silver"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 3,
    "preyDrive": 5,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Herding", "Conformation"]
}, {
  "name": "Catalan Sheepdog",
  "group": "Herding",
  "size": "M",
  "coat": "long",
  "colors": ["fawn", "sable", "gray", "black"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 5,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Herding", "Agility", "Conformation"]
}, {
  "name": "Portuguese Sheepdog",
  "group": "Herding",
  "size": "M",
  "coat": "long",
  "colors": ["yellow", "cinnamon", "gray", "black"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 5,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Herding", "Conformation", "LGD"]
}, {
  "name": "Croatian Sheepdog",
  "group": "Herding",
  "size": "M",
  "coat": "curly",
  "colors": ["black"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 9,
    "energy": 9,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 6,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Herding", "Agility", "Obedience"]
}, {
  "name": "Swedish Vallhund",
  "group": "Herding",
  "size": "S",
  "coat": "medium",
  "colors": ["gray", "red", "gray-brown"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 6,
    "barkTendency": 7,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Herding", "Agility", "Rally-O"]
}, {
  "name": "Norwegian Buhund",
  "group": "Herding",
  "size": "M",
  "coat": "medium",
  "colors": ["wheaten", "black", "red"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 6,
    "barkTendency": 7,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Herding", "Agility", "Obedience"]
}, {
  "name": "Icelandic Sheepdog",
  "group": "Herding",
  "size": "M",
  "coat": "long",
  "colors": ["tan", "red", "chocolate", "black", "gray"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 9,
    "aggression": 1,
    "preyDrive": 5,
    "barkTendency": 8,
    "sociability": 9,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 90,
    "joints": 82
  },
  "aptitudes": ["Herding", "Agility", "Conformation"]
}, {
  "name": "Finnish Lapphund",
  "group": "Herding",
  "size": "M",
  "coat": "long",
  "colors": ["black", "brown", "white", "sable", "wolf sable"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Herding", "Agility", "Rally-O"]
}, {
  "name": "Swedish Lapphund",
  "group": "Herding",
  "size": "M",
  "coat": "long",
  "colors": ["black", "brown", "bear brown"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 5,
    "barkTendency": 8,
    "sociability": 8,
    "adaptability": 6
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Herding", "Conformation"]
}, {
  "name": "Lapponian Herder",
  "group": "Herding",
  "size": "M",
  "coat": "medium",
  "colors": ["black", "brown", "gray"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 5,
    "barkTendency": 6,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Herding", "Agility"]
}, {
  "name": "Polish Lowland Sheepdog",
  "group": "Herding",
  "size": "M",
  "coat": "long",
  "colors": ["white & black", "white & gray", "white & brown"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 6,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 4,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Herding", "Conformation", "Agility"]
}, {
  "name": "Polish Tatra Sheepdog",
  "group": "Herding",
  "size": "XL",
  "coat": "long",
  "colors": ["white"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 4,
    "preyDrive": 4,
    "barkTendency": 7,
    "sociability": 6,
    "adaptability": 5
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Herding", "Conformation", "LGD"]
}, {
  "name": "Karst Shepherd",
  "group": "Herding",
  "size": "L",
  "coat": "long",
  "colors": ["iron gray"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Herding", "Conformation"]
}, {
  "name": "Greyhound",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["fawn", "black", "blue", "red", "brindle", "white"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 7,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 1,
    "preyDrive": 10,
    "barkTendency": 2,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 88,
    "heart": 90,
    "joints": 82
  },
  "aptitudes": ["Lure Coursing", "Racing", "Conformation"]
}, {
  "name": "Whippet",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["fawn", "brindle", "blue", "black", "white"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 1,
    "preyDrive": 9,
    "barkTendency": 2,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 88,
    "eyes": 90,
    "heart": 92,
    "joints": 88
  },
  "aptitudes": ["Lure Coursing", "Agility", "Conformation"]
}, {
  "name": "Italian Greyhound",
  "group": "Hound",
  "size": "XS",
  "coat": "short",
  "colors": ["fawn", "blue", "black", "cream"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 6,
    "energy": 7,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 1,
    "preyDrive": 8,
    "barkTendency": 4,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 85,
    "eyes": 88,
    "heart": 90,
    "joints": 82
  },
  "aptitudes": ["Lure Coursing", "Agility", "Conformation"]
}, {
  "name": "Afghan Hound",
  "group": "Hound",
  "size": "L",
  "coat": "long",
  "colors": ["cream", "black", "red", "brindle", "blue"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 5,
    "energy": 7,
    "trainability": 3,
    "loyalty": 7,
    "playfulness": 6,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 3,
    "sociability": 6,
    "adaptability": 5
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Lure Coursing", "Conformation"]
}, {
  "name": "Borzoi",
  "group": "Hound",
  "size": "L",
  "coat": "long",
  "colors": ["white", "white & tan", "white & brindle", "golden"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 7,
    "trainability": 4,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 2,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Lure Coursing", "Conformation"]
}, {
  "name": "Irish Wolfhound",
  "group": "Hound",
  "size": "XL",
  "coat": "wire",
  "colors": ["gray", "brindle", "red", "black", "white"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 5,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 1,
    "preyDrive": 7,
    "barkTendency": 3,
    "sociability": 9,
    "adaptability": 6
  },
  "health": {
    "hips": 65,
    "eyes": 75,
    "heart": 58,
    "joints": 65
  },
  "aptitudes": ["Lure Coursing", "Conformation"]
}, {
  "name": "Scottish Deerhound",
  "group": "Hound",
  "size": "XL",
  "coat": "wire",
  "colors": ["dark blue gray", "gray", "brindle", "fawn"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 6,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 1,
    "preyDrive": 8,
    "barkTendency": 2,
    "sociability": 8,
    "adaptability": 6
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 65,
    "joints": 72
  },
  "aptitudes": ["Lure Coursing", "Conformation"]
}, {
  "name": "Saluki",
  "group": "Hound",
  "size": "L",
  "coat": "silky",
  "colors": ["white", "cream", "fawn", "golden", "red", "grizzle", "tricolor"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 8,
    "trainability": 4,
    "loyalty": 8,
    "playfulness": 5,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 2,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Lure Coursing", "Racing", "Conformation"]
}, {
  "name": "Sloughi",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["sandy", "fawn", "brindle"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 7,
    "trainability": 4,
    "loyalty": 8,
    "playfulness": 5,
    "aggression": 3,
    "preyDrive": 9,
    "barkTendency": 2,
    "sociability": 6,
    "adaptability": 5
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Lure Coursing", "Racing", "Conformation"]
}, {
  "name": "Azawakh",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["fawn", "sand", "red", "brindle", "particolored"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 8,
    "trainability": 4,
    "loyalty": 8,
    "playfulness": 5,
    "aggression": 3,
    "preyDrive": 9,
    "barkTendency": 3,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 85,
    "eyes": 88,
    "heart": 90,
    "joints": 85
  },
  "aptitudes": ["Lure Coursing", "Conformation"]
}, {
  "name": "Tazy",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["fawn", "cream", "white", "gray", "black"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 8,
    "trainability": 4,
    "loyalty": 8,
    "playfulness": 5,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 2,
    "sociability": 6,
    "adaptability": 5
  },
  "health": {
    "hips": 85,
    "eyes": 88,
    "heart": 90,
    "joints": 85
  },
  "aptitudes": ["Lure Coursing", "Conformation"]
}, {
  "name": "Taigan",
  "group": "Hound",
  "size": "L",
  "coat": "silky",
  "colors": ["black", "gray", "red", "cream", "white"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 8,
    "trainability": 4,
    "loyalty": 8,
    "playfulness": 5,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 2,
    "sociability": 6,
    "adaptability": 5
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Lure Coursing", "Conformation"]
}, {
  "name": "Hungarian Greyhound",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["fawn", "brindle", "white", "black"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 3,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 85,
    "eyes": 88,
    "heart": 90,
    "joints": 85
  },
  "aptitudes": ["Lure Coursing", "Racing", "Conformation"]
}, {
  "name": "Spanish Greyhound",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["cinnamon", "brindle", "white", "black"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 8,
    "trainability": 4,
    "loyalty": 8,
    "playfulness": 5,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 2,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 85,
    "eyes": 88,
    "heart": 90,
    "joints": 85
  },
  "aptitudes": ["Lure Coursing", "Racing", "Conformation"]
}, {
  "name": "Basenji",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["red & white", "black & white", "tricolor", "brindle"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 4,
    "loyalty": 7,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 8,
    "barkTendency": 1,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 88,
    "eyes": 85,
    "heart": 90,
    "joints": 88
  },
  "aptitudes": ["Lure Coursing", "Agility", "Conformation"]
}, {
  "name": "Pharaoh Hound",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["tan", "rich tan", "chestnut"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 4,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 85,
    "eyes": 88,
    "heart": 90,
    "joints": 85
  },
  "aptitudes": ["Lure Coursing", "Agility", "Conformation"]
}, {
  "name": "Ibizan Hound",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["white", "red", "white & red"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 7,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 3,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 85,
    "eyes": 88,
    "heart": 90,
    "joints": 85
  },
  "aptitudes": ["Lure Coursing", "Agility", "Conformation"]
}, {
  "name": "Cirneco dell'Etna",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["tan", "tan & white"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 6,
    "energy": 8,
    "trainability": 5,
    "loyalty": 7,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 9,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 85,
    "eyes": 88,
    "heart": 90,
    "joints": 85
  },
  "aptitudes": ["Lure Coursing", "Agility", "Conformation"]
}, {
  "name": "Podengo Portugu\xEAs",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["yellow", "fawn", "black", "white"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 8,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 85,
    "eyes": 88,
    "heart": 90,
    "joints": 85
  },
  "aptitudes": ["Lure Coursing", "Agility", "Conformation"]
}, {
  "name": "Podenco Canario",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["red", "fawn", "white & red"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 9,
    "barkTendency": 4,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 85,
    "eyes": 88,
    "heart": 90,
    "joints": 85
  },
  "aptitudes": ["Lure Coursing", "Conformation"]
}, {
  "name": "Thai Ridgeback",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["blue", "black", "red", "fawn"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 5,
    "preyDrive": 8,
    "barkTendency": 4,
    "sociability": 6,
    "adaptability": 5
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Lure Coursing", "Conformation"]
}, {
  "name": "Rhodesian Ridgeback",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["wheaten", "light wheaten", "red wheaten"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 4,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 82,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Tracking", "Lure Coursing", "Conformation"]
}, {
  "name": "Peruvian Inca Orchid",
  "group": "Hound",
  "size": "M",
  "coat": "hairless",
  "colors": ["pink", "brown", "gray"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 8,
    "barkTendency": 4,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Lure Coursing", "Agility", "Conformation"]
}, {
  "name": "Bloodhound",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["black & tan", "red & tan", "liver & tan"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 5,
    "trainability": 4,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 1,
    "preyDrive": 4,
    "barkTendency": 8,
    "sociability": 8,
    "adaptability": 6
  },
  "health": {
    "hips": 65,
    "eyes": 65,
    "heart": 72,
    "joints": 65
  },
  "aptitudes": ["Tracking", "Field Trials", "Conformation"]
}, {
  "name": "Beagle",
  "group": "Hound",
  "size": "S",
  "coat": "short",
  "colors": ["tricolor", "red & white", "lemon & white"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 6,
    "energy": 8,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 7,
    "barkTendency": 9,
    "sociability": 9,
    "adaptability": 8
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Tracking", "Conformation"]
}, {
  "name": "Coonhound (Black & Tan)",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["black & tan"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 7,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 9,
    "sociability": 8,
    "adaptability": 6
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Tracking"]
}, {
  "name": "Redbone Coonhound",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["red", "red & white"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 7,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 9,
    "sociability": 8,
    "adaptability": 6
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Tracking"]
}, {
  "name": "Treeing Walker Coonhound",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["tricolor", "bicolor"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 8,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 9,
    "sociability": 8,
    "adaptability": 6
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Tracking"]
}, {
  "name": "Plott Hound",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["brindle", "black brindle"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 9,
    "barkTendency": 8,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Field Trials", "Tracking", "Conformation"]
}, {
  "name": "American Foxhound",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["tricolor", "white & tan", "bicolor"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 9,
    "trainability": 4,
    "loyalty": 7,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 9,
    "sociability": 8,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Tracking"]
}, {
  "name": "Harrier",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["tricolor", "red & white"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 6,
    "energy": 8,
    "trainability": 5,
    "loyalty": 7,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 8,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Foxhound",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["tricolor", "white & tan"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 9,
    "trainability": 4,
    "loyalty": 7,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 8,
    "sociability": 8,
    "adaptability": 5
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Otterhound",
  "group": "Hound",
  "size": "L",
  "coat": "wire",
  "colors": ["grizzle", "black & tan", "blue & cream"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 7,
    "trainability": 5,
    "loyalty": 7,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 6,
    "sociability": 8,
    "adaptability": 6
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Basset Hound",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["tricolor", "lemon & white", "red & white"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 5,
    "energy": 3,
    "trainability": 4,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 1,
    "preyDrive": 7,
    "barkTendency": 8,
    "sociability": 9,
    "adaptability": 7
  },
  "health": {
    "hips": 72,
    "eyes": 65,
    "heart": 75,
    "joints": 68
  },
  "aptitudes": ["Field Trials", "Tracking", "Conformation"]
}, {
  "name": "Dachshund",
  "group": "Hound",
  "size": "XS",
  "coat": "short",
  "colors": ["red", "black & tan", "dapple", "chocolate & tan"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 6,
    "energy": 6,
    "trainability": 4,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 78,
    "joints": 50
  },
  "aptitudes": ["Earthdog", "Conformation", "Field Trials"]
}, {
  "name": "Bavarian Mountain Hound",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["red", "tan", "fawn brindle"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 3,
    "preyDrive": 9,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Tracking", "Field Trials"]
}, {
  "name": "Hanover Hound",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["red", "tan", "brindle"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 3,
    "preyDrive": 9,
    "barkTendency": 6,
    "sociability": 6,
    "adaptability": 5
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Tracking", "Field Trials"]
}, {
  "name": "Hamiltonst\xF6vare",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["tricolor"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Hygenhund",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["red", "red & white", "black & white"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Dunker",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["black & white", "merle"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Segugio Italiano",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["fawn", "black & tan", "red"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 9,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Tracking", "Conformation"]
}, {
  "name": "Posavac Hound",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["reddish wheaten & white"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Hellenic Hound",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["black & tan"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 3,
    "preyDrive": 9,
    "barkTendency": 7,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 82,
    "eyes": 84,
    "heart": 86,
    "joints": 82
  },
  "aptitudes": ["Field Trials", "Tracking"]
}, {
  "name": "Airedale Terrier",
  "group": "Terrier",
  "size": "L",
  "coat": "wire",
  "colors": ["tan & black", "tan & grizzle"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Earthdog", "Agility", "Obedience"]
}, {
  "name": "Border Terrier",
  "group": "Terrier",
  "size": "S",
  "coat": "wire",
  "colors": ["grizzle & tan", "blue & tan", "red", "wheaten"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 8,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Earthdog", "Agility", "Conformation"]
}, {
  "name": "Bull Terrier",
  "group": "Terrier",
  "size": "M",
  "coat": "short",
  "colors": ["white", "brindle", "red", "fawn"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 6,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 9,
    "aggression": 5,
    "preyDrive": 6,
    "barkTendency": 4,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 78,
    "heart": 75,
    "joints": 78
  },
  "aptitudes": ["Conformation", "Obedience"]
}, {
  "name": "Miniature Bull Terrier",
  "group": "Terrier",
  "size": "S",
  "coat": "short",
  "colors": ["white", "brindle", "red", "fawn"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 6,
    "energy": 8,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 9,
    "aggression": 5,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 78,
    "heart": 72,
    "joints": 78
  },
  "aptitudes": ["Conformation", "Obedience"]
}, {
  "name": "Cairn Terrier",
  "group": "Terrier",
  "size": "XS",
  "coat": "wire",
  "colors": ["red", "brindle", "black", "gray", "cream"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Earthdog", "Agility", "Conformation"]
}, {
  "name": "Scottish Terrier",
  "group": "Terrier",
  "size": "XS",
  "coat": "wire",
  "colors": ["black", "wheaten", "brindle"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 6,
    "energy": 7,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 5,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 80,
    "heart": 82,
    "joints": 80
  },
  "aptitudes": ["Earthdog", "Conformation", "Agility"]
}, {
  "name": "West Highland White Terrier",
  "group": "Terrier",
  "size": "XS",
  "coat": "wire",
  "colors": ["white"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 7,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Earthdog", "Agility", "Conformation"]
}, {
  "name": "Skye Terrier",
  "group": "Terrier",
  "size": "S",
  "coat": "long",
  "colors": ["black", "gray", "cream", "fawn"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 6,
    "energy": 5,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Earthdog", "Conformation"]
}, {
  "name": "Dandie Dinmont Terrier",
  "group": "Terrier",
  "size": "S",
  "coat": "wire",
  "colors": ["pepper", "mustard"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 6,
    "energy": 6,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 72
  },
  "aptitudes": ["Earthdog", "Conformation"]
}, {
  "name": "Norfolk Terrier",
  "group": "Terrier",
  "size": "XS",
  "coat": "wire",
  "colors": ["red", "wheaten", "black & tan", "grizzle"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Earthdog", "Agility", "Conformation"]
}, {
  "name": "Norwich Terrier",
  "group": "Terrier",
  "size": "XS",
  "coat": "wire",
  "colors": ["red", "wheaten", "black & tan", "grizzle"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Earthdog", "Agility", "Conformation"]
}, {
  "name": "Sealyham Terrier",
  "group": "Terrier",
  "size": "S",
  "coat": "wire",
  "colors": ["white", "white & lemon", "white & tan"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 6,
    "energy": 6,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 80,
    "heart": 82,
    "joints": 80
  },
  "aptitudes": ["Earthdog", "Conformation", "Agility"]
}, {
  "name": "Lakeland Terrier",
  "group": "Terrier",
  "size": "S",
  "coat": "wire",
  "colors": ["black & tan", "blue & tan", "red", "grizzle", "wheaten"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 8,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Earthdog", "Agility", "Conformation"]
}, {
  "name": "Manchester Terrier",
  "group": "Terrier",
  "size": "S",
  "coat": "short",
  "colors": ["black & tan"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 8,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 8
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Earthdog", "Agility", "Conformation"]
}, {
  "name": "Bedlington Terrier",
  "group": "Terrier",
  "size": "S",
  "coat": "curly",
  "colors": ["blue", "liver", "sandy"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Earthdog", "Agility", "Conformation"]
}, {
  "name": "Welsh Terrier",
  "group": "Terrier",
  "size": "M",
  "coat": "wire",
  "colors": ["tan & black", "tan & grizzle"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Earthdog", "Agility", "Conformation"]
}, {
  "name": "Kerry Blue Terrier",
  "group": "Terrier",
  "size": "M",
  "coat": "curly",
  "colors": ["blue", "blue gray"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 5,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 80,
    "eyes": 80,
    "heart": 82,
    "joints": 80
  },
  "aptitudes": ["Earthdog", "Agility", "Herding"]
}, {
  "name": "Irish Terrier",
  "group": "Terrier",
  "size": "M",
  "coat": "wire",
  "colors": ["red", "golden red", "wheaten"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 5,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Earthdog", "Agility", "Conformation"]
}, {
  "name": "Glen of Imaal Terrier",
  "group": "Terrier",
  "size": "S",
  "coat": "wire",
  "colors": ["blue", "brindle", "wheaten"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 6,
    "energy": 6,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 8,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Earthdog", "Conformation"]
}, {
  "name": "Soft Coated Wheaten Terrier",
  "group": "Terrier",
  "size": "M",
  "coat": "silky",
  "colors": ["wheaten"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 6,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Agility", "Obedience", "Conformation"]
}, {
  "name": "Jack Russell Terrier",
  "group": "Terrier",
  "size": "XS",
  "coat": "short",
  "colors": ["white & tan", "white & black", "tricolor"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 8,
    "energy": 10,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 10,
    "aggression": 4,
    "preyDrive": 9,
    "barkTendency": 8,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 88,
    "eyes": 88,
    "heart": 90,
    "joints": 88
  },
  "aptitudes": ["Earthdog", "Agility", "Flyball"]
}, {
  "name": "Parson Russell Terrier",
  "group": "Terrier",
  "size": "S",
  "coat": "wire",
  "colors": ["white & tan", "white & black", "tricolor"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 8,
    "energy": 9,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 9,
    "aggression": 4,
    "preyDrive": 9,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 88,
    "eyes": 88,
    "heart": 90,
    "joints": 88
  },
  "aptitudes": ["Earthdog", "Agility", "Conformation"]
}, {
  "name": "Patterdale Terrier",
  "group": "Terrier",
  "size": "XS",
  "coat": "short",
  "colors": ["black", "red", "chocolate", "grizzle", "black & tan"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 5,
    "preyDrive": 10,
    "barkTendency": 7,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 85,
    "eyes": 85,
    "heart": 88,
    "joints": 85
  },
  "aptitudes": ["Earthdog", "Field Trials"]
}, {
  "name": "Miniature Schnauzer",
  "group": "Terrier",
  "size": "S",
  "coat": "wire",
  "colors": ["salt & pepper", "black", "black & silver"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 8
  },
  "health": {
    "hips": 84,
    "eyes": 82,
    "heart": 82,
    "joints": 84
  },
  "aptitudes": ["Earthdog", "Obedience", "Agility"]
}, {
  "name": "Staffordshire Bull Terrier",
  "group": "Terrier",
  "size": "M",
  "coat": "short",
  "colors": ["brindle", "red", "fawn", "black", "blue"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 9,
    "aggression": 5,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 80,
    "eyes": 80,
    "heart": 82,
    "joints": 80
  },
  "aptitudes": ["Agility", "Conformation", "Obedience"]
}, {
  "name": "American Pit Bull Terrier",
  "group": "Terrier",
  "size": "M",
  "coat": "short",
  "colors": ["red", "brindle", "fawn", "black", "blue", "white"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 9,
    "aggression": 5,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 82,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Agility", "Obedience", "Conformation"]
}, {
  "name": "American Staffordshire Terrier",
  "group": "Terrier",
  "size": "M",
  "coat": "short",
  "colors": ["brindle", "fawn", "red", "black", "blue"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 5,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 80,
    "joints": 78
  },
  "aptitudes": ["Agility", "Obedience", "Conformation"]
}, {
  "name": "Rat Terrier",
  "group": "Terrier",
  "size": "S",
  "coat": "short",
  "colors": ["tricolor", "black & tan", "white & black", "blue & white"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 9,
    "aggression": 3,
    "preyDrive": 8,
    "barkTendency": 6,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 85,
    "eyes": 85,
    "heart": 88,
    "joints": 85
  },
  "aptitudes": ["Earthdog", "Agility", "Flyball"]
}, {
  "name": "Fox Terrier (Smooth)",
  "group": "Terrier",
  "size": "S",
  "coat": "short",
  "colors": ["white & black", "white & tan", "tricolor"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 9,
    "aggression": 4,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Earthdog", "Agility", "Conformation"]
}, {
  "name": "Fox Terrier (Wire)",
  "group": "Terrier",
  "size": "S",
  "coat": "wire",
  "colors": ["white & black", "white & tan", "tricolor"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 9,
    "aggression": 4,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Earthdog", "Agility", "Conformation"]
}, {
  "name": "Cesky Terrier",
  "group": "Terrier",
  "size": "S",
  "coat": "wire",
  "colors": ["gray-blue", "light coffee brown"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Earthdog", "Conformation", "Agility"]
}, {
  "name": "Jagdterrier",
  "group": "Terrier",
  "size": "S",
  "coat": "wire",
  "colors": ["black & tan", "dark brown & tan"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 5,
    "preyDrive": 10,
    "barkTendency": 6,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 84,
    "eyes": 85,
    "heart": 88,
    "joints": 84
  },
  "aptitudes": ["Earthdog", "Field Trials", "Tracking"]
}, {
  "name": "Australian Terrier",
  "group": "Terrier",
  "size": "XS",
  "coat": "wire",
  "colors": ["blue & tan", "sandy", "red"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 7,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Earthdog", "Agility", "Conformation"]
}, {
  "name": "Boxer",
  "group": "Working",
  "size": "L",
  "coat": "short",
  "colors": ["fawn", "brindle"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 9,
    "aggression": 3,
    "preyDrive": 5,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 72,
    "eyes": 80,
    "heart": 72,
    "joints": 72
  },
  "aptitudes": ["Schutzhund", "Agility", "Conformation"]
}, {
  "name": "Doberman Pinscher",
  "group": "Working",
  "size": "L",
  "coat": "short",
  "colors": ["black", "red", "blue", "fawn"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 9,
    "energy": 8,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 5,
    "preyDrive": 6,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 8
  },
  "health": {
    "hips": 75,
    "eyes": 82,
    "heart": 72,
    "joints": 75
  },
  "aptitudes": ["Schutzhund", "Obedience", "Agility"]
}, {
  "name": "Rottweiler",
  "group": "Working",
  "size": "L",
  "coat": "short",
  "colors": ["black & tan", "black & mahogany"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 6,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 72,
    "eyes": 80,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Schutzhund", "Obedience", "Tracking"]
}, {
  "name": "Giant Schnauzer",
  "group": "Working",
  "size": "L",
  "coat": "wire",
  "colors": ["black", "salt & pepper"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 9,
    "energy": 8,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 6,
    "sociability": 6,
    "adaptability": 7
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Schutzhund", "Obedience", "Agility"]
}, {
  "name": "Standard Schnauzer",
  "group": "Working",
  "size": "M",
  "coat": "wire",
  "colors": ["black", "salt & pepper"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 5,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 82,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Schutzhund", "Obedience", "Agility"]
}, {
  "name": "Akita Inu",
  "group": "Working",
  "size": "L",
  "coat": "medium",
  "colors": ["fawn", "red", "brindle", "white"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 6,
    "preyDrive": 7,
    "barkTendency": 4,
    "sociability": 5,
    "adaptability": 6
  },
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Conformation", "Obedience"]
}, {
  "name": "American Akita",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["fawn", "brindle", "white", "pinto"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 6,
    "preyDrive": 7,
    "barkTendency": 4,
    "sociability": 5,
    "adaptability": 6
  },
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Conformation", "Obedience"]
}, {
  "name": "Siberian Husky",
  "group": "Working",
  "size": "L",
  "coat": "medium",
  "colors": ["gray & white", "black & white", "red & white", "sable"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 5,
    "loyalty": 7,
    "playfulness": 9,
    "aggression": 2,
    "preyDrive": 7,
    "barkTendency": 7,
    "sociability": 8,
    "adaptability": 6
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Sled Racing", "Agility", "Conformation"]
}, {
  "name": "Alaskan Malamute",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["gray & white", "sable & white", "black & white", "red & white"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 82,
    "joints": 75
  },
  "aptitudes": ["Sled Racing", "Draft", "Conformation"]
}, {
  "name": "Greenland Dog",
  "group": "Working",
  "size": "L",
  "coat": "long",
  "colors": ["white", "black", "gray", "sable"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 9,
    "trainability": 4,
    "loyalty": 7,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 6,
    "adaptability": 4
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Sled Racing", "Conformation"]
}, {
  "name": "Canadian Eskimo Dog",
  "group": "Working",
  "size": "L",
  "coat": "long",
  "colors": ["white", "gray", "black", "sable"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 9,
    "trainability": 4,
    "loyalty": 7,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 5,
    "adaptability": 4
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Sled Racing", "Conformation"]
}, {
  "name": "Bernese Mountain Dog",
  "group": "Working",
  "size": "L",
  "coat": "long",
  "colors": ["tricolor"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 3,
    "barkTendency": 4,
    "sociability": 9,
    "adaptability": 6
  },
  "health": {
    "hips": 62,
    "eyes": 75,
    "heart": 65,
    "joints": 62
  },
  "aptitudes": ["Draft", "Conformation", "Obedience"]
}, {
  "name": "Greater Swiss Mountain Dog",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["tricolor"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 3,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 6
  },
  "health": {
    "hips": 68,
    "eyes": 78,
    "heart": 72,
    "joints": 68
  },
  "aptitudes": ["Draft", "Conformation", "Obedience"]
}, {
  "name": "Appenzeller Sennenhund",
  "group": "Working",
  "size": "M",
  "coat": "short",
  "colors": ["tricolor"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 9,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 75,
    "eyes": 80,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Draft", "Agility", "Conformation"]
}, {
  "name": "Entlebucher Mountain Dog",
  "group": "Working",
  "size": "M",
  "coat": "short",
  "colors": ["tricolor"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 9,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 5,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Draft", "Agility", "Conformation"]
}, {
  "name": "Saint Bernard",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["red & white", "mahogany & white", "brindle & white"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 4,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 1,
    "preyDrive": 2,
    "barkTendency": 4,
    "sociability": 9,
    "adaptability": 5
  },
  "health": {
    "hips": 62,
    "eyes": 72,
    "heart": 65,
    "joints": 62
  },
  "aptitudes": ["Draft", "Conformation", "Obedience"]
}, {
  "name": "Newfoundland",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["black", "brown", "gray", "landseer"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 4,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 1,
    "preyDrive": 2,
    "barkTendency": 3,
    "sociability": 9,
    "adaptability": 6
  },
  "health": {
    "hips": 68,
    "eyes": 75,
    "heart": 70,
    "joints": 68
  },
  "aptitudes": ["Draft", "Dock Diving", "Conformation"]
}, {
  "name": "Leonberger",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["lion-yellow", "red", "sandy"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 3,
    "barkTendency": 4,
    "sociability": 9,
    "adaptability": 7
  },
  "health": {
    "hips": 65,
    "eyes": 72,
    "heart": 68,
    "joints": 65
  },
  "aptitudes": ["Draft", "Conformation", "Obedience"]
}, {
  "name": "Hovawart",
  "group": "Working",
  "size": "L",
  "coat": "long",
  "colors": ["black", "blond", "black & gold"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 4,
    "preyDrive": 5,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Schutzhund", "Tracking", "Conformation"]
}, {
  "name": "English Mastiff",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["fawn", "apricot", "brindle"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 3,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 3,
    "preyDrive": 3,
    "barkTendency": 4,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 62,
    "eyes": 72,
    "heart": 65,
    "joints": 62
  },
  "aptitudes": ["Conformation", "Obedience"]
}, {
  "name": "Bullmastiff",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["fawn", "red", "brindle"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 4,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 65,
    "eyes": 72,
    "heart": 68,
    "joints": 65
  },
  "aptitudes": ["Schutzhund", "Conformation", "Obedience"]
}, {
  "name": "Neapolitan Mastiff",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["black", "gray", "mahogany", "tawny", "blue"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 3,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 5,
    "preyDrive": 4,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 4
  },
  "health": {
    "hips": 62,
    "eyes": 68,
    "heart": 65,
    "joints": 62
  },
  "aptitudes": ["Conformation", "Obedience"]
}, {
  "name": "Dogue de Bordeaux",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["fawn", "mahogany", "red"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 4,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 5,
    "preyDrive": 4,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 65,
    "eyes": 70,
    "heart": 65,
    "joints": 65
  },
  "aptitudes": ["Schutzhund", "Conformation", "Obedience"]
}, {
  "name": "Cane Corso",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["black", "gray", "fawn", "brindle"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 6,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 6,
    "preyDrive": 6,
    "barkTendency": 4,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 72,
    "joints": 70
  },
  "aptitudes": ["Schutzhund", "Conformation", "Obedience"]
}, {
  "name": "Broholmer",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["yellow", "brown", "black"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 3,
    "preyDrive": 3,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 65,
    "eyes": 72,
    "heart": 68,
    "joints": 65
  },
  "aptitudes": ["Conformation", "Obedience"]
}, {
  "name": "Boerboel",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["fawn", "red", "brindle", "brown"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 6,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 6,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 68,
    "eyes": 72,
    "heart": 70,
    "joints": 68
  },
  "aptitudes": ["Schutzhund", "Conformation", "Obedience"]
}, {
  "name": "Rhodesian Ridgeback",
  "group": "Working",
  "size": "L",
  "coat": "short",
  "colors": ["wheaten", "light wheaten", "red wheaten"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 4,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 82,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Tracking", "Lure Coursing", "Conformation"]
}, {
  "name": "Cimarron Uruguayo",
  "group": "Working",
  "size": "L",
  "coat": "short",
  "colors": ["brindle", "fawn"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 5,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Schutzhund", "Conformation"]
}, {
  "name": "Spanish Mastiff",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["fawn", "red", "black", "brindle", "wolf sable"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 4,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 4,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 6,
    "adaptability": 5
  },
  "health": {
    "hips": 65,
    "eyes": 72,
    "heart": 68,
    "joints": 65
  },
  "aptitudes": ["Conformation", "Obedience", "LGD"]
}, {
  "name": "Pyrenean Mastiff",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["white & gray", "white & beige", "white & black"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 4,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 3,
    "preyDrive": 4,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 65,
    "eyes": 72,
    "heart": 68,
    "joints": 65
  },
  "aptitudes": ["Conformation", "Obedience"]
}, {
  "name": "Great Pyrenees",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["white", "white & badger", "white & gray"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 3,
    "preyDrive": 4,
    "barkTendency": 8,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 70,
    "eyes": 78,
    "heart": 75,
    "joints": 70
  },
  "aptitudes": ["Conformation", "Obedience", "LGD"]
}, {
  "name": "Dogo Argentino",
  "group": "Working",
  "size": "L",
  "coat": "short",
  "colors": ["white"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 6,
    "preyDrive": 9,
    "barkTendency": 4,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 72,
    "eyes": 72,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Schutzhund", "Tracking", "Conformation"]
}, {
  "name": "Fila Brasileiro",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["fawn", "brindle", "black"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 5,
    "loyalty": 10,
    "playfulness": 4,
    "aggression": 7,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 4,
    "adaptability": 4
  },
  "health": {
    "hips": 65,
    "eyes": 70,
    "heart": 68,
    "joints": 65
  },
  "aptitudes": ["Tracking", "Conformation"]
}, {
  "name": "Perro de Presa Canario",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["brindle", "fawn"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 6,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 5
  },
  "health": {
    "hips": 68,
    "eyes": 72,
    "heart": 72,
    "joints": 68
  },
  "aptitudes": ["Schutzhund", "Conformation", "Obedience"]
}, {
  "name": "Caucasian Ovcharka",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["gray", "fawn", "white", "brindle", "piebald"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 7,
    "preyDrive": 6,
    "barkTendency": 7,
    "sociability": 4,
    "adaptability": 5
  },
  "health": {
    "hips": 68,
    "eyes": 72,
    "heart": 72,
    "joints": 68
  },
  "aptitudes": ["Schutzhund", "Conformation", "LGD"]
}, {
  "name": "Central Asian Ovcharka",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["white", "gray", "fawn", "black", "brindle"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 6,
    "preyDrive": 6,
    "barkTendency": 7,
    "sociability": 4,
    "adaptability": 6
  },
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 75,
    "joints": 70
  },
  "aptitudes": ["Schutzhund", "Conformation", "LGD"]
}, {
  "name": "South Russian Ovcharka",
  "group": "Working",
  "size": "L",
  "coat": "long",
  "colors": ["white", "gray", "white & gray"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 6,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 6,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 4,
    "adaptability": 5
  },
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 78,
    "joints": 70
  },
  "aptitudes": ["Conformation"]
}, {
  "name": "Black Russian Terrier",
  "group": "Working",
  "size": "L",
  "coat": "wire",
  "colors": ["black"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 7
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Schutzhund", "Obedience", "Conformation"]
}, {
  "name": "Moscow Watchdog",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["red & white", "piebald"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 5,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 4,
    "preyDrive": 4,
    "barkTendency": 6,
    "sociability": 6,
    "adaptability": 5
  },
  "health": {
    "hips": 68,
    "eyes": 72,
    "heart": 70,
    "joints": 68
  },
  "aptitudes": ["Conformation", "Obedience"]
}, {
  "name": "Kangal",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["fawn", "tan", "sable"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 4,
    "preyDrive": 5,
    "barkTendency": 6,
    "sociability": 6,
    "adaptability": 7
  },
  "health": {
    "hips": 75,
    "eyes": 80,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Conformation", "Obedience", "LGD"]
}, {
  "name": "Anatolian Shepherd",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["fawn", "brindle", "white"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 5,
    "adaptability": 6
  },
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Conformation", "LGD"]
}, {
  "name": "Akbash",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["white"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 4,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 5,
    "adaptability": 6
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Conformation", "LGD"]
}, {
  "name": "Bully Kutta",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["white", "fawn", "black", "brindle", "harlequin"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 7,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 68,
    "eyes": 72,
    "heart": 72,
    "joints": 68
  },
  "aptitudes": ["Schutzhund", "Conformation"]
}, {
  "name": "Rajapalayam",
  "group": "Working",
  "size": "L",
  "coat": "short",
  "colors": ["white"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 5,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Conformation"]
}, {
  "name": "Tosa Inu",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["red", "brindle", "fawn", "black"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 7,
    "preyDrive": 6,
    "barkTendency": 3,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 68,
    "eyes": 72,
    "heart": 70,
    "joints": 68
  },
  "aptitudes": ["Schutzhund", "Conformation"]
}, {
  "name": "Tibetan Mastiff",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["black", "brown", "blue gray", "red"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 4,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 5,
    "adaptability": 4
  },
  "health": {
    "hips": 68,
    "eyes": 75,
    "heart": 75,
    "joints": 68
  },
  "aptitudes": ["Conformation", "LGD"]
}, {
  "name": "Great Dane",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["fawn", "brindle", "blue", "black", "harlequin"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 4,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 6
  },
  "health": {
    "hips": 58,
    "eyes": 78,
    "heart": 62,
    "joints": 58
  },
  "aptitudes": ["Conformation", "Obedience"]
}, {
  "name": "Labrador Retriever",
  "group": "Sporting",
  "size": "L",
  "coat": "short",
  "colors": ["black", "yellow", "chocolate"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 9,
    "aggression": 1,
    "preyDrive": 5,
    "barkTendency": 4,
    "sociability": 10,
    "adaptability": 9
  },
  "health": {
    "hips": 72,
    "eyes": 82,
    "heart": 85,
    "joints": 72
  },
  "aptitudes": ["Field Trials", "Dock Diving", "Obedience"]
}, {
  "name": "Golden Retriever",
  "group": "Sporting",
  "size": "L",
  "coat": "long",
  "colors": ["light golden", "golden", "dark golden"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 9,
    "aggression": 1,
    "preyDrive": 5,
    "barkTendency": 4,
    "sociability": 10,
    "adaptability": 9
  },
  "health": {
    "hips": 70,
    "eyes": 80,
    "heart": 75,
    "joints": 70
  },
  "aptitudes": ["Field Trials", "Dock Diving", "Obedience"]
}, {
  "name": "Flat-Coated Retriever",
  "group": "Sporting",
  "size": "L",
  "coat": "long",
  "colors": ["black", "liver"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 9,
    "aggression": 1,
    "preyDrive": 5,
    "barkTendency": 4,
    "sociability": 9,
    "adaptability": 8
  },
  "health": {
    "hips": 72,
    "eyes": 80,
    "heart": 82,
    "joints": 72
  },
  "aptitudes": ["Field Trials", "Dock Diving", "Conformation"]
}, {
  "name": "Curly-Coated Retriever",
  "group": "Sporting",
  "size": "L",
  "coat": "curly",
  "colors": ["black", "liver"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 5,
    "barkTendency": 4,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 72,
    "eyes": 80,
    "heart": 82,
    "joints": 72
  },
  "aptitudes": ["Field Trials", "Dock Diving", "Conformation"]
}, {
  "name": "Chesapeake Bay Retriever",
  "group": "Sporting",
  "size": "L",
  "coat": "wavy",
  "colors": ["brown", "sedge", "deadgrass"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 72,
    "eyes": 80,
    "heart": 82,
    "joints": 72
  },
  "aptitudes": ["Field Trials", "Dock Diving", "Conformation"]
}, {
  "name": "Nova Scotia Duck Tolling Retriever",
  "group": "Sporting",
  "size": "M",
  "coat": "medium",
  "colors": ["red", "orange", "red & white"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 9,
    "energy": 9,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 9,
    "aggression": 2,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Agility", "Dock Diving"]
}, {
  "name": "German Shorthaired Pointer",
  "group": "Sporting",
  "size": "L",
  "coat": "short",
  "colors": ["liver", "liver & white", "black", "black & white"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 9,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 82,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Agility", "Dock Diving"]
}, {
  "name": "German Wirehaired Pointer",
  "group": "Sporting",
  "size": "L",
  "coat": "wire",
  "colors": ["liver", "liver & white", "roan"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 9,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 9,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 78,
    "eyes": 82,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Tracking", "Conformation"]
}, {
  "name": "German Longhaired Pointer",
  "group": "Sporting",
  "size": "L",
  "coat": "long",
  "colors": ["brown", "brown & white"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 4,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 82,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Weimaraner",
  "group": "Sporting",
  "size": "L",
  "coat": "short",
  "colors": ["silver gray", "mouse gray", "silver"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 9,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 8,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 75,
    "eyes": 80,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Field Trials", "Tracking", "Agility"]
}, {
  "name": "Vizsla",
  "group": "Sporting",
  "size": "L",
  "coat": "short",
  "colors": ["golden rust", "dark sandy gold"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 9,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 78,
    "eyes": 82,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Agility", "Conformation"]
}, {
  "name": "Wirehaired Vizsla",
  "group": "Sporting",
  "size": "L",
  "coat": "wire",
  "colors": ["golden rust"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 9,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 4,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 82,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Tracking", "Conformation"]
}, {
  "name": "Pudelpointer",
  "group": "Sporting",
  "size": "L",
  "coat": "wire",
  "colors": ["liver", "brown", "chestnut"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 4,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 82,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Tracking"]
}, {
  "name": "Bracco Italiano",
  "group": "Sporting",
  "size": "L",
  "coat": "short",
  "colors": ["white & orange", "white & chestnut", "roan"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 1,
    "preyDrive": 8,
    "barkTendency": 4,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 75,
    "eyes": 80,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Spinone Italiano",
  "group": "Sporting",
  "size": "L",
  "coat": "wire",
  "colors": ["white", "white & orange", "white & brown roan"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 1,
    "preyDrive": 7,
    "barkTendency": 3,
    "sociability": 9,
    "adaptability": 8
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 80,
    "joints": 72
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Lagotto Romagnolo",
  "group": "Sporting",
  "size": "M",
  "coat": "curly",
  "colors": ["white", "brown", "orange", "roan"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 5,
    "barkTendency": 4,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Agility", "Tracking"]
}, {
  "name": "Brittany Spaniel",
  "group": "Sporting",
  "size": "M",
  "coat": "medium",
  "colors": ["orange & white", "liver & white", "black & white"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 9,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 9,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Agility", "Conformation"]
}, {
  "name": "Wirehaired Pointing Griffon",
  "group": "Sporting",
  "size": "L",
  "coat": "wire",
  "colors": ["steel gray & brown", "chestnut"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 4,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Tracking", "Conformation"]
}, {
  "name": "Barbet",
  "group": "Sporting",
  "size": "M",
  "coat": "curly",
  "colors": ["black", "brown", "gray", "fawn", "white"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 1,
    "preyDrive": 5,
    "barkTendency": 4,
    "sociability": 9,
    "adaptability": 8
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Dock Diving", "Agility"]
}, {
  "name": "Drentsche Patrijshond",
  "group": "Sporting",
  "size": "L",
  "coat": "medium",
  "colors": ["white & brown", "white & orange"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 1,
    "preyDrive": 8,
    "barkTendency": 4,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Kooikerhondje",
  "group": "Sporting",
  "size": "S",
  "coat": "long",
  "colors": ["orange & white"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Agility", "Conformation"]
}, {
  "name": "English Setter",
  "group": "Sporting",
  "size": "L",
  "coat": "long",
  "colors": ["blue belton", "orange belton", "lemon belton", "liver belton"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 1,
    "preyDrive": 7,
    "barkTendency": 4,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 80,
    "joints": 72
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Irish Setter",
  "group": "Sporting",
  "size": "L",
  "coat": "long",
  "colors": ["mahogany", "chestnut"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 9,
    "aggression": 1,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 9,
    "adaptability": 7
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 80,
    "joints": 72
  },
  "aptitudes": ["Field Trials", "Agility", "Conformation"]
}, {
  "name": "Irish Red & White Setter",
  "group": "Sporting",
  "size": "L",
  "coat": "long",
  "colors": ["red & white"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 1,
    "preyDrive": 7,
    "barkTendency": 4,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 80,
    "joints": 72
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Gordon Setter",
  "group": "Sporting",
  "size": "L",
  "coat": "long",
  "colors": ["black & tan"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 80,
    "joints": 72
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "English Pointer",
  "group": "Sporting",
  "size": "L",
  "coat": "short",
  "colors": ["liver", "black", "orange", "lemon"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 4,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 78,
    "eyes": 82,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "English Springer Spaniel",
  "group": "Sporting",
  "size": "M",
  "coat": "medium",
  "colors": ["liver & white", "black & white", "tricolor"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 9,
    "aggression": 2,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Field Trials", "Agility", "Conformation"]
}, {
  "name": "English Cocker Spaniel",
  "group": "Sporting",
  "size": "M",
  "coat": "long",
  "colors": ["black", "liver", "golden", "blue roan", "orange roan"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 6,
    "barkTendency": 6,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 75,
    "eyes": 75,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Field Trials", "Agility", "Conformation"]
}, {
  "name": "American Cocker Spaniel",
  "group": "Sporting",
  "size": "S",
  "coat": "long",
  "colors": ["black", "buff", "parti-color", "ASCOB"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 5,
    "barkTendency": 6,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 72,
    "eyes": 70,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Field Trials", "Agility", "Conformation"]
}, {
  "name": "Welsh Springer Spaniel",
  "group": "Sporting",
  "size": "M",
  "coat": "long",
  "colors": ["red & white"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 1,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 82,
    "joints": 75
  },
  "aptitudes": ["Field Trials", "Conformation", "Agility"]
}, {
  "name": "Sussex Spaniel",
  "group": "Sporting",
  "size": "M",
  "coat": "long",
  "colors": ["golden liver"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 2,
    "preyDrive": 6,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 72,
    "joints": 70
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Clumber Spaniel",
  "group": "Sporting",
  "size": "L",
  "coat": "long",
  "colors": ["white & lemon", "white & orange"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 1,
    "preyDrive": 6,
    "barkTendency": 4,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 68,
    "eyes": 72,
    "heart": 75,
    "joints": 68
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Boykin Spaniel",
  "group": "Sporting",
  "size": "M",
  "coat": "medium",
  "colors": ["liver", "brown"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 1,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 75,
    "eyes": 75,
    "heart": 78,
    "joints": 75
  },
  "aptitudes": ["Field Trials", "Dock Diving", "Conformation"]
}, {
  "name": "American Water Spaniel",
  "group": "Sporting",
  "size": "M",
  "coat": "curly",
  "colors": ["brown", "chocolate", "liver"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Field Trials", "Dock Diving", "Conformation"]
}, {
  "name": "Chihuahua",
  "group": "Toy",
  "size": "XS",
  "coat": "short",
  "colors": ["fawn", "black", "white", "chocolate"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 6,
    "energy": 7,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 5,
    "preyDrive": 4,
    "barkTendency": 9,
    "sociability": 6,
    "adaptability": 8
  },
  "health": {
    "hips": 84,
    "eyes": 82,
    "heart": 80,
    "joints": 84
  },
  "aptitudes": ["Conformation", "Agility", "Rally-O"]
}, {
  "name": "Pomeranian",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["orange", "black", "white", "cream"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 4,
    "preyDrive": 4,
    "barkTendency": 9,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 80,
    "joints": 82
  },
  "aptitudes": ["Agility", "Conformation", "Rally-O"]
}, {
  "name": "Shih Tzu",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["gold", "red", "black", "white", "brindle"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 6,
    "energy": 4,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 2,
    "barkTendency": 6,
    "sociability": 8,
    "adaptability": 9
  },
  "health": {
    "hips": 80,
    "eyes": 78,
    "heart": 80,
    "joints": 80
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "Yorkshire Terrier",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["tan & blue", "tan & black"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 5,
    "barkTendency": 8,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 80,
    "joints": 80
  },
  "aptitudes": ["Conformation", "Agility", "Earthdog"]
}, {
  "name": "Pug",
  "group": "Toy",
  "size": "XS",
  "coat": "short",
  "colors": ["fawn", "black"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 5,
    "energy": 4,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 2,
    "barkTendency": 5,
    "sociability": 9,
    "adaptability": 9
  },
  "health": {
    "hips": 72,
    "eyes": 68,
    "heart": 72,
    "joints": 72
  },
  "aptitudes": ["Conformation", "Obedience"]
}, {
  "name": "Cavalier King Charles Spaniel",
  "group": "Toy",
  "size": "S",
  "coat": "long",
  "colors": ["chestnut & white", "tricolor", "black & tan", "ruby"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 1,
    "preyDrive": 3,
    "barkTendency": 4,
    "sociability": 10,
    "adaptability": 9
  },
  "health": {
    "hips": 72,
    "eyes": 75,
    "heart": 65,
    "joints": 72
  },
  "aptitudes": ["Conformation", "Agility", "Rally-O"]
}, {
  "name": "Papillon",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["white & sable", "white & black", "white & red"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 9,
    "energy": 7,
    "trainability": 9,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 5,
    "barkTendency": 6,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 86,
    "eyes": 85,
    "heart": 88,
    "joints": 86
  },
  "aptitudes": ["Agility", "Obedience", "Rally-O"]
}, {
  "name": "Phal\xE8ne",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["white & sable", "white & black", "white & red"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 9,
    "energy": 6,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 4,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 86,
    "eyes": 85,
    "heart": 88,
    "joints": 86
  },
  "aptitudes": ["Agility", "Obedience", "Conformation"]
}, {
  "name": "Havanese",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["cream", "gold", "black", "blue", "chocolate"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 8,
    "energy": 6,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 1,
    "preyDrive": 3,
    "barkTendency": 5,
    "sociability": 9,
    "adaptability": 9
  },
  "health": {
    "hips": 84,
    "eyes": 82,
    "heart": 85,
    "joints": 84
  },
  "aptitudes": ["Agility", "Conformation", "Rally-O"]
}, {
  "name": "Chinese Crested",
  "group": "Toy",
  "size": "XS",
  "coat": "hairless",
  "colors": ["pink", "blue", "chocolate", "black"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 3,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 82,
    "joints": 82
  },
  "aptitudes": ["Agility", "Conformation", "Rally-O"]
}, {
  "name": "Maltese",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["white"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 3,
    "barkTendency": 6,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 82,
    "joints": 82
  },
  "aptitudes": ["Agility", "Conformation", "Obedience"]
}, {
  "name": "Japanese Chin",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["black & white", "red & white", "sable & white"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 4,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 1,
    "preyDrive": 2,
    "barkTendency": 3,
    "sociability": 8,
    "adaptability": 9
  },
  "health": {
    "hips": 82,
    "eyes": 78,
    "heart": 78,
    "joints": 82
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "Pekingese",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["red", "sable", "black & tan", "cream"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 6,
    "energy": 3,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 3,
    "preyDrive": 2,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 72,
    "heart": 75,
    "joints": 78
  },
  "aptitudes": ["Conformation"]
}, {
  "name": "Brussels Griffon",
  "group": "Toy",
  "size": "XS",
  "coat": "wire",
  "colors": ["red", "black", "black & tan"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 3,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 80,
    "eyes": 75,
    "heart": 78,
    "joints": 80
  },
  "aptitudes": ["Agility", "Conformation", "Obedience"]
}, {
  "name": "Miniature Pinscher",
  "group": "Toy",
  "size": "XS",
  "coat": "short",
  "colors": ["red", "black & tan", "chocolate & tan"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 4,
    "preyDrive": 6,
    "barkTendency": 8,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 82,
    "joints": 82
  },
  "aptitudes": ["Agility", "Conformation", "Rally-O"]
}, {
  "name": "Affenpinscher",
  "group": "Toy",
  "size": "XS",
  "coat": "wire",
  "colors": ["black", "gray", "silver", "red", "belge"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 5,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 80,
    "joints": 82
  },
  "aptitudes": ["Agility", "Conformation"]
}, {
  "name": "Italian Greyhound",
  "group": "Toy",
  "size": "XS",
  "coat": "short",
  "colors": ["fawn", "blue", "black", "cream"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 6,
    "energy": 7,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 1,
    "preyDrive": 8,
    "barkTendency": 4,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 85,
    "eyes": 88,
    "heart": 90,
    "joints": 82
  },
  "aptitudes": ["Lure Coursing", "Agility", "Conformation"]
}, {
  "name": "L\xF6wchen",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["black", "white", "cream", "brown", "blue"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 8,
    "energy": 6,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 1,
    "preyDrive": 3,
    "barkTendency": 4,
    "sociability": 9,
    "adaptability": 9
  },
  "health": {
    "hips": 84,
    "eyes": 82,
    "heart": 85,
    "joints": 84
  },
  "aptitudes": ["Agility", "Conformation", "Obedience"]
}, {
  "name": "Bolognese",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["white"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 4,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 1,
    "preyDrive": 2,
    "barkTendency": 4,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 84,
    "eyes": 82,
    "heart": 85,
    "joints": 84
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "Coton de Tulear",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["white", "white & black", "tricolor"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 8,
    "energy": 6,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 1,
    "preyDrive": 2,
    "barkTendency": 4,
    "sociability": 9,
    "adaptability": 9
  },
  "health": {
    "hips": 84,
    "eyes": 82,
    "heart": 85,
    "joints": 84
  },
  "aptitudes": ["Agility", "Conformation", "Rally-O"]
}, {
  "name": "Russkiy Toy",
  "group": "Toy",
  "size": "XS",
  "coat": "short",
  "colors": ["black & tan", "brown & tan", "blue & tan", "lilac & tan"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 4,
    "barkTendency": 7,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 84,
    "eyes": 82,
    "heart": 82,
    "joints": 82
  },
  "aptitudes": ["Agility", "Conformation"]
}, {
  "name": "Biewer Terrier",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["tricolor (gold/white/black)", "tricolor (gold/white/blue)"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 4,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 84,
    "eyes": 82,
    "heart": 82,
    "joints": 82
  },
  "aptitudes": ["Agility", "Conformation"]
}, {
  "name": "Silky Terrier",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["blue & tan", "gray & tan"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 6,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 82,
    "joints": 82
  },
  "aptitudes": ["Agility", "Conformation", "Earthdog"]
}, {
  "name": "Toy Fox Terrier",
  "group": "Toy",
  "size": "XS",
  "coat": "short",
  "colors": ["tricolor", "white & black", "white & tan"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 9,
    "aggression": 3,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 8
  },
  "health": {
    "hips": 84,
    "eyes": 82,
    "heart": 85,
    "joints": 84
  },
  "aptitudes": ["Agility", "Conformation", "Earthdog"]
}, {
  "name": "King Charles Spaniel",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["blenheim", "tricolor", "black & tan", "ruby"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 4,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 1,
    "preyDrive": 2,
    "barkTendency": 4,
    "sociability": 9,
    "adaptability": 9
  },
  "health": {
    "hips": 72,
    "eyes": 72,
    "heart": 65,
    "joints": 72
  },
  "aptitudes": ["Conformation"]
}, {
  "name": "Tibetan Spaniel",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["gold", "cream", "white", "black", "parti-color"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 8,
    "energy": 5,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 2,
    "preyDrive": 4,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 8
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "Lhasa Apso",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["honey", "black", "white", "gray", "cream"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 6,
    "energy": 4,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 5,
    "aggression": 3,
    "preyDrive": 3,
    "barkTendency": 7,
    "sociability": 6,
    "adaptability": 7
  },
  "health": {
    "hips": 80,
    "eyes": 78,
    "heart": 82,
    "joints": 80
  },
  "aptitudes": ["Conformation"]
}, {
  "name": "Bulldog",
  "group": "Non-Sporting",
  "size": "M",
  "coat": "short",
  "colors": ["brindle", "white", "fawn", "piebald"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 5,
    "energy": 3,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 5,
    "aggression": 3,
    "preyDrive": 2,
    "barkTendency": 4,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 65,
    "eyes": 68,
    "heart": 65,
    "joints": 65
  },
  "aptitudes": ["Conformation", "Obedience"]
}, {
  "name": "French Bulldog",
  "group": "Non-Sporting",
  "size": "S",
  "coat": "short",
  "colors": ["brindle", "fawn", "white", "pied"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 6,
    "energy": 5,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 2,
    "barkTendency": 4,
    "sociability": 9,
    "adaptability": 10
  },
  "health": {
    "hips": 68,
    "eyes": 70,
    "heart": 68,
    "joints": 68
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "American Bulldog",
  "group": "Non-Sporting",
  "size": "L",
  "coat": "short",
  "colors": ["white", "brindle & white", "fawn & white"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 68,
    "eyes": 75,
    "heart": 72,
    "joints": 68
  },
  "aptitudes": ["Schutzhund", "Conformation", "Agility"]
}, {
  "name": "Standard Poodle",
  "group": "Non-Sporting",
  "size": "L",
  "coat": "curly",
  "colors": ["black", "white", "apricot", "red", "silver", "blue"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 10,
    "energy": 7,
    "trainability": 10,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 1,
    "preyDrive": 4,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 9
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Agility", "Obedience", "Rally-O", "Dock Diving"]
}, {
  "name": "Miniature Poodle",
  "group": "Non-Sporting",
  "size": "S",
  "coat": "curly",
  "colors": ["black", "white", "apricot", "red", "silver"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 10,
    "energy": 6,
    "trainability": 10,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 1,
    "preyDrive": 4,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 9
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Agility", "Obedience", "Rally-O"]
}, {
  "name": "Dalmatian",
  "group": "Non-Sporting",
  "size": "L",
  "coat": "short",
  "colors": ["white & black spots", "white & liver spots"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Agility", "Conformation", "Obedience"]
}, {
  "name": "Chow Chow",
  "group": "Non-Sporting",
  "size": "L",
  "coat": "long",
  "colors": ["red", "black", "cinnamon", "cream", "blue"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 4,
    "trainability": 4,
    "loyalty": 8,
    "playfulness": 4,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 4,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 78,
    "joints": 75
  },
  "aptitudes": ["Conformation"]
}, {
  "name": "Boston Terrier",
  "group": "Non-Sporting",
  "size": "S",
  "coat": "short",
  "colors": ["black & white", "brindle & white", "seal & white"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 3,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 9
  },
  "health": {
    "hips": 78,
    "eyes": 75,
    "heart": 78,
    "joints": 78
  },
  "aptitudes": ["Agility", "Flyball", "Conformation"]
}, {
  "name": "Shiba Inu",
  "group": "Non-Sporting",
  "size": "M",
  "coat": "medium",
  "colors": ["red", "black & tan", "sesame", "cream"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 7
  },
  "health": {
    "hips": 85,
    "eyes": 85,
    "heart": 88,
    "joints": 85
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "Bichon Fris\xE9",
  "group": "Non-Sporting",
  "size": "XS",
  "coat": "curly",
  "colors": ["white"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 1,
    "preyDrive": 2,
    "barkTendency": 5,
    "sociability": 9,
    "adaptability": 9
  },
  "health": {
    "hips": 84,
    "eyes": 82,
    "heart": 85,
    "joints": 84
  },
  "aptitudes": ["Agility", "Obedience", "Conformation"]
}, {
  "name": "Xoloitzcuintli",
  "group": "Non-Sporting",
  "size": "M",
  "coat": "hairless",
  "colors": ["black", "gray", "bronze", "red"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 3,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "Finnish Spitz",
  "group": "Non-Sporting",
  "size": "M",
  "coat": "medium",
  "colors": ["red", "gold"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 7,
    "barkTendency": 10,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Field Trials", "Conformation", "Agility"]
}, {
  "name": "Norwegian Elkhound",
  "group": "Non-Sporting",
  "size": "M",
  "coat": "medium",
  "colors": ["gray", "silver", "black"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 8,
    "barkTendency": 8,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Tracking", "Conformation"]
}, {
  "name": "Keeshond",
  "group": "Non-Sporting",
  "size": "M",
  "coat": "long",
  "colors": ["wolf gray", "silver"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 6,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 4,
    "barkTendency": 7,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 80,
    "joints": 80
  },
  "aptitudes": ["Agility", "Obedience", "Conformation"]
}, {
  "name": "American Eskimo Dog",
  "group": "Non-Sporting",
  "size": "M",
  "coat": "long",
  "colors": ["white", "biscuit"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Agility", "Obedience", "Conformation"]
}, {
  "name": "Schipperke",
  "group": "Non-Sporting",
  "size": "XS",
  "coat": "medium",
  "colors": ["black"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 82,
    "joints": 82
  },
  "aptitudes": ["Agility", "Obedience", "Conformation"]
}, {
  "name": "Tibetan Terrier",
  "group": "Non-Sporting",
  "size": "M",
  "coat": "long",
  "colors": ["white", "black", "cream", "gold", "piebald"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 6,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 4,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 80,
    "eyes": 78,
    "heart": 82,
    "joints": 80
  },
  "aptitudes": ["Agility", "Conformation", "Rally-O"]
}, {
  "name": "Chow Chow (Smooth)",
  "group": "Non-Sporting",
  "size": "L",
  "coat": "short",
  "colors": ["red", "black", "cinnamon", "cream", "blue"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 4,
    "trainability": 4,
    "loyalty": 8,
    "playfulness": 4,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 4,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 78,
    "joints": 75
  },
  "aptitudes": ["Conformation"]
}, {
  "name": "Eurasier",
  "group": "Non-Sporting",
  "size": "M",
  "coat": "long",
  "colors": ["fawn", "red", "wolf sable", "black", "black & tan"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 2,
    "preyDrive": 4,
    "barkTendency": 4,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "Basenji",
  "group": "Non-Sporting",
  "size": "M",
  "coat": "short",
  "colors": ["red & white", "black & white", "tricolor", "brindle"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 4,
    "loyalty": 7,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 8,
    "barkTendency": 1,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 88,
    "eyes": 85,
    "heart": 90,
    "joints": 88
  },
  "aptitudes": ["Lure Coursing", "Agility", "Conformation"]
}, {
  "name": "Canaan Dog",
  "group": "Non-Sporting",
  "size": "M",
  "coat": "short",
  "colors": ["white & brown", "white & black", "sandy", "red"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 3,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 6,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Conformation", "Agility", "Obedience"]
}, {
  "name": "Akita Inu (American)",
  "group": "Non-Sporting",
  "size": "XL",
  "coat": "medium",
  "colors": ["fawn", "brindle", "white", "pinto"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 6,
    "preyDrive": 7,
    "barkTendency": 4,
    "sociability": 5,
    "adaptability": 6
  },
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Conformation", "Obedience"]
}, {
  "name": "Central Asian Shepherd",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["white", "fawn", "brindle", "piebald", "black & tan"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 4,
    "loyalty": 10,
    "playfulness": 3,
    "aggression": 6,
    "preyDrive": 7,
    "barkTendency": 7,
    "sociability": 3,
    "adaptability": 6
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Schutzhund", "Conformation"]
}, {
  "name": "Kazakh Tobet",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["white", "fawn", "gray", "black", "piebald"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 6,
    "preyDrive": 6,
    "barkTendency": 7,
    "sociability": 4,
    "adaptability": 6
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Schutzhund", "Conformation"]
}, {
  "name": "Sage Koochee Mountain",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["fawn", "gray", "white", "brindle", "black"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 3,
    "loyalty": 9,
    "playfulness": 3,
    "aggression": 7,
    "preyDrive": 7,
    "barkTendency": 7,
    "sociability": 3,
    "adaptability": 4
  },
  "health": {
    "hips": 75,
    "eyes": 80,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Schutzhund"]
}, {
  "name": "Sage Koochee Steppe",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["fawn", "gray", "white", "brindle", "black"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 3,
    "loyalty": 9,
    "playfulness": 3,
    "aggression": 7,
    "preyDrive": 7,
    "barkTendency": 7,
    "sociability": 3,
    "adaptability": 6
  },
  "health": {
    "hips": 75,
    "eyes": 80,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Schutzhund"]
}, {
  "name": "Sage Koochee Desert",
  "group": "Working",
  "size": "L",
  "coat": "short",
  "colors": ["fawn", "sand", "white", "brindle"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 3,
    "loyalty": 9,
    "playfulness": 3,
    "aggression": 6,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 3,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 82,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Schutzhund"]
}, {
  "name": "Afghan Tiger Dog",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["brindle", "fawn", "black & tan", "gray"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 3,
    "loyalty": 9,
    "playfulness": 3,
    "aggression": 8,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 2,
    "adaptability": 5
  },
  "health": {
    "hips": 75,
    "eyes": 80,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Schutzhund"]
}, {
  "name": "Uzbek Sarkangik",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["fawn", "white", "gray", "piebald"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 3,
    "aggression": 6,
    "preyDrive": 6,
    "barkTendency": 6,
    "sociability": 4,
    "adaptability": 6
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Schutzhund", "Conformation"]
}, {
  "name": "Tajik Dahmarda",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["gray", "white", "fawn", "black"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 3,
    "aggression": 7,
    "preyDrive": 6,
    "barkTendency": 7,
    "sociability": 3,
    "adaptability": 4
  },
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 75,
    "joints": 70
  },
  "aptitudes": ["Schutzhund"]
}, {
  "name": "Kyrgyz Volkodav",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["white", "gray", "fawn", "brindle"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 3,
    "aggression": 7,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 3,
    "adaptability": 5
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Schutzhund"]
}, {
  "name": "Sarmatian Mastiff",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["white", "fawn", "gray", "piebald"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 4,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 3,
    "aggression": 6,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 4,
    "adaptability": 5
  },
  "health": {
    "hips": 68,
    "eyes": 75,
    "heart": 72,
    "joints": 68
  },
  "aptitudes": ["Schutzhund", "Conformation"]
}, {
  "name": "GSD West German Working",
  "group": "Herding",
  "size": "L",
  "coat": "medium",
  "colors": ["sable", "black & tan", "black"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 9,
    "energy": 8,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 8
  },
  "health": {
    "hips": 72,
    "eyes": 88,
    "heart": 85,
    "joints": 72
  },
  "aptitudes": ["Schutzhund", "IPO", "Tracking", "Obedience", "Search & Rescue"]
}, {
  "name": "GSD DDR East German",
  "group": "Herding",
  "size": "L",
  "coat": "medium",
  "colors": ["dark sable", "black", "black & tan"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 9,
    "energy": 8,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 5,
    "preyDrive": 8,
    "barkTendency": 6,
    "sociability": 5,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 90,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Schutzhund", "IPO", "Tracking", "Police Work"]
}, {
  "name": "GSD Czech Working",
  "group": "Herding",
  "size": "L",
  "coat": "medium",
  "colors": ["dark sable", "black", "black & red"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 9,
    "energy": 9,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 5,
    "preyDrive": 9,
    "barkTendency": 7,
    "sociability": 5,
    "adaptability": 8
  },
  "health": {
    "hips": 80,
    "eyes": 90,
    "heart": 88,
    "joints": 80
  },
  "aptitudes": ["Schutzhund", "IPO", "Police Work", "Military", "Tracking"]
}, {
  "name": "GSD West German Show",
  "group": "Herding",
  "size": "L",
  "coat": "medium",
  "colors": ["black & tan", "sable", "black & red"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 9,
    "energy": 7,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 5,
    "barkTendency": 6,
    "sociability": 8,
    "adaptability": 9
  },
  "health": {
    "hips": 68,
    "eyes": 88,
    "heart": 85,
    "joints": 68
  },
  "aptitudes": ["Conformation", "Obedience", "Therapy"]
}, {
  "name": "GSD American Show",
  "group": "Herding",
  "size": "L",
  "coat": "medium",
  "colors": ["black & tan", "sable", "black & silver"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 6,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 4,
    "barkTendency": 6,
    "sociability": 8,
    "adaptability": 9
  },
  "health": {
    "hips": 62,
    "eyes": 85,
    "heart": 82,
    "joints": 62
  },
  "aptitudes": ["Conformation", "Obedience", "Therapy"]
}, {
  "name": "East European Shepherd",
  "group": "Herding",
  "size": "XL",
  "coat": "medium",
  "colors": ["sable", "black & tan", "gray", "black"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 9,
    "energy": 7,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 6,
    "adaptability": 9
  },
  "health": {
    "hips": 75,
    "eyes": 88,
    "heart": 85,
    "joints": 75
  },
  "aptitudes": ["Schutzhund", "Police Work", "Military", "Obedience"]
}, {
  "name": "White Swiss Shepherd",
  "group": "Herding",
  "size": "L",
  "coat": "medium",
  "colors": ["white"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 9,
    "energy": 7,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 5,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 9
  },
  "health": {
    "hips": 75,
    "eyes": 88,
    "heart": 86,
    "joints": 75
  },
  "aptitudes": ["Obedience", "Agility", "Therapy", "Conformation"]
}, {
  "name": "King Shepherd",
  "group": "Herding",
  "size": "XL",
  "coat": "long",
  "colors": ["sable", "black & tan", "black & silver", "black"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 9,
    "energy": 7,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 5,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 78,
    "eyes": 88,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Obedience", "Therapy", "Conformation", "Search & Rescue"]
}, {
  "name": "Shiloh Shepherd",
  "group": "Herding",
  "size": "XL",
  "coat": "long",
  "colors": ["black & tan", "sable", "golden", "charcoal", "red"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 9,
    "energy": 6,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 4,
    "barkTendency": 5,
    "sociability": 9,
    "adaptability": 8
  },
  "health": {
    "hips": 78,
    "eyes": 88,
    "heart": 86,
    "joints": 78
  },
  "aptitudes": ["Obedience", "Therapy", "Search & Rescue", "Conformation"]
}, {
  "name": "Panda Shepherd",
  "group": "Herding",
  "size": "L",
  "coat": "medium",
  "colors": ["black & white & tan"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 9,
    "energy": 8,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 6,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 8
  },
  "health": {
    "hips": 70,
    "eyes": 88,
    "heart": 85,
    "joints": 70
  },
  "aptitudes": ["Schutzhund", "Obedience", "Conformation"]
}, {
  "name": "Bohemian Shepherd",
  "group": "Herding",
  "size": "M",
  "coat": "long",
  "colors": ["black & tan"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 9,
    "energy": 8,
    "trainability": 9,
    "loyalty": 9,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 80,
    "eyes": 88,
    "heart": 86,
    "joints": 80
  },
  "aptitudes": ["Herding", "Obedience", "Agility", "Conformation"]
}, {
  "name": "Kunming Dog",
  "group": "Herding",
  "size": "L",
  "coat": "short",
  "colors": ["sable", "black & tan", "tan"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 6,
    "adaptability": 8
  },
  "health": {
    "hips": 72,
    "eyes": 85,
    "heart": 84,
    "joints": 72
  },
  "aptitudes": ["Police Work", "Military", "Tracking", "Obedience"]
}, {
  "name": "Kuvasz",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["white"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 5,
    "adaptability": 6
  },
  "health": {
    "hips": 70,
    "eyes": 78,
    "heart": 78,
    "joints": 70
  },
  "aptitudes": ["Conformation", "Obedience", "LGD"]
}, {
  "name": "Maremma Sheepdog",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["white"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 4,
    "preyDrive": 4,
    "barkTendency": 8,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 80,
    "joints": 72
  },
  "aptitudes": ["Conformation", "Obedience", "LGD"]
}, {
  "name": "Sarplaninac",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["iron gray", "fawn", "white", "tan", "black"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Conformation", "Obedience", "LGD"]
}, {
  "name": "Tornjak",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["white & black", "white & brown", "tricolor", "multicolor"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 4,
    "preyDrive": 4,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 75,
    "eyes": 80,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Conformation", "Obedience", "LGD"]
}, {
  "name": "Estrela Mountain Dog",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["fawn", "brindle", "wolf gray", "yellow"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 4,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 6,
    "adaptability": 5
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Conformation", "Obedience", "LGD"]
}, {
  "name": "Rafeiro do Alentejo",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["black", "fawn", "yellow", "brindle", "white marked"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 4,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 3,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 8,
    "sociability": 5,
    "adaptability": 4
  },
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 75,
    "joints": 70
  },
  "aptitudes": ["Conformation"]
}, {
  "name": "Cao de Gado Transmontano",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["white", "white & yellow", "white & black"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 5,
    "adaptability": 4
  },
  "health": {
    "hips": 68,
    "eyes": 75,
    "heart": 75,
    "joints": 68
  },
  "aptitudes": ["Conformation"]
}, {
  "name": "Slovak Cuvac",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["white"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 4,
    "preyDrive": 4,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 80,
    "joints": 72
  },
  "aptitudes": ["Conformation", "Obedience"]
}, {
  "name": "Carpathian Shepherd Dog",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["wolf sable", "fawn", "black & tan"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Conformation", "Obedience"]
}, {
  "name": "Romanian Mioritic Shepherd",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["white", "gray", "white & gray", "white & black"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 4,
    "preyDrive": 4,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Conformation", "Obedience"]
}, {
  "name": "Romanian Raven Shepherd",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["black", "black & tan"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 6,
    "adaptability": 5
  },
  "health": {
    "hips": 70,
    "eyes": 78,
    "heart": 78,
    "joints": 70
  },
  "aptitudes": ["Conformation", "Obedience"]
}, {
  "name": "Karakachan",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["white & black", "tricolor", "white"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 6,
    "preyDrive": 6,
    "barkTendency": 8,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 78,
    "joints": 70
  },
  "aptitudes": ["Conformation", "LGD"]
}, {
  "name": "Greek Shepherd",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["white", "fawn", "gray", "black & tan"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Conformation"]
}, {
  "name": "Himalayan Sheepdog",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["black & tan", "fawn", "tawny"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 6,
    "preyDrive": 6,
    "barkTendency": 8,
    "sociability": 4,
    "adaptability": 4
  },
  "health": {
    "hips": 68,
    "eyes": 75,
    "heart": 75,
    "joints": 68
  },
  "aptitudes": ["Conformation"]
}, {
  "name": "Armenian Gampr",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["fawn", "gray", "white", "piebald", "brindle"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 6,
    "preyDrive": 6,
    "barkTendency": 7,
    "sociability": 5,
    "adaptability": 6
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Schutzhund", "Conformation"]
}, {
  "name": "Georgian Shepherd Nagazi",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["gray", "fawn", "white", "brindle", "black"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 7,
    "preyDrive": 6,
    "barkTendency": 7,
    "sociability": 4,
    "adaptability": 5
  },
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 75,
    "joints": 70
  },
  "aptitudes": ["Schutzhund", "Conformation"]
}, {
  "name": "Gurdbasar",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["gray", "fawn", "white", "brindle"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 7,
    "preyDrive": 6,
    "barkTendency": 7,
    "sociability": 4,
    "adaptability": 5
  },
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 75,
    "joints": 70
  },
  "aptitudes": ["Schutzhund"]
}, {
  "name": "Sarabi Persian Mastiff",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["fawn", "red", "black", "piebald"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 6,
    "adaptability": 5
  },
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 72,
    "joints": 70
  },
  "aptitudes": ["Conformation", "Obedience"]
}, {
  "name": "Kurdish Mastiff Pshdar",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["fawn", "red", "black & tan", "white"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 7,
    "preyDrive": 6,
    "barkTendency": 7,
    "sociability": 4,
    "adaptability": 5
  },
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 75,
    "joints": 70
  },
  "aptitudes": ["Schutzhund"]
}, {
  "name": "Kars Dog",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["gray", "fawn", "black", "piebald"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 6,
    "preyDrive": 6,
    "barkTendency": 7,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Conformation"]
}, {
  "name": "Saarloos Wolfdog",
  "group": "Herding",
  "size": "L",
  "coat": "medium",
  "colors": ["wolf gray", "tawny", "white"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 5,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 4,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Conformation"]
}, {
  "name": "Czechoslovakian Wolfdog",
  "group": "Herding",
  "size": "L",
  "coat": "medium",
  "colors": ["yellow gray", "silver gray"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 9,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 5,
    "preyDrive": 8,
    "barkTendency": 5,
    "sociability": 5,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Schutzhund", "Tracking", "Conformation"]
}, {
  "name": "McNab",
  "group": "Herding",
  "size": "M",
  "coat": "short",
  "colors": ["black & white", "red & white"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 9,
    "energy": 10,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 8
  },
  "health": {
    "hips": 85,
    "eyes": 88,
    "heart": 90,
    "joints": 85
  },
  "aptitudes": ["Herding", "Agility", "Flyball"]
}, {
  "name": "English Shepherd",
  "group": "Herding",
  "size": "M",
  "coat": "medium",
  "colors": ["black & white", "sable & white", "tricolor"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Herding", "Agility", "Obedience"]
}, {
  "name": "Blue Lacy",
  "group": "Herding",
  "size": "M",
  "coat": "short",
  "colors": ["blue", "red", "tricolor"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 9,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 8,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 8
  },
  "health": {
    "hips": 85,
    "eyes": 88,
    "heart": 90,
    "joints": 85
  },
  "aptitudes": ["Herding", "Tracking", "Field Trials"]
}, {
  "name": "Louisiana Catahoula Leopard",
  "group": "Herding",
  "size": "L",
  "coat": "short",
  "colors": ["merle", "brindle", "solid", "tricolor"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 6,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 82,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Herding", "Tracking", "Field Trials"]
}, {
  "name": "C\xE3o da Serra de Aires",
  "group": "Herding",
  "size": "M",
  "coat": "long",
  "colors": ["fawn", "gray", "yellow", "brown"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 5,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Herding", "Agility", "Conformation"]
}, {
  "name": "Basque Shepherd",
  "group": "Herding",
  "size": "M",
  "coat": "medium",
  "colors": ["fawn", "black", "red"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 5,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Herding", "Conformation"]
}, {
  "name": "Majorca Shepherd",
  "group": "Herding",
  "size": "L",
  "coat": "short",
  "colors": ["black", "black & tan"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 3,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Herding", "Conformation"]
}, {
  "name": "Carea Leon\xE9s",
  "group": "Herding",
  "size": "M",
  "coat": "medium",
  "colors": ["black", "black & tan", "merle"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 6,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Herding", "Agility"]
}, {
  "name": "Romanian Corb",
  "group": "Herding",
  "size": "L",
  "coat": "medium",
  "colors": ["black", "black & tan"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 4,
    "preyDrive": 6,
    "barkTendency": 6,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Herding", "Conformation"]
}, {
  "name": "Lupino del Gigante",
  "group": "Herding",
  "size": "L",
  "coat": "long",
  "colors": ["gray", "wolf sable"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Herding", "Conformation"]
}, {
  "name": "Pastore della Lessinia",
  "group": "Herding",
  "size": "L",
  "coat": "long",
  "colors": ["white", "fawn", "gray"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 4,
    "preyDrive": 5,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Herding", "Conformation"]
}, {
  "name": "South African Boerboel Herder",
  "group": "Herding",
  "size": "L",
  "coat": "short",
  "colors": ["fawn", "brindle", "brown"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 7
  },
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Herding", "Obedience"]
}, {
  "name": "Maremma-Abruzzese mix",
  "group": "Herding",
  "size": "XL",
  "coat": "long",
  "colors": ["white"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 4,
    "preyDrive": 4,
    "barkTendency": 7,
    "sociability": 6,
    "adaptability": 5
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Herding", "Conformation", "LGD"]
}, {
  "name": "Karelian Bear Dog",
  "group": "Hound",
  "size": "M",
  "coat": "medium",
  "colors": ["black & white"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 5,
    "preyDrive": 9,
    "barkTendency": 7,
    "sociability": 5,
    "adaptability": 6
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Field Trials", "Tracking"]
}, {
  "name": "Laika (West Siberian)",
  "group": "Hound",
  "size": "M",
  "coat": "medium",
  "colors": ["white", "gray", "black", "red"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 9,
    "barkTendency": 7,
    "sociability": 6,
    "adaptability": 5
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Field Trials", "Tracking"]
}, {
  "name": "Laika (East Siberian)",
  "group": "Hound",
  "size": "M",
  "coat": "medium",
  "colors": ["white", "gray", "black", "sable"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 9,
    "barkTendency": 7,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Field Trials", "Tracking"]
}, {
  "name": "Laika (Russo-European)",
  "group": "Hound",
  "size": "M",
  "coat": "medium",
  "colors": ["black & white", "gray & white"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 9,
    "barkTendency": 7,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Tracking"]
}, {
  "name": "Finnish Hound",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["tricolor"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Estonian Hound",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["tricolor", "black & tan"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Polish Hound",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["black & tan"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Serbian Hound",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["red & black saddle"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Porcelaine",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["white with orange spots"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 5,
    "loyalty": 7,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Billy",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["white", "white & orange"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 5,
    "loyalty": 7,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Petit Basset Griffon Vend\xE9en",
  "group": "Hound",
  "size": "S",
  "coat": "wire",
  "colors": ["white & lemon", "white & orange", "tricolor"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 6,
    "energy": 8,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 8,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 78,
    "heart": 82,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Conformation", "Agility"]
}, {
  "name": "Grand Basset Griffon Vend\xE9en",
  "group": "Hound",
  "size": "M",
  "coat": "wire",
  "colors": ["white & lemon", "white & orange", "tricolor"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 6,
    "energy": 7,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 78,
    "eyes": 78,
    "heart": 80,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Briquet Griffon Vend\xE9en",
  "group": "Hound",
  "size": "M",
  "coat": "wire",
  "colors": ["white & orange", "white & black", "tricolor"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 6,
    "energy": 8,
    "trainability": 5,
    "loyalty": 7,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 78,
    "eyes": 78,
    "heart": 80,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Anglo-Fran\xE7ais de Petite V\xE9nerie",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["tricolor", "bicolor"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 5,
    "loyalty": 7,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials"]
}, {
  "name": "Mountain Cur",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["yellow", "brindle", "black", "blue"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 9,
    "barkTendency": 7,
    "sociability": 6,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Field Trials", "Tracking"]
}, {
  "name": "Treeing Tennessee Brindle",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["brindle"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 9,
    "barkTendency": 8,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Field Trials", "Tracking"]
}, {
  "name": "Black Mouth Cur",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["fawn", "yellow", "brindle", "red"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 9,
    "barkTendency": 7,
    "sociability": 6,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Field Trials", "Tracking", "Herding"]
}, {
  "name": "American English Coonhound",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["tricolor", "blue tick", "red tick"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 8,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 9,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Tracking"]
}, {
  "name": "Bluetick Coonhound",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["blue tick"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 7,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 9,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Tracking"]
}, {
  "name": "Chien Fran\xE7ais Blanc et Noir",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["white & black"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 5,
    "loyalty": 7,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 9,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials"]
}, {
  "name": "Dungker",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["blue merle", "black & tan"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Drever",
  "group": "Hound",
  "size": "S",
  "coat": "short",
  "colors": ["tricolor", "red & white", "black & tan & white"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "H\xE4lleforshund",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["tricolor"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Schillerst\xF6vare",
  "group": "Hound",
  "size": "L",
  "coat": "short",
  "colors": ["tricolor"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 5,
    "loyalty": 7,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Smalandsst\xF6vare",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["black & tan"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Hygen Hound",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["red", "yellow", "tricolor"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 5,
    "loyalty": 7,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Hellenikos Ichnilatis",
  "group": "Hound",
  "size": "M",
  "coat": "short",
  "colors": ["black & tan"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 5,
    "loyalty": 7,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 5
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Fell Terrier",
  "group": "Terrier",
  "size": "XS",
  "coat": "wire",
  "colors": ["black", "black & tan", "red"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 5,
    "preyDrive": 10,
    "barkTendency": 6,
    "sociability": 5,
    "adaptability": 6
  },
  "health": {
    "hips": 85,
    "eyes": 85,
    "heart": 88,
    "joints": 85
  },
  "aptitudes": ["Earthdog", "Field Trials"]
}, {
  "name": "Plummer Terrier",
  "group": "Terrier",
  "size": "S",
  "coat": "short",
  "colors": ["white & tan", "tricolor"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 4,
    "preyDrive": 9,
    "barkTendency": 6,
    "sociability": 6,
    "adaptability": 7
  },
  "health": {
    "hips": 85,
    "eyes": 85,
    "heart": 88,
    "joints": 85
  },
  "aptitudes": ["Earthdog", "Field Trials"]
}, {
  "name": "Lucas Terrier",
  "group": "Terrier",
  "size": "S",
  "coat": "wire",
  "colors": ["grizzle & tan", "sandy & tan"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Earthdog", "Conformation"]
}, {
  "name": "Ratonero Bodeguero Andaluz",
  "group": "Terrier",
  "size": "S",
  "coat": "short",
  "colors": ["white & black", "white & tan", "tricolor"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 8,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Earthdog", "Agility", "Conformation"]
}, {
  "name": "Teddy Roosevelt Terrier",
  "group": "Terrier",
  "size": "S",
  "coat": "short",
  "colors": ["white & black", "white & tan", "tricolor"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 8,
    "energy": 9,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 9,
    "aggression": 3,
    "preyDrive": 8,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 84,
    "eyes": 85,
    "heart": 88,
    "joints": 84
  },
  "aptitudes": ["Earthdog", "Agility", "Conformation"]
}, {
  "name": "American Hairless Terrier",
  "group": "Terrier",
  "size": "S",
  "coat": "hairless",
  "colors": ["pink", "pink & gray", "pink & red"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 5,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 84,
    "eyes": 82,
    "heart": 85,
    "joints": 84
  },
  "aptitudes": ["Agility", "Conformation", "Rally-O"]
}, {
  "name": "Tenterfield Terrier",
  "group": "Terrier",
  "size": "XS",
  "coat": "short",
  "colors": ["white & black", "white & tan", "tricolor"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Earthdog", "Agility", "Conformation"]
}, {
  "name": "Brazilian Terrier",
  "group": "Terrier",
  "size": "S",
  "coat": "short",
  "colors": ["tricolor", "white & black", "white & tan"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 9,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 85,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Agility", "Conformation", "Obedience"]
}, {
  "name": "Irish Water Spaniel",
  "group": "Sporting",
  "size": "L",
  "coat": "curly",
  "colors": ["liver"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 75,
    "eyes": 80,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Field Trials", "Dock Diving", "Conformation"]
}, {
  "name": "Field Spaniel",
  "group": "Sporting",
  "size": "M",
  "coat": "medium",
  "colors": ["black", "liver", "golden liver"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 1,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Field Trials", "Conformation", "Agility"]
}, {
  "name": "Stabyhoun",
  "group": "Sporting",
  "size": "M",
  "coat": "medium",
  "colors": ["black & white", "brown & white", "orange & white"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 1,
    "preyDrive": 7,
    "barkTendency": 4,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Field Trials", "Agility", "Conformation"]
}, {
  "name": "Small M\xFCnsterl\xE4nder",
  "group": "Sporting",
  "size": "M",
  "coat": "medium",
  "colors": ["brown & white", "brown roan"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 1,
    "preyDrive": 8,
    "barkTendency": 4,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Tracking", "Conformation"]
}, {
  "name": "Large M\xFCnsterl\xE4nder",
  "group": "Sporting",
  "size": "L",
  "coat": "long",
  "colors": ["black & white", "black roan"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 1,
    "preyDrive": 8,
    "barkTendency": 4,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Tracking", "Conformation"]
}, {
  "name": "Cesky Fousek",
  "group": "Sporting",
  "size": "L",
  "coat": "wire",
  "colors": ["brown", "brown & white", "roan"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 8,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 4,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Tracking", "Conformation"]
}, {
  "name": "Slovakian Wirehaired Pointer",
  "group": "Sporting",
  "size": "L",
  "coat": "wire",
  "colors": ["gray", "gray & white"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 4,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Tracking", "Conformation"]
}, {
  "name": "Perdigueiro Portugu\xEAs",
  "group": "Sporting",
  "size": "M",
  "coat": "short",
  "colors": ["yellow", "yellow & white", "fawn"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 4,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Perdiguero de Burgos",
  "group": "Sporting",
  "size": "L",
  "coat": "short",
  "colors": ["white & liver", "white & orange"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 2,
    "preyDrive": 8,
    "barkTendency": 4,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "\xC9pagneul Pont-Audemer",
  "group": "Sporting",
  "size": "M",
  "coat": "curly",
  "colors": ["brown", "brown & gray roan"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 1,
    "preyDrive": 7,
    "barkTendency": 4,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "\xC9pagneul Bleu de Picardie",
  "group": "Sporting",
  "size": "L",
  "coat": "medium",
  "colors": ["blue roan"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 1,
    "preyDrive": 7,
    "barkTendency": 4,
    "sociability": 8,
    "adaptability": 7
  },
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Field Trials", "Conformation"]
}, {
  "name": "Volpino Italiano",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["white", "red"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 4,
    "barkTendency": 8,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 82,
    "joints": 82
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "German Spitz (Klein)",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["white", "black", "brown", "orange", "gray"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 4,
    "barkTendency": 8,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 82,
    "joints": 82
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "German Spitz (Mittel)",
  "group": "Toy",
  "size": "S",
  "coat": "long",
  "colors": ["white", "black", "brown", "orange", "gray"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 4,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 82,
    "joints": 82
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "Mi-Ki",
  "group": "Toy",
  "size": "XS",
  "coat": "long",
  "colors": ["white", "black", "cream", "gold", "parti"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 4,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 1,
    "preyDrive": 2,
    "barkTendency": 3,
    "sociability": 9,
    "adaptability": 9
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 82,
    "joints": 82
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "English Toy Terrier",
  "group": "Toy",
  "size": "XS",
  "coat": "short",
  "colors": ["black & tan"],
  "species": "dog",
  "sizeAvg": 8,
  "sizeRange": [4, 12],
  "litterSize": "S",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 82,
    "joints": 80
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "Thai Bangkaew",
  "group": "Toy",
  "size": "M",
  "coat": "long",
  "colors": ["white & fawn", "white & red", "white & gray"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 4,
    "preyDrive": 6,
    "barkTendency": 7,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 80,
    "heart": 82,
    "joints": 80
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "Samoyed",
  "group": "Working",
  "size": "L",
  "coat": "long",
  "colors": ["white", "cream", "biscuit"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 2,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 8,
    "adaptability": 6
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Sled Racing", "Conformation", "Agility"]
}, {
  "name": "Chinook",
  "group": "Working",
  "size": "L",
  "coat": "medium",
  "colors": ["tawny", "fawn"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 8,
    "loyalty": 9,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 5,
    "barkTendency": 4,
    "sociability": 8,
    "adaptability": 8
  },
  "health": {
    "hips": 75,
    "eyes": 80,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Sled Racing", "Draft", "Conformation"]
}, {
  "name": "Tamaskan",
  "group": "Working",
  "size": "L",
  "coat": "medium",
  "colors": ["wolf gray", "red gray", "black gray"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 9,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Sled Racing", "Agility", "Conformation"]
}, {
  "name": "Northern Inuit",
  "group": "Working",
  "size": "L",
  "coat": "medium",
  "colors": ["white", "black", "gray", "sable"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "Utonagan",
  "group": "Working",
  "size": "L",
  "coat": "medium",
  "colors": ["gray", "white", "black", "sable"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 3,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "Bucovina Shepherd",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["white & black", "tricolor", "white & sand"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 75,
    "joints": 70
  },
  "aptitudes": ["Conformation"]
}, {
  "name": "Bankhar",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["black & tan", "fawn", "brown"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 6,
    "preyDrive": 6,
    "barkTendency": 8,
    "sociability": 4,
    "adaptability": 4
  },
  "health": {
    "hips": 68,
    "eyes": 72,
    "heart": 72,
    "joints": 68
  },
  "aptitudes": ["Schutzhund"]
}, {
  "name": "Mongolian Bankhar",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["black & tan", "fawn", "gray"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 6,
    "preyDrive": 6,
    "barkTendency": 8,
    "sociability": 4,
    "adaptability": 4
  },
  "health": {
    "hips": 68,
    "eyes": 72,
    "heart": 72,
    "joints": 68
  },
  "aptitudes": ["Schutzhund"]
}, {
  "name": "Assyrian Shepherd",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["fawn", "gray", "white"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 4,
    "loyalty": 9,
    "playfulness": 4,
    "aggression": 6,
    "preyDrive": 6,
    "barkTendency": 7,
    "sociability": 4,
    "adaptability": 5
  },
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 75,
    "joints": 70
  },
  "aptitudes": ["Schutzhund"]
}, {
  "name": "Dogo Canario",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["brindle", "fawn"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 6,
    "preyDrive": 6,
    "barkTendency": 4,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 68,
    "eyes": 72,
    "heart": 70,
    "joints": 68
  },
  "aptitudes": ["Schutzhund", "Conformation"]
}, {
  "name": "Ca de Bou",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["brindle", "fawn", "black"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 5,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 6,
    "preyDrive": 5,
    "barkTendency": 4,
    "sociability": 6,
    "adaptability": 5
  },
  "health": {
    "hips": 68,
    "eyes": 70,
    "heart": 68,
    "joints": 68
  },
  "aptitudes": ["Schutzhund", "Conformation"]
}, {
  "name": "Alano Espa\xF1ol",
  "group": "Working",
  "size": "L",
  "coat": "short",
  "colors": ["fawn", "brindle", "black"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 6,
    "preyDrive": 6,
    "barkTendency": 4,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 68,
    "eyes": 72,
    "heart": 70,
    "joints": 68
  },
  "aptitudes": ["Schutzhund", "Conformation"]
}, {
  "name": "Cao de Fila de Sao Miguel",
  "group": "Working",
  "size": "L",
  "coat": "short",
  "colors": ["fawn", "brindle", "gray brindle"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 7,
    "trainability": 7,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 5,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 72,
    "eyes": 75,
    "heart": 75,
    "joints": 72
  },
  "aptitudes": ["Herding", "Schutzhund", "Conformation"]
}, {
  "name": "C\xE3o de Castro Laboreiro",
  "group": "Working",
  "size": "L",
  "coat": "short",
  "colors": ["wolf gray", "dark", "brindle"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 5,
    "preyDrive": 5,
    "barkTendency": 7,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Conformation"]
}, {
  "name": "Perro Cimarron",
  "group": "Working",
  "size": "L",
  "coat": "short",
  "colors": ["brindle", "fawn"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 6,
    "loyalty": 9,
    "playfulness": 6,
    "aggression": 5,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 5
  },
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 75,
    "joints": 70
  },
  "aptitudes": ["Schutzhund", "Conformation"]
}, {
  "name": "Alaunt",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["fawn", "brindle", "white"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [80, 130],
  "litterSize": "L",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 5,
    "loyalty": 9,
    "playfulness": 5,
    "aggression": 6,
    "preyDrive": 6,
    "barkTendency": 5,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 68,
    "eyes": 72,
    "heart": 70,
    "joints": 68
  },
  "aptitudes": ["Schutzhund", "Conformation"]
}, {
  "name": "Jindo",
  "group": "Non-Sporting",
  "size": "M",
  "coat": "medium",
  "colors": ["white", "fawn", "gray", "black & tan", "brindle"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 6,
    "adaptability": 6
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "Kishu Ken",
  "group": "Non-Sporting",
  "size": "M",
  "coat": "medium",
  "colors": ["white", "red", "sesame"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 4,
    "sociability": 5,
    "adaptability": 6
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "Kai Ken",
  "group": "Non-Sporting",
  "size": "M",
  "coat": "medium",
  "colors": ["black brindle", "red brindle", "brindle"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 4,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "Hokkaido",
  "group": "Non-Sporting",
  "size": "M",
  "coat": "medium",
  "colors": ["red", "white", "black", "sesame", "brindle"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 7,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "Shikoku",
  "group": "Non-Sporting",
  "size": "M",
  "coat": "medium",
  "colors": ["sesame", "red sesame", "black sesame"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 8,
    "trainability": 5,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 4,
    "preyDrive": 7,
    "barkTendency": 5,
    "sociability": 5,
    "adaptability": 5
  },
  "health": {
    "hips": 82,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "Nihon Supittsu",
  "group": "Non-Sporting",
  "size": "M",
  "coat": "long",
  "colors": ["white"],
  "species": "dog",
  "sizeAvg": 40,
  "sizeRange": [28, 55],
  "litterSize": "M",
  "traits": {
    "intelligence": 7,
    "energy": 6,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 7,
    "aggression": 2,
    "preyDrive": 4,
    "barkTendency": 7,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 82,
    "joints": 82
  },
  "aptitudes": ["Conformation", "Agility"]
}, {
  "name": "Olde English Bulldogge",
  "group": "Non-Sporting",
  "size": "L",
  "coat": "short",
  "colors": ["brindle", "fawn", "red", "white"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 6,
    "energy": 6,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 4,
    "preyDrive": 4,
    "barkTendency": 4,
    "sociability": 7,
    "adaptability": 6
  },
  "health": {
    "hips": 68,
    "eyes": 72,
    "heart": 70,
    "joints": 68
  },
  "aptitudes": ["Conformation", "Obedience"]
}, {
  "name": "Teddy Roosevelt (Non-Sp)",
  "group": "Non-Sporting",
  "size": "S",
  "coat": "short",
  "colors": ["white & black", "white & tan"],
  "species": "dog",
  "sizeAvg": 20,
  "sizeRange": [12, 28],
  "litterSize": "S",
  "traits": {
    "intelligence": 8,
    "energy": 8,
    "trainability": 7,
    "loyalty": 8,
    "playfulness": 8,
    "aggression": 3,
    "preyDrive": 7,
    "barkTendency": 6,
    "sociability": 7,
    "adaptability": 7
  },
  "health": {
    "hips": 84,
    "eyes": 82,
    "heart": 85,
    "joints": 82
  },
  "aptitudes": ["Agility", "Conformation"]
}, {
  "name": "Czechoslovakian Vlcak",
  "group": "Non-Sporting",
  "size": "L",
  "coat": "medium",
  "colors": ["yellow gray", "silver gray"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 85],
  "litterSize": "L",
  "traits": {
    "intelligence": 8,
    "energy": 9,
    "trainability": 6,
    "loyalty": 8,
    "playfulness": 6,
    "aggression": 5,
    "preyDrive": 8,
    "barkTendency": 5,
    "sociability": 5,
    "adaptability": 6
  },
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Conformation", "Tracking"]
}];

// ── COLOR HELPERS ─────────────────────────────────────────────
var coiColor = function coiColor(c) {
  return c < 3 ? "#22c55e" : c < 10 ? "#eab308" : c < 25 ? "#f97316" : "#ef4444";
};
var coiLabel = function coiLabel(c) {
  return c < 3 ? "Outcross" : c < 10 ? "Moderate" : c < 25 ? "High" : "Very High";
};
var healthColor = function healthColor(s) {
  return s >= 85 ? "#22c55e" : s >= 65 ? "#eab308" : s >= 40 ? "#f97316" : "#ef4444";
};

// ── DNA MODAL ─────────────────────────────────────────────────
function DNAModal(_ref5) {
  var _animal$mutations;
  var animal = _ref5.animal,
    onClose = _ref5.onClose;
  var getDesc = function getDesc(loci, loc, al) {
    var _loci$loc, _loci$loc2;
    if (!al) return "—";
    return ((_loci$loc = loci[loc]) === null || _loci$loc === void 0 || (_loci$loc = _loci$loc.desc) === null || _loci$loc === void 0 ? void 0 : _loci$loc["".concat(al[0], "/").concat(al[1])]) || ((_loci$loc2 = loci[loc]) === null || _loci$loc2 === void 0 || (_loci$loc2 = _loci$loc2.desc) === null || _loci$loc2 === void 0 ? void 0 : _loci$loc2["".concat(al[1], "/").concat(al[0])]) || "".concat(al[0], "/").concat(al[1]);
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.88)",
      zIndex: 999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      background: "#0f172a",
      border: "1px solid #334155",
      borderRadius: 12,
      width: "100%",
      maxWidth: 720,
      maxHeight: "88vh",
      overflowY: "auto",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#38bdf8",
      fontFamily: "monospace",
      fontSize: "1.1rem",
      fontWeight: "bold"
    }
  }, "\uD83E\uDDEC Full DNA Panel"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#64748b",
      fontSize: "0.75rem"
    }
  }, animal.name, " \xB7 ", animal.breed, " \xB7 ID: ", animal.id)), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: "none",
      border: "1px solid #475569",
      color: "#94a3b8",
      borderRadius: 5,
      padding: "4px 12px",
      cursor: "pointer",
      fontSize: "0.85rem"
    }
  }, "\u2715 Close")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "monospace",
      fontSize: "0.62rem",
      background: "#1e293b",
      borderRadius: 6,
      padding: "8px 12px",
      marginBottom: 16,
      color: "#475569",
      wordBreak: "break-all"
    }
  }, "\uD83E\uDDEC ", animal.vinStr), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#f59e0b",
      fontWeight: "bold",
      fontSize: "0.8rem",
      textTransform: "uppercase",
      marginBottom: 8,
      letterSpacing: "0.05em"
    }
  }, "Coat Color Loci"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 6,
      marginBottom: 18
    }
  }, Object.entries(COAT_LOCI).map(function (_ref6) {
    var _ref7 = _slicedToArray(_ref6, 2),
      loc = _ref7[0],
      ld = _ref7[1];
    var al = animal.genome.coat[loc];
    if (!al) return null;
    var d = getDesc(COAT_LOCI, loc, al);
    var warn = d.includes("⚠️");
    return /*#__PURE__*/React.createElement("div", {
      key: loc,
      style: {
        background: warn ? "#3b0f0f" : "#1e293b",
        border: "1px solid ".concat(warn ? "#ef4444" : "#334155"),
        borderRadius: 6,
        padding: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#f59e0b",
        fontWeight: "bold",
        fontSize: "0.78rem"
      }
    }, loc), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "monospace",
        color: "#e2e8f0",
        fontSize: "0.82rem"
      }
    }, al[0], "/", al[1])), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#64748b",
        fontSize: "0.68rem",
        marginTop: 2
      }
    }, ld.name), /*#__PURE__*/React.createElement("div", {
      style: {
        color: warn ? "#fca5a5" : "#cbd5e1",
        fontSize: "0.7rem",
        marginTop: 2
      }
    }, d));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#22c55e",
      fontWeight: "bold",
      fontSize: "0.8rem",
      textTransform: "uppercase",
      marginBottom: 8,
      letterSpacing: "0.05em"
    }
  }, "Health Panel"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 6,
      marginBottom: 18
    }
  }, Object.entries(HEALTH_LOCI).map(function (_ref8) {
    var _ref9 = _slicedToArray(_ref8, 2),
      loc = _ref9[0],
      ld = _ref9[1];
    var al = animal.genome.health[loc];
    if (!al) return null;
    var d = getDesc(HEALTH_LOCI, loc, al);
    var aff = d.includes("⚠️");
    var car = d.includes("Carrier");
    return /*#__PURE__*/React.createElement("div", {
      key: loc,
      style: {
        background: aff ? "#3b0f0f" : "#1e293b",
        border: "1px solid ".concat(aff ? "#ef4444" : car ? "#ca8a04" : "#334155"),
        borderRadius: 6,
        padding: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#22c55e",
        fontWeight: "bold",
        fontSize: "0.78rem"
      }
    }, loc), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "monospace",
        color: "#e2e8f0",
        fontSize: "0.82rem"
      }
    }, al[0], "/", al[1])), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#64748b",
        fontSize: "0.68rem",
        marginTop: 2
      }
    }, ld.name), /*#__PURE__*/React.createElement("div", {
      style: {
        color: aff ? "#fca5a5" : car ? "#fde68a" : "#cbd5e1",
        fontSize: "0.7rem",
        marginTop: 2
      }
    }, d));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#a78bfa",
      fontWeight: "bold",
      fontSize: "0.8rem",
      textTransform: "uppercase",
      marginBottom: 8,
      letterSpacing: "0.05em"
    }
  }, "Performance QTLs"), /*#__PURE__*/React.createElement("div", {
    style: { display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 6, marginBottom: 18 }
  }, (function() {
    var QTL_INFO = {
      DRIVE:  { full: "Prey Drive",    line2: "",           desc: "Intensity of hunting/working motivation. High = tireless worker who needs a job. Low = relaxed and easy to settle.", hi: "Intense, tireless, needs a job", lo: "Calm, low-key, easy to settle" },
      INTEL:  { full: "Intelligence",  line2: "",           desc: "Problem-solving ability and trainability. High = learns fast, may get bored easily. Low = independent thinker, slower to train.", hi: "Fast learner, highly trainable", lo: "Stubborn, slower to train" },
      NERVE:  { full: "Nerve /",       line2: "Temperament", desc: "Confidence and stability under pressure. High = steady, bomb-proof, handles stress well. Low = nervous, reactive, spooks easily.", hi: "Steady, confident, bomb-proof", lo: "Sensitive, reactive, easily stressed" },
      SPEED:  { full: "Speed /",       line2: "Athleticism", desc: "Raw athletic ability — acceleration, agility, endurance. High = fast and agile. Low = slower, built for power.", hi: "Fast, agile, high-endurance", lo: "Slower, built for strength over speed" },
      MUSCLE: { full: "Muscle /",      line2: "Power",       desc: "Physical strength and body mass potential. High = powerful, heavy-boned. Low = lean and lightweight.", hi: "Powerful, heavy-boned, strong pull", lo: "Lean, lightweight, built for speed" }
    };
    return PERF_QTLS.map(function(q) {
      var v = animal.genome.perf[q] || [3, 3];
      var avg = ((v[0] + v[1]) / 2).toFixed(1);
      var info = QTL_INFO[q] || { full: q, line2: "", desc: "", hi: "", lo: "" };
      var tipText = info.full.replace(" /","") + " " + info.line2 + "\n" + info.desc + "\n\u25b2 High: " + info.hi + "\n\u25bc Low: " + info.lo;
      return /*#__PURE__*/React.createElement("div", {
        key: q,
        title: tipText,
        style: { background: "#1e293b", border: "1px solid #334155", borderRadius: 6, padding: 8, textAlign: "center", cursor: "help" }
      },
      /*#__PURE__*/React.createElement("div", { style: { color: "#a78bfa", fontSize: "0.68rem", fontWeight: "bold", lineHeight: 1.15 } }, info.full),
      /*#__PURE__*/React.createElement("div", { style: { color: "#7c6fa8", fontSize: "0.58rem", marginBottom: 4, lineHeight: 1.1 } }, info.line2 || "\u00a0"),
      /*#__PURE__*/React.createElement("div", { style: { display: "flex", justifyContent: "space-between", fontSize: "0.6rem", color: "#64748b", marginBottom: 1 } },
        /*#__PURE__*/React.createElement("span", null, "Sire"),
        /*#__PURE__*/React.createElement("span", null, "Dam")
      ),
      /*#__PURE__*/React.createElement("div", { style: { display: "flex", justifyContent: "space-between", fontFamily: "monospace", color: "#e2e8f0", fontSize: "0.95rem", marginBottom: 5 } },
        /*#__PURE__*/React.createElement("span", null, v[0]),
        /*#__PURE__*/React.createElement("span", null, v[1])
      ),
      /*#__PURE__*/React.createElement("div", { style: { fontSize: "0.58rem", color: "#64748b", marginBottom: 2 } }, "Avg score (1\u20135)"),
      /*#__PURE__*/React.createElement("div", { style: { background: "#0f172a", borderRadius: 3, height: 4, overflow: "hidden", marginBottom: 3 } },
        /*#__PURE__*/React.createElement("div", { style: { background: "#a78bfa", width: "".concat(avg / 5 * 100, "%"), height: "100%" } })
      ),
      /*#__PURE__*/React.createElement("div", { style: { color: "#a78bfa", fontSize: "0.72rem", fontWeight: "bold" } }, avg, "/5"));
    });
  })()), ((_animal$mutations = animal.mutations) === null || _animal$mutations === void 0 ? void 0 : _animal$mutations.length) > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#f97316",
      fontWeight: "bold",
      fontSize: "0.8rem",
      textTransform: "uppercase",
      marginBottom: 8
    }
  }, "\u26A1 Spontaneous Variants"), animal.mutations.map(function (m, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: "#2d1e0f",
        border: "1px solid #f97316",
        borderRadius: 5,
        padding: "6px 10px",
        marginBottom: 4,
        fontSize: "0.75rem"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#fb923c"
      }
    }, "\u26A1 Mutation at ", m.loc), " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#94a3b8"
      }
    }, "(from ", m.src, ")"));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#1e293b",
      border: "1px solid #334155",
      borderRadius: 6,
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#94a3b8",
      fontSize: "0.85rem"
    }
  }, "Coefficient of Inbreeding (COI)"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: coiColor(animal.coi),
      fontWeight: "bold"
    }
  }, animal.coi, "% \u2014 ", coiLabel(animal.coi))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#0f172a",
      borderRadius: 4,
      height: 6,
      overflow: "hidden",
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: coiColor(animal.coi),
      width: "".concat(Math.min(100, animal.coi * 4), "%"),
      height: "100%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: { display: "flex", gap: 4, marginTop: 8, flexWrap: "wrap" }
  },
    /*#__PURE__*/React.createElement("span", { key: 0, title: "Outcross (0-3%): Minimal shared ancestry. Maximum genetic diversity. Ideal for hybrid vigor, reducing hereditary disease risk, and introducing new traits. Best for health-first breeding programs.", style: { fontSize: "0.62rem", color: "#22c55e", cursor: "help", background: "#0f172a", border: "1px solid #22c55e", borderRadius: 3, padding: "2px 6px", whiteSpace: "nowrap" } }, "0-3% Outcross \u2139\uFE0F"),
    /*#__PURE__*/React.createElement("span", { key: 1, title: "Moderate (3-10%): Some shared ancestors, common in established purebred lines. Acceptable for maintaining breed type. Watch for slight increases in recessive disease expression. Most kennel clubs consider this normal range.", style: { fontSize: "0.62rem", color: "#eab308", cursor: "help", background: "#0f172a", border: "1px solid #eab308", borderRadius: 3, padding: "2px 6px", whiteSpace: "nowrap" } }, "3-10% Moderate \u2139\uFE0F"),
    /*#__PURE__*/React.createElement("span", { key: 2, title: "High (10-25%): Significant inbreeding - equivalent to breeding half-siblings or double first cousins. Noticeably reduced immune function, smaller litters, higher puppy mortality. Recessive disorders become much more likely. Use only with strong justification.", style: { fontSize: "0.62rem", color: "#f97316", cursor: "help", background: "#0f172a", border: "1px solid #f97316", borderRadius: 3, padding: "2px 6px", whiteSpace: "nowrap" } }, "10-25% High \u2139\uFE0F"),
    /*#__PURE__*/React.createElement("span", { key: 3, title: "Very High (25%+): Equivalent to parent-offspring or full sibling breeding. Severe inbreeding depression - reduced fertility, immune collapse, elevated cancer risk, shorter lifespan, and high probability of expressing multiple recessive disorders. Avoid.", style: { fontSize: "0.62rem", color: "#ef4444", cursor: "help", background: "#0f172a", border: "1px solid #ef4444", borderRadius: 3, padding: "2px 6px", whiteSpace: "nowrap" } }, "25%+ Very High \u2139\uFE0F")
  ))));
}

// ── DOG CEO PHOTO API ────────────────────────────────────────
var DOG_CEO_MAP = {
  // Retrievers
  "Golden Retriever":"retriever/golden","Labrador Retriever":"labrador",
  "Flat-Coated Retriever":"retriever/flatcoated","Chesapeake Bay Retriever":"retriever/chesapeake",
  "Curly-Coated Retriever":"retriever/curly",
  // Shepherds & herding
  "German Shepherd":"german/shepherd","Australian Shepherd":"australian/shepherd",
  "Border Collie":"collie/border","Rough Collie":"rough/collie",
  "Shetland Sheepdog":"sheepdog/shetland","Old English Sheepdog":"sheepdog/english",
  "Belgian Malinois":"malinois","Belgian Tervuren":"tervuren","Belgian Groenendael":"groenendael",
  "Pembroke Welsh Corgi":"pembroke","Cardigan Welsh Corgi":"corgi/cardigan",
  "Australian Cattle Dog":"cattledog/australian","Australian Kelpie":"australian/kelpie",
  // Setters & spaniels
  "English Setter":"setter/english","Gordon Setter":"setter/gordon","Irish Setter":"setter/irish",
  "Cocker Spaniel":"spaniel/cocker","English Springer Spaniel":"springer/english",
  "Brittany":"spaniel/brittany","Welsh Springer Spaniel":"spaniel/welsh",
  "Irish Water Spaniel":"spaniel/irish","Japanese Chin":"spaniel/japanese",
  "Sussex Spaniel":"spaniel/sussex",
  // Terriers
  "Airedale Terrier":"airedale","Border Terrier":"terrier/border",
  "Boston Terrier":"terrier/boston","Cairn Terrier":"terrier/cairn",
  "Fox Terrier":"terrier/fox","Irish Terrier":"terrier/irish",
  "Kerry Blue Terrier":"terrier/kerryblue","Lakeland Terrier":"terrier/lakeland",
  "Norfolk Terrier":"terrier/norfolk","Norwich Terrier":"terrier/norwich",
  "Scottish Terrier":"terrier/scottish","Sealyham Terrier":"terrier/sealyham",
  "Silky Terrier":"terrier/silky","Tibetan Terrier":"terrier/tibetan",
  "Welsh Terrier":"terrier/welsh","West Highland White Terrier":"terrier/westhighland",
  "Soft Coated Wheaten Terrier":"terrier/wheaten","Yorkshire Terrier":"terrier/yorkshire",
  "Bedlington Terrier":"terrier/bedlington","Staffordshire Bull Terrier":"bullterrier/staffordshire",
  "American Pit Bull Terrier":"pitbull","Russell Terrier":"terrier/russell",
  "Dandie Dinmont Terrier":"terrier/dandie","Patterdale Terrier":"terrier/patterdale",
  "American Terrier":"terrier/american",
  // Hounds
  "Afghan Hound":"hound/afghan","Basset Hound":"hound/basset","Bloodhound":"hound/blood",
  "English Foxhound":"hound/english","Ibizan Hound":"hound/ibizan",
  "Plott Hound":"hound/plott","Treeing Walker Coonhound":"hound/walker",
  "Coonhound":"coonhound","Bluetick Coonhound":"bluetick","Redbone Coonhound":"redbone",
  "Greyhound":"greyhound","Italian Greyhound":"greyhound/italian","Saluki":"saluki",
  "Whippet":"whippet","Borzoi":"borzoi","Irish Wolfhound":"wolfhound/irish",
  "Scottish Deerhound":"deerhound/scottish","Otterhound":"otterhound",
  "Norwegian Elkhound":"elkhound/norwegian","Basenji":"basenji","Rhodesian Ridgeback":"ridgeback/rhodesian",
  // Working & LGD
  "Great Pyrenees":"pyrenees","Tibetan Mastiff":"mastiff/tibetan",
  "English Mastiff":"mastiff/english","Bull Mastiff":"mastiff/bull",
  "Caucasian Ovcharka":"ovcharka/caucasian","Komondor":"komondor","Kuvasz":"kuvasz",
  "Leonberger":"leonberg","Newfoundland":"newfoundland","Saint Bernard":"stbernard",
  "Bernese Mountain Dog":"mountain/bernese","Greater Swiss Mountain Dog":"mountain/swiss",
  "Doberman Pinscher":"doberman","Rottweiler":"rottweiler","Boxer":"boxer",
  "Akita":"akita","Alaskan Malamute":"malamute","Siberian Husky":"husky",
  "Samoyed":"samoyed","Appenzeller":"appenzeller","Entlebucher":"entlebucher",
  "Bouvier des Flandres":"bouvier","Briard":"briard","Havanese":"havanese",
  // Sporting
  "Weimaraner":"weimaraner","Vizsla":"vizsla","German Shorthaired Pointer":"pointer/german",
  "German Longhaired Pointer":"pointer/germanlonghair","Dachshund":"dachshund",
  "Dalmatian":"dalmatian","Poodle":"poodle/standard","Miniature Poodle":"poodle/miniature",
  "Toy Poodle":"poodle/toy","Standard Poodle":"poodle/standard",
  "Bichon Frise":"frise/bichon","Coton de Tulear":"cotondetulear","Schipperke":"schipperke",
  "Keeshond":"keeshond","Chow Chow":"chow","Shar Pei":"sharpei",
  // Toy & small
  "Chihuahua":"chihuahua","Pomeranian":"pomeranian","Pug":"pug","Maltese":"maltese",
  "Shih Tzu":"shihtzu","Lhasa Apso":"lhasa","Pekinese":"pekinese","Papillon":"papillon",
  "Affenpinscher":"affenpinscher","Miniature Pinscher":"pinscher/miniature",
  "Miniature Schnauzer":"schnauzer/miniature","Giant Schnauzer":"schnauzer/giant",
  // Misc
  "Clumber Spaniel":"clumber","Beagle":"beagle","Pekingese":"pekinese",
  "Labradoodle":"labradoodle","Cockapoo":"cockapoo","Cavapoo":"cavapoo","Puggle":"puggle",
  "American Eskimo Dog":"eskimo","Shiba Inu":"shiba","Spanish Water Dog":"waterdog/spanish",
  "Dingo":"dingo","Mexican Hairless":"mexicanhairless"
};

function getDogCeoUrl(breedName) {
  var mapped = DOG_CEO_MAP[breedName];
  if (!mapped) {
    // Try fuzzy: first word lowercase
    var first = breedName.split(" ")[0].toLowerCase();
    mapped = first;
  }
  return "https://dog.ceo/api/breed/" + mapped + "/images/random";
}

function fetchDogPhoto(breedName, onSuccess, onError) {
  var url = getDogCeoUrl(breedName);
  fetch(url)
    .then(function(r) { return r.json(); })
    .then(function(d) {
      if (d.status === "success") onSuccess(d.message);
      else onError();
    })
    .catch(onError);
}


// ── COAT COLOR PAINTER ────────────────────────────────────────────────────
function getCoatPalette(genome) {
  var c = genome.coat;
  if (!c || !c.E) return { base:"#c8a97a", points:null, white:0, merle:false, brindle:false, roan:false, ticked:false };

  var brown    = c.B  && c.B[0]==="b"  && c.B[1]==="b";
  var dilute   = c.D  && c.D[0]==="d"  && c.D[1]==="d";
  var merle    = c.M  && (c.M[0]==="M" || c.M[1]==="M");
  var dblMerle = c.M  && c.M[0]==="M"  && c.M[1]==="M";
  var harl     = merle && c.H && (c.H[0]==="H" || c.H[1]==="H");
  var brindle  = c.K  && (c.K[0]==="kbr"||c.K[1]==="kbr") && !(c.K[0]==="KB"||c.K[1]==="KB");
  var intensity= c.I  && c.I[0]==="i"  && c.I[1]==="i";

  // White spotting level 0-1
  var white = 0;
  if (c.S) {
    var s0=c.S[0], s1=c.S[1];
    if (s0==="sw"||s1==="sw") white=0.85;
    else if (s0==="sp"||s1==="sp") white=0.45;
    else if (s0==="si"||s1==="si") white=0.25;
    else if (s0!=="S"||s1!=="S") white=0.12;
  }
  var roan   = !!(c.T && (c.T[0]==="TR"||c.T[1]==="TR") && white>0);
  var ticked = !!(c.T && (c.T[0]==="T"||c.T[1]==="T") && white>0);

  // Base colors by genetics
  var BLACK  = brown&&dilute?"#a89080":brown?"#7b4f3a":dilute?"#8a96a8":"#2c2c2c";
  var TAN    = brown&&dilute?"#d4b89a":dilute?"#c8b89a":"#c8833a";
  var RED    = intensity?"#f0d090":dilute?"#d4b87a":"#d4783a";
  var CREAM  = "#f0e8c8";
  var WOLF   = "#9a9a7a";

  var base, points=null;

  // Recessive red (ee)
  if (c.E[0]==="e"&&c.E[1]==="e") {
    base = intensity ? CREAM : RED;
    return {base,points,white,merle,dblMerle,harl,brindle,roan,ticked};
  }
  // Dominant black (KB)
  if (c.K&&(c.K[0]==="KB"||c.K[1]==="KB")) {
    base = BLACK;
    return {base,points,white,merle,dblMerle,harl,brindle,roan,ticked};
  }
  // A-locus patterns
  var a1 = c.A&&c.A[0];
  var saddle = c.As&&(c.As[0]==="N"||c.As[1]==="N") && a1==="at";
  if (a1==="Ay") { base=RED; return {base,points,white,merle,dblMerle,harl,brindle,roan,ticked}; }
  if (a1==="aw") { base=WOLF; return {base,points,white,merle,dblMerle,harl,brindle,roan,ticked}; }
  if (a1==="at") {
    base   = BLACK;
    points = { color:TAN, saddle:saddle };
    return {base,points,white,merle,dblMerle,harl,brindle,roan,ticked};
  }
  base = BLACK;
  return {base,points,white,merle,dblMerle,harl,brindle,roan,ticked};
}

// ── SVG SILHOUETTES ───────────────────────────────────────────────────────
// Each returns an SVG path string for a 200x160 viewBox dog silhouette

var SILHOUETTES = {
  // HERDING — athletic, medium, upright ears (shepherd shape)
  herding: "M30,130 C25,130 20,125 22,115 L24,95 C20,90 18,82 22,75 L28,65 C26,55 30,45 38,42 L48,38 C52,30 60,25 68,27 L78,25 C82,18 90,15 96,18 L104,16 C110,12 118,14 120,20 L122,28 C128,26 133,30 132,38 L130,48 C136,50 140,56 138,64 L134,72 C138,78 138,88 134,94 L136,108 C138,118 134,128 128,130 L120,132 C116,138 108,140 104,134 L100,130 L98,134 C94,140 86,140 82,134 L78,130 C72,134 62,134 58,128 L56,118 C50,120 44,122 42,128 L38,132 Z M68,27 C65,22 68,16 74,15 L80,14 C84,10 90,10 92,15 M88,18 C90,12 96,10 100,14 L104,16",
  
  // HOUND SCENT — long ears, deep chest, sturdy legs (beagle/basset shape)
  hound_scent: "M28,132 C24,132 20,127 22,118 L24,100 C20,94 20,85 24,78 L30,68 C28,58 32,48 40,44 L50,40 C52,32 58,26 66,27 L72,24 C74,16 82,12 90,15 L100,14 C106,10 114,14 116,22 L118,32 C124,32 128,38 126,46 L124,56 C130,60 132,68 130,76 L128,88 C132,96 132,108 128,118 L130,128 C130,135 124,138 118,132 L112,126 L110,132 C108,138 100,140 96,132 L92,126 L78,128 C72,132 64,132 60,126 L56,114 C50,118 44,120 40,126 L36,132 Z M66,27 C60,30 56,38 60,44 M72,24 C66,28 65,36 68,42 M68,42 L60,70 M74,40 L66,68",
  
  // HOUND SIGHT — deep chest, tucked waist, long legs (greyhound shape)
  hound_sight: "M35,128 C32,128 28,123 30,114 L32,100 L30,88 C26,82 26,72 30,65 L36,55 C34,44 40,35 48,33 L56,30 C60,22 68,18 76,20 L86,18 C92,14 100,16 102,24 L104,32 C110,30 114,36 112,44 L110,52 C116,56 118,66 115,74 L112,84 L114,100 C116,112 112,125 106,128 L98,130 C94,136 86,138 82,130 L78,124 L76,130 C72,136 64,136 60,128 L58,116 C52,120 46,120 44,126 L40,130 Z",

  // SPORTING — athletic, medium, floppy ears (retriever/spaniel)
  sporting: "M32,130 C28,130 24,125 26,115 L28,98 C24,92 24,83 28,76 L34,66 C32,55 36,46 44,42 L54,38 C56,30 63,25 71,27 L78,24 C80,16 88,13 95,17 L103,15 C109,11 117,14 118,22 L120,30 C126,29 130,35 129,43 L127,53 C133,57 136,65 133,73 L130,83 L132,98 C134,110 130,126 124,130 L116,132 C112,138 104,140 100,132 L96,126 L94,132 C90,138 82,138 78,130 L74,124 C68,128 60,128 56,122 L54,110 C48,114 42,116 40,124 L36,130 Z M71,27 C65,32 63,42 67,48 M78,24 C72,30 71,40 75,46",

  // TERRIER — compact, alert, upright posture (scottish/fox terrier)
  terrier: "M36,128 C32,128 28,123 30,114 L32,100 C28,94 28,85 32,78 L38,68 C36,58 40,50 48,46 L56,42 C58,34 65,29 73,31 L80,28 C84,20 91,17 97,21 L104,20 C110,16 117,19 118,27 L120,35 C126,34 130,40 128,48 L126,56 C130,60 132,68 129,76 L128,86 L130,100 C132,112 128,124 122,128 L114,130 C110,136 102,138 98,130 L94,124 L92,130 C88,136 80,136 76,128 L72,122 C66,126 58,126 55,120 L52,108 C46,112 40,114 38,122 L36,128 Z M73,31 C70,26 73,19 79,18 L84,17 C87,14 93,14 95,19 M91,22 C93,16 99,14 103,19",

  // TOY — small, rounded, large head proportion (chihuahua/pomeranian)
  toy: "M40,128 C36,128 33,123 35,114 L37,100 C33,94 33,86 37,80 L43,70 C41,60 46,52 54,49 L62,45 C63,37 70,32 78,34 L85,32 C88,24 95,21 101,25 L109,24 C114,20 121,23 122,30 L124,38 C129,37 133,43 131,50 L129,58 C133,63 134,71 131,78 L129,88 L131,102 C132,113 128,124 122,128 L114,130 C110,136 103,137 99,130 L95,124 L93,130 C89,136 82,136 78,128 L74,122 C68,126 61,126 58,120 L56,110 C50,113 44,115 43,122 L40,128 Z M78,34 C73,39 72,47 76,52 M85,32 C80,37 80,46 84,51",

  // WORKING LARGE — broad, powerful, large head (mastiff/rottweiler)
  working: "M25,132 C20,132 16,126 18,116 L20,98 C15,91 15,81 20,74 L27,63 C24,52 30,42 39,38 L51,34 C53,25 62,20 71,22 L80,20 C83,12 92,9 99,14 L108,12 C115,8 124,11 125,20 L127,30 C134,29 139,36 137,45 L134,56 C141,61 144,70 141,79 L138,90 L140,106 C142,119 137,130 130,133 L121,135 C117,142 108,144 103,135 L99,128 L96,136 C92,143 83,142 79,134 L74,127 C67,132 58,132 53,125 L50,112 C43,117 36,119 34,127 L28,133 Z",

  // NON-SPORTING — medium, stocky (bulldog/poodle catchall)
  non_sporting: "M33,130 C28,130 24,124 26,114 L28,97 C23,90 23,80 28,73 L35,62 C32,51 38,41 47,37 L58,33 C60,24 68,19 77,22 L85,19 C89,11 97,9 104,14 L113,12 C119,8 128,12 129,21 L131,31 C138,30 143,37 141,46 L138,57 C144,62 146,72 142,81 L139,92 L141,108 C143,121 138,132 131,135 L122,137 C117,144 108,146 103,136 L99,129 L96,137 C91,144 82,143 78,135 L73,127 C66,132 57,132 52,124 L49,111 C42,116 34,118 32,127 L33,130 Z",
};

function getGroupSilhouette(group, breedName) {
  var n = (breedName||"").toLowerCase();
  var g = (group||"").toLowerCase();
  if (g==="hound") {
    // sight hounds
    if (/greyhound|whippet|saluki|afghan|borzoi|azawakh|sloughi|galgo|pharaoh|ibizan|cirneco|chart|deerhound|irish wolfhound/.test(n))
      return SILHOUETTES.hound_sight;
    return SILHOUETTES.hound_scent;
  }
  if (g==="herding")     return SILHOUETTES.herding;
  if (g==="sporting")    return SILHOUETTES.sporting;
  if (g==="terrier")     return SILHOUETTES.terrier;
  if (g==="toy")         return SILHOUETTES.toy;
  if (g==="working")     return SILHOUETTES.working;
  if (g==="non-sporting")return SILHOUETTES.non_sporting;
  return SILHOUETTES.working;
}

// Generate merle patches as SVG elements
function renderMerlePatches(palette, w, h) {
  if (!palette.merle) return "";
  var patches = [];
  var seed = 42;
  function rng() { seed=(seed*1664525+1013904223)&0xffffffff; return Math.abs(seed)/0xffffffff; }
  var merleColor = palette.dblMerle ? "#e8e8f0" : palette.harl ? "#f0f0f0" : lightenColor(palette.base, 0.55);
  for (var i=0; i<(palette.dblMerle?18:10); i++) {
    var cx=30+rng()*140, cy=30+rng()*100;
    var rx=8+rng()*20, ry=5+rng()*14;
    var rot=rng()*180;
    patches.push('<ellipse cx="'+cx+'" cy="'+cy+'" rx="'+rx+'" ry="'+ry+'" transform="rotate('+rot+','+cx+','+cy+')" fill="'+merleColor+'" opacity="0.55"/>');
  }
  return patches.join("");
}

function lightenColor(hex, amt) {
  hex=hex.replace("#","");
  var r=parseInt(hex.slice(0,2),16), g=parseInt(hex.slice(2,4),16), b=parseInt(hex.slice(4,6),16);
  r=Math.min(255,Math.round(r+(255-r)*amt));
  g=Math.min(255,Math.round(g+(255-g)*amt));
  b=Math.min(255,Math.round(b+(255-b)*amt));
  return "#"+[r,g,b].map(function(x){return x.toString(16).padStart(2,"0");}).join("");
}

function darkenColor(hex, amt) {
  hex=hex.replace("#","");
  var r=parseInt(hex.slice(0,2),16), g=parseInt(hex.slice(2,4),16), b=parseInt(hex.slice(4,6),16);
  r=Math.max(0,Math.round(r*(1-amt)));
  g=Math.max(0,Math.round(g*(1-amt)));
  b=Math.max(0,Math.round(b*(1-amt)));
  return "#"+[r,g,b].map(function(x){return x.toString(16).padStart(2,"0");}).join("");
}

// Main SVG renderer
function DogSilhouette(_ref_sil) {
  var animal = _ref_sil.animal;
  var genome = animal.genome;
  var group  = animal.group||"Working";
  var breed  = animal.breed||"";
  var W=200, H=160;

  var palette = getCoatPalette(genome);
  var path    = getGroupSilhouette(group, breed);
  var silId   = "sil_"+animal.id;
  var clipId  = "clip_"+animal.id;

  // Background card color
  var bgColor = lightenColor(palette.base, 0.82);

  // Brindle stripes as a pattern
  var brindlePattern = palette.brindle ? (
    '<defs>'+
    '<pattern id="brindle_'+animal.id+'" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">'+
    '<rect width="10" height="10" fill="'+palette.base+'"/>'+
    '<rect y="0" width="4" height="10" fill="'+darkenColor(palette.base,0.35)+'" opacity="0.6"/>'+
    '</pattern>'+
    '</defs>'
  ) : '';

  var fillColor = palette.brindle ? 'url(#brindle_'+animal.id+')' : palette.base;

  // Tan points overlay — saddle or & tan
  var tanPointsEl = "";
  if (palette.points) {
    var tc = palette.points.color;
    if (palette.points.saddle) {
      // Saddle pattern: tan on legs, face, under belly — black saddle on back
      tanPointsEl =
        '<ellipse cx="50" cy="105" rx="10" ry="20" fill="'+tc+'" opacity="0.85"/>'+  // front left leg
        '<ellipse cx="68" cy="108" rx="10" ry="18" fill="'+tc+'" opacity="0.85"/>'+  // front right leg
        '<ellipse cx="128" cy="108" rx="10" ry="20" fill="'+tc+'" opacity="0.85"/>'+// rear left leg
        '<ellipse cx="146" cy="105" rx="10" ry="18" fill="'+tc+'" opacity="0.85"/>'+// rear right leg
        '<ellipse cx="95" cy="58" rx="12" ry="9" fill="'+tc+'" opacity="0.7"/>'+    // face
        '<ellipse cx="100" cy="90" rx="18" ry="8" fill="'+tc+'" opacity="0.5"/>';   // belly
    } else {
      // Black & Tan: tan eyebrows, cheeks, legs, chest
      tanPointsEl =
        '<ellipse cx="88" cy="50" rx="5" ry="3" fill="'+tc+'" opacity="0.9"/>'+     // L eyebrow
        '<ellipse cx="104" cy="50" rx="5" ry="3" fill="'+tc+'" opacity="0.9"/>'+    // R eyebrow
        '<ellipse cx="92" cy="60" rx="7" ry="5" fill="'+tc+'" opacity="0.75"/>'+    // L cheek
        '<ellipse cx="108" cy="60" rx="7" ry="5" fill="'+tc+'" opacity="0.75"/>'+   // R cheek
        '<ellipse cx="50" cy="105" rx="9" ry="18" fill="'+tc+'" opacity="0.85"/>'+  // front left
        '<ellipse cx="68" cy="108" rx="9" ry="16" fill="'+tc+'" opacity="0.85"/>'+  // front right
        '<ellipse cx="130" cy="108" rx="9" ry="18" fill="'+tc+'" opacity="0.85"/>'+// rear left
        '<ellipse cx="147" cy="105" rx="9" ry="16" fill="'+tc+'" opacity="0.85"/>'+// rear right
        '<ellipse cx="100" cy="82" rx="14" ry="7" fill="'+tc+'" opacity="0.55"/>';  // chest
    }
  }

  // White spotting overlay
  var whiteEl = "";
  if (palette.white > 0) {
    var w = palette.white;
    var wc = palette.roan ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.88)";
    if (w >= 0.8) {
      // Extreme white — almost all white with color on head/tail only
      whiteEl = '<ellipse cx="100" cy="95" rx="68" ry="45" fill="'+wc+'"/>'+
                '<ellipse cx="100" cy="115" rx="58" ry="22" fill="'+wc+'"/>';
    } else if (w >= 0.4) {
      // Piebald — large white patches on body
      whiteEl = '<ellipse cx="100" cy="105" rx="50" ry="28" fill="'+wc+'"/>'+
                '<ellipse cx="80" cy="85" rx="20" ry="15" fill="'+wc+'"/>'+
                '<ellipse cx="50" cy="110" rx="12" ry="22" fill="'+wc+'"/>'+
                '<ellipse cx="148" cy="110" rx="12" ry="22" fill="'+wc+'"/>';
    } else if (w >= 0.2) {
      // Irish white — chest, paws, collar
      whiteEl = '<ellipse cx="100" cy="100" rx="22" ry="12" fill="'+wc+'"/>'+  // chest
                '<ellipse cx="50" cy="122" rx="9" ry="8" fill="'+wc+'"/>'+     // front paws
                '<ellipse cx="68" cy="124" rx="9" ry="8" fill="'+wc+'"/>'+
                '<ellipse cx="130" cy="122" rx="9" ry="8" fill="'+wc+'"/>'+    // rear paws
                '<ellipse cx="148" cy="124" rx="9" ry="8" fill="'+wc+'"/>';
    } else {
      // Minimal white — just a blaze and small chest spot
      whiteEl = '<ellipse cx="96" cy="48" rx="5" ry="8" fill="'+wc+'"/>'+      // blaze
                '<ellipse cx="100" cy="95" rx="10" ry="7" fill="'+wc+'"/>';    // chest spot
    }
  }

  // Ticking dots on white areas
  var tickEl = "";
  if (palette.ticked && palette.white > 0) {
    var dots = [];
    var tseed = 77;
    function trng() { tseed=(tseed*1664525+1013904223)&0xffffffff; return Math.abs(tseed)/0xffffffff; }
    for (var ti=0; ti<20; ti++) {
      var tx=30+trng()*140, ty=60+trng()*80;
      dots.push('<circle cx="'+tx+'" cy="'+ty+'" r="2" fill="'+palette.base+'" opacity="0.6"/>');
    }
    tickEl = dots.join("");
  }

  // Eyes
  var eyeColor = "#3a2010";
  var eyesEl =
    '<ellipse cx="90" cy="54" rx="4" ry="4" fill="'+eyeColor+'"/>'+
    '<ellipse cx="106" cy="54" rx="4" ry="4" fill="'+eyeColor+'"/>'+
    '<ellipse cx="91" cy="53" rx="1.5" ry="1.5" fill="#ffffff" opacity="0.6"/>'+
    '<ellipse cx="107" cy="53" rx="1.5" ry="1.5" fill="#ffffff" opacity="0.6"/>';

  // Nose
  var noseEl = '<ellipse cx="98" cy="66" rx="5" ry="3.5" fill="'+darkenColor(palette.base,0.6)+'"/>';

  var merleEl = renderMerlePatches(palette, W, H);

  var svgStr =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+W+' '+H+'" width="100%" height="100%" style="display:block">'+
      brindlePattern+
      '<defs>'+
        '<clipPath id="'+clipId+'">'+
          '<path d="'+path+'"/>'+
        '</clipPath>'+
      '</defs>'+
      // Background
      '<rect width="'+W+'" height="'+H+'" fill="'+bgColor+'" rx="7"/>'+
      // Base coat fill
      '<path d="'+path+'" fill="'+fillColor+'" stroke="'+darkenColor(palette.base,0.25)+'" stroke-width="1.5"/>'+
      // Clip group for all overlays
      '<g clip-path="url(#'+clipId+')">'+
        tanPointsEl+
        whiteEl+
        merleEl+
        tickEl+
        eyesEl+
        noseEl+
      '</g>'+
      // Outline on top for crispness
      '<path d="'+path+'" fill="none" stroke="'+darkenColor(palette.base,0.4)+'" stroke-width="1.5"/>'+
    '</svg>';

  return React.createElement("div", {
    dangerouslySetInnerHTML: { __html: svgStr },
    style: { width:"100%", height:"100%", borderRadius:7, overflow:"hidden" }
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// ── ANIMAL CARD ───────────────────────────────────────────────
function Card(_ref0) {
  var _animal$healthIssues, _animal$lethalWarning, _animal$mutations2;
  var animal = _ref0.animal,
    onSelect = _ref0.onSelect,
    isSelected = _ref0.isSelected,
    onRemove = _ref0.onRemove,
    onRename = _ref0.onRename,
    ineligibleReason = _ref0.ineligibleReason,
    fullHeight = _ref0.fullHeight,
    onStud = _ref0.onStud,
    onSell = _ref0.onSell,
    onRetire = _ref0.onRetire;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showDNA = _useState2[0],
    setShowDNA = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    editing = _useState4[0],
    setEditing = _useState4[1];
  var _useState5 = useState(animal.name),
    _useState6 = _slicedToArray(_useState5, 2),
    nameVal = _useState6[0],
    setNameVal = _useState6[1];
  var submitRename = function submitRename(e) {
    e.stopPropagation();
    if (nameVal.trim()) onRename && onRename(animal.id, nameVal.trim());
    setEditing(false);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, showDNA && /*#__PURE__*/React.createElement(DNAModal, {
    animal: animal,
    onClose: function onClose() {
      return setShowDNA(false);
    }
  }), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return onSelect && onSelect(animal);
    },
    style: {
      background: isSelected ? "#dbeafe" : "#f1f5f9",
      border: "2px solid ".concat(isSelected ? "#93c5fd" : ineligibleReason && onSelect ? "#cbd5e1" : "#cbd5e1"),
      borderRadius: 10,
      padding: 14,
      cursor: onSelect ? (ineligibleReason ? "not-allowed" : "pointer") : "default",
      transition: "border-color 0.15s",
      opacity: ineligibleReason && onSelect ? 0.75 : 1,
      display: "flex",
      flexDirection: "column",
      height: fullHeight ? "100%" : "auto",
      boxSizing: "border-box",
      overflow: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%", height: 100, borderRadius: 7, marginBottom: 12,
      background: "#0a0f1a", border: "1px dashed #1e293b"
    }
  })),
  (onStud || onSell || onRetire) && /*#__PURE__*/React.createElement("div", {
    style: { display:"flex", gap:4, marginBottom:8 },
    onClick: function(e){ e.stopPropagation(); }
  },
    animal.sex === "M" && onStud && /*#__PURE__*/React.createElement("button", {
      onClick: function(e){ e.stopPropagation(); onStud(animal); },
      style: { flex:1, background: animal.isStud?"#0f2d1e":"#0a0f1a", border:"1px solid "+(animal.isStud?"#22c55e":"#334155"),
        color: animal.isStud?"#22c55e":"#64748b", borderRadius:5, padding:"3px 0", cursor:"pointer", fontSize:"0.68rem", fontWeight:"bold" }
    }, animal.isStud ? "\uD83D\uDC3E Stud \u2713" : "\uD83D\uDC3E Stud"),
    onSell && /*#__PURE__*/React.createElement("button", {
      onClick: function(e){ e.stopPropagation(); onSell(animal); },
      style: { flex:1, background: animal.forSale?"#1a1200":"#0a0f1a", border:"1px solid "+(animal.forSale?"#f59e0b":"#334155"),
        color: animal.forSale?"#f59e0b":"#64748b", borderRadius:5, padding:"3px 0", cursor:"pointer", fontSize:"0.68rem", fontWeight:"bold" }
    }, animal.forSale ? "\uD83D\uDCB0 Listed" : "\uD83D\uDCB0 Sell"),
    onRetire && /*#__PURE__*/React.createElement("button", {
      onClick: function(e){ e.stopPropagation(); onRetire(animal); },
      style: { flex:1, background:"#0a0f1a", border:"1px solid #334155", color:"#64748b",
        borderRadius:5, padding:"3px 0", cursor:"pointer", fontSize:"0.68rem", fontWeight:"bold" }
    }, "\uD83C\uDFE1 Retire")
  ),
  /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, editing ? /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      display: "flex",
      gap: 4,
      marginBottom: 2
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: nameVal,
    onChange: function onChange(e) {
      return setNameVal(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === "Enter") submitRename(e);
      if (e.key === "Escape") {
        setEditing(false);
        setNameVal(animal.name);
      }
    },
    autoFocus: true,
    style: {
      background: "#0f172a",
      border: "1px solid #38bdf8",
      color: "#0f172a",
      borderRadius: 4,
      padding: "2px 6px",
      fontSize: "0.88rem",
      flex: 1,
      minWidth: 0
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: submitRename,
    style: {
      background: "#1e3a5f",
      border: "1px solid #38bdf8",
      color: "#38bdf8",
      borderRadius: 4,
      padding: "2px 6px",
      cursor: "pointer",
      fontSize: "0.72rem"
    }
  }, "\u2713")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#0f172a",
      fontWeight: "bold",
      fontSize: "0.92rem"
    }
  }, animal.name), onRename && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) {
      e.stopPropagation();
      setEditing(true);
      setNameVal(animal.name);
    },
    style: {
      background: "none",
      border: "none",
      color: "#475569",
      cursor: "pointer",
      fontSize: "0.65rem",
      padding: "1px 3px",
      lineHeight: 1
    },
    title: "Rename"
  }, "\u270F\uFE0F")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#64748b",
      fontSize: "0.72rem"
    }
  }, animal.breed, " \xB7 ", animal.sex === "M" ? "♂ Male" : "♀ Female", " \xB7 Gen ", animal.generation)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 5,
      alignItems: "flex-start"
    }
  }, isSelected && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#38bdf8",
      fontSize: "0.72rem",
      fontWeight: "bold"
    }
  }, "\u2713 SEL"), onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) {
      e.stopPropagation();
      onRemove(animal.id);
    },
    style: {
      background: "none",
      border: "1px solid #475569",
      color: "#64748b",
      borderRadius: 4,
      width: 20,
      height: 20,
      cursor: "pointer",
      fontSize: "0.65rem",
      padding: 0,
      lineHeight: 1
    }
  }, "\u2715"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-block",
      background: "#0f172a",
      border: "1px solid #1e3a5f",
      borderRadius: 4,
      padding: "2px 8px",
      fontSize: "0.72rem",
      color: "#94a3b8",
      marginBottom: 8
    }
  },
    /*#__PURE__*/React.createElement("span", {
      style: { display:"inline-block", background:"#0f172a", border:"1px solid #1e3a5f",
        borderRadius:4, padding:"2px 8px", fontSize:"0.72rem", color:"#94a3b8", marginRight:4 }
    }, animal.coatColor ? animal.coatColor.split(" \xB7 ")[0] : "Unknown"),
    animal.coatColor && animal.coatColor.includes(" \xB7 ") && /*#__PURE__*/React.createElement("span", {
      style: { display:"inline-block", background:"#0f172a", border:"1px solid #334155",
        borderRadius:4, padding:"2px 8px", fontSize:"0.72rem", color:"#e2e8f0" }
    }, animal.coatColor.split(" \xB7 ").slice(1).join(" \xB7 "))
  ), (function() {
    var stage = getAgeStage(animal.ageMonths || 0);
    var lifespanYrs = animal.lifespan ? Math.round(animal.lifespan / 12 * 10) / 10 : "?";
    var ageYrs = animal.ageMonths ? Math.round(animal.ageMonths / 12 * 10) / 10 : 0;
    return /*#__PURE__*/React.createElement("div", {
      style: { display: "flex", gap: 6, alignItems: "center", marginBottom: 8, flexWrap: "wrap" }
    },
      /*#__PURE__*/React.createElement("span", {
        style: {
          display: "inline-block", background: "#0f172a", border: "1px solid " + stage.color,
          borderRadius: 4, padding: "2px 8px", fontSize: "0.72rem", color: stage.color, fontWeight: "bold"
        }
      }, stage.label),
      /*#__PURE__*/React.createElement("span", {
        style: { color: "#475569", fontSize: "0.72rem" }
      }, ageYrs + " / " + lifespanYrs + " yrs"),
      animal.retired && /*#__PURE__*/React.createElement("span", {
        style: {
          display: "inline-block", background: "#3b0f0f", border: "1px solid #ef4444",
          borderRadius: 4, padding: "2px 8px", fontSize: "0.68rem", color: "#fca5a5"
        }
      }, "\uD83C\uDFF4 Retired"),
      animal.sick && /*#__PURE__*/React.createElement("span", {
        style: {
          display: "inline-block", background: "#2d1a00", border: "1px solid #f59e0b",
          borderRadius: 4, padding: "2px 8px", fontSize: "0.68rem", color: "#fcd34d"
        }
      }, "\uD83E\uDD22 Sick"),
      animal.injured && /*#__PURE__*/React.createElement("span", {
        style: {
          display: "inline-block", background: "#2d1a00", border: "1px solid #f97316",
          borderRadius: 4, padding: "2px 8px", fontSize: "0.68rem", color: "#fdba74"
        }
      }, "\uD83E\uDE79 Injured")
    );
  })(), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 8
    }
  }, [["HEALTH", animal.healthScore, healthColor(animal.healthScore)], ["PERF", animal.perfScore, "#a78bfa"], ["COI", "".concat(animal.coi, "%"), coiColor(animal.coi)]].map(function (_ref1) {
    var _ref10 = _slicedToArray(_ref1, 3),
      l = _ref10[0],
      v = _ref10[1],
      col = _ref10[2];
    return /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        flex: 1,
        background: "#0f172a",
        borderRadius: 5,
        padding: "5px 4px",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: col,
        fontWeight: "bold",
        fontSize: "0.95rem"
      }
    }, v), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#475569",
        fontSize: "0.6rem"
      }
    }, l));
  })), (_animal$healthIssues = animal.healthIssues) === null || _animal$healthIssues === void 0 ? void 0 : _animal$healthIssues.filter(function (i) {
    return i.sev === "high";
  }).map(function (iss, i) {
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        display: "inline-block",
        background: "#3b0f0f",
        color: "#fca5a5",
        fontSize: "0.62rem",
        borderRadius: 3,
        padding: "1px 5px",
        marginRight: 3,
        marginBottom: 3
      }
    }, "\u26A0\uFE0F ", iss.name);
  }), (_animal$lethalWarning = animal.lethalWarnings) === null || _animal$lethalWarning === void 0 ? void 0 : _animal$lethalWarning.map(function (w, i) {
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        display: "inline-block",
        background: "#3b0f0f",
        color: "#fca5a5",
        fontSize: "0.62rem",
        borderRadius: 3,
        padding: "1px 5px",
        marginRight: 3,
        marginBottom: 3
      }
    }, "\u2620\uFE0F ", w.msg);
  }), ((_animal$mutations2 = animal.mutations) === null || _animal$mutations2 === void 0 ? void 0 : _animal$mutations2.length) > 0 && animal.mutations.map(function (m, i) {
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        display: "inline-block",
        background: "#2d1e0f",
        color: "#fb923c",
        fontSize: "0.62rem",
        borderRadius: 3,
        padding: "1px 5px",
        marginBottom: 3,
        marginRight: 3
      }
    }, "\u26A1 ", m.desc || m.loc, " (from ", m.src, ")");
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "monospace",
      fontSize: "0.56rem",
      color: "#64748b",
      background: "#0f172a",
      borderRadius: 3,
      padding: "3px 6px",
      margin: "6px 0",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    },
    title: animal.vinStr
  }, "\uD83E\uDDEC ", animal.vinStr),

  animal.aptitudes && animal.aptitudes.length > 0 && /*#__PURE__*/React.createElement("div", { style: { marginBottom: 10 } },
    /*#__PURE__*/React.createElement("div", { style: { color: "#64748b", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 5 } }, "Aptitudes"),
    /*#__PURE__*/React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 4 } },
      animal.aptitudes.map(function(apt, i) {
        var APT_COLORS = {
          "LGD":["#7c3aed","#4c1d95"],"Schutzhund":["#dc2626","#7f1d1d"],"IPO":["#dc2626","#7f1d1d"],
          "PoliceWork":["#1d4ed8","#1e3a8a"],"Military":["#1d4ed8","#1e3a8a"],"Search&Rescue":["#d97706","#78350f"],
          "Herding":["#059669","#064e3b"],"Tracking":["#0891b2","#164e63"],"FieldTrials":["#ca8a04","#713f12"],
          "Agility":["#7c3aed","#3b0764"],"Obedience":["#0284c7","#0c4a6e"],"Rally-O":["#0284c7","#0c4a6e"],
          "Flyball":["#ea580c","#7c2d12"],"DockDiving":["#0891b2","#164e63"],"LureCoursing":["#be185d","#500724"],
          "Racing":["#be185d","#500724"],"Draft":["#78716c","#292524"],"SledRacing":["#6b7280","#1f2937"],
          "Earthdog":["#92400e","#451a03"],"Therapy":["#be185d","#500724"],"Conformation":["#475569","#1e293b"]
        };
        var APT_LABELS = {
          "LGD":"\uD83D\uDC11 LGD","Schutzhund":"\uD83D\uDEE1\uFE0F Schutzhund","IPO":"\uD83D\uDEE1\uFE0F IPO",
          "PoliceWork":"\uD83D\uDC6E Police","Military":"\u2694\uFE0F Military","Search&Rescue":"\uD83D\uDD0D SAR",
          "Herding":"\uD83D\uDC04 Herding","Tracking":"\uD83D\uDC43 Tracking","FieldTrials":"\uD83E\uDD86 Field",
          "Agility":"\u26A1 Agility","Obedience":"\uD83C\uDF93 Obedience","Rally-O":"\uD83C\uDF93 Rally-O",
          "Flyball":"\uD83C\uDFBE Flyball","DockDiving":"\uD83D\uDCA7 Dock","LureCoursing":"\uD83D\uDC07 Lure",
          "Racing":"\uD83C\uDFC1 Racing","Draft":"\uD83D\uDC02 Draft","SledRacing":"\uD83D\uDEF7 Sled",
          "Earthdog":"\uD83D\uDD73\uFE0F Earthdog","Therapy":"\u2764\uFE0F Therapy","Conformation":"\uD83C\uDFC6 Show"
        };
        var cols = APT_COLORS[apt] || ["#475569","#1e293b"];
        return /*#__PURE__*/React.createElement("span", {
          key: i,
          style: { background: cols[1], border: "1px solid " + cols[0], color: cols[0], borderRadius: 4, padding: "2px 7px", fontSize: "0.65rem", fontWeight: "bold", whiteSpace: "nowrap" }
        }, APT_LABELS[apt] || apt);
      })
    )
  ),

  animal.traits && /*#__PURE__*/React.createElement("div", { style: { marginBottom: 10 } },
    /*#__PURE__*/React.createElement("div", { style: { color: "#64748b", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 5 } }, "Breed Traits"),
    /*#__PURE__*/React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3px 14px" } },
      [["intelligence","\uD83E\uDDE0 Intelligence","#38bdf8"],["trainability","\uD83C\uDF93 Trainability","#34d399"],
       ["energy","\u26A1 Energy","#fbbf24"],["loyalty","\u2764\uFE0F Loyalty","#f472b6"],
       ["sociability","\uD83E\uDD1D Sociability","#34d399"],["preyDrive","\uD83C\uDFAF Prey Drive","#f97316"],
       ["aggression","\u26A0\uFE0F Aggression","#ef4444"],["barkTendency","\uD83D\uDD0A Barking","#fbbf24"],
       ["adaptability","\uD83D\uDD04 Adaptability","#38bdf8"],["playfulness","\uD83E\uDDF8 Playfulness","#a78bfa"]
      ].map(function(row) {
        var key = row[0], label = row[1], color = row[2];
        var val = animal.traits[key];
        if (val === undefined || val === null) return null;
        return /*#__PURE__*/React.createElement("div", { key: key, title: label + ": " + val + "/10" },
          /*#__PURE__*/React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 1 } },
            /*#__PURE__*/React.createElement("span", { style: { fontSize: "0.6rem", color: "#94a3b8" } }, label),
            /*#__PURE__*/React.createElement("span", { style: { fontSize: "0.6rem", color: color, fontWeight: "bold" } }, val, "/10")
          ),
          /*#__PURE__*/React.createElement("div", { style: { background: "#0f172a", borderRadius: 2, height: 3 } },
            /*#__PURE__*/React.createElement("div", { style: { background: color, width: (val/10*100) + "%", height: "100%", borderRadius: 2 } })
          )
        );
      })
    )
  ),

  /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) { e.stopPropagation(); setShowDNA(true); },
    style: { width: "100%", background: "none", border: "1px solid #1e3a5f", color: "#38bdf8", borderRadius: 5, padding: "4px", cursor: "pointer", fontSize: "0.72rem" }
  }, "View Full DNA Panel"));
}

// ── MAIN APP ──────────────────────────────────────────────────

// ── CLOCK COMPONENT ──────────────────────────────────────────
function Clock() {
  const [now, setNow] = useState(new Date());

  useEffect(function() {
    var interval = setInterval(function() {
      setNow(new Date());
    }, 1000);
    return function() { clearInterval(interval); };
  }, []);

  // Next reset = 5am EST = 10am UTC
  function getNextReset() {
    var n = new Date(now);
    var reset = new Date(now);
    reset.setUTCHours(10, 0, 0, 0);
    if (n >= reset) reset.setUTCDate(reset.getUTCDate() + 1);
    return reset;
  }

  var next = getNextReset();
  var diff = next - now;
  var hh = Math.floor(diff / 3600000);
  var mm = Math.floor((diff % 3600000) / 60000);
  var ss = Math.floor((diff % 60000) / 1000);
  var pad = function(n) { return String(n).padStart(2,'0'); };

  // Format current time in EST
  var estTime = now.toLocaleTimeString('en-US', {
    timeZone: 'America/New_York',
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
  });

  return React.createElement('div', {
    style: {
      display: 'flex', alignItems: 'center', gap: 10,
      background: '#0f172a', border: '1px solid #1e3a5f',
      borderRadius: 6, padding: '3px 10px', fontSize: '0.72rem'
    }
  },
    React.createElement('span', {style: {color: '#38bdf8'}}, '🕐 ' + estTime + ' EST'),
    React.createElement('span', {style: {color: '#334155'}},'|'),
    React.createElement('span', {style: {color: '#eab308'}}, '⏱ Reset: ' + pad(hh) + ':' + pad(mm) + ':' + pad(ss))
  );
}


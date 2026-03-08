// Bloodline Acres — Breed Database
// 382 breeds with genetics, size, health, and coat profiles
// Auto-loaded by game.js

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
  "aptitudes": ["Tracking", "Lure Coursing", "Conformation"],
  "coatFreqs": {"E": [["E", 0.8], ["e", 0.2]], "K": [["KB", 0], ["kbr", 0], ["ky", 1.0]], "A": [["Ay", 1.0], ["aw", 0], ["at", 0], ["a", 0]], "B": [["B", 0.9], ["b", 0.1]], "S": [["S", 0.95], ["sp", 0.05], ["sw", 0.0]]},
  "healthFlags": ["hips", "cancer", "thyroid", "dermoid sinus"]
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
  "colors": ["fawn", "brindle", "fawn with white", "brindle with white"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [50, 80],
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
    "adaptability": 8,
  "founderCOI": 5.5
},
  "health": {
    "hips": 72,
    "eyes": 80,
    "heart": 72,
    "joints": 72
  },
  "aptitudes": ["Schutzhund", "Agility", "Conformation"],
  "coatFreqs": {"E": [["E", 0.85], ["e", 0.15]], "K": [["KB", 0.45], ["kbr", 0.45], ["ky", 0.1]], "A": [["Ay", 0.9], ["aw", 0], ["at", 0.1], ["a", 0]], "S": [["S", 0.55], ["sp", 0.4], ["sw", 0.05]]},
  "healthFlags": ["heart", "cancer", "hips", "breathing"]
}, {
  "name": "Doberman Pinscher",
  "group": "Working",
  "size": "L",
  "coat": "short",
  "colors": ["black & rust", "red & rust", "blue & rust", "fawn & rust"],
  "species": "dog",
  "sizeAvg": 80,
  "sizeRange": [60, 100],
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
    "adaptability": 8,
  "founderCOI": 6.5
},
  "health": {
    "hips": 75,
    "eyes": 82,
    "heart": 72,
    "joints": 75
  },
  "aptitudes": ["Schutzhund", "Obedience", "Agility"],
  "coatFreqs": {"E": [["E", 1.0], ["e", 0.0]], "K": [["KB", 0.95], ["kbr", 0], ["ky", 0.05]], "A": [["Ay", 0], ["aw", 0], ["at", 1.0], ["a", 0]], "B": [["B", 0.65], ["b", 0.35]], "D": [["D", 0.7], ["d", 0.3]]},
  "healthFlags": ["heart", "hips", "cancer", "bloat"]
}, {
  "name": "Rottweiler",
  "group": "Working",
  "size": "L",
  "coat": "short",
  "colors": ["black & mahogany", "black & rust", "black & tan"],
  "species": "dog",
  "sizeAvg": 105,
  "sizeRange": [80, 135],
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
    "adaptability": 7,
  "founderCOI": 5.0
},
  "health": {
    "hips": 72,
    "eyes": 80,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Schutzhund", "Obedience", "Tracking"],
  "coatFreqs": {"E": [["E", 1.0], ["e", 0.0]], "K": [["KB", 0.95], ["kbr", 0], ["ky", 0.05]], "A": [["Ay", 0], ["aw", 0], ["at", 1.0], ["a", 0]], "B": [["B", 1.0], ["b", 0.0]]},
  "healthFlags": ["hips", "joints", "heart", "cancer", "bloat"]
}, {
  "name": "Giant Schnauzer",
  "group": "Working",
  "size": "L",
  "coat": "wire",
  "colors": ["black", "salt & pepper"],
  "species": "dog",
  "sizeAvg": 80,
  "sizeRange": [60, 105],
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
    "adaptability": 7,
  "founderCOI": 5.0
},
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Schutzhund", "Obedience", "Agility"],
  "coatFreqs": {"E": [["E", 1.0], ["e", 0.0]], "K": [["KB", 0.7], ["kbr", 0], ["ky", 0.3]], "A": [["Ay", 0], ["aw", 0.8], ["at", 0.1], ["a", 0.1]], "B": [["B", 1.0], ["b", 0.0]], "W": [["W", 0.3], ["w", 0.7]]},
  "healthFlags": ["hips", "cancer", "eyes"]
}, {
  "name": "Standard Schnauzer",
  "group": "Working",
  "size": "M",
  "coat": "wire",
  "colors": ["salt & pepper", "black"],
  "species": "dog",
  "sizeAvg": 35,
  "sizeRange": [26, 45],
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
    "adaptability": 7,
  "founderCOI": 4.5
},
  "health": {
    "hips": 78,
    "eyes": 82,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Schutzhund", "Obedience", "Agility"],
  "coatFreqs": {"E": [["E", 1.0], ["e", 0.0]], "K": [["KB", 0.6], ["kbr", 0], ["ky", 0.4]], "A": [["Ay", 0], ["aw", 0.8], ["at", 0.1], ["a", 0.1]], "W": [["W", 0.4], ["w", 0.6]]},
  "healthFlags": ["hips", "eyes"]
}, {
  "name": "Akita Inu",
  "group": "Working",
  "size": "L",
  "coat": "medium",
  "colors": ["red fawn", "sesame", "brindle", "white"],
  "species": "dog",
  "sizeAvg": 90,
  "sizeRange": [70, 110],
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
    "adaptability": 6,
  "founderCOI": 5.5
},
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Conformation", "Obedience"],
  "coatFreqs": {"E": [["E", 0.8], ["e", 0.2]], "K": [["KB", 0.2], ["kbr", 0.3], ["ky", 0.5]], "A": [["Ay", 0.6], ["aw", 0.2], ["at", 0.15], ["a", 0.05]], "S": [["S", 0.6], ["sp", 0.35], ["sw", 0.05]]},
  "healthFlags": ["hips", "eyes", "thyroid", "skin"]
}, {
  "name": "American Akita",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["any color including pinto", "brindle", "white", "fawn", "red"],
  "species": "dog",
  "sizeAvg": 105,
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
    "adaptability": 6,
  "founderCOI": 5.0
},
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Conformation", "Obedience"],
  "coatFreqs": {"E": [["E", 0.8], ["e", 0.2]], "K": [["KB", 0.25], ["kbr", 0.3], ["ky", 0.45]], "A": [["Ay", 0.5], ["aw", 0.2], ["at", 0.2], ["a", 0.1]], "S": [["S", 0.4], ["sp", 0.5], ["sw", 0.1]]},
  "healthFlags": ["hips", "eyes", "thyroid", "bloat"]
}, {
  "name": "Siberian Husky",
  "group": "Working",
  "size": "L",
  "coat": "medium",
  "colors": ["black & white", "gray & white", "red & white", "sable & white", "all white", "agouti & white"],
  "species": "dog",
  "sizeAvg": 50,
  "sizeRange": [35, 65],
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
    "adaptability": 6,
  "founderCOI": 4.0
},
  "health": {
    "hips": 82,
    "eyes": 80,
    "heart": 88,
    "joints": 82
  },
  "aptitudes": ["Sled Racing", "Agility", "Conformation"],
  "coatFreqs": {"E": [["E", 0.75], ["e", 0.25]], "K": [["KB", 0.05], ["kbr", 0], ["ky", 0.95]], "A": [["Ay", 0.2], ["aw", 0.4], ["at", 0.25], ["a", 0.15]], "B": [["B", 0.7], ["b", 0.3]], "S": [["S", 0.3], ["sp", 0.55], ["sw", 0.15]]},
  "healthFlags": ["eyes", "hips"]
}, {
  "name": "Alaskan Malamute",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["gray & white", "black & white", "red & white", "sable & white", "all white", "seal & white"],
  "species": "dog",
  "sizeAvg": 85,
  "sizeRange": [70, 100],
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
    "adaptability": 5,
  "founderCOI": 5.0
},
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 82,
    "joints": 75
  },
  "aptitudes": ["Sled Racing", "Draft", "Conformation"],
  "coatFreqs": {"E": [["E", 0.85], ["e", 0.15]], "K": [["KB", 0.1], ["kbr", 0], ["ky", 0.9]], "A": [["Ay", 0.15], ["aw", 0.45], ["at", 0.3], ["a", 0.1]], "S": [["S", 0.3], ["sp", 0.55], ["sw", 0.15]]},
  "healthFlags": ["hips", "eyes", "bloat", "joints"]
}, {
  "name": "Greenland Dog",
  "group": "Working",
  "size": "L",
  "coat": "long",
  "colors": ["any color or combination"],
  "species": "dog",
  "sizeAvg": 75,
  "sizeRange": [60, 100],
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
    "adaptability": 4,
  "founderCOI": 3.5
},
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Sled Racing", "Conformation"],
  "coatFreqs": {"E": [["E", 0.75], ["e", 0.25]], "K": [["KB", 0.15], ["kbr", 0.1], ["ky", 0.75]], "A": [["Ay", 0.3], ["aw", 0.3], ["at", 0.25], ["a", 0.15]], "S": [["S", 0.4], ["sp", 0.45], ["sw", 0.15]]},
  "healthFlags": ["hips", "joints"]
}, {
  "name": "Canadian Eskimo Dog",
  "group": "Working",
  "size": "L",
  "coat": "long",
  "colors": ["any color or combination", "white", "black", "gray", "red"],
  "species": "dog",
  "sizeAvg": 75,
  "sizeRange": [60, 95],
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
    "adaptability": 4,
  "founderCOI": 4.0
},
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 85,
    "joints": 78
  },
  "aptitudes": ["Sled Racing", "Conformation"],
  "coatFreqs": {"E": [["E", 0.75], ["e", 0.25]], "K": [["KB", 0.1], ["kbr", 0], ["ky", 0.9]], "A": [["Ay", 0.25], ["aw", 0.35], ["at", 0.25], ["a", 0.15]], "S": [["S", 0.4], ["sp", 0.45], ["sw", 0.15]]},
  "healthFlags": ["hips", "joints"]
}, {
  "name": "Bernese Mountain Dog",
  "group": "Working",
  "size": "L",
  "coat": "long",
  "colors": ["black, white & rust (tricolor only)"],
  "species": "dog",
  "sizeAvg": 90,
  "sizeRange": [70, 115],
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
    "adaptability": 6,
  "founderCOI": 7.5
},
  "health": {
    "hips": 62,
    "eyes": 75,
    "heart": 65,
    "joints": 62
  },
  "aptitudes": ["Draft", "Conformation", "Obedience"],
  "coatFreqs": {"E": [["E", 1.0], ["e", 0.0]], "K": [["KB", 0.9], ["kbr", 0], ["ky", 0.1]], "A": [["Ay", 0], ["aw", 0], ["at", 1.0], ["a", 0]], "B": [["B", 1.0], ["b", 0.0]], "S": [["S", 0.1], ["sp", 0.8], ["sw", 0.1]]},
  "healthFlags": ["hips", "cancer", "joints", "bloat", "eyes"]
}, {
  "name": "Greater Swiss Mountain Dog",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["black, white & rust (tricolor only)"],
  "species": "dog",
  "sizeAvg": 110,
  "sizeRange": [85, 140],
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
    "adaptability": 6,
  "founderCOI": 6.5
},
  "health": {
    "hips": 68,
    "eyes": 78,
    "heart": 72,
    "joints": 68
  },
  "aptitudes": ["Draft", "Conformation", "Obedience"],
  "coatFreqs": {"E": [["E", 1.0], ["e", 0.0]], "K": [["KB", 0.9], ["kbr", 0], ["ky", 0.1]], "A": [["Ay", 0], ["aw", 0], ["at", 1.0], ["a", 0]], "B": [["B", 1.0], ["b", 0.0]], "S": [["S", 0.1], ["sp", 0.8], ["sw", 0.1]]},
  "healthFlags": ["hips", "bloat", "cancer", "joints"]
}, {
  "name": "Appenzeller Sennenhund",
  "group": "Working",
  "size": "M",
  "coat": "short",
  "colors": ["black, white & rust (tricolor only)"],
  "species": "dog",
  "sizeAvg": 55,
  "sizeRange": [44, 70],
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
    "adaptability": 7,
  "founderCOI": 5.0
},
  "health": {
    "hips": 75,
    "eyes": 80,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Draft", "Agility", "Conformation"],
  "coatFreqs": {"E": [["E", 1.0], ["e", 0.0]], "K": [["KB", 0.9], ["kbr", 0], ["ky", 0.1]], "A": [["Ay", 0], ["aw", 0], ["at", 1.0], ["a", 0]], "S": [["S", 0.1], ["sp", 0.8], ["sw", 0.1]]},
  "healthFlags": ["hips", "eyes"]
}, {
  "name": "Entlebucher Mountain Dog",
  "group": "Working",
  "size": "M",
  "coat": "short",
  "colors": ["black, white & rust (tricolor only)"],
  "species": "dog",
  "sizeAvg": 55,
  "sizeRange": [44, 66],
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
    "adaptability": 7,
  "founderCOI": 5.5
},
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Draft", "Agility", "Conformation"],
  "coatFreqs": {"E": [["E", 1.0], ["e", 0.0]], "K": [["KB", 0.9], ["kbr", 0], ["ky", 0.1]], "A": [["Ay", 0], ["aw", 0], ["at", 1.0], ["a", 0]], "S": [["S", 0.1], ["sp", 0.8], ["sw", 0.1]]},
  "healthFlags": ["hips", "eyes"]
}, {
  "name": "Saint Bernard",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["red & white", "mahogany & white", "brindle & white"],
  "species": "dog",
  "sizeAvg": 160,
  "sizeRange": [120, 200],
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
    "adaptability": 5,
  "founderCOI": 6.0
},
  "health": {
    "hips": 62,
    "eyes": 72,
    "heart": 65,
    "joints": 62
  },
  "aptitudes": ["Draft", "Conformation", "Obedience"],
  "coatFreqs": {"E": [["E", 1.0], ["e", 0.0]], "K": [["KB", 0.2], ["kbr", 0.4], ["ky", 0.4]], "A": [["Ay", 0.8], ["aw", 0], ["at", 0.15], ["a", 0.05]], "S": [["S", 0.2], ["sp", 0.65], ["sw", 0.15]]},
  "healthFlags": ["hips", "joints", "bloat", "heart", "cancer"]
}, {
  "name": "Newfoundland",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["black", "brown", "gray", "black & white (Landseer)"],
  "species": "dog",
  "sizeAvg": 130,
  "sizeRange": [100, 150],
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
    "adaptability": 6,
  "founderCOI": 5.5
},
  "health": {
    "hips": 68,
    "eyes": 75,
    "heart": 70,
    "joints": 68
  },
  "aptitudes": ["Draft", "Dock Diving", "Conformation"],
  "coatFreqs": {"E": [["E", 1.0], ["e", 0.0]], "K": [["KB", 0.85], ["kbr", 0], ["ky", 0.15]], "A": [["Ay", 0], ["aw", 0], ["at", 0.2], ["a", 0.8]], "B": [["B", 0.65], ["b", 0.35]], "S": [["S", 0.7], ["sp", 0.2], ["sw", 0.1]]},
  "healthFlags": ["hips", "heart", "joints", "bloat", "cancer"]
}, {
  "name": "Leonberger",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["lion yellow", "golden", "red", "red-brown with black mask"],
  "species": "dog",
  "sizeAvg": 130,
  "sizeRange": [100, 170],
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
    "adaptability": 7,
  "founderCOI": 5.5
},
  "health": {
    "hips": 65,
    "eyes": 72,
    "heart": 68,
    "joints": 65
  },
  "aptitudes": ["Draft", "Conformation", "Obedience"],
  "coatFreqs": {"E": [["E", 0.8], ["e", 0.2]], "K": [["KB", 0.1], ["kbr", 0], ["ky", 0.9]], "A": [["Ay", 0.9], ["aw", 0.05], ["at", 0.05], ["a", 0]], "B": [["B", 0.95], ["b", 0.05]]},
  "healthFlags": ["hips", "joints", "heart", "cancer", "bloat"]
}, {
  "name": "Hovawart",
  "group": "Working",
  "size": "L",
  "coat": "long",
  "colors": ["black & gold", "blonde", "black"],
  "species": "dog",
  "sizeAvg": 80,
  "sizeRange": [55, 100],
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
    "adaptability": 7,
  "founderCOI": 5.0
},
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Schutzhund", "Tracking", "Conformation"],
  "coatFreqs": {"E": [["E", 1.0], ["e", 0.0]], "K": [["KB", 0.4], ["kbr", 0], ["ky", 0.6]], "A": [["Ay", 0.4], ["aw", 0], ["at", 0.5], ["a", 0.1]], "B": [["B", 1.0], ["b", 0.0]]},
  "healthFlags": ["hips", "thyroid"]
}, {
  "name": "English Mastiff",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["fawn", "apricot", "brindle"],
  "species": "dog",
  "sizeAvg": 175,
  "sizeRange": [130, 230],
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
    "adaptability": 5,
  "founderCOI": 6.5
},
  "health": {
    "hips": 62,
    "eyes": 72,
    "heart": 65,
    "joints": 62
  },
  "aptitudes": ["Conformation", "Obedience"],
  "coatFreqs": {"E": [["E", 1.0], ["e", 0.0]], "K": [["KB", 0.2], ["kbr", 0.5], ["ky", 0.3]], "A": [["Ay", 0.9], ["aw", 0], ["at", 0.1], ["a", 0]], "B": [["B", 1.0], ["b", 0.0]], "S": [["S", 0.95], ["sp", 0.05], ["sw", 0.0]]},
  "healthFlags": ["hips", "joints", "bloat", "cancer", "heart", "breathing"]
}, {
  "name": "Bullmastiff",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["fawn", "red", "brindle"],
  "species": "dog",
  "sizeAvg": 115,
  "sizeRange": [100, 130],
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
    "adaptability": 6,
  "founderCOI": 6.0
},
  "health": {
    "hips": 65,
    "eyes": 72,
    "heart": 68,
    "joints": 65
  },
  "aptitudes": ["Schutzhund", "Conformation", "Obedience"],
  "coatFreqs": {"E": [["E", 1.0], ["e", 0.0]], "K": [["KB", 0.2], ["kbr", 0.5], ["ky", 0.3]], "A": [["Ay", 0.9], ["aw", 0], ["at", 0.1], ["a", 0]], "B": [["B", 1.0], ["b", 0.0]], "S": [["S", 0.95], ["sp", 0.05], ["sw", 0.0]]},
  "healthFlags": ["hips", "bloat", "cancer", "heart", "breathing"]
}, {
  "name": "Neapolitan Mastiff",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["gray", "black", "mahogany", "tawny", "brindle"],
  "species": "dog",
  "sizeAvg": 140,
  "sizeRange": [110, 200],
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
    "adaptability": 4,
  "founderCOI": 7.0
},
  "health": {
    "hips": 62,
    "eyes": 68,
    "heart": 65,
    "joints": 62
  },
  "aptitudes": ["Conformation", "Obedience"],
  "coatFreqs": {"E": [["E", 1.0], ["e", 0.0]], "K": [["KB", 0.5], ["kbr", 0.3], ["ky", 0.2]], "A": [["Ay", 0.4], ["aw", 0], ["at", 0.3], ["a", 0.3]], "B": [["B", 0.7], ["b", 0.3]], "D": [["D", 0.75], ["d", 0.25]]},
  "healthFlags": ["hips", "joints", "bloat", "heart", "breathing", "skin", "eyes"]
}, {
  "name": "Dogue de Bordeaux",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["fawn", "mahogany", "red"],
  "species": "dog",
  "sizeAvg": 110,
  "sizeRange": [99, 145],
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
    "adaptability": 5,
  "founderCOI": 7.0
},
  "health": {
    "hips": 65,
    "eyes": 70,
    "heart": 65,
    "joints": 65
  },
  "aptitudes": ["Schutzhund", "Conformation", "Obedience"],
  "coatFreqs": {"E": [["E", 1.0], ["e", 0.0]], "K": [["KB", 0.1], ["kbr", 0], ["ky", 0.9]], "A": [["Ay", 1.0], ["aw", 0], ["at", 0], ["a", 0]], "S": [["S", 0.8], ["sp", 0.2], ["sw", 0.0]]},
  "healthFlags": ["hips", "heart", "bloat", "cancer", "breathing", "joints"]
}, {
  "name": "Cane Corso",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["black", "gray", "fawn", "red", "brindle", "black brindle", "gray brindle", "chestnut brindle"],
  "species": "dog",
  "sizeAvg": 105,
  "sizeRange": [88, 130],
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
    "adaptability": 6,
  "founderCOI": 5.5
},
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 72,
    "joints": 70
  },
  "aptitudes": ["Schutzhund", "Conformation", "Obedience"],
  "coatFreqs": {"E": [["E", 1.0], ["e", 0.0]], "K": [["KB", 0.55], ["kbr", 0.35], ["ky", 0.1]], "A": [["Ay", 0.4], ["aw", 0], ["at", 0.3], ["a", 0.3]], "B": [["B", 0.8], ["b", 0.2]], "D": [["D", 0.8], ["d", 0.2]]},
  "healthFlags": ["hips", "bloat", "heart", "eyes", "joints"]
}, {
  "name": "Broholmer",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["yellow with black mask", "golden red", "black"],
  "species": "dog",
  "sizeAvg": 110,
  "sizeRange": [88, 150],
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
    "adaptability": 6,
  "founderCOI": 6.0
},
  "health": {
    "hips": 65,
    "eyes": 72,
    "heart": 68,
    "joints": 65
  },
  "aptitudes": ["Conformation", "Obedience"],
  "coatFreqs": {"E": [["E", 0.85], ["e", 0.15]], "K": [["KB", 0.3], ["kbr", 0], ["ky", 0.7]], "A": [["Ay", 0.9], ["aw", 0], ["at", 0.1], ["a", 0]], "B": [["B", 1.0], ["b", 0.0]]},
  "healthFlags": ["hips", "bloat", "heart"]
}, {
  "name": "Boerboel",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["brown", "red", "fawn", "brindle", "black (rare)"],
  "species": "dog",
  "sizeAvg": 150,
  "sizeRange": [110, 200],
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
    "adaptability": 6,
  "founderCOI": 5.5
},
  "health": {
    "hips": 68,
    "eyes": 72,
    "heart": 70,
    "joints": 68
  },
  "aptitudes": ["Schutzhund", "Conformation", "Obedience"],
  "coatFreqs": {"E": [["E", 1.0], ["e", 0.0]], "K": [["KB", 0.15], ["kbr", 0.4], ["ky", 0.45]], "A": [["Ay", 0.8], ["aw", 0], ["at", 0.15], ["a", 0.05]], "B": [["B", 0.85], ["b", 0.15]]},
  "healthFlags": ["hips", "joints", "heart", "cancer", "bloat"]
}, {
  "name": "Rhodesian Ridgeback",
  "group": "Working",
  "size": "L",
  "coat": "short",
  "colors": ["wheaten", "light wheaten", "red wheaten"],
  "species": "dog",
  "sizeAvg": 80,
  "sizeRange": [65, 90],
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
    "adaptability": 7,
  "founderCOI": 5.0
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
  "colors": ["brindle", "fawn", "brindle with white"],
  "species": "dog",
  "sizeAvg": 95,
  "sizeRange": [75, 110],
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
    "adaptability": 6,
  "founderCOI": 4.5
},
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Schutzhund", "Conformation"],
  "coatFreqs": {"E": [["E", 1.0], ["e", 0.0]], "K": [["KB", 0.15], ["kbr", 0.55], ["ky", 0.3]], "A": [["Ay", 0.85], ["aw", 0], ["at", 0.1], ["a", 0.05]], "S": [["S", 0.7], ["sp", 0.25], ["sw", 0.05]]},
  "healthFlags": ["hips", "heart"]
}, {
  "name": "Spanish Mastiff",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["fawn", "red", "black", "wolf sable", "brindle", "white with patches"],
  "species": "dog",
  "sizeAvg": 185,
  "sizeRange": [140, 240],
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
    "adaptability": 5,
  "founderCOI": 5.5
},
  "health": {
    "hips": 65,
    "eyes": 72,
    "heart": 68,
    "joints": 65
  },
  "aptitudes": ["Conformation", "Obedience", "LGD"],
  "coatFreqs": {"E": [["E", 0.85], ["e", 0.15]], "K": [["KB", 0.2], ["kbr", 0.35], ["ky", 0.45]], "A": [["Ay", 0.5], ["aw", 0.2], ["at", 0.2], ["a", 0.1]], "S": [["S", 0.5], ["sp", 0.35], ["sw", 0.15]]},
  "healthFlags": ["hips", "joints", "bloat", "heart", "skin"]
}, {
  "name": "Pyrenean Mastiff",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["white with gray patches", "white with golden patches", "white with black patches"],
  "species": "dog",
  "sizeAvg": 180,
  "sizeRange": [130, 240],
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
    "adaptability": 5,
  "founderCOI": 5.5
},
  "health": {
    "hips": 65,
    "eyes": 72,
    "heart": 68,
    "joints": 65
  },
  "aptitudes": ["Conformation", "Obedience"],
  "coatFreqs": {"E": [["E", 0.85], ["e", 0.15]], "K": [["KB", 0.1], ["kbr", 0], ["ky", 0.9]], "A": [["Ay", 0.5], ["aw", 0.3], ["at", 0.1], ["a", 0.1]], "S": [["S", 0.05], ["sp", 0.45], ["sw", 0.5]]},
  "healthFlags": ["hips", "joints", "bloat", "heart"]
}, {
  "name": "Great Pyrenees",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["white", "white with gray patches", "white with tan patches", "white with badger patches"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [85, 115],
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
    "adaptability": 6,
  "founderCOI": 5.0
},
  "health": {
    "hips": 70,
    "eyes": 78,
    "heart": 75,
    "joints": 70
  },
  "aptitudes": ["Conformation", "Obedience", "LGD"],
  "coatFreqs": {"E": [["E", 0.5], ["e", 0.5]], "K": [["KB", 0.05], ["kbr", 0], ["ky", 0.95]], "A": [["Ay", 0.6], ["aw", 0.2], ["at", 0.1], ["a", 0.1]], "S": [["S", 0.05], ["sp", 0.25], ["sw", 0.7]]},
  "healthFlags": ["hips", "joints", "bloat", "cancer"]
}, {
  "name": "Dogo Argentino",
  "group": "Working",
  "size": "L",
  "coat": "short",
  "colors": ["white (with small dark patch on skull allowed)"],
  "species": "dog",
  "sizeAvg": 95,
  "sizeRange": [80, 115],
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
    "adaptability": 6,
  "founderCOI": 6.5
},
  "health": {
    "hips": 72,
    "eyes": 72,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Schutzhund", "Tracking", "Conformation"],
  "coatFreqs": {"E": [["E", 0.5], ["e", 0.5]], "K": [["KB", 0.1], ["kbr", 0], ["ky", 0.9]], "A": [["Ay", 1.0], ["aw", 0], ["at", 0], ["a", 0]], "S": [["S", 0.05], ["sp", 0.05], ["sw", 0.9]]},
  "healthFlags": ["hips", "deafness", "skin", "cancer"]
}, {
  "name": "Fila Brasileiro",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["brindle", "fawn", "black", "yellow"],
  "species": "dog",
  "sizeAvg": 145,
  "sizeRange": [110, 180],
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
    "adaptability": 4,
  "founderCOI": 5.5
},
  "health": {
    "hips": 65,
    "eyes": 70,
    "heart": 68,
    "joints": 65
  },
  "aptitudes": ["Tracking", "Conformation"],
  "coatFreqs": {"E": [["E", 1.0], ["e", 0.0]], "K": [["KB", 0.2], ["kbr", 0.5], ["ky", 0.3]], "A": [["Ay", 0.7], ["aw", 0], ["at", 0.2], ["a", 0.1]], "B": [["B", 0.85], ["b", 0.15]]},
  "healthFlags": ["hips", "joints", "bloat", "heart", "skin"]
}, {
  "name": "Perro de Presa Canario",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["fawn", "brindle", "fawn with white", "brindle with white"],
  "species": "dog",
  "sizeAvg": 110,
  "sizeRange": [84, 145],
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
    "adaptability": 5,
  "founderCOI": 6.0
},
  "health": {
    "hips": 68,
    "eyes": 72,
    "heart": 72,
    "joints": 68
  },
  "aptitudes": ["Schutzhund", "Conformation", "Obedience"],
  "coatFreqs": {"E": [["E", 1.0], ["e", 0.0]], "K": [["KB", 0.15], ["kbr", 0.55], ["ky", 0.3]], "A": [["Ay", 0.8], ["aw", 0], ["at", 0.15], ["a", 0.05]], "S": [["S", 0.65], ["sp", 0.3], ["sw", 0.05]]},
  "healthFlags": ["hips", "heart", "bloat"]
}, {
  "name": "Caucasian Ovcharka",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["gray", "fawn", "red", "cream", "white", "brindle", "piebald"],
  "species": "dog",
  "sizeAvg": 160,
  "sizeRange": [99, 220],
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
    "adaptability": 5,
  "founderCOI": 4.5
},
  "health": {
    "hips": 68,
    "eyes": 72,
    "heart": 72,
    "joints": 68
  },
  "aptitudes": ["Schutzhund", "Conformation", "LGD"],
  "coatFreqs": {"E": [["E", 0.8], ["e", 0.2]], "K": [["KB", 0.15], ["kbr", 0.2], ["ky", 0.65]], "A": [["Ay", 0.45], ["aw", 0.25], ["at", 0.2], ["a", 0.1]], "S": [["S", 0.5], ["sp", 0.35], ["sw", 0.15]]},
  "healthFlags": ["hips", "joints", "bloat", "heart"]
}, {
  "name": "Central Asian Ovcharka",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["white", "black", "gray", "straw", "red", "brindle", "piebald"],
  "species": "dog",
  "sizeAvg": 130,
  "sizeRange": [88, 175],
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
    "adaptability": 6,
  "founderCOI": 4.0
},
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 75,
    "joints": 70
  },
  "aptitudes": ["Schutzhund", "Conformation", "LGD"],
  "coatFreqs": {"E": [["E", 0.8], ["e", 0.2]], "K": [["KB", 0.15], ["kbr", 0.15], ["ky", 0.7]], "A": [["Ay", 0.4], ["aw", 0.25], ["at", 0.2], ["a", 0.15]], "S": [["S", 0.45], ["sp", 0.35], ["sw", 0.2]]},
  "healthFlags": ["hips", "joints", "bloat"]
}, {
  "name": "South Russian Ovcharka",
  "group": "Working",
  "size": "L",
  "coat": "long",
  "colors": ["white", "white with gray", "white with yellow", "gray", "straw"],
  "species": "dog",
  "sizeAvg": 110,
  "sizeRange": [88, 130],
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
    "adaptability": 5,
  "founderCOI": 5.0
},
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 78,
    "joints": 70
  },
  "aptitudes": ["Conformation"],
  "coatFreqs": {"E": [["E", 0.6], ["e", 0.4]], "K": [["KB", 0.05], ["kbr", 0], ["ky", 0.95]], "A": [["Ay", 0.5], ["aw", 0.3], ["at", 0.1], ["a", 0.1]], "S": [["S", 0.2], ["sp", 0.4], ["sw", 0.4]]},
  "healthFlags": ["hips", "joints"]
}, {
  "name": "Black Russian Terrier",
  "group": "Working",
  "size": "L",
  "coat": "wire",
  "colors": ["black", "black with gray hairs"],
  "species": "dog",
  "sizeAvg": 110,
  "sizeRange": [80, 145],
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
    "adaptability": 7,
  "founderCOI": 5.5
},
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Schutzhund", "Obedience", "Conformation"],
  "coatFreqs": {"E": [["E", 1.0], ["e", 0.0]], "K": [["KB", 0.9], ["kbr", 0], ["ky", 0.1]], "A": [["Ay", 0], ["aw", 0.1], ["at", 0.1], ["a", 0.8]], "B": [["B", 1.0], ["b", 0.0]], "W": [["W", 0.5], ["w", 0.5]]},
  "healthFlags": ["hips", "joints", "heart", "eyes"]
}, {
  "name": "Moscow Watchdog",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["red & white", "red", "white with red patches"],
  "species": "dog",
  "sizeAvg": 150,
  "sizeRange": [110, 175],
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
    "adaptability": 5,
  "founderCOI": 6.0
},
  "health": {
    "hips": 68,
    "eyes": 72,
    "heart": 70,
    "joints": 68
  },
  "aptitudes": ["Conformation", "Obedience"],
  "coatFreqs": {"E": [["E", 1.0], ["e", 0.0]], "K": [["KB", 0.2], ["kbr", 0.4], ["ky", 0.4]], "A": [["Ay", 0.8], ["aw", 0], ["at", 0.15], ["a", 0.05]], "S": [["S", 0.3], ["sp", 0.55], ["sw", 0.15]]},
  "healthFlags": ["hips", "joints", "bloat", "heart"]
}, {
  "name": "Kangal",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["fawn with black mask", "cream with black mask"],
  "species": "dog",
  "sizeAvg": 130,
  "sizeRange": [90, 145],
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
    "adaptability": 7,
  "founderCOI": 4.5
},
  "health": {
    "hips": 75,
    "eyes": 80,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Conformation", "Obedience", "LGD"],
  "coatFreqs": {"E": [["E", 1.0], ["e", 0.0]], "K": [["KB", 0.1], ["kbr", 0], ["ky", 0.9]], "A": [["Ay", 1.0], ["aw", 0], ["at", 0], ["a", 0]], "S": [["S", 0.9], ["sp", 0.1], ["sw", 0.0]]},
  "healthFlags": ["hips", "joints", "bloat"]
}, {
  "name": "Anatolian Shepherd",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["fawn with black mask", "brindle", "white", "pinto"],
  "species": "dog",
  "sizeAvg": 120,
  "sizeRange": [80, 150],
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
    "adaptability": 6,
  "founderCOI": 4.5
},
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Conformation", "LGD"],
  "coatFreqs": {"E": [["E", 0.85], ["e", 0.15]], "K": [["KB", 0.1], ["kbr", 0.2], ["ky", 0.7]], "A": [["Ay", 0.7], ["aw", 0.1], ["at", 0.1], ["a", 0.1]], "S": [["S", 0.5], ["sp", 0.3], ["sw", 0.2]]},
  "healthFlags": ["hips", "joints", "bloat"]
}, {
  "name": "Akbash",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["white"],
  "species": "dog",
  "sizeAvg": 105,
  "sizeRange": [75, 140],
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
    "adaptability": 6,
  "founderCOI": 4.0
},
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Conformation", "LGD"],
  "coatFreqs": {"E": [["E", 0.4], ["e", 0.6]], "K": [["KB", 0.05], ["kbr", 0], ["ky", 0.95]], "A": [["Ay", 0.7], ["aw", 0.2], ["at", 0.05], ["a", 0.05]], "S": [["S", 0.05], ["sp", 0.1], ["sw", 0.85]]},
  "healthFlags": ["hips", "joints", "bloat"]
}, {
  "name": "Bully Kutta",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["white", "fawn", "brindle", "black", "harlequin"],
  "species": "dog",
  "sizeAvg": 155,
  "sizeRange": [130, 210],
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
    "adaptability": 5,
  "founderCOI": 4.5
},
  "health": {
    "hips": 68,
    "eyes": 72,
    "heart": 72,
    "joints": 68
  },
  "aptitudes": ["Schutzhund", "Conformation"],
  "coatFreqs": {"E": [["E", 0.8], ["e", 0.2]], "K": [["KB", 0.15], ["kbr", 0.35], ["ky", 0.5]], "A": [["Ay", 0.55], ["aw", 0.1], ["at", 0.15], ["a", 0.2]], "S": [["S", 0.4], ["sp", 0.35], ["sw", 0.25]]},
  "healthFlags": ["hips", "joints", "bloat", "heart", "skin"]
}, {
  "name": "Rajapalayam",
  "group": "Working",
  "size": "L",
  "coat": "short",
  "colors": ["white"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 88],
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
    "adaptability": 5,
  "founderCOI": 5.5
},
  "health": {
    "hips": 75,
    "eyes": 78,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Conformation"],
  "coatFreqs": {"E": [["E", 0.3], ["e", 0.7]], "K": [["KB", 0.05], ["kbr", 0], ["ky", 0.95]], "A": [["Ay", 0.8], ["aw", 0.1], ["at", 0.05], ["a", 0.05]], "S": [["S", 0.05], ["sp", 0.05], ["sw", 0.9]]},
  "healthFlags": ["deafness", "skin", "eyes", "hips"]
}, {
  "name": "Tosa Inu",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["red", "brindle", "fawn", "black", "multi-color (red dominant)"],
  "species": "dog",
  "sizeAvg": 145,
  "sizeRange": [100, 200],
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
    "adaptability": 5,
  "founderCOI": 6.5
},
  "health": {
    "hips": 68,
    "eyes": 72,
    "heart": 70,
    "joints": 68
  },
  "aptitudes": ["Schutzhund", "Conformation"],
  "coatFreqs": {"E": [["E", 1.0], ["e", 0.0]], "K": [["KB", 0.2], ["kbr", 0.5], ["ky", 0.3]], "A": [["Ay", 0.7], ["aw", 0], ["at", 0.2], ["a", 0.1]], "B": [["B", 0.85], ["b", 0.15]]},
  "healthFlags": ["hips", "heart", "bloat", "cancer", "joints"]
}, {
  "name": "Tibetan Mastiff",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["black", "black & tan", "brown", "brown & tan", "blue gray", "blue gray & tan", "gold", "red gold"],
  "species": "dog",
  "sizeAvg": 130,
  "sizeRange": [90, 170],
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
    "adaptability": 4,
  "founderCOI": 5.5
},
  "health": {
    "hips": 68,
    "eyes": 75,
    "heart": 75,
    "joints": 68
  },
  "aptitudes": ["Conformation", "LGD"],
  "coatFreqs": {"E": [["E", 1.0], ["e", 0.0]], "K": [["KB", 0.55], ["kbr", 0], ["ky", 0.45]], "A": [["Ay", 0.2], ["aw", 0.1], ["at", 0.6], ["a", 0.1]], "B": [["B", 0.7], ["b", 0.3]], "D": [["D", 0.8], ["d", 0.2]]},
  "healthFlags": ["hips", "thyroid", "heart", "joints", "cancer"]
}, {
  "name": "Great Dane",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["fawn", "brindle", "blue", "black", "harlequin", "mantle", "merle"],
  "species": "dog",
  "sizeAvg": 145,
  "sizeRange": [110, 175],
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
    "adaptability": 6,
  "founderCOI": 6.0
},
  "health": {
    "hips": 58,
    "eyes": 78,
    "heart": 62,
    "joints": 58
  },
  "aptitudes": ["Conformation", "Obedience"],
  "coatFreqs": {"E": [["E", 0.85], ["e", 0.15]], "K": [["KB", 0.25], ["kbr", 0.35], ["ky", 0.4]], "A": [["Ay", 0.5], ["aw", 0], ["at", 0.3], ["a", 0.2]], "B": [["B", 0.8], ["b", 0.2]], "D": [["D", 0.75], ["d", 0.25]], "M": [["M", 0.2], ["m", 0.8]], "S": [["S", 0.35], ["sp", 0.4], ["sw", 0.25]]},
  "healthFlags": ["hips", "heart", "bloat", "cancer", "joints", "bones"]
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
  "colors": ["white", "black", "gray", "straw", "red", "brindle", "piebald"],
  "species": "dog",
  "sizeAvg": 130,
  "sizeRange": [88, 175],
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
    "adaptability": 6,
  "founderCOI": 4.0
},
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Schutzhund", "Conformation"],
  "coatFreqs": {"E": [["E", 0.8], ["e", 0.2]], "K": [["KB", 0.15], ["kbr", 0.15], ["ky", 0.7]], "A": [["Ay", 0.4], ["aw", 0.25], ["at", 0.2], ["a", 0.15]], "S": [["S", 0.45], ["sp", 0.35], ["sw", 0.2]]},
  "healthFlags": ["hips", "joints", "bloat"]
}, {
  "name": "Kazakh Tobet",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["white", "black", "gray", "fawn", "brindle", "piebald"],
  "species": "dog",
  "sizeAvg": 120,
  "sizeRange": [88, 145],
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
    "adaptability": 6,
  "founderCOI": 3.5
},
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Schutzhund", "Conformation"],
  "coatFreqs": {"E": [["E", 0.8], ["e", 0.2]], "K": [["KB", 0.15], ["kbr", 0.15], ["ky", 0.7]], "A": [["Ay", 0.4], ["aw", 0.25], ["at", 0.2], ["a", 0.15]], "S": [["S", 0.45], ["sp", 0.35], ["sw", 0.2]]},
  "healthFlags": ["hips", "joints", "bloat"]
}, {
  "name": "Sage Koochee Mountain",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["white", "fawn", "gray", "black", "piebald"],
  "species": "dog",
  "sizeAvg": 150,
  "sizeRange": [110, 200],
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
    "adaptability": 4,
  "founderCOI": 3.5
},
  "health": {
    "hips": 75,
    "eyes": 80,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Schutzhund"],
  "coatFreqs": {"E": [["E", 0.8], ["e", 0.2]], "K": [["KB", 0.1], ["kbr", 0.15], ["ky", 0.75]], "A": [["Ay", 0.45], ["aw", 0.25], ["at", 0.15], ["a", 0.15]], "S": [["S", 0.4], ["sp", 0.35], ["sw", 0.25]]},
  "healthFlags": ["hips", "joints", "bloat"]
}, {
  "name": "Sage Koochee Steppe",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["white", "fawn", "gray", "brindle", "piebald"],
  "species": "dog",
  "sizeAvg": 130,
  "sizeRange": [99, 175],
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
    "adaptability": 6,
  "founderCOI": 3.5
},
  "health": {
    "hips": 75,
    "eyes": 80,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Schutzhund"],
  "coatFreqs": {"E": [["E", 0.8], ["e", 0.2]], "K": [["KB", 0.1], ["kbr", 0.2], ["ky", 0.7]], "A": [["Ay", 0.45], ["aw", 0.25], ["at", 0.15], ["a", 0.15]], "S": [["S", 0.4], ["sp", 0.35], ["sw", 0.25]]},
  "healthFlags": ["hips", "joints", "bloat"]
}, {
  "name": "Sage Koochee Desert",
  "group": "Working",
  "size": "L",
  "coat": "short",
  "colors": ["fawn", "cream", "white", "gray"],
  "species": "dog",
  "sizeAvg": 110,
  "sizeRange": [88, 145],
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
    "adaptability": 7,
  "founderCOI": 3.5
},
  "health": {
    "hips": 78,
    "eyes": 82,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Schutzhund"],
  "coatFreqs": {"E": [["E", 0.85], ["e", 0.15]], "K": [["KB", 0.05], ["kbr", 0.1], ["ky", 0.85]], "A": [["Ay", 0.7], ["aw", 0.2], ["at", 0.05], ["a", 0.05]], "S": [["S", 0.75], ["sp", 0.2], ["sw", 0.05]]},
  "healthFlags": ["hips", "joints"]
}, {
  "name": "Afghan Tiger Dog",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["brindle", "fawn", "gray brindle"],
  "species": "dog",
  "sizeAvg": 130,
  "sizeRange": [99, 165],
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
    "adaptability": 5,
  "founderCOI": 3.5
},
  "health": {
    "hips": 75,
    "eyes": 80,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Schutzhund"],
  "coatFreqs": {"E": [["E", 1.0], ["e", 0.0]], "K": [["KB", 0.1], ["kbr", 0.7], ["ky", 0.2]], "A": [["Ay", 0.8], ["aw", 0], ["at", 0.15], ["a", 0.05]]},
  "healthFlags": ["hips", "joints", "bloat"]
}, {
  "name": "Uzbek Sarkangik",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["white", "fawn", "gray", "brindle", "piebald"],
  "species": "dog",
  "sizeAvg": 120,
  "sizeRange": [88, 155],
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
    "adaptability": 6,
  "founderCOI": 3.5
},
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Schutzhund", "Conformation"],
  "coatFreqs": {"E": [["E", 0.8], ["e", 0.2]], "K": [["KB", 0.1], ["kbr", 0.2], ["ky", 0.7]], "A": [["Ay", 0.45], ["aw", 0.25], ["at", 0.15], ["a", 0.15]], "S": [["S", 0.45], ["sp", 0.35], ["sw", 0.2]]},
  "healthFlags": ["hips", "joints", "bloat"]
}, {
  "name": "Tajik Dahmarda",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["white", "fawn", "gray", "black", "piebald"],
  "species": "dog",
  "sizeAvg": 130,
  "sizeRange": [99, 165],
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
    "adaptability": 4,
  "founderCOI": 3.5
},
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 75,
    "joints": 70
  },
  "aptitudes": ["Schutzhund"],
  "coatFreqs": {"E": [["E", 0.8], ["e", 0.2]], "K": [["KB", 0.1], ["kbr", 0.2], ["ky", 0.7]], "A": [["Ay", 0.4], ["aw", 0.25], ["at", 0.2], ["a", 0.15]], "S": [["S", 0.45], ["sp", 0.35], ["sw", 0.2]]},
  "healthFlags": ["hips", "joints", "bloat"]
}, {
  "name": "Kyrgyz Volkodav",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["white", "gray", "fawn", "black", "piebald"],
  "species": "dog",
  "sizeAvg": 130,
  "sizeRange": [99, 165],
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
    "adaptability": 5,
  "founderCOI": 3.5
},
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Schutzhund"],
  "coatFreqs": {"E": [["E", 0.8], ["e", 0.2]], "K": [["KB", 0.1], ["kbr", 0.2], ["ky", 0.7]], "A": [["Ay", 0.4], ["aw", 0.25], ["at", 0.2], ["a", 0.15]], "S": [["S", 0.45], ["sp", 0.35], ["sw", 0.2]]},
  "healthFlags": ["hips", "joints", "bloat"]
}, {
  "name": "Sarmatian Mastiff",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["fawn", "red", "brindle", "gray", "white with patches"],
  "species": "dog",
  "sizeAvg": 145,
  "sizeRange": [110, 185],
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
    "adaptability": 5,
  "founderCOI": 4.0
},
  "health": {
    "hips": 68,
    "eyes": 75,
    "heart": 72,
    "joints": 68
  },
  "aptitudes": ["Schutzhund", "Conformation"],
  "coatFreqs": {"E": [["E", 0.85], ["e", 0.15]], "K": [["KB", 0.15], ["kbr", 0.4], ["ky", 0.45]], "A": [["Ay", 0.6], ["aw", 0.15], ["at", 0.15], ["a", 0.1]], "S": [["S", 0.55], ["sp", 0.3], ["sw", 0.15]]},
  "healthFlags": ["hips", "joints", "bloat", "heart"]
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
  "sizeRange": [70, 115],
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
    "adaptability": 6,
  "founderCOI": 5.5
},
  "health": {
    "hips": 70,
    "eyes": 78,
    "heart": 78,
    "joints": 70
  },
  "aptitudes": ["Conformation", "Obedience", "LGD"],
  "coatFreqs": {"E": [["E", 0.4], ["e", 0.6]], "K": [["KB", 0.05], ["kbr", 0], ["ky", 0.95]], "A": [["Ay", 0.7], ["aw", 0.2], ["at", 0.05], ["a", 0.05]], "S": [["S", 0.05], ["sp", 0.1], ["sw", 0.85]]},
  "healthFlags": ["hips", "joints", "bloat", "cancer"]
}, {
  "name": "Maremma Sheepdog",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["white", "white with pale yellow or ivory tints"],
  "species": "dog",
  "sizeAvg": 85,
  "sizeRange": [66, 100],
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
    "adaptability": 6,
  "founderCOI": 5.0
},
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 80,
    "joints": 72
  },
  "aptitudes": ["Conformation", "Obedience", "LGD"],
  "coatFreqs": {"E": [["E", 0.4], ["e", 0.6]], "K": [["KB", 0.05], ["kbr", 0], ["ky", 0.95]], "A": [["Ay", 0.7], ["aw", 0.2], ["at", 0.05], ["a", 0.05]], "S": [["S", 0.05], ["sp", 0.15], ["sw", 0.8]]},
  "healthFlags": ["hips", "joints", "bloat"]
}, {
  "name": "Sarplaninac",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["white", "gray", "iron gray", "almost white to dark brown (solid)"],
  "species": "dog",
  "sizeAvg": 90,
  "sizeRange": [66, 110],
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
    "adaptability": 5,
  "founderCOI": 4.5
},
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Conformation", "Obedience", "LGD"],
  "coatFreqs": {"E": [["E", 0.85], ["e", 0.15]], "K": [["KB", 0.1], ["kbr", 0], ["ky", 0.9]], "A": [["Ay", 0.3], ["aw", 0.4], ["at", 0.2], ["a", 0.1]], "S": [["S", 0.8], ["sp", 0.15], ["sw", 0.05]]},
  "healthFlags": ["hips", "joints", "bloat"]
}, {
  "name": "Tornjak",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["white with colored patches", "multi-color"],
  "species": "dog",
  "sizeAvg": 90,
  "sizeRange": [66, 110],
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
    "adaptability": 6,
  "founderCOI": 4.5
},
  "health": {
    "hips": 75,
    "eyes": 80,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Conformation", "Obedience", "LGD"],
  "coatFreqs": {"E": [["E", 0.8], ["e", 0.2]], "K": [["KB", 0.1], ["kbr", 0.1], ["ky", 0.8]], "A": [["Ay", 0.4], ["aw", 0.2], ["at", 0.2], ["a", 0.2]], "S": [["S", 0.15], ["sp", 0.5], ["sw", 0.35]]},
  "healthFlags": ["hips", "joints", "bloat"]
}, {
  "name": "Estrela Mountain Dog",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["fawn", "brindle", "yellow", "gray wolf"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [77, 132],
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
    "adaptability": 5,
  "founderCOI": 5.0
},
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Conformation", "Obedience", "LGD"],
  "coatFreqs": {"E": [["E", 0.85], ["e", 0.15]], "K": [["KB", 0.1], ["kbr", 0.3], ["ky", 0.6]], "A": [["Ay", 0.6], ["aw", 0.2], ["at", 0.15], ["a", 0.05]], "S": [["S", 0.85], ["sp", 0.12], ["sw", 0.03]]},
  "healthFlags": ["hips", "joints", "bloat"]
}, {
  "name": "Rafeiro do Alentejo",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["black", "wolf gray", "yellow", "fawn — with white markings"],
  "species": "dog",
  "sizeAvg": 110,
  "sizeRange": [88, 132],
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
    "adaptability": 4,
  "founderCOI": 5.0
},
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 75,
    "joints": 70
  },
  "aptitudes": ["Conformation"],
  "coatFreqs": {"E": [["E", 0.85], ["e", 0.15]], "K": [["KB", 0.25], ["kbr", 0.2], ["ky", 0.55]], "A": [["Ay", 0.45], ["aw", 0.2], ["at", 0.25], ["a", 0.1]], "S": [["S", 0.4], ["sp", 0.45], ["sw", 0.15]]},
  "healthFlags": ["hips", "joints", "bloat"]
}, {
  "name": "Cao de Gado Transmontano",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["white with yellow patches", "white with fawn patches", "white with brindle patches"],
  "species": "dog",
  "sizeAvg": 115,
  "sizeRange": [88, 145],
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
    "adaptability": 4,
  "founderCOI": 4.5
},
  "health": {
    "hips": 68,
    "eyes": 75,
    "heart": 75,
    "joints": 68
  },
  "aptitudes": ["Conformation"],
  "coatFreqs": {"E": [["E", 0.8], ["e", 0.2]], "K": [["KB", 0.1], ["kbr", 0.2], ["ky", 0.7]], "A": [["Ay", 0.5], ["aw", 0.2], ["at", 0.15], ["a", 0.15]], "S": [["S", 0.2], ["sp", 0.5], ["sw", 0.3]]},
  "healthFlags": ["hips", "joints", "bloat"]
}, {
  "name": "Slovak Cuvac",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["white"],
  "species": "dog",
  "sizeAvg": 85,
  "sizeRange": [66, 99],
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
    "adaptability": 6,
  "founderCOI": 5.0
},
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 80,
    "joints": 72
  },
  "aptitudes": ["Conformation", "Obedience"],
  "coatFreqs": {"E": [["E", 0.4], ["e", 0.6]], "K": [["KB", 0.05], ["kbr", 0], ["ky", 0.95]], "A": [["Ay", 0.7], ["aw", 0.2], ["at", 0.05], ["a", 0.05]], "S": [["S", 0.05], ["sp", 0.1], ["sw", 0.85]]},
  "healthFlags": ["hips", "joints", "bloat"]
}, {
  "name": "Carpathian Shepherd Dog",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["pale fawn with black saddle", "wolf gray"],
  "species": "dog",
  "sizeAvg": 90,
  "sizeRange": [70, 110],
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
    "adaptability": 6,
  "founderCOI": 4.5
},
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Conformation", "Obedience"],
  "coatFreqs": {"E": [["E", 0.85], ["e", 0.15]], "K": [["KB", 0.1], ["kbr", 0], ["ky", 0.9]], "A": [["Ay", 0.2], ["aw", 0.4], ["at", 0.3], ["a", 0.1]], "As": [["N", 0.7], ["n", 0.3]], "S": [["S", 0.8], ["sp", 0.15], ["sw", 0.05]]},
  "healthFlags": ["hips", "joints", "bloat"]
}, {
  "name": "Romanian Mioritic Shepherd",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["white", "white with pale gray patches", "white with pale fawn patches"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [77, 130],
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
    "adaptability": 5,
  "founderCOI": 5.0
},
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Conformation", "Obedience"],
  "coatFreqs": {"E": [["E", 0.5], ["e", 0.5]], "K": [["KB", 0.05], ["kbr", 0], ["ky", 0.95]], "A": [["Ay", 0.5], ["aw", 0.3], ["at", 0.1], ["a", 0.1]], "S": [["S", 0.1], ["sp", 0.3], ["sw", 0.6]]},
  "healthFlags": ["hips", "joints", "bloat"]
}, {
  "name": "Romanian Raven Shepherd",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["black", "black with tan points", "black with white markings"],
  "species": "dog",
  "sizeAvg": 90,
  "sizeRange": [66, 115],
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
    "adaptability": 5,
  "founderCOI": 4.5
},
  "health": {
    "hips": 70,
    "eyes": 78,
    "heart": 78,
    "joints": 70
  },
  "aptitudes": ["Conformation", "Obedience"],
  "coatFreqs": {"E": [["E", 1.0], ["e", 0.0]], "K": [["KB", 0.8], ["kbr", 0], ["ky", 0.2]], "A": [["Ay", 0], ["aw", 0], ["at", 0.8], ["a", 0.2]], "B": [["B", 1.0], ["b", 0.0]]},
  "healthFlags": ["hips", "joints", "bloat"]
}, {
  "name": "Karakachan",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["white with colored patches", "tri-color", "black with white", "black & tan with white"],
  "species": "dog",
  "sizeAvg": 100,
  "sizeRange": [77, 125],
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
    "adaptability": 5,
  "founderCOI": 4.5
},
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 78,
    "joints": 70
  },
  "aptitudes": ["Conformation", "LGD"],
  "coatFreqs": {"E": [["E", 0.8], ["e", 0.2]], "K": [["KB", 0.15], ["kbr", 0.1], ["ky", 0.75]], "A": [["Ay", 0.3], ["aw", 0.2], ["at", 0.35], ["a", 0.15]], "S": [["S", 0.2], ["sp", 0.5], ["sw", 0.3]]},
  "healthFlags": ["hips", "joints", "bloat"]
}, {
  "name": "Greek Shepherd",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["fawn", "gray", "white", "black", "brindle"],
  "species": "dog",
  "sizeAvg": 90,
  "sizeRange": [66, 110],
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
    "adaptability": 6,
  "founderCOI": 4.0
},
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Conformation"],
  "coatFreqs": {"E": [["E", 0.8], ["e", 0.2]], "K": [["KB", 0.15], ["kbr", 0.2], ["ky", 0.65]], "A": [["Ay", 0.45], ["aw", 0.25], ["at", 0.2], ["a", 0.1]], "S": [["S", 0.55], ["sp", 0.3], ["sw", 0.15]]},
  "healthFlags": ["hips", "joints", "bloat"]
}, {
  "name": "Himalayan Sheepdog",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["black & tan", "fawn", "sable", "white"],
  "species": "dog",
  "sizeAvg": 95,
  "sizeRange": [66, 130],
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
    "adaptability": 4,
  "founderCOI": 3.5
},
  "health": {
    "hips": 68,
    "eyes": 75,
    "heart": 75,
    "joints": 68
  },
  "aptitudes": ["Conformation"],
  "coatFreqs": {"E": [["E", 0.85], ["e", 0.15]], "K": [["KB", 0.2], ["kbr", 0.1], ["ky", 0.7]], "A": [["Ay", 0.4], ["aw", 0.2], ["at", 0.3], ["a", 0.1]], "S": [["S", 0.65], ["sp", 0.25], ["sw", 0.1]]},
  "healthFlags": ["hips", "joints", "bloat"]
}, {
  "name": "Armenian Gampr",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["white", "fawn", "gray", "brindle", "piebald", "any color"],
  "species": "dog",
  "sizeAvg": 120,
  "sizeRange": [88, 155],
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
    "adaptability": 6,
  "founderCOI": 3.5
},
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Schutzhund", "Conformation"],
  "coatFreqs": {"E": [["E", 0.8], ["e", 0.2]], "K": [["KB", 0.1], ["kbr", 0.2], ["ky", 0.7]], "A": [["Ay", 0.4], ["aw", 0.25], ["at", 0.2], ["a", 0.15]], "S": [["S", 0.45], ["sp", 0.35], ["sw", 0.2]]},
  "healthFlags": ["hips", "joints", "bloat"]
}, {
  "name": "Georgian Shepherd Nagazi",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["white", "fawn", "gray", "black", "brindle", "piebald"],
  "species": "dog",
  "sizeAvg": 130,
  "sizeRange": [99, 165],
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
    "adaptability": 5,
  "founderCOI": 3.5
},
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 75,
    "joints": 70
  },
  "aptitudes": ["Schutzhund", "Conformation"],
  "coatFreqs": {"E": [["E", 0.8], ["e", 0.2]], "K": [["KB", 0.1], ["kbr", 0.2], ["ky", 0.7]], "A": [["Ay", 0.4], ["aw", 0.25], ["at", 0.2], ["a", 0.15]], "S": [["S", 0.45], ["sp", 0.35], ["sw", 0.2]]},
  "healthFlags": ["hips", "joints", "bloat"]
}, {
  "name": "Gurdbasar",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["white", "fawn", "gray", "brindle", "piebald"],
  "species": "dog",
  "sizeAvg": 120,
  "sizeRange": [88, 155],
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
    "adaptability": 5,
  "founderCOI": 3.5
},
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 75,
    "joints": 70
  },
  "aptitudes": ["Schutzhund"],
  "coatFreqs": {"E": [["E", 0.8], ["e", 0.2]], "K": [["KB", 0.1], ["kbr", 0.2], ["ky", 0.7]], "A": [["Ay", 0.4], ["aw", 0.25], ["at", 0.2], ["a", 0.15]], "S": [["S", 0.45], ["sp", 0.35], ["sw", 0.2]]},
  "healthFlags": ["hips", "joints", "bloat"]
}, {
  "name": "Sarabi Persian Mastiff",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["fawn", "red", "cream", "gray", "brindle"],
  "species": "dog",
  "sizeAvg": 155,
  "sizeRange": [110, 200],
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
    "adaptability": 5,
  "founderCOI": 4.0
},
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 72,
    "joints": 70
  },
  "aptitudes": ["Conformation", "Obedience"],
  "coatFreqs": {"E": [["E", 0.85], ["e", 0.15]], "K": [["KB", 0.1], ["kbr", 0.35], ["ky", 0.55]], "A": [["Ay", 0.7], ["aw", 0.15], ["at", 0.1], ["a", 0.05]], "S": [["S", 0.8], ["sp", 0.15], ["sw", 0.05]]},
  "healthFlags": ["hips", "joints", "bloat", "heart"]
}, {
  "name": "Kurdish Mastiff Pshdar",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["fawn", "red", "brindle", "gray", "white with patches"],
  "species": "dog",
  "sizeAvg": 140,
  "sizeRange": [99, 185],
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
    "adaptability": 5,
  "founderCOI": 4.0
},
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 75,
    "joints": 70
  },
  "aptitudes": ["Schutzhund"],
  "coatFreqs": {"E": [["E", 0.85], ["e", 0.15]], "K": [["KB", 0.1], ["kbr", 0.4], ["ky", 0.5]], "A": [["Ay", 0.65], ["aw", 0.15], ["at", 0.15], ["a", 0.05]], "S": [["S", 0.6], ["sp", 0.3], ["sw", 0.1]]},
  "healthFlags": ["hips", "joints", "bloat"]
}, {
  "name": "Kars Dog",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["fawn with black mask", "gray", "brindle", "white with patches"],
  "species": "dog",
  "sizeAvg": 120,
  "sizeRange": [88, 145],
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
    "adaptability": 5,
  "founderCOI": 4.0
},
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Conformation"],
  "coatFreqs": {"E": [["E", 0.85], ["e", 0.15]], "K": [["KB", 0.1], ["kbr", 0.25], ["ky", 0.65]], "A": [["Ay", 0.6], ["aw", 0.2], ["at", 0.15], ["a", 0.05]], "S": [["S", 0.6], ["sp", 0.3], ["sw", 0.1]]},
  "healthFlags": ["hips", "joints", "bloat"]
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
  "colors": ["white", "cream", "biscuit", "white & biscuit"],
  "species": "dog",
  "sizeAvg": 50,
  "sizeRange": [35, 65],
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
    "adaptability": 6,
  "founderCOI": 5.5
},
  "health": {
    "hips": 72,
    "eyes": 78,
    "heart": 78,
    "joints": 72
  },
  "aptitudes": ["Sled Racing", "Conformation", "Agility"],
  "coatFreqs": {"E": [["E", 0.5], ["e", 0.5]], "K": [["KB", 0.05], ["kbr", 0], ["ky", 0.95]], "A": [["Ay", 0.8], ["aw", 0.15], ["at", 0.03], ["a", 0.02]], "S": [["S", 0.4], ["sp", 0.3], ["sw", 0.3]]},
  "healthFlags": ["hips", "eyes", "heart", "diabetes"]
}, {
  "name": "Chinook",
  "group": "Working",
  "size": "L",
  "coat": "medium",
  "colors": ["tawny", "palomino", "red-gold"],
  "species": "dog",
  "sizeAvg": 65,
  "sizeRange": [55, 90],
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
    "adaptability": 8,
  "founderCOI": 7.5
},
  "health": {
    "hips": 75,
    "eyes": 80,
    "heart": 80,
    "joints": 75
  },
  "aptitudes": ["Sled Racing", "Draft", "Conformation"],
  "coatFreqs": {"E": [["E", 0.85], ["e", 0.15]], "K": [["KB", 0.05], ["kbr", 0], ["ky", 0.95]], "A": [["Ay", 0.9], ["aw", 0.08], ["at", 0.02], ["a", 0]], "S": [["S", 0.85], ["sp", 0.12], ["sw", 0.03]]},
  "healthFlags": ["hips", "eyes", "epilepsy"]
}, {
  "name": "Tamaskan",
  "group": "Working",
  "size": "L",
  "coat": "medium",
  "colors": ["wolf gray", "red gray", "black gray"],
  "species": "dog",
  "sizeAvg": 75,
  "sizeRange": [55, 99],
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
    "adaptability": 6,
  "founderCOI": 6.0
},
  "health": {
    "hips": 80,
    "eyes": 82,
    "heart": 85,
    "joints": 80
  },
  "aptitudes": ["Sled Racing", "Agility", "Conformation"],
  "coatFreqs": {"E": [["E", 0.8], ["e", 0.2]], "K": [["KB", 0.05], ["kbr", 0], ["ky", 0.95]], "A": [["Ay", 0.15], ["aw", 0.6], ["at", 0.2], ["a", 0.05]], "S": [["S", 0.75], ["sp", 0.2], ["sw", 0.05]]},
  "healthFlags": ["hips", "epilepsy", "eyes"]
}, {
  "name": "Northern Inuit",
  "group": "Working",
  "size": "L",
  "coat": "medium",
  "colors": ["white", "black", "gray", "sable", "black & white", "gray & white"],
  "species": "dog",
  "sizeAvg": 75,
  "sizeRange": [55, 110],
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
    "adaptability": 6,
  "founderCOI": 6.0
},
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Conformation", "Agility"],
  "coatFreqs": {"E": [["E", 0.8], ["e", 0.2]], "K": [["KB", 0.05], ["kbr", 0], ["ky", 0.95]], "A": [["Ay", 0.2], ["aw", 0.45], ["at", 0.25], ["a", 0.1]], "S": [["S", 0.4], ["sp", 0.45], ["sw", 0.15]]},
  "healthFlags": ["hips", "epilepsy", "eyes", "spine"]
}, {
  "name": "Utonagan",
  "group": "Working",
  "size": "L",
  "coat": "medium",
  "colors": ["white", "black", "gray", "sable", "wolf gray"],
  "species": "dog",
  "sizeAvg": 75,
  "sizeRange": [55, 110],
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
    "adaptability": 6,
  "founderCOI": 6.0
},
  "health": {
    "hips": 78,
    "eyes": 80,
    "heart": 82,
    "joints": 78
  },
  "aptitudes": ["Conformation", "Agility"],
  "coatFreqs": {"E": [["E", 0.8], ["e", 0.2]], "K": [["KB", 0.05], ["kbr", 0], ["ky", 0.95]], "A": [["Ay", 0.2], ["aw", 0.45], ["at", 0.25], ["a", 0.1]], "S": [["S", 0.4], ["sp", 0.45], ["sw", 0.15]]},
  "healthFlags": ["hips", "epilepsy", "eyes"]
}, {
  "name": "Bucovina Shepherd",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["white with black patches", "white with sandy patches", "white with brindle patches"],
  "species": "dog",
  "sizeAvg": 110,
  "sizeRange": [88, 145],
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
    "adaptability": 5,
  "founderCOI": 4.5
},
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 75,
    "joints": 70
  },
  "aptitudes": ["Conformation"],
  "coatFreqs": {"E": [["E", 0.8], ["e", 0.2]], "K": [["KB", 0.1], ["kbr", 0.15], ["ky", 0.75]], "A": [["Ay", 0.35], ["aw", 0.25], ["at", 0.25], ["a", 0.15]], "S": [["S", 0.15], ["sp", 0.5], ["sw", 0.35]]},
  "healthFlags": ["hips", "joints", "bloat"]
}, {
  "name": "Bankhar",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["black & tan", "black", "brown & tan", "sable"],
  "species": "dog",
  "sizeAvg": 110,
  "sizeRange": [88, 145],
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
    "adaptability": 4,
  "founderCOI": 3.5
},
  "health": {
    "hips": 68,
    "eyes": 72,
    "heart": 72,
    "joints": 68
  },
  "aptitudes": ["Schutzhund"],
  "coatFreqs": {"E": [["E", 0.85], ["e", 0.15]], "K": [["KB", 0.3], ["kbr", 0], ["ky", 0.7]], "A": [["Ay", 0.2], ["aw", 0.2], ["at", 0.5], ["a", 0.1]], "S": [["S", 0.75], ["sp", 0.2], ["sw", 0.05]]},
  "healthFlags": ["hips", "joints", "bloat"]
}, {
  "name": "Mongolian Bankhar",
  "group": "Working",
  "size": "XL",
  "coat": "long",
  "colors": ["black & tan", "black", "brown & tan", "sable"],
  "species": "dog",
  "sizeAvg": 110,
  "sizeRange": [88, 145],
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
    "adaptability": 4,
  "founderCOI": 3.5
},
  "health": {
    "hips": 68,
    "eyes": 72,
    "heart": 72,
    "joints": 68
  },
  "aptitudes": ["Schutzhund"],
  "coatFreqs": {"E": [["E", 0.85], ["e", 0.15]], "K": [["KB", 0.3], ["kbr", 0], ["ky", 0.7]], "A": [["Ay", 0.2], ["aw", 0.2], ["at", 0.5], ["a", 0.1]], "S": [["S", 0.75], ["sp", 0.2], ["sw", 0.05]]},
  "healthFlags": ["hips", "joints", "bloat"]
}, {
  "name": "Assyrian Shepherd",
  "group": "Working",
  "size": "XL",
  "coat": "medium",
  "colors": ["white", "fawn", "gray", "black", "piebald"],
  "species": "dog",
  "sizeAvg": 120,
  "sizeRange": [88, 155],
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
    "adaptability": 5,
  "founderCOI": 3.5
},
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 75,
    "joints": 70
  },
  "aptitudes": ["Schutzhund"],
  "coatFreqs": {"E": [["E", 0.8], ["e", 0.2]], "K": [["KB", 0.1], ["kbr", 0.15], ["ky", 0.75]], "A": [["Ay", 0.4], ["aw", 0.25], ["at", 0.2], ["a", 0.15]], "S": [["S", 0.45], ["sp", 0.35], ["sw", 0.2]]},
  "healthFlags": ["hips", "joints", "bloat"]
}, {
  "name": "Dogo Canario",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["fawn", "brindle", "fawn with white", "brindle with white"],
  "species": "dog",
  "sizeAvg": 110,
  "sizeRange": [84, 145],
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
    "adaptability": 5,
  "founderCOI": 6.0
},
  "health": {
    "hips": 68,
    "eyes": 72,
    "heart": 70,
    "joints": 68
  },
  "aptitudes": ["Schutzhund", "Conformation"],
  "coatFreqs": {"E": [["E", 1.0], ["e", 0.0]], "K": [["KB", 0.15], ["kbr", 0.55], ["ky", 0.3]], "A": [["Ay", 0.8], ["aw", 0], ["at", 0.15], ["a", 0.05]], "S": [["S", 0.65], ["sp", 0.3], ["sw", 0.05]]},
  "healthFlags": ["hips", "heart", "bloat"]
}, {
  "name": "Ca de Bou",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["fawn", "brindle", "black"],
  "species": "dog",
  "sizeAvg": 90,
  "sizeRange": [66, 110],
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
    "adaptability": 5,
  "founderCOI": 6.5
},
  "health": {
    "hips": 68,
    "eyes": 70,
    "heart": 68,
    "joints": 68
  },
  "aptitudes": ["Schutzhund", "Conformation"],
  "coatFreqs": {"E": [["E", 1.0], ["e", 0.0]], "K": [["KB", 0.25], ["kbr", 0.5], ["ky", 0.25]], "A": [["Ay", 0.7], ["aw", 0], ["at", 0.2], ["a", 0.1]], "S": [["S", 0.85], ["sp", 0.12], ["sw", 0.03]]},
  "healthFlags": ["hips", "heart", "breathing", "joints"]
}, {
  "name": "Alano Espa\xF1ol",
  "group": "Working",
  "size": "L",
  "coat": "short",
  "colors": ["fawn", "brindle", "wolf sable", "black", "black brindle"],
  "species": "dog",
  "sizeAvg": 90,
  "sizeRange": [66, 110],
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
  "aptitudes": ["Schutzhund", "Conformation"],
  "founderCOI": 5.5,
  "coatFreqs": {"E": [["E", 1.0], ["e", 0.0]], "K": [["KB", 0.15], ["kbr", 0.55], ["ky", 0.3]], "A": [["Ay", 0.55], ["aw", 0.2], ["at", 0.15], ["a", 0.1]], "S": [["S", 0.7], ["sp", 0.25], ["sw", 0.05]]},
  "healthFlags": ["hips", "heart", "joints", "cancer"]
}, {
  "name": "Cao de Fila de Sao Miguel",
  "group": "Working",
  "size": "L",
  "coat": "short",
  "colors": ["brindle (yellow, fawn or gray base with dark stripes)"],
  "species": "dog",
  "sizeAvg": 90,
  "sizeRange": [66, 110],
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
    "adaptability": 6,
  "founderCOI": 5.5
},
  "health": {
    "hips": 72,
    "eyes": 75,
    "heart": 75,
    "joints": 72
  },
  "aptitudes": ["Herding", "Schutzhund", "Conformation"],
  "coatFreqs": {"E": [["E", 1.0], ["e", 0.0]], "K": [["KB", 0.05], ["kbr", 0.85], ["ky", 0.1]], "A": [["Ay", 0.8], ["aw", 0.1], ["at", 0.1], ["a", 0]], "S": [["S", 0.8], ["sp", 0.17], ["sw", 0.03]]},
  "healthFlags": ["hips", "joints", "heart"]
}, {
  "name": "C\xE3o de Castro Laboreiro",
  "group": "Working",
  "size": "L",
  "coat": "short",
  "colors": ["wolf gray", "dark brown", "mountain (dark with lighter underparts)"],
  "species": "dog",
  "sizeAvg": 75,
  "sizeRange": [55, 88],
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
  "aptitudes": ["Conformation"],
  "founderCOI": 5.0,
  "coatFreqs": {"E": [["E", 0.85], ["e", 0.15]], "K": [["KB", 0.1], ["kbr", 0], ["ky", 0.9]], "A": [["Ay", 0.2], ["aw", 0.55], ["at", 0.2], ["a", 0.05]], "S": [["S", 0.85], ["sp", 0.12], ["sw", 0.03]]},
  "healthFlags": ["hips", "joints"]
}, {
  "name": "Perro Cimarron",
  "group": "Working",
  "size": "L",
  "coat": "short",
  "colors": ["brindle", "fawn", "brindle with white"],
  "species": "dog",
  "sizeAvg": 90,
  "sizeRange": [66, 110],
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
    "adaptability": 5,
  "founderCOI": 5.0
},
  "health": {
    "hips": 70,
    "eyes": 75,
    "heart": 75,
    "joints": 70
  },
  "aptitudes": ["Schutzhund", "Conformation"],
  "coatFreqs": {"E": [["E", 1.0], ["e", 0.0]], "K": [["KB", 0.1], ["kbr", 0.65], ["ky", 0.25]], "A": [["Ay", 0.8], ["aw", 0], ["at", 0.15], ["a", 0.05]], "S": [["S", 0.7], ["sp", 0.25], ["sw", 0.05]]},
  "healthFlags": ["hips", "heart", "joints"]
}, {
  "name": "Alaunt",
  "group": "Working",
  "size": "XL",
  "coat": "short",
  "colors": ["white", "fawn", "brindle", "any color"],
  "species": "dog",
  "sizeAvg": 120,
  "sizeRange": [88, 160],
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
    "adaptability": 5,
  "founderCOI": 4.0
},
  "health": {
    "hips": 68,
    "eyes": 72,
    "heart": 70,
    "joints": 68
  },
  "aptitudes": ["Schutzhund", "Conformation"],
  "coatFreqs": {"E": [["E", 0.8], ["e", 0.2]], "K": [["KB", 0.15], ["kbr", 0.35], ["ky", 0.5]], "A": [["Ay", 0.55], ["aw", 0.15], ["at", 0.15], ["a", 0.15]], "S": [["S", 0.45], ["sp", 0.35], ["sw", 0.2]]},
  "healthFlags": ["hips", "joints", "bloat", "heart"]
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


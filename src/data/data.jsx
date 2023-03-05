const data = {
    productItems: [
        {
            id: 1,
            name: "Schwinn Discover Hybrid Bike",
            information: "This bike is designed for commuting and features a comfortable seat, adjustable handlebars, and a lightweight frame.",
            price: 329
        },
        {
            id: 2,
            name: "Kent KZ2600 Dual Suspension Mountain Bike",
            information: "This bike is ideal for off-road adventures and features a full suspension system, Shimano shifters, and an aluminum frame",
            price: 349
        },
        {
            id: 3,
            name: "Women's Cruiser Bike",
            information: "This bike is perfect for leisurely rides and features a classic cruiser design, wide handlebars, and a cushioned seat. ",
            price: 299
        },
        {
            id: 4,
            name: "Diamondback Atroz Mountain Bike",
            information: "This bike is great for serious off-roading and features a full suspension system, Shimano drivetrain, and hydraulic disc brakes",
            price: 1099
        },
        {
            id: 5,
            name: " Retrospec Harper Single-Speed Fixed Gear Bike",
            information: "This bike is perfect for city riding and features a simple, sleek design, lightweight frame, and flip-flop hub for fixed or freewheel riding.",
            price: 219
        },
        {
            id: 6,
            name: "Huffy Nel Lusso Classic Cruiser Bike",
            information: "This bike is designed for casual riding and features a vintage-style design, wide tires, and a comfortable seat",
            price: 229
        },
        {
            id: 7,
            name: "Tommaso Imola Endurance Road Bike",
            information: "This bike is perfect for long-distance rides and features a lightweight aluminum frame, Shimano Claris shifters, and a carbon fiber fork",
            price: 849
        },
        {
            id: 8,
            name: "Mongoose Dolomite Fat Tire Mountain Bike",
            information: "This bike is ideal for sand, snow, and other tough terrain, and features fat tires, dual disc brakes, and a steel frame.",
            price: 449
        },
        {
            id: 9,
            name: "NAKTO City Electric Bicycle",
            information: "This bike is designed for commuting and features an electric motor, comfortable seat, and durable frame.",
            price: 649
        },
        {
            id: 10,
            name: "Raleigh Cadent 2 Urban Fitness Bike",
            information: "This bike is perfect for fitness and commuting, and features a lightweight aluminum frame, Shimano shifters, and hydraulic disc brakes.",
            price: 799
        },
        {
            id: 11,
            name: "Critical Cycles Harper Single-Speed Fixed Gear Bike",
            information: "This bike is perfect for city riding and features a simple, sleek design, lightweight frame, and flip-flop hub for fixed or freewheel riding. ",
            price: 219
        },
        {
            id: 12,
            name: "Diamondback Century 1 Endurance Road Bike",
            information: "This bike is designed for long-distance rides and features a lightweight aluminum frame, Shimano shifters, and a carbon fiber fork",
            price: 1199
        },
        {
            id: 13,
            name: "Schwinn Meridian Adult Tricycle",
            information: "This tricycle is perfect for casual rides and features a low step-through frame, comfortable seat, and large rear basket. ",
            price: 399
        },
        {
            id: 14,
            name: "Kent Northwoods Springdale Women's Hybrid Bicycle",
            information: "This bike is great for commuting and leisurely rides and features a lightweight aluminum frame, Shimano shifters, and a comfortable seat",
            price: 199
        },
        {
            id: 15,
            name: "BEIOU Carbon Fiber 27.5 Mountain Bike",
            information: "This bike is perfect for serious off-roading and features a carbon fiber frame, hydraulic disc brakes, and Shimano drivetrain.",
            price: 1299
        },
        {
            id: 16,
            name: "Firmstrong Bruiser Man Beach Cruiser Bicycle",
            information: "This bike is designed for beach cruising and features a durable steel frame, wide handlebars, and cushioned seat. ",
            price: 279
        },
        {
            id: 17,
            name: "Tommaso Sentiero Gravel Adventure Bike",
            information: "This bike is great for off-road adventures and features a lightweight aluminum frame, Shimano Claris shifters, and a carbon fiber fork.",
            price: 849
        },
        {
            id: 18,
            name: "Huffy 26\" Nel Lusso Cruiser Bike",
            information: "This bike is perfect for leisurely rides and features a vintage-style design, wide tires, and a comfortable seat.",
            price: 219
        },
        {
            id: 19,
            name: "Raleigh Cadent 1 Urban Fitness Bike",
            information: "This bike is great for fitness and commuting and features a lightweight aluminum frame, Shimano shifters, and hydraulic disc brakes.",
            price: 649
        },
        {
            id: 20,
            name: "Schwinn Sting Pro and Predator Cruiser Bike",
            information: "This bike is designed for classic cruising and features a retro design, steel frame, and wide tires",
            price: 329
        },
        {
            id: 21,
            name: "Mongoose Legion Freestyle BMX Bike",
            information: "This bike is great for freestyle riding and features a lightweight frame, alloy wheels, and 4 freestyle pegs. ",
            price: 249
        },
        {
            id: 22,
            name: "Kent Oakwood Women's Cruiser Bike",
            information: "This bike is perfect for leisurely rides and features a vintage-style design, comfortable seat, and 7-speed Shimano shifter. ",
            price: 229
        },
        {
            id: 23,
            name: "Diamondback Hook 27.5 Hardtail Mountain Bike",
            information: "This bike is designed for serious off-roading and features a lightweight aluminum frame, hydraulic disc brakes, and 1x drivetrain. ",
            price: 899
        },
        {
            id: 24,
            name: "Women's 7-Speed Hybrid Cruiser Bicycle",
            information: "This bike is great for casual rides and commuting and features a comfortable seat, Shimano 7-speed shifters, and a low step-through frame.",
            price: 449
        },
        {
            id: 25,
            name: "Royce Union RMA All-Terrain Mountain Bike",
            information: "This bike is perfect for off-roading and features a full suspension system, Shimano shifters, and a lightweight aluminum frame.",
            price: 429
        },
        {
            id: 26,
            name: "Schwinn Wayfarer Hybrid Bike",
            information: "This bike is perfect for commuting and leisurely rides and features a vintage-style design, Shimano 7-speed shifters, and a comfortable seat. ",
            price: 349
        },
        {
            id: 27,
            name: "NAKTO 26\" Adult Electric Bicycle",
            information: "This bike is great for commuting and features an electric motor, comfortable seat, and durable frame.",
            price: 649
        },
        {
            id: 28,
            name: "Raleigh Redux 1 Urban Assault Bike",
            information: "This bike is great for urban assault and commuting and features a lightweight aluminum frame, Shimano shifters, and hydraulic disc brakes. ",
            price: 699
        },
        {
            id: 29,
            name: "Kent 700c Men's RoadTech Road Bike",
            information: "This bike is perfect for long-distance rides and features a lightweight aluminum frame, Shimano shifters, and a comfortable seat.",
            price: 219
        },
        {
            id: 30,
            name: "Mongoose Impasse Full Dual-Suspension Mountain Bike",
            information: "This bike is designed for serious off-roading and features a full suspension system, Shimano shifters, and a lightweight aluminum frame.",
            price: 429
        },
        {
            id: 31,
            name: "Tommaso Imola Endurance Aluminum Road Bike",
            information: "This bike is designed for endurance riding and features a lightweight aluminum frame, Shimano Claris groupset, and a carbon fork. ",
            price: 849
        },
        {
            id: 32,
            name: "sixthreezero Around the Block Women's Cruiser Bike",
            information: "This bike is great for casual rides and commuting and features a classic design, comfortable seat, and Shimano 7-speed shifters. ",
            price: 399
        },
        {
            id: 33,
            name: "Gravity FSX 1.0 Dual Full Suspension Mountain Bike",
            information: "This bike is perfect for off-road adventures and features a full suspension system, Shimano shifters, and a lightweight aluminum frame.",
            price: 429
        },
        {
            id: 34,
            name: "Kent KZ2600 Dual Suspension Mountain Bike",
            information: "This bike is great for off-roading and features a full suspension system, Shimano shifters, and a lightweight aluminum frame.",
            price: 349
        }
    ]
}

export default data;
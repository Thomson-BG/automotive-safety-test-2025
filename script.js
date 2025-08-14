// Global variables
let currentTest = 1;
let currentQuestion = 0;
let studentData = {};
let testData = {};
let currentAnswers = [];
let shuffledQuestions = [];
let originalCorrectAnswers = [];
let testsUnlocked = true; // Default to unlocked

// Utility function to shuffle an array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Test questions and answers
const tests = {
    1: {
        title: "Safety Test 1",
        questions: [
            {
                question: "Running in the classroom is:",
                answers: [
                    "Permitted in an emergency",
                    "O.K. if you are answering the phone", 
                    "Never Permitted",
                    "Permitted if you are giving first aid"
                ],
                correct: 2
            },
            {
                question: "If you are injured in the classroom or shop:",
                answers: [
                    "Go to the nurse",
                    "Tell your friend",
                    "Put a Band-Aid on the injury",
                    "Report it to the teacher at once"
                ],
                correct: 3
            },
            {
                question: "If there is a fire in the classroom or shop area (Check all that apply)",
                answers: [
                    "Evacuate the area and follow the teacher's instructions",
                    "Put the fire out with a fire extinguisher when possible",
                    "None of these choices",
                    "Do not breathe the smoke"
                ],
                correct: [0, 1, 3], // Multiple correct answers
                multiple: true
            },
            {
                question: "If an earthquake were to occur:",
                answers: [
                    "Run out of the building",
                    "Duck, cover and hold",
                    "Stand by the window",
                    "Scream for help"
                ],
                correct: 1
            },
            {
                question: "When moving heavy objects:",
                answers: [
                    "Push object along the floor",
                    "Have the custodian do it",
                    "Bend over while lifting",
                    "Bend your knees while lifting"
                ],
                correct: 3
            },
            {
                question: "Any safety hazard you discover, should be:",
                answers: [
                    "Reported to the custodian",
                    "Fixed by the student",
                    "Ignored",
                    "Reported to the teacher at once"
                ],
                correct: 3
            },
            {
                question: "If the teacher is injured and not conscious:",
                answers: [
                    "Call the district office",
                    "Follow the teacher's instructions",
                    "Get assistance from the teacher next door",
                    "All of these choices"
                ],
                correct: 2
            },
            {
                question: "If you spill liquid of any type on the floor:",
                answers: [
                    "Wipe it up",
                    "Ignore it",
                    "Step over it",
                    "Cover it"
                ],
                correct: 0
            },
            {
                question: "Never use electricity or electrical equipment near:",
                answers: [
                    "Grass",
                    "Other students",
                    "Dirt",
                    "Water"
                ],
                correct: 3
            },
            {
                question: "When are students allowed to use the phone in the classroom?",
                answers: [
                    "Never",
                    "As long as it is safe",
                    "Anytime",
                    "Only when calling home"
                ],
                correct: 0
            },
            {
                question: "Before entering the automotive shop, students must:",
                answers: [
                    "Remove all jewelry and secure loose clothing",
                    "Bring snacks for energy",
                    "Wear their best clothes",
                    "Turn on all equipment"
                ],
                correct: 0
            },
            {
                question: "Safety Data Sheets (SDS) provide information about:",
                answers: [
                    "Student grades",
                    "Hazardous chemicals and materials",
                    "Shop schedules",
                    "Vehicle maintenance records"
                ],
                correct: 1
            },
            {
                question: "The proper way to lift heavy objects is:",
                answers: [
                    "Bend at the waist and lift quickly",
                    "Use your back muscles only",
                    "Bend your knees and keep your back straight",
                    "Twist while lifting to save time"
                ],
                correct: 2
            },
            {
                question: "If you cut yourself with a tool, you should:",
                answers: [
                    "Continue working and ignore the cut",
                    "Wash the cut and apply a bandage yourself",
                    "Immediately report it to the instructor and seek first aid",
                    "Ask another student to help you"
                ],
                correct: 2
            },
            {
                question: "When walking through the shop, you should:",
                answers: [
                    "Run to save time",
                    "Walk quickly while texting",
                    "Walk calmly and be aware of your surroundings",
                    "Walk backwards to see where you've been"
                ],
                correct: 2
            },
            {
                question: "Shop ventilation systems are important because they:",
                answers: [
                    "Keep the shop cool in summer",
                    "Remove harmful fumes and provide fresh air",
                    "Make the shop louder",
                    "Help tools work better"
                ],
                correct: 1
            },
            {
                question: "Before using any chemical in the shop, you should:",
                answers: [
                    "Smell it to identify what it is",
                    "Read the Safety Data Sheet (SDS)",
                    "Mix it with other chemicals",
                    "Use as much as you want"
                ],
                correct: 1
            },
            {
                question: "The emergency eyewash station should be used when:",
                answers: [
                    "You want to clean your glasses",
                    "You get chemicals or debris in your eyes",
                    "You are thirsty",
                    "The regular sink is busy"
                ],
                correct: 1
            },
            {
                question: "Shop safety rules exist to:",
                answers: [
                    "Make work more difficult",
                    "Protect students, instructors, and equipment",
                    "Slow down productivity",
                    "Satisfy legal requirements only"
                ],
                correct: 1
            },
            {
                question: "If you witness an accident in the shop, you should:",
                answers: [
                    "Take pictures with your phone",
                    "Immediately notify the instructor",
                    "Try to fix the problem yourself",
                    "Continue working and ignore it"
                ],
                correct: 1
            },
            {
                question: "Eating and drinking in the automotive shop is:",
                answers: [
                    "Allowed during break time only",
                    "Allowed if you wash your hands first",
                    "Never allowed due to contamination risks",
                    "Allowed only with instructor permission"
                ],
                correct: 2
            },
            {
                question: "The first thing to do when entering the shop each day is:",
                answers: [
                    "Start working immediately",
                    "Check for any safety hazards or spills",
                    "Turn on all the equipment",
                    "Open all the tool cabinets"
                ],
                correct: 1
            },
            {
                question: "If you don't understand a safety procedure, you should:",
                answers: [
                    "Guess and try your best",
                    "Ask another student for help",
                    "Ask the instructor for clarification",
                    "Skip that procedure"
                ],
                correct: 2
            },
            {
                question: "Material Safety Data Sheets (MSDS) must be:",
                answers: [
                    "Kept in the instructor's office only",
                    "Easily accessible to all shop users",
                    "Memorized by students",
                    "Updated every five years"
                ],
                correct: 1
            },
            {
                question: "When handling hazardous waste materials, you should:",
                answers: [
                    "Dispose of them in regular trash",
                    "Pour them down the drain",
                    "Follow proper disposal procedures and regulations",
                    "Store them anywhere convenient"
                ],
                correct: 2
            }
        ]
    },
    2: {
        title: "Safety Test 2",
        questions: [
            {
                question: "To avoid serious injury, long hair must be worn under a cap or tied back. This is so that hair won't get:",
                answers: [
                    "Caught in the machinery",
                    "Oily",
                    "Dirty",
                    "Messy"
                ],
                correct: 0
            },
            {
                question: "Before you use any equipment, whether it's during class or after class, you must have:",
                answers: [
                    "A license",
                    "A safety certificate",
                    "Someone with you",
                    "The instructor's permission"
                ],
                correct: 3
            },
            {
                question: "There are several reasons it's important to use the right tool and the right size tool for the job. The most important reason is:",
                answers: [
                    "Neatness",
                    "Safety",
                    "Precision",
                    "Efficiency"
                ],
                correct: 1
            },
            {
                question: "When you carry a tool with a sharp point or a sharp edge, carry it so no one gets hurt, should you trip or if you bump into someone. The correct way to carry a sharp tool is with the point or edge _______.",
                answers: [
                    "Pointing up towards the ceiling",
                    "Held down towards the floor",
                    "Behind your back",
                    "In your pocket"
                ],
                correct: 1
            },
            {
                question: "When you hand someone a tool, lay it down so they can pick it up by the handle or hold it so they can:",
                answers: [
                    "Catch it when it falls",
                    "Take it with both hands",
                    "Take it by the handle",
                    "Take the point or edge first"
                ],
                correct: 2
            },
            {
                question: "Tools should never be put in your pocket because they could:",
                answers: [
                    "Make your pocket dirty",
                    "Cause an injury, tear clothes and damage the upholstery",
                    "Get in the way",
                    "Get broken"
                ],
                correct: 1
            },
            {
                question: "A greasy, slippery tool can be hard to use and can also be dangerous to use. Tools must be:",
                answers: [
                    "Kept clean and free of grease and oil",
                    "Used with gloves",
                    "Kept covered",
                    "Wiped with friction oil"
                ],
                correct: 0
            },
            {
                question: "A worn, dull or defective tool is more dangerous to use than a sharp tool or a tool that is in good condition. Defective tools or equipment should be:",
                answers: [
                    "Marked",
                    "Reported to the instructor immediately",
                    "Put under the bench",
                    "Avoided"
                ],
                correct: 1
            },
            {
                question: "The work area must be kept cleared and clean. This isn't just for neatness, but for everyone's safety too. This way the tools and equipment won't be in the way, bumped into or tripped over. Therefore tools and equipment that you have finished using should be:",
                answers: [
                    "Stacked neatly",
                    "Passed on to someone else",
                    "Put under the bench",
                    "Returned to the tool room"
                ],
                correct: 3
            },
            {
                question: "When are students allowed to use personal electronic devices in the classroom or shop?",
                answers: [
                    "Anytime",
                    "As long as it is safe",
                    "Never",
                    "Only when calling home"
                ],
                correct: 2
            },
            {
                question: "Safety glasses must be worn:",
                answers: [
                    "Only when using power tools",
                    "At all times in the shop area",
                    "Only when the instructor is watching",
                    "Only when working under a vehicle"
                ],
                correct: 1
            },
            {
                question: "Before using compressed air to clean parts, you should:",
                answers: [
                    "Set the pressure as high as possible",
                    "Wear safety glasses and keep pressure below 30 PSI",
                    "Point it at other students first",
                    "Use it without any protection"
                ],
                correct: 1
            },
            {
                question: "When using a grinder, you should always:",
                answers: [
                    "Wear a face shield and safety glasses",
                    "Hold the work piece with your hands only",
                    "Grind on the side of the wheel",
                    "Remove the safety guard for better access"
                ],
                correct: 0
            },
            {
                question: "Pneumatic tools should be:",
                answers: [
                    "Connected to any air source",
                    "Inspected before use and properly maintained",
                    "Used at maximum pressure always",
                    "Shared without cleaning between users"
                ],
                correct: 1
            },
            {
                question: "When using hand files, you should:",
                answers: [
                    "File without a handle to feel the work better",
                    "Always use a proper handle and file away from your body",
                    "File toward your body for better control",
                    "Use files for prying or hammering"
                ],
                correct: 1
            },
            {
                question: "The proper way to hand someone a sharp tool is:",
                answers: [
                    "Throw it to them carefully",
                    "Place it on a surface for them to pick up by the handle",
                    "Hand it to them point first",
                    "Toss it gently in their direction"
                ],
                correct: 1
            },
            {
                question: "Before using any power tool, you should:",
                answers: [
                    "Assume it's working properly",
                    "Inspect it for damage and proper guards",
                    "Oil all moving parts first",
                    "Test it on scrap material immediately"
                ],
                correct: 1
            },
            {
                question: "When using hammers, you should:",
                answers: [
                    "Strike with the side of the hammer head",
                    "Keep others clear and strike squarely with the face",
                    "Use any object as a striking surface",
                    "Hit as hard as possible every time"
                ],
                correct: 1
            },
            {
                question: "Damaged or worn tools should be:",
                answers: [
                    "Used carefully until they break completely",
                    "Removed from service and reported to the instructor",
                    "Repaired by students during class",
                    "Hidden so others won't use them"
                ],
                correct: 1
            },
            {
                question: "When working with cutting tools, you should:",
                answers: [
                    "Cut toward your body for better control",
                    "Always cut away from your body and others",
                    "Use maximum force to cut through materials",
                    "Keep blades as dull as possible for safety"
                ],
                correct: 1
            },
            {
                question: "Personal protective equipment (PPE) should be:",
                answers: [
                    "Shared between students to save money",
                    "Properly maintained and inspected regularly",
                    "Used only when convenient",
                    "Cleaned once per semester"
                ],
                correct: 1
            },
            {
                question: "When using pliers or wrenches, you should:",
                answers: [
                    "Pull toward your body whenever possible",
                    "Push away from your body to avoid injury if the tool slips",
                    "Use them as hammers when needed",
                    "Apply maximum force always"
                ],
                correct: 1
            },
            {
                question: "The purpose of tool guards and safety devices is to:",
                answers: [
                    "Make tools look more professional",
                    "Protect the user from injury",
                    "Slow down work progress",
                    "Make tools more expensive"
                ],
                correct: 1
            },
            {
                question: "When storing sharp tools, you should:",
                answers: [
                    "Place them loosely in a drawer",
                    "Store them in proper holders or sheaths",
                    "Leave them on work benches",
                    "Throw them in a tool box"
                ],
                correct: 1
            },
            {
                question: "Hearing protection should be worn when:",
                answers: [
                    "Only during loud music",
                    "Using loud power tools or in noisy environments",
                    "Never in the shop",
                    "Only when talking to others"
                ],
                correct: 1
            }
        ]
    },
    3: {
        title: "Safety Test 3",
        questions: [
            {
                question: "Don't lay tools or parts on fenders or any place where they could:",
                answers: [
                    "Get lost or fall off",
                    "Look messy",
                    "Get dirty",
                    "Be prepared for installation"
                ],
                correct: 0
            },
            {
                question: "Floor jack handles should be kept raised so that they:",
                answers: [
                    "Don't get bent",
                    "Can be used quickly in an emergency",
                    "Are not a trip hazard",
                    "Are in a locked position"
                ],
                correct: 2
            },
            {
                question: "Creepers are used for working under a car. When they're not in use, they should be:",
                answers: [
                    "Stored upside down",
                    "Stored in an upright position",
                    "Stacked on top of each other",
                    "Rolled under the car"
                ],
                correct: 1
            },
            {
                question: "Floor jacks, creepers and other shop equipment are not to be used for playing around on, because:",
                answers: [
                    "It makes too much noise",
                    "The equipment may be needed for work",
                    "You might get hurt",
                    "They are easily damaged"
                ],
                correct: 2
            },
            {
                question: "Spills and excessive oil, grease, gasoline or solvent must be cleaned up because they are fire hazards and because:",
                answers: [
                    "They look messy",
                    "They ruin shoes",
                    "They are slippery",
                    "Petroleum products crack the concrete floor"
                ],
                correct: 2
            },
            {
                question: "Avoid splashing cleaning solution or solvents because they:",
                answers: [
                    "Use up oxygen",
                    "Cause skin irritation, burns and eye injuries",
                    "Catch fire when exposed to air",
                    "Stain the floor"
                ],
                correct: 1
            },
            {
                question: "Damp or oily rags heat up, smolder and catch fire by themselves. This is called spontaneous combustion. That is why dirty rags are kept:",
                answers: [
                    "Wet",
                    "Outside",
                    "Against oily buildings",
                    "In covered metal containers"
                ],
                correct: 3
            },
            {
                question: "In an emergency, you may have to use a fire extinguisher. You should know where the fire extinguishers are located and you should: (Check all that apply)",
                answers: [
                    "Understand their operation",
                    "None of these choices",
                    "Read the instructions posted on them",
                    "Keep one near you when welding on a car"
                ],
                correct: [0, 2, 3],
                multiple: true
            },
            {
                question: "Before you move a car in the shop, get permission from the instructor. Then start the car, test the brake pedal; then drive it:",
                answers: [
                    "Sounding the horn",
                    "Quickly",
                    "Very slowly",
                    "With the hand brake on"
                ],
                correct: 2
            },
            {
                question: "Before you begin working on a car, put the gear shift lever in:",
                answers: [
                    "Reverse",
                    "High gear",
                    "Low gear",
                    "Neutral or park"
                ],
                correct: 3
            },
            {
                question: "When positioning a vehicle on a lift, you should:",
                answers: [
                    "Lift it as quickly as possible",
                    "Carefully position lifting points and check for proper balance",
                    "Assume the lift points are always correct",
                    "Lift one end at a time only"
                ],
                correct: 1
            },
            {
                question: "Before raising a vehicle on a lift, you should:",
                answers: [
                    "Remove all tools from under the vehicle",
                    "Check that doors, hood, and trunk are securely closed",
                    "Make sure nobody is near the vehicle",
                    "All of the above"
                ],
                correct: 3
            },
            {
                question: "Wheel chocks should be used:",
                answers: [
                    "Only on hills",
                    "On wheels remaining on the ground when vehicle is raised",
                    "Only for large vehicles",
                    "Only when the parking brake is broken"
                ],
                correct: 1
            },
            {
                question: "When working under a raised vehicle, you should:",
                answers: [
                    "Work quickly to get out from under it",
                    "Make sure jack stands are properly positioned as backup",
                    "Never work under a raised vehicle",
                    "Stand directly under the heaviest part"
                ],
                correct: 1
            },
            {
                question: "Gasoline vapors are dangerous because they:",
                answers: [
                    "Smell bad",
                    "Are heavier than air and highly flammable",
                    "Are lighter than air",
                    "Are good for the environment"
                ],
                correct: 1
            },
            {
                question: "When using a floor jack, you should:",
                answers: [
                    "Pump it as fast as possible",
                    "Use proper lifting points and raise slowly",
                    "Never check the vehicle's stability",
                    "Leave it unattended while raised"
                ],
                correct: 1
            },
            {
                question: "Vehicle fluids should be disposed of:",
                answers: [
                    "In the regular trash",
                    "Down the drain",
                    "In proper recycling containers according to regulations",
                    "Outside behind the building"
                ],
                correct: 2
            },
            {
                question: "When moving a running vehicle in the shop, you should:",
                answers: [
                    "Have someone guide you and move very slowly",
                    "Drive at normal speed to save time",
                    "Not worry about pedestrians",
                    "Keep doors and windows closed"
                ],
                correct: 0
            },
            {
                question: "Hydraulic jacks should be:",
                answers: [
                    "Pumped to maximum pressure always",
                    "Inspected regularly for leaks and proper operation",
                    "Used on any surface",
                    "Left under pressure when not in use"
                ],
                correct: 1
            },
            {
                question: "When storing vehicle parts, you should:",
                answers: [
                    "Stack them as high as possible",
                    "Store them securely to prevent falling",
                    "Leave them anywhere convenient",
                    "Stack heavy parts on top of light ones"
                ],
                correct: 1
            },
            {
                question: "Class C fire extinguishers are used for:",
                answers: [
                    "Wood and paper fires",
                    "Liquid fuel fires",
                    "Electrical fires",
                    "Metal fires"
                ],
                correct: 2
            },
            {
                question: "When working around vehicle exhaust systems, you should:",
                answers: [
                    "Always ensure proper ventilation",
                    "Work in enclosed spaces",
                    "Ignore the smell of exhaust",
                    "Run engines at high RPM"
                ],
                correct: 0
            },
            {
                question: "Vehicle batteries should be:",
                answers: [
                    "Handled carelessly",
                    "Carried by the terminals",
                    "Lifted properly and kept upright",
                    "Dropped when too heavy"
                ],
                correct: 2
            },
            {
                question: "When cleaning parts with solvents, you should:",
                answers: [
                    "Work in a well-ventilated area with proper PPE",
                    "Use them in confined spaces",
                    "Mix different solvents together",
                    "Never wear gloves"
                ],
                correct: 0
            },
            {
                question: "Tire pressure should be checked:",
                answers: [
                    "When tires are hot from driving",
                    "When tires are cold for accurate readings",
                    "Only when tires look flat",
                    "Never check tire pressure"
                ],
                correct: 1
            }
        ]
    },
    4: {
        title: "Safety Test 4",
        questions: [
            {
                question: "The exhaust from a running engine contains deadly carbon monoxide gas. If you have to run an engine in the shop, be sure the area is well ventilated. If the area is not well ventilated:",
                answers: [
                    "Attach an exhaust system hose to the tail pipe",
                    "Disconnect the muffler",
                    "Keep the engine at a slow idle",
                    "Attach a vacuum cleaner to the carburetor"
                ],
                correct: 0
            },
            {
                question: "An engine that has been running:",
                answers: [
                    "Should be disconnected before working on it",
                    "Gets hot and may cause serious burns",
                    "Should be wiped off",
                    "Should be cooled off indefinitely"
                ],
                correct: 1
            },
            {
                question: "The fan, fan belt, and pulleys of a running engine are dangerous because:",
                answers: [
                    "They generate fumes",
                    "Fingers, hands, tool/equipment can get caught in them",
                    "They get hot",
                    "They are flammable"
                ],
                correct: 1
            },
            {
                question: "The car battery must be handled very carefully; since it has sulfuric acid in it. If any battery acid splashes on you or your clothing, wash it off immediately with:",
                answers: [
                    "Solvent",
                    "Oil",
                    "Gasoline",
                    "Plain water or baking soda and water"
                ],
                correct: 3
            },
            {
                question: "Never lay anything metal on the battery that could cause a short. Keep sparks and flames away from the battery. The hydrogen gas produced by the battery is:",
                answers: [
                    "Corrosive",
                    "Un-reactive",
                    "Distilled",
                    "Flammable and explosive"
                ],
                correct: 3
            },
            {
                question: "When disconnecting a battery, carefully loosen and remove:",
                answers: [
                    "The ignition system first",
                    "The coil first",
                    "The starter first",
                    "The negative ground cable first"
                ],
                correct: 3
            },
            {
                question: "When using a battery charger, keep the charger turned off and unplugged until the charger cables are connected. Then, be sure the charger is off and unplugged before you disconnect the charger cables. This is to avoid:",
                answers: [
                    "Clogging the charger",
                    "Running the charger unnecessarily",
                    "Draining the battery",
                    "Spark and possible explosion"
                ],
                correct: 3
            },
            {
                question: "After the car has been raised, use jack stands to hold it up. The jack stands should be placed under the proper lifting points of the car. If the jack stands aren't used in the proper places:",
                answers: [
                    "The car could be damaged or could slip",
                    "The jack won't work",
                    "They could break",
                    "The chocks could be damaged"
                ],
                correct: 0
            },
            {
                question: "When is it OK to sit on a shop car?",
                answers: [
                    "Only when directed by the custodian",
                    "Never",
                    "Anytime",
                    "Only when you see others doing it"
                ],
                correct: 1
            },
            {
                question: "Whenever you use power equipment such as grinders or wire wheels there is a possibility of face or eye injury, use:",
                answers: [
                    "Low speeds",
                    "Safety glasses only",
                    "Face shield and safety glasses",
                    "A welding hood"
                ],
                correct: 2
            },
            {
                question: "When working on a cooling system, you should:",
                answers: [
                    "Remove the radiator cap immediately",
                    "Wait for the engine to cool down completely",
                    "Work on it while the engine is hot",
                    "Never check the coolant level"
                ],
                correct: 1
            },
            {
                question: "High voltage hybrid vehicle systems require:",
                answers: [
                    "No special precautions",
                    "Proper training and insulated tools",
                    "Regular household tools",
                    "Working with wet hands"
                ],
                correct: 1
            },
            {
                question: "When jump-starting a vehicle, you should:",
                answers: [
                    "Connect positive to negative terminals",
                    "Connect cables in any order",
                    "Follow proper sequence: positive to positive, negative to ground",
                    "Touch the cable ends together first"
                ],
                correct: 2
            },
            {
                question: "Brake fluid is dangerous because it:",
                answers: [
                    "Is flammable and can damage paint",
                    "Is completely safe to handle",
                    "Only affects metal surfaces",
                    "Has no harmful effects"
                ],
                correct: 0
            },
            {
                question: "When using an engine hoist, you should:",
                answers: [
                    "Lift as fast as possible",
                    "Check weight limits and use proper lifting points",
                    "Never inspect the equipment",
                    "Work alone for efficiency"
                ],
                correct: 1
            },
            {
                question: "Power steering fluid under pressure can:",
                answers: [
                    "Cause serious injury if it penetrates skin",
                    "Be safely touched",
                    "Only stain clothing",
                    "Be used as a cleaning agent"
                ],
                correct: 0
            },
            {
                question: "When working with fuel injection systems, you should:",
                answers: [
                    "Ignore fuel pressure",
                    "Relieve fuel pressure before disconnecting lines",
                    "Work with the engine running",
                    "Use open flames nearby"
                ],
                correct: 1
            },
            {
                question: "Catalytic converters can reach temperatures of:",
                answers: [
                    "100°F (38°C)",
                    "200°F (93°C)",
                    "Over 1,000°F (538°C)",
                    "Room temperature"
                ],
                correct: 2
            },
            {
                question: "When using a trouble light, you should:",
                answers: [
                    "Use any household bulb",
                    "Use a properly insulated, low-voltage LED light",
                    "Use bare bulbs for better lighting",
                    "Use lights with damaged cords"
                ],
                correct: 1
            },
            {
                question: "Transmission fluid should be checked:",
                answers: [
                    "While the engine is off and cold",
                    "With the engine running and transmission warm",
                    "Only when problems occur",
                    "Never check transmission fluid"
                ],
                correct: 1
            },
            {
                question: "When removing an engine oil drain plug, you should:",
                answers: [
                    "Let the hot oil splash freely",
                    "Position a drain pan and allow for hot oil flow",
                    "Remove it as quickly as possible",
                    "Not worry about the oil temperature"
                ],
                correct: 1
            },
            {
                question: "Air conditioning refrigerant can:",
                answers: [
                    "Cause frostbite and should be handled by certified technicians",
                    "Be released into the atmosphere freely",
                    "Be safely touched with bare hands",
                    "Be mixed with other chemicals"
                ],
                correct: 0
            },
            {
                question: "When using a tire machine, you should:",
                answers: [
                    "Never use tire lubricant",
                    "Follow proper procedures and keep hands clear of pinch points",
                    "Work as fast as possible",
                    "Stand directly in front of the tire"
                ],
                correct: 1
            },
            {
                question: "Diesel fuel is dangerous because it:",
                answers: [
                    "Is completely safe",
                    "Can cause skin irritation and is a fire hazard",
                    "Is only dangerous when hot",
                    "Never causes any problems"
                ],
                correct: 1
            },
            {
                question: "Before working on any vehicle, you should:",
                answers: [
                    "Start working immediately",
                    "Identify potential hazards and plan your work",
                    "Assume everything is safe",
                    "Work as fast as possible"
                ],
                correct: 1
            }
        ]
    },
    5: {
        title: "Safety Test 5",
        questions: [
            {
                question: "If someone is using power equipment that has a safety zone painted on the floor around it, or even if there is no marked safety zone, you should:",
                answers: [
                    "Stand by the plug",
                    "Be sure the operator is also outside the safety zone",
                    "Stay at least 5 feet clear of the machine and outside the safety zone",
                    "Get as close as possible to observe the work"
                ],
                correct: 2
            },
            {
                question: "If you are using a machine and you have to leave it for any reason:",
                answers: [
                    "Turn it off",
                    "Warn everyone nearby that it is running",
                    "Make sure the guard is in place",
                    "Leave it running so others will know it is in use"
                ],
                correct: 0
            },
            {
                question: "If a piece of equipment doesn't work correctly, or it doesn't sound right, or if you can see there is something wrong with it:",
                answers: [
                    "Use it carefully",
                    "Use another machine",
                    "Try to fix it",
                    "Tell the instructor"
                ],
                correct: 3
            },
            {
                question: "When you lift something heavy from the floor, use the muscles in your:",
                answers: [
                    "Back",
                    "Arms",
                    "Shoulders",
                    "Legs"
                ],
                correct: 3
            },
            {
                question: "Something very large or heavy should be carried:",
                answers: [
                    "Slowly",
                    "By two or more people",
                    "With both hands",
                    "Carefully by yourself"
                ],
                correct: 1
            },
            {
                question: "Be sure you are standing on a dry floor when you are working with any electrical tools or equipment, because:",
                answers: [
                    "You might not conduct electricity",
                    "You may get a shock if you are standing on a wet surface",
                    "The equipment will not work if it's grounded",
                    "Electricity is flammable in water"
                ],
                correct: 1
            },
            {
                question: "Yanking on the cord to disconnect an electric plug may loosen the terminals in the plug and cause a short or a fire. The correct and safe way to disconnect a power line is to:",
                answers: [
                    "Use insulated pliers",
                    "Break the circuit",
                    "Grasp the plug and pull gently",
                    "Yank the cord gently"
                ],
                correct: 2
            },
            {
                question: "Keep electric cords out of the way so no one will trip over them. Also keep them away from water so they won't:",
                answers: [
                    "Get slippery",
                    "Short out or cause electrical shock",
                    "Get dirty",
                    "Be ruined"
                ],
                correct: 1
            },
            {
                question: "Frayed wiring, worn insulation or loose connections can cause:",
                answers: [
                    "Short-circuits, shocks, burns, or fire",
                    "Electricity to leak out",
                    "Spontaneous combustion",
                    "Dirt in the wires"
                ],
                correct: 0
            },
            {
                question: "Illness, headache, dizziness or nausea can keep you from paying full attention to what you're doing, and that could be dangerous. If you don't feel well:",
                answers: [
                    "Take a break",
                    "Tell the instructor",
                    "Take 2 aspirin",
                    "Keep your mind on the work"
                ],
                correct: 1
            },
            {
                question: "When using a welder, you should:",
                answers: [
                    "Look directly at the welding arc",
                    "Wear proper welding helmet, gloves, and protective clothing",
                    "Weld in poorly ventilated areas",
                    "Never check for gas leaks"
                ],
                correct: 1
            },
            {
                question: "Grinding sparks can travel up to:",
                answers: [
                    "2 feet",
                    "5 feet",
                    "35 feet or more",
                    "They don't travel far"
                ],
                correct: 2
            },
            {
                question: "When using an oxy-acetylene torch, you should:",
                answers: [
                    "Light the acetylene first, then add oxygen",
                    "Light the oxygen first, then add acetylene",
                    "Light both gases simultaneously",
                    "Use a cigarette lighter to ignite"
                ],
                correct: 0
            },
            {
                question: "Machine guards should:",
                answers: [
                    "Be removed for easier access",
                    "Always be in place during operation",
                    "Only be used by beginners",
                    "Be removed when working quickly"
                ],
                correct: 1
            },
            {
                question: "Before operating any machinery, you should:",
                answers: [
                    "Start it immediately",
                    "Read the manual and receive proper training",
                    "Ask another student to show you",
                    "Figure it out as you go"
                ],
                correct: 1
            },
            {
                question: "Loose clothing around rotating machinery can:",
                answers: [
                    "Get caught and cause serious injury",
                    "Help keep you warm",
                    "Make you look professional",
                    "Never cause problems"
                ],
                correct: 0
            },
            {
                question: "When working with solvents, you should:",
                answers: [
                    "Work in confined spaces",
                    "Use maximum amounts for better cleaning",
                    "Ensure adequate ventilation and wear appropriate PPE",
                    "Mix different solvents together"
                ],
                correct: 2
            },
            {
                question: "Extension cords in the shop should be:",
                answers: [
                    "Inspected regularly for damage",
                    "Left on the floor where people walk",
                    "Used even if damaged",
                    "Connected together indefinitely"
                ],
                correct: 0
            },
            {
                question: "When lifting heavy automotive parts, you should:",
                answers: [
                    "Lift alone to show your strength",
                    "Get help and use proper lifting equipment",
                    "Bend your back and lift quickly",
                    "Twist while lifting"
                ],
                correct: 1
            },
            {
                question: "Compressed air should never be:",
                answers: [
                    "Used to clean parts",
                    "Used to blow dirt off clothing or skin",
                    "Used with proper pressure regulators",
                    "Used in well-ventilated areas"
                ],
                correct: 1
            },
            {
                question: "When servicing air conditioning systems, you should:",
                answers: [
                    "Release refrigerant into the atmosphere",
                    "Use proper recovery equipment and be EPA certified",
                    "Work without protective equipment",
                    "Mix different types of refrigerant"
                ],
                correct: 1
            },
            {
                question: "Proper shop lighting is important because:",
                answers: [
                    "It looks professional",
                    "It prevents eye strain and reduces accidents",
                    "It uses more electricity",
                    "It makes the shop warmer"
                ],
                correct: 1
            },
            {
                question: "When working late or when tired, you should:",
                answers: [
                    "Use stimulants to stay alert",
                    "Work extra carefully and take frequent breaks",
                    "Work faster to finish quickly",
                    "Ignore safety procedures"
                ],
                correct: 1
            },
            {
                question: "Shop housekeeping is important for safety because:",
                answers: [
                    "It looks good to visitors",
                    "Clean areas prevent slips, trips, and falls",
                    "It's required by law only",
                    "It makes tools easier to lose"
                ],
                correct: 1
            },
            {
                question: "The most important aspect of automotive shop safety is:",
                answers: [
                    "Working as fast as possible",
                    "Having the newest equipment",
                    "Being constantly aware and following all safety procedures",
                    "Impressing other students"
                ],
                correct: 2
            }
        ]
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadTestLockSettings(); // Initialize test lock settings
    showSplashScreen();
});

function showSplashScreen() {
    const splashScreen = document.getElementById('splash-screen');
    const typewriterText = document.getElementById('typewriter-text');
    const text = 'BULLDOG GARAGE SAFETY TEST';
    
    splashScreen.style.display = 'flex';
    
    let i = 0;
    const typewriterInterval = setInterval(() => {
        typewriterText.textContent = text.substring(0, i + 1);
        i++;
        
        if (i >= text.length) {
            clearInterval(typewriterInterval);
            
            // Hide splash screen after 2 seconds of complete text
            setTimeout(() => {
                splashScreen.style.display = 'none';
                loadProgress();
                setupEventListeners();
            }, 2000);
        }
    }, 300); // Adjust speed of typing (300ms between characters)
}

function setupEventListeners() {
    // Student form submission
    document.getElementById('student-form').addEventListener('submit', function(e) {
        e.preventDefault();
        submitStudentForm();
    });
    
    // Admin login button
    document.getElementById('admin-login-btn').addEventListener('click', function() {
        showAdminLoginModal();
    });
    
    // Admin login form
    document.getElementById('admin-login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        submitAdminLogin();
    });
}

function submitStudentForm() {
    const form = document.getElementById('student-form');
    const formData = new FormData(form);
    
    studentData = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        studentId: formData.get('studentId')
    };
    
    // Save student data to localStorage
    localStorage.setItem('studentData', JSON.stringify(studentData));
    
    // Show test selection
    showSection('test-selection');
    updateTestMenu();
}

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    document.getElementById(sectionId).classList.add('active');
}

function startTest(testNumber) {
    // Check if tests are locked before proceeding
    if (!testsUnlocked) {
        showTestsLockedModal();
        return;
    }
    
    // Show loading screen first
    showTestLoadingScreen(() => {
        // This callback runs after loading is complete
        currentTest = testNumber;
        currentQuestion = 0;
        currentAnswers = [];
        shuffledQuestions = [];
        originalCorrectAnswers = [];
        
        const test = tests[testNumber];
        if (!test) {
            alert('This test is not yet available.');
            return;
        }
        
        // Create a shuffled copy of questions
        shuffledQuestions = shuffleArray(test.questions.map((q, index) => {
            // For each question, shuffle the answers and update correct answer indices
            const shuffledAnswers = [...q.answers];
            const answerMapping = shuffledAnswers.map((_, i) => i);
            
            // Shuffle answer mapping
            for (let i = answerMapping.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [answerMapping[i], answerMapping[j]] = [answerMapping[j], answerMapping[i]];
            }
            
            // Apply shuffling to answers
            const newAnswers = answerMapping.map(i => q.answers[i]);
            
            // Update correct answer indices based on new positions
            let newCorrect;
            if (q.multiple) {
                newCorrect = q.correct.map(oldIndex => answerMapping.indexOf(oldIndex));
            } else {
                newCorrect = answerMapping.indexOf(q.correct);
            }
            
            return {
                ...q,
                answers: newAnswers,
                correct: newCorrect,
                originalIndex: index
            };
        }));
        
        // Shuffle the questions themselves
        shuffledQuestions = shuffleArray(shuffledQuestions);
        
        // Store the original correct answers for scoring
        originalCorrectAnswers = new Array(shuffledQuestions.length);
        
        document.getElementById('quiz-title').textContent = test.title;
        showSection('quiz');
        displayQuestion();
    });
}

function displayQuestion() {
    const question = shuffledQuestions[currentQuestion];
    
    document.getElementById('question-number').textContent = 
        `Question ${currentQuestion + 1} of ${shuffledQuestions.length}`;
    document.getElementById('question-text').textContent = question.question;
    
    // Update progress bar
    const progress = ((currentQuestion) / shuffledQuestions.length) * 100;
    document.getElementById('progress').style.width = progress + '%';
    
    // Create answer options
    const answersContainer = document.getElementById('answers');
    answersContainer.innerHTML = '';
    
    question.answers.forEach((answer, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'answer-option';
        
        const inputType = question.multiple ? 'checkbox' : 'radio';
        
        answerDiv.innerHTML = `
            <input type="${inputType}" id="answer-${index}" name="question-${currentQuestion}" value="${index}">
            <label for="answer-${index}">${answer}</label>
        `;
        
        answerDiv.addEventListener('click', function() {
            const input = answerDiv.querySelector('input');
            if (inputType === 'radio') {
                // Clear other selections for radio buttons
                document.querySelectorAll('.answer-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                input.checked = true;
                answerDiv.classList.add('selected');
            } else {
                // Toggle selection for checkboxes
                input.checked = !input.checked;
                answerDiv.classList.toggle('selected', input.checked);
            }
        });
        
        answersContainer.appendChild(answerDiv);
    });
    
    // Show/hide buttons
    if (currentQuestion === shuffledQuestions.length - 1) {
        document.getElementById('next-btn').style.display = 'none';
        document.getElementById('submit-btn').style.display = 'block';
    } else {
        document.getElementById('next-btn').style.display = 'block';
        document.getElementById('submit-btn').style.display = 'none';
    }
}

function nextQuestion() {
    // Save current answer
    saveCurrentAnswer();
    
    currentQuestion++;
    displayQuestion();
}

function saveCurrentAnswer() {
    if (!shuffledQuestions || currentQuestion >= shuffledQuestions.length) {
        return; // Invalid question index
    }
    
    const question = shuffledQuestions[currentQuestion];
    
    if (question.multiple) {
        // Multiple choice question
        const selected = [];
        document.querySelectorAll(`input[name="question-${currentQuestion}"]:checked`).forEach(input => {
            selected.push(parseInt(input.value));
        });
        currentAnswers[currentQuestion] = selected;
    } else {
        // Single choice question
        const selected = document.querySelector(`input[name="question-${currentQuestion}"]:checked`);
        currentAnswers[currentQuestion] = selected ? parseInt(selected.value) : null;
    }
}

function submitTest() {
    // Save the last answer
    saveCurrentAnswer();
    
    // Calculate score using shuffled questions
    let correct = 0;
    
    for (let i = 0; i < shuffledQuestions.length; i++) {
        const question = shuffledQuestions[i];
        const userAnswer = currentAnswers[i];
        
        if (question.multiple) {
            // Check if arrays are equal
            const correctAnswers = question.correct.sort();
            const userAnswers = (userAnswer || []).sort();
            if (JSON.stringify(correctAnswers) === JSON.stringify(userAnswers)) {
                correct++;
            }
        } else {
            if (userAnswer === question.correct) {
                correct++;
            }
        }
    }
    
    const percentage = Math.round((correct / shuffledQuestions.length) * 100);
    
    // Save test result
    if (!testData.results) testData.results = {};
    testData.results[currentTest] = {
        score: percentage,
        passed: percentage === 100,
        date: new Date().toISOString()
    };
    
    localStorage.setItem('testData', JSON.stringify(testData));
    
    // Show completion modal first
    showCompletionModal(percentage);
}

function showCompletionModal(percentage) {
    // Create and show completion modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'completion-modal';
    modal.style.display = 'block';
    
    // Create different button sets based on score
    const buttonHTML = percentage === 100 
        ? `<button class="btn-primary" onclick="closeCompletionModal(${percentage})">Continue</button>`
        : `
            <div class="modal-buttons">
                <button class="btn-secondary" onclick="closeCompletionModal(${percentage})">Continue</button>
                <button class="btn-retake" onclick="retakeQuiz()">Retake Quiz</button>
            </div>
          `;
    
    modal.innerHTML = `
        <div class="modal-content">
            <h3>Test Completed!</h3>
            <p>Your score: ${percentage}%</p>
            <p>${percentage === 100 ? 'Congratulations! You passed!' : 'You need 100% to pass. Please try again.'}</p>
            ${buttonHTML}
        </div>
    `;
    
    document.body.appendChild(modal);
}

function closeCompletionModal(percentage) {
    const modal = document.getElementById('completion-modal');
    if (modal) {
        modal.remove();
    }
    
    // Show results after modal is closed
    showResults(percentage);
}

function retakeQuiz() {
    // Check if tests are locked before allowing retake
    if (!testsUnlocked) {
        // Close the completion modal first
        const modal = document.getElementById('completion-modal');
        if (modal) {
            modal.remove();
        }
        showTestsLockedModal();
        return;
    }
    
    // Close the completion modal
    const modal = document.getElementById('completion-modal');
    if (modal) {
        modal.remove();
    }
    
    // Restart the current test
    startTest(currentTest);
}

function showResults(percentage) {
    document.getElementById('final-score').textContent = `Your Score: ${percentage}%`;
    
    // Create pie chart (simple fallback if Chart.js fails)
    const ctx = document.getElementById('score-chart').getContext('2d');
    
    if (typeof Chart !== 'undefined') {
        // Use Chart.js if available
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Correct', 'Incorrect'],
                datasets: [{
                    data: [percentage, 100 - percentage],
                    backgroundColor: ['#4CAF50', '#f44336'],
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: {
                            color: '#ffffff'
                        }
                    }
                }
            }
        });
    } else {
        // Fallback to simple canvas drawing
        const canvas = document.getElementById('score-chart');
        canvas.width = 300;
        canvas.height = 300;
        
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 100;
        
        // Draw correct percentage
        const correctAngle = (percentage / 100) * 2 * Math.PI;
        ctx.fillStyle = '#4CAF50';
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, -Math.PI / 2, -Math.PI / 2 + correctAngle);
        ctx.closePath();
        ctx.fill();
        
        // Draw incorrect percentage
        ctx.fillStyle = '#f44336';
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, -Math.PI / 2 + correctAngle, -Math.PI / 2 + 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
        
        // Add labels
        ctx.fillStyle = '#ffffff';
        ctx.font = '16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`Correct: ${percentage}%`, centerX, centerY + 150);
        ctx.fillText(`Incorrect: ${100 - percentage}%`, centerX, centerY + 170);
    }
    
    showSection('results');
}

function backToMenu() {
    showSection('test-selection');
    updateTestMenu();
}

function updateTestMenu() {
    // Update test scores display
    for (let i = 1; i <= 5; i++) {
        const scoreElement = document.getElementById(`score-${i}`);
        if (testData.results && testData.results[i]) {
            const result = testData.results[i];
            scoreElement.textContent = `${result.score}%`;
            scoreElement.className = result.passed ? 'test-score passed' : 'test-score failed';
        } else {
            scoreElement.textContent = 'Not taken';
            scoreElement.className = 'test-score';
        }
    }
    
    // Check if all tests are passed
    checkAllTestsPassed();
}

function checkAllTestsPassed() {
    if (!testData.results) return;
    
    let allPassed = true;
    for (let i = 1; i <= 5; i++) {
        if (!testData.results[i] || !testData.results[i].passed) {
            allPassed = false;
            break;
        }
    }
    
    const certificateSection = document.getElementById('certificate-section');
    if (allPassed) {
        certificateSection.style.display = 'block';
    } else {
        certificateSection.style.display = 'none';
    }
}

function triggerConfetti() {
    // Create confetti animation function
    const createConfetti = () => {
        const confettiContainer = document.createElement('div');
        confettiContainer.id = 'confetti-container';
        confettiContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 9999;
            overflow: hidden;
        `;
        document.body.appendChild(confettiContainer);

        // Colors for confetti
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#6c5ce7', '#fd79a8', '#00b894'];
        
        // Create ridiculous amount of confetti pieces
        for (let i = 0; i < 200; i++) {
            const confettiPiece = document.createElement('div');
            const color = colors[Math.floor(Math.random() * colors.length)];
            const size = Math.random() * 8 + 4; // 4-12px
            const startX = Math.random() < 0.5 ? -10 : window.innerWidth + 10; // Start from sides
            const endX = Math.random() * window.innerWidth;
            const animationDuration = Math.random() * 3 + 2; // 2-5 seconds
            const delay = Math.random() * 1; // 0-1 second delay
            
            confettiPiece.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background-color: ${color};
                top: -10px;
                left: ${startX}px;
                animation: confetti-fall-${i} ${animationDuration}s linear ${delay}s forwards;
                transform: rotate(${Math.random() * 360}deg);
            `;
            
            // Create unique keyframe animation for each piece
            const keyframes = `
                @keyframes confetti-fall-${i} {
                    0% { 
                        transform: translateY(-10px) translateX(0px) rotate(0deg) scale(1);
                        opacity: 1;
                    }
                    50% {
                        transform: translateY(${window.innerHeight / 2}px) translateX(${(endX - startX) / 2}px) rotate(${Math.random() * 720}deg) scale(${Math.random() * 0.8 + 0.6});
                        opacity: 1;
                    }
                    100% { 
                        transform: translateY(${window.innerHeight + 20}px) translateX(${endX - startX}px) rotate(${Math.random() * 1080}deg) scale(0.3);
                        opacity: 0;
                    }
                }
            `;
            
            // Add keyframes to document
            const style = document.createElement('style');
            style.textContent = keyframes;
            document.head.appendChild(style);
            
            confettiContainer.appendChild(confettiPiece);
        }
        
        // Remove confetti after animation completes
        setTimeout(() => {
            if (confettiContainer.parentNode) {
                confettiContainer.parentNode.removeChild(confettiContainer);
            }
            // Clean up styles
            document.querySelectorAll('style').forEach(style => {
                if (style.textContent.includes('confetti-fall-')) {
                    style.remove();
                }
            });
        }, 6000);
    };
    
    createConfetti();
}

function viewCertificate() {
    generateCertificate();
    showSection('certificate');
    showWarningModal();
    
    // Check if this is the first time viewing the certificate
    const hasViewedCertificate = localStorage.getItem('hasViewedCertificate');
    if (!hasViewedCertificate) {
        // Mark as viewed and trigger confetti
        localStorage.setItem('hasViewedCertificate', 'true');
        triggerConfetti();
    }
}

// Add event listener for certificate button
document.getElementById('view-certificate-btn').addEventListener('click', viewCertificate);

function showWarningModal() {
    document.getElementById('warning-modal').style.display = 'block';
}

function closeWarningModal() {
    document.getElementById('warning-modal').style.display = 'none';
}

function generateCertificate() {
    const canvas = document.getElementById('certificate-canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = 800;
    canvas.height = 600;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add watermarks
    addWatermarks(ctx, canvas.width, canvas.height);
    
    // Border
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 8;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);
    
    // Inner border
    ctx.strokeStyle = '#8b7355';
    ctx.lineWidth = 2;
    ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);
    
    // Title
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 36px serif';
    ctx.textAlign = 'center';
    ctx.fillText('CERTIFICATE OF COMPLETION', canvas.width / 2, 120);
    
    // Decorative line
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(200, 140);
    ctx.lineTo(600, 140);
    ctx.stroke();
    
    // Main text
    ctx.font = '20px serif';
    ctx.fillStyle = '#000000';
    ctx.fillText('This certificate hereby confirms that', canvas.width / 2, 200);
    
    // Student name in fancy cursive/calligraphy with student ID
    ctx.font = 'italic 32px cursive';
    ctx.fillStyle = '#2c3e50';
    const studentNameText = `${studentData.firstName} ${studentData.lastName} #${studentData.studentId}`;
    ctx.fillText(studentNameText, canvas.width / 2, 250);
    
    // Continue with rest of text
    ctx.font = '20px serif';
    ctx.fillStyle = '#000000';
    ctx.fillText('has successfully passed the Bulldog Garage Safety Test', canvas.width / 2, 290);
    ctx.fillText('with 100% accuracy.', canvas.width / 2, 330);
    
    // Email
    ctx.font = '16px serif';
    ctx.fillText(studentData.email, canvas.width / 2, 420);
    
    // Date (Los Angeles timezone)
    const now = new Date();
    const losAngelesTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Los_Angeles"}));
    const dateStr = losAngelesTime.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    ctx.textAlign = 'right';
    ctx.fillText(dateStr, canvas.width - 60, canvas.height - 60);
    
    // Signature section
    ctx.textAlign = 'left';
    ctx.font = '14px serif';
    ctx.fillText('By issuance of this certificate, I hereby acknowledge', 60, canvas.height - 140);
    ctx.fillText('this student has satisfied the requirements for the Safety Test.', 60, canvas.height - 120);
    
    // Signature line
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(60, canvas.height - 80);
    ctx.lineTo(260, canvas.height - 80);
    ctx.stroke();
    
    // Signature
    ctx.font = 'italic 24px cursive';
    ctx.fillStyle = '#000080';
    ctx.fillText('JT', 140, canvas.height - 85);
    
    // Circle around signature
    ctx.strokeStyle = '#000080';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(150, canvas.height - 90, 25, 0, 2 * Math.PI);
    ctx.stroke();
    
    // Name under signature
    ctx.font = '12px serif';
    ctx.fillStyle = '#000000';
    ctx.fillText('Mr. Thomson - Instructor, Bulldog Garage', 60, canvas.height - 50);
}

function addWatermarks(ctx, width, height) {
    ctx.save();
    ctx.globalAlpha = 0.25; // More visible watermark
    ctx.fillStyle = '#cccccc';
    ctx.font = 'bold 48px serif'; // Much bigger font
    ctx.textAlign = 'center';
    
    // Strategic watermarks overlaying critical student information areas
    const watermarkText = 'BULLDOG GARAGE SAFETY';
    const positions = [
        // Over student name area (y=250)
        {x: width * 0.5, y: 250, rotation: -Math.PI / 8},
        // Over email area (y=420) 
        {x: width * 0.5, y: 420, rotation: Math.PI / 8},
        // Additional coverage over student ID area
        {x: width * 0.3, y: 280, rotation: -Math.PI / 6},
        {x: width * 0.7, y: 280, rotation: Math.PI / 6},
        // Background coverage
        {x: width * 0.5, y: height * 0.6, rotation: 0}
    ];
    
    positions.forEach(pos => {
        ctx.save();
        ctx.translate(pos.x, pos.y);
        ctx.rotate(pos.rotation);
        ctx.fillText(watermarkText, 0, 0);
        ctx.restore();
    });
    
    ctx.restore();
}

function drawSeal(ctx, x, y) {
    const radius = 60;
    
    // Create a realistic gold seal with proper metallic lighting and shadows
    
    // Multiple shadow layers for depth
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.beginPath();
    ctx.arc(x + 4, y + 4, radius, 0, 2 * Math.PI);
    ctx.fill();
    
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.beginPath();
    ctx.arc(x + 2, y + 2, radius, 0, 2 * Math.PI);
    ctx.fill();
    
    // Create gradient effect for metallic look
    const gradient = ctx.createRadialGradient(x - 20, y - 20, 0, x, y, radius);
    gradient.addColorStop(0, '#ffd700');
    gradient.addColorStop(0.3, '#d4af37');
    gradient.addColorStop(0.6, '#b8860b');
    gradient.addColorStop(1, '#8b6914');
    
    // Main seal circle
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
    
    // Add metallic rim with highlights
    ctx.strokeStyle = '#8b6914';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(x, y, radius - 2, 0, 2 * Math.PI);
    ctx.stroke();
    
    // Inner raised rim with highlight
    const innerGradient = ctx.createRadialGradient(x - 15, y - 15, 0, x, y, radius - 10);
    innerGradient.addColorStop(0, '#fff700');
    innerGradient.addColorStop(0.5, '#ffd700');
    innerGradient.addColorStop(1, '#d4af37');
    
    ctx.fillStyle = innerGradient;
    ctx.beginPath();
    ctx.arc(x, y, radius - 10, 0, 2 * Math.PI);
    ctx.fill();
    
    // Central pressed area with realistic depression
    const centralGradient = ctx.createRadialGradient(x, y, 0, x, y, radius - 18);
    centralGradient.addColorStop(0, '#b8860b');
    centralGradient.addColorStop(0.8, '#d4af37');
    centralGradient.addColorStop(1, '#ffd700');
    
    ctx.fillStyle = centralGradient;
    ctx.beginPath();
    ctx.arc(x, y, radius - 18, 0, 2 * Math.PI);
    ctx.fill();
    
    // Add embossed ridges around the rim for texture
    ctx.strokeStyle = '#8b6914';
    ctx.lineWidth = 1.5;
    for (let angle = 0; angle < 2 * Math.PI; angle += Math.PI / 16) {
        const startRadius = radius - 8;
        const endRadius = radius - 3;
        const startX = x + Math.cos(angle) * startRadius;
        const startY = y + Math.sin(angle) * startRadius;
        const endX = x + Math.cos(angle) * endRadius;
        const endY = y + Math.sin(angle) * endRadius;
        
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
    }
    
    // Central text with embossed effect
    ctx.fillStyle = '#654321';
    ctx.font = 'bold 11px serif';
    ctx.textAlign = 'center';
    ctx.fillText('BULLDOG', x + 1, y - 7);
    ctx.fillText('GARAGE', x + 1, y + 9);
    
    // Highlight on text for embossed look
    ctx.fillStyle = '#fff4e6';
    ctx.fillText('BULLDOG', x - 0.5, y - 8);
    ctx.fillText('GARAGE', x - 0.5, y + 8);
    
    // Add decorative elements
    ctx.fillStyle = '#8b6914';
    const starPositions = [
        {x: x - 28, y: y - 18},
        {x: x + 28, y: y - 18},
        {x: x - 28, y: y + 22},
        {x: x + 28, y: y + 22}
    ];
    
    starPositions.forEach(star => {
        drawStar(ctx, star.x, star.y, 5, 3, 1.5);
    });
    
    // Outer text ring with shadow
    ctx.fillStyle = '#4a4a4a';
    ctx.font = 'bold 7px serif';
    ctx.textAlign = 'center';
    ctx.fillText('HEMET HIGH SCHOOL', x + 0.5, y + 36);
    ctx.fillText('OFFICIAL SEAL', x + 0.5, y + 46);
    
    // Highlight on outer text
    ctx.fillStyle = '#2c2c2c';
    ctx.fillText('HEMET HIGH SCHOOL', x, y + 35);
    ctx.fillText('OFFICIAL SEAL', x, y + 45);
    
    // Add realistic highlight for 3D metallic effect
    const highlightGradient = ctx.createRadialGradient(x - 20, y - 20, 0, x - 10, y - 10, radius - 10);
    highlightGradient.addColorStop(0, 'rgba(255, 255, 255, 0.6)');
    highlightGradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.3)');
    highlightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    
    ctx.fillStyle = highlightGradient;
    ctx.beginPath();
    ctx.arc(x - 15, y - 15, radius - 15, 0, Math.PI * 1.5);
    ctx.fill();
}

// Helper function to draw a star
function drawStar(ctx, x, y, spikes, outerRadius, innerRadius) {
    let rot = Math.PI / 2 * 3;
    let step = Math.PI / spikes;
    
    ctx.beginPath();
    ctx.moveTo(x, y - outerRadius);
    
    for (let i = 0; i < spikes; i++) {
        let x1 = x + Math.cos(rot) * outerRadius;
        let y1 = y + Math.sin(rot) * outerRadius;
        ctx.lineTo(x1, y1);
        rot += step;
        
        x1 = x + Math.cos(rot) * innerRadius;
        y1 = y + Math.sin(rot) * innerRadius;
        ctx.lineTo(x1, y1);
        rot += step;
    }
    
    ctx.lineTo(x, y - outerRadius);
    ctx.closePath();
    ctx.fill();
}

function downloadCertificate() {
    const canvas = document.getElementById('certificate-canvas');
    const link = document.createElement('a');
    link.download = `${studentData.firstName}_${studentData.lastName}_Safety_Certificate.png`;
    link.href = canvas.toDataURL();
    link.click();
}

function loadProgress() {
    // Load student data
    const savedStudentData = localStorage.getItem('studentData');
    if (savedStudentData) {
        studentData = JSON.parse(savedStudentData);
        // If student data exists, skip to test selection
        showSection('test-selection');
    }
    
    // Load test data
    const savedTestData = localStorage.getItem('testData');
    if (savedTestData) {
        testData = JSON.parse(savedTestData);
    }
    
    updateTestMenu();
}

// Prevent cheating measures
document.addEventListener('keydown', function(e) {
    // Disable F12, Ctrl+Shift+I, Ctrl+U
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.key === 'u')) {
        e.preventDefault();
        return false;
    }
});

// Disable right-click context menu
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});

// Admin functionality
let isAdminLoggedIn = false;

function showAdminLoginModal() {
    document.getElementById('admin-login-modal').style.display = 'block';
}

function closeAdminLoginModal() {
    document.getElementById('admin-login-modal').style.display = 'none';
    document.getElementById('admin-login-form').reset();
}

function submitAdminLogin() {
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;
    
    if (username === 'Thomson' && password === 'Bulldog!1') {
        isAdminLoggedIn = true;
        closeAdminLoginModal();
        showSection('admin-dashboard');
        loadTestQuestions();
        loadTestLockSettings(); // Load test lock settings when admin logs in
    } else {
        alert('Invalid credentials. Please try again.');
        document.getElementById('admin-password').value = '';
    }
}

function logoutAdmin() {
    isAdminLoggedIn = false;
    showSection('registration');
}

function showAdminTab(tabName) {
    // Hide all tab contents
    document.querySelectorAll('.admin-tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab content
    document.getElementById(`admin-${tabName}`).classList.add('active');
    
    // Add active class to clicked tab button
    event.target.classList.add('active');
    
    if (tabName === 'questions') {
        loadTestQuestions();
    } else if (tabName === 'settings') {
        loadTestLockSettings();
    }
}

function loadTestQuestions() {
    const selectedTest = document.getElementById('admin-test-select').value;
    const questionsList = document.getElementById('questions-list');
    
    if (!tests[selectedTest]) return;
    
    questionsList.innerHTML = '';
    
    tests[selectedTest].questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-item';
        questionDiv.innerHTML = `
            <h4>Question ${index + 1}</h4>
            <p><strong>${question.question}</strong></p>
            <div class="answers">
                ${question.answers.map((answer, ansIndex) => `
                    <div class="answer ${ansIndex === question.correct ? 'correct' : ''}">
                        ${ansIndex === question.correct ? '✓ ' : ''}${answer}
                    </div>
                `).join('')}
            </div>
            <div class="question-actions">
                <button class="btn-edit" onclick="editQuestion(${selectedTest}, ${index})">Edit</button>
                <button class="btn-delete" onclick="deleteQuestion(${selectedTest}, ${index})">Delete</button>
            </div>
        `;
        questionsList.appendChild(questionDiv);
    });
}

function editQuestion(testNum, questionIndex) {
    // For this implementation, we'll just show an alert
    // In a full implementation, this would open an edit form
    const question = tests[testNum].questions[questionIndex];
    const newQuestion = prompt('Edit question:', question.question);
    
    if (newQuestion && newQuestion.trim()) {
        tests[testNum].questions[questionIndex].question = newQuestion.trim();
        loadTestQuestions();
        alert('Question updated successfully!');
    }
}

function deleteQuestion(testNum, questionIndex) {
    if (confirm('Are you sure you want to delete this question?')) {
        tests[testNum].questions.splice(questionIndex, 1);
        loadTestQuestions();
        alert('Question deleted successfully!');
    }
}

function addNewQuestion() {
    const selectedTest = document.getElementById('admin-test-select').value;
    const question = prompt('Enter new question:');
    
    if (question && question.trim()) {
        const answers = [];
        for (let i = 0; i < 4; i++) {
            const answer = prompt(`Enter answer ${i + 1}:`);
            if (answer && answer.trim()) {
                answers.push(answer.trim());
            } else {
                alert('All 4 answers are required.');
                return;
            }
        }
        
        const correctIndex = parseInt(prompt('Enter the number of the correct answer (1-4):')) - 1;
        
        if (correctIndex >= 0 && correctIndex < 4) {
            tests[selectedTest].questions.push({
                question: question.trim(),
                answers: answers,
                correct: correctIndex
            });
            loadTestQuestions();
            alert('Question added successfully!');
        } else {
            alert('Invalid correct answer number.');
        }
    }
}

function viewExampleCertificate() {
    const canvas = document.getElementById('admin-certificate-canvas');
    const ctx = canvas.getContext('2d');
    
    // Save current student data
    const originalStudentData = { ...studentData };
    
    // Set example data
    studentData = {
        firstName: 'Bulldog',
        lastName: 'Garage',
        email: 'jthomson@hemetusd.org',
        studentId: '123456'
    };
    
    // Generate certificate with example data
    generateCertificateOnCanvas(ctx, canvas);
    
    // Restore original student data
    studentData = originalStudentData;
}

function generateCertificateOnCanvas(ctx, canvas) {
    // Set canvas size
    canvas.width = 800;
    canvas.height = 600;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add watermarks
    addWatermarks(ctx, canvas.width, canvas.height);
    
    // Border
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 8;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);
    
    // Inner border
    ctx.strokeStyle = '#8b7355';
    ctx.lineWidth = 2;
    ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);
    
    // Title
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 36px serif';
    ctx.textAlign = 'center';
    ctx.fillText('CERTIFICATE OF COMPLETION', canvas.width / 2, 120);
    
    // Decorative line
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(200, 140);
    ctx.lineTo(600, 140);
    ctx.stroke();
    
    // Main text
    ctx.font = '20px serif';
    ctx.fillStyle = '#000000';
    ctx.fillText('This certificate hereby confirms that', canvas.width / 2, 200);
    
    // Student name in fancy cursive/calligraphy with student ID
    ctx.font = 'italic 32px cursive';
    ctx.fillStyle = '#2c3e50';
    const studentNameText = `${studentData.firstName} ${studentData.lastName} #${studentData.studentId}`;
    ctx.fillText(studentNameText, canvas.width / 2, 250);
    
    // Continue with rest of text
    ctx.font = '20px serif';
    ctx.fillStyle = '#000000';
    ctx.fillText('has successfully passed the Bulldog Garage Safety Test', canvas.width / 2, 290);
    ctx.fillText('with 100% accuracy.', canvas.width / 2, 330);
    
    // Email
    ctx.font = '16px serif';
    ctx.fillText(studentData.email, canvas.width / 2, 420);
    
    // Date (Los Angeles timezone)
    const now = new Date();
    const losAngelesTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Los_Angeles"}));
    const dateStr = losAngelesTime.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    ctx.textAlign = 'right';
    ctx.fillText(dateStr, canvas.width - 60, canvas.height - 60);
    
    // Signature section
    ctx.textAlign = 'left';
    ctx.font = '14px serif';
    ctx.fillText('By issuance of this certificate, I hereby acknowledge', 60, canvas.height - 140);
    ctx.fillText('this student has satisfied the requirements for the Safety Test.', 60, canvas.height - 120);
    
    // Signature line
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(60, canvas.height - 80);
    ctx.lineTo(260, canvas.height - 80);
    ctx.stroke();
    
    // Signature
    ctx.font = 'italic 24px cursive';
    ctx.fillStyle = '#000080';
    ctx.fillText('JT', 140, canvas.height - 85);
    
    // Circle around signature
    ctx.strokeStyle = '#000080';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(150, canvas.height - 90, 25, 0, 2 * Math.PI);
    ctx.stroke();
    
    // Name under signature
    ctx.font = '12px serif';
    ctx.fillStyle = '#000000';
    ctx.fillText('Mr. Thomson - Instructor, Bulldog Garage', 60, canvas.height - 50);
}

// Test lock functionality
function loadTestLockSettings() {
    const savedSettings = localStorage.getItem('testLockSettings');
    if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        testsUnlocked = settings.testsUnlocked !== false; // Default to true if not set
    }
    updateTestLockUI();
}

function saveTestLockSettings() {
    const settings = {
        testsUnlocked: testsUnlocked
    };
    localStorage.setItem('testLockSettings', JSON.stringify(settings));
}

function toggleTestAccess() {
    const toggle = document.getElementById('tests-unlocked-toggle');
    testsUnlocked = toggle.checked;
    updateTestLockUI();
    saveTestLockSettings();
}

function updateTestLockUI() {
    const toggle = document.getElementById('tests-unlocked-toggle');
    const statusText = document.getElementById('test-status-text');
    
    if (toggle) {
        toggle.checked = testsUnlocked;
    }
    
    if (statusText) {
        statusText.textContent = testsUnlocked ? 'Tests are UNLOCKED' : 'Tests are LOCKED';
        statusText.className = testsUnlocked ? 'status-text unlocked' : 'status-text locked';
    }
}

function showTestsLockedModal() {
    document.getElementById('tests-locked-modal').style.display = 'block';
}

function closeTestsLockedModal() {
    document.getElementById('tests-locked-modal').style.display = 'none';
}

// Detect if developer tools are open (basic detection)
let devtools = {open: false};
setInterval(function() {
    if (window.outerHeight - window.innerHeight > 200 || window.outerWidth - window.innerWidth > 200) {
        if (!devtools.open) {
            devtools.open = true;
            alert('Developer tools detected. Please close them to continue.');
        }
    } else {
        devtools.open = false;
    }
}, 500);

// Loading screen functionality
function showTestLoadingScreen(callback) {
    const loadingScreen = document.getElementById('test-loading-screen');
    const loadingBar = document.getElementById('loading-bar');
    const loadingPercentage = document.getElementById('loading-percentage');
    
    // Random duration between 5-12 seconds
    const duration = Math.random() * 7000 + 5000; // 5000ms + 0-7000ms = 5-12 seconds
    
    loadingScreen.style.display = 'flex';
    
    let startTime = Date.now();
    let currentPercentage = 0;
    
    const updateLoading = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        currentPercentage = Math.floor(progress * 100);
        
        loadingBar.style.width = currentPercentage + '%';
        loadingPercentage.textContent = currentPercentage + '%';
        
        if (progress < 1) {
            requestAnimationFrame(updateLoading);
        } else {
            // Loading complete
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                callback();
            }, 500); // Small delay to show 100%
        }
    };
    
    updateLoading();
}
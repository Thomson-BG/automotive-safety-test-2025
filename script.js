// Global variables
let currentTest = 1;
let currentQuestion = 0;
let studentData = {};
let testData = {};
let currentAnswers = [];
let shuffledQuestions = [];
let originalCorrectAnswers = [];

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
                    "Stay at least 5 feet clear of the machine and outside the safety zone"
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
            }
        ]
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadProgress();
    setupEventListeners();
});

function setupEventListeners() {
    // Student form submission
    document.getElementById('student-form').addEventListener('submit', function(e) {
        e.preventDefault();
        submitStudentForm();
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
    
    modal.innerHTML = `
        <div class="modal-content">
            <h3>Test Completed!</h3>
            <p>Your score: ${percentage}%</p>
            <p>${percentage === 100 ? 'Congratulations! You passed!' : 'You need 100% to pass. Please try again.'}</p>
            <button class="btn-primary" onclick="closeCompletionModal(${percentage})">Continue</button>
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

function viewCertificate() {
    generateCertificate();
    showSection('certificate');
    showWarningModal();
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
    const mainText = `This certificate hereby confirms that ${studentData.firstName} ${studentData.lastName} ${studentData.studentId}`;
    ctx.fillText(mainText, canvas.width / 2, 200);
    
    ctx.fillText('has successfully passed the Bulldog Garage Safety Test', canvas.width / 2, 240);
    ctx.fillText('with 100% accuracy.', canvas.width / 2, 280);
    
    // Email
    ctx.font = '16px serif';
    ctx.fillText(studentData.email, canvas.width / 2, 380);
    
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
    
    // Add seal
    drawSeal(ctx, canvas.width - 150, 320);
}

function addWatermarks(ctx, width, height) {
    ctx.save();
    ctx.globalAlpha = 0.15;
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 18px serif';
    ctx.textAlign = 'center';
    
    // Add multiple watermarks across the certificate, especially over text areas
    const watermarkText = 'BULLDOG GARAGE SAFETY';
    
    // Cover the main text area more densely
    for (let x = 80; x < width - 80; x += 120) {
        for (let y = 150; y < height - 100; y += 80) {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(-Math.PI / 8);
            ctx.fillText(watermarkText, 0, 0);
            ctx.restore();
        }
    }
    
    // Add extra watermarks over student name area
    for (let x = 200; x < 600; x += 100) {
        ctx.save();
        ctx.translate(x, 200);
        ctx.rotate(Math.PI / 12);
        ctx.fillText(watermarkText, 0, 0);
        ctx.restore();
    }
    
    // Add watermarks over email area
    for (let x = 200; x < 600; x += 110) {
        ctx.save();
        ctx.translate(x, 380);
        ctx.rotate(-Math.PI / 10);
        ctx.fillText(watermarkText, 0, 0);
        ctx.restore();
    }
    
    ctx.restore();
}

function drawSeal(ctx, x, y) {
    const radius = 60;
    
    // Outer circle (gold)
    ctx.fillStyle = '#d4af37';
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
    
    // Inner circle
    ctx.fillStyle = '#b8860b';
    ctx.beginPath();
    ctx.arc(x, y, radius - 8, 0, 2 * Math.PI);
    ctx.fill();
    
    // Inner gold circle
    ctx.fillStyle = '#ffd700';
    ctx.beginPath();
    ctx.arc(x, y, radius - 15, 0, 2 * Math.PI);
    ctx.fill();
    
    // Bulldog head (more detailed)
    // Head shape (brown/tan)
    ctx.fillStyle = '#8b4513';
    ctx.beginPath();
    ctx.ellipse(x, y - 3, 22, 20, 0, 0, 2 * Math.PI);
    ctx.fill();
    
    // Muzzle (lighter brown)
    ctx.fillStyle = '#a0522d';
    ctx.beginPath();
    ctx.ellipse(x, y + 8, 18, 12, 0, 0, 2 * Math.PI);
    ctx.fill();
    
    // Ears (darker brown)
    ctx.fillStyle = '#654321';
    ctx.beginPath();
    // Left ear
    ctx.ellipse(x - 18, y - 15, 8, 12, -0.3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    // Right ear  
    ctx.ellipse(x + 18, y - 15, 8, 12, 0.3, 0, 2 * Math.PI);
    ctx.fill();
    
    // Eyes (white background)
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.ellipse(x - 8, y - 8, 4, 5, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(x + 8, y - 8, 4, 5, 0, 0, 2 * Math.PI);
    ctx.fill();
    
    // Eye pupils
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(x - 8, y - 8, 2.5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x + 8, y - 8, 2.5, 0, 2 * Math.PI);
    ctx.fill();
    
    // Eye highlights
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(x - 7, y - 9, 1, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x + 9, y - 9, 1, 0, 2 * Math.PI);
    ctx.fill();
    
    // Nose (black)
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.ellipse(x, y + 2, 3, 2, 0, 0, 2 * Math.PI);
    ctx.fill();
    
    // Mouth
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y + 4, 6, 0.2, Math.PI - 0.2);
    ctx.stroke();
    
    // Wrinkles on forehead
    ctx.strokeStyle = '#654321';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x - 10, y - 15);
    ctx.quadraticCurveTo(x, y - 18, x + 10, y - 15);
    ctx.stroke();
    
    // Text around seal
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 8px serif';
    ctx.textAlign = 'center';
    ctx.fillText('HEMET HIGH SCHOOL', x, y + 35);
    ctx.fillText('OFFICIAL SEAL', x, y + 44);
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
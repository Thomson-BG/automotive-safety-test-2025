// Global variables
let currentTest = 1;
let currentQuestion = 0;
let studentData = {};
let testData = {};
let currentAnswers = [];

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
                question: "Placeholder question for Safety Test 3 - Question 1",
                answers: ["Option A", "Option B", "Option C", "Option D"],
                correct: 0
            },
            {
                question: "Placeholder question for Safety Test 3 - Question 2",
                answers: ["Option A", "Option B", "Option C", "Option D"],
                correct: 1
            },
            {
                question: "Placeholder question for Safety Test 3 - Question 3",
                answers: ["Option A", "Option B", "Option C", "Option D"],
                correct: 2
            },
            {
                question: "Placeholder question for Safety Test 3 - Question 4",
                answers: ["Option A", "Option B", "Option C", "Option D"],
                correct: 3
            },
            {
                question: "Placeholder question for Safety Test 3 - Question 5",
                answers: ["Option A", "Option B", "Option C", "Option D"],
                correct: 0
            },
            {
                question: "Placeholder question for Safety Test 3 - Question 6",
                answers: ["Option A", "Option B", "Option C", "Option D"],
                correct: 1
            },
            {
                question: "Placeholder question for Safety Test 3 - Question 7",
                answers: ["Option A", "Option B", "Option C", "Option D"],
                correct: 2
            },
            {
                question: "Placeholder question for Safety Test 3 - Question 8",
                answers: ["Option A", "Option B", "Option C", "Option D"],
                correct: 3
            },
            {
                question: "Placeholder question for Safety Test 3 - Question 9",
                answers: ["Option A", "Option B", "Option C", "Option D"],
                correct: 0
            },
            {
                question: "Placeholder question for Safety Test 3 - Question 10",
                answers: ["Option A", "Option B", "Option C", "Option D"],
                correct: 1
            }
        ]
    },
    4: {
        title: "Safety Test 4",
        questions: [
            {
                question: "Placeholder question for Safety Test 4 - Question 1",
                answers: ["Option A", "Option B", "Option C", "Option D"],
                correct: 0
            },
            {
                question: "Placeholder question for Safety Test 4 - Question 2",
                answers: ["Option A", "Option B", "Option C", "Option D"],
                correct: 1
            },
            {
                question: "Placeholder question for Safety Test 4 - Question 3",
                answers: ["Option A", "Option B", "Option C", "Option D"],
                correct: 2
            },
            {
                question: "Placeholder question for Safety Test 4 - Question 4",
                answers: ["Option A", "Option B", "Option C", "Option D"],
                correct: 3
            },
            {
                question: "Placeholder question for Safety Test 4 - Question 5",
                answers: ["Option A", "Option B", "Option C", "Option D"],
                correct: 0
            },
            {
                question: "Placeholder question for Safety Test 4 - Question 6",
                answers: ["Option A", "Option B", "Option C", "Option D"],
                correct: 1
            },
            {
                question: "Placeholder question for Safety Test 4 - Question 7",
                answers: ["Option A", "Option B", "Option C", "Option D"],
                correct: 2
            },
            {
                question: "Placeholder question for Safety Test 4 - Question 8",
                answers: ["Option A", "Option B", "Option C", "Option D"],
                correct: 3
            },
            {
                question: "Placeholder question for Safety Test 4 - Question 9",
                answers: ["Option A", "Option B", "Option C", "Option D"],
                correct: 0
            },
            {
                question: "Placeholder question for Safety Test 4 - Question 10",
                answers: ["Option A", "Option B", "Option C", "Option D"],
                correct: 1
            }
        ]
    },
    5: {
        title: "Safety Test 5",
        questions: [
            {
                question: "Placeholder question for Safety Test 5 - Question 1",
                answers: ["Option A", "Option B", "Option C", "Option D"],
                correct: 0
            },
            {
                question: "Placeholder question for Safety Test 5 - Question 2",
                answers: ["Option A", "Option B", "Option C", "Option D"],
                correct: 1
            },
            {
                question: "Placeholder question for Safety Test 5 - Question 3",
                answers: ["Option A", "Option B", "Option C", "Option D"],
                correct: 2
            },
            {
                question: "Placeholder question for Safety Test 5 - Question 4",
                answers: ["Option A", "Option B", "Option C", "Option D"],
                correct: 3
            },
            {
                question: "Placeholder question for Safety Test 5 - Question 5",
                answers: ["Option A", "Option B", "Option C", "Option D"],
                correct: 0
            },
            {
                question: "Placeholder question for Safety Test 5 - Question 6",
                answers: ["Option A", "Option B", "Option C", "Option D"],
                correct: 1
            },
            {
                question: "Placeholder question for Safety Test 5 - Question 7",
                answers: ["Option A", "Option B", "Option C", "Option D"],
                correct: 2
            },
            {
                question: "Placeholder question for Safety Test 5 - Question 8",
                answers: ["Option A", "Option B", "Option C", "Option D"],
                correct: 3
            },
            {
                question: "Placeholder question for Safety Test 5 - Question 9",
                answers: ["Option A", "Option B", "Option C", "Option D"],
                correct: 0
            },
            {
                question: "Placeholder question for Safety Test 5 - Question 10",
                answers: ["Option A", "Option B", "Option C", "Option D"],
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
    
    const test = tests[testNumber];
    if (!test) {
        alert('This test is not yet available.');
        return;
    }
    
    document.getElementById('quiz-title').textContent = test.title;
    showSection('quiz');
    displayQuestion();
}

function displayQuestion() {
    const test = tests[currentTest];
    const question = test.questions[currentQuestion];
    
    document.getElementById('question-number').textContent = 
        `Question ${currentQuestion + 1} of ${test.questions.length}`;
    document.getElementById('question-text').textContent = question.question;
    
    // Update progress bar
    const progress = ((currentQuestion) / test.questions.length) * 100;
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
    if (currentQuestion === test.questions.length - 1) {
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
    const test = tests[currentTest];
    if (!test || !test.questions || currentQuestion >= test.questions.length) {
        return; // Invalid question index
    }
    
    const question = test.questions[currentQuestion];
    
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
    
    // Calculate score
    const test = tests[currentTest];
    let correct = 0;
    
    for (let i = 0; i < test.questions.length; i++) {
        const question = test.questions[i];
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
    
    const percentage = Math.round((correct / test.questions.length) * 100);
    
    // Save test result
    if (!testData.results) testData.results = {};
    testData.results[currentTest] = {
        score: percentage,
        passed: percentage === 100,
        date: new Date().toISOString()
    };
    
    localStorage.setItem('testData', JSON.stringify(testData));
    
    // Show results
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
    ctx.globalAlpha = 0.1;
    ctx.fillStyle = '#000000';
    ctx.font = '20px serif';
    ctx.textAlign = 'center';
    
    // Add multiple watermarks across the certificate
    for (let x = 100; x < width; x += 150) {
        for (let y = 100; y < height; y += 100) {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(-Math.PI / 6);
            ctx.fillText('BULLDOG GARAGE', 0, 0);
            ctx.fillText('SAFETY TEST', 0, 25);
            ctx.restore();
        }
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
    ctx.arc(x, y, radius - 10, 0, 2 * Math.PI);
    ctx.fill();
    
    // Bulldog head (simplified)
    ctx.fillStyle = '#8b4513';
    ctx.beginPath();
    ctx.arc(x, y - 5, 25, 0, 2 * Math.PI);
    ctx.fill();
    
    // Eyes
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(x - 8, y - 10, 3, 0, 2 * Math.PI);
    ctx.arc(x + 8, y - 10, 3, 0, 2 * Math.PI);
    ctx.fill();
    
    // Nose
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, 2 * Math.PI);
    ctx.fill();
    
    // Text around seal
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 10px serif';
    ctx.textAlign = 'center';
    ctx.fillText('OFFICIAL', x, y + 35);
    ctx.fillText('SEAL', x, y + 45);
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
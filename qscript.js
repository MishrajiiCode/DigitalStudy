// Object containing quiz questions for each class
const classQuestions = {
    1: {
        set1: [
            { question: "What is 1 + 1?", answers: ["1", "2", "3", "4"], correct: 1 },
            { question: "What color is the sky?", answers: ["Green", "Blue", "Red", "Yellow"], correct: 1 },
            { question: "How many sides does a triangle have?", answers: ["2", "3", "4", "5"], correct: 1 },
            { question: "What is 5 - 2?", answers: ["2", "3", "4", "5"], correct: 1 },
            { question: "What shape is a wheel?", answers: ["Square", "Circle", "Triangle", "Rectangle"], correct: 1 },
        ],
        set2: [
            { question: "What is 3 + 2?", answers: ["4", "5", "6", "7"], correct: 1 },
            { question: "What is the opposite of hot?", answers: ["Cold", "Warm", "Hotter", "Cool"], correct: 0 },
            { question: "How many hours are in a day?", answers: ["12", "24", "36", "48"], correct: 1 },
            { question: "What is 10 - 7?", answers: ["1", "2", "3", "4"], correct: 2 },
            { question: "Which fruit is yellow?", answers: ["Apple", "Banana", "Grapes", "Orange"], correct: 1 },
        ],
        set3: [
            { question: "What is 2 + 3?", answers: ["1", "20", "5", "4"], correct:2},
            { question: "Which fruit is red?", answers: ["Apple", "Banana", "Grapes", "Orange"], correct:0},
            { question: "What color is the sky on a clear day??", answers: ["Green", "Red", "Blue", "yellow"], correct:2},
            { question: "Which animal says 'Moo'?", answers: ["Cow", "Dog", "Fish", "Lion"], correct:0},
            { question: "What is 5 - 1?", answers: ["4", "3", "5", "2"], correct:0},
        ],
        set4: [
            { question: "How many days are there in a week?", answers: ["5", "6", "7", "8"], correct:2},
            { question: "Which vehicle runs on tracks?", answers: ["Car", "Bus", "Train", "Bike"], correct:2},
            { question: "Which shape has three sides?", answers: ["Circle", "Triangle", "Square", "Rectangle"], correct:1},
            { question: "What do bees make?", answers: ["Milk", "Honey", "Butter", "Cheese"], correct:1},
            { question: "What is the color of grass?", answers: ["Blue", "Yellow", "Green", "Red"], correct:2},
        ],
        set5: [
            { question: "What is the first day of the week?", answers: ["Monday", "Sunday", "Friday", "Saturday"], correct:1},
            { question: "Which fruit is red?", answers: ["Apple", "Banana", "Grapes", "Orange"], correct:0},
            { question: "What do we drink that comes from cows?", answers: ["Water", "Milk", "Juice", "Tea"], correct:1},
            { question: "Which part of the plant is green and flat?", answers: ["Flower", "Leaf", "Stem", "Root"], correct:1},
            { question: "What is 3 + 2?", answers: ["4", "3", "5", "2"], correct:2},
        ],
    },
        2: {
            set1: [
                { question: "What is 10 + 5?", answers: ["10", "15", "20", "25"], correct: 1 },
                { question: "Which is the largest planet in our solar system?", answers: ["Earth", "Mars", "Jupiter", "Saturn"], correct: 2 },
                { question: "What is the opposite of 'Up'?", answers: ["Down", "Left", "Right", "Back"], correct: 0 },
                { question: "How many days are there in a week?", answers: ["5", "6", "7", "8"], correct: 2 },
                { question: "What is 20 - 5?", answers: ["10", "15", "20", "25"], correct: 1 },
            ],
            set2: [
                { question: "What is 12 ÷ 4?", answers: ["2", "3", "4", "6"], correct: 1 },
                { question: "Which animal is known as the 'King of the Jungle'?", answers: ["Elephant", "Lion", "Tiger", "Leopard"], correct: 1 },
                { question: "What is the color of grass?", answers: ["Blue", "Green", "Yellow", "Red"], correct: 1 },
                { question: "What is 8 + 7?", answers: ["14", "15", "16", "17"], correct: 1 },
                { question: "Which shape has four equal sides?", answers: ["Rectangle", "Square", "Circle", "Triangle"], correct: 1 },
            ],
            set3: [
                { question: "How many legs does a spider have?", answers: ["6", "8", "10", "12"], correct: 1 },
                { question: "What is the sum of 25 + 10?", answers: ["30", "35", "40", "45"], correct: 1 },
                { question: "What is 100 - 50?", answers: ["40", "50", "60", "70"], correct: 1 },
                { question: "What is the capital of India?", answers: ["Mumbai", "Delhi", "Chennai", "Kolkata"], correct: 1 },
                { question: "Which is the fastest land animal?", answers: ["Cheetah", "Tiger", "Lion", "Horse"], correct: 0 },
            ],
            set4: [
                { question: "Which number comes between 25 and 27?", answers: ["24", "26", "28", "29"], correct: 1 },
                { question: "If you have 2 apples and eat 1, how many are left?", answers: ["0", "1", "2", "3"], correct: 1 },
                { question: "What is the sum of 3 + 3 + 3?", answers: ["6", "9", "12", "15"], correct: 1 },
                { question: "Which is heavier, 1 kg of cotton or 1 kg of iron?", answers: ["Cotton", "Iron", "Same weight", "None"], correct: 2 },
                { question: "How many sides does a rectangle have?", answers: ["3", "4", "5", "6"], correct: 1 },
            ],
            set5: [
                { question: "Which month has 28 or 29 days?", answers: ["January", "February", "March", "April"], correct: 1 },
                { question: "If a train travels 10 km in 1 hour, how far will it travel in 3 hours?", answers: ["10 km", "20 km", "30 km", "40 km"], correct: 2 },
                { question: "What is 5 × 2?", answers: ["5", "10", "15", "20"], correct: 1 },
                { question: "What is the third letter in the word 'Elephant'?", answers: ["E", "L", "P", "H"], correct: 2 },
                { question: "If you mix blue and yellow, what color do you get?", answers: ["Green", "Orange", "Purple", "Red"], correct: 0 },
            ],
        },
            3: {
                set1: [
                    { question: "What is 25 + 36?", answers: ["51", "61", "59", "62"], correct: 1 },
                    { question: "Which planet is known as the 'Red Planet'?", answers: ["Venus", "Earth", "Mars", "Jupiter"], correct: 2 },
                    { question: "How many legs does a spider have?", answers: ["6", "8", "10", "12"], correct: 1 },
                    { question: "Which is the largest continent?", answers: ["Africa", "Asia", "Europe", "Antarctica"], correct: 1 },
                    { question: "What is the product of 8 × 7?", answers: ["54", "56", "64", "72"], correct: 1 },
                ],
                set2: [
                    { question: "What is 144 ÷ 12?", answers: ["11", "12", "13", "14"], correct: 1 },
                    { question: "What is the freezing point of water in Celsius?", answers: ["0°C", "32°C", "100°C", "-1°C"], correct: 0 },
                    { question: "Which gas do plants use to make food?", answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correct: 2 },
                    { question: "What is 5 × 9?", answers: ["35", "40", "45", "50"], correct: 2 },
                    { question: "Which bird cannot fly?", answers: ["Sparrow", "Penguin", "Peacock", "Crow"], correct: 1 },
                ],
                set3: [
                    { question: "How many minutes are there in 2.5 hours?", answers: ["120", "130", "150", "160"], correct: 2 },
                    { question: "What is 81 ÷ 9?", answers: ["8", "9", "10", "11"], correct: 1 },
                    { question: "Which is the largest mammal?", answers: ["Elephant", "Blue Whale", "Giraffe", "Shark"], correct: 1 },
                    { question: "How many months have 31 days?", answers: ["6", "7", "8", "9"], correct: 1 },
                    { question: "What is the capital of India?", answers: ["Mumbai", "Kolkata", "New Delhi", "Chennai"], correct: 2 },
                ],
                set4: [
                    { question: "What is the smallest 3-digit number?", answers: ["100", "101", "110", "111"], correct: 0 },
                    { question: "Which organ in the human body pumps blood?", answers: ["Lungs", "Heart", "Liver", "Brain"], correct: 1 },
                    { question: "What is 3 × 12?", answers: ["33", "34", "35", "36"], correct: 3 },
                    { question: "What is the square of 6?", answers: ["30", "32", "36", "38"], correct: 2 },
                    { question: "Which shape has 4 equal sides?", answers: ["Rectangle", "Triangle", "Square", "Circle"], correct: 2 },
                ],
                set5: [
                    { question: "What is the largest 2-digit number?", answers: ["90", "91", "99", "100"], correct: 2 },
                    { question: "How many bones are there in an adult human body?", answers: ["200", "206", "208", "210"], correct: 1 },
                    { question: "Which is the nearest star to Earth?", answers: ["The Moon", "Mars", "The Sun", "Venus"], correct: 2 },
                    { question: "What is the capital of France?", answers: ["Rome", "Paris", "Berlin", "Madrid"], correct: 1 },
                    { question: "What is 72 ÷ 8?", answers: ["7", "8", "9", "10"], correct: 2 },
                ],
            },
                4: {
                    set1: [
                        { question: "What is the sum of 456 and 789?", answers: ["1245", "1235", "1246", "1256"], correct: 0 },
                        { question: "Which is the fastest land animal?", answers: ["Lion", "Cheetah", "Tiger", "Leopard"], correct: 1 },
                        { question: "How many sides does a hexagon have?", answers: ["5", "6", "7", "8"], correct: 1 },
                        { question: "Who wrote the national anthem of India?", answers: ["Rabindranath Tagore", "Mahatma Gandhi", "Jawaharlal Nehru", "Subhash Chandra Bose"], correct: 0 },
                        { question: "What is 12 × 12?", answers: ["142", "144", "146", "148"], correct: 1 },
                    ],
                    set2: [
                        { question: "What is the smallest prime number?", answers: ["0", "1", "2", "3"], correct: 2 },
                        { question: "What is 360 ÷ 12?", answers: ["30", "28", "32", "31"], correct: 0 },
                        { question: "What is the boiling point of water in Celsius?", answers: ["0°C", "50°C", "100°C", "150°C"], correct: 2 },
                        { question: "Which planet is the smallest in our solar system?", answers: ["Mercury", "Mars", "Earth", "Venus"], correct: 0 },
                        { question: "What is the capital of Japan?", answers: ["Kyoto", "Tokyo", "Osaka", "Nagoya"], correct: 1 },
                    ],
                    set3: [
                        { question: "What is 15 × 8?", answers: ["110", "120", "125", "130"], correct: 1 },
                        { question: "Which gas do humans breathe in?", answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"], correct: 0 },
                        { question: "How many hours are there in a week?", answers: ["168", "172", "162", "176"], correct: 0 },
                        { question: "Which is the largest ocean in the world?", answers: ["Atlantic", "Pacific", "Indian", "Arctic"], correct: 1 },
                        { question: "What is the square root of 49?", answers: ["6", "7", "8", "9"], correct: 1 },
                    ],
                    set4: [
                        { question: "What is 25% of 200?", answers: ["25", "50", "75", "100"], correct: 1 },
                        { question: "How many teeth does an adult human have?", answers: ["28", "30", "32", "34"], correct: 2 },
                        { question: "Who was the first President of India?", answers: ["Mahatma Gandhi", "Dr. Rajendra Prasad", "Jawaharlal Nehru", "Sardar Patel"], correct: 1 },
                        { question: "Which instrument is used to measure temperature?", answers: ["Barometer", "Thermometer", "Hygrometer", "Anemometer"], correct: 1 },
                        { question: "Which country is known as the 'Land of the Rising Sun'?", answers: ["India", "Japan", "China", "Thailand"], correct: 1 },
                    ],
                    set5: [
                        { question: "What is 432 ÷ 6?", answers: ["70", "72", "74", "76"], correct: 1 },
                        { question: "Which is the hardest natural substance on Earth?", answers: ["Gold", "Iron", "Diamond", "Silver"], correct: 2 },
                        { question: "What is the capital of Australia?", answers: ["Sydney", "Melbourne", "Canberra", "Perth"], correct: 2 },
                        { question: "How many continents are there in the world?", answers: ["5", "6", "7", "8"], correct: 2 },
                        { question: "What is the sum of the angles of a triangle?", answers: ["90°", "120°", "180°", "360°"], correct: 2 },
                    ],
                },

                    5: {
                        set1: [
                            { question: "What is 123 × 45?", answers: ["5535", "5455", "5545", "5525"], correct: 0 },
                            { question: "What is the largest planet in our solar system?", answers: ["Earth", "Mars", "Jupiter", "Saturn"], correct: 2 },
                            { question: "Who is known as the 'Father of the Nation' in India?", answers: ["Jawaharlal Nehru", "Subhash Chandra Bose", "Mahatma Gandhi", "Dr. Rajendra Prasad"], correct: 2 },
                            { question: "What is the perimeter of a rectangle with length 8 cm and breadth 5 cm?", answers: ["24 cm", "26 cm", "30 cm", "32 cm"], correct: 2 },
                            { question: "What is 0.75 as a fraction?", answers: ["3/4", "1/2", "2/3", "1/3"], correct: 0 },
                        ],
                        set2: [
                            { question: "What is 15% of 300?", answers: ["30", "45", "60", "90"], correct: 1 },
                            { question: "Who discovered gravity?", answers: ["Albert Einstein", "Galileo Galilei", "Isaac Newton", "Thomas Edison"], correct: 2 },
                            { question: "Which is the longest river in the world?", answers: ["Amazon", "Nile", "Yangtze", "Ganges"], correct: 1 },
                            { question: "What is the area of a square with side length 9 cm?", answers: ["81 cm²", "72 cm²", "90 cm²", "99 cm²"], correct: 0 },
                            { question: "What is the capital of France?", answers: ["London", "Berlin", "Rome", "Paris"], correct: 3 },
                        ],
                        set3: [
                            { question: "What is 56 ÷ 7?", answers: ["6", "7", "8", "9"], correct: 2 },
                            { question: "Which is the smallest bone in the human body?", answers: ["Femur", "Stapes", "Tibia", "Humerus"], correct: 1 },
                            { question: "How many degrees are in a right angle?", answers: ["45°", "60°", "90°", "120°"], correct: 2 },
                            { question: "Which part of the plant conducts photosynthesis?", answers: ["Stem", "Roots", "Leaves", "Flower"], correct: 2 },
                            { question: "What is the synonym of the word 'Happy'?", answers: ["Sad", "Joyful", "Angry", "Tired"], correct: 1 },
                        ],
                        set4: [
                            { question: "What is 25 × 8 + 36 ÷ 6?", answers: ["200", "204", "212", "216"], correct: 1 },
                            { question: "Who invented the light bulb?", answers: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Marie Curie"], correct: 1 },
                            { question: "Which is the only continent where kangaroos are found in the wild?", answers: ["Asia", "Africa", "Australia", "Europe"], correct: 2 },
                            { question: "What is the LCM of 12 and 18?", answers: ["36", "48", "54", "72"], correct: 0 },
                            { question: "How many players are there in a cricket team on the field at a time?", answers: ["9", "10", "11", "12"], correct: 2 },
                        ],
                        set5: [
                            { question: "What is the cube of 3?", answers: ["6", "9", "27", "81"], correct: 2 },
                            { question: "Which gas is the most abundant in Earth's atmosphere?", answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], correct: 2 },
                            { question: "What is the antonym of the word 'Fast'?", answers: ["Quick", "Slow", "Rapid", "Swift"], correct: 1 },
                            { question: "Which organ pumps blood in the human body?", answers: ["Lungs", "Brain", "Heart", "Kidneys"], correct: 2 },
                            { question: "What is the full form of UNICEF?", answers: ["United Nations International Children's Emergency Fund", "United Nations International Cultural and Education Fund", "United Nations International Child Emergency Forum", "United Nations International Child Education Fund"], correct: 0 },
                        ],
                    },
                        6: {
                            set1: [
                                { question: "What is the sum of the first 10 natural numbers?", answers: ["50", "55", "60", "65"], correct: 1 },
                                { question: "Who wrote the epic 'Ramayana'?", answers: ["Tulsidas", "Kalidasa", "Valmiki", "Ved Vyasa"], correct: 2 },
                                { question: "What is the freezing point of water in Celsius?", answers: ["0°C", "32°C", "100°C", "-10°C"], correct: 0 },
                                { question: "What is the capital of Japan?", answers: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"], correct: 0 },
                                { question: "What is 15²?", answers: ["200", "215", "225", "240"], correct: 2 },
                            ],
                            set2: [
                                { question: "What is the value of π (pi) up to 2 decimal places?", answers: ["3.12", "3.14", "3.16", "3.18"], correct: 1 },
                                { question: "Who invented the telephone?", answers: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Isaac Newton"], correct: 0 },
                                { question: "Which is the largest ocean on Earth?", answers: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"], correct: 2 },
                                { question: "What is the formula for the area of a triangle?", answers: ["Length × Breadth", "½ × Base × Height", "Side × Side", "π × r²"], correct: 1 },
                                { question: "What is the antonym of 'Ancient'?", answers: ["Old", "Historic", "Modern", "Primitive"], correct: 2 },
                            ],
                            set3: [
                                { question: "What is 144 ÷ 12?", answers: ["10", "11", "12", "13"], correct: 2 },
                                { question: "Which planet is known as the 'Red Planet'?", answers: ["Earth", "Venus", "Mars", "Jupiter"], correct: 2 },
                                { question: "Who was the first President of India?", answers: ["Jawaharlal Nehru", "Dr. Rajendra Prasad", "Dr. S. Radhakrishnan", "Lal Bahadur Shastri"], correct: 1 },
                                { question: "How many degrees are there in a full circle?", answers: ["90°", "180°", "270°", "360°"], correct: 3 },
                                { question: "What is the plural form of 'Child'?", answers: ["Childs", "Child", "Children", "Childrens"], correct: 2 },
                            ],
                            set4: [
                                { question: "What is 25 × 16?", answers: ["400", "450", "350", "500"], correct: 0 },
                                { question: "Who is known as the 'Missile Man of India'?", answers: ["Dr. C.V. Raman", "Dr. Homi Bhabha", "Dr. APJ Abdul Kalam", "Dr. Vikram Sarabhai"], correct: 2 },
                                { question: "Which gas do plants absorb during photosynthesis?", answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correct: 1 },
                                { question: "What is the LCM of 6 and 8?", answers: ["24", "12", "18", "36"], correct: 0 },
                                { question: "Which is the national animal of India?", answers: ["Lion", "Elephant", "Tiger", "Peacock"], correct: 2 },
                            ],
                            set5: [
                                { question: "What is the square root of 81?", answers: ["7", "8", "9", "10"], correct: 2 },
                                { question: "What is the SI unit of length?", answers: ["Kilogram", "Meter", "Liter", "Newton"], correct: 1 },
                                { question: "Which part of the plant is responsible for reproduction?", answers: ["Stem", "Roots", "Leaves", "Flower"], correct: 3 },
                                { question: "How many states are there in India?", answers: ["28", "29", "30", "31"], correct: 0 },
                                { question: "Who is the author of the book 'Harry Potter'?", answers: ["Roald Dahl", "J.K. Rowling", "Enid Blyton", "C.S. Lewis"], correct: 1 },
                            ],
                        },
                        7: {
                            set1: [
                                { question: "What is the sum of the first 15 prime numbers?", answers: ["150", "160", "170", "180"], correct: 2 },
                                { question: "Who is known as the father of modern chemistry?", answers: ["Antoine Lavoisier", "Isaac Newton", "Albert Einstein", "Michael Faraday"], correct: 0 },
                                { question: "Which is the smallest prime number greater than 10?", answers: ["11", "13", "17", "19"], correct: 0 },
                                { question: "What is the square of 18?", answers: ["324", "304", "306", "400"], correct: 0 },
                                { question: "Which is the most abundant gas in Earth's atmosphere?", answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correct: 1 },
                            ],
                            set2: [
                                { question: "Which chemical element has the symbol 'Ag'?", answers: ["Gold", "Silver", "Aluminum", "Argon"], correct: 1 },
                                { question: "In which year did World War II end?", answers: ["1940", "1945", "1950", "1939"], correct: 1 },
                                { question: "What is the cube of 5?", answers: ["125", "100", "150", "200"], correct: 0 },
                                { question: "Who invented the first practical telephone?", answers: ["Nikola Tesla", "Alexander Graham Bell", "Thomas Edison", "Benjamin Franklin"], correct: 1 },
                                { question: "What is the formula for calculating the area of a circle?", answers: ["πr²", "2πr", "r²", "πr"], correct: 0 },
                            ],
                            set3: [
                                { question: "What is the value of 5 × 6 ÷ 3?", answers: ["8", "10", "15", "12"], correct: 1 },
                                { question: "Which planet is the hottest in the solar system?", answers: ["Venus", "Mars", "Earth", "Jupiter"], correct: 0 },
                                { question: "Who invented the theory of relativity?", answers: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"], correct: 1 },
                                { question: "What is the value of the angle in an equilateral triangle?", answers: ["90°", "45°", "60°", "120°"], correct: 2 },
                                { question: "Which gas do plants release during photosynthesis?", answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correct: 0 },
                            ],
                            set4: [
                                { question: "Which of the following is an example of a compound?", answers: ["Oxygen", "Water", "Nitrogen", "Hydrogen"], correct: 1 },
                                { question: "What is the SI unit of temperature?", answers: ["Kelvin", "Celsius", "Fahrenheit", "Newton"], correct: 0 },
                                { question: "What is the term for the distance around a circle?", answers: ["Area", "Radius", "Diameter", "Circumference"], correct: 3 },
                                { question: "Which of the following is the smallest unit of matter?", answers: ["Atom", "Molecule", "Electron", "Proton"], correct: 0 },
                                { question: "What is the highest mountain in the world?", answers: ["K2", "Mount Everest", "Kangchenjunga", "Makalu"], correct: 1 },
                            ],
                            set5: [
                                { question: "What is the LCM (Least Common Multiple) of 12 and 15?", answers: ["60", "30", "90", "45"], correct: 0 },
                                { question: "Which organ in the human body is responsible for pumping blood?", answers: ["Brain", "Heart", "Kidney", "Stomach"], correct: 1 },
                                { question: "Who is known as the father of the Indian Nation?", answers: ["Jawaharlal Nehru", "Bhagat Singh", "Subhas Chandra Bose", "Mahatma Gandhi"], correct: 3 },
                                { question: "Which of the following is a renewable source of energy?", answers: ["Coal", "Natural Gas", "Solar Energy", "Nuclear Energy"], correct: 2 },
                                { question: "Which is the longest river in the world?", answers: ["Nile", "Amazon", "Ganges", "Yangtze"], correct: 0 },
                            ],
                        },
                        8: {
                            set1: [
                                { question: "What is the sum of the first 20 prime numbers?", answers: ["225", "240", "260", "280"], correct: 1 },
                                { question: "Who discovered the law of motion?", answers: ["Galileo Galilei", "Isaac Newton", "Albert Einstein", "Niels Bohr"], correct: 1 },
                                { question: "What is the value of 2³ + 5²?", answers: ["37", "40", "45", "50"], correct: 0 },
                                { question: "Which chemical element has the highest atomic number?", answers: ["Uranium", "Plutonium", "Oganesson", "Neptunium"], correct: 2 },
                                { question: "What is the formula for calculating the volume of a cone?", answers: ["(1/3)πr²h", "(1/2)πr²h", "(1/4)πr²h", "(1/3)πr³"], correct: 0 },
                            ],
                            set2: [
                                { question: "What is the square root of 144?", answers: ["10", "11", "12", "13"], correct: 2 },
                                { question: "What is the capital of Canada?", answers: ["Toronto", "Vancouver", "Ottawa", "Montreal"], correct: 2 },
                                { question: "Which of these is not a part of the respiratory system?", answers: ["Lungs", "Trachea", "Kidneys", "Bronchi"], correct: 2 },
                                { question: "What is the largest organ in the human body?", answers: ["Brain", "Lungs", "Liver", "Skin"], correct: 3 },
                                { question: "Which one of the following is an example of a non-renewable resource?", answers: ["Wind", "Sun", "Coal", "Water"], correct: 2 },
                            ],
                            set3: [
                                { question: "What is the formula for calculating the area of a trapezium?", answers: ["(a + b)h", "1/2 × (a + b)h", "(a + b)h/2", "(a + b)²h"], correct: 1 },
                                { question: "Which planet is closest to the sun?", answers: ["Mercury", "Venus", "Earth", "Mars"], correct: 0 },
                                { question: "What is the SI unit of force?", answers: ["Newton", "Joule", "Pascal", "Watt"], correct: 0 },
                                { question: "What is the density of water in g/cm³?", answers: ["0.5", "1", "1.5", "2"], correct: 1 },
                                { question: "Which of the following is a chemical change?", answers: ["Boiling water", "Melting ice", "Rusting of iron", "Dissolving sugar"], correct: 2 },
                            ],
                            set4: [
                                { question: "What is the LCM of 36 and 48?", answers: ["144", "108", "1440", "96"], correct: 0 },
                                { question: "Who is the author of '1984' and 'Animal Farm'?", answers: ["George Orwell", "Harper Lee", "J.K. Rowling", "William Shakespeare"], correct: 0 },
                                { question: "Which country is known as the 'Land of the Rising Sun'?", answers: ["China", "India", "South Korea", "Japan"], correct: 3 },
                                { question: "Which of the following is not a part of the circulatory system?", answers: ["Heart", "Blood", "Liver", "Veins"], correct: 2 },
                                { question: "What is the chemical symbol for Iron?", answers: ["Fe", "Ir", "In", "I"], correct: 0 },
                            ],
                            set5: [
                                { question: "What is the Pythagorean theorem formula?", answers: ["a² + b² = c²", "a² - b² = c²", "a² + c² = b²", "a + b + c = 0"], correct: 0 },
                                { question: "What is the first law of thermodynamics?", answers: ["Energy can be created or destroyed", "Energy is always conserved", "Energy cannot be destroyed", "Energy can be transformed into mass"], correct: 1 },
                                { question: "What is the total number of bones in the adult human body?", answers: ["204", "206", "208", "210"], correct: 1 },
                                { question: "What is the formula for calculating kinetic energy?", answers: ["KE = ½ mv²", "KE = mgh", "KE = mv", "KE = ½ mgh"], correct: 0 },
                                { question: "What is the center of the Earth called?", answers: ["Mantle", "Core", "Crust", "Lithosphere"], correct: 1 },
                            ]
                        },
                        9: {
                            set1: [
                                { question: "What is the sum of the first 30 prime numbers?", answers: ["410", "375", "350", "420"], correct: 0 },
                                { question: "Who formulated the laws of motion?", answers: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"], correct: 0 },
                                { question: "What is the value of the expression 2² + 4³?", answers: ["66", "70", "72", "75"], correct: 2 },
                                { question: "What is the molecular formula of methane?", answers: ["CH4", "C2H6", "C3H8", "C4H10"], correct: 0 },
                                { question: "What is the formula for calculating the volume of a sphere?", answers: ["(4/3)πr³", "(1/3)πr³", "(2/3)πr²h", "(1/4)πr³"], correct: 0 },
                            ],
                            set2: [
                                { question: "What is the square root of 169?", answers: ["13", "14", "15", "16"], correct: 0 },
                                { question: "Which planet has the longest day?", answers: ["Venus", "Mars", "Earth", "Mercury"], correct: 0 },
                                { question: "What is the main component of natural gas?", answers: ["Methane", "Butane", "Ethane", "Propane"], correct: 0 },
                                { question: "Which of the following is an example of a physical change?", answers: ["Burning wood", "Boiling water", "Rusting iron", "Food digestion"], correct: 1 },
                                { question: "Which scientist developed the atomic theory?", answers: ["Democritus", "John Dalton", "Niels Bohr", "Erwin Schrödinger"], correct: 1 },
                            ],
                            set3: [
                                { question: "What is the formula for the area of a sector of a circle?", answers: ["θr²/2", "θr²", "2πr", "πr²"], correct: 0 },
                                { question: "What is the total number of chromosomes in a human cell?", answers: ["22", "46", "48", "44"], correct: 1 },
                                { question: "Who developed the periodic table?", answers: ["John Dalton", "Dmitri Mendeleev", "Ernest Rutherford", "Marie Curie"], correct: 1 },
                                { question: "What is the acceleration due to gravity on Earth?", answers: ["9.8 m/s²", "10 m/s²", "11 m/s²", "9.5 m/s²"], correct: 0 },
                                { question: "What is the SI unit of electric current?", answers: ["Ampere", "Volt", "Ohm", "Coulomb"], correct: 0 },
                            ],
                            set4: [
                                { question: "What is the equation for calculating the gravitational potential energy?", answers: ["PE = mgh", "PE = ½ mv²", "PE = mv", "PE = 1/2k(x²)"], correct: 0 },
                                { question: "What is the pH value of pure water?", answers: ["7", "8", "6", "5"], correct: 0 },
                                { question: "Which of these is not a part of the digestive system?", answers: ["Esophagus", "Liver", "Kidneys", "Small Intestine"], correct: 2 },
                                { question: "Which law states that the force on an object is directly proportional to its mass and acceleration?", answers: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Universal Gravitation"], correct: 1 },
                                { question: "What is the first law of thermodynamics?", answers: ["Energy can neither be created nor destroyed", "Energy can be created and destroyed", "Energy is always constant", "Energy can be transformed into mass"], correct: 0 },
                            ],
                            set5: [
                                { question: "What is the equation for Ohm’s Law?", answers: ["V = IR", "V = I/R", "V = R/I", "I = VR"], correct: 0 },
                                { question: "Which of the following is a vector quantity?", answers: ["Distance", "Speed", "Acceleration", "Time"], correct: 2 },
                                { question: "What is the chemical symbol for Sodium?", answers: ["Na", "S", "N", "So"], correct: 0 },
                                { question: "What is the name of the largest continent on Earth?", answers: ["Africa", "Asia", "Europe", "North America"], correct: 1 },
                                { question: "What is the formula for calculating the speed of an object?", answers: ["Speed = Distance × Time", "Speed = Distance/Time", "Speed = Time/Distance", "Speed = Time × Distance"], correct: 1 },
                            ]
                        },
                        10: {
                            set1: [
                                { question: "What is the quadratic formula for solving ax² + bx + c = 0?", answers: ["x = (-b ± √(b² - 4ac)) / 2a", "x = (b ± √(b² - 4ac)) / 2a", "x = (-b ± √(a² - 4bc)) / 2a", "x = (b ± √(b² - 4ac)) / 2b"], correct: 0 },
                                { question: "In a triangle, the sum of the angles is always equal to:", answers: ["90°", "180°", "360°", "270°"], correct: 1 },
                                { question: "What is the molar mass of water (H₂O)?", answers: ["16 g/mol", "18 g/mol", "20 g/mol", "22 g/mol"], correct: 1 },
                                { question: "Which of the following is the correct equation for the acceleration due to gravity?", answers: ["g = 9.8 m/s²", "g = 10 m/s²", "g = 9.8 m²/s", "g = 10 m²/s"], correct: 0 },
                                { question: "The SI unit of electric resistance is:", answers: ["Ohm", "Ampere", "Volt", "Watt"], correct: 0 },
                            ],
                            set2: [
                                { question: "What is the general formula for an alkene?", answers: ["CₙH₂ₙ₋₂", "CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙHₙ"], correct: 0 },
                                { question: "What is the balanced chemical equation for the combustion of methane?", answers: ["CH₄ + O₂ → CO₂ + H₂O", "CH₄ + O₂ → CO + H₂O", "2CH₄ + O₂ → CO₂ + 2H₂O", "CH₄ + O₂ → C + H₂O"], correct: 0 },
                                { question: "In which organ does the process of photosynthesis take place?", answers: ["Roots", "Stem", "Leaf", "Flower"], correct: 2 },
                                { question: "Which law states that the rate of a chemical reaction is proportional to the concentration of the reactants?", answers: ["Le Chatelier's Principle", "Raoult's Law", "Boyle's Law", "Rate Law"], correct: 3 },
                                { question: "What is the value of 0.5 raised to the power of 2?", answers: ["0.25", "0.5", "0.75", "1"], correct: 0 },
                            ],
                            set3: [
                                { question: "Which of the following is a correct representation of the Pythagorean Theorem?", answers: ["a² + b² = c²", "a + b = c", "a² - b² = c²", "c² = a + b"], correct: 0 },
                                { question: "What is the chemical formula of Sodium Hydroxide?", answers: ["NaOH", "Na₂O", "NaCl", "NaHCO₃"], correct: 0 },
                                { question: "What is the name of the force that opposes the motion of an object?", answers: ["Gravity", "Friction", "Momentum", "Inertia"], correct: 1 },
                                { question: "Which of the following is an example of a non-renewable energy source?", answers: ["Solar energy", "Wind energy", "Coal", "Biomass"], correct: 2 },
                                { question: "The image formed by a concave mirror when the object is placed at a distance greater than the focal length is:", answers: ["Virtual and diminished", "Real and diminished", "Real and magnified", "Virtual and magnified"], correct: 1 },
                            ],
                            set4: [
                                { question: "Which of these gases is responsible for the greenhouse effect?", answers: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], correct: 1 },
                                { question: "What is the first law of thermodynamics?", answers: ["Energy can be created or destroyed", "Energy cannot be created or destroyed", "Energy is always constant", "Energy can be converted into mass"], correct: 1 },
                                { question: "What is the formula for calculating work done in physics?", answers: ["W = F × d", "W = F × v", "W = m × v", "W = d × t"], correct: 0 },
                                { question: "The SI unit of power is:", answers: ["Watt", "Joule", "Newton", "Ampere"], correct: 0 },
                                { question: "What is the value of the gravitational constant (G)?", answers: ["6.67 × 10⁻¹¹ N⋅m²/kg²", "9.8 m/s²", "9.8 N", "6.67 × 10² N⋅m²/kg²"], correct: 0 },
                            ],
                            set5: [
                                { question: "What is the chemical formula for sulfuric acid?", answers: ["H₂SO₄", "HCl", "HNO₃", "H₃PO₄"], correct: 0 },
                                { question: "Which of the following is a major constituent of air?", answers: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"], correct: 2 },
                                { question: "The bending of light as it passes from one medium to another is called:", answers: ["Reflection", "Refraction", "Absorption", "Diffraction"], correct: 1 },
                                { question: "What is the moment of inertia of a point mass at a distance r from the axis?", answers: ["I = mr", "I = mr²", "I = m/r²", "I = m²r²"], correct: 1 },
                                { question: "What is the formula for calculating the potential energy of an object in a gravitational field?", answers: ["PE = mgh", "PE = ½mv²", "PE = 2mgh", "PE = mgh²"], correct: 0 },
                            ]
                        },  
                        11: {
                            set1: [
                                { question: "What is the derivative of sin(x)?", answers: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"], correct: 0 },
                                { question: "What is the solution to the equation x² - 6x + 9 = 0?", answers: ["x = 3", "x = -3", "x = 6", "x = -6"], correct: 0 },
                                { question: "What is the chemical formula for methane?", answers: ["CH₄", "C₂H₆", "CH₃OH", "C₆H₁₂O₆"], correct: 0 },
                                { question: "What is the SI unit for electric current?", answers: ["Ampere", "Volt", "Ohm", "Joule"], correct: 0 },
                                { question: "What is the principle of superposition used for in waves?", answers: ["To add two waves at a point", "To calculate the frequency of waves", "To reduce the amplitude of waves", "To calculate the velocity of waves"], correct: 0 },
                            ],
                            set2: [
                                { question: "Which law describes the relationship between the current, voltage, and resistance?", answers: ["Newton's Second Law", "Ohm's Law", "Boyle's Law", "Faraday's Law"], correct: 1 },
                                { question: "In which of the following reactions does oxidation occur?", answers: ["Fe + O₂ → Fe₂O₃", "H₂ + O₂ → H₂O", "NaCl → Na + Cl₂", "C + O₂ → CO₂"], correct: 0 },
                                { question: "What is the value of Planck’s constant?", answers: ["6.626 × 10⁻³⁴ J·s", "3.14 × 10⁻² J·s", "9.8 × 10⁻³⁴ J·s", "1.5 × 10⁻³ J·s"], correct: 0 },
                                { question: "The first ionization energy increases as you move across a period because:", answers: ["Atomic size decreases", "Atomic size increases", "Electron affinity decreases", "Nuclear charge decreases"], correct: 0 },
                                { question: "The molecular formula of benzene is:", answers: ["C₆H₆", "C₆H₄", "C₆H₁₂", "C₆H₁₀"], correct: 0 },
                            ],
                            set3: [
                                { question: "Which of the following is the correct equation for acceleration?", answers: ["a = (v - u) / t", "a = v / t", "a = u + vt", "a = (v + u) / 2"], correct: 0 },
                                { question: "What is the formula for the gravitational force between two objects?", answers: ["F = G(m₁m₂)/r²", "F = G(m₁ + m₂)/r²", "F = Gm₁m₂r", "F = m₁m₂/g"], correct: 0 },
                                { question: "Which element has the highest electronegativity?", answers: ["Fluorine", "Oxygen", "Chlorine", "Nitrogen"], correct: 0 },
                                { question: "The change in momentum of an object is equal to:", answers: ["Impulse", "Force", "Work", "Energy"], correct: 0 },
                                { question: "The molecular orbital theory is used to explain:", answers: ["Bonding in molecules", "Ionization", "Atomic number", "Crystal structures"], correct: 0 },
                            ],
                            set4: [
                                { question: "The rate of a chemical reaction depends on all of the following except:", answers: ["Concentration", "Temperature", "Pressure", "Volume"], correct: 3 },
                                { question: "Which of the following is an example of a strong acid?", answers: ["HCl", "H₂SO₄", "HNO₃", "All of the above"], correct: 3 },
                                { question: "In the equation E = mc², what does the 'c' represent?", answers: ["The speed of light", "The constant of proportionality", "The charge", "The mass of the object"], correct: 0 },
                                { question: "The quantum mechanical model of the atom was proposed by:", answers: ["Heisenberg", "Schrödinger", "Bohr", "Rutherford"], correct: 1 },
                                { question: "What is the function of the mitochondria in a cell?", answers: ["Energy production", "Protein synthesis", "Cell division", "Transport of materials"], correct: 0 },
                            ],
                            set5: [
                                { question: "Which of the following elements is a transition metal?", answers: ["Zinc", "Oxygen", "Neon", "Sodium"], correct: 0 },
                                { question: "The process by which a gas changes directly into a solid is called:", answers: ["Deposition", "Sublimation", "Condensation", "Evaporation"], correct: 0 },
                                { question: "The change in kinetic energy of an object is equal to:", answers: ["Work done", "Force applied", "Acceleration", "Impulse"], correct: 0 },
                                { question: "What is the SI unit for power?", answers: ["Watt", "Joule", "Newton", "Ampere"], correct: 0 },
                                { question: "Which of the following is the law of conservation of mass?", answers: ["Mass cannot be created or destroyed", "Energy cannot be created or destroyed", "Mass is the same as energy", "Mass can be created and destroyed"], correct: 0 },
                            ]
                        },
                        12: {
                            set1: [
                                { question: "What is the derivative of tan(x)?", answers: ["sec²(x)", "sin²(x)", "cos²(x)", "sec(x)"], correct: 0 },
                                { question: "What is the value of limit: lim(x→0) [sin(x) / x]?", answers: ["0", "1", "∞", "undefined"], correct: 1 },
                                { question: "What is the electron configuration of the element with atomic number 12?", answers: ["1s² 2s² 2p⁶ 3s²", "1s² 2s² 2p⁶ 3s² 3p⁶", "1s² 2s² 2p⁶ 3s² 3p⁴", "1s² 2s² 2p⁶ 3s² 3p²"], correct: 0 },
                                { question: "What is the standard electrode potential of the half-reaction Ag⁺ + e⁻ → Ag?", answers: ["+0.80 V", "-0.80 V", "+0.50 V", "-0.50 V"], correct: 0 },
                                { question: "What is the formula for the electric field due to a point charge?", answers: ["E = kq / r²", "E = kq / r", "E = kq / r³", "E = q / r²"], correct: 0 },
                            ],
                            set2: [
                                { question: "What is the acceleration due to gravity at the surface of the Earth?", answers: ["9.8 m/s²", "10 m/s²", "9.8 km/s²", "10 km/s²"], correct: 0 },
                                { question: "What is the value of Rydberg constant?", answers: ["1.097 × 10⁷ m⁻¹", "1.297 × 10⁷ m⁻¹", "1.297 × 10⁻⁷ m⁻¹", "1.097 × 10⁶ m⁻¹"], correct: 0 },
                                { question: "Which of the following is the correct equation for finding the molar volume of an ideal gas at STP?", answers: ["V = nRT", "V = nRT/P", "V = PRT/n", "V = nRT/P and T=273K"], correct: 3 },
                                { question: "The magnetic field at the center of a circular loop carrying current I is proportional to:", answers: ["I", "I²", "I/r", "1/r"], correct: 0 },
                                { question: "What is the empirical formula of benzene?", answers: ["C₆H₆", "C₆H₁₂", "C₆H₄", "C₆H₈"], correct: 0 },
                            ],
                            set3: [
                                { question: "What is the first law of thermodynamics?", answers: ["Energy cannot be created or destroyed", "Energy is conserved", "Work done on the system is equal to its change in energy", "All of the above"], correct: 3 },
                                { question: "What is the SI unit for electric charge?", answers: ["Coulomb", "Ampere", "Volt", "Ohm"], correct: 0 },
                                { question: "The time period of a simple pendulum is given by T = 2π√(L/g). What does 'L' represent?", answers: ["Length of the pendulum", "Time period", "Acceleration due to gravity", "Mass of the pendulum"], correct: 0 },
                                { question: "Which of the following is the correct expression for the energy of a photon?", answers: ["E = hν", "E = mc²", "E = h/ν", "E = pν"], correct: 0 },
                                { question: "What is the molecular formula for glucose?", answers: ["C₆H₁₂O₆", "C₆H₆O₆", "C₆H₁₂O₆", "C₆H₁₂O₆"], correct: 0 },
                            ],
                            set4: [
                                { question: "What is the chemical formula for calcium carbonate?", answers: ["CaCO₃", "CaCO₂", "Ca₂CO₃", "CaO₂"], correct: 0 },
                                { question: "Which of the following is a property of a magnetic field?", answers: ["It can only exist in a vacuum", "It is created by moving electric charges", "It is unaffected by electric currents", "It does not affect iron objects"], correct: 1 },
                                { question: "What is the integral of cos(x)?", answers: ["sin(x) + C", "-sin(x) + C", "cos(x) + C", "tan(x) + C"], correct: 0 },
                                { question: "What is the half-life of a substance that decays at a rate constant of 0.693 per second?", answers: ["1 second", "2 seconds", "0.693 seconds", "1.386 seconds"], correct: 0 },
                                { question: "Which of the following is a non-metal that exists as a gas at room temperature?", answers: ["Oxygen", "Nitrogen", "Chlorine", "All of the above"], correct: 3 },
                            ],
                            set5: [
                                { question: "What is the specific heat capacity of water?", answers: ["4.18 J/g°C", "3.98 J/g°C", "2.75 J/g°C", "5.12 J/g°C"], correct: 0 },
                                { question: "What is the electric field between two parallel plates separated by a distance 'd' and charged with charge 'Q'?", answers: ["E = Q / d", "E = Q / (ε₀d)", "E = Qd / (ε₀)", "E = ε₀d / Q"], correct: 1 },
                                { question: "What is the value of the universal gas constant?", answers: ["8.314 J/mol·K", "6.022 × 10²³ J/mol·K", "1.38 × 10⁻²³ J/mol·K", "3.14 J/mol·K"], correct: 0 },
                                { question: "What is the angular velocity of a particle moving in a circle with radius r and speed v?", answers: ["ω = v/r", "ω = r/v", "ω = v²/r", "ω = r²/v"], correct: 0 },
                                { question: "Which of the following elements has the highest ionization energy?", answers: ["Helium", "Lithium", "Sodium", "Oxygen"], correct: 0 },
                            ]
                        },
    // Add more class sets for class 2-10
};

// Variables to track selected class, current question, score, and question set
let selectedClass = null;
let currentQuestionIndex = 0;
let currentSet = "set1";
let score = 0;
let questions = [];
let timer; // Timer reference
let timeRemaining = 30; // Time in seconds for each question
let interval; // Interval reference for countdown

// Array of available sets for dynamic progression
const setsOrder = ["set1", "set2", "set3", "set4", "set5"];
let currentSetIndex = 0;

// DOM elements for quiz and results display
const classButtonsContainer = document.getElementById("class-buttons");
const quizElement = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const resultsElement = document.getElementById("results");
const scoreElement = document.getElementById("score");
const retryButton = document.getElementById("retry-btn");
const timerElement = document.getElementById("timer"); // Timer display element

// Function to create buttons for selecting a class
function createClassButtons() {
    for (let i = 1; i <= 12; i++) {
        const button = document.createElement("button");
        button.textContent = `Class ${i}`;
        button.classList.add("btn");
        button.addEventListener("click", () => selectClass(i));
        classButtonsContainer.appendChild(button);
    }
}

// Function to handle class selection
function selectClass(classNumber) {
    selectedClass = classNumber;
    currentSetIndex = 0;
    currentSet = setsOrder[currentSetIndex];
    questions = classQuestions[selectedClass][currentSet];
    document.getElementById("class-selection").style.display = "none";
    quizElement.style.display = "block";
    showQuestion();
}

// Function to start the timer for each question
function startTimer() {
    timeRemaining = 15; // Reset timer to 30 seconds
    timerElement.textContent = `Time remaining: ${timeRemaining}s`;
    timerElement.classList.remove("blink"); // Remove blinking class if present
    clearInterval(interval); // Clear any previous intervals
    interval = setInterval(() => {
        timeRemaining--;
        timerElement.textContent = `Time remaining: ${timeRemaining}s`;

        // Add blinking effect if time is less than 5 seconds
        if (timeRemaining < 5) {
            timerElement.classList.add("blink");
        } else {
            timerElement.classList.remove("blink");
        }

        if (timeRemaining <= 0) {
            clearInterval(interval); // Stop timer
            timeUp(); // Handle time up
        }
    }, 1000);
}


// Function to handle when time is up
function timeUp() {
    clearInterval(interval); // Stop the timer
    nextButton.style.display = "block"; // Show "Next Question" button
    Array.from(answerButtons.children).forEach((button) => {
        button.disabled = true;
    });
    timerElement.textContent = "Time's up!";
    if (currentQuestionIndex >= questions.length - 1) {
        endGame(); // End game if it's the last question
    }
}

// Function to display the current question
function showQuestion() {
    resetState();
    startTimer(); // Start the timer for the question
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("btn");
        if (index === currentQuestion.correct) {
            button.dataset.correct = true;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
    nextButton.style.display = "none";
}

// Function to reset the answer container for the next question
function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    clearInterval(interval); // Stop the timer from the previous question
}

// Function to handle answer selection
function selectAnswer(e) {
    clearInterval(interval); // Stop the timer once an answer is selected
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct) {
        selectedButton.style.backgroundColor = "green";
        score++;
    } else {
        selectedButton.style.backgroundColor = "red";
    }
    Array.from(answerButtons.children).forEach((button) => {
        button.disabled = true;
        if (button.dataset.correct) {
            button.style.backgroundColor = "green";
        }
    });
    nextButton.style.display = "block";
}

// Event listener for "Next Question" button
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endGame();
    }
});

// Function to display the score and retry option
function endGame() {
    clearInterval(interval); // Clear the timer
    quizElement.style.display = "none";
    resultsElement.style.display = "block";
    scoreElement.textContent = `You scored ${score} out of ${questions.length}!`;
    if (score <= 3 && currentSetIndex < setsOrder.length - 1) {
        retryButton.textContent = "Retry again";
        retryButton.style.display = "block";
    } else {
        retryButton.style.display = "none";
        scoreElement.textContent += "\nYou have completed all the questions!";
    }
    if (score < Math.ceil(questions.length * 0.6)) {
        scoreElement.textContent += "\nKeep practicing and try again!";
    } else {
        scoreElement.textContent += "\nGreat job!";
    }
}

// Event listener for "Retry" button
retryButton.addEventListener("click", () => {
    currentSetIndex++;
    if (currentSetIndex < setsOrder.length) {
        currentSet = setsOrder[currentSetIndex];
        questions = classQuestions[selectedClass][currentSet];
        currentQuestionIndex = 0;
        score = 0;
        resultsElement.style.display = "none";
        quizElement.style.display = "block";
        showQuestion();
    }
});

// Initialize the class selection buttons
createClassButtons();
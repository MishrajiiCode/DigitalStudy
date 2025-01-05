document.addEventListener("DOMContentLoaded", () => {
    const adminPassword = "admin123"; // Admin password for downloading data
    const users = JSON.parse(localStorage.getItem("users")) || []; // Load users
    const videos = [
        // Video data (unchanged)
        {
            id: 1,
            title: "REAL NUMBERS in 30 Minutes |Maths Chapter 1|Class 10| Mind Map Series for Class 10th",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "https://www.youtube.com/watch?v=nBN3p1qC6no", // Example regular YouTube link
        },
        {
            id: 2,
            title: "Abhay Batch 10th Maths - 1st FREE Class |Maths Chapter 1 |Class 10| Check Description",
            description: "ABHAY Class 10th -Live Interactive Crash Course designed to help you excel in the 2025  exams.",
            videoUrl: "https://www.youtube.com/watch?v=NRC-wPWLBlE",
        },
        {
            id: 3,
            title: "Real Numbers | 2022-23 |Maths Chapter 1 |Class 10 |Full Chapter | Number System | Rational Numbers",
            description: "In this video I taught introduction of 1 Real Numbers ",
            videoUrl: "https://www.youtube.com/watch?v=fl-Q_bT-oO0", // Example regular YouTube link
        },
        {
            id: 4,
            title: "POLYNOMIALS in 30 Minutes |Maths Chapter 2|Class 10| Mind Map Series for Class 10th",
            description: "Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "https://www.youtube.com/watch?v=E8HO3btdpPg", // Example regular YouTube link
        },
        {
            id: 5,
            title: "PAIR OF LINEAR EQUATIONS IN 2 VARIABLES in 30 Minutes|Maths Chapter 3 |Class 10 |Mind Map Series for Class 10th",
            description: "Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "https://www.youtube.com/watch?v=HgTPD8DMNNQ", // Example regular YouTube link
        },
        {
            id: 6,
            title: "QUADRATIC EQUATIONS in 30 Minutes |Maths Chapter 4||Class 10 | Mind Map Series for Class 10th",
            description: "Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "https://www.youtube.com/watch?v=VNMqILLTBw0", // Example regular YouTube link
        },
        {
            id: 7,
            title: "Class - 10th,Quadratic Equations |Maths Chapter 4| New NCERT ||Class 10 || CBSE || Green Board || Introduction",
            description: "Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "https://www.youtube.com/watch?v=f6SUUBqv3nQ&list=PLIlJ3MdWYpockcDPeY87zslcR0erhCgg4", // Example regular YouTube link
        },
        {
            id: 8,
            title: "Arithmetic Progression Class 10 in One Shot 🔥|Maths Chapter 5 ||Class 10 | Class 10 Maths Chapter 5 AP | Shobhit Nirwan",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "https://www.youtube.com/watch?v=zPKdZKBG4oQ", // Example regular YouTube link
        },
        {
            id: 10,
            title: "Triangles FULL CHAPTER | Class 10th Mathematics |Maths Chapter 6 ||Class 10 | Udaan",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "https://www.youtube.com/watch?v=OWG8-Sizxn0", // Example regular YouTube link
        },
        {
            id: 11,
            title: "Coordinate Geometry | Term 1 |Maths Chapter 7 | |Class 10 |Coordinate Geometry Class 10 Full Chapter",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "https://www.youtube.com/watch?v=Zn8GeG36C3E", // Example regular YouTube link
        },
        {
            id: 12,
            title: "Coordinate Geometry |Maths Chapter 7 | |Class 10 |Coordinate Geometry Class 10 Full Chapter | Ex 2.1, 2.2",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "https://www.youtube.com/watch?v=BUC0kB4QRqM", // Example regular YouTube link
        },
        {
            id: 13,
            title: "Trigonometry | Trigonometry Class 10 |Maths Chapter 8 ||Class 10 | Maths Full Chapter| Concept/Exercises/Basics/Hindi",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "https://www.youtube.com/watch?v=nbuyle1CsSM", // Example regular YouTube link
        },
        {
            id: 14,
            title: "TRIGONOMETRY in 30 Minutes |Maths Chapter 8||Class 10 | Mind Map Series for Class 10th",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "https://www.youtube.com/watch?v=MF8yMAmqaz0", // Example regular YouTube link
        },
        {
            id: 15,
            title: "Some Application Of Trigonometry|Maths Chapter 9 ||Class 10 | Complete NCERT WITH BACK EXERCISE in 1 Video | Class 10th Board",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "https://www.youtube.com/watch?v=bgxacN97zkI", // Example regular YouTube link
        },
        {
            id: 16,
            title: "Circles FULL CHAPTER | Class 10th Mathematics ||Class 10 |Maths Chapter 10 | Udaan",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "https://www.youtube.com/watch?v=CCupGsFUvPI", // Example regular YouTube link
        },
        {
            id: 17,
            title: "CIRCLES in 1 Shot FULL CHAPTER COVERAGE (Concept+PYQs)|Class 10 | |Maths Chapter 10| Class 10th Boards",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "https://www.youtube.com/watch?v=ezsF7bQKnwA", // Example regular YouTube link
        },
        {
            id: 18,
            title: "Circle | Circle Class 10 | CBSE Class 10|Maths Chapter 10 ||Class 10 |Circle Concept/Exercise/Questions/Formula",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "https://www.youtube.com/watch?v=llhjrbgwjUM", // Example regular YouTube link
        },
        {
            id: 19,
            title: "Areas Related To Circles | Introduction |Maths Chapter 11 ||Class 10 | लक्ष्य 2025",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "https://www.youtube.com/watch?v=6MjQ0E3N2sI", // Example regular YouTube link
        },
        {
            id: 20,
            title: "Area Related To Circles FULL CHAPTER |Maths Class 10th| |Class 10 |Mathematics | Chapter 11 | Udaan",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "https://www.youtube.com/watch?v=hZCh_4WgvTY", // Example regular YouTube link
        },
        {
            id: 21,
            title: "Class 10th Maths Marathon |Maths Capter 1 Chapter 2 Chapter 3 Chapter 4 Chapter 5🔥|Class 10 | | Shobhit Nirwan",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "https://www.youtube.com/watch?v=yC5kByJ3StM", // Example regular YouTube link
        },
        {
            id: 22,
            title: "Class - 10|MAths Chapter 12|, Introduction to Surface Areas and Volumes ||Class 10 || New NCERT CBSE || Green Board",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "https://www.youtube.com/watch?v=kDa4udfwDWE&list=PLIlJ3MdWYpocjT-MybhoMi9Bf8QgdxKAU", // Example regular YouTube link
        },
        {
            id: 23,
            title: "Surface Area And Volumes|Maths Chapter 12 ||Class 10 | Complete NCERT WITH BACK EXERCISE in 1 Video | Class 10th",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "https://www.youtube.com/watch?v=o99ipp9OJ7o", // Example regular YouTube link
        },
        {
            id: 24,
            title: "Statistics FULL CHAPTER | Class 10th Mathematics |Class 10 ||Maths Chapter 13 | Udaan",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "https://www.youtube.com/watch?v=7rRoPmFdCkc", // Example regular YouTube link
        },
        {
            id: 25,
            title: "Probability |Maths Chapter 14 | Introduction|Class 10 | | लक्ष्य 2025",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "https://www.youtube.com/watch?v=vYbcdBhnMMQ", // Example regular YouTube link
        },
        {
            id: 26,
            title: "Light in 25 Minutes🔥|Physics Chapter 1||Class 10 | Class 10th | Rapid Revision | Prashant Kirad",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "https://www.youtube.com/watch?v=IfWAhHZl1FY", // Example regular YouTube link
        },
        {
            id: 27,
            title: "Human Eye and the Colourful World in 20 Minutes🔥|Class 10 ||Physics Chapter 2| Class 10th | Rapid Revision | Prashant Kirad",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "https://www.youtube.com/watch?v=ntvqlm2ZXqk", // Example regular YouTube link
        },
        {
            id: 28,
            title: "Electricity in 20 Minutes🔥|Physics Chapter 3| Class 10th | Rapid Revision | Prashant Kirad",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "https://www.youtube.com/watch?v=UI8nM-dSfh4", // Example regular YouTube link
        },
        {
            id: 29,
            title: "Magnetic Effects of Electric Current in 20 Minutes|Physics Chapter 4| Class 10th | Rapid Revision | Prashant Kirad",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "https://www.youtube.com/watch?v=D5rouymJ_UA", // Example regular YouTube link
        },
        {
            id: 30,
            title: "Magnetic effect of electric current⚡|Physics Chapter 5| CLASS 10| ONE SHOT| boards",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "https://www.youtube.com/watch?v=DugfjpGoOVs", // Example regular YouTube link
        },
        {
            id: 31,
            title: "Chemical reactions and equations🔥| CLASS 10|Chemistry Chapter 1| ONE SHOT| Ncert Covered",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "https://www.youtube.com/watch?v=ruHwWNLgBV4", // Example regular YouTube link
        },
        {
            id: 32,
            title: "Acids, Bases and Salts in 20 Minutes🔥| Class 10th |Chemistry Chapter 2| Rapid Revision | Prashant Kirad",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "https://www.youtube.com/watch?v=7k2rs5yGOFM", // Example regular YouTube link
        },
        {
            id: 33,
            title: "Metals and Non Metals in 25 Minutes🔥| Class 10th |Chemistry Chapter 3| Rapid Revision | Prashant Kirad",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "https://www.youtube.com/watch?v=NsbZY_b0D8k", // Example regular YouTube link
        },
        {
            id: 34,
            title: "Carbon and its Compounds in 30 Minutes🔥| Class 10th |Chemistry Chapter 4| Rapid Revision | Prashant Kirad",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "https://www.youtube.com/watch?v=Ff0t3zTzgR8", // Example regular YouTube link
        },
        {
            id: 35,
            title: "CBSE Class 10 Science | Periodic Classification of Elements |Class 10|Chemistry Chapter 5| Periodic Table of Elements | Ashu Sir",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "https://www.youtube.com/watch?v=c5aPf3xyQkg", // Example regular YouTube link
        },
        {
            id: 36,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 37,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 38,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 39,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 40,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 41,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 42,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 43,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 44,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 45,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 46,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 47,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 48,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 49,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 50,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 33,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 33,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 33,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 33,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 33,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 33,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 33,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 33,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 33,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 33,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 33,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 33,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 33,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 33,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 33,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 33,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 33,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 33,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 33,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 33,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 33,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 33,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 33,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 33,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 33,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 33,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
        {
            id: 33,
            title: "",
            description: " Complete Mind Maps and Revision For Class 10th Maths",
            videoUrl: "", // Example regular YouTube link
        },
    ];

    // Function to convert YouTube link to embed link
    function getEmbedUrl(videoUrl) {
        if (videoUrl.includes("youtube.com/watch?v=")) {
            const videoId = videoUrl.split("v=")[1].split("&")[0];
            return `https://www.youtube.com/embed/${videoId}`;
        } else if (videoUrl.includes("youtu.be/")) {
            const videoId = videoUrl.split("youtu.be/")[1];
            return `https://www.youtube.com/embed/${videoId}`;
        }
        return videoUrl; // Return original URL if it's not a YouTube link
    }

    // Render Video Grid
    function renderVideoGrid(containerId, videoList) {
        const container = document.getElementById(containerId);
        if (videoList.length > 0) {
            container.innerHTML = videoList
                .map((video) => {
                    const embedUrl = getEmbedUrl(video.videoUrl);
                    const isYouTube = embedUrl.includes("youtube.com/embed");
                    return `
                        <div class="video">
                            ${isYouTube 
                                ? `<iframe src="${embedUrl}" frameborder="0" allowfullscreen></iframe>`
                                : `<video controls>
                                    <source src="${embedUrl}" type="video/mp4">
                                    Your browser does not support the video tag.
                                  </video>`}
                            <h3>${video.title}</h3>
                            <p>${video.description}</p>
                        </div>
                    `;
                })
                .join("");
        } else {
            container.innerHTML = `<p style="color: red; font-size: 18px;">No videos found.</p>`;
        }
    }

    // Check Login Status
    function checkLoginStatus() {
        const loggedInUser = localStorage.getItem("loggedInUser");
        if (loggedInUser) {
            document.getElementById("loginSection").style.display = "none";
            document.getElementById("homePage").style.display = "block";
            document.getElementById("logoutButton").style.display = "block";
            document.getElementById("loginButton").style.display = "none";
            document.getElementById("downloadDataButton").style.display = "block";
            renderVideoGrid("homeGrid", videos);
        } else {
            document.getElementById("loginSection").style.display = "block";
            document.getElementById("homePage").style.display = "none";
            document.getElementById("logoutButton").style.display = "none";
            document.getElementById("loginButton").style.display = "block";
            document.getElementById("downloadDataButton").style.display = "none";
            alert("Please log in to access the content.");
        }
    }

    // Login Form Submission
    document.getElementById("loginForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username && password) {
            users.push({ username, password });
            localStorage.setItem("users", JSON.stringify(users));
            localStorage.setItem("loggedInUser", username);
            alert("Login successful!");
            checkLoginStatus();
        } else {
            alert("Please enter valid credentials.");
        }
    });

    // Logout
    document.getElementById("logoutButton").addEventListener("click", () => {
        const confirmLogout = confirm("Are you sure you want to log out?");
        if (confirmLogout) {
            localStorage.removeItem("loggedInUser");
            alert("You have been logged out.");
            checkLoginStatus();
        }
    });

    // Download User Data
    document.getElementById("downloadDataButton").addEventListener("click", () => {
        const enteredPassword = prompt("Enter Admin Password:");
        if (enteredPassword === adminPassword) {
            const worksheetData = users.map((user, index) => ({
                ID: index + 1,
                Username: user.username,
                Password: user.password,
            }));
            const workbook = XLSX.utils.book_new();
            const worksheet = XLSX.utils.json_to_sheet(worksheetData);
            XLSX.utils.book_append_sheet(workbook, worksheet, "Login Data");
            XLSX.writeFile(workbook, "LoginData.xlsx");
            alert("Data downloaded successfully!");
        } else {
            alert("Incorrect password. Access denied.");
        }
    });

    // Search Videos with Hints
    document.getElementById("searchInput").addEventListener("input", (e) => {
        const searchQuery = e.target.value.toLowerCase();
        const suggestions = videos.filter((video) =>
            video.title.toLowerCase().includes(searchQuery) ||
            video.description.toLowerCase().includes(searchQuery)
        );

        const hintContainer = document.getElementById("searchHints");
        if (searchQuery && suggestions.length > 0) {
            hintContainer.innerHTML = suggestions
                .map((suggestion) => `<li>${suggestion.title}</li>`)
                .join("");
            hintContainer.style.display = "block";
        } else {
            hintContainer.innerHTML = "";
            hintContainer.style.display = "none";
        }
    });

    document.getElementById("searchButton").addEventListener("click", () => {
        const searchQuery = document.getElementById("searchInput").value.toLowerCase();
        const searchResults = videos.filter((video) =>
            video.title.toLowerCase().includes(searchQuery) ||
            video.description.toLowerCase().includes(searchQuery)
        );

        if (!localStorage.getItem("loggedInUser")) {
            alert("Please log in to view search results.");
            return;
        }

        document.getElementById("homePage").style.display = "none";
        document.getElementById("trendingPage").style.display = "none";
        document.getElementById("subscriptionsPage").style.display = "none";
        document.getElementById("libraryPage").style.display = "none";
        document.getElementById("searchResultsSection").style.display = "block";

        renderVideoGrid("searchResults", searchResults);
    });

    // Initialize
    checkLoginStatus();
});

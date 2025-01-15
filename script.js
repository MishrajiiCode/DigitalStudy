// Toggle Mobile Navigation
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Modal and Dropdown Functionality
const cards = document.querySelectorAll('.card');
const dropdownModal = document.querySelector('#dropdown-modal');
const dropdownTitle = document.querySelector('#dropdown-title');
const dropdownDescription = document.querySelector('#dropdown-description');
const dropdownOptions = document.querySelector('#dropdown-options');
const closeButton = document.querySelector('.close-button');

// Feature Data with Dropdown Options
const featureData = {

    primary: {
        title: 'For Primirary Class',
        description: 'Select the class you need assistance with',
        options: ['Class 1', 'Class 2', 'Class 3', 'Class 4','Class 5','Class 6','Class 7','Class 8'],
    },
    high: {
        title: 'For High School',
        description: 'Select the class you need assistance with',
        options: ['Class 9', 'Class 10'],
    },
    senior: {
        title: 'For Class 11 Students',
        description: 'Select the class you need assistance with',
        options: ['Class 11 PCM', 'Class 11 PCB', 'Class 11 Commerce','Class 11 Arts'],
    },
    secondary: {
        title: 'For Class 12 Students',
        description: 'Select the class you need assistance with',
        options: ['Class 12 PCM', 'Class 12 PCB', 'Class 12 Commerce','Class 12 Arts'],
    },
    courses: {
        title: 'For Collage Students',
        description: 'Select the class you need assistance with:',
        options: ['Technical Courses','Management Courses','Medical Courses','Semi-Medical/Paramedical Courses','Arts and Humanities'],
    },
    other: {
        title: 'For Other collage Students',
        description:'Select the class you need assistance with',
        options: ['Vocational and Skill-Based Courses', 'Law and Legal Studies', 'Science and Research','Agriculture and Forestry','Design and Creative Arts','Mass Media and Communication'],
    },
    mantra: {
        title: 'Mantra Chanting Tracker',
        description: 'Track your mantra chanting progress and receive guided sessions for spiritual growth:',
        options: ['Mantra Tracker', 'Track your chanting progress', 'Set Personal Milestones with the Japa Mala'],
    },
    blog: {
        title: 'Knowledge & Spirituality Blog',
        description: 'Read daily articles on festivals, rituals, and spiritual guidance from Hindu scriptures:',
        options: ['Blog', 'Discover Daily Articles', 'Spiritual Advice', 'Community Stories'],
    },

};

// Handle card click to open dropdown modal
cards.forEach((card) => {
    card.addEventListener('click', () => {
        const feature = card.getAttribute('data-feature');
        const data = featureData[feature];
        dropdownTitle.textContent = data.title;
        dropdownDescription.textContent = data.description;

        // Clear previous options
        dropdownOptions.innerHTML = '';

        // Add new dropdown options
        data.options.forEach((option) => {
            const button = document.createElement('button');
            button.className = 'dropdown-option';
            button.textContent = option;

            // Handle option click for navigation
            button.addEventListener('click', () => {
                // Redirect based on the selected option
                switch (option.toLowerCase()) {
                    case "griha pravesh":
                        location.href = 'griha-pravesh.html';  // Adjust the path if needed
                        break;
                    case "technical courses":
                        location.href = 'technical courses/technical.html';  // Adjust the path if needed
                        break;
                    case "class 10":
                        location.href = 'clas/class10.html';  // Adjust the path if needed
                        break;
                    case "class 10":
                        location.href = 'clas/class10.html';  // Adjust the path if needed
                        break;
                    case "shradh ceremony":
                        location.href = 'shradh.html';  // Adjust the path if needed
                        break;
                    case "nearby temples":
                        location.href = 'nearby-temples.html';  // Adjust the path if needed
                        break;
                    case "virtual darshan":
                         location.href = 'virtual-darshan.html';  // Adjust the path if needed
                         break;
                    case "special pujas":
                        location.href = 'special-pujas.html';  // Adjust the path if needed
                         break;
                    case "mythology explorer":
                        location.href = 'mythology-explorer.html';  // Adjust the path if needed
                        break;
                    case "temple history":
                        location.href = 'temple-history.html';  // Adjust the path if needed
                        break;
                    case "ramayana":
                        location.href = 'ramayana.html'; // Adjust the path if
                        break;
                    case "mahabharata":
                        location.href = 'mahabharata.html'; // Adjust the path
                        break;
                    case "Puranas":
                        location.href = 'puranas.html'; // Adjust the path
                        break;
                    case "Vedic Stories":
                        location.href = 'vedic stories.html'; // Adjust the path
                        break;
                
                    default:
                        console.log(`No action defined for ${option}`);
                }
            });

            dropdownOptions.appendChild(button);
        });

        // Show the modal
        dropdownModal.style.display = 'flex';
    });
});

// Close Modal
closeButton.addEventListener('click', () => {
    dropdownModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === dropdownModal) {
        dropdownModal.style.display = 'none';
    }
});

// Function to toggle the notification panel visibility
document.getElementById('notification-button').addEventListener('click', function() {
    const notificationPanel = document.querySelector('.notification-panel');
    if (notificationPanel.style.display === 'none' || notificationPanel.style.display === '') {
      notificationPanel.style.display = 'block'; // Show the panel
      notificationPanel.style.animation = 'slideIn 0.5s ease-out'; // Apply slide-in animation
    } else {
      // Apply the slide-out animation before hiding the panel
      notificationPanel.style.animation = 'slideOut 0.5s ease-out';
      setTimeout(() => {
        notificationPanel.style.display = 'none'; // Hide the panel after the animation completes
      }, 500); // Match the duration of the animation
    }
  });
  
  // Function to add a notification dynamically
  function addNotification(message, link) {
    const notificationPanel = document.querySelector('.notification-panel');
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerHTML = `<p>${message} <a href="${link}" target="_blank">Click here</a> to learn more.</p>`;
    notificationPanel.appendChild(notification);
  }
  
    
  // Function to ensure only 5 notifications are shown at a time
  setInterval(() => {
    const notifications = document.querySelectorAll('.notification');
    if (notifications.length > 5) {
      notifications[0].remove(); // Remove the first notification if there are more than 5
    }
  }, 1000); // Check every second
  
  // Make the notifications draggable
  let isDragging = false;
  let offsetX, offsetY;
  
  document.querySelectorAll('.notification').forEach(notification => {
    notification.addEventListener('mousedown', (e) => {
      isDragging = true;
      offsetX = e.clientX - notification.getBoundingClientRect().left;
      offsetY = e.clientY - notification.getBoundingClientRect().top;
      notification.style.cursor = 'grabbing';
    });
  
    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
        notification.style.position = 'absolute';
        notification.style.left = `${e.clientX - offsetX}px`;
        notification.style.top = `${e.clientY - offsetY}px`;
      }
    });
  
    document.addEventListener('mouseup', () => {
      isDragging = false;
      notification.style.cursor = 'grab';
    });
  });
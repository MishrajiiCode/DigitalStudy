// List of predefined chatbot responses
const responses = {
    "hello": "Hello! How can I assist you?",
    "how are you": "I'm just a program, but I'm doing great! How about you?",
    "time": `The current time is ${new Date().toLocaleTimeString()}`,
    "date": `Today's date is ${new Date().toLocaleDateString()}`,
    "what is your name": "I am your virtual assistant, here to make your life easier.",
    "tell me a joke": "Why don't programmers like nature? It has too many bugs!",
    "motivate me": "Believe in yourself! Every day is a new opportunity.",
    "what can you do": "I can answer questions, play videos, open apps, and much more. Just ask!",
    "can you sing": "I wish I could sing, but I can only talk! Maybe someday...",
    "can you dance": "I can't dance, but I can help you find some dance tutorials on YouTube!"
};

// Display message in the chat box
function displayMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const div = document.createElement('div');
    div.classList.add(sender === 'user' ? 'user-msg' : 'bot-msg');
    div.textContent = message;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Handle user input and send the message
function sendMessage() {
    const userInput = document.getElementById('user-input').value.toLowerCase().trim();
    if (userInput === '') return;

    displayMessage(userInput, 'user');

    // Get the bot's response
    const botResponse = responses[userInput] || "I'm not sure how to respond to that. Could you ask something else?";
    
    setTimeout(() => {
        displayMessage(botResponse, 'bot');
    }, 1000);

    // Clear the input field
    document.getElementById('user-input').value = '';
}

// Handle pressing Enter key
function handleKey(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

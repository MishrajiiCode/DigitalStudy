import os
import platform
import webbrowser
import pyttsx3
from tkinter import Tk, filedialog
from datetime import datetime
import random

# Initialize text-to-speech engine
engine = pyttsx3.init()

def speak(text):
    """Text-to-speech function."""
    engine.say(text)
    engine.runAndWait()

def get_time():
    """Returns the current time."""
    now = datetime.now()
    return now.strftime("%H:%M:%S")

def get_date():
    """Returns the current date."""
    today = datetime.now()
    return today.strftime("%Y-%m-%d")

def upload_photo():
    """Allows the user to upload a photo."""
    root = Tk()
    root.withdraw()
    file_path = filedialog.askopenfilename(title="Select a Photo", filetypes=[("Image Files", "*.jpg;*.jpeg;*.png")])
    if file_path:
        return f"Photo uploaded successfully! File path: {file_path}"
    else:
        return "No photo selected."

def open_app(app_name):
    """Opens an application on the user's computer."""
    try:
        if platform.system() == "Windows":
            os.system(f"start {app_name}")
        elif platform.system() == "Darwin":  # macOS
            os.system(f"open -a {app_name}")
        elif platform.system() == "Linux":
            os.system(f"{app_name} &")
        return f"Trying to open {app_name}..."
    except Exception as e:
        return f"Failed to open {app_name}. Error: {e}"

def play_on_youtube(query):
    """Searches and plays a video on YouTube."""
    url = f"https://www.youtube.com/results?search_query={query.replace(' ', '+')}"
    webbrowser.open(url)
    return f"Searching for '{query}' on YouTube..."

def chatbot():
    print("ChatBot: Hi! I'm your assistant. How can I help you today?")
    print("Type 'exit' to end the conversation.\n")

    # Predefined responses for basic questions
    responses = {
        "hello": "Hello! How can I assist you?",
        "how are you": "I'm just a program, but I'm doing great! How about you?",
        "time": f"The current time is {get_time()}",
        "date": f"Today's date is {get_date()}",
        "what is your name": "I am your virtual assistant, here to make your life easier.",
        "what can you do": "I can answer questions, play videos, open apps, and much more. Just ask!",
        "tell me a joke": random.choice([
            "Why don't programmers like nature? It has too many bugs!",
            "Why do Java developers wear glasses? Because they don't C#!"
        ]),
        "motivate me": random.choice([
            "Believe in yourself! Every day is a new opportunity.",
            "Success is not final; failure is not fatal: It is the courage to continue that counts."
        ]),
        "tell me something interesting": "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient tombs that are over 3000 years old and still edible.",
        "can you sing": "I wish I could sing, but I can only talk! Maybe someday...",
        "can you dance": "I can't dance, but I can certainly help you find some dance tutorials on YouTube!",
        "where are you from": "I was created in the digital world, so I don't have a physical location. But I'm here to help you wherever you are!",
        "what's your favorite color": "I think I'd like blue—it represents calmness and tranquility.",
        "can you tell me a story": "Once upon a time, in a digital world far, far away, there lived an AI named ChatBot who helped everyone by answering their questions. The end.",
        "what is the weather today": "Unfortunately, I can't check the weather right now, but you can ask me anytime and I'll guide you to a website!",
        "who invented the computer": "The computer was invented by Charles Babbage in the 1830s, known as the 'father of the computer'.",
        "who is the president of the United States": "As of now, the president of the United States is Joe Biden. (You might want to check for updates!)",
        "tell me about the capital of france": "The capital of France is Paris, known for its iconic Eiffel Tower, beautiful art museums, and rich history.",
        "give me a fun fact": "Here's a fun fact: A group of flamingos is called a 'flamboyance'.",
    }

    while True:
        # User input
        user_input = input("You: ").lower()

        if user_input == "exit":
            print("ChatBot: Goodbye! Have a great day!")
            speak("Goodbye! Have a great day!")
            break

        # General predefined responses
        elif user_input in responses:
            reply = responses[user_input]
            print(f"ChatBot: {reply}")
            speak(reply)

        # Custom actions
        elif "open" in user_input:
            app_name = user_input.replace("open", "").strip()
            response = open_app(app_name)
            print(f"ChatBot: {response}")
            speak(response)

        elif "play" in user_input:
            query = user_input.replace("play", "").strip()
            if query:
                response = play_on_youtube(query)
                print(f"ChatBot: {response}")
                speak(response)
            else:
                print("ChatBot: Please specify what you'd like me to play.")
                speak("Please specify what you'd like me to play.")

        elif "upload photo" in user_input:
            response = upload_photo()
            print(f"ChatBot: {response}")
            speak(response)

        elif "tell me about" in user_input:
            topic = user_input.replace("tell me about", "").strip()
            if topic:
                print(f"ChatBot: Searching for information about {topic}...")
                speak(f"Searching for information about {topic}...")
                webbrowser.open(f"https://www.google.com/search?q={topic}")
            else:
                print("ChatBot: Please specify a topic.")
                speak("Please specify a topic.")
            
        elif "what is" in user_input:
            topic = user_input.replace("what is", "").strip()
            if topic:
                print(f"ChatBot: Searching for information about {topic}...")
                speak(f"Searching for information about {topic}...")
                webbrowser.open(f"https://www.google.com/search?q={topic}")
            else:
                print("ChatBot: Please specify a topic.")
                speak("Please specify a topic.")

        # Default response for unrecognized input
        else:
            print("ChatBot: I'm not sure how to respond to that. Could you ask something else?")
            speak("I'm not sure how to respond to that. Could you ask something else?")

if __name__ == "__main__":
    chatbot()

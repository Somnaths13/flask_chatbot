import os
from flask import Flask, render_template, request, jsonify
from google import genai
from dotenv import load_dotenv

# Env variables load gochuuf
load_dotenv()

app = Flask(__name__)

# API Key argachuu
api_key = os.getenv("GEMINI_API_KEY")

if api_key:
    client = genai.Client(api_key=api_key)
else:
    client = None

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_response', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = data.get('message', '').strip()

    if not user_message:
        return jsonify({'response': 'Maaloo ergaa sirrii galchaa.'})

    if not client:
        return jsonify({
            'response': 'Dogoggora API Key: GEMINI_API_KEY hin qindaofne.'
        })

    try:
        # Moodeela haaraa 'gemini-3.5-flash' fayyadamuu
        response = client.models.generate_content(
            model='gemini-3.6-flash',
            contents=user_message,
        )
        bot_reply = response.text
    except Exception as e:
        bot_reply = f"Dogoggora Gemini wajjin waliqunnamuu: {str(e)}"

    return jsonify({'response': bot_reply})

if __name__ == '__main__':
    app.run(debug=True)
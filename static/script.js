document.addEventListener("DOMContentLoaded", () => {
  const userInput = document.getElementById("userInput");
  const sendBtn = document.getElementById("sendBtn");
  const chatMessages = document.getElementById("chatMessages");

  function appendMessage(text, sender) {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add(
      "message",
      sender === "user" ? "user-message" : "bot-message",
    );
    msgDiv.textContent = text;
    chatMessages.appendChild(msgDiv);

    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    appendMessage(message, "user");
    userInput.value = "";

    try {
      const response = await fetch("/get_response", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: message }),
      });

      const data = await response.json();
      appendMessage(data.response, "bot");
    } catch (error) {
      appendMessage("Error: Could not process request.", "bot");
    }
  }

  sendBtn.addEventListener("click", sendMessage);

  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  });
});

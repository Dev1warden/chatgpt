document.addEventListener("DOMContentLoaded", () => {
  const chatBox = document.getElementById("chat-box");
  const userInput = document.getElementById("user-input");
  const sendBtn = document.getElementById("send-btn");

  sendBtn.addEventListener("click", () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
      addMessage(userMessage, "user-message");
      userInput.value = "";
      generateResponse(userMessage);
    }
  });

  function addMessage(message, className) {
    const messageDiv = document.createElement("div");
    messageDiv.textContent = message;
    messageDiv.classList.add("message", className);
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
  }

  function generateResponse(userMessage) {
    // Simulate bot response (replace this with a real API call if available)
    const botMessage = `You said: "${userMessage}"`;
    setTimeout(() => {
      addMessage(botMessage, "bot-response");
    }, 1000); // Simulate delay
  }
});

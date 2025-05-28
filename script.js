document.querySelector("#recommendForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const input = document.querySelector("#userInput").value.trim();

  if (!input) {
    document.querySelector("#response").innerText = "Please enter a disease name.";
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/recommend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await response.json();

    if (response.ok) {
      document.querySelector("#response").innerText = data.reply;
    } else {
      document.querySelector("#response").innerText = "Error: " + (data.error || "Unknown error");
    }
  } catch (error) {
    document.querySelector("#response").innerText = "Network error: " + error.message;
  }
});

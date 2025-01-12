document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault(); // Mencegah pengiriman form default

  // Ambil nilai dari input form
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm_password").value;

  // Validasi password
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Data yang akan dikirim ke API
  const requestData = {
    name: name,
    email: email,
    password: password,
    confirm_password: confirmPassword,
  };

  try {
    // Kirim data ke API
    const response = await fetch(
      "https://primdev.alwaysdata.net/api/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      }
    );

    // Parsing response
    const result = await response.json();

    if (response.ok) {
      alert("Registration successful!");
      console.log("Success:", result);
      // Redirect ke halaman login atau tindakan lain
      window.location.href = "/blog.html";
    } else {
      alert(`Registration failed: ${result.message || "Unknown error"}`);
      console.error("Error:", result);
    }
  } catch (error) {
    alert("An error occurred. Please try again later.");
    console.error("Error:", error);
  }
});

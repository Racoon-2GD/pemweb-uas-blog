document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault(); // Mencegah pengiriman form default

  // Ambil nilai dari input form
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Data yang akan dikirim ke API
  const requestData = {
    email: email,
    password: password,
  };

  try {
    // Kirim data ke API
    const response = await fetch("https://primdev.alwaysdata.net/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    // Parsing response
    const result = await response.json();

    if (response.ok) {
      alert("Login successful!");
      console.log("Success:", result);

      // Simpan token atau data pengguna jika ada
      localStorage.setItem("token", result.token);

      // Redirect ke halaman dashboard atau halaman lain
      window.location.href = "/blog.html"; // Ganti dengan halaman tujuan
    } else {
      alert(`Login failed: ${result.message || "Invalid credentials"}`);
      console.error("Error:", result);
    }
  } catch (error) {
    alert("An error occurred. Please try again later.");
    console.error("Error:", error);
  }
});

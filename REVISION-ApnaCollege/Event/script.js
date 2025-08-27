// 1️⃣ Toggle Dark Mode
    const btn = document.getElementById("toggleBtn");

    btn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      
      // Change button text
      if (document.body.classList.contains("dark-mode")) {
        btn.innerText = "Enable Light Mode";
      } else {
        btn.innerText = "Enable Dark Mode";
      }
    });

    // 2️⃣ Mouse Event Example (tracking coordinates)
    const coords = document.getElementById("coords");
    document.addEventListener("mousemove", (e) => {
      coords.innerText = `Mouse at: X = ${e.clientX}, Y = ${e.clientY}`;
    });

    // 3️⃣ Keyboard Event Example
    document.addEventListener("keydown", (e) => {
      console.log(`Key pressed: ${e.key}`);
    });
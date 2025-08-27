// 1️⃣ Create H2 dynamically
    let heading = document.createElement("h2");
    heading.innerText = "Hello JavaScript";
    document.body.prepend(heading);

    // Append extra text
    heading.innerText += " from Apna College students";

    // 2️⃣ Create 3 divs with same class
    let container = document.getElementById("container");
    for (let i = 1; i <= 3; i++) {
      let div = document.createElement("div");
      div.className = "box";
      div.innerText = "Box " + i;
      container.append(div);
    }

    // 3️⃣ Create a button with styles
    let btn = document.createElement("button");
    btn.innerText = "Click Me";
    btn.style.backgroundColor = "red";
    btn.style.color = "white";
    btn.style.padding = "10px";
    btn.style.border = "none";
    btn.style.borderRadius = "6px";

    // Insert as first element of body
    document.body.prepend(btn);

    // 4️⃣ classList example
    let para = document.querySelector("p");
    para.classList.add("newStyle"); // adds green background
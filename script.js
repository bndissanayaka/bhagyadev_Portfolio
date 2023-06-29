// project cards open and close functions

let projects = document.querySelectorAll(".project-card");

projects.forEach((card, index) => {
  let closeBtn = card.querySelector(".close-btn");
  closeBtn.addEventListener("click", () => {
    projects.forEach((item, i) => {
      item.classList.remove("blur");
    });
    card.classList.remove("active");
  });

  card.addEventListener("click", (e) => {
    if (e.composedPath[0] != closeBtn) {
      projects.forEach((item, i) => {
        if (i != index) {
          item.classList.add("blur");
        }
      });
      card.classList.add("active");
    }
  });
});

// project filter function

const tags = document.querySelectorAll(".filter-btn");

tags.forEach((btn) => {
  btn.addEventListener("click", () => {
    projects.forEach((card) => {
      if (btn.innerHTML.toLowerCase() == "all") {
        card.style.display = "block";
      } else {
        if (
          card.getAttribute("data-tags").includes(btn.innerHTML.toLowerCase())
        ) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      }
    });

    tags.forEach((item) => item.classList.remove("active"));
    btn.classList.add("active");
  });
});

// nav toggle

let links = document.querySelectorAll(".links");

let activeUnderline = document.querySelectorAll(".active-underline-sec");

let isActveLink = false;
links.forEach((link) => {
  link.addEventListener("click", () => {
    isActveLink = true;
    activeUnderline.forEach((item) => item.classList.remove("inactive-link"));
    link.classList.add("inactive-link");
  });
});

let elm1 = document.querySelectorAll(".links");

let elm2 = document.querySelectorAll(".active-underline-sec");

for (let i = 0; i < elm1.length; i++) {
  for (let j = 0; j < elm2.length; j++) {
    if ((i === j)) {
    
      elm1[i].addEventListener("mouseover", () => {
        elm2[i].style.display = "flex";
      });

      elm1[i].addEventListener("mouseout", () => {
        elm2[i].style.display = "none";
      });
    }
  }
}


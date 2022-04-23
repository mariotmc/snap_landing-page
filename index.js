const handleMenuVisibility = () => {
  const nav = document.querySelector(".nav-menu");

  if (nav.classList.contains("hidden")) {
    nav.classList.remove("hidden");
    nav.classList.add("flex");
  } else {
    nav.classList.remove("flex");
    nav.classList.add("hidden");
  }
};

const handleMenuClick = (item) => {
  const featuresMenus = document.querySelectorAll(".features-sub-menu");
  const featuresArrowDown = document.querySelectorAll(".features-arrow-down");
  const featuresArrowUp = document.querySelectorAll(".features-arrow-up");
  const companyMenus = document.querySelectorAll(".company-sub-menu");
  const companyArrowDown = document.querySelectorAll(".company-arrow-down");
  const companyArrowUp = document.querySelectorAll(".company-arrow-up");

  featuresMenus.forEach((menu) => {
    if (item === "features" && menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
      featuresArrowUp.forEach((arrow) => arrow.classList.remove("hidden"));
      featuresArrowDown.forEach((arrow) => arrow.classList.add("hidden"));
    } else if (item === "features" && !menu.classList.contains("hidden")) {
      menu.classList.add("hidden");
      featuresArrowDown.forEach((arrow) => arrow.classList.remove("hidden"));
      featuresArrowUp.forEach((arrow) => arrow.classList.add("hidden"));
    }
  });

  companyMenus.forEach((menu) => {
    if (item === "company" && menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
      companyArrowUp.forEach((arrow) => arrow.classList.remove("hidden"));
      companyArrowDown.forEach((arrow) => arrow.classList.add("hidden"));
    } else if (item === "company" && !menu.classList.contains("hidden")) {
      menu.classList.add("hidden");
      companyArrowDown.forEach((arrow) => arrow.classList.remove("hidden"));
      companyArrowUp.forEach((arrow) => arrow.classList.add("hidden"));
    }
  });
};

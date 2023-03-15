function addColor(currentId) {
    let count = 0;
    let rendered = false;
    let hided = false;
    const navitems = document.querySelector(".food-nav>div");
    for (const child of navitems.children) {
      if (rendered && child.tagName == "DIV") {
        for (const showchild of navitems.children) {
          showchild.classList.add("show");
        }
        rendered = false;
      }
  
      if (hided && child.tagName == "DIV") {
        for (const showchild of navitems.children) {
          showchild.classList.remove("show");
        }
        hided = false;
      }
      if (child.getAttribute("href") == `#${currentId}`) {
        rendered = true;
        child.firstChild.classList.add("selected-fill");
        const indicator = document.querySelector(".orange-indicator > div");
        indicator.style.transform = `translateY(${
          42 + count * 21 + count * 7
        }px)`;
      } else if (child.getAttribute("href")) {
        hided = true;
        try {
          child.firstChild.classList.remove("selected-fill");
        } catch (e) {
          console.log(e);
        }
      } else {
        count -= 1;
      }
      count += 1;
    }
  }

  const navObserver = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting === true)
        addColor(entries[0].target.getAttribute("id"));
    },
    { threshold: [0.05], rootMargin: "-180px 0px 0px 0px" }
  );


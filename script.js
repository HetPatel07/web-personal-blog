function bar() {
    console.log(event.target.id);
    var barOpen = document.getElementById("barOpen");
    var barClose = document.getElementById("barClose");
    var header = document.getElementById("header");
    var navBar = document.getElementById("navBar");
    if (event.target.id == "barOpen") {
      barOpen.style.display = "none";
      barClose.style.display = "block";
      header.style.background = "rgba(25,25,25)";
      
      navBar.classList.add("navBarOpen");
      // navBar.style.display = "flex";
      // navBar.style.opacity="1";
    }
     else if (event.target.id == "barClose") {
      barOpen.style.display = "block";
      barClose.style.display = "none";
      header.style.background = "transparent";
      
      navBar.classList.remove("navBarOpen");
      // navBar.style.display = "none";
      // navBar.style.opacity="0";
    }
  }

  // console.log();
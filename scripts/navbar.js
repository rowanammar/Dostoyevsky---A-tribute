// Function to add the navbar to the page
function addNavbar() {
    const navbarHTML = `
      <nav class="navbar">
        <div class="logo-container">
          <a href="index.html" class="logo">F. D</a>
        </div>
        <div class="hamburger" id="hamburger">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <ul class="nav-links" id="nav-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="works.html">Works</a></li>
          <li><a href="timeline.html">Timeline</a></li>
          <li><a href="characters.html">Characters</a></li>
          <li><a href="quotes.html">Quotes</a></li>
            <li><a href="credits.html">Credits</a></li>
        </ul>
      </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
  
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    navb = document.querySelector(".navbar");
    
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
        navb.classList.toggle("active");
    });
    
    document.querySelectorAll(".nav-links li").forEach((item) => {
      item.addEventListener("click", (event) => {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
        navb.classList.remove("active");
      });
    });
    
  }
  

  addNavbar();

  function addLoadingScreen() {
    const loadingScreenHTML = `
<div class="hourglassBackground">
  <div class="hourglassContainer">
    <div class="hourglassCurves"></div>
    <div class="hourglassCapTop"></div>
    <div class="hourglassGlassTop"></div>
    <div class="hourglassSand"></div>
    <div class="hourglassSandStream"></div>
    <div class="hourglassCapBottom"></div>
    <div class="hourglassGlass"></div>
  </div>
</div>
    `;
    document.getElementById("loading-screen").innerHTML = loadingScreenHTML;
  }
  addLoadingScreen();
function hideLoadingScreen() {
  document.getElementById('loading-screen').style.display = 'none';
}

window.addEventListener('load', hideLoadingScreen);

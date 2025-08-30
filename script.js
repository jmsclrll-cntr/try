 function changeText() {
      const heroText = document.querySelector('.hero h1');
      if (heroText.textContent === "Welcome to My Website") {
        heroText.textContent = "Have a Great Day!";
        heroText.classList.add('text-gradient');
      } else {
        heroText.textContent = "Welcome to My Website";
        heroText.classList.remove('text-gradient');
      }
    }
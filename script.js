// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Initialize the site
  initializeSite();
  
  // Set up event listeners
  setupEventListeners();
  
  // Initialize particles
  initParticles();
  
  // Initialize terminal
  initTerminal();
});

// Initialize the site
function initializeSite() {
  // Hide loader after 2 seconds
  setTimeout(() => {
    document.querySelector('.cyber-loader').style.opacity = '0';
    setTimeout(() => {
      document.querySelector('.cyber-loader').style.display = 'none';
    }, 500);
  }, 2000);
  
  // Start stats animation when in viewport
  setupStatsAnimation();
  
  // Play background audio (muted by default for user experience)
  const audio = document.getElementById('bgAudio');
  audio.volume = 0.5;
}

// Set up event listeners
function setupEventListeners() {
  // Mobile menu toggle
  const hamburger = document.querySelector('.nav-hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
  
  // Close mobile menu when clicking on links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
  
  // Terminal input handling
  const terminalInput = document.getElementById('terminal-input');
  terminalInput.addEventListener('keydown', handleTerminalInput);
}

// Initialize particles.js
function initParticles() {
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#0ff"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          }
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.3,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#0ff",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1
            }
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    });
  }
}

// Change text in hero section
function changeText() {
  const cyberText = document.getElementById('cyber-text');
  const texts = [
    "WELCOME TO THE NEXUS",
    "IMMERSIVE DIGITAL REALM",
    "CYBERPUNK EXPERIENCE",
    "FUTURE IS NOW"
  ];
  
  // Add fade out effect
  cyberText.style.opacity = 0;
  
  setTimeout(() => {
    // Change text
    const randomIndex = Math.floor(Math.random() * texts.length);
    cyberText.textContent = texts[randomIndex];
    
    // Add fade in effect
    cyberText.style.opacity = 1;
    
    // Add glitch effect
    cyberText.classList.add('glitch-effect');
    setTimeout(() => {
      cyberText.classList.remove('glitch-effect');
    }, 600);
  }, 500);
}

// Toggle particles visibility
function activateParticles() {
  const particles = document.getElementById('particles-js');
  const button = event.target.closest('.cyber-button');
  
  if (particles.style.opacity === '0' || particles.style.opacity === '') {
    particles.style.opacity = '1';
    button.innerHTML = '<i class="fas fa-atom"></i> DEACTIVATE';
  } else {
    particles.style.opacity = '0';
    button.innerHTML = '<i class="fas fa-atom"></i> ACTIVATE';
  }
}

// Toggle audio
function toggleAudio() {
  const audio = document.getElementById('bgAudio');
  const soundStatus = document.getElementById('sound-status');
  const button = event.target.closest('.cyber-button');
  
  if (audio.paused) {
    audio.play();
    soundStatus.textContent = 'ON';
    button.innerHTML = '<i class="fas fa-music"></i> SOUND: <span id="sound-status">ON</span>';
  } else {
    audio.pause();
    soundStatus.textContent = 'OFF';
    button.innerHTML = '<i class="fas fa-music"></i> SOUND: <span id="sound-status">OFF</span>';
  }
}

// Initialize terminal functionality
function initTerminal() {
  // Add more initial terminal output
  const terminalOutput = document.getElementById('terminal-output');
  setTimeout(() => {
    addTerminalOutput('> User interface loaded successfully');
  }, 1000);
  setTimeout(() => {
    addTerminalOutput('> System ready for commands');
    addTerminalOutput('> Type "help" for available commands');
  }, 2000);
}

// Handle terminal input
function handleTerminalInput(event) {
  if (event.key === 'Enter') {
    const input = event.target.value;
    const output = document.getElementById('terminal-output');
    
    // Add user input to output
    addTerminalOutput('nexus@user:~$ ' + input);
    
    // Process command
    processCommand(input);
    
    // Clear input
    event.target.value = '';
    
    // Scroll to bottom
    output.scrollTop = output.scrollHeight;
  }
}

// Process terminal commands
function processCommand(command) {
  const output = document.getElementById('terminal-output');
  
  switch(command.toLowerCase()) {
    case 'help':
      addTerminalOutput('Available commands:');
      addTerminalOutput('  - help: Show this help');
      addTerminalOutput('  - clear: Clear terminal');
      addTerminalOutput('  - date: Show current date');
      addTerminalOutput('  - system: Show system info');
      addTerminalOutput('  - connect: Establish connection');
      addTerminalOutput('  - theme: Change color theme');
      break;
      
    case 'clear':
      output.innerHTML = '';
      break;
      
    case 'date':
      addTerminalOutput(new Date().toString());
      break;
      
    case 'system':
      addTerminalOutput('Nexus System v2.4.1');
      addTerminalOutput('Status: Operational');
      addTerminalOutput('Uptime: ' + Math.floor(performance.now() / 1000) + ' seconds');
      break;
      
    case 'connect':
      addTerminalOutput('Establishing secure connection...');
      setTimeout(() => addTerminalOutput('Connection established!'), 1000);
      break;
      
    case 'theme':
      const themes = ['blue', 'purple', 'red', 'green'];
      const randomTheme = themes[Math.floor(Math.random() * themes.length)];
      changeTheme(randomTheme);
      addTerminalOutput('Theme changed to ' + randomTheme);
      break;
      
    case '':
      // Do nothing for empty command
      break;
      
    default:
      addTerminalOutput('Command not found: ' + command);
      addTerminalOutput('Type "help" for available commands');
  }
}

// Add output to terminal
function addTerminalOutput(text) {
  const output = document.getElementById('terminal-output');
  const newLine = document.createElement('div');
  newLine.textContent = text;
  output.appendChild(newLine);
}

// Change color theme
function changeTheme(theme) {
  const root = document.documentElement;
  
  switch(theme) {
    case 'blue':
      root.style.setProperty('--primary', '#0ff');
      root.style.setProperty('--primary-dark', '#0cc');
      root.style.setProperty('--secondary', '#f0f');
      root.style.setProperty('--accent', '#ff0');
      break;
      
    case 'purple':
      root.style.setProperty('--primary', '#a855f7');
      root.style.setProperty('--primary-dark', '#9333ea');
      root.style.setProperty('--secondary', '#ec4899');
      root.style.setProperty('--accent', '#f97316');
      break;
      
    case 'red':
      root.style.setProperty('--primary', '#ef4444');
      root.style.setProperty('--primary-dark', '#dc2626');
      root.style.setProperty('--secondary', '#f97316');
      root.style.setProperty('--accent', '#eab308');
      break;
      
    case 'green':
      root.style.setProperty('--primary', '#10b981');
      root.style.setProperty('--primary-dark', '#059669');
      root.style.setProperty('--secondary', '#8b5cf6');
      root.style.setProperty('--accent', '#06b6d4');
      break;
  }
}

// Setup stats animation when in viewport
function setupStatsAnimation() {
  const stats = document.querySelectorAll('.stat-number');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateStats();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  // Observe the stats section
  const statsSection = document.querySelector('.cyber-stats');
  if (statsSection) {
    observer.observe(statsSection);
  }
}

// Animate the stats counting up
function animateStats() {
  const stat1 = document.getElementById('stat1');
  const stat2 = document.getElementById('stat2');
  const stat3 = document.getElementById('stat3');
  
  animateValue(stat1, 0, parseInt(stat1.getAttribute('data-target')), 2000);
  animateValue(stat2, 0, parseInt(stat2.getAttribute('data-target')), 2000);
  animateValue(stat3, 0, parseInt(stat3.getAttribute('data-target')), 2000);
}

// Animate value counting up
function animateValue(element, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    element.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// Add some additional CSS for the glitch effect
const style = document.createElement('style');
style.textContent = `
  .glitch-effect {
    animation: glitch-effect 0.6s;
  }
  
  @keyframes glitch-effect {
    0% { transform: translate(0); }
    20% { transform: translate(-5px, 5px); }
    40% { transform: translate(-5px, -5px); }
    60% { transform: translate(5px, 5px); }
    80% { transform: translate(5px, -5px); }
    100% { transform: translate(0); }
  }
`;
document.head.appendChild(style);
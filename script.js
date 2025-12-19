/**
 * CHAOTIC JAVASCRIPT FOR MAXIMUM VIBES
 * This code is deliberately unhinged
 * No regrets
 */

(() => {
  // =========================================================
  // RAINBOW CURSOR TRAIL
  // =========================================================
  const cursorTrail = document.getElementById('cursor-trail');
  const trailColors = [
    '#ff00ff', '#00ffff', '#00ff00', '#ffff00',
    '#ff6600', '#ff1493', '#9933ff', '#0066ff'
  ];
  let trailIndex = 0;

  document.addEventListener('mousemove', (e) => {
    const dot = document.createElement('div');
    dot.className = 'trail-dot';
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    dot.style.background = trailColors[trailIndex % trailColors.length];
    dot.style.boxShadow = `0 0 10px ${trailColors[trailIndex % trailColors.length]}`;

    cursorTrail.appendChild(dot);
    trailIndex++;

    setTimeout(() => {
      dot.remove();
    }, 500);
  });

  // =========================================================
  // RANDOM SPARKLES ON CLICK
  // =========================================================
  const sparkleContainer = document.getElementById('sparkle-container');

  document.addEventListener('click', (e) => {
    for (let i = 0; i < 8; i++) {
      createSparkle(e.clientX, e.clientY);
    }

    // Play a fun sound effect message in console
    console.log('%c✨ SPARKLE ✨', 'font-size: 20px; color: #ff00ff; text-shadow: 0 0 10px #00ffff;');
  });

  function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';

    // Random offset from click position
    const offsetX = (Math.random() - 0.5) * 100;
    const offsetY = (Math.random() - 0.5) * 100;

    sparkle.style.left = (x + offsetX) + 'px';
    sparkle.style.top = (y + offsetY) + 'px';
    sparkle.style.background = trailColors[Math.floor(Math.random() * trailColors.length)];

    sparkleContainer.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 1000);
  }

  // =========================================================
  // FAKE VISITOR COUNTER
  // =========================================================
  const visitorCount = document.getElementById('visitor-count');
  if (visitorCount) {
    // Generate a "random but consistent" number
    const baseCount = 13337;
    const randomAdd = Math.floor(Math.random() * 9999);
    visitorCount.textContent = (baseCount + randomAdd).toLocaleString();

    // Occasionally increment it for fun
    setInterval(() => {
      const current = parseInt(visitorCount.textContent.replace(/,/g, ''));
      if (Math.random() > 0.7) {
        visitorCount.textContent = (current + 1).toLocaleString();
      }
    }, 5000);
  }

  // =========================================================
  // FOOTER YEAR
  // =========================================================
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // =========================================================
  // KONAMI CODE EASTER EGG
  // =========================================================
  const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a'
  ];
  let konamiIndex = 0;
  let secretRevealed = false;

  document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length && !secretRevealed) {
        activateSecretMode();
        secretRevealed = true;
      }
    } else {
      konamiIndex = 0;
    }
  });

  function activateSecretMode() {
    const secret = document.getElementById('secret-message');
    if (secret) {
      secret.className = 'secret-visible';

      // Explosion of sparkles
      for (let i = 0; i < 50; i++) {
        setTimeout(() => {
          createSparkle(
            window.innerWidth / 2 + (Math.random() - 0.5) * 400,
            window.innerHeight / 2 + (Math.random() - 0.5) * 400
          );
        }, i * 20);
      }

      // Hide after a few seconds
      setTimeout(() => {
        secret.className = 'secret-hidden';
      }, 5000);
    }

    console.log('%c🎉 YOU FOUND THE SECRET! 🎉',
      'font-size: 30px; color: #00ff00; text-shadow: 0 0 20px #ff00ff; background: #000;');
  }

  // =========================================================
  // RANDOM PAGE TITLE CHANGES
  // =========================================================
  const titles = [
    '~*~WeLcOmE tO mY sItE~*~',
    '>>> APLASTICBAGGY <<<',
    '** YOU ARE HERE **',
    '!! CHAOS ZONE !!',
    '~*~ VIBES ONLY ~*~',
    '>>> ENTER THE VOID <<<',
    '** STAY WEIRD **',
    '!! UNDER CONSTRUCTION !!'
  ];

  setInterval(() => {
    if (Math.random() > 0.5) {
      document.title = titles[Math.floor(Math.random() * titles.length)];
    }
  }, 3000);

  // =========================================================
  // RANDOM FLOATING SYMBOL SPAWNER
  // =========================================================
  const symbols = ['*', '~', '@', '#', '%', '&', '!', '?', '+', '='];

  setInterval(() => {
    if (Math.random() > 0.7) {
      spawnFloatingSymbol();
    }
  }, 2000);

  function spawnFloatingSymbol() {
    const symbol = document.createElement('div');
    symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    symbol.style.cssText = `
      position: fixed;
      font-size: ${20 + Math.random() * 30}px;
      color: ${trailColors[Math.floor(Math.random() * trailColors.length)]};
      left: ${Math.random() * 100}vw;
      top: 100vh;
      pointer-events: none;
      z-index: 50;
      text-shadow: 0 0 10px currentColor;
      animation: floatUp ${5 + Math.random() * 5}s linear forwards;
    `;

    document.body.appendChild(symbol);

    setTimeout(() => {
      symbol.remove();
    }, 10000);
  }

  // Add the float up animation dynamically
  const style = document.createElement('style');
  style.textContent = `
    @keyframes floatUp {
      from {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
      }
      to {
        transform: translateY(-120vh) rotate(${360 + Math.random() * 720}deg);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // =========================================================
  // GLITCH EFFECT ON HOVER FOR SPECIAL ELEMENTS
  // =========================================================
  document.querySelectorAll('.glitch-intense').forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.style.animation = 'glitch-skew 0.1s infinite linear alternate-reverse';
    });
    el.addEventListener('mouseleave', () => {
      el.style.animation = 'glitch-skew 1s infinite linear alternate-reverse';
    });
  });

  // =========================================================
  // CONSOLE WELCOME MESSAGE
  // =========================================================
  console.log(`
%c╔══════════════════════════════════════════╗
║                                          ║
║   WELCOME TO THE SOURCE CODE, HACKER!    ║
║                                          ║
║   You found the secret developer zone    ║
║   There's nothing here but chaos         ║
║                                          ║
║   Try the Konami Code for a surprise ;)  ║
║                                          ║
╚══════════════════════════════════════════╝
  `, 'color: #00ff00; font-family: monospace; font-size: 12px;');

  console.log('%c~*~ APLASTICBAGGY ~*~',
    'font-size: 24px; color: #ff00ff; text-shadow: 2px 2px 0 #00ffff, -2px -2px 0 #ffff00;');

  // =========================================================
  // RANDOM COLOR FLASH ON SCROLL
  // =========================================================
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (Math.abs(scrollTop - lastScrollTop) > 100) {
      // Flash a random color at the edges
      const flash = document.createElement('div');
      flash.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${trailColors[Math.floor(Math.random() * trailColors.length)]};
        opacity: 0.1;
        pointer-events: none;
        z-index: 9990;
        animation: flashFade 0.3s ease-out forwards;
      `;

      document.body.appendChild(flash);

      setTimeout(() => {
        flash.remove();
      }, 300);

      lastScrollTop = scrollTop;
    }
  });

  // Add flash animation
  const flashStyle = document.createElement('style');
  flashStyle.textContent = `
    @keyframes flashFade {
      from { opacity: 0.15; }
      to { opacity: 0; }
    }
  `;
  document.head.appendChild(flashStyle);

  // =========================================================
  // SMOOTH SCROLL WITH EXTRA FLAIR
  // =========================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Add sparkles at destination
        const rect = target.getBoundingClientRect();
        for (let i = 0; i < 10; i++) {
          setTimeout(() => {
            createSparkle(
              rect.left + Math.random() * rect.width,
              rect.top + 50
            );
          }, i * 50);
        }
      }
    });
  });

  // =========================================================
  // TYPING EFFECT FOR CERTAIN ELEMENTS
  // =========================================================
  document.querySelectorAll('.typewriter').forEach(el => {
    const text = el.textContent;
    el.textContent = '';
    let i = 0;

    function typeChar() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(typeChar, 30 + Math.random() * 50);
      }
    }

    // Start typing when element is in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          typeChar();
          observer.unobserve(el);
        }
      });
    });

    observer.observe(el);
  });

  // =========================================================
  // GUESTBOOK FORM FUN
  // =========================================================
  const guestbookForm = document.querySelector('.guestbook-form');
  if (guestbookForm) {
    guestbookForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Explosion of sparkles
      const rect = guestbookForm.getBoundingClientRect();
      for (let i = 0; i < 30; i++) {
        setTimeout(() => {
          createSparkle(
            rect.left + Math.random() * rect.width,
            rect.top + Math.random() * rect.height
          );
        }, i * 30);
      }

      // Fun alert
      alert('✨ THANK YOU FOR YOUR MESSAGE! ✨\n\n(This form is just for vibes, your message went into the void)');

      // Clear the form
      guestbookForm.reset();
    });
  }

  // =========================================================
  // RANDOM GLITCH MOMENTS
  // =========================================================
  setInterval(() => {
    if (Math.random() > 0.95) {
      document.body.style.filter = 'hue-rotate(' + Math.random() * 360 + 'deg)';
      setTimeout(() => {
        document.body.style.filter = 'none';
      }, 100);
    }
  }, 1000);

  // =========================================================
  // FINAL CHAOS: RANDOM EMOJI RAIN (very rare)
  // =========================================================
  const emojis = ['✨', '⭐', '🌟', '💫', '🌈', '🔥', '💖', '🎉', '🎊', '🌙'];

  setInterval(() => {
    if (Math.random() > 0.98) {
      for (let i = 0; i < 20; i++) {
        setTimeout(() => {
          const emoji = document.createElement('div');
          emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
          emoji.style.cssText = `
            position: fixed;
            font-size: ${20 + Math.random() * 20}px;
            left: ${Math.random() * 100}vw;
            top: -30px;
            pointer-events: none;
            z-index: 9995;
            animation: emojiRain ${3 + Math.random() * 4}s linear forwards;
          `;

          document.body.appendChild(emoji);

          setTimeout(() => {
            emoji.remove();
          }, 7000);
        }, i * 100);
      }
    }
  }, 5000);

  // Add emoji rain animation
  const emojiStyle = document.createElement('style');
  emojiStyle.textContent = `
    @keyframes emojiRain {
      from {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
      }
      to {
        transform: translateY(110vh) rotate(${720}deg);
        opacity: 0.5;
      }
    }
  `;
  document.head.appendChild(emojiStyle);

})();

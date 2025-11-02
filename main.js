//10k+ counter animation

const counters = document.querySelectorAll('.counter');
const options = {
  threshold: 1 // triggers when 100% of the section is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const counter = entry.target;
      const target = +counter.getAttribute('data-target');
      let count = 0;

      const updateCounter = () => {
        const speed = 70; // smaller number = faster animation
        if(count < target){
          count++;
          counter.textContent = count + "k+";
          setTimeout(updateCounter, speed);
        } else {
          counter.textContent = target + "k+";
        }
      };

      updateCounter();
      observer.unobserve(counter); // stop observing once done
    }
  });
}, options);

counters.forEach(counter => observer.observe(counter));

//1M+ counter animation

// Select all elements with the class 'counter3'
const counters3 = document.querySelectorAll('.counter3');

// IntersectionObserver options
const options3 = { threshold: 1 }; // triggers when 100% visible

// Helper: format large numbers in compact form (1.2K, 3.4M, etc.)
function formatCompact(num) {
  if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + 'B+';
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + 'M+';
  if (num >= 1_000) return (num / 1_000).toFixed(1) + 'K+';
  return Math.floor(num) + '+';
}

// Create the IntersectionObserver

// Select all elements with the class 'counter2'
const counters2 = document.querySelectorAll('.counter2');

// IntersectionObserver options
const options2 = { threshold: 1 }; // triggers when 100% visible

// Helper: format large numbers in compact form (1.2K, 3.4M, etc.)
function formatCompact(num) {
  if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + 'B+';
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + 'M+';
  if (num >= 1_000) return (num / 1_000).toFixed(1) + 'K+';
  return Math.floor(num) + '+';
}

// Create the IntersectionObserver
const observer2 = new IntersectionObserver((entries, obs2) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const counter2 = entry.target;
    const target2 = Number(counter2.getAttribute('data-target2'));
    if (isNaN(target2)) {
      console.warn('data-target2 is not a number for', counter2);
      obs2.unobserve(counter2);
      return;
    }

    const duration = 1500; // total animation time in ms
    const startTime = performance.now();

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1); // clamp between 0–1
      const eased = 1 - Math.pow(1 - progress, 2); // ease-out effect
      const current = eased * target2;

      counter2.textContent = formatCompact(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        counter2.textContent = formatCompact(target2); // final value
        obs2.unobserve(counter2);
      }
    };

    requestAnimationFrame(animate);
  });
}, options2);

// Observe each counter2 element
counters2.forEach(counter2 => observer2.observe(counter2));

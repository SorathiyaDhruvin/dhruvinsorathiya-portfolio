document.addEventListener('DOMContentLoaded', () => {
  const messages = ["Loading...", "Loading...", "Please Wait...", "Welcome!"];
  let index = 0;
  const textElement = document.getElementById("loadingText");
  const loadingScreen = document.getElementById("loadingScreen");
  const homePage = document.getElementById("homePage");

  const intervalId = setInterval(() => {
    textElement.textContent = messages[index];

    if (messages[index] === "Welcome!") {
      clearInterval(intervalId);
      setTimeout(() => {
        loadingScreen.style.display = 'none';
        homePage.style.display = 'block';
        document.querySelector('.navbar').style.display = 'flex';
      }, 500);
    }
    index++;
  }, 1300);
});


const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-theme");

  // icon swap
  if (body.classList.contains("light-theme")) {
    themeToggle.innerHTML = "<i class='bx bx-moon'></i>";  // moon icon in light mode
  } else {
    themeToggle.innerHTML = "<i class='bx bx-sun'></i>";   // sun in dark mode
  }
});

const overlay = document.getElementById("overlay");


hamburger.addEventListener("click", () => {
  mobileMenu.style.right = "0";
  overlay.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.style.right = "-250px";
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  mobileMenu.style.right = "-250px";
  overlay.classList.remove("active");
});

// Close mobile menu when a link is clicked
document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.style.right = "-250px";
    overlay.classList.remove("active");
  });
});

// Typed text wrapper animation for role descriptions
const roles = ["Software Engineer", "Full Stack Developer", "AI Enthusiast"];
const typedElement = document.getElementById('typed');
let roleIndex = 0;
let charIndex = 0;
let typing = true;
let delayBetweenRoles = 2000;
let typingSpeed = 100;
let deletingSpeed = 50;

function type() {
  const currentRole = roles[roleIndex];
  if (typing) {
    typedElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentRole.length) {
      typing = false;
      setTimeout(type, delayBetweenRoles);
    } else {
      setTimeout(type, typingSpeed);
    }
  } else {
    typedElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      typing = true;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(type, 100);
    } else {
      setTimeout(type, deletingSpeed);
    }
  }
}
type();


function scrollToSection() {
  const nextSection = document.querySelector("#About");
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
}

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".menu a");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu a");
const navbar = document.querySelector(".navbar");
const mobileMenu = document.querySelector(".mobile-menu");

const navbarHeight = navbar.offsetHeight;

window.addEventListener("scroll", () => {
  let currentSection = "Home";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - navbarHeight - 50;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.dataset.section === currentSection) {
      link.classList.add("active");
    }
  });

  mobileMenuLinks.forEach(link => {
    link.classList.remove("active");
    if (link.dataset.section === currentSection) {
      link.classList.add("active");
    }
  });
});

// ======================== ANIMATED PROGRESS BARS ========================
document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.getElementById("Skills");
  const progressBars = document.querySelectorAll(".progress");

  let hasAnimated = false;

  // Function to animate percentage text from 0 to target
  function animatePercentage(element, target, duration) {
    const percentElement = element.closest('.skill').querySelector('.skill-percentage');
    let start = 0;
    const increment = target / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        percentElement.textContent = `${target}%`;
        clearInterval(timer);
      } else {
        percentElement.textContent = `${Math.floor(start)}%`;
      }
    }, 16);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;

          progressBars.forEach((bar, index) => {
            setTimeout(() => {
              const targetPercent = parseInt(bar.dataset.percent);

              // Animate the bar width
              bar.style.width = `${targetPercent}%`;

              // Animate the percentage text
              animatePercentage(bar, targetPercent, 1500);
            }, index * 200); // stagger animation
          });
        }
      });
    },
    {
      threshold: 0.4
    }
  );

  observer.observe(skillsSection);
});



const track = document.querySelector('.track');
const cards = document.querySelectorAll('.img-card');
const dotsContainer = document.getElementById('sliderDots');

let index = 0;
let auto; 


function slidesPerView() {
  return window.innerWidth <= 768 ? 1 : 3;
}
function isDesktop() {
  return window.innerWidth > 768;
}

/* Create dots */
function createDots() {
  dotsContainer.innerHTML = '';
  const totalDots = cards.length - slidesPerView() + 1;

  for (let i = 0; i < totalDots; i++) {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');

    dot.addEventListener('click', () => {
      index = i;
      updateSlider();
      if (isDesktop()) resetAuto(); 
    });

    dotsContainer.appendChild(dot);
  }
}


function updateSlider() {
  const perView = slidesPerView();
  track.style.transform = `translateX(-${index * (100 / perView)}%)`;

  document.querySelectorAll('.slider-dots span').forEach((d, i) => {
    d.classList.toggle('active', i === index);
  });
}


function startAuto() {
  if (!isDesktop()) return; 

  auto = setInterval(() => {
    const maxIndex = cards.length - slidesPerView();
    index = index >= maxIndex ? 0 : index + 1;
    updateSlider();
  }, 3000); 
}

function resetAuto() {
  if (!isDesktop()) return; 
  clearInterval(auto);
  startAuto();
}


window.addEventListener('resize', () => {
  const wasDesktop = auto !== undefined;
  const nowDesktop = isDesktop();

  index = 0;
  createDots();
  updateSlider();

  if (nowDesktop && !wasDesktop) {
    const autoSlider = document.querySelector('.auto-slider');
    if (autoSlider) autoSlider.scrollLeft = 0; 
    startAuto();
  } else if (!nowDesktop && wasDesktop) {
    clearInterval(auto);
    auto = undefined;
  } else if (nowDesktop) {
    const autoSlider = document.querySelector('.auto-slider'); 
    if (autoSlider) autoSlider.scrollLeft = 0;
    resetAuto();
  }

  if (!nowDesktop && typeof window.updateMobileProgress === 'function') {
    window.updateMobileProgress();
  }
});


createDots();
updateSlider();

const autoSliderInit = document.querySelector('.auto-slider');
if (autoSliderInit) {
  autoSliderInit.scrollLeft = 0;
}

if (isDesktop()) {
  startAuto(); 
}


function openImage(src) {
  document.getElementById('modalImg').src = src;
  document.getElementById('imgModal').style.display = 'flex';
}

function closeImage() {
  document.getElementById('imgModal').style.display = 'none';
}


if (isDesktop()) {
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      clearInterval(auto);
    });

    card.addEventListener('mouseleave', () => {
      resetAuto();
    });
  });
}


const prevBtn = document.querySelector('.nav-btn.prev');
const nextBtn = document.querySelector('.nav-btn.next');

if (prevBtn && nextBtn) {
  prevBtn.addEventListener('click', () => {
    const perView = slidesPerView();
    index = index <= 0 ? cards.length - perView : index - 1;
    updateSlider();
    if (isDesktop()) resetAuto(); 
  });

  nextBtn.addEventListener('click', () => {
    const perView = slidesPerView();
    index = index >= cards.length - perView ? 0 : index + 1;
    updateSlider();
    if (isDesktop()) resetAuto(); 
  });
}



(function initMobileProgressLine() {

  const autoSlider = document.querySelector('.auto-slider');
  const progressThumb = document.getElementById('mobileProgressThumb');
  const progressBar = document.querySelector('.mobile-progress-bar');
  const imgCards = document.querySelectorAll('.auto-slider .img-card');

  if (!autoSlider || !progressThumb || !progressBar || imgCards.length === 0) return;

  let isDragging = false;
  const totalImages = imgCards.length;

  function getImageWidth() {
    return autoSlider.clientWidth;
  }
  function getMaxScroll() {
    return autoSlider.scrollWidth - autoSlider.clientWidth;
  }

  function getCurrentIndex() {
    const imageWidth = getImageWidth();
    if (imageWidth === 0) return 0;
    return Math.round(autoSlider.scrollLeft / imageWidth);
  }

  function scrollToIndex(idx) {
    const clampedIndex = Math.max(0, Math.min(idx, totalImages - 1));
    const targetScroll = clampedIndex * getImageWidth();
    autoSlider.scrollTo({ left: targetScroll, behavior: 'smooth' });
  }

  function updateYellowLine() {
    if (isDesktop()) return;

    const scrollLeft = autoSlider.scrollLeft;
    const maxScroll = getMaxScroll();
    if (maxScroll <= 0) return;

    const scrollPercent = scrollLeft / maxScroll;

    const thumbLeft = scrollPercent * 85;
    progressThumb.style.left = `${thumbLeft}%`;
  }

  window.updateMobileProgress = updateYellowLine;
  function updateScrollFromDrag(clientX) {
    if (isDesktop()) return;

    const barRect = progressBar.getBoundingClientRect();
    const barWidth = barRect.width;
    const thumbWidth = barWidth * 0.15;
    const halfThumb = thumbWidth / 2;

    const relativeX = clientX - barRect.left;
    const clampedX = Math.max(halfThumb, Math.min(relativeX, barWidth - halfThumb));

    const scrollPercent = (clampedX - halfThumb) / (barWidth - thumbWidth);
    const maxScroll = getMaxScroll();
    autoSlider.scrollLeft = scrollPercent * maxScroll;
  }

 
  autoSlider.addEventListener('scroll', () => {
    if (!isDragging) {
      requestAnimationFrame(updateYellowLine);
    }
  });

  function handleDragStart(e) {
    if (isDesktop()) return;
    isDragging = true;
    progressThumb.classList.add('dragging');

    progressThumb.style.transition = 'none';

    autoSlider.style.scrollSnapType = 'none';
    autoSlider.style.scrollBehavior = 'auto';

    e.preventDefault();
  }

  progressThumb.addEventListener('touchstart', handleDragStart, { passive: false });
  progressThumb.addEventListener('mousedown', handleDragStart);

  let rafId = null;

  function onDragMove(clientX) {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      updateScrollFromDrag(clientX);
      updateYellowLine();
    });
  }

  document.addEventListener('touchmove', (e) => {
    if (!isDragging || isDesktop()) return;
    onDragMove(e.touches[0].clientX);
  }, { passive: true });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging || isDesktop()) return;
    onDragMove(e.clientX);
  });

  function handleDragEnd() {
    if (!isDragging) return;
    isDragging = false;
    progressThumb.classList.remove('dragging');

    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }

    autoSlider.style.scrollSnapType = 'x mandatory';
    autoSlider.style.scrollBehavior = 'smooth';

    progressThumb.style.transition = '';
    scrollToIndex(getCurrentIndex());
  }

  document.addEventListener('touchend', handleDragEnd);
  document.addEventListener('mouseup', handleDragEnd);

  progressBar.addEventListener('click', (e) => {
    if (isDesktop() || isDragging) return;
    if (e.target === progressThumb) return;

    const barRect = progressBar.getBoundingClientRect();
    const clickPercent = (e.clientX - barRect.left) / barRect.width;
    const targetIndex = Math.round(clickPercent * (totalImages - 1));
    scrollToIndex(targetIndex);
  });

  updateYellowLine();
})();



const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const btnText = submitBtn.querySelector('.btn-text');
const formStatus = document.getElementById('formStatus');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  submitBtn.disabled = true;
  btnText.textContent = 'Sending...';
  formStatus.textContent = 'Sending your message...';
  formStatus.className = 'form-status loading';

  const data = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
  };

  try {
    const response = await fetch(
      'https://sorathiya-dhruvin-portfolio.vercel.app/api/send-email',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }
    );

    const result = await response.json();

    if (!response.ok) throw new Error(result.message);

    formStatus.textContent = '✓ Message sent successfully!';
    formStatus.className = 'form-status success';
    form.reset();

    setTimeout(() => {
      formStatus.textContent = '';
      formStatus.className = 'form-status';
    }, 5000);

  } catch (err) {
    formStatus.textContent = '✗ Failed to send. Please try again.';
    formStatus.className = 'form-status error';
    console.error(err);

    setTimeout(() => {
      formStatus.textContent = '';
      formStatus.className = 'form-status';
    }, 5000);
  } finally {
    submitBtn.disabled = false;
    btnText.textContent = 'Send Message';
  }
});

form.addEventListener('input', () => {
  formStatus.textContent = '';
  formStatus.className = 'form-status';
});






const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    projectCards.forEach(card => {
      const category = card.dataset.category;

      if (filter === "all" || category === filter) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });
  });
});


const modal = document.getElementById("projectModal");
const modalImg = document.getElementById("modalImg-2");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = document.querySelector(".modal-close");

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    modalImg.src = card.querySelector("img").src;
    modalTitle.textContent = card.querySelector("h3").textContent;
    modalDesc.textContent = card.querySelector("p").textContent;
    modal.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", e => {
  if (e.target === modal) modal.classList.remove("active");
});




const scrollBtn = document.getElementById("scrollTopBtn");
const aboutSection = document.getElementById("About");

let hideTimeout;

window.addEventListener("scroll", () => {
  const aboutTop = aboutSection.offsetTop;
  const scrollPos = window.scrollY + window.innerHeight / 2;

  if (scrollPos >= aboutTop) {
    scrollBtn.classList.add("show");

    clearTimeout(hideTimeout);

    hideTimeout = setTimeout(() => {
      scrollBtn.classList.remove("show");
    }, 3000);
  } else {
    scrollBtn.classList.remove("show");
    clearTimeout(hideTimeout);
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



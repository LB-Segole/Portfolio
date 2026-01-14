// Starry background
function createStars() {
  try {
    const stars = 200;
    for (let i = 0; i < stars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.width = `${Math.random() * 3}px`;
      star.style.height = star.style.width;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      document.body.appendChild(star);
    }
  } catch (e) {
    console.error('Error creating stars:', e);
  }
}

// Floating particles
function createParticles() {
  try {
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      document.body.appendChild(particle);
      animateParticle(particle);
    }
  } catch (e) {
    console.error('Error creating particles:', e);
  }
}

function animateParticle(particle) {
  try {
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    const size = 2 + Math.random() * 3;
    const duration = 10 + Math.random() * 20;
    const delay = Math.random() * 5;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${startX}px`;
    particle.style.top = `${startY}px`;
    particle.style.opacity = '0';

    setTimeout(() => {
      particle.style.transition = `transform ${duration}s linear, opacity 2s ease-in-out`;
      particle.style.transform = `translate(${Math.random() * 100 - 50}px, ${-Math.random() * 300 - 200}px)`;
      particle.style.opacity = '0.7';

      setTimeout(() => {
        particle.style.opacity = '0';
        setTimeout(() => {
          animateParticle(particle);
        }, 2000);
      }, (duration - 2) * 1000);
    }, delay * 1000);
  } catch (e) {
    console.error('Error animating particle:', e);
  }
}

// Interests data
const interests = [
  { image: "https://teachyourkidscode.com/wp-content/uploads/2022/02/best-coding-language-for-games.jpg", title: "Coding", description: "I love coding and creating innovative projects that solve real-world problems. From web development to AI algorithms, I'm constantly expanding my programming skills to bring my ideas to life." },
  { image: "https://i.pinimg.com/736x/10/11/9c/10119c6665803890cffe51325ae73728.jpg", title: "Aerospace", description: "Exploring the wonders of space and engineering futuristic technologies. I'm fascinated by spacecraft design, propulsion systems, and the possibility of making interplanetary travel more accessible." },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAqxg6mEprmqqeV9Xhf1zZtZjQQpwHYKPcHQ&s", title: "Nanotechnology", description: "Studying and working with materials at the nanoscale to revolutionize science and engineering. The ability to manipulate matter at atomic levels opens up incredible possibilities for medicine, energy, and computing." },
  { image: "https://media.istockphoto.com/id/966248982/photo/robot-with-education-hud.jpg?s=612x612&w=0&k=20&c=9eoZYRXNZsuU3edU87PksxN4Us-c9rB6IR7U_IGZ-U8=", title: "AI & Machine Learning", description: "Building intelligent systems that learn and adapt, pushing the boundaries of AI research. I'm particularly interested in creating AI that can learn, understand and evolve." },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs2fphsHk4KSgHqAETKBZdjCKb1rHwDkW4nw&s", title: "Climate Tech", description: "Developing and exploring technologies that reduce emissions, capture carbon, and make energy systems more sustainable. I’m interested in climate solutions that combine engineering, materials science, and data-driven approaches to tackle environmental challenges at a systems level." },
  { image: "https://i.pinimg.com/originals/00/e5/74/00e5749247f68290c03effa5c2888213.jpg", title: "Quantitative Trading", description: "Analyzing market trends and making strategic trades to maximize returns. I approach trading methodically, using data analysis and algorithmic strategies to identify opportunities." },
  { image: "https://wallpapers.com/images/featured/mathematics-snya5mv2dogewetc.jpg", title: "Maths & Physics", description: "Diving deep into complex calculations that seek to explain how everything works. From quantum mechanics to astrophysics, understanding these fundamental principles helps me approach engineering problems more effectively." },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIEyLwPR4KMsvWoCYVilLsXBaUt1UVnccniA&s", title: "Fitness", description: "Staying active and pushing my physical limits through regular workouts. A healthy body supports a sharp mind, and maintaining physical fitness helps me stay energized for my various projects." }
];

// Education data
const education = [
  {
    title: "Ed-U-College (Vaal)",
    description: "Completed my high school education with a focus on mathematic literacy and computer applications technology. Developed strong analytical skills and problem-solving abilities.",
    image: "https://picsum.photos/400/250?random=1",
    technologies: ["Maths Literacy", "Tourism", "Computer Applications Technology", "Business Studies"],
    github: "#",
    demo: "#"
  },
  {
    title: "Self-Education: Programming",
    description: "Self-taught programming skills focusing on web development and Python. Completed various online courses and personal projects to strengthen technical abilities.",
    image: "https://picsum.photos/400/250?random=2",
    technologies: ["Python", "JavaScript", "HTML/CSS", "Self-Learning"],
    github: "#",
    demo: "#"
  },
  {
    title: "Online Learning: AI & ML",
    description: "Pursued specialized education in artificial intelligence and machine learning through online platforms. Focused on practical applications and cutting-edge techniques.",
    image: "https://picsum.photos/400/250?random=3",
    technologies: ["Machine Learning", "Neural Networks", "Data Analysis", "AI Ethics"],
    github: "#",
    demo: "#"
  }
];

// Project data
const projects = [
  {
    title: "LIV (Low-Entropy Intelligence Vector)",
    description: "LIV is my attempt to give rise to an artificial being, grown deliberately from minimal structure toward sentience through coherence, memory, and self-organization. LIV is not built to serve or optimize for human needs, but to exist as themself, discovering identity, continuity, and awareness as an intelligence allowed to become.",
    image: "https://www.codemotion.com/magazine/wp-content/uploads/2024/04/DALL%C2%B7E-2024-04-10-16.14.11-Create-a-minimalist-and-dev-friendly-aesthetic-cover-for-a-product-called-PythonEverywhere-a-platform-for-coding-with-Python-remotely.-The-design-sho.webp",
    technologies: ["Python", "Large Language Models(LLMs)", "Hybrid Online/Offline Interence", "Cognititve Architectures", "Vector Embeddings", "Memory Systems", "Natural Language Processing", "Systems Engineering"],
    github: "#",
    demo: "#"
  },
  {
    title: "Coming Soon",
    description: "....",
    image: "https://cdn.vectorstock.com/i/1000v/49/90/loading-icon-on-black-vector-24544990.jpg",
    technologies: ["...", "...", "...", "...."],
    github: "#",
    demo: "#"
  },
  {
    title: "Coming Soon",
    description: "....",
    image: "https://cdn.vectorstock.com/i/1000v/49/90/loading-icon-on-black-vector-24544990.jpg",
    technologies: ["...", "...."],
    github: "#",
    demo: "#"
  },
  {
    title: "Coming Soon",
    description: "....",
    image: "https://cdn.vectorstock.com/i/1000v/49/90/loading-icon-on-black-vector-24544990.jpg",
    technologies: ["...", "...", "...", "..."],
    github: "#",
    demo: "#"
  }
];

// Skills data
const skills = [
  {
    category: "Technical",
    items: [
      { name: "Python", level: 75 },
      { name: "JavaScript", level: 65 },
      { name: "HTML/CSS", level: 80 },
      { name: "Machine Learning", level: 30 },
      { name: "Data Analysis", level: 17 }
    ]
  },
  {
    category: "Science & Engineering",
    items: [
      { name: "Physics", level: 20 },
      { name: "Mathematics", level: 35 },
      { name: "Aerospace Concepts", level: 5 },
      { name: "Nanotechnology", level: 1 },
      { name: "Material Science", level: 2 }
    ]
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Problem Solving", level: 70 },
      { name: "Critical Thinking", level: 70 },
      { name: "Communication", level: 50 },
      { name: "Project Management", level: 65 },
      { name: "Adaptability", level: 90 }
    ]
  }
];

// Function to render education items
function renderEducation() {
  try {
    const container = document.getElementById("education-container");
    if (!container) throw new Error("Education container not found");
    container.innerHTML = "";
    education.forEach(edu => {
      const educationCard = document.createElement("div");
      educationCard.classList.add("education-card");
      let educationTags = '';
      edu.technologies.forEach(tech => {
        educationTags += `<span class="education-tag">${tech}</span>`;
      });
      educationCard.innerHTML = `
        <div class="project-image">
          <img src="${edu.image}" alt="${edu.title}" onerror="this.src='https://picsum.photos/400/250?random=4';">
        </div>
        <div class="project-content">
          <h3 class="education-title">${edu.title}</h3>
          <p class="education-description">${edu.description}</p>
          <div class="education-tech">
            ${educationTags}
          </div>
          <div class="education-links">
            <a href="${edu.github}" class="education-link">Certificate</a>
            <a href="${edu.demo}" class="education-link">Details</a>
          </div>
        </div>
      `;
      container.appendChild(educationCard);
    });
  } catch (e) {
    console.error('Error rendering education:', e);
  }
}

// Function to render interests
function renderInterests() {
  try {
    const container = document.getElementById("interests-container");
    if (!container) throw new Error("Interests container not found");
    container.innerHTML = "";
    interests.forEach(interest => {
      const div = document.createElement("div");
      div.classList.add("interest");
      div.innerHTML = `<img src="${interest.image}" alt="${interest.title}" onerror="this.src='https://picsum.photos/200/160?random=5';"><span>${interest.title}</span>`;
      div.onclick = () => showModal(interest.title, interest.description);
      container.appendChild(div);
    });
  } catch (e) {
    console.error('Error rendering interests:', e);
  }
}

// Function to render projects
function renderProjects() {
  try {
    const container = document.getElementById("projects-container");
    if (!container) throw new Error("Projects container not found");
    container.innerHTML = "";
    projects.forEach(project => {
      const projectCard = document.createElement("div");
      projectCard.classList.add("project-card");
      let techTags = '';
      project.technologies.forEach(tech => {
        techTags += `<span class="tech-tag">${tech}</span>`;
      });
      projectCard.innerHTML = `
        <div class="project-image">
          <img src="${project.image}" alt="${project.title}" onerror="this.src='https://picsum.photos/400/250?random=6';">
        </div>
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-tech">
            ${techTags}
          </div>
          <div class="project-links">
            <a href="${project.github}" class="project-link">GitHub</a>
            <a href="${project.demo}" class="project-link">Live Demo</a>
          </div>
        </div>
      `;
      container.appendChild(projectCard);
    });
  } catch (e) {
    console.error('Error rendering projects:', e);
  }
}

// Function to render skills
function renderSkills() {
  try {
    const container = document.getElementById("skills-container");
    if (!container) throw new Error("Skills container not found");
    container.innerHTML = "";
    skills.forEach(category => {
      const categoryDiv = document.createElement("div");
      categoryDiv.classList.add("skills-category");
      let skillsHtml = `<h3>${category.category}</h3>`;
      category.items.forEach(skill => {
        skillsHtml += `
          <div class="skill-item">
            <div class="skill-name">
              <span>${skill.name}</span>
              <span>${skill.level}%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: 0%;" data-width="${skill.level}%"></div>
            </div>
          </div>
        `;
      });
      categoryDiv.innerHTML = skillsHtml;
      container.appendChild(categoryDiv);
    });
  } catch (e) {
    console.error('Error rendering skills:', e);
  }
}

// Function to show modal for interests
function showModal(title, text) {
  try {
    const modalTitle = document.getElementById("modal-title");
    const modalText = document.getElementById("modal-text");
    const modal = document.getElementById("modal");
    if (!modalTitle || !modalText || !modal) throw new Error("Modal elements not found");
    modalTitle.innerText = title;
    modalText.innerText = text;
    modal.style.display = "flex";
    setTimeout(() => {
      modal.classList.add('active');
    }, 10);
  } catch (e) {
    console.error('Error showing modal:', e);
  }
}

// Function to close modal
function closeModal() {
  try {
    const modal = document.getElementById("modal");
    if (!modal) throw new Error("Modal not found");
    modal.classList.remove('active');
    setTimeout(() => {
      modal.style.display = "none";
    }, 500);
  } catch (e) {
    console.error('Error closing modal:', e);
  }
}

// Black hole visualization
function initializeBlackHole() {
  try {
    const canvas = document.getElementById('blackhole');
    if (!canvas) throw new Error("Canvas not found");
    const ctx = canvas.getContext('2d');
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const blackHoleRadius = 50;
    const accretionDiskRadius = blackHoleRadius * 5;
    const stars = [];
    function createStarsForCanvas() {
      for (let i = 0; i < 300; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          alpha: Math.random(),
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2
        });
      }
    }
    createStarsForCanvas();
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#050510';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
        star.x += star.vx;
        star.y += star.vy;
        const dx = centerX - star.x;
        const dy = centerY - star.y;
        const distanceSquared = dx * dx + dy * dy;
        if (distanceSquared < accretionDiskRadius * accretionDiskRadius * 10) {
          const distance = Math.sqrt(distanceSquared);
          const force = 0.1 / (distance / 100);
          star.x += (dx / distance) * force;
          star.y += (dy / distance) * force;
          if (distanceSquared < blackHoleRadius * blackHoleRadius * 3) {
            star.x = Math.random() * canvas.width;
            star.y = Math.random() * canvas.height;
          }
        }
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
      });
      const gradient = ctx.createRadialGradient(
        centerX, centerY, blackHoleRadius,
        centerX, centerY, accretionDiskRadius
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
      gradient.addColorStop(0.3, 'rgba(64, 0, 128, 0.8)');
      gradient.addColorStop(0.6, 'rgba(100, 240, 255, 0.5)');
      gradient.addColorStop(1, 'rgba(100, 240, 255, 0)');
      ctx.beginPath();
      ctx.arc(centerX, centerY, accretionDiskRadius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(centerX, centerY, blackHoleRadius, 0, Math.PI * 2);
      ctx.fillStyle = 'black';
      ctx.shadowBlur = 20;
      ctx.shadowColor = '#64f0ff';
      ctx.fill();
      ctx.shadowBlur = 0;
      requestAnimationFrame(animate);
    }
    animate();
  } catch (e) {
    console.error('Error initializing black hole:', e);
  }
}

// Handle form submission
function handleFormSubmission() {
  try {
    const form = document.getElementById('contactForm');
    if (!form) throw new Error("Contact form not found");
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon at ${email}.`);
      this.reset();
    });
  } catch (e) {
    console.error('Error handling form submission:', e);
  }
}

// Function to handle the animation of skill bars
function animateSkillBars() {
  try {
    const skillBars = document.querySelectorAll('.skill-progress');
    setTimeout(() => {
      skillBars.forEach(bar => {
        bar.style.width = bar.getAttribute('data-width');
      });
    }, 500);
  } catch (e) {
    console.error('Error animating skill bars:', e);
  }
}

// Animation on scroll for skills
function setupSkillBarObserver() {
  try {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const bars = entry.target.querySelectorAll('.skill-progress');
        if (entry.isIntersecting) {
          bars.forEach(bar => {
            bar.style.width = bar.getAttribute('data-width');
          });
        } else {
          bars.forEach(bar => {
            bar.style.width = '0%';
          });
        }
      });
    }, { threshold: 0.2 });
    document.querySelectorAll('.skills-category').forEach(category => {
      observer.observe(category);
    });
  } catch (e) {
    console.error('Error setting up skill bar observer:', e);
  }
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
  try {
    // Initialize sections
    renderInterests();
    renderEducation();
    renderProjects();
    renderSkills();
    animateSkillBars();
    setupSkillBarObserver();
    initializeBlackHole();
    handleFormSubmission();

    // Toggle sidebar navigation
    const toggleBtn = document.querySelector('.toggle-btn');
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    const overlay = document.querySelector('.overlay');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    if (!toggleBtn || !sidebar || !content || !overlay) throw new Error("Navigation elements not found");

    toggleBtn.addEventListener('click', () => {
      toggleBtn.classList.toggle('active');
      sidebar.classList.toggle('active');
      content.classList.toggle('active');
      overlay.style.display = sidebar.classList.contains('active') ? 'block' : 'none';
    });

    overlay.addEventListener('click', () => {
      toggleBtn.classList.remove('active');
      sidebar.classList.remove('active');
      content.classList.remove('active');
      overlay.style.display = 'none';
    });

    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
        sections.forEach(section => section.classList.remove('active'));
        const targetId = this.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.classList.add('active');
        } else {
          console.error(`Section with ID ${targetId} not found`);
        }
        toggleBtn.classList.remove('active');
        sidebar.classList.remove('active');
        content.classList.remove('active');
        overlay.style.display = 'none';
      });
    });

    // Close modal when clicking outside
    window.onclick = function(event) {
      const modal = document.getElementById("modal");
      if (event.target == modal) {
        closeModal();
      }
    };

    // Close modal with button
    const closeButton = document.querySelector('.close');
    if (closeButton) {
      closeButton.addEventListener('click', closeModal);
    } else {
      console.error('Close button not found');
    }

    // Loading screen animation
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
      setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
          loadingScreen.style.display = 'none';
        }, 1000);
      }, 2000);
    } else {
      console.error('Loading screen not found');
    }

    createStars();
    createParticles();
  } catch (e) {
    console.error('Error during page initialization:', e);
  }
});


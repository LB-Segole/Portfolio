// Create starry background
function createStars() {
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
}

// Create floating particles
function createParticles() {
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    document.body.appendChild(particle);
    animateParticle(particle);
  }
}

function animateParticle(particle) {
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
}

// Interests data
const interests = [
  { image: "https://teachyourkidscode.com/wp-content/uploads/2022/02/best-coding-language-for-games.jpg", title: "Coding", description: "I love coding and creating innovative projects that solve real-world problems. From web development to AI algorithms, I'm constantly expanding my programming skills to bring my ideas to life." },
  { image: "https://i.pinimg.com/736x/10/11/9c/10119c6665803890cffe51325ae73728.jpg", title: "Aerospace", description: "Exploring the wonders of space and engineering futuristic technologies. I'm fascinated by spacecraft design, propulsion systems, and the possibility of making interplanetary travel more accessible." },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAqxg6mEprmqqeV9Xhf1zZtZjQQpwHYKPcHQ&s", title: "Nanotechnology", description: "Studying and working with materials at the nanoscale to revolutionize science and engineering. The ability to manipulate matter at atomic levels opens up incredible possibilities for medicine, energy, and computing." },
  { image: "https://media.istockphoto.com/id/966248982/photo/robot-with-education-hud.jpg?s=612x612&w=0&k=20&c=9eoZYRXNZsuU3edU87PksxN4Us-c9rB6IR7U_IGZ-U8=", title: "AI & Machine Learning", description: "Building intelligent systems that learn and adapt, pushing the boundaries of AI research. I'm particularly interested in creating AI that can understand and respond to human emotions and needs." },
  { image: "https://i.pinimg.com/originals/00/e5/74/00e5749247f68290c03effa5c2888213.jpg", title: "Forex Trading", description: "Analyzing market trends and making strategic trades to maximize returns. I approach trading methodically, using data analysis and algorithmic strategies to identify opportunities." },
  { image: "https://wallpapers.com/images/featured/mathematics-snya5mv2dogewetc.jpg", title: "Maths & Physics", description: "Diving deep into complex calculations that seek to explain how everything works. From quantum mechanics to astrophysics, understanding these fundamental principles helps me approach engineering problems more effectively." },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs2fphsHk4KSgHqAETKBZdjCKb1rHwDkW4nw&s", title: "International Relations", description: "Understanding global politics and the intricate relationships between nations. This knowledge helps me consider the broader implications of technological developments and their potential impact on society." },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIEyLwPR4KMsvWoCYVilLsXBaUt1UVnccniA&s", title: "Fitness", description: "Staying active and pushing my physical limits through regular workouts. A healthy body supports a sharp mind, and maintaining physical fitness helps me stay energized for my various projects." }
];

// Education data
const education = [
  {
    title: "Ed-U-College (Vaal)",
    description: "Completed my high school education with a focus on mathematic literacy and computer applications technology. Developed strong analytical skills and problem-solving abilities.",
    image: "/api/placeholder/400/250",
    technologies: ["Maths Literacy", "Tourism", "Computer Applications Technology", "Business Studies"],
    github: "#",
    demo: "#"
  },
  {
    title: "Self-Education: Programming",
    description: "Self-taught programming skills focusing on web development and Python. Completed various online courses and personal projects to strengthen technical abilities.",
    image: "/api/placeholder/400/250",
    technologies: ["Python", "JavaScript", "HTML/CSS", "Self-Learning"],
    github: "#",
    demo: "#"
  },
  {
    title: "Online Learning: AI & ML",
    description: "Pursued specialized education in artificial intelligence and machine learning through online platforms. Focused on practical applications and cutting-edge techniques.",
    image: "/api/placeholder/400/250",
    technologies: ["Machine Learning", "Neural Networks", "Data Analysis", "AI Ethics"],
    github: "#",
    demo: "#"
  }
];

// Project data
const projects = [
  {
    title: "PetAI Assistant",
    description: "An AI companion that evolves with its user, offering personalized assistance and companionship. Currently in early development phase with focus on natural language processing and emotion recognition.",
    image: "https://www.codemotion.com/magazine/wp-content/uploads/2024/04/DALL%C2%B7E-2024-04-10-16.14.11-Create-a-minimalist-and-dev-friendly-aesthetic-cover-for-a-product-called-PythonEverywhere-a-platform-for-coding-with-Python-remotely.-The-design-sho.webp",
    technologies: ["Python", "TensorFlow", "Natural Language Processing", "Emotion AI"],
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
      { name: "Python", level: 25 },
      { name: "JavaScript", level: 65 },
      { name: "HTML/CSS", level: 80 },
      { name: "Machine Learning", level: 30 },
      { name: "Data Analysis", level: 6 }
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
  const container = document.getElementById("education-container");
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
        <img src="${edu.image}" alt="${edu.title}">
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
}

// Function to render interests
function renderInterests() {
  const container = document.getElementById("interests-container");
  container.innerHTML = "";
  interests.forEach(interest => {
    const div = document.createElement("div");
    div.classList.add("interest");
    div.innerHTML = `<img src="${interest.image}" alt="${interest.title}"><span>${interest.title}</span>`;
    div.onclick = () => showModal(interest.title, interest.description);
    container.appendChild(div);
  });
}

// Function to render projects
function renderProjects() {
  const container = document.getElementById("projects-container");
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
        <img src="${project.image}" alt="${project.title}">
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
}

// Function to render skills
function renderSkills() {
  const container = document.getElementById("skills-container");
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
}

// Function to show modal for interests
function showModal(title, text) {
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-text").innerText = text;
  const modal = document.getElementById("modal");
  modal.style.display = "flex";
  setTimeout(() => {
    modal.classList.add('active');
  }, 10);
}

// Function to close modal
function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove('active');
  setTimeout(() => {
    modal.style.display = "none";
  }, 500);
}

// Black hole visualization
function initializeBlackHole() {
  const canvas = document.getElementById('blackhole');
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
}

// Handle form submission
function handleFormSubmission() {
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon at ${email}.`);
    this.reset();
  });
}

// Function to handle the animation of skill bars
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  setTimeout(() => {
    skillBars.forEach(bar => {
      bar.style.width = bar.getAttribute('data-width');
    });
  }, 500);
}

// Animation on scroll for skills
function setupSkillBarObserver() {
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
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
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
      document.getElementById(targetId).classList.add('active');
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
  document.querySelector('.close').addEventListener('click', closeModal);

  // Loading screen animation
  setTimeout(() => {
    document.querySelector('.loading-screen').style.opacity = '0';
    setTimeout(() => {
      document.querySelector('.loading-screen').style.display = 'none';
    }, 1000);
  }, 2000);

  createStars();
  createParticles();
});

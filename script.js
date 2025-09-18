// Initialize EmailJS
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key

// Project Data
const mainProjects = [
    {
        title: "DSA-Interview-Ready",
        description: "A full-stack web platform to help developers prepare for interviews with AI-driven code feedback, multi-language support, and recruiter insights.",
        image: "https://via.placeholder.com/400x200/0f172a/3b82f6?text=DSA+Interview+Ready",
        tech: ["Flask", "Redis", "MongoDB", "Groq LLMs", "JavaScript"],
        github: "https://github.com/Divya4879/DSA-Interview-Ready",
        live: "https://dsa-interview-ready.onrender.com",
        features: ["Multi-language coding practice", "AI feedback integration", "Real-time caching", "Recruiter dashboard"]
    },
    {
        title: "FocusMode Chrome Extension",
        description: "A distraction-free productivity extension with strict modes and Pomodoro timers, designed to stop users from bypassing blocks.",
        image: "https://via.placeholder.com/400x200/0f172a/06b6d4?text=FocusMode+Extension",
        tech: ["JavaScript", "Chrome APIs", "Manifest V3", "HTML", "CSS"],
        github: "https://github.com/Divya4879/FocusMode",
        live: null,
        features: ["Strict site-blocking", "Pomodoro sessions", "Tamper-proof logic", "Lightweight UI"]
    },
    {
        title: "Habit-Tracker (Mindful Metrics)",
        description: "A modern dashboard app to build and track habits with visual analytics and AI-powered insights for improving consistency.",
        image: "https://via.placeholder.com/400x200/0f172a/3b82f6?text=Mindful+Metrics",
        tech: ["React", "TypeScript", "KendoReact", "Chart.js", "Netlify"],
        github: "https://github.com/Divya4879/Habit-Tracker",
        live: "https://mindful-metrics.netlify.app",
        features: ["Interactive charts", "Progress visualization", "AI suggestions", "Responsive design"]
    },
    {
        title: "Language-Fluency-Coach",
        description: "An AI + speech web app that helps learners improve English fluency by analyzing pronunciation, grammar, and speaking pace.",
        image: "https://via.placeholder.com/400x200/0f172a/06b6d4?text=Fluency+Coach",
        tech: ["Flask", "AssemblyAI", "Groq Llama3", "Bootstrap", "Render"],
        github: "https://github.com/Divya4879/Language-Fluency-Coach",
        live: "https://language-fluency-coach.onrender.com",
        features: ["Real-time speech processing", "CEFR-level grading", "Pronunciation analysis", "Grammar feedback"]
    },
    {
        title: "TestPrepGame",
        description: "A gamified AWS certification prep app with a retro arcade vibe. Makes studying cloud concepts fun and interactive.",
        image: "https://via.placeholder.com/400x200/0f172a/3b82f6?text=TestPrepGame",
        tech: ["HTML", "CSS", "JavaScript", "Web Audio API", "Netlify"],
        github: "https://github.com/Divya4879/TestPrepGame",
        live: "https://testprepgame.netlify.app",
        features: ["AWS practice questions", "Synthwave design", "Sound effects", "Scoring system"]
    }
];

const moreProjects = [
    {
        title: "Adaptive-AI-Learning",
        description: "An adaptive learning platform powered by custom algorithms to personalize study experiences based on user performance.",
        image: "https://via.placeholder.com/400x200/0f172a/06b6d4?text=Adaptive+AI+Learning",
        tech: ["JavaScript", "HTML", "CSS", "Custom Algorithms"],
        github: "https://github.com/Divya4879/Adaptive-AI-Learning",
        live: null,
        features: ["Adaptive algorithms", "Dynamic difficulty", "Progress tracking", "Personalized learning"]
    },
    {
        title: "GreatfulMind",
        description: "A gratitude journaling web app that promotes mindfulness with daily reflections and visual habit analytics.",
        image: "https://via.placeholder.com/400x200/0f172a/3b82f6?text=GreatfulMind",
        tech: ["React", "JavaScript", "Chart.js", "CSS", "Netlify"],
        github: "https://github.com/Divya4879/GreatfulMind",
        live: "https://greatfulmind.netlify.app",
        features: ["Daily journaling", "Progress visualization", "Mindfulness tracking", "Clean UI"]
    },
    {
        title: "Magical-Garden",
        description: "An interactive creative front-end project where users cultivate a digital garden that grows and animates with interactions.",
        image: "https://via.placeholder.com/400x200/0f172a/06b6d4?text=Magical+Garden",
        tech: ["HTML", "CSS", "JavaScript", "Canvas API"],
        github: "https://github.com/Divya4879/Magical-Garden",
        live: null,
        features: ["Interactive animations", "Canvas API usage", "Gamified interactions", "Creative showcase"]
    }
];

// Typing Animation
const typingText = document.getElementById('typing-text');
const phrases = ['Developer', 'Problem Solver', 'AI Enthusiast', 'Full-Stack Developer'];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => isDeleting = true, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }
    
    const typingSpeed = isDeleting ? 50 : 100;
    setTimeout(typeWriter, typingSpeed);
}

// Particles Background
function createParticles() {
    const container = document.getElementById('particles-container');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        
        container.appendChild(particle);
    }
}

// Create Project Cards
function createProjectCard(project) {
    return `
        <div class="project-card fade-in">
            <div class="overflow-hidden">
                <img src="${project.image}" alt="${project.title}" class="project-image">
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="tech-stack">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" class="project-link">
                        <i class="fab fa-github"></i>
                        <span>Code</span>
                    </a>
                    ${project.live ? `
                        <a href="${project.live}" target="_blank" class="project-link">
                            <i class="fas fa-external-link-alt"></i>
                            <span>Live Demo</span>
                        </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}

// Populate Projects
function populateProjects() {
    const mainProjectsContainer = document.getElementById('main-projects');
    const moreProjectsContainer = document.getElementById('more-projects');
    
    mainProjectsContainer.innerHTML = mainProjects.map(createProjectCard).join('');
    moreProjectsContainer.innerHTML = moreProjects.map(createProjectCard).join('');
}

// Show More Projects
document.getElementById('show-more-btn').addEventListener('click', function() {
    const moreProjectsSection = document.getElementById('more-projects');
    const btn = this;
    
    if (moreProjectsSection.classList.contains('hidden')) {
        moreProjectsSection.classList.remove('hidden');
        btn.textContent = 'Show Less Projects';
        
        // Animate in the new projects
        setTimeout(() => {
            const newCards = moreProjectsSection.querySelectorAll('.fade-in');
            newCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 100);
            });
        }, 50);
    } else {
        moreProjectsSection.classList.add('hidden');
        btn.textContent = 'View More Projects';
    }
});

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile Menu Toggle
document.getElementById('mobile-menu-btn').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// Scroll Animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Skill Bar Animations
function animateSkillBars() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        const skillLevel = item.getAttribute('data-skill');
        const progressBar = item.querySelector('.skill-progress');
        const itemTop = item.getBoundingClientRect().top;
        
        if (itemTop < window.innerHeight - 100) {
            setTimeout(() => {
                progressBar.style.width = skillLevel + '%';
            }, 200);
        }
    });
}

// Contact Form
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const btn = this.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.innerHTML = '<span class="loading"></span> Sending...';
    btn.disabled = true;
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Replace with your EmailJS service details
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
        .then(function() {
            btn.textContent = 'Message Sent!';
            btn.style.backgroundColor = '#10b981';
            document.getElementById('contact-form').reset();
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.backgroundColor = '';
                btn.disabled = false;
            }, 3000);
        })
        .catch(function() {
            btn.textContent = 'Failed to Send';
            btn.style.backgroundColor = '#ef4444';
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.backgroundColor = '';
                btn.disabled = false;
            }, 3000);
        });
});

// Initialize Everything
document.addEventListener('DOMContentLoaded', function() {
    // Start typing animation
    setTimeout(typeWriter, 1000);
    
    // Create particles
    createParticles();
    
    // Populate projects
    populateProjects();
    
    // Initial scroll animation check
    handleScrollAnimations();
    animateSkillBars();
    
    // Add scroll event listener
    window.addEventListener('scroll', function() {
        handleScrollAnimations();
        animateSkillBars();
    });
    
    // Add initial fade-in class to elements
    const animatedElements = document.querySelectorAll('.skill-category, .project-card, #about > div, #contact > div');
    animatedElements.forEach(el => el.classList.add('fade-in'));
});

// Active Navigation Highlighting
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('text-accent');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('text-accent');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });

            // Update active class for navigation
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // Update active navigation link on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Project data for modal
    const projects = [
        {
            title: "Classic Novel Landing Page",
            description: "A responsive landing page for a fictional book club, featuring a classic novel. This project demonstrates my foundational skills in structuring web content with HTML, styling with Tailwind CSS, and ensuring responsive design principles for various screen sizes. It was built during the initial phases of the Dibimbing.id bootcamp to practice core layout techniques.",
            technologies: ["HTML", "Tailwind CSS", "Responsive Design"],
            demoLink: "https://example.com/classic-novel-demo", // Replace with your actual demo link
            repoLink: "https://github.com/yourusername/classic-novel-repo" // Replace with your actual GitHub repo
        },
        {
            title: "Literary Quote Generator",
            description: "A simple web application that dynamically displays random quotes from famous literary works. This project utilizes HTML for structure, CSS for aesthetics, and JavaScript for fetching and rendering new quotes. It's an example of how I combine my English Literature background with basic frontend interactivity.",
            technologies: ["HTML", "CSS", "JavaScript"],
            demoLink: "https://example.com/quote-generator-demo", // Replace with your actual demo link
            repoLink: "https://github.com/yourusername/quote-generator-repo" // Replace with your actual GitHub repo
        },
        {
            title: "My First Blog Layout",
            description: "A static blog layout designed with a focus on clean readability and user experience. This project showcases different article styles, navigation patterns, and content presentation. It was created using HTML and Tailwind CSS to demonstrate my ability to build structured and visually appealing web pages for textual content.",
            technologies: ["HTML", "Tailwind CSS"],
            demoLink: "https://example.com/blog-layout-demo", // Replace with your actual demo link
            repoLink: "https://github.com/yourusername/blog-layout-repo" // Replace with your actual GitHub repo
        }
        // Add more projects here following the same structure
    ];

    const projectCards = document.querySelectorAll('.project-card');
    const projectModal = document.getElementById('projectModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalProjectTitle = document.getElementById('modalProjectTitle');
    const modalProjectDescription = document.getElementById('modalProjectDescription');
    const modalProjectTech = document.getElementById('modalProjectTech');
    const modalProjectDemoLink = document.getElementById('modalProjectDemoLink');
    const modalProjectRepoLink = document.getElementById('modalProjectRepoLink');

    projectCards.forEach(card => {
        card.addEventListener('click', (event) => {
            const projectId = parseInt(card.dataset.projectId);
            const project = projects[projectId];

            if (project) {
                modalProjectTitle.textContent = project.title;
                modalProjectDescription.textContent = project.description;
                
                // Clear existing technologies and add new ones
                modalProjectTech.innerHTML = ''; 
                project.technologies.forEach(tech => {
                    const techSpan = document.createElement('span');
                    techSpan.className = 'text-sm font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full';
                    techSpan.textContent = tech;
                    modalProjectTech.appendChild(techSpan);
                });

                modalProjectDemoLink.href = project.demoLink;
                modalProjectRepoLink.href = project.repoLink;

                projectModal.classList.remove('hidden');
                setTimeout(() => {
                    projectModal.classList.add('show');
                }, 10); // Small delay for transition
            }
        });
    });

    closeModalBtn.addEventListener('click', () => {
        projectModal.classList.remove('show');
        setTimeout(() => {
            projectModal.classList.add('hidden');
        }, 300); // Match transition duration
    });

    // Close modal when clicking outside
    projectModal.addEventListener('click', (event) => {
        if (event.target === projectModal) {
            projectModal.classList.remove('show');
            setTimeout(() => {
                projectModal.classList.add('hidden');
            }, 300);
        }
    });
});

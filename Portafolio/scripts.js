document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year').textContent = new Date().getFullYear();

    const langToggle = document.getElementById('langToggle');
    const translations = {
        es: {
            lang_label: "EN",
            lang_toggle: "Cambiar Idioma",
            nav_home: "Inicio",
            nav_about: "Acerca",
            nav_skills: "Habilidades",
            nav_gallery: "Galería",
            nav_contact: "Contacto",
            
            // ABOUT SECTION
            about_title: "Acerca de mí",
            about_role: "Back-End Developer | Automation & API Integrations",
            about_text:
                "Desarrollador Back-End con más de 4 años optimizando operaciones financieras mediante automatización e integración de APIs corporativas con C# y SQL. Enfocado en reducir tiempos de decisión, eliminar tareas manuales y construir soluciones escalables bajo metodologías ágiles y Scrum.",
            about_university_title: "Universidad",
            about_university_name: "CENFOTEC",
            about_languages_title: "Idiomas",
            lang_spanish: "Español",
            lang_english: "Inglés",
            level_native: "Nativo",
            level_professional: "Profesional",
            about_social_title: "Redes",
            about_download_cv: "Descargar CV",

            // SKILL BADGES (dentro de About)
            skill_api: "API Integrations",
            skill_automation: "Automation",

            // EXPERIENCE SECTION
            experience_title: "Experiencia",
            
            job_title_finbe: "BackEnd Developer",
            job_duration_finbe: "2022 - Presente",
            job_desc1_finbe: "Automatización de pasos clave en el flujo de aprobación de préstamos utilizando JavaScript, JSON y XML.",
            job_desc2_finbe: "Validación de perfiles de clientes contra bases de datos internas con SQL y C#, integrando con DeFi Solutions LOS.",
            job_desc3_finbe: "Rediseño de flujos automáticos para rechazar solicitudes que no cumplen criterios, reduciendo costos operativos.",

            job_title_orbitas: "FullStack Developer",
            job_duration_orbitas: "2021 - 2022",
            job_desc1_orbitas: "Colaboración en el diseño y desarrollo de un sistema de gestión de mantenimiento para cadenas de comida rápida en Costa Rica, con soporte multi-sucursal y multiusuario, utilizando Entity e Identity Frameworks para autenticación y autorización.",
            job_desc2_orbitas: "Reuniones con supervisores y usuarios finales para recopilar requerimientos, traducir necesidades de negocio en soluciones técnicas y brindar capacitaciones para la adopción de la herramienta.",
            job_desc3_orbitas: "Responsable principal de soporte para una de las marcas del grupo, implementando nuevas funcionalidades, aplicando correcciones urgentes y asegurando la estabilidad del sistema con base en retroalimentación en tiempo real.",
            
            // SKILLS SECTION
            skills_title: "Tecnologías & Stack",
            skills_intro: "Enfocado en el desarrollo Back-End robusto y escalable. Utilizo C# y el ecosistema .NET para construir la lógica de negocio, junto con SQL Server para la gestión de datos. Mi experiencia se complementa con herramientas de automatización y DevOps, esenciales para la integración y despliegue continuo de soluciones empresariales.",
            
            // GALLERY SECTION
            gallery_title: "Galería de proyectos",
            gallery_intro: "Esta galería presenta una selección de mis proyectos más relevantes, enfocados principalmente en integración de APIs, automatización de flujos de trabajo financiero y desarrollo de soluciones para la prevención de errores (duplicados). Cada proyecto ilustra la aplicación práctica de mis habilidades técnicas para resolver problemas de negocio críticos.",
            project1_title: "Asignación Inteligente de Préstamos",
            project1_desc: "Solución para asignar de forma equitativa deals entre los funders",
            project1_btn: "Detalles",
            project2_title: "Integración DeFi Solutions",
            project2_desc: "Reglas en DeFi usando JS para acelerar aprobaciones, reducir intervención manual y mejorar control de riesgo.",
            project2_btn: "Detalles",
            project3_title: "API - Solicitudes Duplicadas",
            project3_desc: "API de Validación y Prevención de Duplicados de Clientes",
            project3_btn: "Detalles",

            // MODAL
            modal_tech_label: "Tecnologías:",
            modal_close_btn: "Cerrar",

            // CONTACT SECTION
            contact_title: "Contacto",
            contact_email_text: "Mi correo electrónico es",
            contact_name_label: "Nombre",
            contact_email_label: "Correo electrónico",
            contact_msg_label: "Mensaje",
            contact_send: "Enviar Mensaje",
        },
        en: {
            lang_label: "ES",
            lang_toggle: "Change Language",
            nav_home: "Home",
            nav_about: "About",
            nav_skills: "Skills",
            nav_gallery: "Projects",
            nav_contact: "Contact",

            // ABOUT SECTION
            about_title: "About Me",
            about_role: "Back-End Developer | Automation & API Integrations",
            about_text:
                "Back-End Developer with 4+ years optimizing financial operations through automation and API integrations using C# and SQL. Focused on reducing decision-making time, eliminating manual processes and building scalable solutions under Agile methodologies and Scrum.",
            about_university_title: "University",
            about_university_name: "CENFOTEC",
            about_languages_title: "Languages",
            lang_spanish: "Spanish",
            lang_english: "English",
            level_native: "Native",
            level_professional: "Professional",
            about_social_title: "Social Media",
            about_download_cv: "Download CV",
            
            // SKILL BADGES (dentro de About)
            skill_api: "API Integrations",
            skill_automation: "Automation",

            // EXPERIENCE SECTION
            experience_title: "Experience",

            job_title_finbe: "BackEnd Developer",
            job_duration_finbe: "2022 - Present",
            job_desc1_finbe: "Automating key steps in the loan approval workflow using JavaScript, JSON, and XML.",
            job_desc2_finbe: "Validating client profiles against internal databases with SQL and C#, integrating with DeFi Solutions LOS.",
            job_desc3_finbe: "Redesigning automatic flows to reject applications that do not meet criteria, reducing operational costs.",

            job_title_orbitas: "FullStack Developer",
            job_duration_orbitas: "2021 - 2022",
            job_desc1_orbitas: "Collaboration in the design and development of a maintenance management system for fast-food chains in Costa Rica, with multi-branch and multi-user support, using Entity and Identity Frameworks for authentication and authorization.",
            job_desc2_orbitas: "Meetings with supervisors and end-users to gather requirements, translate business needs into technical solutions, and provide training for tool adoption.",
            job_desc3_orbitas: "Primary support for one of the group's brands, implementing new functionalities, applying urgent corrections, and ensuring system stability based on real-time feedback.",
            
            // SKILLS SECTION
            skills_title: "Tech Stack",
            skills_intro: "My core technology stack focuses on robust and scalable Back-End development. I use C# and the .NET ecosystem to build business logic, along with SQL Server for data management. My experience is complemented by automation and DevOps tools, essential for the continuous integration and deployment of enterprise solutions.",

            // GALLERY SECTION
            gallery_title: "Project Gallery",
            gallery_intro: "This gallery showcases a selection of my most relevant projects, primarily focused on API integration, automation of financial workflows, and the development of solutions for error prevention (duplicates). Each project illustrates the practical application of my technical skills to solve critical business problems.",
            project1_title: "Smart Loan Assignment",
            project1_desc: "Solution to distribute deals fairly between funders",
            project1_btn: "Details",
            project2_title: "DeFi Solutions Integration",
            project2_desc: "Decision rules in DeFi using JS to accelerate approvals, reduce manual intervention and improve risk control.",
            project2_btn: "Details",
            project3_title: "API - Duplicate Applications",
            project3_desc: "API for Duplicate Client Validation and Prevention",
            project3_btn: "Details",

            // MODAL
            modal_tech_label: "Technologies:",
            modal_close_btn: "Close",

            // CONTACT SECTION
            contact_title: "Contact",
            contact_email_text: "My email is",
            contact_name_label: "Name",
            contact_email_label: "Email",
            contact_msg_label: "Message",
            contact_send: "Send Message",
        }
    };

    function setLanguage(lang) {
        document.getElementById("langLabel").textContent = translations[lang].lang_label;

        // Actualizar todos los elementos con data-i18n
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            // El caso especial del correo en Contacto
            if (key === 'contact_email_text') {
                el.innerHTML = `${translations[lang][key]} <span class="fw-semibold">(jsuncin04@gmail.com)</span>`;
            } 
            // El caso especial del label de idioma en el switch
            else if (key === 'lang_toggle') {
                el.textContent = translations[lang][key];
            }
            // Los casos normales
            else if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Actualizar los labels del formulario de contacto
        document.querySelector('label[for="name"]').textContent = translations[lang].contact_name_label;
        document.querySelector('label[for="email"]').textContent = translations[lang].contact_email_label;
        document.querySelector('label[for="message"]').textContent = translations[lang].contact_msg_label;


        // actualizar cada tarjeta de proyecto
        document.querySelectorAll(".project-card").forEach((card, i) => {
            const id = i + 1;
            card.querySelector(".project-title").textContent = translations[lang][`project${id}_title`];
            card.querySelector(".project-desc").textContent = translations[lang][`project${id}_desc`];
        });
    }

    langToggle.addEventListener("change", e => {
        setLanguage(e.target.checked ? "en" : "es");
    });

    setLanguage("es"); // idioma por defecto

    // Lógica para el Modal de Galería (asegurando la traducción de los títulos/descripciones data-*)
    const projectModal = document.getElementById('projectModal');
    projectModal.addEventListener('show.bs.modal', event => {
        const button = event.relatedTarget;
        const card = button.closest('.project-card');
        
        // Obtener la clave de idioma actual
        const currentLang = langToggle.checked ? "en" : "es";

        // Obtener los datos del proyecto (están fijos en el HTML en español)
        const rawTitle = card.getAttribute('data-title');
        const rawDesc = card.getAttribute('data-desc');
        const tech = card.getAttribute('data-tech');

        // Buscar el índice del proyecto
        let projectIndex = -1;
        document.querySelectorAll(".project-card").forEach((c, i) => {
            if (c === card) projectIndex = i + 1;
        });

        // Obtener los títulos y descripciones traducidas desde el objeto translations
        const translatedTitle = translations[currentLang][`project${projectIndex}_title`];
        const translatedDesc = translations[currentLang][`project${projectIndex}_desc_full`] || rawDesc; // Usar rawDesc si no hay traducción larga (no la agregué)
        
        // Asignar los contenidos traducidos al modal
        document.getElementById('modalTitle').textContent = translatedTitle;
        document.getElementById('modalDesc').textContent = translatedDesc;
        document.getElementById('modalTech').textContent = tech;

        // Si quieres traducir la descripción larga (data-desc), tendrías que añadirla al objeto translations:
        // Por ejemplo: project1_desc_full_es y project1_desc_full_en, y usar una lógica para buscarla.
        // Por simplicidad, por ahora mantendré la descripción larga (data-desc) sin traducir en el modal.
    });

    // Pequeño script para manejar el scroll-to-top button
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

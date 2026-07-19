$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        const targetId = $(this).attr('href');
        if (targetId.length > 1 && $(targetId).length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(targetId).offset().top,
            }, 500, 'linear');
        }
    });

});

// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["AI & Machine Learning", "Data Analytics", "Python Development", "Full-Stack Development", "Computer Vision"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 800,
});
// <!-- typed js effect ends -->

/* ===== SKILLS (rendered from embedded data.js, no fetch needed) ===== */
function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <i class="${skill.icon}"></i>
                <span>${skill.name}</span>
              </div>
            </div>`;
    });
    skillsContainer.innerHTML = skillHTML;
}

/* ===== PROJECTS (rendered from embedded data.js, no fetch needed) ===== */
function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";
    projects.forEach(project => {
        const hasLiveLink = project.links.view && project.links.view.trim() !== "";
        const hasCodeLink = project.links.code && project.links.code.trim() !== "";

        let actionBtn = "";
        if (hasLiveLink) {
            actionBtn = `<a href="${project.links.view}" class="btn" target="_blank">Live Demo ↗</a>`;
        } else if (hasCodeLink) {
            actionBtn = `<a href="${project.links.code}" class="btn" target="_blank">View Code ↗</a>`;
        }

        projectHTML += `
        <div class="box">
      <span class="category">${project.category || ""}</span>
      <h3>${project.name}</h3>
      <div class="desc">
        <p>${project.desc}</p>
        <p class="tech">${project.tech}</p>
      </div>
      <div class="btns">
        ${actionBtn}
      </div>
    </div>`;
    });
    projectsContainer.innerHTML = projectHTML;

    const srtopProjects = ScrollReveal({ origin: 'top', distance: '80px', duration: 1000, reset: true });
    srtopProjects.reveal('.work .box', { interval: 200 });
}

showSkills(SKILLS_DATA);
showProjects(PROJECTS_DATA);

// tilt.js effect for hero + about images
VanillaTilt.init(document.querySelectorAll(".tilt"), { max: 15 });

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h2', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .btn', { delay: 200 });
srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .socials', { delay: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .row .image', { delay: 200 });
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });

/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL ACHIEVEMENTS TIMELINE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 300 });

/* SCROLL CERTIFICATIONS */
srtop.reveal('.certifications .box', { interval: 150 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });


/* ===== CONTACT FORM — AJAX submit via FormSubmit (stays on page, shows inline status) ===== */
$('#contact-form').on('submit', function (e) {
    e.preventDefault();
    const form = this;
    const $btn = $(form).find('button[type="submit"]');
    const $status = $('#form-status');
    const originalBtnHTML = $btn.html();

    $btn.prop('disabled', true).html('Sending... <i class="fa fa-spinner fa-spin"></i>');
    $status.removeClass('success error show').text('');

    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    })
        .then(res => {
            if (res.ok) {
                $status.addClass('success show').text('Message sent! I\'ll get back to you soon 🚀');
                form.reset();
            } else {
                throw new Error('Submission failed');
            }
        })
        .catch(() => {
            $status.addClass('error show').text('Something went wrong. Please email me directly instead.');
        })
        .finally(() => {
            $btn.prop('disabled', false).html(originalBtnHTML);
        });
});


/* ===== CERTIFICATE MODAL (macOS-style "opening app" animation) ===== */
const certModal = document.getElementById('cert-modal');
const certModalBody = document.getElementById('cert-modal-body');
const certModalTitle = document.getElementById('cert-modal-title');

function openCertModal(src, title) {
    certModalTitle.textContent = title || 'Certificate';

    const isPDF = /\.pdf($|\?)/i.test(src);
    certModalBody.innerHTML = isPDF
        ? `<iframe src="${src}" title="${title}"></iframe>`
        : `<img src="${src}" alt="${title}">`;

    document.body.classList.add('modal-open');
    certModal.classList.add('active');
}

function closeCertModal() {
    certModal.classList.remove('active');
    document.body.classList.remove('modal-open');
    setTimeout(() => { certModalBody.innerHTML = ''; }, 300);
}

document.querySelectorAll('.view-cert-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        const src = this.getAttribute('data-cert');
        const title = this.getAttribute('data-title');
        openCertModal(src, title);
    });
});

document.getElementById('cert-modal-close').addEventListener('click', closeCertModal);
certModal.addEventListener('click', function (e) {
    if (e.target === certModal) closeCertModal();
});
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && certModal.classList.contains('active')) closeCertModal();
});

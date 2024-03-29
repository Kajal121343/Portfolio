document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
   
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let mobile = document.getElementById('mobile').value;
    let message = document.getElementById('message').value;
    if (!name || !email || !mobile || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    if (!validateMobile(mobile)) {
        alert('Please enter a valid mobile number');
        return;
    }
 
    alert('Form submitted successfully');
   
    this.reset();
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validateMobile(mobile) {
    const regex = /^[0-9]{10}$/;
    return regex.test(mobile);
}

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });

        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});

window.addEventListener('scroll', function() {
    const currentScroll = window.scrollY;

    document.querySelectorAll('nav a').forEach(link => {
        const sectionId = link.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);

        if (
            section.offsetTop <= currentScroll + 1 &&
            section.offsetTop + section.offsetHeight > currentScroll + 1
        ) {
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
            });
            link.classList.add('active');
        }
    });
});

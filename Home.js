document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
});
const body = document.querySelector('body');

        body.addEventListener('mousemove', (e) => {
            const rect = body.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100; // X percentage
            const y = ((e.clientY - rect.top) / rect.height) * 100; // Y percentage

            body.style.background = `radial-gradient(circle at ${x}% ${y}%, #166D3B, #2D3436)`;
        });
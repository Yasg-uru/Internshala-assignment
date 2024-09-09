document.addEventListener('DOMContentLoaded', () => {

    const modals = document.querySelectorAll('.modal');
    const modalButtons = document.querySelectorAll('.details-button');
    const closeButtons = document.querySelectorAll('.close');
  
    modalButtons.forEach(button => {
      button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'flex';
      });
    });
  
    closeButtons.forEach(button => {
      button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        modal.style.display = 'none';
      });
    });
  
    
    const testimonials = document.querySelectorAll('.testimonial');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;
  
    const showTestimonial = (index) => {
      testimonials.forEach((testimonial, i) => {
        testimonial.classList.toggle('active', i === index);
      });
    };
  
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 1;
      showTestimonial(currentIndex);
    });
  
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
      showTestimonial(currentIndex);
    });
  
    showTestimonial(currentIndex);
  });
  
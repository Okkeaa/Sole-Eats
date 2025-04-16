
// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const scrollTopButton = document.getElementById('scroll-top-button');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('show');
    });
  }
  
  // Scroll to top functionality
  if (scrollTopButton) {
    scrollTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // Show/hide scroll button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.scrollY > 500) {
        scrollTopButton.style.opacity = '1';
      } else {
        scrollTopButton.style.opacity = '0';
      }
    });
  }
  
  // Food Category Filter
  const filterButtons = document.querySelectorAll('.filter-button');
  const foodItems = document.querySelectorAll('.food-card');
  
  if (filterButtons.length && foodItems.length) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Filter food items
        const category = button.getAttribute('data-category');
        
        foodItems.forEach(item => {
          if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
  
  // Dietary restriction selection
  const dietaryOptions = document.querySelectorAll('.checkbox-item');
  
  if (dietaryOptions.length) {
    dietaryOptions.forEach(option => {
      option.addEventListener('click', () => {
        option.classList.toggle('selected');
      });
    });
  }
});

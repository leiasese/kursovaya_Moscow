


document.getElementById("toggleWord").onclick = function() {
    var list = document.getElementById("list");
    
    if (list.style.display === "none") {
        list.style.display = "block"; 
    } else {
        list.style.display = "none"; 
    }
  
const links = document.querySelectorAll('a[href^="#"]');
for (const link of links) {
        link.addEventListener('click', function (e) {
            e.preventDefault(); 
            const targetId = this.getAttribute('href'); 
            const targetElement = document.querySelector(targetId); 

           
            targetElement.scrollIntoView({
                behavior: 'smooth' 
            });
        });
    }
  
    
    const modal = document.getElementById("modal");
    const btn = document.getElementById("openModal");
    const span = document.getElementById("closeModal");
    const submitBtn = document.getElementById("submitForm");
    
    
    btn.onclick = function() {
        modal.style.display = "block";
    }

  
    span.onclick = function() {
        modal.style.display = "none";
    }

  
    submitBtn.onclick = function() {
        alert('Форма успешно сохранена!');
        modal.style.display = "none";
        document.getElementById("myForm").reset(); 
    }

  
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    const stars = document.querySelectorAll('.star');
    let selectedRating = 0;

  
    function updateStars(rating) {
        stars.forEach(star => {
            star.classList.toggle('filled', star.dataset.value <= rating);
        });
    }
  
    
    stars.forEach(star => {
        star.addEventListener('mouseover', () => {
            updateStars(star.dataset.value);
        });

        star.addEventListener('mouseout', () => {
            updateStars(selectedRating);
        });

        star.addEventListener('click', () => {
            selectedRating = star.dataset.value;
            updateStars(selectedRating);
        });
    });
     
     const backToTopButton = document.getElementById('backToTop');

  
    window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}


  backToTopButton.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  }
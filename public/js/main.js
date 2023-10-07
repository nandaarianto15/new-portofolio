const navbar = document.getElementsByTagName('nav')[0];
    window.addEventListener('scroll', function() {
        console.log(window.screenY);
        if (window.scrollY > 8) {
            navbar.classList.replace('bg-transparent', 'nav-color');
        } else if (this.window.scrollY <= 8) {
            navbar.classList.replace('nav-color', 'bg-transparent');
        }            
    });
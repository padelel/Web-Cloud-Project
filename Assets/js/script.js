document.addEventListener('DOMContentLoaded', function() {
    const filterLabel = document.getElementById('filter-label');
    const dropdown = document.getElementById('custom-dropdown');
    const menu = document.getElementById('menu');
    const menuDropdown = document.getElementsByClassName('menu-dropdown');

    if (filterLabel && dropdown) {
        filterLabel.addEventListener('click', function(event) {
            dropdown.classList.toggle('active');
            event.stopPropagation();
        });    
    }

    if(menu && menuDropdown) {
        menu.addEventListener('click', function (event) {
            event.preventDefault();
            for(let i = 0; i < menuDropdown.length; i++) {
                menuDropdown[i].classList.toggle('active');
            }
        });
    }

    document.querySelectorAll('.custom-dropdown .option').forEach(option => {
        option.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            document.getElementById('filter').value = value;
            dropdown.style.display = 'none';
            console.log('Selected value:', value); // For demonstration, you can handle the value as needed
        });
    });
});

console.log ('script.js loaded');
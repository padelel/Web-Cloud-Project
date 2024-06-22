document.addEventListener('DOMContentLoaded', function() {
    const filterLabel = document.getElementById('filter-label');
    const dropdown = document.getElementById('custom-dropdown');
    const menu = document.getElementById('menu');
    const menuDropdown = document.getElementsByClassName('menu-dropdown');


    if(menu && menuDropdown) {
        menu.addEventListener('click', function (event) {
            event.preventDefault();
            for(let i = 0; i < menuDropdown.length; i++) {
                menuDropdown[i].classList.toggle('display');
            }
        });
    }


});
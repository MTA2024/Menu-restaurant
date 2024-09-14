// JavaScript for interacting with the menu items

document.addEventListener('DOMContentLoaded', function() {
    // Select all menu items
    const menuItems = document.querySelectorAll('.menu-item');

    // Add click event listener to each menu item
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Get item details from data attributes
            const name = item.getAttribute('data-name');
            const description = item.getAttribute('data-description');
            const price = item.getAttribute('data-price');

            // Example: Open a modal or display details in console
            console.log(`Name: ${name}`);
            console.log(`Description: ${description}`);
            console.log(`Price: ${price}`);
        });
    });
});

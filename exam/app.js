document.addEventListener('DOMContentLoaded', () => {
    const itemInput = document.querySelector('.custom-width');
    const fruitList = document.getElementById('fruitList');
    const legumeList = document.getElementById('legumeList');
    const generalList = document.getElementById('generalList');
    const searchInput = document.querySelector('.search');
    const addSpecificButton = document.getElementById('addSpecific');
    const addGeneralButton = document.getElementById('addGeneral');
    const searchButton = document.getElementById('search');
    const deleteButton = document.getElementById('delete');

    function addItemToList(list, category, item) {
        const li = document.createElement('li');
        li.textContent = `${category}! - ${item}`;
        list.appendChild(li);

   
        li.addEventListener('dblclick', () => {
            li.remove();
        });
    }

    // If the specific add button is clicked
    addSpecificButton.addEventListener('click', () => {
        const item = itemInput.value.trim();
        const category = document.querySelector('input[name="category"]:checked');
        if (!item) {
            alert('Please enter an item');
            return;
        }
        if (!category) {
            alert('Please select a category');
            return;
        }
        if (category.value === 'fruit') {
            addItemToList(fruitList, 'Fruits', item);
        } else if (category.value === 'legume') {
            addItemToList(legumeList, 'Legumes', item);
        }
        itemInput.value = '';
    });

    // If the general add button is clicked
    addGeneralButton.addEventListener('click', () => {
        const item = itemInput.value.trim();
        const category = document.querySelector('input[name="category"]:checked');
        if (!item) {
            alert('Please enter an item');
            return;
        }
        if (!category) {
            alert('Please select a category');
            return;
        }
        addItemToList(generalList, category.value === 'fruit' ? 'Fruits' : 'Legumes', item);
        itemInput.value = '';
    });

    // Search button functionality
    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        if (searchTerm) {
            const lists = document.querySelectorAll('.list li');
            lists.forEach(li => {
                if (li.textContent.toLowerCase().includes(searchTerm)) {
                    li.style.backgroundColor = 'red'; 
                } else {
                    li.style.backgroundColor = ''; 
                }
            });
        }
    });

    // Delete button functionality
    deleteButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        if (searchTerm) {
            const lists = document.querySelectorAll('.list li');
            lists.forEach(li => {
                if (li.textContent.toLowerCase().includes(searchTerm)) {
                    li.remove();
                }
            });
        }
    });
});


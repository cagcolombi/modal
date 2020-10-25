// Variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Open modal
const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

// Close modal
const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

// Loop trough the buttons open modal and add event on click
for(let i = 0; i < btnsOpenModal.length; i++) 
btnsOpenModal[i].addEventListener('click', openModal);

// Add event on close button, overlay and esc key
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (event) => {
    if(event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

const dtContainer = document.getElementById("dt-container");
const dtTextContainer  = document.getElementById("dt-textContainer")

if (dtContainer) {
    dtContainer.addEventListener('click', () => {
        console.log('DT-clicked');
        dtContainer.classList.remove('max-w-5xl',
            'hover:scale-105'
        );
        dtContainer.classList.add('max-w-full');
    });
} else {
    console.error('dt-container not found!');
}


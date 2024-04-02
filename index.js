document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container');
    const images = container.querySelectorAll('img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const thumbnailsContainer = document.createElement('div');
    thumbnailsContainer.classList.add('thumbnails-container');

    images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image.src;
        thumbnail.alt = image.alt;
        thumbnail.dataset.index = index;
        thumbnail.classList.add('thumbnail');
        thumbnail.addEventListener('click', () => {
            showImage(index);
        });
        thumbnailsContainer.appendChild(thumbnail);
    });

    container.after(thumbnailsContainer);

    let currentIndex = 0;
    showImage(currentIndex);

    function showImage(index) {
        images.forEach((image, i) => {
            if (i === index) {
                image.style.display = 'block';
                thumbnailsContainer.querySelector(`img[data-index="${i}"]`).classList.add('active');
            } else {
                image.style.display = 'none';
                thumbnailsContainer.querySelector(`img[data-index="${i}"]`).classList.remove('active');
            }
        });
        currentIndex = index;
    }
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });
});

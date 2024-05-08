/*23. Write a JavaScript program to create a slideshow that changes
the displayed image when a next or previous button is clicked.*/
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Slideshow</title>
<style>
    .slideshow-container {
        max-width: 500px;
        position: relative;
        margin: auto;
    }
    
    .slideshow-image {
        display: none;
        width: 100%;
        height: auto;
    }
    
    .prev, .next {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        font-size: 18px;
        padding: 10px;
        background-color: black;
        color: white;
        border: none;
        z-index: 1;
    }
    
    .prev {
        left: 10px;
    }
    
    .next {
        right: 10px;
    }
</style>
</head>
<body>
    <div class="slideshow-container">
        <img class="slideshow-image" src="image1.jpg" alt="Image 1">
        <img class="slideshow-image" src="image2.jpg" alt="Image 2">
        <img class="slideshow-image" src="image3.jpg" alt="Image 3">
        <button class="prev" onclick="changeSlide(-1)">Previous</button>
        <button class="next" onclick="changeSlide(1)">Next</button>
    </div>

    <script>
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slideshow-image');

        function showSlide(n) {
            slides[currentSlide].style.display = 'none';
            currentSlide = (n + slides.length) % slides.length;
            slides[currentSlide].style.display = 'block';
        }

        function changeSlide(n) {
            showSlide(currentSlide + n);
        }

        showSlide(currentSlide);
    </script>
</body>
</html>
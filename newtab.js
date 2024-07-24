// Array of image URLs
const images = [
    'https://www.w3schools.com/w3images/mountains.jpg',
    'https://www.w3schools.com/w3images/lights.jpg',
    'https://www.w3schools.com/w3images/paris.jpg',
    'https://www.w3schools.com/w3images/ny.jpg',
    'https://www.w3schools.com/w3images/bridge.jpg',
    'https://www.w3schools.com/w3images/forest.jpg',
    
    'https://www.w3schools.com/w3images/snow.jpg',
 
    'https://images.unsplash.com/photo-1560807707-8cc77767d783',
    'https://images.unsplash.com/photo-1592194996308-7b43878e84a6',
    'https://images.unsplash.com/photo-1574158622682-e8a9b3a1cddf',
    'https://images.unsplash.com/photo-1592194997617-5eaa97813e0d',
    'https://images.unsplash.com/photo-1543852786-1cf6624b9987'
  ];
  
  // Function to get a random image URL
  function getRandomImage() {
    return images[Math.floor(Math.random() * images.length)];
  }
  
  // Set the background image on page load
  document.addEventListener('DOMContentLoaded', () => {
    document.body.style.backgroundImage = `url(${getRandomImage()})`;
  
    // Handle search form submission
    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', () => {
      const query = document.getElementById('search-input').value;
      if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      }
    });
  
    // Allow pressing Enter to trigger search
    document.getElementById('search-input').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        searchButton.click();
      }
    });
  });
  
import styled from 'styled-components';

// Carousel
export const carousel = styled.div`
  .carousel {
    display: flex;
    justify-content: center;
    max-width: 800px; /* Set a max width for the carousel */
    margin: 0 auto; /* Center the carousel horizontally */
  }

  .custom-carousel {
    height: 400px;
  }

  .custom-carousel-item {
    text-align: center;
  }

  .custom-image {
    max-height: 300px;
    width: auto;
    margin: 0 auto;
    border-radius: 10px; /* Add a border radius for a rounded appearance */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Add a subtle shadow for depth */
  }
`;

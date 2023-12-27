import React from 'react';
import './ImageSlider.css';
import { Carousel } from 'react-bootstrap';

function ImageSlider() {
  return (
    <div className='slider'>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1579370318443-8da816457e3d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGlicmFyaWVzfGVufDB8fDB8fHww"
            alt="Library Slide 1"
          />
          <Carousel.Caption className="caption-background">
            <h3>Welcome to Our Library</h3>
            <p>Explore a world of knowledge and imagination.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1529007196863-d07650a3f0ea?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudCUyMGxpYnJhcnl8ZW58MHx8MHx8fDA%3D"
            alt="Library Slide 2"
          />
          <Carousel.Caption className="caption-background">
            <h3>Discover New Books</h3>
            <p>Our collection includes a wide range of genres for every reader.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1548048026-5a1a941d93d3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlicmFyaWVzfGVufDB8fDB8fHww"
            alt="Library Slide 3"
          />
          <Carousel.Caption className="caption-background">
            <h3>Reading Nook</h3>
            <p>Find your favorite spot and immerse yourself in a good book.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ImageSlider;

import React from 'react';
import './About.css';

function About() {
  return (
    <div className='about-box'>
      <h2 className='about-title'>Welcome to Our Library</h2>
      <div className='about-data'>
        <div className='about-img'>
          <img
            src='https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeSUyMHN0dWR5fGVufDB8fDB8fHww'
            alt='Library Interior'
          />
        </div>
        <div>
          <p className='about-text'>
            Welcome to our library, a place where knowledge meets curiosity and
            learning is a journey. We believe in the power of books to inspire,
            educate, and transform lives.
            <br />
            <br />
            Our collection spans a wide range of genres, from classic literature
            to contemporary bestsellers. Whether you're a student, a researcher,
            or simply a book enthusiast, you'll find a wealth of resources here.
            <br />
            <br />
            Our dedicated team is committed to providing a welcoming
            environment, promoting a love for reading, and fostering a culture
            of continuous learning. Explore the shelves, discover new worlds,
            and embark on a literary adventure with us.
            <br />
            <br />
            Thank you for being a part of our community. Your suggestions for
            improvement are always welcome!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

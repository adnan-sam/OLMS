import React from 'react';
import './News.css';

function News() {
  return (
    <div className='news-container'>
      <h1 className='news-title'>Updates for You</h1>
      <div className='news-data'>
        <div className='news-empty'></div>
        <div>
          <h1 className='news-subtitle'>Competitions</h1>
          <div className='news-subcontent'>
            <div className='news-competition-event'>
              <p>Annual Reading Challenge</p>
              <p>Join us for the Annual Reading Challenge and explore exciting new books. Read a minimum of five books in different genres to qualify.</p>
            </div>
            <div className='news-competition-event'>
              <p>Book Review Contest</p>
              <p>Share your thoughts on your favorite book and win amazing prizes. Submit your detailed book review by the end of the month to participate.</p>
            </div>
            <div className='news-competition-event'>
              <p>Artistic Book Cover Design</p>
              <p>Showcase your creativity by designing a unique book cover. The winning design will be featured on our upcoming book release.</p>
            </div>
            <div className='news-competition-event'>
              <p>Short Story Writing Competition</p>
              <p>Create and submit your original short story for a chance to be published on our platform. The top stories will receive recognition and prizes.</p>
            </div>
            <div className='news-competition-event'>
              <p>Literary Quiz Championship</p>
              <p>Participate in our Literary Quiz Championship and answer questions on famous authors, literary history, and classic novels. The ultimate champion will receive a grand prize.</p>
            </div>
          </div>
        </div>
        <div className='news-empty'></div>
        <div>
          <h1 className='news-subtitle'>Online Quiz</h1>
          <div className='news-subcontent'>
            <div className='news-quiz-event'>
              <p>Literary Trivia Quiz</p>
              <p>Test your knowledge of literature in our exciting online trivia quiz. Join us every Friday for a fun-filled quiz session with book-related questions.</p>
            </div>
            <div className='news-quiz-event'>
              <p>Author Spotlight Quiz</p>
              <p>Guess the author based on book excerpts and win cool prizes. Follow our social media pages for daily clues and participate in the weekly Author Spotlight Quiz.</p>
            </div>
            <div className='news-quiz-event'>
              <p>Classic Literature Challenge</p>
              <p>Take part in our Classic Literature Challenge and prove your love for timeless literary classics. Answer questions on classic novels and win a special edition book collection.</p>
            </div>
            <div className='news-quiz-event'>
              <p>Science Fiction Quiz</p>
              <p>Explore the world of science fiction literature by participating in our quiz. Test your knowledge of popular science fiction books and authors.</p>
            </div>
            <div className='news-quiz-event'>
              <p>Young Adult Book Quiz</p>
              <p>Are you a fan of young adult literature? Join our quiz dedicated to young adult books and characters. Exciting prizes await the winners.</p>
            </div>
          </div>
        </div>
        <div className='news-empty'></div>
      </div>
    </div>
  );
}

export default News;

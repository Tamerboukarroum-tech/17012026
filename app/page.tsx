'use client';

import { useState, useRef } from 'react';

// Audio Player Component
function AudioPlayer({ title, duration = "4:34", audioSrc }: { title: string; duration?: string; audioSrc?: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [progress, setProgress] = useState(0);
  const [totalDuration, setTotalDuration] = useState(duration);
  const audioRef = useRef<HTMLAudioElement>(null);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          console.log('Audio file not loaded yet - add your audio to public/audio/');
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Update progress and time
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      setCurrentTime(formatTime(current));
      setProgress((current / duration) * 100);
    }
  };

  // Set total duration when loaded
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      const duration = audioRef.current.duration;
      setTotalDuration(formatTime(duration));
    }
  };

  // Handle audio end
  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime("0:00");
  };

  return (
    <div className="audio-player">
      <div className="audio-controls">
        <button onClick={togglePlay} className="play-button">
          {isPlaying ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <polygon points="8,5 19,12 8,19" />
            </svg>
          )}
        </button>
        <div className="audio-info">
          <div className="audio-title">{title}</div>
          <div className="audio-timeline">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="audio-time">
              <span>{currentTime}</span>
              <span>{totalDuration}</span>
            </div>
          </div>
        </div>
      </div>
      {audioSrc && (
        <audio 
          ref={audioRef} 
          src={audioSrc} 
          preload="metadata"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleEnded}
        />
      )}
    </div>
  );
}

export default function StoryPage() {
  return (
    <div className="story-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="date">17/01/2026</div>
        <h1 className="main-title">Our Forever Love Story</h1>
        <p className="subtitle">For Her, By Him</p>
        
        <div className="hero-audio">
          <AudioPlayer title="Our Song" duration="4:23" audioSrc="/audio/song.mp3" />
        </div>

        <div className="brand">Ossotna</div>
      </section>

      {/* Author's Note Section */}
      <section className="content-section">
        <h2 className="section-title">Author&apos;s Note</h2>
        
        <div className="image-container authors-note">
          <img src="/images/authors-note.jpg" alt="Author's Note" />
        </div>

        <div className="text-content">
          <p>
            For Nourhan,
A love that wasn’t planned, yet felt as if it had always known the way.
These pages hold moments that are honest, warm, and unforgettable.
A small archive of something endlessly meaningful — a piece of us, gently captured in time.

          </p>
        </div>
      </section>

      {/* Prologue Section */}
      <section className="content-section">
        <h2 className="section-title">Prologue</h2>
        <h3 className="section-subtitle">A Journey of the Heart</h3>
        
        <div className="image-grid">
          <div className="image-grid-track">
            <img src="/images/prologue-1.jpg" alt="Prologue moment 1" />
            <img src="/images/prologue-2.jpg" alt="Prologue moment 2" />
            <img src="/images/prologue-3.jpg" alt="Prologue moment 3" />
            <img src="/images/prologue-4.jpg" alt="Prologue moment 4" />
            <img src="/images/prologue-5.jpg" alt="Prologue moment 5" />
            <img src="/images/prologue-6.jpg" alt="Prologue moment 6" />
            <img src="/images/prologue-7.jpg" alt="Prologue moment 7" />
            <img src="/images/prologue-8.jpg" alt="Prologue moment 8" />
            <img src="/images/prologue-9.jpg" alt="Prologue moment 9" />
            <img src="/images/prologue-10.jpg" alt="Prologue moment 10" />
            {/* Duplicate for seamless loop */}
            <img src="/images/prologue-1.jpg" alt="Prologue moment 1" />
            <img src="/images/prologue-2.jpg" alt="Prologue moment 2" />
            <img src="/images/prologue-3.jpg" alt="Prologue moment 3" />
            <img src="/images/prologue-4.jpg" alt="Prologue moment 4" />
            <img src="/images/prologue-5.jpg" alt="Prologue moment 5" />
            <img src="/images/prologue-6.jpg" alt="Prologue moment 6" />
            <img src="/images/prologue-7.jpg" alt="Prologue moment 7" />
            <img src="/images/prologue-8.jpg" alt="Prologue moment 8" />
            <img src="/images/prologue-9.jpg" alt="Prologue moment 9" />
            <img src="/images/prologue-10.jpg" alt="Prologue moment 10" />
          </div>
        </div>
      </section>

      {/* Chapter 1 */}
      <section className="content-section">
        <h2 className="chapter-title">Chapter 1</h2>
        <h3 className="section-subtitle">The Annoyance Phase</h3>
        
        <div className="image-container large">
          <img src="/images/chapter1.jpg" alt="Chapter 1" />
        </div>

        <div className="text-content">
          <p>
            At the Red Cross, there was a girl who was constantly annoyed by a guy who never seemed to take anything seriously.
He joked too much. She had no patience for it.
He kept talking. She kept wishing he wouldn’t.
Same shifts. Same place. Same people. Always somehow around each other.
There were no feelings. No signs. Just a girl being annoyed… and a guy enjoying being annoying.
And without either of them realizing it, that was the very beginning.
          </p>
        </div>
      </section>

      {/* Chapter 2 */}
      <section className="content-section">
        <h2 className="chapter-title">Chapter 2</h2>
        <h3 className="section-subtitle">The Broken Pinky</h3>
        
        <div className="image-container large">
          <img src="/images/chapter2.jpg" alt="Chapter 2" />
        </div>

        <div className="text-content">
          <p>
         One day, Nourhan broke her pinky.
A small injury, nothing dramatic, but enough to make simple things a little harder for a while.
It happened during a normal day, in the middle of everything, without much attention at first.
Just a bandaged finger and an unlucky story to tell.
At the time, it didn’t seem important.
But that tiny broken pinky was quietly about to change everything.

          </p>
        </div>
      </section>

      {/* Chapter 3 - Add more as needed */}
      <section className="content-section">
        <h2 className="chapter-title">Chapter 3</h2>
        <h3 className="section-subtitle">A Convenient Excuse</h3>
        
        <div className="image-container large">
          <img src="/images/chapter3.jpg" alt="Chapter 3" />
        </div>

        <div className="text-content">
          <p>
         Because of that little accident, things became convenient.
Convenient to walk together.
Convenient to go together.
Convenient to check if she needed help.
What started as a small excuse slowly became a routine.
Going to work together.
Having lunch together.
Random rides that didn’t really need a reason.
The pinky healed.
But the walks, the lunches, and the rides never stopped.

          </p>
        </div>
      </section>



      {/* Chapter 4 - Add more as needed */}
      <section className="content-section">
        <h2 className="chapter-title">Chapter 4</h2>
        <h3 className="section-subtitle">Denial</h3>
        
        <div className="image-container large">
          <img src="/images/chapter4.jpg" alt="Chapter 4" />
        </div>

        <div className="text-content">
          <p>
         For a while, there was denial.
He kept thinking it was normal. Just routine, just teasing, just walks and lunches. Until one day, it wasn’t. He realized he truly loved her.
She stayed in denial a little longer, even though deep down, she felt it too.
Eventually, it became impossible to ignore. No matter how much she wanted to stay in denial, the truth was too clear.
          </p>
        </div>
      </section>


      {/* Chapter 5 - Add more as needed */}
      <section className="content-section">
        <h2 className="chapter-title">Chapter 5</h2>
        <h3 className="section-subtitle">The Dinner</h3>
        
        <div className="image-container large">
          <img src="/images/chapter5.jpg" alt="Chapter 5" />
        </div>

        <div className="text-content">
          <p>
        
The dinner was unlike anything he had ever experienced.
Every word, every gesture, every glance… it all felt different, and somehow it all happened around her.
He had no idea he could act like this, no idea he could feel like this. Everything he said and did was new, and it all somehow revolved around being with her.
She was shy — and that was new. She wasn’t the type to get shy easily, yet tonight, something was different.
For the first time, she said it: “I love you.”
After all this time, after he had said it over and over, she finally said it back.
It wasn’t a date. It wasn’t just a relationship.
It was the beginning of their story — their journey, written together from that night onward.      

    </p>
        </div>
      </section>


    {/* Chapter 6 - Add more as needed */}
      <section className="content-section">
        <h2 className="chapter-title">Chapter 6</h2>
        <h3 className="section-subtitle">NOW</h3>
        
       

        <div className="text-content">
          <p>
        
TO BE CONTINUED…
THE NON ENDING STORY OF US, WRITTEN TOGETHER, FOREVER.     

    </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="story-footer">
        <div className="brand">T&N</div>
      </footer>
    </div>
  );
}

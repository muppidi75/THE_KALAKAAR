import React from "react";
import "./story.css";

export default function MyStory() {

  const stories = [
    {
      title: "Journey of a Young Painter",
      subtitle: "How I found my passion for art",
      image: "/images/story1.jpeg"
    },
    {
      title: "From Hobby to Sculpting Success",
      subtitle: "Turning clay into art",
      image: "/images/story2.jpeg"
    },
    {
      title: "A Writer and Artist’s Creative Path",
      subtitle: "Blending words and illustration",
      image: "/images/story3.jpeg"
    }
  ];

  return (
    <div className="story-container">

      {/* HEADER */}
      <div className="story-header">
        <h1>My Journey</h1>
        <p>Painting is my quiet place — where peace, focus, and happiness flow together</p>
      </div>

      <div className="story-layout">

        {/* LEFT STORIES */}
        <div className="story-list">
          {stories.map((story, index) => (
            <div className="story-card" key={index}>
              <img src={story.image} alt={story.title} />

              <div className="story-content">
                <h2>{story.title}</h2>
                <p>{story.subtitle}</p>
                <button>Read More</button>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT FEATURED STORY */}
        <div className="featured-story">

          <h2>Featured Story</h2>

          <img
            src="/images/about.jpg"
            alt="Featured Artist"
            className="featured-img"
          />

          <h3>Finding My Artistic Voice</h3>

          <p>
            Exploring my unique style and discovering the confidence
            to express myself through art.
          </p>

          <button className="dark-btn">Read More</button>

        </div>

      </div>

    </div>
  );
}

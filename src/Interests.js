import React from 'react';

export default function Interests() {
  return (
    <section className="resume-section" id="interests">
      <div className="resume-section-content">
        <h2 className="mb-5">Interests</h2>
        <p>
          When I’m not coding or working on projects, I’m spending time with my soon-to-be fiancée, Lisa, or hanging out
          with my two rescue dogs. I’m a lifelong gamer with a deep love for World of Warcraft, where I lead a raiding
          guild and have built custom addons to help our team perform better. I also enjoy building RC cars and planes
          when I find a good deal.
        </p>
        <p className="mb-0">
          Being a first-generation American in an Italian family, food isn’t just something I enjoy; it’s a core part of
          who I am. I grew up surrounded by homemade meals, loud kitchens, and the belief that cooking is a love
          language. Whether it's pasta made from scratch or experimenting with new recipes, I find real joy in the
          process of sharing food with the people I care about. Whether it’s through gaming, tech, or tinkering in the
          garage, I’m always drawn to creative problem-solving and building things that bring people together.
        </p>
        <model-viewer
          src="/models/ashbringerworld_of_warcraft.glb"
          alt="Ashbringer"
          auto-rotate
          camera-controls
          background-color="#222"
          style={{ width: '100%', height: '400px' }}
        ></model-viewer>
      </div>
    </section>
  );
}

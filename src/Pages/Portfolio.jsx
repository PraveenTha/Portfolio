import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import jewelsImage from '../assets/images/jewels.png';
import frightImage from '../assets/images/fright.png';
import modelImage from '../assets/images/3dmodel.png';
import animeImage from '../assets/images/anime.png';
import ffmImage from '../assets/images/ffm.png';
import arenaImage from '../assets/images/arena.png';
import eComImage from '../assets/images/e-com.png';
import '../assets/css/lightbox.css';

const projects = [
  {
    id: 1,
    title: 'Jewels',
    description:
      'This is a jewelry website, I have made it with the help of WordPress, and I have used WooCommerce and Elementor, this is an e-commerce website so that we can place the order, in this, you will get to see the order checkout card page, product page',
    tags: ['Design', 'UX', 'PHP', 'Wordpress', 'jQuery'],
    imageUrl: jewelsImage,
    visitLink: 'https://jewels.arcsqc.com/',
  },
  {
    id: 2,
    title: 'Freight Logistics',
    description:
      'This is a static website. I have made it with the help of HTML, CSS, JavaScript, jQuery, and Bootstrap. Many things have been used on this website like a silk carousel for making  sliders. This is a simple website.',
    tags: ['HTML', 'CSS', 'jquery', 'Google Firebase', 'Java Stripe'],
    imageUrl: frightImage,
    visitLink: 'https://freightlogistics.co.in/',
  },
  {
    id: 3,
    title: '3dmodels',
    description:
      'Here is an e-commerce website on this website I made some 3D models like perfume bottle chair etc I made this website with the help of WordPress. WordPress has been used in this website..',
    tags: ['Design', 'UX', 'PHP', 'Wordpress', 'jQuery'],
    imageUrl: modelImage,
    visitLink: 'https://3dmodels.arcsqc.com/',
  },

  {
    id: 4,
    title: 'Anime',
    description:
      'This website is designed by me. To make the UI of this website, I have used HTML, CSS, jQuery, and Bootstrap.',
    tags: ['Design', 'UX', 'HTML', 'CSS', 'jQuery'],
    imageUrl: animeImage,
    visitLink: 'https://envelai.com/anime/anime_admin/',
  },

  {
    id: 5,
    title: 'Future Mobility Media',
    description:
      'This website is designed by me. To make the UI of this website, I have used HTML, CSS, jQuery, and Bootstrap.',
    tags: ['Design', 'UX', 'HTML', 'CSS', 'jQuery'],
    imageUrl: ffmImage,
    visitLink: 'https://futuremobilitymedia.com/',
  },

  {
    id: 6,
    title: 'Arena Animation',
    description:
      'This website is designed by me. To make the UI of this website, I have used HTML, CSS, jQuery, and Bootstrap.This is a replica of the Arena Animation website.',
    tags: ['Design', 'UX', 'HTML', 'CSS', 'jQuery'],
    imageUrl: arenaImage,
    visitLink: 'https://joyful-gecko-3cc9bf.netlify.app/',
  },

  {
    id: 7,
    title: 'E-commerce Platform',
    description:
      'This is an e-commerce website. I have made it with the help of React and Nodejs. It is working in progress, so its visit link is not available right now.',
    tags: ['React', 'Node.js', 'HTML', 'CSS', 'java script'],
    imageUrl: eComImage,
    visitLink: '',
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (project, index) => {
    setSelectedProject(project);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
  };

  const navigate = (direction) => {
    const newIndex =
      direction === 'prev'
        ? (currentIndex - 1 + projects.length) % projects.length
        : (currentIndex + 1) % projects.length;
    setSelectedProject(projects[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <div id="portfolio">
      <section className="portfolio-section">
        <div className="container">
          <div className="row">
            <div className="work">
              <h2>Selected web projects...</h2>
            </div>
            <div className="gallery">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="gallery-item"
                  onClick={() => openLightbox(project, index)}
                >
                  <img src={project.imageUrl} alt={project.title} />

                  {/* Project Card Details */}
                  <div className="card-body">
                    <div className="card-title">
                      <h4>{project.title}</h4>
                      <p className="card-info">
                        {project.description.length > 100
                          ? `${project.description.substring(0, 100)}...`
                          : project.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="lightbox">
          <div className="lightbox-content">
            <button className="close-button" onClick={closeLightbox}>
              <X size={24} />
            </button>

            <div className="flex-box">
              <div className="image-box">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title} // Use the project title for the alt attribute
                  className="lightbox-image"
                />
              </div>
              <div className="lit-contant">
                <div className="tags">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="tag">
                      #{tag}
                    </span>
                  ))}
                </div>
                <h2 className="project-title">{selectedProject.title}</h2>
                <p className="project-description">
                  {selectedProject.description}
                </p>
                <a
                  href={
                    selectedProject.visitLink ? selectedProject.visitLink : '#'
                  }
                  target={selectedProject.visitLink ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={`visit-button ${
                    !selectedProject.visitLink ? 'disabled' : ''
                  }`}
                  onClick={(e) => {
                    if (!selectedProject.visitLink) {
                      e.preventDefault(); // Prevent default if there's no link
                    }
                  }}
                >
                  {selectedProject.visitLink ? 'VISIT' : 'Coming Soon'}
                </a>
                <button
                  className="nav-button prev"
                  onClick={() => navigate('prev')}
                >
                  <ArrowLeft size={24} />
                </button>
                <button
                  className="nav-button next"
                  onClick={() => navigate('next')}
                >
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;

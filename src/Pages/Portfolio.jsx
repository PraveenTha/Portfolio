import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import jewelsImage from '../assets/images/jewels.png';
import frightImage from '../assets/images/fright.png';
import modelImage from '../assets/images/3dmodel.png';
import animeImage from '../assets/images/anime.png';
import ffmImage from '../assets/images/ffm.png';
import arenaImage from '../assets/images/arena.png';
import eComImage from '../assets/images/e-com.png';
import pricolImage from '../assets/images/pricol.png';
import GTFplatterImage from '../assets/images/GTF_Platter.png';
import ecomImage from '../assets/images/ecom.png';
import GTFLoutImage from '../assets/images/GTF-layout.png';
import portfolioImage from '../assets/images/portfolio.png';

import '../assets/css/lightbox.css';

const projects = [
  {
    id: 1,
    title: 'Jewels',
    category: 'WordPress',
    description:
      'A fully responsive e-commerce website developed using WordPress, powered by WooCommerce and built with Elementor. It features a complete shopping experience including product listings, detailed product pages, a shopping cart, and a secure checkout process.',
    tags: [
      'E-commerce',
      'WooCommerce',
      'Elementor',
      'Responsive Design',
      'WordPress',
      'UI/UX',
      'PHP',
      'JavaScript',
      'jQuery',
    ],
    imageUrl: jewelsImage,
    visitLink: 'https://jewels.arcsqc.com/',
  },
  {
    id: 2,
    title: 'Freight Logistics',
    category: 'HTML',
    description:
      'A fully responsive static website developed with HTML, CSS, JavaScript, jQuery, and Bootstrap. Features include smooth UI elements and an interactive slick carousel slider for enhanced user engagement.',
    tags: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'jQuery',
      'Bootstrap',
      'Responsive Design',
      'Google Firebase',
    ],
    imageUrl: frightImage,
    visitLink: 'https://freightlogistics.co.in/',
  },
  {
    id: 3,
    title: '3D Models',
    category: 'WordPress',
    description:
      'An e-commerce website featuring 3D models like perfume bottles and chairs, built using WordPress for easy content management and a responsive shopping experience.',
    tags: ['Design', 'UX', 'PHP', 'Wordpress', 'jQuery'],
    imageUrl: modelImage,
    visitLink: 'https://3dmodels.arcsqc.com/',
  },
  {
    id: 4,
    title: 'Anime',
    category: 'HTML',
    description:
      'An anime-themed UI developed using HTML, CSS, jQuery, and Bootstrap. Designed for a clean, fun, and responsive user experience.',
    tags: ['Design', 'UX', 'HTML', 'CSS', 'jQuery'],
    imageUrl: animeImage,
    visitLink: 'https://envelai.com/anime/anime_admin/',
  },
  {
    id: 5,
    title: 'Future Mobility Media',
    category: 'HTML',
    description:
      'This website is designed using HTML, CSS, jQuery, and Bootstrap. It is responsive and includes interactive UI components.',
    tags: ['Design', 'UX', 'HTML', 'CSS', 'jQuery'],
    imageUrl: ffmImage,
    visitLink: 'https://futuremobilitymedia.com/',
  },
  {
    id: 6,
    title: 'Arena Animation',
    category: 'HTML',
    description:
      'A replica of the Arena Animation website, built using HTML, CSS, jQuery, and Bootstrap.',
    tags: ['Design', 'UX', 'HTML', 'CSS', 'jQuery'],
    imageUrl: arenaImage,
    visitLink: 'https://joyful-gecko-3cc9bf.netlify.app/',
  },
  {
    id: 7,
    title: 'E-commerce Platform',
    category: 'React',
    description:
      'An e-commerce site built with React and Node.js. This project is still in progress, so a live link is not available yet.',
    tags: ['React', 'Node.js', 'HTML', 'CSS', 'JavaScript'],
    imageUrl: eComImage,
    visitLink: '',
  },
  {
    id: 8,
    title: 'Pricol',
    category: 'HTML',
    description:
      'A responsive demo site for Pricol, created using HTML, CSS, jQuery, and Bootstrap with a corporate-focused UI.',
    tags: [
      'HTML5',
      'CSS3',
      'jQuery',
      'Bootstrap',
      'Responsive Design',
      'UI/UX',
      'Corporate UI',
    ],
    imageUrl: pricolImage,
    visitLink: 'https://praveentha.github.io/pricol/',
  },
  {
    id: 9,
    title: 'GTF Platter Designs',
    category: 'HTML',
    description:
      'A sleek, responsive site featuring a modern platter-style layout and GTF API integration for enhanced typography.',
    tags: [
      'HTML5',
      'CSS3',
      'jQuery',
      'Bootstrap',
      'Responsive Design',
      'GTF API',
      'UI/UX Design',
    ],
    imageUrl: GTFplatterImage,
    visitLink: 'https://praveentha.github.io/Platter2/',
  },
  {
    id: 10,
    title: 'E-commerce Website',
    category: 'HTML',
    description:
      'A fully responsive HTML-based eCommerce website featuring product listings, a cart system, and smooth UI.',
    tags: [
      'E-commerce',
      'Responsive Design',
      'HTML5',
      'CSS3',
      'jQuery',
      'Bootstrap',
      'UI/UX',
      'Shopping Cart',
      'Interactive UI',
    ],
    imageUrl: ecomImage,
    visitLink: 'https://praveentha.github.io/e-com/',
  },
  {
    id: 11,
    title: 'GTF Layout Template',
    category: 'HTML',
    description:
      'A responsive layout template showcasing GTF’s services, featuring modern UI design and GTF API integration.',
    tags: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'GTF API',
      'Responsive Design',
      'UI/UX',
      'Modern Layout',
      'Template Design',
    ],
    imageUrl: GTFLoutImage,
    visitLink: 'https://praveentha.github.io/GTF_3rd_layout_template/',
  },
  {
    id: 12,
    title: 'Portfolio',
    category: 'React',
    description:
      'A modern React.js portfolio template designed to showcase web development projects with interactive and responsive design.',
    tags: [
      'React.js',
      'JavaScript',
      'Responsive Design',
      'Portfolio Template',
      'UI/UX',
      'Web Development',
      'Interactive UI',
    ],
    imageUrl: portfolioImage,
    visitLink: 'https://praveentha.github.io/Portfolio/',
  },
];

const categories = ['All', 'HTML', 'WordPress', 'React'];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const openLightbox = (project, index) => {
    setSelectedProject(project);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
  };

  const navigate = (direction) => {
    if (!selectedProject) return;

    const newIndex =
      direction === 'prev'
        ? (currentIndex - 1 + filteredProjects.length) % filteredProjects.length
        : (currentIndex + 1) % filteredProjects.length;

    setSelectedProject(filteredProjects[newIndex]);
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

            {/* Category Tabs */}
            <div className="tabs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`tab-button ${
                    activeCategory === cat ? 'active' : ''
                  }`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Gallery */}
            <div className="gallery">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="gallery-item"
                  onClick={() => openLightbox(project, index)}
                >
                  <img src={project.imageUrl} alt={project.title} />
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

      {/* Lightbox */}
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
                  alt={selectedProject.title}
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
                  href={selectedProject.visitLink || '#'}
                  target={selectedProject.visitLink ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={`visit-button ${
                    !selectedProject.visitLink ? 'disabled' : ''
                  }`}
                  onClick={(e) => {
                    if (!selectedProject.visitLink) e.preventDefault();
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

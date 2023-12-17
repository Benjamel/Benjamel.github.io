import React, { useState } from 'react';
import { Project } from '../../types';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import examImage from '../../assets/images/exam2.png';
import frameworkImage from '../../assets/images/js-framework-project.png';
import semesterImage from '../../assets/images/semester-project.png';
import './index.css';

const projects: Project[] = [
  {
    id: 1,
    text: 'Exam Project',
    liveLink: 'https://papaya-marigold-4da405.netlify.app/',
    repoLink: 'https://github.com/Benjamel/Project-Exam-2',
    image: examImage,
  },
  {
    id: 2,
    text: 'Framework Project',
    liveLink: 'https://radiant-pie-2bb25a.netlify.app/',
    repoLink: 'https://github.com/Benjamel/js-framework',
    image: frameworkImage,
  },
  {
    id: 3,
    text: 'Semester Project',
    liveLink: 'https://benevolent-longma-07ee35.netlify.app/',
    repoLink: 'https://github.com/Benjamel/auction-website',
    image: semesterImage,
  },
];

const ProjectCarousel: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const goToPrevious = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : projects.length - 1));
  };

  const goToNext = () => {
    setIndex((prevIndex) => (prevIndex < projects.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className='project-carousel'>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        className='custom-carousel'>
        {projects.map((project) => (
          <Carousel.Item key={project.id} className='custom-carousel-item'>
            <img className='d-block w-100 custom-image' src={project.image} alt={project.text} />
            <Carousel.Caption className='custom-caption'>
              <h3>{project.text}</h3>
              <p>
                <a href={project.liveLink} target='_blank' rel='noopener noreferrer'>
                  Live Demo
                </a>{' '}
                |{' '}
                <a href={project.repoLink} target='_blank' rel='noopener noreferrer'>
                  GitHub Repo
                </a>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <Button variant='light' className='prev-button' onClick={goToPrevious}>
        Previous
      </Button>
      <Button variant='light' className='next-button' onClick={goToNext}>
        Next
      </Button>
    </div>
  );
};

export default ProjectCarousel;

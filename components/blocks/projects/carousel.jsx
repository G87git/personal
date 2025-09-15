import { useState, useEffect } from 'react';
import { m } from 'framer-motion';
import OptimizedImage from '../../utils/optimized-image.util';
import css from '../../../styles/sections/projects/carousel.module.scss';

export default function ImageCarousel({ images, autoSlide = true, slideInterval = 4000 }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-slide functionality
    useEffect(() => {
        if (!autoSlide || isHovered || images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, slideInterval);

        return () => clearInterval(interval);
    }, [autoSlide, isHovered, images.length, slideInterval]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };

    if (!images || images.length === 0) return null;

    return (
        <div 
            className={css.carousel}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={css.carouselContainer}>
                <div 
                    className={css.carouselTrack}
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => {
                        const hoverDirection = image.hover === 'left' ? 'left' : 'right';
                        return (
                            <div key={`${index}-${image.key}`} className={css.carouselSlide}>
                                <m.div 
                                    className={css.imageWrapper}
                                    variants={slideVariants}
                                    initial="rest"
                                    whileHover="hover"
                                    custom={hoverDirection}
                                >
                                    <OptimizedImage
                                        src={image.url}
                                        alt={image.alt || `${image.title || 'Project'} screenshot ${index + 1}`}
                                        fill
                                        priority={index === 0}
                                        quality={90}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        style={{
                                            objectFit: 'cover'
                                        }}
                                    />
                                </m.div>
                            </div>
                        );
                    })}
                </div>

                {/* Navigation arrows removed */}

                {/* Dots indicator - only show if more than 1 image */}
                {images.length > 1 && (
                    <div className={css.carouselDots}>
                        {images.map((_, index) => (
                            <button
                                key={index}
                                className={`${css.dot} ${index === currentIndex ? css.activeDot : ''}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

// Framer Motion variants for smooth animations
const slideVariants = {
    rest: {
        x: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30
        }
    },
    hover: (direction) => ({
        x: direction === 'left' ? -10 : 10,
        scale: 1.05,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 25
        }
    })
};
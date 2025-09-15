import Image from 'next/image';
import { useState } from 'react';

/**
 * Optimized Image Component with SEO and performance enhancements
 * @param {Object} props - Image configuration
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Alt text for accessibility (required)
 * @param {number} props.width - Image width
 * @param {number} props.height - Image height
 * @param {boolean} props.fill - Whether to fill container
 * @param {boolean} props.priority - Load with high priority (above fold)
 * @param {string} props.sizes - Responsive sizes attribute
 * @param {number} props.quality - Image quality (1-100)
 * @param {string} props.placeholder - Placeholder type ('blur' | 'empty')
 * @param {string} props.blurDataURL - Base64 blur placeholder
 * @param {string} props.className - CSS class name
 * @param {Object} props.style - Inline styles
 * @param {Function} props.onLoad - Load callback
 * @param {Function} props.onError - Error callback
 * @returns {JSX.Element} Optimized Image component
 */
export default function OptimizedImage({
    src,
    alt,
    width,
    height,
    fill = false,
    priority = false,
    sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    quality = 85,
    placeholder = 'blur',
    blurDataURL,
    className,
    style,
    onLoad,
    onError,
    ...props
}) {
    const [imageError, setImageError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Generate blur data URL if not provided
    const defaultBlurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==';

    const handleLoad = (event) => {
        setIsLoading(false);
        if (onLoad) onLoad(event);
    };

    const handleError = (event) => {
        setImageError(true);
        setIsLoading(false);
        if (onError) onError(event);
    };

    // Fallback image for errors
    if (imageError) {
        return (
            <div 
                className={`image-error ${className || ''}`}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f3f4f6',
                    color: '#6b7280',
                    fontSize: '14px',
                    ...style
                }}
                {...(width && height ? { style: { width, height, ...style } } : {})}
            >
                Image not available
            </div>
        );
    }

    const imageProps = {
        src,
        alt: alt || 'Image', // Ensure alt is never empty
        quality,
        placeholder: blurDataURL || defaultBlurDataURL ? 'blur' : 'empty',
        ...(blurDataURL && { blurDataURL }),
        ...(!blurDataURL && placeholder === 'blur' && { blurDataURL: defaultBlurDataURL }),
        className: `optimized-image ${isLoading ? 'loading' : 'loaded'} ${className || ''}`,
        style: {
            transition: 'opacity 0.3s ease-in-out',
            opacity: isLoading ? 0.8 : 1,
            ...style
        },
        onLoad: handleLoad,
        onError: handleError,
        ...props
    };

    if (fill) {
        return (
            <Image
                {...imageProps}
                fill
                sizes={sizes}
                priority={priority}
            />
        );
    }

    if (width && height) {
        return (
            <Image
                {...imageProps}
                width={width}
                height={height}
                sizes={sizes}
                priority={priority}
            />
        );
    }

    // Fallback with default dimensions
    return (
        <Image
            {...imageProps}
            width={800}
            height={600}
            sizes={sizes}
            priority={priority}
        />
    );
}

/**
 * Utility function to generate responsive sizes attribute
 * @param {Object} breakpoints - Breakpoint configuration
 * @returns {string} Sizes attribute string
 */
export function generateSizes(breakpoints = {}) {
    const defaultBreakpoints = {
        mobile: '100vw',
        tablet: '50vw', 
        desktop: '33vw',
        ...breakpoints
    };

    return `(max-width: 768px) ${defaultBreakpoints.mobile}, (max-width: 1200px) ${defaultBreakpoints.tablet}, ${defaultBreakpoints.desktop}`;
}

/**
 * Utility function to create blur data URL from color
 * @param {string} color - Hex color code
 * @returns {string} Base64 blur data URL
 */
export function createBlurDataURL(color = '#f3f4f6') {
    // Convert hex to RGB
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    // Create a simple 1x1 pixel data URL
    return `data:image/svg+xml;base64,${btoa(
        `<svg width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" fill="rgb(${r},${g},${b})"/></svg>`
    )}`;
}
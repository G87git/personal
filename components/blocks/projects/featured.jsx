import Image from 'next/image'
import { useEffect } from 'react'
import { m, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { useRouter } from 'next/router'

import Badges from '../../utils/badge.list.util'
import Icon from '../../utils/icon.util'

import css from '../../../styles/sections/projects/featured.module.scss'

export default function FeaturedProject({ content }, index) {
    const { project, url, repo, descriptionTitle, description, stack, imageOptions, images } = content

    const controls = useAnimation()
    const { ref, inView } = useInView({
        threshold: 0.25,
        triggerOnce: false
    })

    const router = useRouter()

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        } else {
            controls.start("hidden")
        }
    }, [controls, inView])

    const handleClick = () => {
        router.push(url)
    }

    return (
        <a onClick={handleClick} style={{ textDecoration: 'none' }}>
            <m.section
                key={index}
                className={css.project}
                ref={ref}
                variants={container}
                initial={["rest", "hidden"]}
                whileHover="hover"
                animate={controls}>

                <div className={css.details}>
                    <div className={css.projectHeader}>
                        <div className={css.header}>
                            <h3 className="highlight">{project}</h3>
                            <span className={css.privateOr}>
                                <i className="devicon-github-plain"></i>{repo}
                            </span>
                        </div>
                        <div className={css.description}>
                            <p><strong>{descriptionTitle}</strong> {description}</p>
                        </div>
                        <div className={css.stackContainer}>
                            <Badges list={stack} block="stack" fullContainer={false} color={false} />
                        </div>
                        <m.div variants={''} className={css.viewProject}>
                            <Icon icon={['fad', 'arrow-right-to-bracket']} />
                        </m.div>
                    </div>
                </div>

                <div className={css.imageContainer}>
                    <span className={`${css.imageAnimationContainer}`}>
                        {images.map(({ key, url, hover}, index) => {
                            const hoverVariant = (hover === 'left') ? hoverLeft : hoverRight;
                            return (
                                <m.div
                                    key={`${index}-${key}`}
                                    variants={item}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        position: 'relative',
                                        overflow: 'hidden',
                                    }}
                                >
                                    <m.div variants={hoverVariant} style={{ width: '80%', height: '80%' }}>
                                        <Image
                                            src={url}
                                            alt="project image"
                                            fill
                                            style={{
                                                objectFit: 'fit'
                                            }}
                                        />
                                    </m.div>
                                </m.div>
                            );
                        })}

                    </span>
                </div>
            </m.section>
        </a>
    )
}

const container = {
    hidden: {
        transition: {
            delayChildren: 0.125,
            staggerChildren: 0.0625
        }
    },
    visible: {
        transition: {
            delayChildren: 0.125,
            staggerChildren: 0.25,
        }
    },
    rest: {
        transition: {
            delayChildren: 0,
            staggerChildren: 0,
        }
    },
    hover: {
        transition: {
            delayChildren: 0,
            staggerChildren: 0,
        }
    }
}

const item = {
    hidden: {
        y: 75,
        opacity: 0,
        transition: {
            type: "tween",
            ease: "easeIn",
            duration: 0.35,
        }
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "tween",
            ease: "easeOut",
            duration: 0.5,
        }
    }
}

const hoverLeft = {
    rest: {
        x: 0
    },
    hover: {
        x: -20
    }
}

const hoverRight = {
    rest: {
        x: 0
    },
    hover: {
        x: 20
    }
}

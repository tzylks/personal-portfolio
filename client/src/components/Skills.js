import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import ReactMapboxGl, { Layer, Feature, Image } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Me from './me.png'




function Skills() {
    const [viewport, setViewport] = useState({
        width: 400,
        height: 400,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
    });

    const controls = useAnimation();
    const { ref, inView } = useInView();
    const { ref2, inView2 } = useInView()

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
        if (!inView) {
            controls.start('hidden')
        }
    }, [controls, inView])

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
        if (!inView) {
            controls.start('hidden')
        }
    }, [controls, inView2])

    const intoView = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: .5,
            },
            transitionEnd: { type: 'spring' }
        },

    }

    const progressBar = {
        hidden: { scale: 0 },
        visible: { scale: 3, width: [0, 0, 0, 0, 110], transition: { duration: 3 }, }
    }
    const progressBarTwo = {
        hidden: { scale: 0 },
        visible: { scale: 3, width: [0, 0, 0, 0, 130], transition: { duration: 3 }, }
    }
    const progressBarThree = {
        hidden: { scale: 0 },
        visible: { scale: 3, width: [0, 0, 0, 0, 90], transition: { duration: 3 }, }
    }
    const progressBarFour = {
        hidden: { scale: 0 },
        visible: { scale: 3, width: [0, 0, 0, 0, 110], transition: { duration: 3 }, }
    }

    return (
        <>
            <motion.div
                ref={ref2}
                initial="hidden"
                animate={controls}
                variants={intoView}
                id="skills"
                
            >
                <Box
                    sx={{
                        display: {
                            xs: 'inline',
                            s: 'inline',
                            lg: 'flex'
                        },
                        flexDirection: {
                            lg: 'row'
                        },
                        width: {
                            s: '100vh'
                        }
                    }}
                >

                    
                    <Box sx={{
                        ml: {
                            s: '15vw',
                            xs: '10vw',
                            md: '15vw',
                            lg: '15vw'
                        },
                        mt: {
                            s: '1vw',
                            xs: '15vw',
                            md: '15vw',
                            lg: '5vw'
                        }

                    }}>
                        <Typography variant='h1' sx={{fontSize: {lg: "6.4rem", xs: '3.4rem'}}} style={{ fontFamily: 'MuseoModerno', fontWeight: 100, color: '#f6005d', position: 'absolute', opacity: .4, fontWeight: 800 }}>Skills & Abilities</Typography>
                        <Typography variant='h1' sx={{fontSize: {lg: "5.4rem", xs: '3.4rem'}}} style={{ fontFamily: 'MuseoModerno', fontWeight: 100, color: '#f6005d'}}>Skills & Abilities</Typography>
                        <Box sx={{
                            width: {
                                s: '90vw',
                                xs: '90vw',
                                md: '40vw',
                                lg: '40vw'
                            },
                            display: {
                                xs:'inline',
                                lg: 'flex'
                            }
                        
                        }}>
                            <Typography variant="h4" sx={{mt: '4vh', fontFamily: 'MuseoModerno', fontWeight: 100, fontSize: {xs: '1.4rem'}}}> My professional background is diverse -- spanning event promotion, management, photography and more. That being said, my real passion is for problem solving. Making things work is the at the core of why I love coding. Making final products that look polished is my passion. Utilizing a combination of react.js, ruby, rails, javascript, and other libraries when needed, I am able to launch products efficiently with a creative touch </Typography>
                        </Box>
                    </Box>



                <Box sx={{ml: '10vh'}}>
                    <Box sx={{
                        position: {
                            xs: 'absolute',
                            s: 'absolute',
                            m: 'absolute',
                            lg: 'absolute'
                        },
                        right: {xs: 50, s: 210, lg: 239},
                        mt: {
                            xs: '-7vw',
                            s: '15vw',
                            lg: '10.5vw'
                        }, 
                        
                        
                    }}
                    >
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={controls}
                            variants={progressBar}
                            style={{ marginTop: '10vh', marginLeft: '30vw', width: '10vw', height: '.3vh', background: '#F38EFF' }}>
                            <Typography variant="body" style={{ marginTop: '.4vh', fontSize: '.5rem', fontFamily: 'MuseoModerno', position: 'absolute', top: 0 }}>javascript</Typography>

                        </motion.div>
                    </Box>

                    <Box sx={{
                        position: {
                            xs: 'absolute',
                            s: 'absolute',
                            m: 'absolute',
                            lg: 'absolute'
                        },
                        right: {xs: 45, s: 170, lg: 200},
                        mt: {
                            xs: '13vw',
                            s: '0vw',
                            lg: '13.5vw'
                        }, 
                        
                    }}
                    >
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={controls}
                            variants={progressBarTwo}
                            style={{ marginTop: '10vh', marginLeft: '15vw', width: '6vw', height: '.3vh', background: 'red' }}>
                            <Typography variant="body" style={{ marginTop: '.4vh', fontSize: '.5rem', fontFamily: 'MuseoModerno', position: 'absolute', top: 0 }}>ruby</Typography>

                        </motion.div>
                    </Box>
                    <Box sx={{
                        position: {
                            xs: 'absolute',
                            s: 'absolute',
                            m: 'absolute',
                            lg: 'absolute'
                        },
                        right: {xs: 45, s: 249, lg: 280},
                        mt: {
                            xs: '3vw',
                            s: '0vw',
                            lg: '16.5vw'
                        },
                        
                    }}
                    >
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={controls}
                            variants={progressBarThree}
                            style={{ marginTop: '10vh', marginLeft: '15vw', width: '6vw', height: '.3vh', background: '#FF00C8' }}>
                            <Typography variant="body" style={{ marginTop: '.4vh', fontSize: '.5rem', fontFamily: 'MuseoModerno', position: 'absolute', top: 0 }}>rails</Typography>
                        </motion.div>
                    </Box>

                    <Box sx={{
                        position: {
                            xs: 'absolute',
                            s: 'absolute',
                            m: 'absolute',
                            lg: 'absolute'
                        },
                        right: {xs: 50, s: 210, lg: 240},
                        mt: {
                            xs: '23vw',
                            s: '0vw',
                            lg: '19.5vw'
                        },
                        
                    }}
                    >
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={controls}
                            variants={progressBarFour}
                            style={{ marginTop: '10vh', marginLeft: '15vw', width: '6vw', height: '.3vh', background: '#FF00C8' }}>
                            <Typography variant="body" style={{ marginTop: '.4vh', fontSize: '.5rem', fontFamily: 'MuseoModerno', position: 'absolute', top: 0 }}>react</Typography>
                        </motion.div>
                    </Box>
                    </Box>
                    </Box>


                
            </motion.div>

           

        </>
    )
}

export default Skills
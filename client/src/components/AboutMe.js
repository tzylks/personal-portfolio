import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import { motion, useMotionValue, useTransform } from 'framer-motion'
import '../index.css';
import Arrow from './arrow.png'
import Me from './me.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';

function AboutMe() {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [60, -60]);
    const rotateY = useTransform(x, [-100, 100], [-60, 60]);

    const spring = {
        type: "spring",
        stiffness: 500,
        damping: 12
    };

    const line1 = "👋 Hi, I'm Trevor!"

    const dropLetters = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.1,
            },

        },
    }

    const letter = {
        hidden: { opacity: 0, y: 0 },
        visible: { opacity: 1, y: 60, transition: { type: "spring", damping: 3, stiffness: 50 }, }
    }


    return (
        <>
            <Box id="about" sx={{ position: 'absolute', top: 100, right: 770, display: 'flex' }}>
                <motion.div whileHover={{scale: 1.2, color: 'green'}} style={{marginRight: '.7vw'}}>
                <Link href="https://github.com/tzylks"><GitHubIcon style={{ color: "white", fontSize: '5rem' }} /></Link>
                </motion.div>
                <motion.div whileHover={{scale: 1.2, color: 'black'}}>
                <Link href="https://www.linkedin.com/in/trevor-zylks-3b476020b/"><LinkedInIcon style={{ color: "white", fontSize: '5rem' }} /></Link>
                </motion.div>
                <motion.div whileHover={{scale: 1.2, color: 'black'}}>
                <Link href="https://docs.google.com/document/d/1f9c6VtlEVwM5tOOjhr6tGaKfaFzqT8eLWlt4RaQeR1w/edit?usp=sharing"><DescriptionIcon style={{ color: "white", fontSize: '5rem' }} /></Link>
                </motion.div>
            </Box>

            <Box sx={{
                display: {
                    xs: 'none',
                    sm: 'none',
                    md: 'none',
                    lg: 'inline'
                },
                position: {
                    md: 'absolute',
                    lg: 'absolute'
                },
                right: {
                    md: 0,
                    lg: 20
                },
                mt: {
                    md: '20vh',
                    lg: '18vh'
                },

            }}
               
            >

                <motion.img
                    src={Me}
                    style={{
                        width: 500,
                        height: 500,
                        // x: x,
                        // y: y,
                        // rotateX: rotateX,
                        // rotateY: rotateY,
                        // cursor: "grab",
                        marginTop: '3vh'
                    }}
                    animate={{ rotateZ: [-5, 5, -5], color: ['#000', '#fff', '#000'] }}
                    transition={{ duration: 3, repeat: Infinity }}


                >
                </motion.img>
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'inline' } }}>
                <motion.img src={Arrow} style={{ top: 130, right: 300, position: 'absolute', width: '10%', transform: 'rotate(40deg)', zIndez: -1 }} />
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'inline' } }}>
                <Typography variant='h5' style={{ zIndex: -1, fontFamily: 'Permanent Marker', position: 'absolute', top: 100, right: 400, transform: 'rotate(310deg)' }}> This is me! </Typography>
            </Box>


            <Box className="aboutMe" sx={{ width: { sm: '100vw', md: '100vw', lg: '80vw' }, ml: { sm: '20vw', md: '20vw', lg: '15vw' }, mt: { sm: '3vh', lg: '23vh' } }}>
                <motion.h1
                    variants={dropLetters}
                    initial="hidden"
                    animate="visible"
                    style={{ fontFamily: 'MuseoModerno', color: '#FF00C8', marginBottom: '-10px' }}
                    sx={{ fontSize: '10px' }}
                >

                    {line1.split("").map((char, index) => {
                        return (
                            <motion.span key={char + "-" + index} variants={letter} style={{ fontSize: '5.4rem', fontWeight: 100 }}>
                                {char}
                            </motion.span>
                        )
                    })}

                </motion.h1>
                <br />
                <Typography className="aboutMe" variant="h4" sx={{ fontSize: {xs: '1.8rem', lg: '34px'}, fontFamily: 'MuseoModerno', fontWeight: 100 }} > I'm a fullstack developer located in Arizona. I am highly detailed and creative, with a focus on finding solutions that enhance user experiences.</Typography>
                <br />
                <br />
                <Typography className="aboutMe" variant="h4" sx={{ fontSize: {xs: '1.8rem', lg: '34px'}, fontFamily: 'MuseoModerno', fontWeight: 100 }}>Having an educational background in psychology informs my ability to meet the needs of individuals from all walks of life.</Typography>
            </Box>
            <Box>
                <motion.div
                    animate={{ y: [-20, -40, -40, -20], color: ['#000', '#fff', '#000'] }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    <Box className='scrolldown' sx={{ display: { xs: 'none', s: 'none', m: 'none', lg: 'inline' } }} style={{ marginTop: '-18vh', position: 'absolute', marginLeft: '20vw', right: -20, transform: 'rotate(90deg)' }}>
                        <Typography variant="body" style={{ fontFamily: 'MuseoModerno' }}>scroll down</Typography>
                    </Box>
                </motion.div>
                <Box className='scrolldown' sx={{ display: { xs: 'none', s: 'none', m: 'none', lg: 'inline' } }} style={{ position: 'absolute', marginLeft: '28vw', right: 18, marginTop: '-13vh' }}>
                    <KeyboardArrowDownSharpIcon style={{ fontSize: "2vh" }} />
                </Box>
            </Box>

            <motion.div
                animate={{ y: [-20, -40, -40, -20], color: ['#000', '#fff', '#000'] }}
                transition={{ duration: 3, repeat: Infinity }}
            >
                <Box className='scrolldown' sx={{ display: { xs: 'none', s: 'none', m: 'none', lg: 'inline' } }} style={{ marginTop: '-18vh', position: 'absolute', left: 100, transform: 'rotate(90deg)' }}>
                    <Typography variant="body" style={{ fontFamily: 'MuseoModerno' }}>scroll down</Typography>
                </Box>
            </motion.div>
            <Box className='scrolldown' sx={{ display: { xs: 'none', s: 'none', m: 'none', lg: 'inline' } }} style={{ position: 'absolute', left: 136.4, marginTop: '-13vh' }}>
                <KeyboardArrowDownSharpIcon style={{ fontSize: "2vh" }} />
            </Box>


        </>
    )
}

export default AboutMe
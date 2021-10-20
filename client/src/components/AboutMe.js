import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import { motion, useMotionValue, useTransform } from 'framer-motion'
import '../index.css';
import Arrow from './arrow.png'
import Me from './me.png'

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

    const line1 = "👋 hi, i'm trevor!"

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
        visible: { opacity: 1, y: 60, transition: { type: "spring", damping: 3, stiffness: 50 },  }
    }


    return (
        <>

            <Box sx={{
                display: { 
                    xs: 'none', 
                    lg: 'inline' 
                }}}
                style={{ position: 'absolute', marginTop: '18vh', right: 20 }}>
                <motion.img
                    src={Me}
                    style={{
                        width: 500,
                        height: 500,
                        x: x,
                        y: y,
                        rotateX: rotateX,
                        rotateY: rotateY,
                        cursor: "grab",
                        marginTop: '3vh'
                    }}
                    drag
                    dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                    dragElastic={0.6}
                    whileTap={{ cursor: "grabbing" }}
                >
                </motion.img>
            </Box>
            
            <motion.img src={Arrow} style={{top: 130, right: 300, position: 'absolute', width: '10%', transform: 'rotate(40deg)', zIndez: -1}} />
            <Box>
                <Typography variant='h5' style={{ zIndex: -1, fontFamily: 'Permanent Marker', position: 'absolute', top: 100, right: 400, transform: 'rotate(310deg)'}}> Drag Me </Typography>
            </Box>
            

            <Box className="aboutMe">
                <motion.h1
                    variants={dropLetters}
                    initial="hidden"
                    animate="visible"
                    style={{ fontSize: '50px', fontFamily: 'MuseoModerno', color: '#FF00C8', marginBottom: '-10px' }}
                >
                    
                    {line1.split("").map((char, index) => {
                        return (
                            <motion.span key={char + "-" + index} variants={letter} style={{fontSize: '5.4rem', fontWeight: 100}}>
                                {char}
                            </motion.span>
                        )
                    })}
                    
                </motion.h1>
                <br />
                <Typography className="aboutMe" variant="h4" style={{ fontFamily: 'MuseoModerno', fontWeight: 100 }}> i'm a fullstack developer located in arizona. i consider myself to be highly detailed and creative, with a focus on finding solutions that enhance user experiences.</Typography>
                <br />
                <br />
                <Typography className="aboutMe" variant="h4" style={{ fontFamily: 'MuseoModerno', fontWeight: 100 }}>having an educational background in psychology informs my ability to meet the needs of individuals from all walks of life.</Typography>
            </Box>
            <motion.div
                animate={{ y: [-20, -40, -40, -20], color: ['#000', '#fff', '#000'] }}
                transition={{ duration: 3, repeat: Infinity }}
            >
                <Box className='scrolldown' style={{ marginTop: '15vh', position: 'absolute', marginLeft: '20vw', right: -20, transform: 'rotate(90deg)' }}>
                    <Typography variant="body" style={{ fontFamily: 'MuseoModerno' }}>scroll down</Typography>
                </Box>
            </motion.div>
            <Box className='scrolldown' style={{ position: 'absolute', marginLeft: '28vw', right: 18, marginTop: '19vh' }}>
                <KeyboardArrowDownSharpIcon style={{ fontSize: "2vh" }} />
            </Box>
            <motion.div
                animate={{ y: [-20, -40, -40, -20], color: ['#000', '#fff', '#000'] }}
                transition={{ duration: 3, repeat: Infinity }}
            >
                <Box className='scrolldown' style={{ marginTop: '15vh', position: 'absolute', left: 100, transform: 'rotate(90deg)' }}>
                    <Typography variant="body" style={{ fontFamily: 'MuseoModerno' }}>scroll down</Typography>
                </Box>
            </motion.div>
            <Box className='scrolldown' style={{ position: 'absolute', left: 136.4, marginTop: '19vh' }}>
                <KeyboardArrowDownSharpIcon style={{ fontSize: "2vh" }} />
            </Box>

        </>
    )
}

export default AboutMe
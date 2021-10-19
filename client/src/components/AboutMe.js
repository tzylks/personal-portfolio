import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import { motion } from "framer-motion"
import '../index.css';

function AboutMe() {

    const spring = {
        type: "spring",
        stiffness: 500,
        damping: 12
      };

      const line1 = "👋 hi, i'm trevor!"

      const dropLetters = {
          hidden: {opacity: 1},
          visible: {opacity: 1,
                    transition: {
                        delay: 0.5,
                        staggerChildren: 0.1,
                    },
                },
      }

      const letter = {
          hidden: {opacity: 0, y: 0},
          visible: {opacity: 1, y: 0, transition: { type: "spring", damping: 3, stiffness: 50}}
      }


    return (
        <>
            <Box className="aboutMe">
                        <motion.h3
                        variants = {dropLetters}
                        initial="hidden"
                        animate="visible"
                        style={{fontSize: '50px', fontFamily: 'MuseoModerno', color: '#FF00C8', marginBottom: '-10px'}}
                            // animate={{ y: [-100, 0] }}
                            // transition={{ type: "spring", stiffness: 10, damping: 1 }}
                        >
                            {line1.split("").map((char, index) =>{
                                return(
                                    <motion.span key={char + "-" + index} variants={letter}>
                                        {char}
                                    </motion.span>
                                )
                            })}
                        
                        </motion.h3>
                        <br />
                        <Typography className="aboutMe" variant="h5" style={{ fontFamily: 'MuseoModerno' }}> i'm a fullstack developer located in arizona. i consider myself to be highly detailed and creative, focusing on solutions that enhance user experiences.</Typography>
                        <br />
                        <br />
                        <Typography className="aboutMe" variant="h5" style={{ fontFamily: 'MuseoModerno' }}>having a background in psychology, i have a great understanding of how to meet the needs of individuals from all walks of life.</Typography>
            </Box>
            <motion.div
                animate={{ y: [-20, -40, -40, -20], color: ['#000', '#fff', '#000'] }}
                transition={{ duration: 3, repeat: Infinity }}
            >
                <Box className='scrolldown' style={{ marginTop: '15vh', position: 'absolute', marginLeft: '20vw', right: -20, transform: 'rotate(90deg)' }}>
                    <Typography variant="h5" style={{ fontFamily: 'MuseoModerno' }}>Scroll Down</Typography>
                </Box>
            </motion.div>
            <Box className='scrolldown' style={{ position: 'absolute', marginLeft: '20vw', right: 33, marginTop: '22vh' }}>
                <KeyboardArrowDownSharpIcon style={{ fontSize: "4vh" }} />
            </Box>

        </>
    )
}

export default AboutMe
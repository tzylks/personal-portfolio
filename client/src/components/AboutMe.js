import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import { motion } from "framer-motion"
import '../index.css';

function AboutMe() {
    return (
        <>
            <Box className="aboutMe">
                        <motion.div
                            animate={{ y: [-100, 0] }}
                            transition={{ type: "spring", stiffness: 10 }}
                        >
                        <Typography className="aboutMe" variant="h2" style={{ fontFamily: 'MuseoModerno', color: '#FC5404', fontWeight: 500 }}>👋 hi, i'm trevor!</Typography>
                        </motion.div>
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
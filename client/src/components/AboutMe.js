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
                <Grid container>
                    <Grid item lg={12} md={9} sm={3}>
                        <motion.div
                            animate={{ x: [-100, 0] }}
                            transition={{ type: "spring", stiffness: 10 }}
                            
                        >
                        <Typography className="aboutMe" variant="h2" style={{ fontFamily: 'Permanent Marker' }}>👋 hi, i'm trevor!</Typography>
                        </motion.div>
                        <br />
                        <Typography className="aboutMe" variant="h5" style={{ fontFamily: 'Permanent Marker' }}> I'm a fullstack developer located in Arizona. I consider myself to be highly detailed and creative, focusing on solutions that enhance user experiences.</Typography>
                        <br />
                        <br />
                        <Typography className="aboutMe" variant="h5" style={{ fontFamily: 'Permanent Marker' }}>Having a background in psychology, I have a great understanding of how to meet the needs of individuals from all walks of life.</Typography>
                    </Grid>
                </Grid>
            </Box>
            <motion.div
                animate={{ y: [-20, -40, -40, -20] }}
                transition={{ duration: 1, repeat: Infinity }}
            >
                <Box className='scrolldown' style={{ marginTop: '10vh', position: 'absolute', marginLeft: '20vw', right: -27, transform: 'rotate(90deg)' }}>
                    <Typography variant="h5" style={{ fontFamily: 'Permanent Marker' }}>Scroll Down</Typography>
                </Box>
            </motion.div>
            <Box className='scrolldown' style={{ position: 'absolute', marginLeft: '20vw', right: 33, marginTop: '19vh' }}>
                <KeyboardArrowDownSharpIcon style={{ fontSize: "4vh" }} />
            </Box>
        </>
    )
}

export default AboutMe
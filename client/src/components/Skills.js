import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import { motion, useMotionValue, useTransform } from 'framer-motion'

function Skills() {

    const progressBar = {
        hidden: { opacity: 0, y: 0 },
        visible: { opacity: 1, y: 60, transition: { type: "spring", damping: 3, stiffness: 50 }, }
    }

    return (
        <>
            <Box style={{ marginTop: '30vh', display: 'flex', flexDirection: 'row'}}>
                <Box style={{ marginLeft: '15vw' }}>
                    <Typography variant='h1' style={{ fontFamily: 'MuseoModerno', fontWeight: 100, color: '#FF00C8', fontSize: "5.4rem" }}>skills & abilities</Typography>
                    <Box style={{width: '40vw'}}>
                    <Typography variant="h4" style={{ marginTop: '4vh', fontFamily: 'MuseoModerno', fontWeight: 100 }}> i'm a fullstack developer located in arizona. i consider myself to be highly detailed and creative, with a focus on finding solutions that enhance user experiences.</Typography>
                    </Box>
                </Box>

                

                <Box style={{ position: 'absolute', right: 200, marginTop: '10vh'}}>
                    <motion.div
                        animate={{ scale: 3, width: [0, 25, 50, 75, 130] }}
                        transition={{ duration: 0.5 }}
                        style={{ marginTop: '10vh', marginLeft: '30vw', width: '10vw', height: '.3vh', background: 'green' }}>
                            <Typography variant="body" style={{marginTop: '.4vh', fontSize: '.5rem', fontFamily: 'MuseoModerno', position: 'absolute', top: 0}}>Javascript</Typography>

                    </motion.div>
                </Box>
                <Box style={{ marginTop: '20vh', position: 'absolute', right: 317}}>
                    <motion.div
                        animate={{ scale: 3, width: [0, 25, 50, 75, 100] }}
                        transition={{ duration: 0.5 }}
                        style={{ marginTop: '10vh', marginLeft: '15vw', width: '6vw', height: '.3vh', background: 'red' }}>
                            <Typography variant="body" style={{marginTop: '.4vh', fontSize: '.5rem', fontFamily: 'MuseoModerno', position: 'absolute', top: 0}}>Ruby</Typography>

                    </motion.div>
                </Box>


            </Box>
        </>
    )
}

export default Skills
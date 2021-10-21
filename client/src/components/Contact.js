import ReactMapboxGl, { Layer, Feature, Image } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Me from './me.png'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function Contact() {
    const [subject, setSubject] = useState('')
    const [firstName, setFirstName] = useState('')
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')

    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
        if (!inView) {
            controls.start('visible')
        }
    }, [controls, inView])

    const intoView = {
        hidden: { opacity: 0},
        visible: {
            opacity: 1,
            x: [-1000, 0],
            transition: {
                duration: 2,
            },
            transitionEnd: { hidden: {opacity: 1} }
        },

    }

    const Map = ReactMapboxGl({
        accessToken:
            'pk.eyJ1IjoidHp5bGtzIiwiYSI6ImNrcjJ6dDRqajF1cHMyeHF1MW8xMnhwcTEifQ.CVFxW83wvdkk3XXm7ctYtQ',

    });

    function sendMail(e) {
        e.preventDefault()
        var link = "mailto:trevorzylks@gmail.com"
            + "?cc=" + escape(document.getElementById('Email').value)
            + "&subject=" + escape(document.getElementById('Subject').value)
            + "&body=" + escape(document.getElementById('Body').value)
            ;
        window.location.href = link;
    }

    const handleChangeSubject = (e) => {
        e.preventDefault();
        setSubject(e.target.value)
    }
    const handleChangeName = (e) => {
        e.preventDefault();
        setFirstName(e.target.value)
    }
    const handleChangeMessage = (e) => {
        e.preventDefault();
        setMessage(e.target.value)
    }
    const handleChangeEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value)
    }

    return (
        <>
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={intoView}
                style={{marginTop: '10vh'}}
            >
                    <Box sx={{
                        ml: {
                            s: '15vw',
                            xs: '10vw',
                            md: '15vw',
                            lg: '15vw'
                        },
                        mt: {
                            s: '15vw',
                            xs: '15vw',
                            md: '15vw',
                            lg: '5vw'
                        }

                    }}>
                        <Typography variant='h1' style={{ fontFamily: 'MuseoModerno', fontWeight: 100, color: 'white', fontSize: "6.4rem", position: 'absolute', opacity: .4, fontWeight: 800 }}>contact me</Typography>
                        <Typography variant='h1' style={{ fontFamily: 'MuseoModerno', fontWeight: 100, color: 'white', fontSize: "5.4rem" }}>contact me</Typography>
                        <Box sx={{
                            width: {
                                s: '90vw',
                                xs: '90vw',
                                md: '40vw',
                                lg: '40vw'
                            }
                        }}>
                          
                        </Box>
                    </Box>
                <Box sx={{ mt: { lg: '10vh' }, position: 'absolute', left: 200, display: { xs: 'none', s: 'none', md: 'none', lg: 'inline' } }}>
                    <Map
                        center={[-110.9264800, 32.2217400]}
                        zoom={[10]}
                        style="mapbox://styles/tzylks/ckv19wmmz268215qonq8sf4wf"
                        containerStyle={{
                            height: '80vh',
                            width: '30vw',

                        }}
                    >
                        <Image id={'image-uid'} data={Me} center={[-110.9264800, 32.2217400]} />
                    </Map>
                </Box>
                <Box sx={{ bgcolor: 'gray', opacity: .3, height: "80vh", width: {lg: '50vw', sm: '10vw'}, position: 'absolute', right: 40, mt: {lg: '10vh', xs: '38vh' }}}>

                </Box>

                <Box sx={{ mt: { lg: '19vh', xs: '50vh' }, position: 'absolute', ml: {lg: '52vw', xs: '20vw'} }} style={{ textAlign: 'center', width: '40%' }}>  
                    <form onSubmit={sendMail}>
                        <TextField variant="outlined" sx={{ bgcolor: 'black' }} color="error" active fullWidth id="Subject" placeholder='Subject' value={subject} onChange={handleChangeSubject} />
                        <br />
                        <br />
                        <TextField fullWidth value='hi' sx={{ bgcolor: 'black' }} color="error" placeholder='First Name' value={firstName} onChange={handleChangeName} />
                        <br />
                        <br />
                        <TextField fullWidth value='hi' sx={{ bgcolor: 'black' }} color="error" id="Email" placeholder='Email' value={email} onChange={handleChangeEmail} />
                        <br />
                        <br />
                        <TextField id="Body" multiline="true" rows="10" maxRows="10" fullWidth sx={{ bgcolor: 'black' }} color="error" placeholder='Message' value={message} onChange={handleChangeMessage} />
                        <Button sx={{ opacity: .8, bgcolor: '#FF00C8', justifyContent: 'center', mt: { lg: '3vh' } }} type="submit">Submit</Button>
                    </form>
                </Box>
               
            </motion.div>
        </>
    )
}
export default Contact
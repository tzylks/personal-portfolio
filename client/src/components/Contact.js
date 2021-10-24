import ReactMapboxGl, { Layer, Feature, Image } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Me from './me.png'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function Contact() {
    const [subject, setSubject] = useState('')
    const [firstName, setFirstName] = useState('')
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')

    const inputName = useRef(null)

    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
        if (!inView) {
            controls.start('hidden')
        }
    }, [controls, inView])

    const intoView = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,

            transition: {
                duration: 2,
            },
            transitionEnd: { type: 'spring' }
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
                style={{ marginTop: '10vh' }}
                id="Contact"
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
                        xs: '70vw',
                        md: '15vw',
                        lg: '1vw'
                    },
                    width: {
                        xs: '40vw'
                    },
                    mb: {
                        lg: '-5vh'
                    }
                    

                }}>
                    <Typography variant='h1' sx={{fontSize: {lg: "6.4rem", xs: '4.4rem'}}}  style={{ fontFamily: 'MuseoModerno', fontWeight: 100, color: '#f25331',  position: 'absolute', opacity: .4, fontWeight: 800 }}>contact</Typography>
                    <Typography variant='h1'  sx={{fontSize: {lg: "5.4rem", xs: '3.3rem'}}} style={{ fontFamily: 'MuseoModerno', fontWeight: 100, color: '#f25331' }}>Contact</Typography>
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
                <Box sx={{ bgcolor: 'gray', opacity: .3, height: {lg: "80vh", xs: '110vh', xs: '110vh'}, width: { lg: '50vw', sm: '10vw', sm: '10vw' }, position: {lg: 'absolute', xs: 'inline', s: 'inline'}, right: {lg: 40, xs: 0, s: 0}, mt: { lg: '10vh', xs: '10vh' } }}>

                </Box>

                <Box sx={{ mt: { lg: '19vh', xs: '-100vh' }, position: 'absolute', ml: { lg: '52vw', xs: '10vw' }, width: {lg: '40%', xs: '80%'} }} style={{ textAlign: 'center'}}>
                    <form onSubmit={sendMail}>
                        <TextField variant="outlined" sx={{ bgcolor: 'black' }} color="error" active fullWidth id="Subject" placeholder='Subject' />
                        <br />
                        <br />
                        <TextField fullWidth sx={{ bgcolor: 'black' }} color="error" placeholder='First Name' />
                        <br />
                        <br />
                        <TextField fullWidth sx={{ bgcolor: 'black' }} color="error" id="Email" placeholder='Email'  />
                        <br />
                        <br />
                        <TextField id="Body" multiline="true" rows="10" maxRows="10" fullWidth sx={{ bgcolor: 'black' }} color="error" placeholder='Message'  />
                        <Box sx={{ml: { lg: '0vw'}}}>
                            <Button sx={{ opacity: .8, bgcolor: '#f25331', justifyContent: { lg: 'center', xs: 'left' }, mt: { lg: '3vh', xs: '7vh' } }} type="submit">Submit</Button>
                        </Box>
                    </form>
                </Box>

            </motion.div>
        </>
    )
}
export default Contact
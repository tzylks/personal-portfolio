import RealMe from './real_me.jpeg'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

function Me() {
    return(
        <Box >
            <img src={RealMe} alt="Trevor" style={{width: '40%'}} />
        </Box>
    )
}

export default Me
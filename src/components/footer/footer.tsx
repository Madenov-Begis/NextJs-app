import { Box, Typography, Button, ButtonGroup } from '@mui/material'
import TelegramIcon from '@mui/icons-material/Telegram'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { format } from 'date-fns'

const Footer = () => {
  return (
    <Box
      padding={'20px'}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
        backgroundColor: '#222222',
      }}
    >
      <Typography>© {format(new Date(), 'yyyy')} All Right Reserved</Typography>
      <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled elevation buttons"
        sx={{display:'flex', gap:'10px'}}
      >
        <TelegramIcon sx={{cursor:'pointer'}}/>
        <InstagramIcon sx={{cursor:'pointer'}}/>
        <YouTubeIcon sx={{cursor:'pointer'}}/>
      </ButtonGroup>
    </Box>
  )
}

export default Footer

import { navItems } from '@/constants/navbar.items'
import { Box, Button, Divider, Typography } from '@mui/material'
import { Fragment } from 'react'
import { data } from '../hero/hero'
import Image from 'next/image'
import { format } from 'date-fns/esm'

const Sidebar = () => {
  return (
    <Box width={'30%'} >
      <Box position={'sticky'} top={'100px'}>
        <Box
          sx={{ border: '2px solid grey' }}
          borderRadius={'10px'}
          padding={'20px'}
          marginTop={'20px'}
        >
          <Typography variant="h5">Category</Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '10px',
              flexDirection: 'column',
              marginTop: '20px',
            }}
          >
            {navItems.map((item) => {
              return (
                <Fragment>
                  <Button
                    fullWidth
                    key={item.route}
                    sx={{
                      justifyContent: 'flex-start',
                      height: '50px',
                    }}
                  >
                    {item.label}
                  </Button>
                  <Divider />
                </Fragment>
              )
            })}
          </Box>
        </Box>
        <Box
          sx={{ border: '2px solid grey' }}
          borderRadius={'10px'}
          padding={'20px'}
          marginTop={'30px'}
        >
          <Typography variant="h5">Latest blog</Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '10px',
              flexDirection: 'column',
              marginTop: '20px',
            }}
          >
            {data.map((item) => {
              return (
                <Box key={item.title} marginTop={'20px'}>
                  <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: '50px' }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={100}
                      height={100}
                      style={{ objectFit: 'cover', borderRadius: '8px' }}
                    />
                    <Box>
                      <Typography variant="h5">{item.title}</Typography>
                      <Box sx={{ opacity: '.6' }}>
                        {format(new Date(), 'dd MMM, yyyy')} &#x2022; 10min read
                      </Box>
                    </Box>
                  </Box>
                  <Divider sx={{ marginTop: '20px' }} />
                </Box>
              )
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar

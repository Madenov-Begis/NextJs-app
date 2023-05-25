import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import 'react-multi-carousel/lib/styles.css'
import Carousel from 'react-multi-carousel'
import exp from 'constants'

const Hero = () => {
  return (
    <Box width={'100%'} height={'70vh'}>
      <Carousel
        responsive={{
          mobile: {
            breakpoint: { max: 4000, min: 0 },
            items: 1,
          },
        }}
      >
        {data.map((data) => {
          return (
            <Box key={data.image}>
              <Box
                sx={{ position: 'relative', width: '100%', height: ['70vh'] }}
              >
                <Image src={data.image} alt={data.title} fill />
                <Box
                  sx={{
                    position: 'absolute',
                    left: '0',
                    ttop: '0',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.327)',
                  }}
                />
                <Box
                  sx={{
                    color: 'white',
                    position: 'relative',
                    top: '50%',
                    transform: 'translateY(-50%)',
                  }}
                  padding={'50px'}
                  width="70%"
                >
                  <Typography variant="h2">{data.title}</Typography>
                  <Typography variant="h5" sx={{ marginTop: '20px' }}>
                    {data.exerpt}
                  </Typography>
                </Box>
              </Box>
            </Box>
          )
        })}
      </Carousel>
    </Box>
  )
}

export default Hero

export const data = [
  {
    image: 'https://media.graphassets.com/MxJZhmooRRuudoErkQ38',
    title: 'Technical SEO with Hygraph',
    exerpt:
      'Get started with your SEO implementation when using a Headless CMS',
    author: {
      name: 'Samar Badriddinov',
      image: 'https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx',
    },
  },
  {
    image: 'https://media.graphassets.com/bh3K2NNtTHCN260Xfq9h',
    title: 'Union Types and Sortable Relations with Hygraph',
    exerpt:
      'Learn more about Polymorphic Relations and Sortable Relations with Hygraph',
    author: {
      name: 'Samar Badriddinov',
      image: 'https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx',
    },
  },
]

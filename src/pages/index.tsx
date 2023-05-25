import { Content, Hero, Sidebar } from '@/components/components.index'
import Layout from '@/layouts/layout'
import { Box } from '@mui/material'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Box sx={{display:'flex', padding:'20px', gap:'20px'}}>
        <Sidebar />
        <Content />
      </Box>
    </Layout>
  )
}

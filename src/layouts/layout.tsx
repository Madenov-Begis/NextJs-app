import { Footer, Navbar } from '@/components/components.index'
import { LayoutProps } from './layout.props'
import { Box } from '@mui/material'

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Navbar />
      <Box minHeight={'90vh'}>{children}</Box>
      <Footer />
    </>
  )
}

export default Layout

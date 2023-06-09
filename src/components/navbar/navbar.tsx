import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import WhatshotIcon from '@mui/icons-material/Whatshot'
import { navItems } from '@/constants/navbar.items'
import { useState } from 'react'

interface Props {
  window?: () => Window
}

const drawerWidth = 240

const Navbar = ({ window }: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingX: '15px',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <WhatshotIcon />
          <Typography variant="h6" sx={{ my: 2 }}>
            OT
          </Typography>
        </Box>
        <CloseIcon />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.route} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box height={'64px '} sx={{ display: 'flex', alignItems: 'centers' }}>
      <AppBar
        component="nav"
        sx={{ height: '64px', backgroundColor: '#222222' }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              alignItems: 'center',
              gap: '5px',
              flexGrow: 1,
              display: { xs: 'none', sm: 'flex' },
            }}
          >
            <WhatshotIcon />
            <Typography variant="h6" component="div">
              OT
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.route} sx={{ color: '#fff' }}>
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}

export default Navbar

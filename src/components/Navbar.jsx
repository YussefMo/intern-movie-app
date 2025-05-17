import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  IconButton
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { motion } from 'framer-motion';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto'
  }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%' // Ensure input takes full width of its container on small screens
    }
  }
}));

const Navbar = ({ onSearchChange, themeMode, toggleThemeMode }) => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          // On extra-small screens, center the content
          '@media (max-width: 600px)': {
            justifyContent: 'center'
          }
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            // Hide logo on extra-small screens to allow search to center
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MovieApp
          </Typography>
        </motion.div>
        {/* This Box will push the search to the right on sm screens and up, but won't exist on xs screens */}
        <Box
          sx={{ flexGrow: { sm: 1 }, display: { xs: 'none', sm: 'block' } }}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: { xs: 'center', sm: 'flex-end' },
            width: { xs: '100%', sm: 'auto' }
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            // Ensure motion.div takes appropriate width on small screens
            style={{ width: 'auto', display: 'flex', alignItems: 'center' }}
          >
            <Search
              sx={{
                width: { xs: 'calc(100% - 48px)', sm: 'auto' },
                mr: { xs: 1, sm: 0 }
              }}
            >
              {' '}
              {/* Adjust width on xs and add margin */}
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </Search>
            <IconButton
              sx={{ ml: 1 }}
              onClick={toggleThemeMode}
              color="inherit"
            >
              {themeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </motion.div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

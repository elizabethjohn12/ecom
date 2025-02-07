import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#283593', // Indigo
    },
    secondary: {
      main: '#fbc02d', // Yellow
    },
  },
  typography: {
    h6: {
      fontWeight: 600,
      fontFamily: '"Roboto", sans-serif',
      color: '#ffffff', // White for better contrast on dark background
    },
    body1: {
      fontWeight: 500,
      color: '#ffffff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .2)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 6px 10px 4px rgba(0, 0, 0, .2)',
          },
        },
      },
    },
  },
});

function Navbar() {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  };
  const handleClick = () => {
    logout();
  };
  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        sx={{
          background: 'linear-gradient(45deg, #283593 30%, #303f9f 90%)',
        }}
      >
        <Toolbar>
          <img
            src="https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Logo"
            style={{
              width: 40,
              height: 40,
              marginRight: 16,
              borderRadius: '50%',
              objectFit: 'cover',
              boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .2)',
            }}
          />
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ flexGrow: 1, textDecoration: 'none', color: 'secondary.main', fontFamily: 'Cursive' }}
          >
            Shopifyy
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {user ? (
              <>
                {user.role !== 'admin' && (
                  <Button color="secondary" onClick={handleCartClick}>
                    <i className="fas fa-shopping-cart" style={{ marginRight: 8 }}></i> Cart
                  </Button>
                )}
                {user.role !== 'admin' && (
                  <Button color="secondary" onClick={handleProfileClick}>
                    <i className="fas fa-user" style={{ marginRight: 8 }}></i> Profile
                  </Button>
                )}
                <Typography
                  variant="body1"
                  sx={{ display: 'inline', marginRight: 5, color: 'secondary.main' }}
                >
                  {user.email}
                </Typography>
                <Button color="secondary" onClick={handleClick}>
                  <i className="fas fa-sign-out-alt" style={{ marginRight: 8 }}></i> Logout
                </Button>
              </>
            ) : (
              <>
                <Button color="secondary" component={Link} to="/login">
                  <i className="fas fa-sign-in-alt" style={{ marginRight: 8 }}></i> Login
                </Button>
                <Button color="secondary" component={Link} to="/signup">
                  <i className="fas fa-user-plus" style={{ marginRight: 8 }}></i> Signup
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;


// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useLogout } from '../hooks/useLogout';
// import { useAuthContext } from '../hooks/useAuthContext';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#2c3e50', // Navy blue
//     },
//     secondary: {
//       main: '#ecf0f1', // Light gray
//     },
//   },
//   typography: {
//     h6: {
//       fontWeight: 600,
//     },
//     body1: {
//       fontWeight: 500,
//     },
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           boxShadow: '0 3px 5px 2px rgba(44, 62, 80, .3)',
//           transition: 'all 0.3s ease',
//           '&:hover': {
//             boxShadow: '0 6px 10px 4px rgba(44, 62, 80, .3)',
//           },
//         },
//       },
//     },
//     MuiTypography: {
//       styleOverrides: {
//         root: {
//           fontFamily: '"Roboto", sans-serif',
//         },
//       },
//     },
//   },
// });

// function Navbar() {
//   const { user } = useAuthContext();
//   const { logout } = useLogout();
//   const navigate = useNavigate();

//   const handleCartClick = () => {
//     navigate('/cart');
//   };
//   const handleClick = () => {
//     logout();
//   };
//   const handleProfileClick = () => {
//     navigate('/profile');
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <AppBar
//         position="static"
//         sx={{
//           background: 'linear-gradient(45deg, #2c3e50 30%, #34495e 90%)',
//         }}
//       >
//         <Toolbar>
//           <img
//             src="https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="Logo"
//             style={{
//               width: 40,
//               height: 40,
//               marginRight: 8,
//               borderRadius: '50%',
//               objectFit: 'cover',
//               boxShadow: '0 3px 5px 2px rgba(44, 62, 80, .3)',
//             }}
//           />
//           <Typography
//             variant="h6"
//             component={Link}
//             to="/"
//             sx={{ flexGrow: 1, textDecoration: 'none', color: 'secondary.main', fontFamily: 'Cursive' }}
//           >
//             Shopee
//           </Typography>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             {user ? (
//               <>
//                 {user.role !== 'admin' && (
//                   <Button color="secondary" onClick={handleCartClick}>
//                     <i className="fas fa-shopping-cart"></i> Cart
//                   </Button>
//                 )}
//                 {user.role !== 'admin' && (
//                   <Button color="secondary" onClick={handleProfileClick}>
//                     <i className="fas fa-user"></i> Profile
//                   </Button>
//                 )}
//                 <Typography
//                   variant="body1"
//                   sx={{ display: 'inline', marginRight: 5, color: 'secondary.main' }}
//                 >
//                   {user.email}
//                 </Typography>
//                 <Button color="secondary" onClick={handleClick}>
//                   <i className="fas fa-sign-out-alt"></i> Logout
//                 </Button>
//               </>
//             ) : (
//               <>
//                 <Button color="secondary" component={Link} to="/login">
//                   <i className="fas fa-sign-in-alt"></i> Login
//                 </Button>
//                 <Button color="secondary" component={Link} to="/signup">
//                   <i className="fas fa-user-plus"></i> Signup
//                 </Button>
//               </>
//             )}
//           </Box>
//         </Toolbar>
//       </AppBar>
//     </ThemeProvider>
//   );
// }

// export default Navbar;


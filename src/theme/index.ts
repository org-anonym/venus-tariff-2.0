import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1e3a8a', // Deep blue - professional and trustworthy
      light: '#3b5998',
      dark: '#0f172a',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#059669', // Emerald green - growth and success
      light: '#10b981',
      dark: '#047857',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f8fafc', // Light gray background
      paper: '#ffffff',
    },
    text: {
      primary: '#1e293b', // Dark slate for primary text
      secondary: '#64748b', // Medium slate for secondary text
    },
    success: {
      main: '#059669',
      light: '#10b981',
      dark: '#047857',
    },
    warning: {
      main: '#d97706',
      light: '#f59e0b',
      dark: '#b45309',
    },
    error: {
      main: '#dc2626',
      light: '#ef4444',
      dark: '#b91c1c',
    },
    info: {
      main: '#2563eb',
      light: '#3b82f6',
      dark: '#1d4ed8',
    },
    divider: '#e2e8f0',
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#1e293b',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
      color: '#1e293b',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.3,
      color: '#1e293b',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#1e293b',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#1e293b',
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#1e293b',
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.5,
      color: '#64748b',
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.5,
      color: '#64748b',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.6,
      color: '#1e293b',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.6,
      color: '#64748b',
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.025em',
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#64748b',
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: '#64748b',
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0px 1px 2px rgba(0, 0, 0, 0.05)',
    '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
    '0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.06)',
    '0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)',
    '0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)',
    '0px 25px 50px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.04)',
    '0px 35px 60px rgba(0, 0, 0, 0.1), 0px 15px 25px rgba(0, 0, 0, 0.04)',
    '0px 45px 70px rgba(0, 0, 0, 0.1), 0px 20px 30px rgba(0, 0, 0, 0.04)',
    '0px 55px 80px rgba(0, 0, 0, 0.1), 0px 25px 35px rgba(0, 0, 0, 0.04)',
    '0px 65px 90px rgba(0, 0, 0, 0.1), 0px 30px 40px rgba(0, 0, 0, 0.04)',
    '0px 75px 100px rgba(0, 0, 0, 0.1), 0px 35px 45px rgba(0, 0, 0, 0.04)',
    '0px 85px 110px rgba(0, 0, 0, 0.1), 0px 40px 50px rgba(0, 0, 0, 0.04)',
    '0px 95px 120px rgba(0, 0, 0, 0.1), 0px 45px 55px rgba(0, 0, 0, 0.04)',
    '0px 105px 130px rgba(0, 0, 0, 0.1), 0px 50px 60px rgba(0, 0, 0, 0.04)',
    '0px 115px 140px rgba(0, 0, 0, 0.1), 0px 55px 65px rgba(0, 0, 0, 0.04)',
    '0px 125px 150px rgba(0, 0, 0, 0.1), 0px 60px 70px rgba(0, 0, 0, 0.04)',
    '0px 135px 160px rgba(0, 0, 0, 0.1), 0px 65px 75px rgba(0, 0, 0, 0.04)',
    '0px 145px 170px rgba(0, 0, 0, 0.1), 0px 70px 80px rgba(0, 0, 0, 0.04)',
    '0px 155px 180px rgba(0, 0, 0, 0.1), 0px 75px 85px rgba(0, 0, 0, 0.04)',
    '0px 165px 190px rgba(0, 0, 0, 0.1), 0px 80px 90px rgba(0, 0, 0, 0.04)',
    '0px 175px 200px rgba(0, 0, 0, 0.1), 0px 85px 95px rgba(0, 0, 0, 0.04)',
    '0px 185px 210px rgba(0, 0, 0, 0.1), 0px 90px 100px rgba(0, 0, 0, 0.04)',
    '0px 195px 220px rgba(0, 0, 0, 0.1), 0px 95px 105px rgba(0, 0, 0, 0.04)',
    '0px 205px 230px rgba(0, 0, 0, 0.1), 0px 100px 110px rgba(0, 0, 0, 0.04)',
  ],
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#1e293b',
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
          borderBottom: '1px solid #e2e8f0',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#1e3a8a',
          color: '#ffffff',
          borderRight: 'none',
          boxShadow: '4px 0px 6px rgba(0, 0, 0, 0.1)',
          '& .MuiToolbar-root': {
            backgroundColor: '#1e3a8a',
            color: '#ffffff',
          },
          '& .MuiDivider-root': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
          border: '1px solid #e2e8f0',
          borderRadius: 12,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
          border: '1px solid #e2e8f0',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.06)',
          },
        },
        contained: {
          '&:hover': {
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.06)',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#3b5998',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#1e3a8a',
              borderWidth: '2px',
            },
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: '#f8fafc',
          '& .MuiTableCell-head': {
            fontWeight: 600,
            color: '#1e293b',
            borderBottom: '2px solid #e2e8f0',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #e2e8f0',
          padding: '16px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 500,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 12,
          boxShadow: '0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          margin: '4px 8px',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
          '&.Mui-selected': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
            },
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          '&:hover': {
            backgroundColor: 'rgba(30, 58, 138, 0.08)',
          },
        },
      },
    },
  },
});

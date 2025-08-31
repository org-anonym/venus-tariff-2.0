import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper
} from '@mui/material';
import {
  Business as BusinessIcon,
  Description as DescriptionIcon,
  People as PeopleIcon,
  List as ListIcon
} from '@mui/icons-material';
import { mockCompanies, mockTariffs, mockUsers } from '../utils/mockData';

const DashboardPage: React.FC = () => {
  const stats = [
    {
      title: 'Total Companies',
      value: mockCompanies.length,
      icon: <BusinessIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      color: 'primary',
      gradient: 'linear-gradient(135deg, #1e3a8a 0%, #3b5998 100%)'
    },
    {
      title: 'Total Tariffs',
      value: mockTariffs.length,
      icon: <DescriptionIcon sx={{ fontSize: 48, color: 'secondary.main' }} />,
      color: 'secondary',
      gradient: 'linear-gradient(135deg, #059669 0%, #10b981 100%)'
    },
    {
      title: 'Total Users',
      value: mockUsers.length,
      icon: <PeopleIcon sx={{ fontSize: 48, color: 'success.main' }} />,
      color: 'success',
      gradient: 'linear-gradient(135deg, #059669 0%, #10b981 100%)'
    },
    {
      title: 'Total Sections',
      value: mockTariffs.length, // Each tariff has sections
      icon: <ListIcon sx={{ fontSize: 48, color: 'info.main' }} />,
      color: 'info',
      gradient: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)'
    }
  ];

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography variant="h4" component="div" fontWeight="bold">
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.title}
                    </Typography>
                  </Box>
                  {stat.icon}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Recent Companies
            </Typography>
            {mockCompanies.slice(0, 3).map((company) => (
              <Box key={company.id} sx={{ mb: 2, p: 2, border: '1px solid #e0e0e0', borderRadius: 1 }}>
                <Typography variant="subtitle1" fontWeight="medium">
                  {company.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {company.email} • {company.usersCount} users • {company.tariffsCount} tariffs
                </Typography>
              </Box>
            ))}
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Recent Tariffs
            </Typography>
            {mockTariffs.slice(0, 3).map((tariff) => (
              <Box key={tariff.id} sx={{ mb: 2, p: 2, border: '1px solid #e0e0e0', borderRadius: 1 }}>
                <Typography variant="subtitle1" fontWeight="medium">
                  {tariff.file}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ID: {tariff.tariffId} • Section: {tariff.sectionId}
                </Typography>
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardPage;

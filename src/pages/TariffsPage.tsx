import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  ContentCopy as CopyIcon,
  Settings as ManageIcon,
  Upload as UploadIcon
} from '@mui/icons-material';
import { mockTariffs, mockCompanies } from '../utils/mockData';
import { Tariff } from '../types';

const TariffsPage: React.FC = () => {
  const [tariffs, setTariffs] = useState<Tariff[]>(mockTariffs);
  const [selectedCompany, setSelectedCompany] = useState<string>('all');
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [editingTariff, setEditingTariff] = useState<Tariff | null>(null);
  const [formData, setFormData] = useState({
    file: '',
    tariffId: '',
    sectionId: '',
    fId: '',
    fercId: '',
    companyId: ''
  });

  const filteredTariffs = selectedCompany === 'all' 
    ? tariffs 
    : tariffs.filter(tariff => tariff.companyId === selectedCompany);

  const handleAddTariff = () => {
    const newTariff: Tariff = {
      id: (tariffs.length + 1).toString(),
      file: formData.file,
      tariffId: formData.tariffId,
      sectionId: formData.sectionId,
      fId: formData.fId,
      fercId: formData.fercId,
      companyId: formData.companyId
    };

    setTariffs([...tariffs, newTariff]);
    setOpenAddDialog(false);
    resetForm();
  };

  const handleEditTariff = () => {
    if (editingTariff) {
      const updatedTariffs = tariffs.map(tariff =>
        tariff.id === editingTariff.id
          ? { ...editingTariff, ...formData }
          : tariff
      );
      setTariffs(updatedTariffs);
      setOpenEditDialog(false);
      setEditingTariff(null);
      resetForm();
    }
  };

  const handleDeleteTariff = (id: string) => {
    setTariffs(tariffs.filter(tariff => tariff.id !== id));
  };

  const handleCopyTariff = (tariff: Tariff) => {
    const copiedTariff: Tariff = {
      ...tariff,
      id: (tariffs.length + 1).toString(),
      tariffId: `${tariff.tariffId}_COPY`,
      file: `${tariff.file}_COPY`
    };
    setTariffs([...tariffs, copiedTariff]);
  };

  const resetForm = () => {
    setFormData({
      file: '',
      tariffId: '',
      sectionId: '',
      fId: '',
      fercId: '',
      companyId: ''
    });
  };

  const openEdit = (tariff: Tariff) => {
    setEditingTariff(tariff);
    setFormData({
      file: tariff.file,
      tariffId: tariff.tariffId,
      sectionId: tariff.sectionId,
      fId: tariff.fId,
      fercId: tariff.fercId,
      companyId: tariff.companyId
    });
    setOpenEditDialog(true);
  };

  const getCompanyName = (companyId: string) => {
    const company = mockCompanies.find(c => c.id === companyId);
    return company ? company.name : 'Unknown Company';
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1">
          Tariff List
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            variant="outlined"
            startIcon={<UploadIcon />}
          >
            Upload
          </Button>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setOpenAddDialog(true)}
          >
            Add Tariff
          </Button>
        </Box>
      </Box>

      <Box sx={{ mb: 3 }}>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Filter by Company</InputLabel>
          <Select
            value={selectedCompany}
            label="Filter by Company"
            onChange={(e) => setSelectedCompany(e.target.value)}
          >
            <MenuItem value="all">All Companies</MenuItem>
            {mockCompanies.map((company) => (
              <MenuItem key={company.id} value={company.id}>
                {company.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>File</TableCell>
              <TableCell>Tariff ID</TableCell>
              <TableCell>Section ID</TableCell>
              <TableCell>F-ID</TableCell>
              <TableCell>FERC-ID</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTariffs.map((tariff) => (
              <TableRow key={tariff.id}>
                <TableCell>
                  <Typography variant="body2" color="primary">
                    {tariff.file}
                  </Typography>
                </TableCell>
                <TableCell>{tariff.tariffId}</TableCell>
                <TableCell>{tariff.sectionId}</TableCell>
                <TableCell>{tariff.fId}</TableCell>
                <TableCell>{tariff.fercId}</TableCell>
                <TableCell>{getCompanyName(tariff.companyId)}</TableCell>
                <TableCell>
                  <IconButton
                    color="primary"
                    onClick={() => {}} // Manage Tariff
                    size="small"
                    title="Manage Tariff"
                  >
                    <ManageIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => handleCopyTariff(tariff)}
                    size="small"
                    title="Copy Tariff"
                  >
                    <CopyIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    onClick={() => openEdit(tariff)}
                    size="small"
                    title="Edit Tariff"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => handleDeleteTariff(tariff.id)}
                    size="small"
                    title="Delete Tariff"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add Tariff Dialog */}
      <Dialog open={openAddDialog} onClose={() => setOpenAddDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>Add New Tariff</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="File"
                value={formData.file}
                onChange={(e) => setFormData({ ...formData, file: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Tariff ID"
                value={formData.tariffId}
                onChange={(e) => setFormData({ ...formData, tariffId: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Section ID"
                value={formData.sectionId}
                onChange={(e) => setFormData({ ...formData, sectionId: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="F-ID"
                value={formData.fId}
                onChange={(e) => setFormData({ ...formData, fId: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="FERC-ID"
                value={formData.fercId}
                onChange={(e) => setFormData({ ...formData, fercId: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Company</InputLabel>
                <Select
                  value={formData.companyId}
                  label="Company"
                  onChange={(e) => setFormData({ ...formData, companyId: e.target.value })}
                >
                  {mockCompanies.map((company) => (
                    <MenuItem key={company.id} value={company.id}>
                      {company.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAddDialog(false)}>Cancel</Button>
          <Button onClick={handleAddTariff} variant="contained">Add Tariff</Button>
        </DialogActions>
      </Dialog>

      {/* Edit Tariff Dialog */}
      <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>Edit Tariff</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="File"
                value={formData.file}
                onChange={(e) => setFormData({ ...formData, file: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Tariff ID"
                value={formData.tariffId}
                onChange={(e) => setFormData({ ...formData, tariffId: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Section ID"
                value={formData.sectionId}
                onChange={(e) => setFormData({ ...formData, sectionId: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="F-ID"
                value={formData.fId}
                onChange={(e) => setFormData({ ...formData, fId: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="FERC-ID"
                value={formData.fercId}
                onChange={(e) => setFormData({ ...formData, fercId: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Company</InputLabel>
                <Select
                  value={formData.companyId}
                  label="Company"
                  onChange={(e) => setFormData({ ...formData, companyId: e.target.value })}
                >
                  {mockCompanies.map((company) => (
                    <MenuItem key={company.id} value={company.id}>
                      {company.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditDialog(false)}>Cancel</Button>
          <Button onClick={handleEditTariff} variant="contained">Save Changes</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default TariffsPage;

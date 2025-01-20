import React, { useState } from 'react';
import {
    Box,
    TextField,
    Button,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    Select,
    MenuItem,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Connection: React.FC = () => {

    const [formValues, setFormValues] = useState({
        hostname: '',
        port: '',
        username: '',
        password: '',
        database: '',
        software: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        if (name) {
            setFormValues({ ...formValues, [name]: value });
        }
        else {
            setFormValues({ ...formValues, software: value });
        }
    };

    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Database Connection Details:', formValues);
        // Add logic to send data to your backend or handle connection
    };

    return (
        <Box  >
            <div className='title' >
                <img src={logo} style={{ height: "30px" }} />
                <p>Synchrony Universal SQL Editor</p>
            </div>
            <div className='sub-title' >
                <p>Welcome back, enter connection details</p>
            </div>
            <form onSubmit={handleSubmit} autoComplete='off' >
                <div style={{ display: "flex", gap: "20px", justifyContent: "center", alignItems: "center", padding: "10px" }} >
                    <FormControl fullWidth variant="outlined">
                        <InputLabel id="demo-simple-select-label">Software</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={formValues.software}
                            required
                            onChange={handleChange}
                            label="Software" // This corresponds to the InputLabel text
                        >
                            <MenuItem value={""}></MenuItem>
                            <MenuItem value={"Oracle"}>Oracle</MenuItem>
                            <MenuItem value={"My Sql"}>My Sql</MenuItem>
                            <MenuItem value={"SQL Server"}>SQL Server</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div style={{ display: "flex", gap: "20px", justifyContent: "center", alignItems: "center", padding: "10px" }} >
                    <TextField
                        fullWidth
                        label="Hostname"
                        name="hostname"
                        value={formValues.hostname}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        required
                    />
                </div>
                <div style={{ display: "flex", gap: "20px", justifyContent: "center", alignItems: "center", padding: "10px" }} >
                    <TextField
                        fullWidth
                        label="Database Name"
                        name="database"
                        value={formValues.database}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Port"
                        name="port"
                        value={formValues.port}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        required
                    />
                </div>
                <div style={{ display: "flex", gap: "20px", justifyContent: "center", alignItems: "center", padding: "10px" }} >
                    <TextField
                        fullWidth
                        label="Username"
                        name="username"
                        value={formValues.username}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        required
                    />
                    <FormControl fullWidth margin="normal" variant="outlined">
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <OutlinedInput
                            id="password"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            value={formValues.password}
                            onChange={handleChange}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handlePasswordVisibility}
                                        edge="end"
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                            required
                        />
                    </FormControl>
                </div>
                <div style={{ display: "flex", gap: "20px", justifyContent: "center", alignItems: "center", padding: "10px" }} >
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ marginTop: 2 }}
                    >
                        Connect
                    </Button>
                    <Button
                        type="button"
                        variant="contained"
                        color="error"
                        fullWidth
                        onClick={() => {
                            navigate("/home");
                        }}
                        sx={{ marginTop: 2 }}
                    >
                        Clear
                    </Button>
                </div>
            </form>
        </Box>
    );
};


export default Connection;
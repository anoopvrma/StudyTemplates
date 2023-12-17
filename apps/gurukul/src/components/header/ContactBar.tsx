'use client';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {
    useTheme
} from '@mui/material/styles';
import { Box } from '@mui/material';

function ContactBar() {
    const theme = useTheme();
    return (
        <Box sx={{ background: theme.palette.grey[800] }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} >
                        <Typography textAlign="center" variant="caption" sx={{ mr: 2, color: theme.palette.grey[300] }}>Have any questions?</Typography>
                        <Typography textAlign="center" variant="caption" sx={{ mx: 2, color: theme.palette.grey[300] }}>(+91) 999XXXXXXX</Typography>
                        <Typography textAlign="center" variant="caption" sx={{ mx: 2, color: theme.palette.grey[300] }}>template@studyminutes.com</Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} ></Box>
                    <Box sx={{
                        flexDirection: 'row-reverse'
                    }}>
                        <Typography textAlign="center" variant="caption" sx={{ mx: 2, color: theme.palette.grey[300] }}>Register/Login</Typography>
                    </Box>
                </Toolbar>
            </Container>
        </Box>
    )
}

export default ContactBar;
import theme from "@/theme/theme";
import { Box, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export function TeacherCard({ image, name, role, qualification }: { image: string, name: string, role: string, qualification: string }) {
    return (
        <Paper sx={{
            p: 4,
            ':hover': {
                boxShadow: theme.shadows[10]
            },
        }} variant="outlined">
            <Grid container spacing={2}>
                <Grid item sx={{ width: '140px' }}>
                    <Box width={120} height={120} sx={{ overflow: 'hidden' }}>
                        <Image src={image} alt={name} width={120} height={120} />
                    </Box>
                </Grid>
                <Grid item xs>
                    <Box display='flex'
                        alignItems='center' sx={{ height: '100%', color: theme.palette.grey[800] }}>
                        <Box>
                            <Typography variant="h6" fontWeight={'bold'} >{name}</Typography>
                            <Typography variant="body2" fontWeight={'500'} color={theme.palette.grey[700]}>{role}</Typography>
                            <Typography variant="body2" color={theme.palette.grey[700]}>Degree: {qualification}</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Paper >
    );
}
import theme from "@/theme/theme";
import { Box, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export function MessageCard({ image, name, role, message }: { image: string, name: string, role: string, message: string }) {
    return (
        <Paper sx={{
            p: 4
        }} elevation={3}>
            <Grid container spacing={4}>
                <Grid item sx={{ width: '140px' }}>
                    <Box width={120} height={120} sx={{ borderRadius: '50%', overflow: 'hidden' }}>
                        <Image src={image} alt={name} width={120} height={120} style={{ objectFit: "cover" }} />
                    </Box>
                </Grid>
                <Grid item xs>
                    <Box display='flex'
                        alignItems='center' sx={{ height: '100%' }}>
                        <Box>
                            <Typography variant="button" fontWeight={'bold'} display="block">{name}</Typography>
                            <Typography variant="caption">{role}</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    {message && <Typography><FormatQuoteIcon fontSize="large" sx={{ color: theme.palette.primary.main }} />{message}</Typography>}
                </Grid>
            </Grid>
        </Paper >
    );
}
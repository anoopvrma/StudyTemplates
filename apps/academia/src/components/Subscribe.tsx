import { Box, Container, Divider, Grid, TextField, Theme, Typography } from "@mui/material";
import Button from '@mui/material/Button';

export default function Subscribe({ theme }: { theme: Theme }) {
    return (
        <Container maxWidth="lg">
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="stretch"
                spacing={4}
                pt={4}
                pb={4}
            >
                <Grid item xs={12}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography variant='h5' fontWeight='bold' textAlign={"center"}>
                            Newsletter - Stay tune and get the latest update
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Grid
                        container
                        spacing={1}
                        direction="row"
                        alignItems="top"
                        justifyContent="center"
                    >
                        <Grid item xs={12} sm={8} md={6}>
                            <TextField label={"Full Name*"} fullWidth color='primary' />
                        </Grid>
                        <Grid item xs={12} sm={4} md={3}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                fullWidth
                                sx={{ height: "56px" }}
                            >Get Started</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

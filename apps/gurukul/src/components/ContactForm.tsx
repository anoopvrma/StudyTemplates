import * as React from 'react';
import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";

export default function Contact() {
    return (
        <Container maxWidth={"lg"}>
            <Grid container
                direction="row"
                justifyContent="space-evenly"
                alignItems="stretch"
                spacing={4}
                py={6}
                minHeight={"40vh"}>
                <Grid item xs={12}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography variant='h4' fontWeight='bold'>
                            Get In Touch
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Grid container
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="stretch"
                        spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Box pb={3}><TextField label={"Full Name*"} fullWidth color='secondary'></TextField></Box>
                            <Box pb={3}><TextField label={"Email Address*"} fullWidth color='secondary'></TextField></Box>
                            <Box><TextField label={"Phone Number*"} fullWidth color='secondary'></TextField></Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Your Message..."
                                multiline
                                rows={8}
                                fullWidth
                                color='secondary'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Button variant='contained' size="large" sx={{ height: "56px" }} color='secondary'>Send Message</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Container>
    );
}
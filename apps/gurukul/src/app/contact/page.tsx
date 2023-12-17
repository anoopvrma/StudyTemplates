'use client'
import { BackgroundImageBox } from '@/components/BackgroundImageBox';
import { Box, Container, Grid, Typography } from '@mui/material'
import {
    useTheme
} from '@mui/material/styles';
import schoolImage from "@/public/school.jpg"
import SocialMediaBar from '@/components/SocialMediaBar';
import Contact from '@/components/ContactForm';
import ContactDetails from '@/components/ContactDetails';
import MapComponent from '@/components/MapComponent';

export default function Page() {

    const theme = useTheme();

    return (
        <>
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                sx={{ height: '40vh' }}>
                <BackgroundImageBox imageUrl={schoolImage.src}>
                    <Box sx={{ maxWidth: 'sm' }}>
                        <Typography gutterBottom variant="h3" fontWeight="bold" color={theme.palette.common.white}>
                            Contact Us
                        </Typography>
                        <Typography
                            variant="body1"
                            color={theme.palette.common.white}
                            fontWeight="medium"
                        >
                            Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet.
                        </Typography>
                    </Box>
                </BackgroundImageBox>
            </Box>
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
            >
                <Container>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="stretch"
                        spacing={4}
                        py={6}
                    >
                        <Grid item xs={12} md={6}>
                            <MapComponent />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <ContactDetails />
                        </Grid>

                    </Grid>
                </Container>
            </Box>
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                sx={{ background: theme.palette.grey[100] }}
            >
                <Container>
                    <Contact />
                </Container>
            </Box>
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                sx={{ background: theme.palette.secondary.light }} py={6}

            >
                <Container>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="stretch"
                        spacing={4}
                        pb={2}
                    >
                        <Grid item xs={12}>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }} >
                                <Typography variant='h4' textAlign={'center'} color={theme.palette.secondary.contrastText} >
                                    Join Us on Social Media
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <SocialMediaBar />
                        </Grid>
                    </Grid>
                </Container>

            </Box>
        </>
    )
}

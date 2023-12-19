'use client'
import { BackgroundImageBox } from '@/components/BackgroundImageBox';
import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import {
    useTheme
} from '@mui/material/styles';
import kindle from "@/public/kindle.jpg"
import LatestNews from '@/components/NewsBar';
import UpcomingEvents from '@/components/UpcomingEventsBar';
import Subscribe from '@/components/Subscribe';

export default function Page() {

    const theme = useTheme();

    return (
        <>
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                sx={{ height: '40vh' }}>
                <BackgroundImageBox imageUrl={kindle.src}>
                    <Box sx={{ maxWidth: 'sm' }}>
                        <Typography gutterBottom variant="h3" fontWeight="bold" color={theme.palette.common.white}>
                            News and Events
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
                        spacing={8}
                        py={6}
                    >
                        <Grid item xs={12} md={6}>
                            <LatestNews />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <UpcomingEvents />
                        </Grid>

                    </Grid>
                    <Divider />
                </Container>
            </Box>
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                sx={{ background: theme.palette.divider }}
                py={4}
            >
                <Container>
                    <Subscribe theme={theme} />
                </Container>
            </Box>
        </>
    )
}

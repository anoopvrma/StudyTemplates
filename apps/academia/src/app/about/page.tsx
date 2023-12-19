'use client'
import { BackgroundImageBox } from '@/components/BackgroundImageBox';
import { Box, Container, Grid, Typography } from '@mui/material'
import {
    useTheme
} from '@mui/material/styles';
import student from "@/public/smiling_student.jpg"
import { Leaderships } from '@/data/leadership';
import { MessageCard } from '@/components/cards/MessageCard';
import Affiliations from '@/components/Affiliations';
import Mission from '@/components/Mission';
import Vision from '@/components/Vision';
import Image from 'next/image';
import labImage from "@/public/laboratory.jpg"

export default function Page() {

    const theme = useTheme();

    return (
        <>
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                sx={{ height: '40vh' }}>
                <BackgroundImageBox imageUrl={student.src}>
                    <Box sx={{ maxWidth: 'sm' }}>
                        <Typography gutterBottom variant="h3" fontWeight="bold" color={theme.palette.common.white}>
                            About Us
                        </Typography>
                        <Typography
                            variant="body1"
                            color={theme.palette.common.white}
                            fontWeight="medium"
                        >
                            Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius quam. Nullam bibendum interdum dui, ac tempor lorem convallis ut
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
                        <Grid item xs={12}>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Typography variant='h3' fontWeight='bold' textAlign={'center'} >
                                    Our <Box color={theme.palette.primary.main} component="span">Foundation</Box>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }} pb={4}>
                                <Typography textAlign={'center'} maxWidth={"md"} color={theme.palette.text.secondary}>
                                    [All certificates/affiliation and institute history here] Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius quam. Nullam bibendum interdum dui, ac tempor lorem convallis ut
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Affiliations />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box position={"relative"} minHeight={"400px"}>
                                <Image src={labImage.src} alt="Laptop Image" fill>

                                </Image>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Mission />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Vision />
                        </Grid>

                    </Grid>
                </Container>
            </Box>
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                sx={{ background: theme.palette.divider }}
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
                        <Grid item xs={12}>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Typography variant='h3' fontWeight='bold' textAlign={'center'} >
                                    Message from our <Box color={theme.palette.primary.main} component="span">Leadership</Box>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }} pb={4}>
                                <Typography textAlign={'center'} maxWidth={"md"} color={theme.palette.text.secondary}>
                                    Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius quam. Nullam bibendum interdum dui, ac tempor lorem convallis ut
                                </Typography>
                            </Box>
                        </Grid>

                        {Leaderships.map((leader, index) => {
                            return <Grid item sm={12} md={4} key={index}><MessageCard {...leader}></MessageCard></Grid>
                        })}

                    </Grid>
                </Container>

            </Box>
        </>
    )
}

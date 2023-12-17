'use client'
import React from "react";
import { BackgroundImageBox } from '@/components/BackgroundImageBox';
import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import {
    useTheme
} from '@mui/material/styles';
import team from "@/public/team.jpg"
import { Leaderships } from '@/data/leadership';
import { MessageCard } from '@/components/cards/MessageCard';
import { teachers } from '@/data/teachers';
import { TeacherCard } from '@/components/cards/TeacherCard';

export default function Page() {

    const theme = useTheme();

    const [hydrated, setHydrated] = React.useState(false);
    React.useEffect(() => {
        setHydrated(true);
    }, []);
    if (!hydrated) {
        // Returns null on first render, so the client and server match
        return null;
    }

    return (
        <>
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                sx={{ height: '40vh' }}>
                <BackgroundImageBox imageUrl={team.src}>
                    <Box sx={{ maxWidth: 'sm' }}>
                        <Typography gutterBottom variant="h3" fontWeight="bold" color={theme.palette.common.white}>
                            Meet our team
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
                sx={{ background: theme.palette.grey[200] }}

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
                                <Typography variant='h3' fontWeight='bold' textAlign={'center'} color={theme.palette.grey[800]} >
                                    Management
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }} pb={4}>
                                <Typography textAlign={'center'} maxWidth={"md"} >
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
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                sx={{ background: theme.palette.grey[200] }}

            >
                <Container>
                    <Divider />
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
                                <Typography variant='h3' fontWeight='bold' textAlign={'center'} color={theme.palette.grey[800]} >
                                    Teachers
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }} pb={4}>
                                <Typography textAlign={'center'} maxWidth={"md"} >
                                    Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius quam. Nullam bibendum interdum dui, ac tempor lorem convallis ut
                                </Typography>
                            </Box>
                        </Grid>

                        {teachers.map((teacher, index) => {
                            return <Grid item sm={12} md={4} key={index}><TeacherCard {...teacher}></TeacherCard></Grid>
                        })}

                    </Grid>
                </Container>

            </Box>
        </>
    )
}

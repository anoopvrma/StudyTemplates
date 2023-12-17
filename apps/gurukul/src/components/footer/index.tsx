'use client';
import { Box, Container, Divider, Grid, IconButton, Link, Paper, Stack, Typography, styled } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { basicInfo } from '@/data/basicInfo';
import { Routes } from '@/data/routes';
import { socialMediaLinks } from '@/data/socialMedia';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ContactDetails from '../ContactDetails';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Footer() {

    const theme = useTheme();

    return (
        <Box sx={{ background: theme.palette.background.paper, color: theme.palette.grey[600], pt: 4, pb: 4 }}>
            <Container maxWidth={"lg"}>
                <Grid container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="stretch"
                    spacing={2} p={2}>
                    <Grid item xs={12} md={4}>
                        <Box>
                            <Typography variant='h6' sx={{ color: theme.palette.grey[800], my: 2 }}>{basicInfo.name}</Typography>
                            <Typography variant='body2'>{basicInfo.address}</Typography>
                            <Stack
                                direction="row"
                                justifyContent="left"
                                alignItems="center"
                                gap={4}
                                my={4}
                            >
                                {
                                    socialMediaLinks.map((item, index) =>
                                        <IconButton color="secondary" aria-label={item.name} sx={{ p: 0 }} key={index}>
                                            <item.icon />
                                        </IconButton>)
                                }

                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box>
                            <Typography variant='h6' sx={{ color: theme.palette.grey[800], my: 2 }}>Useful Links</Typography>
                            {
                                Routes.map((route, index) =>
                                    <Link key={index} href={route.route} sx={{ display: 'block', my: 1, textDecoration: 'none' }} color={'inherit'}>{route.name}</Link>
                                )
                            }
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ContactDetails />
                    </Grid>

                    <Grid item xs={12}>
                        <Divider />
                        <Box sx={{ display: 'flex', justifyContent: 'center' }} mt={4}>
                            <Stack direction="row" alignItems="center" gap={0.25}>
                                <Typography variant="caption" display={"inline-block"} textAlign={'center'}>Copyright © 2022 {basicInfo.name}  | This template is made with
                                    <FavoriteBorderIcon sx={{ fontSize: 12, mx: 0.25 }} display={"inline-block"} />
                                    by <Link href={'https://www.StudyMinutes.com'} target="_blank" color={'secondary'}>StudyMinutes</Link></Typography>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
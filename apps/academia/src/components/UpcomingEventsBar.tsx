import * as React from 'react';
import { Box, Grid, Stack, Typography } from "@mui/material";

import theme from '@/theme/theme';
import { Events } from '@/data/events'

function FormattedDate({ date }: { date: string }) {
    const dateObj = new Date(date);
    const monthNamesShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return (
        <Box sx={{
            background: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            p: 1
        }}
            alignItems="center"
            justifyContent="center">
            <Typography variant='h5' textAlign={'center'} fontWeight={'bold'}>{dateObj.getDate()}</Typography>
            <Typography variant='body2' textAlign={'center'} fontWeight={'bold'}>{monthNamesShort[dateObj.getMonth()]}</Typography>
        </Box>
    )
}

function UpcomingEvents() {
    return (
        <>
            <Typography variant='h4'>
                Upcoming Events
            </Typography>
            <Box pt={6}>
                <Stack spacing={2}>
                    {Events.map((event, index) => {
                        return (
                            <Grid
                                container
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="stretch"
                                key={index}
                            >
                                <Grid item width={'80px'}>
                                    <FormattedDate date={event.date} />
                                </Grid>
                                <Grid item xs ml={2}>
                                    <Typography variant='body1' fontWeight={'500'} color={theme.palette.text.primary}>{event.name}</Typography>
                                    <Typography variant='body2' color={theme.palette.text.secondary} >Location: {event.location}</Typography>
                                </Grid>
                            </Grid>
                        )
                    })}
                </Stack>

            </Box>
        </>
    );
}

export default UpcomingEvents;
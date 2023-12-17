import * as React from 'react';
import { Box, Grid, Stack, Typography } from "@mui/material";

import theme from '@/theme/theme';
import { Events } from '@/data/events'

function FormattedDate({ date }: { date: string }) {
    const dateObj = new Date(date);
    const monthNamesShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return (
        <Box sx={{
            color: theme.palette.secondary.main,
        }}>
            <Typography variant='body2' fontWeight={'500'} >{monthNamesShort[dateObj.getMonth()]} {dateObj.getDate()}, {dateObj.getFullYear()}</Typography>
        </Box>
    )
}

function LatestNews() {
    return (
        <>
            <Typography variant='h4' color={theme.palette.grey[800]} >
                Latest New
            </Typography >
            <Box pt={4}>
                <Stack spacing={3}>
                    {Events.map((event, index) => {
                        return (
                            <Box key={index}>
                                <FormattedDate date={event.date} />
                                <Typography variant='body1' fontWeight={'500'} color={theme.palette.grey[800]} >{event.name}</Typography>
                                <Typography variant='body2' color={theme.palette.grey[600]}>Location: {event.location}</Typography>
                            </Box>
                        )
                    })}
                </Stack >

            </Box >
        </>
    );
}

export default LatestNews;
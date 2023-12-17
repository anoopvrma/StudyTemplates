import * as React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';

import theme from '@/theme/theme';

function generate(element: React.ReactElement) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

function Mission() {
    const [secondary, setSecondary] = React.useState(false);

    return (
        <Box>
            <Typography variant='h4' color={theme.palette.grey[800]} >
                Our Mission
            </Typography>
            <Box pt={6}>
                Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius quam. Nullam bibendum interdum dui, ac tempor
            </Box>
            <List dense={false} sx={{ listStyleType: 'disc' }}>
                {generate(
                    <ListItem disableGutters divider>
                        <ListItemIcon>
                            <CircleIcon fontSize='small' />
                        </ListItemIcon>
                        <ListItemText
                            primary="Suspendisse tincidunt magna eget massa hendrerit efficitur."
                            secondary={secondary ? 'Secondary text' : null}
                        />
                    </ListItem>,
                )}
            </List>
        </Box>

    );
}

export default Mission;
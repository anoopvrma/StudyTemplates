import * as React from 'react';
import { Box, Typography } from "@mui/material";

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import LoginIcon from '@mui/icons-material/Login';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import theme from '@/theme/theme';

function Benefits() {

    const [expanded, setExpanded] = React.useState<string | false>('panel1');
    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    const backgroundColor = theme.palette.grey.A100;
    const summaryColor = theme.palette.grey[800];
    const iconColor = theme.palette.secondary.light;
    const detailsBackgroundColor = theme.palette.background.default;
    const detailsColor = theme.palette.grey[800];

    return (
        <>
            <Typography variant='h4' color={theme.palette.grey[800]} >
                Why Choose Us?
            </Typography>
            <Box pt={6}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} disableGutters sx={{ background: backgroundColor, my: 1 }} elevation={0}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: summaryColor }} />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"

                    >
                        <Box pr={2}><LoginIcon sx={{ color: iconColor }} /></Box>
                        <Typography sx={{ color: summaryColor, flexShrink: 0 }} fontWeight={"bold"}>
                            Best Education
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ background: detailsBackgroundColor }}>
                        <Typography color={detailsColor}>
                            Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} disableGutters sx={{ background: backgroundColor, my: 1 }} elevation={0} >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: summaryColor }} />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Box pr={2}><TrendingUpIcon sx={{ color: iconColor }} /></Box>
                        <Typography sx={{ color: summaryColor }} fontWeight={"bold"}>
                            Track learning goals with our StudySmart integration
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ background: detailsBackgroundColor }}>
                        <Typography color={detailsColor}>
                            Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} disableGutters sx={{ background: backgroundColor, my: 1 }} elevation={0}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: summaryColor }} />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Box pr={2}><SmsOutlinedIcon sx={{ color: iconColor }} /></Box>
                        <Typography sx={{ color: summaryColor, flexShrink: 0 }} fontWeight={"bold"}>
                            Never miss anything
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ background: detailsBackgroundColor }}>
                        <Typography color={detailsColor}>
                            Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} disableGutters sx={{ background: backgroundColor, my: 1 }} elevation={0}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: summaryColor }} />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Box pr={2}><GppGoodOutlinedIcon sx={{ color: iconColor }} /></Box>
                        <Typography sx={{ color: summaryColor }} fontWeight={"bold"}>Sports activities for healthy development</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ background: detailsBackgroundColor }}>
                        <Typography color={detailsColor}>
                            Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </>

    );
}

export default Benefits;
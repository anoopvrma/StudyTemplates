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

function Affiliations() {

    const [expanded, setExpanded] = React.useState<string | false>('panel1');
    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    const backgroundColor = theme.palette.grey[900];
    const summaryColor = theme.palette.text.primary;
    const detailsBackgroundColor = theme.palette.background.default;
    const detailsColor = theme.palette.text.disabled;

    return (
        <Box >
            <Typography variant='h4' >
                Our Affiliations
            </Typography>
            <Box pt={6}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} disableGutters sx={{ background: backgroundColor, my: 1 }} elevation={0}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: summaryColor }} />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"

                    >
                        <Typography sx={{ color: summaryColor, flexShrink: 0 }} fontWeight={"bold"}>
                            Central Bxxrd of Education
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
                        <Typography sx={{ color: summaryColor }} fontWeight={"bold"}>
                            Education Department
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
                        <Typography sx={{ color: summaryColor, flexShrink: 0 }} fontWeight={"bold"}>
                            National Sports Education
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
                        <Typography sx={{ color: summaryColor }} fontWeight={"bold"}>
                            National computer education
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ background: detailsBackgroundColor }}>
                        <Typography color={detailsColor}>
                            Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Box>

    );
}

export default Affiliations;
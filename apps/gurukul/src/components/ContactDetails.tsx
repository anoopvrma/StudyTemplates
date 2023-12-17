import { basicInfo } from "@/data/basicInfo";
import theme from "@/theme/theme";
import { Box, Typography } from "@mui/material";

function ContactDetails() {
    return (
        <>
            <Box>
                <Typography variant='h6' sx={{ color: theme.palette.grey[800], my: 2 }}>Contact Us</Typography>
                <Typography variant='body2' color='secondary'>Address</Typography>
                <Typography variant='body2' mb={2}>{basicInfo.address}</Typography>
                <Typography variant='body2' color='secondary'>Phone</Typography>
                <Typography variant='body2' mb={2}>{basicInfo.contact}</Typography>
                <Typography variant='body2' color='secondary'>Email</Typography>
                <Typography variant='body2' mb={2}>{basicInfo.email}</Typography>
            </Box>
        </>
    );
}

export default ContactDetails;
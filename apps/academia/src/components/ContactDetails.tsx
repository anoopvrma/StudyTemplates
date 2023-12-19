import { basicInfo } from "@/data/basicInfo";
import theme from "@/theme/theme";
import { Box, Typography } from "@mui/material";

function ContactDetails() {
    return (
        <>
            <Box>
                <Typography variant='h6' sx={{ color: theme.palette.text.primary, my: 2 }}>Contact Us</Typography>
                <Typography variant='body2' color='primary'>Address</Typography>
                <Typography variant='body2' sx={{ color: theme.palette.text.secondary, my: 2 }} mb={2}>{basicInfo.address}</Typography>
                <Typography variant='body2' color='primary'>Phone</Typography>
                <Typography variant='body2' sx={{ color: theme.palette.text.secondary, my: 2 }} mb={2}>{basicInfo.contact}</Typography>
                <Typography variant='body2' color='primary'>Email</Typography>
                <Typography variant='body2' sx={{ color: theme.palette.text.secondary, my: 2 }} mb={2}>{basicInfo.email}</Typography>
            </Box>
        </>
    );
}

export default ContactDetails;
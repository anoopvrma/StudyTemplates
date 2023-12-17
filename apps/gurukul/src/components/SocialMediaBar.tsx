import { socialMediaLinks } from "@/data/socialMedia";
import theme from "@/theme/theme";
import { Container, Stack, Theme } from "@mui/material";
import Button from '@mui/material/Button';

export default function SocialMediaBar() {
    return (
        <Container maxWidth="lg">
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                justifyContent="center"
                alignItems="center"
                spacing={4}
            >
                {
                    socialMediaLinks.map((item, index) =>
                        <Button
                            variant="text"
                            target="_blank"
                            aria-label={item.name}
                            href={item.link}
                            startIcon={<item.icon />}
                            size="large"
                            key={index}
                            sx={{ color: theme.palette.secondary.contrastText }}
                        >
                            {item.name}
                        </Button>)
                }

            </Stack>
        </Container>
    );
}

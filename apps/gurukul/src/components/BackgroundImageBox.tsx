import theme from "@/theme/theme";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

export function BackgroundImageBox({ imageUrl, children }: { imageUrl: string, children: React.ReactNode }) {
    return (
        <>
            <Box className="BackgroundImageBox" sx={{ position: 'relative', width: '100%', height: '100%' }}>
                <Box sx={{
                    position: 'absolute', top: 0, right: 0, height: '100%', width: '100%',

                }}>
                    <Image src={imageUrl} alt="image" fill style={{ objectFit: "cover" }} priority={false}>
                    </Image>
                </Box>
                <Box sx={{
                    position: 'absolute', top: 0, right: 0, height: '100%', width: '100%', zIndex: 10,
                    backgroundImage: theme.palette.gradient
                }}>
                    <Box
                        display='flex'
                        justifyContent='center'
                        alignItems='center' sx={{ height: '100%' }}>
                        <Container>
                            {children}
                        </Container>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
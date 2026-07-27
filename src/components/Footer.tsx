import { Box, Container, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                // mt: "auto",
                py: 2,
                bgcolor: "background.paper",
                borderTop: 1,
                borderColor: "divider",
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                >
                    {new Date().getFullYear()} Campaign Manager
                </Typography>
            </Container>
        </Box>
    );
}
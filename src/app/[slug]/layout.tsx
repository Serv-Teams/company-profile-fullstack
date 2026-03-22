import { Container } from "@mui/material"

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <Container
        maxWidth="lg"
        component="main"
        sx={{ my: 10 }}
    >{children}
    </Container>
}
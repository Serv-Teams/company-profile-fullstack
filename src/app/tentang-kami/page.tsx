import { Container } from "@mui/material";

export const metadata = {
    title: "Tentang Kami - Serv Company Profile",
    description: "Informasi tentang Serv Company Profile",
};

export default function TentangKamiPage() {
    return (
        <Container
            maxWidth="lg"
            component="main"
            sx={{ my: 10 }}
        >
            <h1 className="text-3xl font-bold mb-6">Tentang Kami</h1>

            <p className="mb-4">
                Selamat datang di <strong>Serv Company Profile</strong>, platform yang
                menyediakan informasi lengkap mengenai berbagai perusahaan, profil bisnis,
                serta layanan yang mereka tawarkan.
            </p>

            <p className="mb-4">
                Kami bertujuan untuk membantu pengguna menemukan informasi yang akurat,
                terpercaya, dan mudah diakses mengenai perusahaan di berbagai sektor.
            </p>

            <p className="mb-4">
                Dengan perkembangan teknologi digital, kami hadir untuk menjadi jembatan
                antara perusahaan dan masyarakat dalam mendapatkan informasi yang relevan
                dan berkualitas.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Visi</h2>
            <p className="mb-4">
                Menjadi platform profil perusahaan terdepan yang memberikan informasi
                terpercaya dan mudah diakses oleh semua orang.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Misi</h2>
            <ul className="list-disc ml-6 space-y-2">
                <li>Menyediakan informasi perusahaan yang akurat</li>
                <li>Meningkatkan visibilitas bisnis secara digital</li>
                <li>Membantu pengguna menemukan layanan yang sesuai</li>
            </ul>
        </Container>
    );
}
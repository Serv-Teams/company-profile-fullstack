import { Container } from "@mui/material";

export const metadata = {
    title: "Kebijakan Privasi - Serv Company Profile",
    description: "Kebijakan privasi Serv Company Profile",
};

export default function KebijakanPrivasiPage() {
    return (
        <Container
            maxWidth="lg"
            component="main"
            sx={{ my: 10 }}
        >
            <h1 className="text-3xl font-bold mb-6">Kebijakan Privasi</h1>

            <p className="mb-4">
                Privasi pengunjung sangat penting bagi kami. Dokumen ini menjelaskan jenis
                informasi yang dikumpulkan dan bagaimana kami menggunakannya.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
                Informasi yang Kami Kumpulkan
            </h2>
            <ul className="list-disc ml-6 space-y-2">
                <li>Informasi yang diberikan secara langsung oleh pengguna</li>
                <li>Data penggunaan seperti halaman yang dikunjungi</li>
                <li>Alamat IP dan informasi perangkat</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">
                Penggunaan Informasi
            </h2>
            <ul className="list-disc ml-6 space-y-2">
                <li>Meningkatkan kualitas layanan</li>
                <li>Menyediakan pengalaman pengguna yang lebih baik</li>
                <li>Komunikasi dengan pengguna</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">
                Perlindungan Data
            </h2>
            <p className="mb-4">
                Kami berkomitmen untuk menjaga keamanan informasi pengguna dengan
                menggunakan langkah-langkah teknis dan organisasi yang sesuai.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
                Persetujuan
            </h2>
            <p>
                Dengan menggunakan situs kami, Anda menyetujui kebijakan privasi ini.
            </p>
        </Container>
    );
}
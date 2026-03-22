
import { Container } from "@mui/material";

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Serv - Company Profile | Kontak Kami',
    description: 'Informasi kontak untuk Serv Company Profile.',
}

export default function KontakPage() {

    return (
        <Container
            maxWidth="lg"
            component="main"
            sx={{ my: 10 }}
        >
            <h1 className="text-3xl font-bold mb-6">Kontak Kami</h1>

            <p className="mb-4">
                Jika Anda memiliki pertanyaan, silakan hubungi kami melalui email berikut:
            </p>

            <p className="mb-6 font-semibold">
                Email: serv.teams@gmail.com
            </p>

            {/* <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="nama"
                    placeholder="Nama"
                    value={form.nama}
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                    required
                />

                <textarea
                    name="pesan"
                    placeholder="Pesan"
                    value={form.pesan}
                    onChange={handleChange}
                    className="w-full border p-3 rounded h-32"
                    required
                />

                <button
                    type="submit"
                    className="bg-black text-white px-6 py-3 rounded hover:opacity-80"
                >
                    Kirim Pesan
                </button>
            </form> */}
        </Container>
    );
}
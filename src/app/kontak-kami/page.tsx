"use client";

import { Container } from "@mui/material";
import { useState } from "react";

export const metadata = {
    title: "Kontak Kami - Serv Company Profile",
    description: "Hubungi Serv Company Profile",
};

export default function KontakPage() {
    const [form, setForm] = useState({
        nama: "",
        email: "",
        pesan: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        alert("Pesan berhasil dikirim (dummy).");
    };

    return (
        <Container
            maxWidth="lg"
            component="main"
            sx={{ my: 10 }}
        >
            <h1 className="text-3xl font-bold mb-6">Kontak Kami</h1>

            <p className="mb-4">
                Jika Anda memiliki pertanyaan, silakan hubungi kami melalui form di bawah
                atau email berikut:
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
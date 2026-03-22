import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MaterialUILink from '@mui/material/Link';
import NextLink from '@/components/Link';

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Serv | Company Profile',
  description: 'Selamat datang di Serv, platform yang menyediakan informasi lengkap tentang perusahaan-perusahaan di Indonesia. Temukan profil perusahaan, kategori industri, dan berbagai informasi penting lainnya untuk membantu Anda dalam mencari mitra bisnis atau peluang kerja. Jelajahi berbagai kategori perusahaan dan temukan informasi yang Anda butuhkan dengan mudah di Serv.',
}


export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          {/* Material UI - Next.js example in TypeScript */}
          Selamat datang di halaman utama!
        </Typography>
        {/* <MaterialUILink component={NextLink} href="/about" color="secondary">
          Go to the about page
        </MaterialUILink> */}
        <Typography>
          Silahkan kunjungi halaman kategori untuk melihat daftar perusahaan berdasarkan kategori
        </Typography>
      </Box>
    </Container>
  );
}
'use client';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import HouseIcon from '@mui/icons-material/House';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import KitchenIcon from '@mui/icons-material/Kitchen';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import Link from 'next/link';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

export default function Categories({ categories }: { categories: any[] }) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {categories.map((category) => (
                    <Grid key={category._id} size={4}>
                        <Link href={`/kategori/${category.slug}`}>
                            <Item>{category.name}</Item>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

'use client';

import React, { useState } from "react";
import {
    Box,
    Grid,
    Typography,
    Rating,
    Button,
    IconButton,
    Tabs,
    Tab,
    Card,
    CardMedia,
    Stack,
    Avatar,
    TextField,
    Chip
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import { Instagram, Public } from "@mui/icons-material";
import { blue, pink } from "@mui/material/colors";
import CloudinaryImage from "./cloudinary";

// const images = [
//     "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
//     "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
//     "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
//     "https://images.unsplash.com/photo-1584735175315-9d5df23be620",
// ];

export default function ProductDetails({ data }: { data: any; }) {
    const [image, setImage] = useState(data.product_images[0]);
    const [tab, setTab] = useState(0);
    const [qty, setQty] = useState(1);

    return (
        <Box sx={{
            maxWidth: 1200,
            margin: "auto",
            px: { xs: 2, md: 4 },
            py: { xs: 3, md: 5 }
        }}>

            <Grid container spacing={5}>

                {/* PRODUCT IMAGES */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box
                        sx={{
                            width: "100%",
                            height: { xs: 300, md: 500 },
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#f5f5f5",
                            borderRadius: 2,
                            overflow: "hidden"
                        }}
                    >
                        <CloudinaryImage src={image} width="800" height="800" />
                    </Box>

                    {/* THUMBNAILS */}
                    <Stack
                        direction="row"
                        spacing={1}
                        mt={2}
                        sx={{
                            overflowX: "auto",
                            pb: 1
                        }}
                    >
                        {data.product_images.map((img: any) => (
                            <Box
                                key={img}
                                onClick={() => setImage(img)}
                                sx={{
                                    minWidth: { xs: 50, md: 60 },
                                    width: { xs: 50, md: 60 },
                                    height: { xs: 50, md: 60 },
                                    cursor: "pointer",
                                    borderRadius: 2,
                                    overflow: "hidden",
                                    border: image === img ? "2px solid #1976d2" : "1px solid #ddd",
                                    flexShrink: 0,
                                    '&:hover': {
                                        border: "2px solid #1976d2",
                                        transform: "scale(1.05)"
                                    },
                                    transition: "0.2s"
                                }}
                            >
                                <CloudinaryImage src={img} width="100" height="100" />
                            </Box>
                        ))}
                    </Stack>
                </Grid>


                {/* PRODUCT INFO */}
                <Grid size={{ xs: 12, md: 6 }}>

                    <Chip label={data.categoryId} color="info" size="small" />

                    <Typography
                        variant="h4"
                        mt={2}
                        sx={{
                            fontSize: { xs: "1.5rem", md: "2rem" }
                        }}
                    >
                        {data.name}
                    </Typography>

                    <Typography
                        variant="h6"
                        mt={2}
                        sx={{
                            fontSize: { xs: "1rem", md: "1.25rem" }
                        }}
                    >
                        {data.city}
                    </Typography>

                    <Typography
                        variant="body2"
                        mt={2}
                        color="text.secondary"
                    >
                        {data.description}
                    </Typography>

                    {/* TOKO ONLINE */}
                    <Box mt={3}>
                        <Typography variant="subtitle2">
                            Toko Online
                        </Typography>

                        <Stack direction="row" spacing={2} mt={1}>
                            {data.online_shops.tokopedia && (
                                <Link href={data.online_shops.tokopedia} target="_blank">
                                    <Avatar src="/tokopedia.png" />
                                </Link>
                            )}

                            {data.online_shops.shopee && (
                                <Link href={data.online_shops.shopee} target="_blank">
                                    <Avatar src="/shopee.png" />
                                </Link>
                            )}
                        </Stack>
                    </Box>

                    {/* SOSIAL MEDIA */}
                    <Box mt={3}>
                        <Typography variant="subtitle2">
                            Media Sosial
                        </Typography>

                        <Stack direction="row" spacing={2} mt={1}>
                            {data.social_medias.instagram && (
                                <Link href={data.social_medias.instagram} target="_blank">
                                    <Avatar sx={{ bgcolor: pink[500] }}>
                                        <Instagram />
                                    </Avatar>
                                </Link>
                            )}

                            {data.social_medias.tiktok && (
                                <Link href={data.social_medias.tiktok} target="_blank">
                                    <Avatar sx={{ bgcolor: "white" }} src="/tiktok.png" />
                                </Link>
                            )}

                            {data.social_medias.website && (
                                <Link href={data.social_medias.website} target="_blank">
                                    <Avatar>
                                        <Public />
                                    </Avatar>
                                </Link>
                            )}
                        </Stack>
                    </Box>

                </Grid>
            </Grid>
        </Box>
    );
}
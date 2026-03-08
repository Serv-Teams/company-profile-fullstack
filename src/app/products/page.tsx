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

const images = [
    "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
    "https://images.unsplash.com/photo-1584735175315-9d5df23be620"
];

export default function ProductDetails() {
    const [image, setImage] = useState(images[0]);
    const [tab, setTab] = useState(0);
    const [qty, setQty] = useState(1);

    return (
        <Box sx={{ maxWidth: 1200, margin: "auto", p: 4 }}>

            <Grid container spacing={5}>

                {/* PRODUCT IMAGES */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="450"
                            image={image}
                        />
                    </Card>

                    <Stack direction="row" spacing={2} mt={2}>
                        {images.map((img) => (
                            <Avatar
                                key={img}
                                src={img}
                                variant="rounded"
                                sx={{ width: 70, height: 70, cursor: "pointer" }}
                                onClick={() => setImage(img)}
                            />
                        ))}
                    </Stack>
                </Grid>

                {/* PRODUCT INFO */}
                <Grid size={{ xs: 12, md: 6 }}>

                    <Chip label="NEW" color="info" size="small" />

                    <Typography variant="h4" mt={2}>
                        Classic Leather Loafers
                    </Typography>

                    <Stack direction="row" spacing={1} alignItems="center" mt={1}>
                        <Rating value={4} readOnly />
                        <Typography variant="body2">(9.12k reviews)</Typography>
                    </Stack>

                    <Typography variant="h5" mt={2}>
                        $97.14
                    </Typography>

                    <Typography variant="body2" mt={2} color="text.secondary">
                        Featuring the original ripple design inspired by Japanese bullet trains,
                        the Nike Air Max 97 lets you push your style full-speed ahead.
                    </Typography>

                    {/* COLOR */}
                    <Box mt={3}>
                        <Typography variant="subtitle2">Color</Typography>

                        <Stack direction="row" spacing={2} mt={1}>
                            <Avatar sx={{ bgcolor: "blue", width: 30, height: 30 }} />
                            <Avatar sx={{ bgcolor: "pink", width: 30, height: 30 }} />
                        </Stack>
                    </Box>

                    {/* SIZE */}
                    <Box mt={3}>
                        <Typography variant="subtitle2">Size</Typography>

                        <TextField
                            select
                            SelectProps={{ native: true }}
                            size="small"
                            sx={{ width: 120, mt: 1 }}
                        >
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </TextField>
                    </Box>

                    {/* QUANTITY */}
                    <Box mt={3}>
                        <Typography variant="subtitle2">Quantity</Typography>

                        <Stack direction="row" alignItems="center" spacing={1} mt={1}>
                            <IconButton onClick={() => setQty(qty - 1)}>
                                <RemoveIcon />
                            </IconButton>

                            <Typography>{qty}</Typography>

                            <IconButton onClick={() => setQty(qty + 1)}>
                                <AddIcon />
                            </IconButton>
                        </Stack>
                    </Box>

                    {/* BUTTONS */}
                    <Stack direction="row" spacing={2} mt={4}>
                        <Button
                            variant="contained"
                            startIcon={<ShoppingCartIcon />}
                            color="warning"
                        >
                            Add to cart
                        </Button>

                        <Button variant="contained" color="primary">
                            Buy now
                        </Button>
                    </Stack>

                </Grid>
            </Grid>

            {/* FEATURES */}
            <Grid container spacing={3} mt={6}>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Typography fontWeight="bold">100% original</Typography>
                    <Typography variant="body2">
                        Chocolate bar candy canes ice cream toffee cookie halvah.
                    </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <Typography fontWeight="bold">10 days replacement</Typography>
                    <Typography variant="body2">
                        Marshmallow biscuit donut dragée fruitcake wafer.
                    </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <Typography fontWeight="bold">Year warranty</Typography>
                    <Typography variant="body2">
                        Cotton candy gingerbread cake I love sugar sweet.
                    </Typography>
                </Grid>
            </Grid>

            {/* TABS */}
            <Box mt={6}>
                <Tabs value={tab} onChange={(e, v) => setTab(v)}>
                    <Tab label="Description" />
                    <Tab label="Reviews (8)" />
                </Tabs>

                {tab === 0 && (
                    <Box mt={3}>
                        <Typography variant="h6">Specifications</Typography>

                        <Box mt={2}>
                            <Typography>Category: Mobile</Typography>
                            <Typography>Manufacturer: Apple</Typography>
                            <Typography>Warranty: 12 Months</Typography>
                            <Typography>Ships from: United States</Typography>
                        </Box>

                        <Box mt={3}>
                            <Typography variant="h6">Product details</Typography>
                            <ul>
                                <li>The foam sockliner feels soft and comfortable</li>
                                <li>Pull tab</li>
                                <li>Rubber outsole adds traction</li>
                            </ul>
                        </Box>
                    </Box>
                )}

                {tab === 1 && (
                    <Box mt={3}>
                        <Typography>No reviews yet.</Typography>
                    </Box>
                )}
            </Box>

        </Box>
    );
}
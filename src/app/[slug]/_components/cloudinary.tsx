'use client';

import { CldImage } from 'next-cloudinary';

export default function CloudinaryImage({ src, width, height }: { src: string; width: any; height: any }) {
    return (
        <CldImage
            width={width}
            height={height}
            src={src}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={src}
            style={{
                width: "100%",
                height: "100%",
                objectFit: "contain" // 🔥 THIS FIXES CROPPING
            }}
        />
    );
}


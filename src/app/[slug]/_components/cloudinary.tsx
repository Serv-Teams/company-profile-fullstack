'use client';

import { CldImage } from 'next-cloudinary';

export default function CloudinaryImage({ src, width, height }: { src: string; width: any; height: any }) {
    return (
        <CldImage
            width={width}
            height={height}
            src={src}
            // sizes="100vw"
            alt={src}
        />
    );
}


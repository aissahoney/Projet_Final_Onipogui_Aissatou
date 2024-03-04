/** @type {import('next').NextConfig} */
const nextConfig = {
    // Suite a une erreur d'image d'api: je config ici (à modifier en fct de l'erreur)
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.gr-assets.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "images",
                port: "",
            },
        ],
    },

};
export default nextConfig;

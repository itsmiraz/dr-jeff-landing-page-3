/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config: { module: { rules: { test: RegExp; use: string[] | { loader: string; options: { publicPath: string; outputPath: string; name: string; esModule: boolean; }; }; }[]; }; }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    // Rule for video files
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|ogv|mp3|wav|flac|aac)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/videos",
          outputPath: "static/videos",
          name: "[name].[ext]",
          esModule: false,
        },
      },
    });

    return config;
  },
}

module.exports = nextConfig
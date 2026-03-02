import { createMDX } from "fumadocs-mdx/next";
import path from "path";

const config = {
  reactStrictMode: true,
  reactCompiler: true,
  webpack: (config: any) => {
    config.resolve.alias["tailwindcss"] = path.resolve(
      __dirname,
      "node_modules/tailwindcss"
    );
    return config;
  },
};

const withMDX = createMDX({
  // customise the config file path if needed
  // configPath: "source.config.ts",
});

export default withMDX(config);

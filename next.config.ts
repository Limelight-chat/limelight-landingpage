import { createMDX } from "fumadocs-mdx/next";

const config = {
  reactStrictMode: true,
  reactCompiler: true,
};

const withMDX = createMDX({
  // customise the config file path if needed
  // configPath: "source.config.ts",
});

export default withMDX(config);

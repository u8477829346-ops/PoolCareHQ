/** @type {import('next').NextConfig} */

// If you deploy to https://<usuario>.github.io/<repo>/ (proyecto normal),
// GitHub Actions inyecta el nombre del repo automáticamente abajo.
// Si tu repo se llama exactamente "<usuario>.github.io" (sitio de usuario),
// NO necesitas basePath y esto se deja vacío automáticamente.
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const isUserSite = repo.endsWith('.github.io')
const basePath = repo && !isUserSite ? `/${repo}` : ''

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig

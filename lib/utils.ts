import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Prefixes a root-relative path (e.g. "/images/foo.png") with the site's
// basePath so images and internal <img> src values resolve correctly when
// the site is deployed under https://usuario.github.io/repo/.
export function withBasePath(path: string) {
  if (!path.startsWith('/')) return path
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  return `${base}${path}`
}

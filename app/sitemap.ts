import { communities } from 'app/i18n/content'

export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export default async function sitemap() {
  let communityRoutes = communities.map((c) => ({
    url: `${baseUrl}/communities/${c.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  let routes = ['', '/articles', '/communities'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...communityRoutes]
}

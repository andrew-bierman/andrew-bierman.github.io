import { formatDate } from 'app/blog/utils'

export type ProjectMetadata = {
  title: string
  publishedAt: string
  summary: string
  techStack?: string[]
  link?: string
}

export type Project = {
  metadata: ProjectMetadata
  slug: string
}

export function getProjectPosts(): Project[] {
  const posts = ((context: any) => {
    return context.keys().map((key: string) => {
      const post = key.slice(2)
      return {
        slug: post.replace('/page.tsx', ''),
      }
    })
  })(require.context('./posts', false, /\.mdx$/))

  return posts.map((post: any) => ({
    metadata: (require('./posts/' + post.slug + '.mdx') as any).metadata,
    slug: post.slug,
  }))
}

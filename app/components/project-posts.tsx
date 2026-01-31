import Link from 'next/link'
import { formatDate } from 'app/blog/utils'
import { getProjectPosts } from 'app/projects/utils'

export function ProjectPosts() {
  const allProjects = getProjectPosts()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {allProjects
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((project) => (
          <Link
            key={project.slug}
            className="flex flex-col space-y-2 p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
            href={`/projects/${project.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900 dark:text-neutral-100 font-semibold tracking-tight text-lg">
                {project.metadata.title}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {project.metadata.summary}
              </p>
              {project.metadata.techStack && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {project.metadata.techStack.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        ))}
    </div>
  )
}

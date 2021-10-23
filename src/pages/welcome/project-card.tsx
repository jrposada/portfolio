import { Avatar, Card, Tag } from 'antd'
import ExternalNavLink from 'components/externalNavLink'

interface ProjectCardProps {
  to: string
  title: string
  description: string
  tags: string[]
  image: string
  thumbnail: string
}
function ProjectCard({
  to,
  title,
  description,
  tags,
  image,
  thumbnail,
}: ProjectCardProps) {
  return (
    <ExternalNavLink to={to}>
      <Card cover={<img alt="example" src={image} />} hoverable>
        <Card.Meta
          avatar={<Avatar src={thumbnail} />}
          title={title}
          description={
            <>
              {description}
              <div>
                {tags.map((t) => (
                  <Tag>{t}</Tag>
                ))}
              </div>
            </>
          }
        />
      </Card>
    </ExternalNavLink>
  )
}

export default ProjectCard
export type { ProjectCardProps }

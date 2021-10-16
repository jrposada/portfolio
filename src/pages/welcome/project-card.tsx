import { Avatar, Card } from 'antd'
import ExternalNavLink from 'components/externalNavLink'

interface ProjectCardProps {
  to: string
  title: string
  description: string
  image: string
  thumbnail: string
}
function ProjectCard({
  to,
  title,
  description,
  image,
  thumbnail,
}: ProjectCardProps) {
  return (
    <ExternalNavLink to={to}>
      <Card cover={<img alt="example" src={image} />} hoverable>
        <Card.Meta
          avatar={<Avatar src={thumbnail} />}
          title={title}
          description={description}
        />
      </Card>
    </ExternalNavLink>
  )
}

export default ProjectCard

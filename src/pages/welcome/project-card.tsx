import Icon from '@iconify/react'
import { Card, Tag } from 'antd'
import ExternalNavLink from 'components/externalNavLink'
import { NavLink } from 'react-router-dom'

import './project-card.scss'

const ICON_SIZE = '2em'

interface ProjectCardProps {
  projectId: string
  title: string
  description: string
  tags: string[]
  image: string
  thumbnail: object
}
function ProjectCard({
  projectId: id,
  title,
  description,
  tags,
  image,
  thumbnail,
}: ProjectCardProps) {
  return (
    <NavLink to={`project-details/${id}`}>
      <Card cover={<img alt="example" src={image} />} hoverable>
        <Card.Meta
          avatar={
            <ExternalNavLink to={`https://github.com/jrposada/${id}`}>
              <Icon width={ICON_SIZE} height={ICON_SIZE} icon={thumbnail} />
            </ExternalNavLink>
          }
          title={title}
          description={
            <>
              {description}
              <div className="project-card__tags">
                {tags.map((t) => (
                  <Tag>{t}</Tag>
                ))}
              </div>
            </>
          }
        />
      </Card>
    </NavLink>
  )
}

export default ProjectCard
export type { ProjectCardProps }

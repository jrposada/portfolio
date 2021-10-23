import { Typography } from 'antd'
import { WithTranslation, withTranslation } from 'react-i18next'
import ProjectCard from './project-card'
import './projects.scss'

interface ProjectsProps extends WithTranslation {}
function Projects({ t }: ProjectsProps) {
  return (
    <div className="projects">
      <Typography.Title level={1} className="projects__title">
        {t('projects.title')}
      </Typography.Title>
      <div className="projects__list">
        <ProjectCard
          to="https://github.com/jrposada/data-visualizer"
          title="mmm"
          description="This is the description"
          tags={['c#']}
          image="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          thumbnail="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
        <ProjectCard
          to="https://github.com/jrposada/data-visualizer"
          title="mmm"
          tags={['c#']}
          description="This is the description"
          image="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          thumbnail="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
        <ProjectCard
          to="https://github.com/jrposada/data-visualizer"
          title="mmm"
          tags={['c#']}
          description="This is the description"
          image="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          thumbnail="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
      </div>
    </div>
  )
}

export default withTranslation()(Projects)

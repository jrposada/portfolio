import githubIcon from '@iconify/icons-mdi/github'
import { Typography } from 'antd'
import { WithTranslation, withTranslation } from 'react-i18next'

import ProjectCard, { ProjectCardProps } from './project-card'

import './projects.scss'

const PROJECT_INFOS: ProjectCardProps[] = [
  {
    projectId: 'data-visualizer',
    title: 'Data Visualizer',
    description: '',
    tags: [
      'Angular',
      'Typescript',
      'Data visualization',
      'Electron',
      'Dekstop',
      'Mac',
    ],
    image:
      'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    thumbnail: githubIcon,
  },
  {
    projectId: 'GroupActivityFinderExtensions',
    title: 'Group & Activity Finder Extensions',
    description: '',
    tags: ['Lua', 'Game', 'Mod'],
    image:
      'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    thumbnail: githubIcon,
  },
  {
    projectId: 'recipe-book',
    title: 'Recipe Book',
    description: '',
    tags: ['React', 'TypeScript', 'Web'],
    image:
      'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    thumbnail: githubIcon,
  },
  {
    projectId: 'react-jest-mock',
    title: 'React Jest Mock',
    description: '',
    tags: [
      'JavaScript',
      'TypeScript',
      'React',
      'Package',
      'Testing',
      'Jest',
      'Mock',
    ],
    image:
      'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    thumbnail: githubIcon,
  },
  {
    projectId: 'welcome-to-react',
    title: 'Welcome to React',
    description: '',
    tags: ['JavaScipt', 'TypeScript', 'React', 'Course', 'Tutorial'],
    image:
      'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    thumbnail: githubIcon,
  },
  {
    projectId: 'portfolio',
    title: 'Portfolio',
    description: '',
    tags: ['React', 'TypeScript', 'Web'],
    image:
      'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    thumbnail: githubIcon,
  },
]

interface ProjectsProps extends WithTranslation {}

function Projects({ t }: ProjectsProps) {
  return (
    <div className="projects">
      <Typography.Title level={1} className="projects__title">
        {t('projects.title')}
      </Typography.Title>
      <div className="projects__list">
        {PROJECT_INFOS.map((info) => (
          <ProjectCard key={info.projectId} {...info} />
        ))}
      </div>
    </div>
  )
}

export default withTranslation()(Projects)

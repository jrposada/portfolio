import { useMemo } from 'react'
import { useParams } from 'react-router'

interface ProjectDetailInfo {
  title: string
}

const PROJECT_DETAILS_INFOS: { [projectId: string]: ProjectDetailInfo } = {
  'data-visualizer': {
    title: 'Data Visualizer',
  },
  GroupActivityFinderExtensions: {
    title: 'Group & Activity Finder Extensions',
  },
  'recipe-book': {
    title: 'Recipe Book',
  },
  'react-jest-mock': {
    title: 'React Jest Mock',
  },
  'welcome-to-react': {
    title: 'Welcome to React',
  },
  portfolio: {
    title: 'Portfolio',
  },
}

interface ProjectDetailsParams {
  id: string
}

function ProjectDetails() {
  const { id } = useParams<ProjectDetailsParams>()

  const info = useMemo(() => PROJECT_DETAILS_INFOS[id], [id])

  return <div>{info.title}</div>
}

export default ProjectDetails

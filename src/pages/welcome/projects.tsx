import ProjectCard from './project-card'
import './projects.scss'

function Projects() {
  return (
    <div className="projects">
      <ProjectCard
        to="https://github.com/jrposada/data-visualizer"
        title="mmm"
        description="This is the description"
        image="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        thumbnail="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      />
      <ProjectCard
        to="https://github.com/jrposada/data-visualizer"
        title="mmm"
        description="This is the description"
        image="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        thumbnail="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      />
      <ProjectCard
        to="https://github.com/jrposada/data-visualizer"
        title="mmm"
        description="This is the description"
        image="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        thumbnail="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      />
    </div>
  )
}

export default Projects

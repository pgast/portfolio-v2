import { useState } from 'react'

import styles from './styles.module.css'
import projects from '../../constants/work'

import Button from '../../components/button'
import { Subtitle, Paragraph } from "../../components/text"
import HideableContent from '../../components/hideableContent'
import useWindowDimensions from '../../utils/windowDimensions'

const getProjectWidth = (isSelected, idx) => {
  if (!isSelected) return
  if (idx === 0 || idx === 5) return "490px"
  return "609px"
}

const projectClasses = (idx, selectedProjectIdx) => {
  const {
    project,
    isSelected,
    moreProjects,
    projectContent,
  } = styles

  if (selectedProjectIdx !== idx) return {
    projectStyle: project,
    projectContent,
    moreProjects: project
  }

  return {
    projectStyle: `${project} ${isSelected}`,
    moreProjects: `${project} ${isSelected} ${moreProjects}`,
    projectContent: idx !== 0 ? `${projectContent} ${isSelected}` : projectContent,
  }
}


const WorkView = () => {
  const [selectedProjectIdx, setSelectedProjectIdx] = useState(null)
  const { widthIsNotDesktop } = useWindowDimensions()

  const handleProjectSelection = idx => {
    if (widthIsNotDesktop) return

    let hasNoProjectSelected = idx === null
    let selectedProjectIsTheSameAsClicked = idx === selectedProjectIdx
    let newSelectedProjectIdx = (hasNoProjectSelected || !selectedProjectIsTheSameAsClicked) ? idx : null
    setSelectedProjectIdx(newSelectedProjectIdx)
  }

  const renderMoreProjectsSection = () => {
    const moreProjectsIdx = projects.length
    const isSelected = selectedProjectIdx === moreProjectsIdx
    const { projectContent, moreProjects } = projectClasses(moreProjectsIdx, selectedProjectIdx)

    return (
      <div
        className={moreProjects}
        style={{ width: getProjectWidth(isSelected, moreProjectsIdx)}}
        onMouseEnter={() => handleProjectSelection(moreProjectsIdx)}
        onMouseLeave={() => handleProjectSelection(moreProjectsIdx)}
      >
        <div className={projectContent}>
          <div className={styles.projectTitle}>
            <Subtitle>
              more projects
            </Subtitle>
          </div>
          {/* Desktop */}
          <HideableContent isVisible={isSelected} className={styles.hideableContent}>
            <div className={styles.buttonsContainer}>
              <Button label="Github"/>
            </div>
          </HideableContent>

          {/* Mobile */}
        </div>
      </div>
    )
  }

  return (
    <div 
      id="work"
      className={styles.container}
    >
      <div className={styles.containerGrid}>
        {projects.map((project, idx) => { 
          const { projectStyle, projectContent } = projectClasses(idx, selectedProjectIdx)
          const isSelected = selectedProjectIdx === idx

          return (      
            <div 
              key={idx}
              className={projectStyle}
              onMouseEnter={() => handleProjectSelection(idx)}
              onMouseLeave={() => handleProjectSelection(idx)}
              style={{ width: getProjectWidth(isSelected, idx) }}
            >
              <div className={projectContent}>
                <div className={styles.projectTitle}>
                  <Subtitle>
                    {project.name}
                  </Subtitle>
                </div>

                {/* Desktop */}
                <HideableContent isVisible={isSelected} className={styles.hideableContent}>
                  <Paragraph>
                    {project.info}
                  </Paragraph>
                  <div className={styles.projectStack}>
                    {project.stack.map((stack) => <Paragraph>{stack}</Paragraph>)}
                  </div>
                  <div className={styles.buttonsContainer}>
                    <Button label="Code"/>
                    <Button label="Try it"/>
                  </div>
                </HideableContent>

                {/* Mobile */}
                <HideableContent isVisible={widthIsNotDesktop}>
                  <Paragraph>
                    {project.info}
                  </Paragraph>
                  {/* <div className={styles.projectStack}>
                    {project.stack.map((stack) => <Paragraph>{stack}</Paragraph>)}
                  </div>
                  <div className={styles.buttonsContainer}>
                    <Button label="Code"/>
                    <Button label="Try it"/>
                  </div> */}
                </HideableContent>
              </div>
            </div>
          )
        })}
        {renderMoreProjectsSection()}
      </div>
    </div>
  )
}

export default WorkView

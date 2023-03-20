import React from 'react'
import { useParams } from 'react-router-dom'
import ProductDetails from '../components/ProjectDetails'
import { prevProjects } from '../utils/constant'


const ProjectMore = () => {
    const { id } = useParams()
    const displayitems = prevProjects[id]

  return (
    <ProductDetails {...displayitems}/>
  )
}

export default ProjectMore
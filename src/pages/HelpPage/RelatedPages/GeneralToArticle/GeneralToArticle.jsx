import React from 'react'
import { useParams } from 'react-router-dom'

const GeneralToArticle = () => {

    const {articleName} = useParams();

  return (
    <div>GeneralToArticle {articleName}</div>
  )
}

export default GeneralToArticle
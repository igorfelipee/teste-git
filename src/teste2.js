import React, { useState, useEffect } from 'react';  
import './App.css';
import axios from 'axios';

const App = () => {
  const [project, updateProject] = useState({})
  const [isLoading, updateIsLoading] = useState(true)
  const [error, updateError] = useState('')

  useEffect(() => {
    axios
      .get('https://api.reddit.com/r/artificial/hot')
      .then(resp => {
        updateProject(resp.data)
        updateIsLoading(false)
      })
      .catch(error => {
        updateError(error.message)
        updateIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <h1>Buscando dados do projeto...</h1>
  }
  if (error) {
    return <h1>Deu erro: {error}</h1>
  }
  return (
    <>
      <h1>Projeto: {project.name}</h1>
      <h3>Estrelas: {project.stargazers_count}</h3>
    </>
  )
}

export default App;

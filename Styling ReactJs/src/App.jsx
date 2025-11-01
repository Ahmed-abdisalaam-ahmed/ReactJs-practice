import React from 'react'
import styles from './app.module.css'
import Another from './Another'

const App = () => {
  return (
    <div className={styles.appContainer}>
      <h1>hi</h1>
      <Another/>
    </div>
  )
}

export default App
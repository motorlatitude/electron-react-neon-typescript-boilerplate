// Main Application Component
//
// Entry point
import * as React from 'react'

import styles from './../assets/css/global.module.css'
import electronLogo from './../assets/img/electron.svg'
import reactLogo from './../assets/img/react.svg'
import neonLogo from './../assets/img/neon.svg'
import typescriptLogo from './../assets/img/typescript.svg'

/**
 * Main Application Component
 */
export const App: React.FC = (): React.ReactElement => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.bg}></div>
      <div className={styles.logos}>
        <img src={electronLogo} alt="logo" />
        <img src={reactLogo} alt="logo" />
        <img src={typescriptLogo} alt="logo" /><br />
        <img src={neonLogo} alt="logo" />
      </div>
      <div className={styles.versions} id="versions">

      </div>
    </div>
  )
}

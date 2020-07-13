import * as React from 'react';
import classNames from 'classnames';

import logo from '../../logo.svg';
import styles from './Top.module.scss';

const Top: React.FC = () => {
  return (
    <div className={classNames(styles.App)}>
      <header className={classNames(styles.AppHeader)}>
        <img src={logo} className={classNames(styles.AppLogo)} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={classNames(styles.AppLink)}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}
export default Top;

import React from 'react';

import styles from './modal.module.scss';

const Modal = props => {
  return (
    <div className={styles.modal}>
      <div>
        <header>
          <span className="title">{props.title}</span>
          <a onClick={props.close}>X</a>
        </header>
        <div>{props.children}</div>
      </div>
    </div>
  );
};
export default Modal;

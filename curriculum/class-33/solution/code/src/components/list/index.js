import React from 'react';

import style from './list.module.scss';

const List = props => {
  let layout = props.layout || 'list';
  return <ul className={style[layout]}>{props.children}</ul>;
};

export default List;

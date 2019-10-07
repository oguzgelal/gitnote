import React, { FunctionComponent } from 'react';
import App from '../../App';

// Base

type BaseProps = {};

const Base: FunctionComponent<BaseProps> = (props: BaseProps) => (
  <App {...props} />
);

export default Base;

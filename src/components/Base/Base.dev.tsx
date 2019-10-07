import React, { FunctionComponent } from 'react';
import App from '../../App';
import DevTools from '../DevTools';

// Base

type BaseProps = {};

const Base: FunctionComponent<BaseProps> = (props: BaseProps) => (
  <>
    <DevTools />
    <App {...props} />
  </>
);

export default Base;

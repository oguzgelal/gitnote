import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch, ActionCreatorsMapObject } from 'redux';
import styled from 'styled-components/macro';

import { IInitialState } from '';

// ComponentName

const Wrapper = styled.div``;

type ComponentNameProps = {};
type ComponentNameState = {};

class ComponentName extends Component<ComponentNameProps, ComponentNameState> {
  constructor(props: ComponentNameProps, context: any) {
    super(props, context);

    this.state = {
    };
  }

  render() {
    return (
      <Wrapper>
        Hello world
      </Wrapper>
    );
  }
}

const mapStateToProps = (state: IInitialState, ownProps: ComponentNameProps) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
   actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ComponentName);

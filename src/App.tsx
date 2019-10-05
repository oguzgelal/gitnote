import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components/macro';
// import get from 'lodash/get';

import firebase from './classes/Firebase/instance';
import * as authActions from './redux/modules/auth/actions';

const Wrapper = styled.div``;

type AppState = {};
type AppProps = {};

class App extends React.Component<AppProps, AppState> {
  static defaultProps = {};

  constructor(props: AppProps, context: any) {
    super(props, context);

    this.state = {
    };
  }

  componentDidMount() {
    firebase.init();
    this.props.authActions.setAuthObserver();
  }

  render() {

    return (
      <Wrapper>
        Hello world
      </Wrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  requests: state.requests,
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

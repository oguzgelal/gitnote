import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components/macro';

import firebase from './models/Firebase/Firebase.s';
import auth from './models/Auth/Auth.s';
import authRedux from './models/Auth/AuthRedux.s';

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
    auth.init(firebase);
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
  authActions: bindActionCreators(authRedux.getDispatchableCreators(), dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

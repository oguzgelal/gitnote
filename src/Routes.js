import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components/macro';
import get from 'lodash/get';

import { authActions } from './redux/modules/auth';

const Wrapper = styled.div``;

class Routes extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {

    return (
      <Wrapper>
        Hello world
      </Wrapper>
    );
  }
}

Routes.propTypes = {
};

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
)(Routes);

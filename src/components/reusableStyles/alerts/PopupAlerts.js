import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Div = styled.div`
  background: ${props => props.theme.colors.lightRed};
  color: ${props => props.theme.colors.red};
`;

const PopupAlerts = ({ alerts }) =>
  alerts &&
  alerts.length > 0 &&
  alerts.map(alert => <Div key={alert.id}>{alert.msg}</Div>);

PopupAlerts.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(PopupAlerts);

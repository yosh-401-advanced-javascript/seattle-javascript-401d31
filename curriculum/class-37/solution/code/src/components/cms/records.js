import React from 'react';
import { connect } from 'react-redux';

import Auth from '../auth/auth.js';
import { When } from '../if';

import * as actions from './actions.js';

const API = process.env.REACT_APP_API;

const styles = {
  clickable: { marginLeft: '.5em', cursor: 'pointer' },
  delete: {
    color: 'red',
  },
};

class Records extends React.Component {
  getRecord = id => {
    let url = `${API}/${this.props.model}/${id}`;
    this.props.getRecord(url);
  };

  deleteRecord = id => {
    let url = `${API}/${this.props.model}/${id}`;
    this.props.deleteRecord(this.props.model, id, url);
  };

  render() {
    return (
      <Auth capability="read">
        <When condition={this.props.model}>
          <ul>
            {this.props.records.map((record, i) => (
              <li key={record._id}>
                <span>{record.name}</span>

                <Auth capability="update">
                  <span
                    onClick={() => this.getRecord(record._id)}
                    style={styles.clickable}
                  >
                    (Edit)
                  </span>
                </Auth>
                <Auth capability="delete">
                  <span
                    style={{ ...styles.delete, ...styles.clickable }}
                    onClick={() => this.deleteRecord(record._id)}
                  >
                    x
                  </span>
                </Auth>
              </li>
            ))}
          </ul>
          <Auth capability="create">
            <button onClick={this.props.clearRecord}>+</button>
          </Auth>
        </When>
      </Auth>
    );
  }
}

const mapStateToProps = state => ({
  records: state.api.records,
  model: state.api.model,
});

const mapDispatchToProps = (dispatch, getState) => ({
  getRecord: url => dispatch(actions.getRecord(url)),
  deleteRecord: (model, id, url) => dispatch(actions.destroy(model, id, url)),
  clearRecord: () => dispatch(actions.clearRecord()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Records);

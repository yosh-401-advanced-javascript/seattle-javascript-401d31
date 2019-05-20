import React from 'react';
import { connect } from 'react-redux';

import Form from 'react-jsonschema-form';

import teamsSchema from './teams.json';
import playersSchema from './players.json';

import * as actions from './actions.js';

const uiSchema = {
  _id: { 'ui:widget': 'hidden' },
  __v: { 'ui:widget': 'hidden' },
};

const schemas = {
  teams: teamsSchema,
  players: playersSchema,
};

class Record extends React.Component {
  resetPlayer = id => {
    this.setState({ id: null });
  };

  handleSubmit = form => {
    let formData = form.formData;

    if (parseInt(this.props.id) >= 0) {
      this.props.handlePut({
        id: this.props.id,
        model: this.props.model,
        record: formData,
      });
    } else {
      this.props.handlePost({ model: this.props.model, record: formData });
    }
    // this.props.reset();
  };

  render() {
    return (
      <div>
        <h3>Edit Record {this.props.id}</h3>
        <Form
          schema={schemas[this.props.model]}
          uiSchema={uiSchema}
          formData={this.props.records[this.props.model][this.props.id]}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  records: state.records,
});

const mapDispatchToProps = (dispatch, getState) => ({
  handlePost: payload => dispatch(actions.post(payload)),
  handlePut: payload => dispatch(actions.put(payload)),
  handlePatch: payload => dispatch(actions.patch(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Record);

import React from 'react';
import Form from 'react-jsonschema-form';

export default class CMSForm extends React.Component {
  render() {
    // Auto-Hide some of the mongo specific fields
    const uiSchema = {
      _id: { 'ui:widget': 'hidden' },
      __v: { 'ui:widget': 'hidden' },
    };

    return (
      <Form
        schema={this.props.schema}
        uiSchema={uiSchema}
        formData={this.props.formData}
        onChange={this.handleChange}
        onSubmit={this.props.handleSubmit}
        onError={this.handleError}
      />
    );
  }
}

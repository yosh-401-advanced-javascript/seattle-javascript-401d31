import React from "react";

import Form from "./form.js";
import * as utils from "../../lib/utils.js";
import * as api from "../../lib/api.js";

export default class CMS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.edit = this.edit.bind(this);
    this.addRecord = this.addRecord.bind(this);
  }

  async componentDidMount() {
    await this.getModels();
  }

  async getSchema(model) {
    let payload = { model: model, resource: "schema" };
    let schema = await api.get(payload);
    this.setState({ schema });
  }

  async getModels() {
    let payload = { resource: "models" };
    let models = await api.get(payload);
    this.setState({ models });
  }

  async listRecords(model) {
    await this.getSchema(model);
    await this.getAllRecords(model);
  }

  async getAllRecords(model) {
    let payload = { model: model };
    let allRecords = await api.get(payload);
    let records = allRecords.results;
    this.setState({ records, model });
  }

  addRecord(e) {
    let record = {};
    let editing = true;
    this.setState({ editing, record });
  }

  async edit(e) {
    let editing = true;
    let payload = { model: this.state.model, id: e.target.id };
    let record = await api.get(payload);
    this.setState({ editing, record });
  }

  /// FORM METHODS
  handleSubmit = async form => {
    let payload = { model: this.state.model, data: form.formData };
    if (form.formData._id) {
      await api.put(payload);
    } else {
      await api.post(payload);
    }
    this.listRecords(this.state.model);
    let editing = false;
    let record = {};
    this.setState({ editing, record });
  };

  render() {
    return (
      <>
        <header>
          <nav>
            <ul>
              {this.state.models &&
                this.state.models.map((model, i) => (
                  <li key={model}>
                    <span onClick={() => this.listRecords(model)}>{model}</span>
                  </li>
                ))}
            </ul>
          </nav>
        </header>

        <section id="records">
          <ul>
            {this.state.records &&
              this.state.records.map((record, i) => (
                <li key={record._id}>
                  <span onClick={this.edit} id={record._id}>
                    {record.name}
                  </span>
                </li>
              ))}
          </ul>

          {utils.renderIf(
            this.state.schema,
            <button className="add" onClick={this.addRecord}>
              +
            </button>
          )}
        </section>

        <section id="record">
          {utils.renderIf(
            this.state.editing,
            <Form
              schema={this.state.schema}
              formData={this.state.record}
              handleSubmit={this.handleSubmit}
            />
          )}
        </section>
      </>
    );
  }
}

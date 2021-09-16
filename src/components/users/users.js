import React, { Component } from "react";
import axios from "../../axios";
import "antd/dist/antd.css";
import { TreeSelect, Button } from "antd";

export default class users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Users: [],
      value: "defualt-ou-id",    // Enter your default ou id for dropdown  
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event });
  }

  handleSubmit(event) {
    this.componentDidMount();
    this.setState({ value: this.state.value });
    event.preventDefault();
  }

  componentDidMount() {
    const { value } = this.state;
    axios
      .post(`/`, { ParentId: value })
      .then((res) => {
        const data = res.data;
        const valuesArray = JSON.parse(data);

        const users = valuesArray.Accounts.map((u) => (
          <tr key={u.Id}>
            <td>{u.Name}</td>
            <td>{u.Arn}</td>
            <td>{u.Id}</td>
            <td>{u.Email}</td>
            <td>{u.JoinedMethod}</td>
            <td>{u.JoinedTimestamp}</td>
            <td>{u.Status}</td>
          </tr>
        ));

        this.setState({
          users,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { TreeNode } = TreeSelect;
    return (
      <form>
        <div>
          <h1 id="awsorg">AWS Accounts in Organization</h1>
          <div>
            <h3>Select AWS Organization</h3>
            <TreeSelect
              showSearch
              style={{ width: "20%" }}
              dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
              placeholder="Please select"
              allowClear
              onChange={this.handleChange}
              value={this.state.value}
            >
              <TreeNode
                value="r-root-ou-id"
                title={<b style={{ color: "#08c" }}>root</b>}
              >
                <TreeNode
                  value="ou-id-1"
                  title={<b style={{ color: "#210f03" }}>closed-accounts</b>}
                />
                <TreeNode
                  value="ou-id-2"
                  title={<b style={{ color: "#210f03" }}>ou-marek-1</b>}
                />
                <TreeNode
                  value="ou-id-3"
                  title={<b style={{ color: "#210f03" }}>ou-marek-2</b>}
                />
                <TreeNode
                  value="ou-id-4"
                  title={<b style={{ color: "#210f03" }}>ou-some-compliance</b>}
                />
                <TreeNode
                  value="ou-id-5"
                  title={<b style={{ color: "#08c" }}>ou-test</b>}
                >
                  <TreeNode
                    value="ou-id-6"
                    title={<b style={{ color: "#210f03" }}>test-inside-ou</b>}
                  />
                </TreeNode>
                <TreeNode
                  value="ou-id-7"
                  title={<b style={{ color: "#210f03" }}>stackset-testing</b>}
                />
              </TreeNode>
            </TreeSelect>
            <Button onClick={this.handleSubmit}>Check</Button>
          </div>
          <p></p>
          <table id="accounts">
            <tbody>
              <tr>
                <th>Name</th>
                <th>Arn</th>
                <th>id</th>
                <th>Email</th>
                <th>JoinedMethod</th>
                <th>JoinedTimestamp</th>
                <th>Status</th>
              </tr>
              {this.state.users}
            </tbody>
          </table>
        </div>
      </form>
    );
  }
}

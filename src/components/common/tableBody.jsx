import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };

  createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };

  render({ data, columns }) {
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((x) => (
              <td key={this.createKey(item, x)}>{this.renderCell(item, x)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;

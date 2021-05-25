import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortedColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.order = "asc";
      sortColumn.path = path;
    }
    return this.props.onSort(sortColumn);
  };

  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          {columns.map((x) => (
            <th key={x.path || x.key} onClick={() => this.raiseSort(x.path)}>
              {x.name}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;

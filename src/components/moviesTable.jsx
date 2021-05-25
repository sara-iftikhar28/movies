import Like from "./common/like";
import React, { Component } from "react";
import TableHeader from "./common/tableHeader";

class MoviesTable extends Component {
  columns = [
    { name: "Title", path: "title" },
    { name: "Genre", path: "genre.name" },
    { name: "Stock", path: "numberInStock" },
    { name: "Rate", path: "dailyRentalRate" },
    { key: "like" },
    { key: "delete" },
  ];
  render() {
    const { movies, onDelete, onLike, sortedColumn, onSort } = this.props;
    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortedColumn={sortedColumn}
          onSort={onSort}
        ></TableHeader>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like like={movie.like} onToggle={() => onLike(movie)}></Like>
              </td>
              <td>
                <button
                  onClick={() => {
                    onDelete(movie._id);
                  }}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;

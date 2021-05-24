import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
import Like from './common/like'
import Pagination from './common/pagination'
import {paginate} from '../utils/paginate'

class Movies extends Component {
    state = {  
        movies : getMovies(),
        pageSize: 4,
        currentPage: 1
    }
    
    handleDelete = (id) => {
      const movies = this.state.movies.filter(movie => movie._id !== id)
      this.setState({
        movies
      })
    }

    handleLikes = (movie) => {
      const movies = [...this.state.movies]
      const index = movies.indexOf(movie)
      movies[index] = { ...movie}
      movies[index].like = !movies[index].like
      this.setState({
        movies
      })
    }

    handlePageChange = (page) => {
      this.setState({
        currentPage : page
      })
    }

    render() { 
      const {length: count} = this.state.movies
      const { pageSize, currentPage, movies: allMovies} = this.state

      if(count === 0 )
        return <p>There are no movies in the database</p>

        const movies = paginate(allMovies, currentPage, pageSize)
     
      return (  
      <React.Fragment>
      <p>Showing {count} movies in the database</p>
      <table className="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Genre</th>
          <th scope="col">Stock</th>
          <th scope="col">Rate</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        
          {movies.map(movie => <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td><Like like={movie.like} onToggle={() => this.handleLikes(movie)}></Like></td>
              <td><button onClick={() => {this.handleDelete(movie._id)}} className="btn btn-danger btn-sm">Delete</button></td>
              </tr>)}
        
      
      </tbody>
    </table>

    <Pagination itemCount={count} pageSize={pageSize} onPageChange = {this.handlePageChange} currentPage={currentPage} ></Pagination>
    </React.Fragment>
      );
  }
}
 
export default Movies;
import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genre: { name: "" },
      numberInStock: "",
      dailyRentalRate: "",
    },
    errors: {},
  };

  schema = {
    title: Joi.string().required(),
    genre: { name: null },
    numberInStock: Joi.number().required(),
    dailyRentalRate: Joi.number().precision(2).required(),
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    return (
      <React.Fragment>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("genre.name", "Genre")}
          {this.renderInput("numberInStock", "Number in Stock")}
          {this.renderInput("dailyRentalRate", "Rate")}

          {this.renderButton("Save")}
        </form>
      </React.Fragment>
    );
  }
}

export default MovieForm;

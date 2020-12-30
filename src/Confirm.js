import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Confirm = (props) => {
  console.log(props.movie);
  return (
    <div className="col" style={{ alignItems: "flex-start" }}>
      <h1 className="mt-3 strong">
        Congratulations!! You booking is confirmed.
      </h1>
      <div className="row mt-3">
        <img
          src={props.movie.image_url}
          className="ml-5"
          alt=""
          height="300px"
          width="250px"
        />
        <section>
          <h2 style={{ color: "#03355F" }} className="ml-3">
            <b>{props.movie.name}</b>
          </h2>
          <h4 style={{ color: "#03355F" }} className="ml-3">
            <b>{props.movie.rating}</b>
          </h4>
        </section>
      </div>
      <div style={{ fontSize: "1.5rem" }} className="m-3 col">
        <p>Date Selected - {props.ticket.date}</p>
        <p>Time Slot Selected - {props.ticket.slot}</p>
        <p>Number of Tickets Booked - {props.ticket.seats}</p>
        <p className="mt-3">Cinema Address - Z Square Mall, Kanpur</p>
        <p>Contact Details - 7905261925</p>
        <Link to="/" className="btn btn-primary">
          Book New Ticket
        </Link>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    ticket: state.ticket,
    movie: state.movie,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Confirm);

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Book.css";

const dates = [
  {
    date: "2020-09-28",
    day: "Mon",
    status: 1,
  },
  {
    date: "2020-09-29",
    day: "Tue",
    status: 1,
  },
  {
    date: "2020-09-30",
    day: "Wed",
    status: 0,
  },
  {
    date: "2020-10-01",
    day: "Thu",
    status: 1,
  },
  {
    date: "2020-10-02",
    day: "Fri",
    status: 1,
  },
  {
    date: "2020-10-03",
    day: "Sat",
    status: 1,
  },
  {
    date: "2020-10-04",
    day: "Sun",
    status: 0,
  },
];

const slots = {
  "2020-09-28": [
    "Morning 9AM to 11AM",
    "Afternoon 2PM to 4PM",
    "Evening 6PM to 8PM",
  ],
  "2020-09-29": [
    "Morning 8AM to 10AM",
    "Afternoon 2PM to 4PM",
    "Evening 5PM to 7PM",
  ],
  "2020-09-30": [],
  "2020-10-01": [
    "Morning 9AM to 11AM",
    "Afternoon 1PM to 3PM",
    "Evening 6PM to 8PM",
  ],
  "2020-10-02": [
    "Morning 10AM to 12AM",
    "Afternoon 12PM to 2PM",
    "Evening 6PM to 8PM",
  ],
  "2020-10-03": [
    "Morning 9AM to 11AM",
    "Afternoon 3PM to 5PM",
    "Evening 7PM to 9PM",
  ],
  "2020-10-04": [],
};

const Book = (props) => {
  return (
    <div className="d-flex container flex-column mt-4">
      <img
        src={props.movie.image_url}
        alt="Poster"
        height="250px"
        width="500px"
      />
      <h2>
        <strong>{props.movie.name}</strong>
      </h2>
      <h4> Rating : {props.movie.rating}</h4>
      <br />
      <h3>
        Select Date
        {Object.values(dates).map((dt) => {
          return dt.status ? (
            <button
              className="btn btn-outline-primary m-2 p-2"
              value={dt.date}
              style={{ color: "#03355F" }}
              onClick={(e) => {
                props.setDate(e.target.value);
                props.setCheck(1);
              }}
            >
              {dt.date}
            </button>
          ) : (
            <button className="btn btn-secondary m-2 p-2" disabled>
              {dt.date}
            </button>
          );
        })}
      </h3>
      {props.check >= 1 && (
        <h3>
          Select Slot
          {slots[props.ticket.date].map((dt) => {
            return (
              <button
                className="btn btn-outline-primary m-2 p-2"
                value={dt}
                style={{ color: "#03355F" }}
                onClick={(e) => {
                  props.setSlot(e.target.value);
                  props.setCheck(3);
                }}
              >
                {dt}
              </button>
            );
          })}
        </h3>
      )}
      {props.check >= 2 && (
        <h3>
          Select Seats
          <input
            type="number"
            className="ml-2"
            min="1"
            style={{ width: "10%", color: "#03355F" }}
            value={props.ticket.seats}
            onChange={(e) => {
              props.setSeat(e.target.value);
            }}
          ></input>
        </h3>
      )}
      {props.check >= 3 && props.ticket.seats >= 1 && (
        <Link to="/confirm" className="btn btn-primary m-auto">
          Confirm
        </Link>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    check: state.check,
    ticket: state.ticket,
    movie: state.movie,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCheck: (count) => {
      dispatch({
        type: "CHECK",
        payload: count,
      });
    },
    setDate: (date) => {
      dispatch({
        type: "SET DATE",
        payload: date,
      });
    },
    setSlot: (slot) => {
      dispatch({
        type: "SET SLOT",
        payload: slot,
      });
    },
    setSeat: (seat) => {
      dispatch({
        type: "SET SEAT",
        payload: seat,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);

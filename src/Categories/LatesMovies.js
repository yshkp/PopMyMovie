import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./LatesMovies.css";

const DUMMY = {
  "mov-1": {
    id: "mov-1",
    title: "A Movie Title",
    category: "Latest movies",
    desc:
      "Exercitation amet eu sit cupidatat tempor enim aliqua adipisicing consectetur aliqua. Ullamco ullamco fugiat amet voluptate quis cupidatat esse non exercitation. Ex commodo et ad voluptate elit aliqua nulla cupidatat consequat et. Mollit officia consequat tempor sit. Irure laboris id aliquip cillum do labore mollit. Occaecat ullamco laborum nulla ut id fugiat ullamco do officia irure id velit nostrud.",
    rating: 6.6,
    img_url:
      "https://marketplace.canva.com/EADaoNOnRfI/1/0/283w/canva-grunge-brush-movie-poster-az_gfR9Yb38.jpg",
  },
  "mov-2": {
    id: "mov-2",
    title: "Another Movie Title",
    category: "Latest movies",
    desc:
      "Occaecat dolore minim quis amet in dolore labore ea aute esse. Cillum culpa quis est sunt. Dolore fugiat do occaecat velit ea voluptate sit ad fugiat minim elit irure. Eu et non ex ea aute in in. Sit dolor anim minim nulla amet ad officia ut labore magna duis sit elit. Veniam tempor irure aliqua officia adipisicing excepteur proident velit nulla id enim adipisicing. Mollit anim tempor enim aliqua velit qui.",
    rating: 7.1,
    img_url:
      "https://marketplace.canva.com/EADaoNOnRfI/1/0/283w/canva-grunge-brush-movie-poster-az_gfR9Yb38.jpg",
  },
  "mov-3": {
    id: "mov-3",
    title: "Someother Movie Title",
    category: "Latest movies",
    desc:
      "Incididunt voluptate nostrud sunt occaecat deserunt officia ea elit nulla non nisi. Anim sit proident eiusmod occaecat commodo irure proident exercitation non. Consequat laboris consectetur culpa eu ad adipisicing elit.",
    rating: 9.0,
    img_url:
      "https://marketplace.canva.com/EADaoNOnRfI/1/0/283w/canva-grunge-brush-movie-poster-az_gfR9Yb38.jpg",
  },
  "mov-4": {
    id: "mov-4",
    title: "Yet Another Movie",
    category: "Latest movies",
    desc:
      "Aute labore aliquip eiusmod veniam ullamco labore sit irure dolore excepteur. Sint consequat pariatur culpa culpa. Nostrud consequat eiusmod qui anim duis ad. Eu nisi ad dolor aliquip laboris occaecat in sunt magna consequat ullamco. Ullamco sint mollit magna reprehenderit Lorem enim qui veniam nisi in ex cillum.",
    rating: 10,
    img_url:
      "https://marketplace.canva.com/EADaoNOnRfI/1/0/283w/canva-grunge-brush-movie-poster-az_gfR9Yb38.jpg",
  },
  "mov-5": {
    id: "mov-5",
    title: "Movie For You",
    category: "Recommended for you",
    desc:
      "Tempor est velit aliquip sit nulla mollit. Dolor adipisicing in labore laboris aliqua voluptate id. Eiusmod culpa occaecat dolor nisi. Eu Lorem aliquip non officia laborum tempor sit voluptate eu mollit. Exercitation esse aliqua aliquip sint aliquip voluptate et incididunt fugiat ullamco mollit dolor laboris. Proident irure qui consequat laboris dolore enim amet esse aute officia.",
    rating: 1.2,
    img_url:
      "https://images.moviepostershop.com/replicas-movie-poster-1000778791.jpg",
  },
  "mov-6": {
    id: "mov-6",
    title: "Another Movie For You",
    category: "Recommended for you",
    desc:
      "Enim anim ex voluptate eu duis exercitation magna adipisicing labore ullamco nostrud sint ex. Anim sit ipsum mollit qui laboris cillum ut laborum incididunt. Consectetur non dolore pariatur deserunt culpa duis commodo minim ad ex sunt ut esse. Non in et consequat qui laborum tempor minim.",
    rating: 3.4,
    img_url:
      "https://images.moviepostershop.com/replicas-movie-poster-1000778791.jpg",
  },
  "mov-7": {
    id: "mov-7",
    title: "Yet Another Movie For You",
    category: "Recommended for you",
    desc:
      "Laboris deserunt duis incididunt duis cillum laboris ullamco adipisicing ea occaecat. Irure nulla quis consectetur aliqua tempor commodo quis quis labore elit velit. Sit ipsum excepteur incididunt aute in consequat. Ullamco cupidatat ea do veniam elit ut qui laboris qui labore. Cupidatat fugiat consequat incididunt cillum qui ipsum aute laboris sunt deserunt deserunt ipsum adipisicing.",
    rating: 5.5,
    img_url:
      "https://images.moviepostershop.com/replicas-movie-poster-1000778791.jpg",
  },
  "mov-8": {
    id: "mov-8",
    title: "Last One",
    category: "Recommended for you",
    desc:
      "Sunt id amet ipsum elit officia minim. Ipsum ullamco do exercitation aliquip duis Lorem consectetur. Id exercitation minim et deserunt laborum mollit deserunt. Consequat reprehenderit mollit aliquip adipisicing magna.",
    rating: 8.6,
    img_url:
      "https://images.moviepostershop.com/replicas-movie-poster-1000778791.jpg",
  },
};

const LatestMovies = (props) => {
  return (
    <div className="m-4">
      <h2>
        <b> Latest Movies</b>
      </h2>
      <div className="d-flex container">
        {Object.values(DUMMY).map((key) => {
          return (
            key.category === "Recommended for you" && (
              <div className="item mt-4">
                <Link
                  to={`/${key.id}`}
                  onClick={() => {
                    props.setMovie({
                      name: key.title,
                      desc: key.desc,
                      rating: key.rating,
                      image_url: key.img_url,
                    });
                  }}
                >
                  <img
                    src={key.img_url}
                    style={{ height: "300px", width: "555px" }}
                    alt={key.desc}
                  />
                </Link>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movie: state.movie,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setMovie: (movie) => {
      dispatch({
        type: "SET MOVIE",
        payload: movie,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LatestMovies);

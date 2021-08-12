import React, { useState, useRef } from "react";
import Movie from "./Movie";
import "./index.css";

export default function MovieList() {
    const title = useRef();
    const grading = useRef();
    const [movies, setMovies] = useState([]);

    function addMovie(e) {
        if (title.current.value <= 0) {
            alert("Skriv titel!");
            return false;
        } else if (grading.current.value <= 0) {
            alert("Välj betyg!");
            return false;
        }

        const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;
        setMovies([
            ...movies,
            {
                id: newId,
                grade: grading.current.value,
                title: title.current.value,
            },
        ]);
        title.current.value = "";
        grading.current.value = 0;
    }
    function deleteList(id) {
        setMovies(movies.filter((item) => item.id !== id));
    }
    function titleSort(a, b) {
        if (a.title < b.title) {
            return -1;
        } else if (a.title > b.title) {
            return 1;
        }
    }
    function titSort() {
        movies.sort(titleSort);
        setMovies([...movies]);
    }
    function gradingSort(a, b) {
        if (a.grade > b.grade) {
            return -1;
        } else if (a.grade < b.grade) {
            return 1;
        }
    }
    function grdSort() {
        movies.sort(gradingSort);
        setMovies([...movies]);
    }

    return (
        <div>
            <label for="title">Titel:</label>
            <input className="form-control" ref={title} placeholder="Skriv din titel här..."></input>
            <label for="grade">Betyg:</label>
            <select className="form-control" ref={grading}>
                <option value="" selected>
                    Välj ditt betyg här....
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <div class="form-group mt-2">
                <button className="btn btn-success " onClick={addMovie}>
                    Spara
                </button>
            </div>

            <h2 className="form-group mt-4"> Mina Filmer</h2>
            <ul className="list-group">
                {movies.map((movie) => (
                    <Movie key={movie.id} item={movie} deleteList={deleteList} />
                ))}
            </ul>
            <button className="btn btn-primary " onClick={titSort}>
                Alfabetisk ordning
            </button>
            <button className="btn btn-primary m-2" onClick={grdSort}>
                Betygsordning
            </button>
        </div>
    );
}

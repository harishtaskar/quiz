import React, { useEffect, useState } from "react";
import Container from "../UI/Container";
import { Link, useSearchParams } from "react-router-dom";
import classes from "./AllQuizzes.module.css";
import { db } from "../firebase";
import SearchIcon from "@mui/icons-material/Search";

const AllQuizzes = () => {
  const [searchParams, setSearchParams] = useSearchParams({ q: "" });
  const q = searchParams.get("q");
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchDataFromFirestore = async () => {
      setLoading(true);
      try {
        const collectionRef = db.collection("Quizzes");
        const snapshot = await collectionRef.get();
        if (snapshot.empty) {
          console.log("No documents found in the collection.");
          return;
        }
        let quizList = [];
        snapshot.forEach((doc) => {
          quizList.push({
            data: doc.data(),
            id: doc.id,
          });
        });

        setQuizzes(quizList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from Firestore: ", error);
      }
    };
    fetchDataFromFirestore();
  }, []);

  const quiz = quizzes.filter((item) => {
    return item.data.quizName.toLowerCase().includes(q.toLowerCase());
  });

  console.log(quiz);

  const hasQuizzes = quizzes.length > 0;
  return (
    <div className={classes.allquizzes}>
      <div className={classes.searchInput}>
        <SearchIcon />
        <input
          type="text"
          placeholder="search quiz..."
          value={q}
          onChange={(e) =>
            setSearchParams((prev) => prev.set("q", e.target.value))
          }
        ></input>
      </div>
      <ul className={classes.listItems}>
        {loading ? <p>Loading...</p> : !hasQuizzes && <p>No Quiz Found</p>}

        {hasQuizzes &&
          quiz?.map((item, index) => {
            return (
              <li key={item.id}>
                <Link to={item.id}>
                  <Container>{`${index + 1}. ${item.data.quizName}`}</Container>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default AllQuizzes;

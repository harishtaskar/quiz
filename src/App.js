import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Quizzes, { loader as quizzesLoader } from "./pages/Quizzes";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NewQuiz from "./pages/NewQuiz";
import AllQuizzes from "./pages/AllQuizzes";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Root />,
      children: [
        {
          path: "",
          element: <AllQuizzes />,
        },
        {
          path: ":quizId",
          element: <Quizzes />,
          loader: quizzesLoader,
        },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "creatingquiz", element: <NewQuiz /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

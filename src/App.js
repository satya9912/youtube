import Header from "./components/Header";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
function App() {
  const routes = [
    {path: "/", element: <Body /> , 
     children: [
      {path: "/", element: <MainContainer />},
      {path:  "/watch", element: <WatchPage />}
     ]
    }
  ];

  const router = createBrowserRouter(routes, { basename: "/youtube" })
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;

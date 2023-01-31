import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CategoriesList from "./components/CategoriesList";
import fetchMenu from "./store/menu-actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  return (
    <div>
      <CategoriesList />
    </div>
  );
}

export default App;

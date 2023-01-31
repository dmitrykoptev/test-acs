import { menuActions } from "./menu";

const fetchMenu = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch("Menu.json");

      if (!response.ok) {
        throw new Error("Something went wrong ...");
      }

      const data = await response.json();
      const categories = data.serviceTimes[0].menuCategories;
      return categories;
    };

    try {
      const catList = await sendRequest();
      dispatch(
        menuActions.replaceMenu({
          categories: catList || [],
        })
      );
    } catch (err) {
      console.log(err.message);
    }
  };
};

export default fetchMenu;

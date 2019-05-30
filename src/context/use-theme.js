import { useContext } from "react";
import ThemeContext from "./theme-context";
import UserContext from "./user-context";
import useFetchUserTheme from "./use-fetch-user-theme";

const defaultTheme = {
  color: "red"
};

function useTheme() {
  const user = useContext(UserContext);
  const appTheme = useContext(ThemeContext);
  const userTheme = useFetchUserTheme(user);

  return userTheme || appTheme || defaultTheme;
}

export default useTheme;

import { useContext, useState, useEffect } from "react";
import ThemeContext from "./theme-context";
import UserContext from "./user-context";

const defaultTheme = {
  color: "red"
};

function useFetchUserTheme(user) {
  const [userTheme, setUserTheme] = useState(null);

  useEffect(() => {
    if (!user) return;

    let canceled = false;

    fetch(`http://example.com/${user}`)
      .then(response => response.json())
      .then(theme => {
        if (!canceled) setUserTheme(theme);
      });

    return () => (canceled = true);
  }, [user]);

  return userTheme;
}

function useTheme() {
  const user = useContext(UserContext);
  const appTheme = useContext(ThemeContext);
  const userTheme = useFetchUserTheme(user);

  return userTheme || appTheme || defaultTheme;
}

export default useTheme;

import { useState, useEffect } from "react";

function fetch() {
  return Promise.resolve({
    json: () => Promise.resolve({ color: "green" })
  });
}

function useFetchUserTheme(user) {
  const [userTheme, setUserTheme] = useState(null);

  useEffect(() => {
    if (!user) return;

    let canceled = false;

    fetch(`https://example.com/theme/${user}`)
      .then(response => response.json())
      .then(theme => !canceled && setUserTheme(theme));

    return () => (canceled = true);
  }, [user]);

  return userTheme;
}

export default useFetchUserTheme;

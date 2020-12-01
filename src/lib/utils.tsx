const getPage = () => {
  let url = window.location.pathname;
  const url_tab = url.split("/");
  if (url_tab[2]) return url_tab[2];
  return "home";
};

const changePage = (title: string, path: string) => {
  window.history.pushState(title, title, path);
};

const validateEmail = (email: string) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isConnected = async (): Promise<any> => {
  return new Promise<any>((result) => {
    fetch("https://assos.utc.fr/talentbrut/server/api/authenticate.php").then(
      (response) => {
        result(response.json());
      }
    );
  });
};

export { getPage, changePage, validateEmail, isConnected };

const getPage = () => {
  let url = window.location.pathname;
  const url_tab = url.split("/");
  if (url_tab[2]) return url_tab[2];
  return "home";
};

const changePage = (title: string, path: string) => {
  window.history.pushState(title, title, path);
};

export { getPage, changePage };

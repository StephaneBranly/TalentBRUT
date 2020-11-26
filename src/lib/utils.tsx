const getPage = () => {
  let url = window.location.pathname;
  const url_tab = url.split("/");
  if (url_tab[2]) return url_tab[2];
  return "home";
};

export { getPage };

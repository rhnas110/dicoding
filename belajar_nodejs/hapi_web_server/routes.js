const routes = [
  {
    method: "GET",
    path: "/",
    handler: (req, h) => {
      return "Homepage";
    },
  },
  {
    method: "*",
    path: "/",
    handler: (req, h) => {
      return "Halaman tidak dapat diakses dengan method tersebut";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (req, h) => {
      return "About page";
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (req, h) => {
      return "Halaman tidak dapat diakses dengan method tersebut";
    },
  },
  {
    method: "GET",
    path: "/hello/{name?}",
    handler: (req, h) => {
      const { name = "Budi" } = req.params;
      const { lang } = req.query;
      if (lang === "id") {
        return `Hai, ${name}!`;
      }
      return `Hello, ${name}!`;
    },
  },
  {
    method: "POST",
    path: "/login",
    handler: (req, h) => {
      const { username, password } = req.payload;
      console.log(password);
      const response = h
        .response(`Welcome, ${username}!`)
        .code(201)
        .type("text/plain")
        .header("X-Custom", "some-value");
      return response;
    },
  },
  {
    method: "*",
    path: "/{any*}",
    handler: (req, h) => {
      return "Halaman tidak ditemukan";
    },
  },
];

module.exports = routes;

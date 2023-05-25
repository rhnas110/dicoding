const dicoding = [
  {
    link: "https://www.youtube.com/@DicodingIndonesia",
    target: "_blank",
    icon: "fab fa-youtube",
  },
  {
    link: "https://www.linkedin.com/company/dicoding/",
    target: "_blank",
    icon: "fab fa-linkedin-in",
  },
  {
    link: "https://twitter.com/dicoding",
    target: "_blank",
    icon: "fab fa-twitter",
  },
  {
    link: "https://www.facebook.com/dicoding",
    target: "_blank",
    icon: "fab fa-facebook",
  },
];

document.getElementById("side-list").innerHTML = dicoding
  .map((list) => {
    return `<li><a href="${list.link}" target="${list.target}"><i class="${list.icon}"></i></a>
        </li>`;
  })
  .join("");

const navbar = [
  {
    navbar_title: "Summary",
  },
  {
    navbar_title: "Project",
  },
  {
    navbar_title: "Contact",
  },
  {
    navbar_title: "Profile",
  },
];

document.getElementById("nav-list").innerHTML = navbar
  .map((list) => {
    return `<li><a href="#${list.navbar_title.toLocaleLowerCase()}" class="nav-${list.navbar_title.toLocaleLowerCase()}">${
      list.navbar_title
    }</a>
        </li>`;
  })
  .join("");

const project = [
  {
    project_title: "MOKOMDO (Modal Komputer Doank)",
    image_src: "assets/image/mokomdo_thumbnail.png",
    link: "https://jcwd220405.purwadhikabootcamp.com/",
  },
  {
    project_title: "frontendaese",
    image_src: "assets/image/aese_thumbnail.png",
    link: "https://frontendaese.space/",
  },
];

document.getElementById("project-detail").innerHTML = project
  .map((project) => {
    return `<section>
    <h3>${project.project_title}</h3>
    <div class="project-view">
        <img class="featured-image" src="${project.image_src}" alt="${project.project_title}" />
        <button class="detail-btn button-86" role="button" onclick="window.open('${project.link}', '_blank')">More Info &#8594;</button>
    </div>
    <hr/>
</section>`;
  })
  .join("");

const contact = [
  {
    icon: "fa-solid fa-envelope contact-icon",
    type: "Email",
    link: "mailto:raihanas110@gmail.com",
  },
  {
    icon: "fa-brands fa-whatsapp contact-icon",
    type: "Whatsapp",
    link: "https://api.whatsapp.com/send/?phone=6281384118613",
  },
];

document.getElementById("contact-container").innerHTML = contact
  .map((contact) => {
    return `<div class="contact-card">
    <i class="${contact.icon}"></i>
    <p>${contact.type}</p>
    <a href="${contact.link}">Send a message</a>
</div>`;
  })
  .join("");

window.addEventListener("load", () => {
  const botao = document.getElementById("btnaltera");
  const swpdark = document.getElementById("filterswap");
  const navdark = document.getElementById("navbar");
  const bodydark = document.getElementById("webbody");
  const btndark = document.getElementById("btngit");
  const fswap = document.getElementById("footerswp");
  const indicadorswp = document.getElementById("indica");
  const togglecap = document.getElementById("capswitch");
  const pjxtitles = document.querySelectorAll(".projetoxabouttitle");
  const teste = document.querySelectorAll(".projetoxabouttext");
  const swpdoc = document.querySelectorAll(".projetoxdoc");
  const pjrules = document.querySelectorAll(".projetoxrules");
  const reposTitle = document.getElementById("reposTitle");

  let user = {};
  let repos = {};

  if (!window.localStorage.getItem("user")) {
    $.get("https://api.github.com/users/jenifermorati", function (result) {
      user = result;
      getRepos();
      $("#authorName").html(user.name);
      $("#authorImage").attr("src", user.avatar_url);
      $("#btngit").attr("href", user.html_url);
    });
  }

  const getRepos = () => {
    $.get(
      "https://api.github.com/users/jenifermorati/repos",
      function (result) {
        console.log(result);
        repos = result.map((repo) => ({
          name: repo.name,
          url: repo.clone_url,
        }));

        $("#reposContainer").html(
          ` 
          ${repos.map(
            (item) =>
              `
               <div class="repo-component">
                  <a href="${item.url}">${item.name}</a>
               </div>
              `
          )}
          `
        );
      }
    );
  };

  btnswap = 0;

  botao.addEventListener("click", () => {
    btnswap++;

    for (i = 0; i < swpdoc.length; i++) {
      swpdoc[i].classList.remove("projetoxdoc");
    }

    for (i = 0; i < teste.length; i++) {
      teste[i].classList.remove("projetoxabouttext");
    }

    for (i = 0; i < pjxtitles.length; i++) {
      pjxtitles[i].classList.remove("projetoxabouttitle");
    }
    reposTitle.classList.toggle("darktitle");
    indicadorswp.classList.remove("indicador");
    fswap.classList.remove("footerbg");
    btndark.classList.remove("btnprojetox");
    bodydark.classList.remove("bodybg");
    navdark.classList.remove("headerbg");
    swpdark.classList.remove("black-filter");
    swpdark.classList.add("dark-mode");
    navdark.classList.add("darknav");
    bodydark.classList.add("darkbody");
    btndark.classList.add("btnprojetoxdark");
    fswap.classList.add("darkfooter");
    indicadorswp.classList.add("indicadoron");

    for (i = 0; i < teste.length; i++) {
      teste[i].classList.add("projetoxabouttextdark");
    }

    for (i = 0; i < pjxtitles.length; i++) {
      pjxtitles[i].classList.add("projetoxabouttitledark");
    }

    for (i = 0; i < swpdoc.length; i++) {
      swpdoc[i].classList.add("projetoxdocdark");
    }

    for (i = 0; i < pjrules.length; i++) {
      pjrules[i].classList.add("projetoxrulesdark");
    }

    if (btnswap === 2) {
      for (i = 0; i < swpdoc.length; i++) {
        swpdoc[i].classList.add("projetoxdoc");
      }

      for (i = 0; i < teste.length; i++) {
        teste[i].classList.add("projetoxabouttext");
      }

      for (i = 0; i < pjxtitles.length; i++) {
        pjxtitles[i].classList.add("projetoxabouttitle");
      }

      indicadorswp.classList.add("indicador");
      fswap.classList.add("footerbg");
      btndark.classList.add("btnprojetox");
      bodydark.classList.add("bodybg");
      navdark.classList.add("headerbg");
      swpdark.classList.add("black-filter");
      swpdark.classList.remove("dark-mode");
      navdark.classList.remove("darknav");
      bodydark.classList.remove("darkbody");
      btndark.classList.remove("btnprojetoxdark");
      fswap.classList.remove("darkfooter");
      indicadorswp.classList.remove("indicadoron");

      for (i = 0; i < teste.length; i++) {
        teste[i].classList.remove("projetoxabouttextdark");
      }

      for (i = 0; i < pjxtitles.length; i++) {
        pjxtitles[i].classList.remove("projetoxabouttitledark");
      }

      for (i = 0; i < swpdoc.length; i++) {
        swpdoc[i].classList.remove("projetoxdocdark");
      }

      for (i = 0; i < pjrules.length; i++) {
        pjrules[i].classList.remove("projetoxrulesdark");
      }

      btnswap = 0;
    }
  });

  btnacess.addEventListener("click", (e) => {
    menuacess.classList.remove("_hideon");
  });
  fechaacces.addEventListener("click", (e) => {
    menuacess.classList.add("_hideon");
  });

  document.addEventListener("dblclick", (e) => {
    menuacess.classList.add("_hideon");
  });

  ativamob.addEventListener("click", (e) => {
    arrowmenu.classList.toggle("_deg");
    navmob.classList.toggle("_ativamenu");
  });
});

$(document).ready((e) => {
  function fonte(e) {
    const elemento = $(".alterafonte");
    const fonte = elemento.css("font-size");
    if (e == "a") {
      elemento.css("fontSize", parseInt(fonte) + 3);
    } else if ("b") {
      elemento.css("fontSize", parseInt(fonte) - 3);
    }
  }

  $("#aumenta").click((e) => {
    fonte("a");
  });

  $("#diminui").click((e) => {
    fonte("b");
  });
});

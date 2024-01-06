function toggleMode() {
  const html = document.documentElement

  // JEITO MAIS ELABORADO
  //if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  //} else {
  //  html.classList.add("light")
  //}

  //JEITO PRÁTICO
  html.classList.toggle("light")

  //PEGAR A TAG IMG
  const img = document.querySelector("#profile img")

  //SUBSTITUIR A IMAGEM
  if (html.classList.contains("light")) {
    //SE TIVER LIGHT MODE, ADICIONAR A IMAGEM
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // SE TIVER SEM LIGHT MODE, MANTER A IMAGEM
    img.setAttribute("src", "./assets/avatar.png")
  }
}

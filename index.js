import { Header } from "./src/components/header/header.js";
import { Footer } from "./src/components/footer/footer.js";
// import router from './src/utils/router.js';

const app = document.getElementById("app")
const randomix = document.createElement("div")
randomix.id = "randomix"
// const routerT = router();

app.appendChild(Header())
app.appendChild(randomix)
app.appendChild(Footer())


// header
document.addEventListener("onstatechange", function (e){
  root.innerHTML = "";
  const path = e.detail.path;
  history.pushState({"path": path}, "", path);
  root.appendChild(routerT.getPage(path));
})

window.addEventListener("popstate", function(e){
  root.innerHTML = "";
  const path = e.state === null ? "/" : e.state.path;
  root.appendChild(routerT.getPage(path));
})
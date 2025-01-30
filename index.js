import {Header} from "./src/components/header/header.js";
import {Footer} from "./src/components/footer/footer.js";
import {router} from "./src/utils/router.js";
import {DefaultPage} from "./src/pages/defaultRandomizer/index.js"

const app = document.getElementById("app");
const randomix = document.createElement("div");
randomix.id = "randomix";
const routerT = router();

app.appendChild(Header());
app.appendChild(randomix);
app.appendChild(Footer());

randomix.appendChild(DefaultPage())

// header
document.addEventListener("onstatechange", function (e) {
	randomix.innerHTML = "";
	const path = e.detail.path;
	history.pushState({"path": path}, "", path);
	randomix.appendChild(routerT[path]);
});

window.addEventListener("popstate", function (e) {
	randomix.innerHTML = "";
	const path = e.state === null ? "/" : e.state.path;
	randomix.appendChild(routerT[path]);
});

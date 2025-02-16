import {Header} from "./src/components/header/header.js";
import {Footer} from "./src/components/footer/footer.js";
import {router} from "./src/utils/router.js";
import {InputItensDefaultPage} from "./src/pages/defaultRandomizer/index.js"

const app = document.getElementById("app");
const randomix = document.createElement("div");
randomix.id = "randomix";
const routerT = router();

app.appendChild(Header());
app.appendChild(randomix);
app.appendChild(Footer());

// header
document.addEventListener("onstatechange", function (e) {
	const path = e.detail.path;
	if(path == window.location.pathname){
		return
	}
	randomix.innerHTML = "";
	history.pushState({"path": path}, "", path);
	randomix.appendChild(routerT[path]());
});

window.addEventListener("popstate", function (e) {
	randomix.innerHTML = "";
	const path = e.state === null ? "/" : e.state.path;
	randomix.appendChild(routerT[path]());
});

switch(localStorage.getItem("page")){
	case "/Randomix/scratch":
			randomix.innerHTML = "";
			history.pushState({"path": "/Randomix/scratch"}, "", "/Randomix/scratch");
			randomix.appendChild(routerT["/Randomix/scratch"]());
			break
	case "/Randomix/slot":
			randomix.innerHTML = "";
			history.pushState({"path": "/Randomix/slot"}, "", "/Randomix/slot");
			randomix.appendChild(routerT["/Randomix/slot"]());
			break
	default:
			randomix.appendChild(InputItensDefaultPage())
			break
}

localStorage.clear()
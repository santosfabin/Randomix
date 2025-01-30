import { Header } from "../../components/header/header.js";

import { Footer } from "../../components/footer/footer.js";

import { ScratchPage } from "./index.js";

document.getElementById("header").appendChild(Header())

document.getElementById("randomix").appendChild(ScratchPage());

document.getElementById("footer").appendChild(Footer())

export default function customEventPath(path){
    return new CustomEvent("onstatechange", {detail: {"path": path}})
}
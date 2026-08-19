import { outilView } from "./view/outilView.js"
import { outil } from "./class/outil.js"
document.addEventListener('DOMContentLoaded', () => {
    let testOutil = new outil();
    let testOutilView = new outilView(testOutil, 200);

    testOutilView.draw();
    testOutilView.move(0, 0);
})
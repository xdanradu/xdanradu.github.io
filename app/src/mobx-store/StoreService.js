import { Store } from "./Store";

let store;

function loadStore() {
    if (!store) {
        store = new Store();
    }
    return store;
}

export default loadStore;

import {configureStore} from "@reduxjs/toolkit";
import list from "./listSlice"
import general from "./generalSlice";
import modal from "./modalSlice";
import articles from "./articleSlice";
import ingredientSlice from "./ingredientSlice";

const store = configureStore({
    reducer: {
        listConfig: list,
        generalConfig: general,
        modalConfig: modal,
        articleConfig: articles,
        ingredientConfig: ingredientSlice

    }
});

export default  store;
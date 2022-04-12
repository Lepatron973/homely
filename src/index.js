import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./config/store";
import {Provider} from "react-redux";
import { createRoot } from 'react-dom/client';

const general = [
  {icon: "https://img.icons8.com/dusk/64/000000/list--v1.png", title: "Liste de courses", quantity: 0, path:"list"},
  {icon: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-stock-logistics-flaticons-lineal-color-flat-icons-2.png", title: "Inventaire", quantity: 0, path:"stock/0"},
  {icon:"https://img.icons8.com/dusk/64/000000/ingredients.png", title:"Articles", quantity: 0, path:"articles"},
  {icon:"https://img.icons8.com/external-linector-lineal-color-linector/64/000000/external-food-self-protection-linector-lineal-color-linector.png", title:"Plats", quantity: 0, path:"plats"}
]
const category = ["Fruits et légumes","Produits laitiers","Céréales et féculents,Viandes","Eau","Boisson sucré","Boisson alcoolisé"];

if(localStorage.getItem("general")==null)
  localStorage.setItem("general",JSON.stringify(general));
if(localStorage.getItem("category")==null)
  localStorage.setItem("category",JSON.stringify(category));
if(localStorage.getItem("list")==null)
  localStorage.setItem("list",JSON.stringify(([])));
if(localStorage.getItem("ingredients")==null)
  localStorage.setItem("ingredients",JSON.stringify(([])));
if(localStorage.getItem("articles")==null)
  localStorage.setItem("articles",JSON.stringify(([])));

const root = createRoot(document.getElementById('root'));
root.render( 
  <Provider store={store}>
      <App />
  </Provider>
)


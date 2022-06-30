
import Home from '../components/backend/Home.vue';
import Categories from '../components/backend/category/Categories.vue';
import addCategory from '../components/backend/category/Create.vue';
import editCategory from '../components/backend/category/Edit.vue';



export const routes = [
    {path: '/home', component: Home},
    {path: '/categories', component: Categories},
    {path: '/add-category', component: addCategory},
    {path: '/edit-category/:id', component: editCategory}
];

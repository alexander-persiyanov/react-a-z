import PostItemInfo from "../components/PostItemInfo";
import About from "../views/about";
import Posts from "../views/posts";

const routes = [
    {path:'/about',component:About},
    {path:'/posts',component:Posts},
    {path:'/posts/:id',component:PostItemInfo},

];
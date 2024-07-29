import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../pages/HomeView.vue";
import AboutView from "../pages/AboutView.vue";
import ProductsView from "../pages/ProductsView.vue";
import News from "../pages/News.vue";
import Contact from "../pages/Contact.vue";
import NewsDetails from "../components/NewsDetails.vue";
import ProductDetails from "../components/ProductDetails.vue";
import Auth from "../components/Auth.vue";
import Cart from "../pages/Cart.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/products",
      name: "products",
      children: [
        {
          path: "",
          component: ProductsView,
        },
        {
          path: ":id",
          name: "product-details",
          component: ProductDetails,
          props: true,
        },
      ],
      props: true,
    },
    {
      path: "/news",
      name: "news",
      children: [
        {
          path: "",
          component: News,
        },
        {
          path: ":id",
          name: "news-details",
          component: NewsDetails,
          props: true,
        },
      ],
      props: true,
    },

    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
    {
      path: "/auth",
      name: "auth",
      component: Auth,
    },
  ],
});

export default router;

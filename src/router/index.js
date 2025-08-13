import { createWebHistory, createRouter } from "vue-router";

import MainLayout from "../layouts/MainLayout.vue";
import Home from "../pages/Home.vue";
import Documents from "../pages/Documents.vue";
import DocumentDetail from "../pages/DocumentDetail.vue";
import MarkDown from "../pages/MarkDown.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: MainLayout,
    children: [
        {
            path: "",
            name: "HomePage",
            component: Home,
        }
    ]
  },
  {
    path: "/markdown",
    name: "MarkDown",
    component: MainLayout,
    children: [
      {
        path: ":id/:name",
        name: "MarkdownDetail",
        component: MarkDown,
      },
    ],
  },
  {
    path: "/documents",
    name: "Documents",
    component: MainLayout,
    children: [
        {
            path: "",
            name: "DocumentPage",
            component: Documents,
        },
        {
            path: ":id",
            name: "DocumentDetail",
            component: DocumentDetail,
        }
        
    ],
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

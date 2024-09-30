import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AppFirmenlogoView from "../views/AppFirmenlogoView.vue";
import AppCorporateDesignView from "../views/AppCorporateDesignView.vue";
import AppVisitcardView from "../views/AppVisitcardView.vue";
import AppFlyerView from "../views/AppFlyerView.vue";
import AppBrochureView from "../views/AppBrochureView.vue";
import AppBannerView from "../views/AppBannerView.vue";
import AppCatalogView from "../views/AppCatalogView.vue";
import AppCoverdesignView from "../views/AppCoverdesignView.vue";
import AppPortraitView from "../views/AppPortraitView.vue";
import AppBuchillustrationView from "../views/AppBuchillustrationView.vue";
import AppDigitaleIllustrationView from "../views/AppDigitaleIllustrationView.vue";
import AppArtBuyView from "../views/AppArtBuyView.vue";
import AppArtExhibitionView from "../views/AppArtExhibitionView.vue";
import AppArtCreateView from "../views/AppArtCreateView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/firmenlogo",
    name: "firmenlogo",
    component: AppFirmenlogoView,
  },
  {
    path: "/corporatedesign",
    name: "corporatedesign",
    component: AppCorporateDesignView,
  },
  {
    path: "/visitenkarten",
    name: "visitenkarten",
    component: AppVisitcardView,
  },
  {
    path: "/flyer",
    name: "flyer",
    component: AppFlyerView,
  },
  {
    path: "/broschueren",
    name: "broschueren",
    component: AppBrochureView,
  },
  {
    path: "/banner",
    name: "banner",
    component: AppBannerView,
  },
  {
    path: "/katalogen",
    name: "katalogen",
    component: AppCatalogView,
  },
  {
    path: "/coverdesign",
    name: "coverdesign",
    component: AppCoverdesignView,
  },
  {
    path: "/Portraitillustrationen",
    name: "Portraitillustrationen",
    component: AppPortraitView,
  },
  {
    path: "/Buchillustrationen",
    name: "Buchillustrationen",
    component: AppBuchillustrationView,
  },

  {
    path: "/digitaleIllustrationen",
    name: "digitaleIllustrationen",
    component: AppDigitaleIllustrationView,
  },
  {
    path: "/kaufen",
    name: "kaufen",
    component: AppArtBuyView,
  },
  {
    path: "/ausstellen",
    name: "ausstellen",
    component: AppArtExhibitionView,
  },
  {
    path: "/erschaffen",
    name: "erschaffen",
    component: AppArtCreateView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;

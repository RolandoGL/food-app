export default {
    name: "user-home",
    component: () =>
        import(
            /* webpackChunkName: "user-home" */ "../layouts/ClienteLayout.vue"
        ),
    children: [
        {
            path: "/user-home",
            name: "home-view",
            component: () =>
                import(
                    /* webpackChunkName: 'home' */ "../components/Home.vue"
                ),
        },
        {
            path: "product/:id",
            name: "product-selected",
            component: () =>
                import(
                    /* webpackChunkName: 'product-selected' */ "../components/Product.vue"
                ),
        },
        {
            path: "favorites",
            name: "products-favorites",
            component: () =>
                import(
                    /* webpackChunkName: 'product-favorites' */ "../components/Favorites.vue"
                ),
        },
        {
            path: "history",
            name: "products-history",
            component: () =>
                import(
                    /* webpackChunkName: 'product-history' */ "../components/History.vue"
                ),
        },
        {
            path: "search",
            name: "product-search",
            component: () =>
                import(
                    /* webpackChunkName: 'product-search' */ "../components/ProductSearch.vue"
                ),
        },
    ],
};

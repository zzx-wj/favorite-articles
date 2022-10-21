export default {
  antd: {
    configProvider: {
      dark: false,
      compact: false,
    },
    // themes
    dark: false,
    // compact: true,
    // babel-plugin-import
    import: true,
    // less or css, default less
    style: "less",
    // shortcut of `configProvider.theme`
    // use to configure theme token, antd v5 only
    // theme: {},
  },
  npmClient: "pnpm",
  apiRoute: {
    //启动api路由
    platform: "vercel",
  },
  routes: [
    { path: "/", component: "Index/index" },
    { path: "/detail/:id", component: "ArticleDetail/index" },
    { path: "/edit/:id", component: "EditArticle/index" },
    { path: "/login", component: "Login" },
    { path: "/post", component: "Post" },
  ],
  tailwindcss: {}, //启动插件
  model: {},
  initialState: {},
  request: {
    dataField: "",
  },
  //plugins：在node_modules下@umijs/plugins/dist下可获知name
  plugins: [
    "@umijs/plugins/dist/tailwindcss",
    "@umijs/plugins/dist/initial-state",
    "@umijs/plugins/dist/model",
    "@umijs/plugins/dist/request",
    "@umijs/plugins/dist/antd",
  ],
  alias: {
    "@": "/src",
  },
};

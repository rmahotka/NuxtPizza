// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL || "http://localhost:3000/api",
    },
  },
  app: {
    head: {
      title: "NuxtPizza",
    },
  },
  components: {
    dirs: [
      {
        path: "~/components",
        pathPrefix: false,
        // global: true,
      },
      {
        path: "~/components/shared",
        pathPrefix: false,
        // prefix: 'shared',
        // global: true,
      },
    ],
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/google-fonts",
    "@nuxt/eslint",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@prisma/nuxt",
  ],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  googleFonts: {
    families: {
      Nunito: {
        wght: "400..900",
      },
    },
  },
  pinia: {
    storesDirs: ["./stores/**"],
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        moduleResolution: "node",
      },
    },
  },
});

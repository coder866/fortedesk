import vue from '@vitejs/plugin-vue';
export default ({ command }) => ({
    base: command === "serve" ? "" : "/build/",
    publicDir: "fake_dir_so_nothing_gets_copied",
    build: {
        outDir: "public/build",
        rollupOptions: {
            input: ["resources/js/app.js"],
        },
    },
    server: {
        strictPort: true,
        port: 3001
    },
    // resolve: {
    //     alias: {
    //         "@": path.resolve(__dirname, "resources/js/src/"),
    //         "@themeConfig": path.resolve(
    //             __dirname,
    //             "resources/js/themeConfig.js"
    //         ),
    //         "@core": path.resolve(__dirname, "resources/js/src/@core"),
    //         "@validations": path.resolve(
    //             __dirname,
    //             "resources/js/src/@core/utils/validations/validations.js"
    //         ),
    //         "@axios": path.resolve(__dirname, "resources/js/src/libs/axios"),
    //     },
    // },
     plugins: [vue()],
});

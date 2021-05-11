# React App for testing Module Federation inside of Angular 11

[The shell application repo](https://github.com/jrsimoneau/client-hr)

1. Created a simple app, and using the Webpack ModuleFederationPlugin:
    ```
    new ModuleFederationPlugin({
      name: "simple_component",
      filename: "remoteEntry.js",
      exposes: {
        "./SimpleComponent": "./src/SimpleComponent",
      },
      shared: ["react", "react-dom"],
    }),
    ```

const path = require("path")
// const BabelRcPlugin = require('@jackwilsdon/craco-use-babelrc');
const addPath = dir => path.join(__dirname,dir);
module.exports = {
    webpack: {
        alias: {
            "@": addPath("src"),
            "@components": addPath("src/components")
        },

    },
    // plugins: [
    //   { plugin: BabelRcPlugin },
    // ],
    // babel:{  
    //   plugins: [
    //   ["@babel/plugin-proposal-decorators", { legacy: true }]
    //   ],
    //   "presets": [
    //     [
    //       "@babel/preset-react",
    //       {
    //         "throwIfNamespace": false
    //       }
    //     ]
    //   ],
      
    //   }

    
  
}

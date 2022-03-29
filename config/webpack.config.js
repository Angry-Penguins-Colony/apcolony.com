import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const withReport = process.env.npm_config_withReport;

plugins: [
    withReport ? new BundleAnalyzerPlugin() : '',
];

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: babel - loader,
                    options: {
                        presets: [
                            ['es2015', { modules: false }]
                        ]
                    }
                }
            }
        ]
    }
};
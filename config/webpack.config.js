import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const withReport = process.env.npm_config_withReport;

plugins: [
    withReport ? new BundleAnalyzerPlugin() : '',
];
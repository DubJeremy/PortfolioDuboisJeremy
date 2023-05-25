module.exports = {
	reactStrictMode: true,
	webpack: (config, { dev, isServer }) => {
		useFileSystemPublicRoutes: false;
		if (!dev && !isServer) {
			const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
			config.plugins.push(
				new BundleAnalyzerPlugin({
					analyzerMode: 'static',
					reportFilename: 'bundle-report.html',
					openAnalyzer: false,
				})
			);
		}
		return config;
	},
};

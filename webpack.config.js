const path = require( 'path' );
const {CleanWebpackPlugin} = require( 'clean-webpack-plugin' );
const HTMLWebpackPlugin = require( 'html-webpack-plugin' );
const CopyPlugin = require( 'copy-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

const filename = ext => isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`;

const jsLoaders = () => {
    const loaders = [
        {
            loader: 'babel-loader',
            options: {
                preset: ['@babel/preset-env']
            }
        }
    ];
    if (isDev) {
        loaders.push('eslint-loader')
    }
    return loaders
};

module.exports = {
    context: path.resolve( __dirname, 'app' ),
    mode: 'development',
    entry: ['@babel/polyfill', './main.js'],
    output: {
        filename: filename( 'js' ),
        path: path.resolve( __dirname, 'dist' )
    },
    resolve: {
        //extensions allow us don't write .js .css etc postfix
        extensions: ['.js'],
        //alias replace '../../../../index.js to @/index.js
        alias: {
            '@': path.resolve( __dirname, 'app' ),
            '@core': path.resolve( __dirname, 'app/core' )
        }
    },
    devtool: isDev ? 'source-map' : false,
    devServer: {
        port: 3000,
        hot: isDev
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin( {
            template: 'index.html',
            minify: {
                removeComments: isProd,
                collapseWhitespace: isProd
            }
        } ),
        new CopyPlugin( [
            {
                from: path.resolve( __dirname, './app/flags' ),
                to: path.resolve( __dirname, 'dist/img' )
            }
        ] ),
        new MiniCssExtractPlugin( {
            filename: filename( 'css' ),

        } ),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev,
                            reloadAll: true
                        }
                    },
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: '/\.js$',
                exclude: /node_modules/,
                use: jsLoaders(),

            }
        ]
    }

};

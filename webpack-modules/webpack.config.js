module.exports = {
    context: __dirname + '/src',

    entry: {
        home: './home',
        product: './product'
    },

    output: {
        path: __dirname + '/dist',
        publicPath: 'dist/',
        filename: '[name].js'
    },

    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.(svg|eot|ttf|woff|woff2|jp?g|gif|png)$/,
                loader: 'file'
            }
        ]
    }
};
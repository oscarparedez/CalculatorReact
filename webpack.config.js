module.exports = {
    mode: 'development',
    devServer: {
        contentBase: 'dist',
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /.(jsx?)$/,
                use: ['babel-loader'],
              },
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader'],
              },
        ]
    }  
}

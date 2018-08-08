import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../client/webpack.config.js';

import { register } from './admin/register';

const app = express();
const centerRegiter = new register();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler, {
    hot:true,
    publicPath: webpackConfig.output.publicPath,
    noInfo:true
}));
app.use(webpackHotMiddleware(compiler));

app.get('/api/center', (req,res) => {
    res.send(centerRegiter.getAllCenter());
});

app.post('/api/center', (req,res) => {
    console.log('get sth');
    const center = req.body;
    centerRegiter.registerCenter(center);
    const resp = {status:'done', msg:'เก็บข้อมูลเรียบร้อย'};
//    const resp = {status:'error', msg:'ข้อมูลซ้า'};
    res.send(resp);
});

app.get('/*', (req, res)=> {
    res.sendFile(path.join(__dirname, './index.html'));
});
app.listen(3000);

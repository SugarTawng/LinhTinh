/**
 * Created by SugarTawng on 9/11/2022
 */
// CORS related  http://stackoverflow.com/questions/7067966/how-to-allow-cors-in-express-nodejs
module.exports = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, HEAD, PATCH, OPTIONS');
    res.header('Access-Control-Expose-Headers', 'Content-Length, X-Access-Token');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, Content-Length, Content-Language, X-Requested-With, Range, Origin, X-Access-Token');

    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    } else {
        if(process.env.RUN_MODE !== 'PROD'){
            let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
            console.log(fullUrl);
        }
        return next();
    }
};

/*
*  Explained by SugarTawng on 18/5/2023:
* Header01: allow every req from anywhere
* Header 02: allow to send cookies content
* Header 03: allow methods
* Header 04: allow type of properties header
* If method is `Options`, dev is testing for this middleware
* If run_mode is `PROD` console the full Url
* */
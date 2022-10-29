Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@Hikkywannafly 
Hikkywannafly
/
Hikky-HealthCare
Public
Code
Issues
Pull requests
2
Actions
Projects
Wiki
Security
2
Insights
Settings
Hikky-HealthCare/src/middleware/auth.verifyToken.js /
@Hikkywannafly
Hikkywannafly v.0.0.7.2: fix authv2
Latest commit 0b15ea3 on 7 Aug
 History
 1 contributor
54 lines (49 sloc)  1.61 KB

import jwt from 'jsonwebtoken';
import { ACCESS_TOKEN_LIFE } from '../config/index';
const roles = ['admin', 'user', 'doctor'];
const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers['authorization'];
        // const refreshToken = req.cookies.refreshToken;
        if (token) {
            const accessToken = token.split(" ")[1];
            jwt.verify(accessToken, process.env.ACCESS_TOKEN_LIFE, (err, user) => {
                if (err) {
                    return res.status(403).json("Token is not valid!");
                }
                req.user = user;
                console.log('>>check req.user', req.user);
                next();
            });
        } else {
            return res.status(401).json("You're not authenticated");
        }
    }
    catch (err) {
        console.log(`error from verify token`, err.message);
        return res.status(500).json({ message: err.message });
    }

};

const verifyRoleUser = (req, res, next) => {
    verifyToken(req, res, () => {
        if (roles.includes(req.user.role)) {
            console.log('wellcome to our system');
            next();
        }
        return res.status(403).json('You are not authorized to access this route');
    })
}

const verifyTokenAndUserAuthorization  = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id|| 'user'.includes(req.user.role)) {
          next();
        } else {
          res.status(403).json("You're not allowed to do that!");
        }
      });

}

module.exports = {
    verifyToken,
    verifyRoleUser,
    verifyTokenAndUserAuthorization,
};
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Hikky-HealthCare/auth.verifyToken.js at maintain-branch · Hikkywannafly/Hikky-HealthCare
1

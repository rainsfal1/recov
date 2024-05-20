"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserContext = exports.UserContextProvider = exports.UserContext = void 0;
var react_1 = require("react");
var UserContext = (0, react_1.createContext)({});
exports.UserContext = UserContext;
var getInitialStateValueFromCookie = function () {
    var cookies = Object.fromEntries(document.cookie.split(";").map(function (cookie) { return cookie.trim().split("="); }));
    var isLoggedInCookie = cookies.loggedIn;
    var userTypeCookie = cookies.userType;
    var tokenCookie = cookies.token;
    console.log("checking the cookies initial values", JSON.stringify({
        isLoggedInCookie: isLoggedInCookie,
        userTypeCookie: userTypeCookie,
        tokenCookie: tokenCookie,
    }));
    return {
        loggedIn: isLoggedInCookie,
        userType: userTypeCookie,
        token: tokenCookie,
    };
};
function UserContextProvider(_a) {
    var children = _a.children;
    var initialState = getInitialStateValueFromCookie();
    var _b = (0, react_1.useState)(initialState.loggedIn === 'true' ? true : initialState.loggedIn === 'false' ? false : undefined), loggedIn = _b[0], setLoggedIn = _b[1];
    var _c = (0, react_1.useState)(initialState.userType), userType = _c[0], setUserType = _c[1];
    var _d = (0, react_1.useState)(initialState.token), token = _d[0], setToken = _d[1];
    (0, react_1.useEffect)(function () {
        // Update browser cookies when logged-in state or user type changes
        document.cookie = "loggedIn=".concat(loggedIn, ";");
        document.cookie = "userType=".concat(userType, ";");
        document.cookie = "token=".concat(token, ";");
    }, [loggedIn, userType, token]);
    return (react_1.default.createElement(UserContext.Provider, { value: { loggedIn: loggedIn, userType: userType, setLoggedIn: setLoggedIn, setUserType: setUserType, token: token, setToken: setToken } }, children));
}
exports.UserContextProvider = UserContextProvider;
function useUserContext() {
    return react_1.default.useContext(UserContext);
}
exports.useUserContext = useUserContext;

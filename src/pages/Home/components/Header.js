"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var optionItems_1 = require("../../../../public/optionIcons/optionItems");
var PageIcon_1 = require("../../../../public/pageIcon/PageIcon");
var button_1 = require("../../../../@/components/ui/button");
var toggle_1 = require("../../../../@/components/ui/toggle");
var react_1 = require("react");
var userContext_1 = require("../../../context/userContext");
var Header = function () {
    var _a = (0, react_1.useState)(false), darkMode = _a[0], setDarkMode = _a[1];
    var setLoggedIn = (0, userContext_1.useUserContext)().setLoggedIn;
    var setToken = (0, userContext_1.useUserContext)().setToken;
    (0, react_1.useEffect)(function () {
        if (darkMode) {
            document.body.classList.add("dark");
        }
        else {
            document.body.classList.remove("dark");
        }
    }, [darkMode]);
    var handleLogout = function () {
        setLoggedIn(false);
        setToken("");
    };
    var toggleDarkMode = function () {
        setDarkMode(!darkMode);
    };
    var handleBellClick = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    }); };
    return (react_1.default.createElement("header", { className: "flex flex-col items-center justify-between sm:flex-row ".concat(darkMode ? "dark" : "") },
        react_1.default.createElement("div", null,
            react_1.default.createElement("div", { className: "flex items-center sm:text-left" },
                react_1.default.createElement(PageIcon_1.PageIcon, { className: "h-24 w-24 mr-4" }),
                " ",
                react_1.default.createElement("h1", { className: "text-5xl text-left font-bold ".concat(darkMode ? "text-gray-100" : "text-gray-900") },
                    "Welcome to Lost & Found",
                    react_1.default.createElement("p", { className: "text-2xl mt-2 ".concat(darkMode ? "text-gray-400" : "text-gray-600") }, "We're here to help you find what you've lost.")))),
        react_1.default.createElement("div", { className: "flex items-center space-x-5 mt-4 sm:mt-0" },
            react_1.default.createElement(toggle_1.Toggle, { "aria-label": "Toggle dark mode", className: "w-20 h-14 ".concat(darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"), variant: "outline", onClick: toggleDarkMode },
                react_1.default.createElement(optionItems_1.MoonIcon, { className: "w-full " })),
            react_1.default.createElement(button_1.Button, { className: "h-14 ".concat(darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"), variant: "outline", onClick: handleBellClick },
                react_1.default.createElement(optionItems_1.BellIcon, { className: "inline-block w-8 h-8 mr-1" })),
            react_1.default.createElement(button_1.Button, { className: "h-14 ".concat(darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"), variant: "outline", onClick: handleLogout },
                react_1.default.createElement(optionItems_1.LogOutIcon, { className: "inline-block w-8 h-8 mr-2" }),
                react_1.default.createElement("span", { className: "text-lg" }, "Logout")))));
};
exports.Header = Header;

"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.AccountDetails = void 0;
var react_1 = require("react");
var card_1 = require("../../../../@/components/ui/card");
var label_1 = require("../../../../@/components/ui/label");
var input_1 = require("../../../../@//components/ui/input");
var button_1 = require("../../../../@/components/ui/button");
var userContext_1 = require("../../../context/userContext");
var AccountDetails = function () {
    var token = (0, userContext_1.useUserContext)().token;
    var _a = (0, react_1.useState)(""), username = _a[0], setUsername = _a[1];
    var _b = (0, react_1.useState)({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    }), form = _b[0], setForm = _b[1];
    var getInfo = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/v1/getUserDetails", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "".concat(token),
                            },
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log("Data being printed", data);
                    setUsername(data.email); // Update the username state here
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Failed to fetch user info", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        getInfo();
    }, []);
    (0, react_1.useEffect)(function () {
        setForm(function (prevForm) { return (__assign(__assign({}, prevForm), { name: username, email: username })); });
    }, [username]);
    var _c = (0, react_1.useState)({
        name: "",
        password: "",
        confirmPassword: "",
    }), errors = _c[0], setErrors = _c[1];
    var handleInputChange = function (e) {
        var _a;
        setForm(__assign(__assign({}, form), (_a = {}, _a[e.target.id] = e.target.value, _a)));
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        var isValid = true;
        var errors = {
            name: "",
            password: "",
            confirmPassword: "",
        };
        if (!form.name || /[^a-zA-Z0-9 ]/g.test(form.name)) {
            isValid = false;
            errors.name =
                "Name must not be empty and contain only alphanumeric characters and spaces";
        }
        if (form.password.length < 8) {
            isValid = false;
            errors.password = "Password must be at least 8 characters long";
        }
        if (form.password !== form.confirmPassword) {
            isValid = false;
            errors.confirmPassword = "Passwords do not match";
        }
        setErrors(errors);
        if (isValid) {
            var updatePassword = function () { return __awaiter(void 0, void 0, void 0, function () {
                var response, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, fetch("http://localhost:3000/api/v1/updatePassword", {
                                    method: "PATCH",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify({ password: form.password, token: token }),
                                })];
                        case 1:
                            response = _a.sent();
                            if (response.ok) {
                                // Password updated successfully
                                console.log("Password updated");
                            }
                            else {
                                // Handle error response
                                console.error("Failed to update password");
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            error_2 = _a.sent();
                            // Handle network error
                            console.error("Network error", error_2);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); };
            updatePassword();
        }
        // Submit form
    };
    return (<form onSubmit={handleSubmit}>
        <card_1.Card>
          <card_1.CardContent className="grid py-12 gap-6">
            <div className="grid gap-2">
              <label_1.Label htmlFor="name" className="text-xl">
                Email
              </label_1.Label>
              <input_1.Input value={form.name} onChange={handleInputChange} id="name" className="text-xl py-6 pl-2" readOnly/>
              {errors.name && <div className="text-red-500">{errors.name}</div>}
            </div>
            <div className="grid gap-2">
              <label_1.Label htmlFor="password" className="text-xl">
                Password
              </label_1.Label>
              <input_1.Input value={form.password} onChange={handleInputChange} id="password" type="password" className="text-xl py-6 pl-2"/>
              {errors.password && (<div className="text-red-500">{errors.password}</div>)}
            </div>
            <div className="grid gap-2">
              <label_1.Label htmlFor="confirmPassword" className="text-xl">
                Confirm Password
              </label_1.Label>
              <input_1.Input value={form.confirmPassword} onChange={handleInputChange} id="confirmPassword" type="password" className="text-xl py-6 pl-2"/>
              {errors.confirmPassword && (<div className="text-red-500">{errors.confirmPassword}</div>)}
            </div>
          </card_1.CardContent>
          <card_1.CardFooter>
            <button_1.Button type="submit" className="ml-auto w-64 h-20 bg-gray-950 text-stone-50 text-2xl transition-colors duration-500 ease-in-out transform hover:bg-gray-800">
              Save Changes
            </button_1.Button>
          </card_1.CardFooter>
        </card_1.Card>
      </form>);
};
exports.AccountDetails = AccountDetails;

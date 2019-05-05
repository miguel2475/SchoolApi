"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
/* GET home page. */
exports.index = (req, res) => {
    let languages = [
        {
            language: 'Spanish'
        },
        {
            language: "French"
        },
        {
            langauge: "German"
        }
    ];
    res.json(languages);
};
exports.users = (req, res) => {
    let users = [
        new user_1.default('James Coonce', 'jcoonce', 'james@none.com'),
        new user_1.default('Jim Coonce', 'jimcoonce', 'jim@none.com'),
        new user_1.default('Norman', 'jcoonce', 'norman@none.com'),
    ];
    res.json(users);
};
exports.create = (req, res) => {
    let user = new user_1.default(req.body.name, req.body.username, req.body.email);
    res.json(user);
};

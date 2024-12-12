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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("./config");
const middleware_1 = require("./middleware");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// signup
// Todo: ZOD, Hash, crash
app.post("/api/v1/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const username = req.body.username;
        const password = req.body.password;
        yield db_1.UserModel.create({
            username: username,
            password: password
        });
        res.status(200).json({
            message: "User signed Up"
        });
    }
    catch (error) {
        res.json({
            message: error.message
        });
    }
}));
// signin
app.post("/api/v1/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    const existingUser = yield db_1.UserModel.findOne({
        username: username,
        password: password
    });
    try {
        if (existingUser) {
            const token = jsonwebtoken_1.default.sign({
                id: existingUser._id
            }, config_1.JWT_PASSWORD);
            res.json({
                token: token
            });
        }
        else {
            res.status(403).json({
                message: "Incorrect credentials"
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            message: error.message
        });
    }
}));
// Post Content
app.post("/api/v1/content", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const link = req.body.link;
    const type = req.body.type;
    try {
        yield db_1.ContentModel.create({
            link,
            type,
            // @ts-ignore
            userId: req.userId
        });
        res.json({
            message: "Content added"
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            message: error.message
        });
    }
}));
// fetching all data 
app.get("/api/v1/content", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // @ts-ignore
        const userId = req.userId;
        const content = yield db_1.ContentModel.find({
            userId
        }).populate("userId", "username"); //foreign key  and select
        res.json({
            content
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            // @ts-ignore
            message: error.message
        });
    }
}));
// deleting
app.delete("/api/v1/content", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contentId = req.body.contentId;
    try {
        yield db_1.ContentModel.deleteMany({
            _id: contentId,
            // @ts-ignore
            userId: req.userId
        });
        res.json({
            message: "Delete Successful", contentId
        });
    }
    catch (error) {
        res.json({
            message: error.message
        });
    }
}));
// sharable link
app.post("/api/v1/brain/share", () => {
});
// fetch user share details about
app.get("/api/v1/brain/:shareLink", () => {
});
// defining port
app.listen(4000, () => {
    console.log("server is start port Number is : 4000");
});

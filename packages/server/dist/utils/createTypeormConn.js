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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
exports.createTypeormConn = () => __awaiter(void 0, void 0, void 0, function* () {
    const connectionOptions = yield typeorm_1.getConnectionOptions(process.env.NODE_ENV);
    return process.env.NODE_ENV === "production"
        ? typeorm_1.createConnection(Object.assign(Object.assign({}, connectionOptions), { url: process.env.DATABASE_URL, entities: [User_1.User], name: "default" }))
        : typeorm_1.createConnection(Object.assign(Object.assign({}, connectionOptions), { name: "default" }));
});
//# sourceMappingURL=createTypeormConn.js.map
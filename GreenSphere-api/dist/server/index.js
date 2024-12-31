"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createPlant_1 = __importDefault(require("./routes/createPlant"));
const getPlants_1 = __importDefault(require("./routes/getPlants"));
const deletePlant_1 = __importDefault(require("./routes/deletePlant"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.json({ message: 'teste com typescript' });
});
app.use(express_1.default.json());
app.use("/", getPlants_1.default);
app.use("/register", createPlant_1.default);
app.use("/", deletePlant_1.default);
app.listen(3000);

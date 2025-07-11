"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello, world!');
});
app.get('/about', (req, res) => {
    res.send('About page');
});
app.post('/echo', (req, res) => {
    res.json({ received: req.body });
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

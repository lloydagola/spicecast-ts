"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Button_1 = __importDefault(require("@mui/material/Button"));
const App = () => {
    return <div className='App'>
        <react_router_dom_1.BrowserRouter>
            <react_router_dom_1.Routes>
                <react_router_dom_1.Route path="/" element={<Home />}/>
                <react_router_dom_1.Route path="/about" element={<About />}/>
                <react_router_dom_1.Route path="/contact" element={<Contact />}/>
            </react_router_dom_1.Routes>
        </react_router_dom_1.BrowserRouter>
    </div>;
};
const Home = () => {
    return <>
        <Button_1.default variant="contained">
            Home sweet home
        </Button_1.default>
    </>;
};
const About = () => {
    return <>I know all about that"</>;
};
const Contact = () => {
    return <>the smoking gun</>;
};
exports.default = App;
//# sourceMappingURL=App.js.map
var config = require('../../loaders/example.json');
import {checkLogin} from "./login";

checkLogin("test", "badpass");

document.write("<h1>Welcome!</h1>");

console.log(config.app_loaded_msg);

console.log("app loaded");
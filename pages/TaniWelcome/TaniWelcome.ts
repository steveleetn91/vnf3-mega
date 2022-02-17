import HTMLPageInterFace from 'vnnative3-webview/dist/HTMLPage'
import VnNative3HTMLElement from 'vnnative3-webview/dist/HTMLElement/index';
import './TaniWelcome.scss';
import TaniWelcomeStateInterface from './TaniWelcome.State.Interface';
import VnNative3Location from 'vnnative3-location/dist/index';
import header from '../../components/header/header';
const packageJson = require('../../package.json');
export default class TaniWelcome implements HTMLPageInterFace {
    state : TaniWelcomeStateInterface = {
        title : "Vn Native Framework 3",
        slogan : "Cross platforms - Version " + packageJson.version,
        header : header(), 
        homePage : (new VnNative3Location).redirect.goUrl('/',[])
    }; 
    constructor() {}      
    public beforeRender() : void {}  
    public afterRender() : void {}     
    public render() : string { 
        return (new VnNative3HTMLElement).head(this.state).next(() => {
            console.log("Hello 2 I'm next action ! You can use a lots of actions ");
        }).make(require('./TaniWelcome.html').default,this.state); 
    }  
}              
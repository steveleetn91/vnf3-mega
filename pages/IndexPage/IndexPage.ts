import HTMLPageInterFace from 'vnnative3-webview/dist/HTMLPage'
import VnNative3HTMLElement from 'vnnative3-webview/dist/HTMLElement/index';
import './IndexPage.scss';
import IndexPageStateInterface from './IndexPage.State.Interface';
import VnNative3Location from 'vnnative3-location/dist/index';
import header from '../../components/header/header';
import VnNativeOsIndex from "vnnative-3-os/dist/index";
const packageJson = require('../../package.json');
export default class IndexPage implements HTMLPageInterFace {
    state : IndexPageStateInterface = {
        title : "Vn Native Framework 3",
        slogan : "Cross platforms - Version " + packageJson.version,
        header : header(), 
        examplePageUrl : (new VnNative3Location).redirect.goUrl('/page/example',[]),
        apps : [{
            icon : require("../../assets/images/booking.png").default,
            url : (new VnNative3Location).redirect.goUrl("/page/booking-app",[]),
            title: "Booking"
        },{
            icon : require("../../assets/images/welcome.png").default,
            url : (new VnNative3Location).redirect.goUrl("/page/welcome-app",[]),
            title: "Welcome"
        }]
    }
    constructor() {}      
    public beforeRender() : void {}  
    public afterRender() : void {
        
    }     
    public render() : string { 
        return (new VnNative3HTMLElement).head(this.state).next(() => {
            console.log("Hello 2 I'm next action ! You can use a lots of actions ");
        }).make(require('./IndexPage.html').default,this.state); 
    }  
    public setAppsLinks() : void {
        let os : VnNativeOsIndex = new VnNativeOsIndex;
        for( let i =0; i< this.state.apps.length;i++ ){
            
        } 
    }
}              
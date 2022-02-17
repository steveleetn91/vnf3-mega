export default class RouterConfig {
    config(){
        return [
            {
                url:"/",
                name:"IndexPage"
            },
            {
                url:"/index.html",
                name:"IndexPage"
            },
            {
                url:"/page/booking-app",
                name:"TaniBooking"
            },
            {
                url:"/page/welcome-app",
                name:"TaniWelcome"
            }
        ]
    }
}
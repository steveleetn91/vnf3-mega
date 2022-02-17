export default interface IndexPageStateInterface {
    title : string;
    slogan: string;
    examplePageUrl : string;
    header : string;
    apps : Array<{
        icon : string,
        url: string,
        title : string
    }>
}
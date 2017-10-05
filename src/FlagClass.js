export class FlagClass {
    static get isEnabled(){
        return process.env.NODE_ENV !== "production";
    }
}
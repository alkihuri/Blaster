import GameConfig from "../Core/GameConfig";

export class ServiceContainer {


    public config: GameConfig; 

    constructor(GameConfig: GameConfig) {
        if (GameConfig) { 
            this.config = GameConfig;
        }
    }



    private services = new Map<string, any>();

    public register<T>(key: string, instance: T) {
        // log(`Registering service: ${key}`);
        console.log(key + " is registred!");
        
        this.services.set(key, instance);
    }

    public resolve<T>(key: string): T {
        const service = this.services.get(key);
        if (!service) {
            throw new Error(`Service not found: ${key}`);
        }
        return service as T;
    }

     
}

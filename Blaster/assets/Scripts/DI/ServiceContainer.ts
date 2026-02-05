export class ServiceContainer {
    private services = new Map<string, any>();

    register<T>(key: string, instance: T) {
        this.services.set(key, instance);
    }

    resolve<T>(key: string): T {
        const service = this.services.get(key);
        if (!service) {
            throw new Error(`Service not found: ${key}`);
        }
        return service as T;
    }
}


export class ManagerBase {
	protected container: any;
	protected initialized: boolean = false;

	constructor(container?: any) {
		this.container = container;
	}

	/** Called after the manager is constructed and registered in the container. */
	init(): void {
		this.initialized = true;
	}

	/** Clean up resources, listeners, timers, etc. */
	destroy(): void {
		this.initialized = false;
	}

	/** Optional per-frame update hook. */
	update?(dt: number): void;
}

export default ManagerBase;

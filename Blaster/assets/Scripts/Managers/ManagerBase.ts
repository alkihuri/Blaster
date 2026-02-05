 
const {ccclass, property} = cc._decorator;
@ccclass
export default class ManagerBase  extends cc.Component {
	protected container: any;
	protected initialized: boolean = false;

	constructor(container?: any) {
		super();
		this.container = container;
	}	
 
	init(): void {
		this.initialized = true;
	}
 
	destroy(): boolean {
		super.onDestroy();
		this.initialized = false;
		return true;
	}
  
}
 

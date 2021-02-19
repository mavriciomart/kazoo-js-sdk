declare class MemoryStorage {
    state: Map<string, any>;
    constructor();
    set(key: string, value: any): void;
    get(key: string): any;
    delete(key: string): void;
}
export default MemoryStorage;

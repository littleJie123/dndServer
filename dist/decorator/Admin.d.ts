/**
 * @file Admin decorator
 */
/**
 * Admin decorator.
 * This is a class decorator that creates a subclass of the target class
 * and overrides the `_checkParam` method.
 *
 * @param target The class to be decorated.
 * @returns A new class that extends the target class.
 */
export declare function Admin(): <T extends {
    new (...args: any[]): any;
}>(target: T) => {
    new (...args: any[]): {
        [x: string]: any;
        _checkParam(param: any): Promise<any>;
    };
} & T;

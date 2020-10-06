import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Plugin Demo
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { PluginDemo } from '@ionic-native/plugin-demo';
 *
 *
 * constructor(private pluginDemo: PluginDemo) { }
 *
 * ...
 *
 *
 * this.pluginDemo.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class MiniCalculatorOriginal extends IonicNativePlugin {
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    coolMethod(arg1: string): Promise<any>;
}

export declare const MiniCalculator: MiniCalculatorOriginal;
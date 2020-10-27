declare namespace _default {
    export function debug(): void;
    export { broadcast };
    export { getWidth };
    export { getHeight };
    export { getSize };
    export { getScrollPosition };
    export { getVisibility };
    export { getOrientation };
    export const debounce: any;
    export const throttle: any;
}
export default _default;
/**
 * Viewport size.
 */
export type Size = {
    height: number;
    width: number;
};
/**
 * Scroll position.
 */
export type ScrollPosition = {
    /**
     * - `document.body.scrollHeight`
     */
    height: number;
    /**
     * - `document.body.scrollWidth`
     */
    width: number;
    /**
     * - `window.pageXOffset || window.scrollX`
     */
    left: number;
    /**
     * - `window.pageYOffset || window.scrollY`
     */
    top: number;
};
/**
 *
 * @param {string} eventType
 * @param {object} data
 * @param {EventTarget} target
 */
declare function broadcast(eventType: string, data: object, target: EventTarget): void;
/**
* Get the viewport width.
* @param {boolean} ignoreScrollbars [false] - set to true to discount scrollbar width
* @return {number}
*/
declare function getWidth(ignoreScrollbars: boolean): number;
/**
* Get the viewport height.
* @param {boolean} ignoreScrollbars [false] - set to true to discount scrollbar height.
* @return {number}
*/
declare function getHeight(ignoreScrollbars: boolean): number;
/**
 * Viewport size.
 * @typedef {Object} Size
 * @property {number} height
 * @property {number} width
 */
/**
* Get the viewport width and height.
* @param {boolean} ignoreScrollbars [false] - set to true to discount scrollbar width/height.
* @return {Size}
*/
declare function getSize(ignoreScrollbars: boolean): Size;
/**
 * Scroll position.
 * @typedef {Object} ScrollPosition
 * @property {number} height - `document.body.scrollHeight`
 * @property {number} width - `document.body.scrollWidth`
 * @property {number} left - `window.pageXOffset || window.scrollX`
 * @property {number} top - `window.pageYOffset || window.scrollY`
 */
/**
 * @return {ScrollPosition}
 */
declare function getScrollPosition(): ScrollPosition;
/**
 * @return {boolean} - true if the viewport is visible
 */
declare function getVisibility(): boolean;
/**
 * @return {string} - 'portrait' or 'landscape'
 */
declare function getOrientation(): string;

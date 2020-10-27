declare namespace _default {
    export function debug(): void;
    export { listenTo };
    export { stopListeningTo };
    export { setThrottleInterval };
    export const getOrientation: () => string;
    export const getSize: (ignoreScrollbars: boolean) => import("./src/utils.js").Size;
    export const getScrollPosition: () => import("./src/utils.js").ScrollPosition;
    export const getVisibility: () => boolean;
}
export default _default;
/**
 * Start listening for an event(s).
 * @param {string} eventType - The event to start listening for. One of `resize`, `scroll`, `orientation`, `visibility` or `all`.
 * @example
 * 		// Start listening for all events.
 * 		oViewport.listenTo('all');
 *
 * 		// It is now possible to listen for debounce o-viewport events such as `oViewport.orientation`.
 *      document.body.addEventListener('oViewport.orientation', function(event) {
 *      	console.log(event.type); // oViewport.orientation
 *      });
 */
declare function listenTo(eventType: string): void;
/**
 * Stop listening for an event(s).
 * @param {string} eventType - The event to stop listening for. One of `resize`, `scroll`, `orientation`, `visibility` or `all`.
 * @example
 * 		// Start listening for all events.
 * 		oViewport.listenTo('all');
 * 		// We're done. Stop listening for all events.
 * 		oViewport.stopListeningTo('all');
 */
declare function stopListeningTo(eventType: string): void;
/**
 *
 * @param {string} eventType - The type of event to throttle for this duration.
 * @param {number} interval - The duration to throttle in ms.
 * @example
 * 	   // throttle for different events at different durations
 *     setThrottleInterval('scroll', 100)
 *     setThrottleInterval('resize', 300)
 *     setThrottleInterval('orientation', 30)
 *     setThrottleInterval('visibility', 30)
 * 		// throttle all events at 30ms
 *     setThrottleInterval(30);
 */
declare function setThrottleInterval(eventType: string, interval: number, ...args: any[]): void;

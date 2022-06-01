/** @typedef {typeof __propDef.props}  BannerProps */
/** @typedef {typeof __propDef.events}  BannerEvents */
/** @typedef {typeof __propDef.slots}  BannerSlots */
export default class Banner extends SvelteComponentTyped<{
    background: any;
    translations: any;
    locale: any;
    tabs: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    tabs: {};
}> {
}
export type BannerProps = typeof __propDef.props;
export type BannerEvents = typeof __propDef.events;
export type BannerSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        background: any;
        translations: any;
        locale: any;
        tabs: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        tabs: {};
    };
};
export {};

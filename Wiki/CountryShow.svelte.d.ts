/** @typedef {typeof __propDef.props}  CountryShowProps */
/** @typedef {typeof __propDef.events}  CountryShowEvents */
/** @typedef {typeof __propDef.slots}  CountryShowSlots */
export default class CountryShow extends SvelteComponentTyped<{
    id: any;
    locale: any;
    country: any;
    translations: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CountryShowProps = typeof __propDef.props;
export type CountryShowEvents = typeof __propDef.events;
export type CountryShowSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        id: any;
        locale: any;
        country: any;
        translations: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};

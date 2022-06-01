/** @typedef {typeof __propDef.props}  CountryMapProps */
/** @typedef {typeof __propDef.events}  CountryMapEvents */
/** @typedef {typeof __propDef.slots}  CountryMapSlots */
export default class CountryMap extends SvelteComponentTyped<{
    id: any;
    locale: any;
    country: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CountryMapProps = typeof __propDef.props;
export type CountryMapEvents = typeof __propDef.events;
export type CountryMapSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        id: any;
        locale: any;
        country: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};

/** @typedef {typeof __propDef.props}  AlphabetShowProps */
/** @typedef {typeof __propDef.events}  AlphabetShowEvents */
/** @typedef {typeof __propDef.slots}  AlphabetShowSlots */
export default class AlphabetShow extends SvelteComponentTyped<{
    alphabet: any;
    bibles: any;
    locale: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type AlphabetShowProps = typeof __propDef.props;
export type AlphabetShowEvents = typeof __propDef.events;
export type AlphabetShowSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        alphabet: any;
        bibles: any;
        locale: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};

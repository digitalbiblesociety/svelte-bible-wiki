/** @typedef {typeof __propDef.props}  AlphabetListProps */
/** @typedef {typeof __propDef.events}  AlphabetListEvents */
/** @typedef {typeof __propDef.slots}  AlphabetListSlots */
export default class AlphabetList extends SvelteComponentTyped<{
    locale: any;
    alphabets: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type AlphabetListProps = typeof __propDef.props;
export type AlphabetListEvents = typeof __propDef.events;
export type AlphabetListSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        locale: any;
        alphabets: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};

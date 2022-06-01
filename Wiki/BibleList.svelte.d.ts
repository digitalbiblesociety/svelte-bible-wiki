/** @typedef {typeof __propDef.props}  BibleListProps */
/** @typedef {typeof __propDef.events}  BibleListEvents */
/** @typedef {typeof __propDef.slots}  BibleListSlots */
export default class BibleList extends SvelteComponentTyped<{
    translations: any;
    bibles: any;
    locale?: string;
    subset?: string;
    include_banner?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BibleListProps = typeof __propDef.props;
export type BibleListEvents = typeof __propDef.events;
export type BibleListSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        translations: any;
        bibles: any;
        locale?: string;
        subset?: string;
        include_banner?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};

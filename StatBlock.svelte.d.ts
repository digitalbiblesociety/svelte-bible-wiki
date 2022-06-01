/** @typedef {typeof __propDef.props}  StatBlockProps */
/** @typedef {typeof __propDef.events}  StatBlockEvents */
/** @typedef {typeof __propDef.slots}  StatBlockSlots */
export default class StatBlock extends SvelteComponentTyped<{
    stat_block: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type StatBlockProps = typeof __propDef.props;
export type StatBlockEvents = typeof __propDef.events;
export type StatBlockSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        stat_block: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};

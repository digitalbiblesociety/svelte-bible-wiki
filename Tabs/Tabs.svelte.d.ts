export const TABS: {};
/** @typedef {typeof __propDef.props}  TabsProps */
/** @typedef {typeof __propDef.events}  TabsEvents */
/** @typedef {typeof __propDef.slots}  TabsSlots */
export default class Tabs extends SvelteComponentTyped<{
    selectedTabIndex?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type TabsProps = typeof __propDef.props;
export type TabsEvents = typeof __propDef.events;
export type TabsSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        selectedTabIndex?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
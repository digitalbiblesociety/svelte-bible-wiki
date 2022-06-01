/** @typedef {typeof __propDef.props}  LanguageListProps */
/** @typedef {typeof __propDef.events}  LanguageListEvents */
/** @typedef {typeof __propDef.slots}  LanguageListSlots */
export default class LanguageList extends SvelteComponentTyped<{
    translations: any;
    languages: any;
    locale?: string;
    subset?: string;
    include_banner?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type LanguageListProps = typeof __propDef.props;
export type LanguageListEvents = typeof __propDef.events;
export type LanguageListSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        translations: any;
        languages: any;
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

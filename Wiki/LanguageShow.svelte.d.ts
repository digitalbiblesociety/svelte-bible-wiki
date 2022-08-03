/** @typedef {typeof __propDef.props}  LanguageShowProps */
/** @typedef {typeof __propDef.events}  LanguageShowEvents */
/** @typedef {typeof __propDef.slots}  LanguageShowSlots */
export default class LanguageShow extends SvelteComponentTyped<{
    locale: any;
    language: any;
    translations?: {
        title: string;
        subtitle: string;
        breadcrumbs: any[];
    };
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type LanguageShowProps = typeof __propDef.props;
export type LanguageShowEvents = typeof __propDef.events;
export type LanguageShowSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        locale: any;
        language: any;
        translations?: {
            title: string;
            subtitle: string;
            breadcrumbs: any[];
        };
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};

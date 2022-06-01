/** @typedef {typeof __propDef.props}  CountryListProps */
/** @typedef {typeof __propDef.events}  CountryListEvents */
/** @typedef {typeof __propDef.slots}  CountryListSlots */
export default class CountryList extends SvelteComponentTyped<{
    locale: any;
    subset: any;
    countries: any;
    translations?: {
        title: string;
        subtitle: string;
        breadcrumbs: any[];
    };
    include_banner?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CountryListProps = typeof __propDef.props;
export type CountryListEvents = typeof __propDef.events;
export type CountryListSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        locale: any;
        subset: any;
        countries: any;
        translations?: {
            title: string;
            subtitle: string;
            breadcrumbs: any[];
        };
        include_banner?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};

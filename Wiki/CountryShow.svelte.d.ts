/** @typedef {typeof __propDef.props}  CountryShowProps */
/** @typedef {typeof __propDef.events}  CountryShowEvents */
/** @typedef {typeof __propDef.slots}  CountryShowSlots */
export default class CountryShow extends SvelteComponentTyped<{
    locale: any;
    country: any;
    translations?: {
        population: string;
        languages: string;
        official_language: string;
        religion_primary: string;
        world_watch_list: string;
        persecution_type: string;
        overview: string;
    };
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
        locale: any;
        country: any;
        translations?: {
            population: string;
            languages: string;
            official_language: string;
            religion_primary: string;
            world_watch_list: string;
            persecution_type: string;
            overview: string;
        };
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};

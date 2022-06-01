/** @typedef {typeof __propDef.props}  ResourceListProps */
/** @typedef {typeof __propDef.events}  ResourceListEvents */
/** @typedef {typeof __propDef.slots}  ResourceListSlots */
export default class ResourceList extends SvelteComponentTyped<{
    locale: any;
    resources: any;
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
export type ResourceListProps = typeof __propDef.props;
export type ResourceListEvents = typeof __propDef.events;
export type ResourceListSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        locale: any;
        resources: any;
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

/** @typedef {typeof __propDef.props}  OrganizationListProps */
/** @typedef {typeof __propDef.events}  OrganizationListEvents */
/** @typedef {typeof __propDef.slots}  OrganizationListSlots */
export default class OrganizationList extends SvelteComponentTyped<{
    locale: any;
    organizations: any;
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
export type OrganizationListProps = typeof __propDef.props;
export type OrganizationListEvents = typeof __propDef.events;
export type OrganizationListSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        locale: any;
        organizations: any;
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

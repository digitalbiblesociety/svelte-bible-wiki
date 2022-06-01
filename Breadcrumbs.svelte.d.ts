/** @typedef {typeof __propDef.props}  BreadcrumbsProps */
/** @typedef {typeof __propDef.events}  BreadcrumbsEvents */
/** @typedef {typeof __propDef.slots}  BreadcrumbsSlots */
export default class Breadcrumbs extends SvelteComponentTyped<{
    locale: any;
    breadcrumbs: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BreadcrumbsProps = typeof __propDef.props;
export type BreadcrumbsEvents = typeof __propDef.events;
export type BreadcrumbsSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        locale: any;
        breadcrumbs: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
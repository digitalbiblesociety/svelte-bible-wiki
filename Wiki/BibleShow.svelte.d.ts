/** @typedef {typeof __propDef.props}  BibleShowProps */
/** @typedef {typeof __propDef.events}  BibleShowEvents */
/** @typedef {typeof __propDef.slots}  BibleShowSlots */
export default class BibleShow extends SvelteComponentTyped<{
    locale: any;
    bible: any;
    translations?: {
        link_sections: {
            print: {
                title: string;
            };
            pdf: {
                title: string;
            };
            web: {
                title: string;
            };
            audio: {
                title: string;
            };
            audio_web: {
                title: string;
            };
            app: {
                title: string;
            };
            archive: {
                title: string;
            };
            historic: {
                title: string;
            };
            cat: {
                title: string;
            };
            video_web: {
                title: string;
            };
        };
    };
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BibleShowProps = typeof __propDef.props;
export type BibleShowEvents = typeof __propDef.events;
export type BibleShowSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        locale: any;
        bible: any;
        translations?: {
            link_sections: {
                print: {
                    title: string;
                };
                pdf: {
                    title: string;
                };
                web: {
                    title: string;
                };
                audio: {
                    title: string;
                };
                audio_web: {
                    title: string;
                };
                app: {
                    title: string;
                };
                archive: {
                    title: string;
                };
                historic: {
                    title: string;
                };
                cat: {
                    title: string;
                };
                video_web: {
                    title: string;
                };
            };
        };
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};

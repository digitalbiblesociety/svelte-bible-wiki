declare const _default: ({
    type: string;
    geometry: {
        type: string;
        coordinates: number[][][];
    };
    properties: {
        geounit: string;
        country_id: string;
        center: number[];
    };
} | {
    type: string;
    geometry: {
        type: string;
        coordinates: number[][][][];
    };
    properties: {
        geounit: string;
        country_id: string;
        center: number[];
    };
})[];
export default _default;

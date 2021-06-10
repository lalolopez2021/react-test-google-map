import { types } from "../types/types";

export const addMarkerMap = (address, lat, lng) => ({
        type: types.add_marker,
        marker: {
            address,
            lat,
            lng
        }
})
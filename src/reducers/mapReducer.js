import { types } from "../types/types";

const initialState = {
    markers: [],
  };

export const mapReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.add_marker:
            return {
                markers: [...state.markers, action.marker]
            };
        default:
            return state;
    }
    
}
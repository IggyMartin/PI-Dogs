export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const CREATE_DOG = "CREATE_DOG";
export const GET_DOG = "GET_DOG";

export const getAllDogs = () => dispatch => (
    fetch('http://localhost:3001/dogs/')
    .then(res => res.json())
    .then(data => {
        dispatch({
            type: GET_ALL_DOGS,
            payload: data
        })
    })
);
import { useParams } from "react-router-dom";
import { getDetailsSuccess } from "./detailsSlice"

// const getParams = () => {
//     let params = useParams();
//     const roomId = parseInt(params.roomId);
//     console.log(roomId)
//     return roomId;
// }

const URL = "https://dummyjson.com/products/1"

export const fetchDetails = () => async (dispatch) => {
    // let params = useParams();
    // let roomId = params.roomId

    // const URL = `https://dummyjson.com/products/${roomId}`

    await fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        dispatch(getDetailsSuccess(data))
      })
      .catch((error) => {
        // dispatch(getDetailsFail())
        console.log(error);
      })
}
// import { useParams } from "react-router-dom";
import { getDetailsSuccess } from "./detailsSlice"

export const fetchDetails = (roomId) => async (dispatch) => {

    const URL = `https://dummyjson.com/products/${roomId}`

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
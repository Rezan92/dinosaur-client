import request from "superagent";
const baseUrl = "https://vast-harbor-27806.herokuapp.com";
export const GET_DINOSAUR = " GET_DINOSAUR";
export const GET_ONE = " GET_ONE";

const getDinosaurs = dinosaur => ({
  type: GET_DINOSAUR,
  payload: dinosaur
})

export const getDinosaur = () => (dispatch) => {
  request
    .get(`${baseUrl}/dinosaur`)
    .then(res => {
      dispatch(getDinosaurs(res.body))
    })
}

const getOneDino = dinosaur => ({
  type: GET_ONE,
  payload: dinosaur
})
export const getOneDinosaur = (id) => (dispatch) => {
  request
    .get(`${baseUrl}/dinosaur/${id}`)
    .then(res => {
      dispatch(getOneDino(res.body))
    })
}
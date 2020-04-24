import axios from 'axios';

export const START_REQUESTING_ITEMS = "START_REQUESTING_ITEMS";
export const FINISH_REQUESTING_ITEMS = "FINISH_REQUESTING_ITEMS";

const startRequestingItems = () => ({
  type: START_REQUESTING_ITEMS,
  isSubmitting: true,
  error: false
});

export const finishRequestingItems = (response) => ({
  type: FINISH_REQUESTING_ITEMS,
  isSubmitting: false,
  ...response
});

export const assignSupport = () => dispatch => {
  dispatch(startRequestingItems());

  axios.post("http://localhost:3001/assign-support")
      .then(response => {
        dispatch(finishRequestingItems({status: "success", data: response.data, error: false}));
      }).catch(error => {
    console.error(error);
    dispatch(finishRequestingItems({status: "failed", errorMessage: error, error: true}));
  });
};




export const selectCarpark =(id) =>{
  return {
    type: 'select_carpark',
    payload: id
  };
};
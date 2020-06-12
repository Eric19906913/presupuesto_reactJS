export const revisarPresupuesto = (pres, rest) =>{
  let clase;

  if((pres / 4) > rest){
    clase = "alert alert-danger";
  }else if((pres / 2) > rest){
    clase = "alert alert-warning";
  }else{
    clase = "alert alert-success";
  }
  return clase;
}

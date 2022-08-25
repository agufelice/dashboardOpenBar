import React from 'react';
import SmallCard from './SmallCard';

let productInDataBase = {
    color:   "primary",
    titulo: "Productos en Base Datos",
    valor: 24,
    icono: "fas fa-wine-bottle",
}

let amount ={
    color:   "success",
    titulo: "Total ventas",
    valor: 79,
    icono: "fas fa-dollar-sign",
}

let user = {
    color:   "warning",
    titulo: "Cantidad de usaurios",
    valor: 49,
    icono: "fas fa-user",
}

let cardProps = [productInDataBase,amount,user];


function ContentRowTop(){
    return (
        <React.Fragment>
      
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;
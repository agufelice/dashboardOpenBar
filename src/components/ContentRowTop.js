import React from 'react';
import SmallCard from './SmallCard';
import PropTypes from 'prop-types';
// import imagenFondo from '../assets/images/image-1660573443536.jpg';
// import imagenDestacado from '../assets/images/img-spirit-whisky-jhonnie-walker-black-label.jpg';
// import ContentRowProducts from './ContentRowProducts';


function ContentRowTop({ totalProducts }) {
	let productInDataBase = {
		color: "primary",
		titulo: "Productos en Base Datos",
		valor: totalProducts,
		icono: "fas fa-wine-bottle",
	}

	let amount = {
		color: "success",
		titulo: "Total ventas",
		valor: 79,
		icono: "fas fa-dollar-sign",
	}

	let user = {
		color: "warning",
		titulo: "Cantidad de usaurios",
		valor: 49,
		icono: "fas fa-user",
	}

	let cardProps = [productInDataBase, amount, user];
	return (
		<React.Fragment>
			<div className="row">
				{
					cardProps.map((producto, index) => {
						return <SmallCard  {...producto} key={index} />
					})
				}
			</div>


			{/* <div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">OpenBar Dashboard</h1>
					</div>					
					<ContentRowProducts />				
					<div className="row">
						
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto en la base de Datos</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 20 +'rem'}} src={imagenFondo} alt=" Frize "/>
									</div>
									<p>Frizze Evolution Blue 750ml</p>
									<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle del Producto</a>
								</div>
							</div>
						</div>
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Destacado del mes</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 13 +'rem'}} src={imagenDestacado} alt=" whisky-jhonnie "/>
									</div>
									<p>JW Black Label 750Ml</p>
									<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle del Producto</a>
								</div>
							</div>
						</div>	
					</div>			
				</div> */}

		</React.Fragment>
	)

}

ContentRowTop.propTypes = {
	totalProducts: PropTypes.number
}

ContentRowTop.defaultProps = {
	totalProducts: 0
}
export default ContentRowTop;
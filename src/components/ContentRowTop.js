import React from 'react';
import imagenFondo from '../assets/images/image-1660573443536.jpg';
import imagenDestacado from '../assets/images/img-spirit-whisky-jhonnie-walker-black-label.jpg';
import ContentRowProducts from './ContentRowProducts';
function ContentRowTop(){
    return(
        <React.Fragment>
				
				<div className="container-fluid">
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
				</div>
				
        </React.Fragment>
    )

}
export default ContentRowTop;
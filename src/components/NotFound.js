import React from 'react';
import imagen from '../assets/images/notfound.jpg'

function NotFound() {
    return (
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div>
                    <div className="text-center">
                        <h5 className="m-0 font-weight-bold text-gray-800">ERORR 404 PAGINA NO ENCONTRADA</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 20 + 'rem' }} src={imagen} alt=" notFound " />
                        </div>
                        <h4 className="m-0 font-weight-bold text-gray-800 text-center">ups! Vuleve a intentar con otra url</h4>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
export default NotFound;
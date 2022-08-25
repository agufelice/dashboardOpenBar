import React from "react";
import ProductRow from "./ProductRow";
class ProductList extends React.Component {

    state = {
        ProductList: [],
        // overOnH6: false
    }
	componentDidMount() {
        fetch('http://localhost:3001/api/products')
            .then(response => response.json())
            .then(products => {
				
                this.setState({
                    ProductList: products.data
                });
            })
            .catch(err => console.log(err));
    }

    render (){
        return(
            <div className="card shadow mb-4">
                <h1 className="h3 mb-2 text-gray-800">Productos en Base de Datos</h1>
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Brand</th>
                                            <th>Precio</th>
                                            <th>Stock</th>
                                            <th>Descuento</th>                                              
										</tr>
									</thead>
									<tfoot>
										<tr>
                                        
										</tr>
									</tfoot>
									<tbody>
									{
                                    this.state.ProductList.map((product,index)=>
                                    <ProductRow product={product} key={index} />
									
									)
                                }
									</tbody>
								</table>
							</div>
						</div>
					</div>
        )
    }
}

export default ProductList;
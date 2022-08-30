import React from "react";
import ProductListTable from "./ProductListTable";
import ProductRow from "./ProductRow";
class ProductList extends React.Component {

    state = {
        productList: [],
       totalProducts: 0
    }
	componentDidMount() {
        fetch('http://localhost:3001/api/products')
            .then(response => response.json())
            .then(products => {
				
                this.setState({
                    productList: products.data,
                    totalProducts: products.meta.total
                });
            })
            .catch(err => console.log(err));
    }

    render (){
        return(
            <div className="card shadow mb-4">
                <h1 className="h3 mb-2 text-gray-800">Productos en Base de Datos</h1>
						<div className="card-body">
							<ProductListTable products={this.state.productList} />
						</div>
					</div>
        )
    }
}

export default ProductList;
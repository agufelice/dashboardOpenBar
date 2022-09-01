import React from 'react';
import SmallCard from './SmallCard';
import PropTypes from 'prop-types';

function ContentRowTop({ totalProducts, totalUsers }) {
	let productInDataBase = {
		color: "primary",
		titulo: "Productos en Base Datos",
		valor: totalProducts,
		icono: "fas fa-wine-bottle",
	}

	let amount = {
		color: "success",
		titulo: "Total ventas",
		valor: 0,
		icono: "fas fa-dollar-sign",
	}

	let user = {
		color: "warning",
		titulo: "Cantidad de usuarios",
		valor: totalUsers,
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


		</React.Fragment>
	)

}

ContentRowTop.propTypes = {
	totalProducts: PropTypes.number,
	totalUsers: PropTypes.number
}

ContentRowTop.defaultProps = {
	totalProducts: 0,
	totalUsers: 0
}
export default ContentRowTop;
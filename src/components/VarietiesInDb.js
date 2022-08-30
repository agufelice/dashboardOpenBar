import React from 'react';
import Variety from './Variety';

class VarietiesInDb extends React.Component {
    state = {
        varietiesList: [],
        overOnH6: false
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/varieties')
            .then(response => response.json())
            .then(varieties => {
                this.setState({
                    varietiesList: varieties.data
                });
            })
            .catch(err => console.log(err));
    }

    handleMouseOver = () => {
        this.setState({ overOnH6: !this.state.overOnH6 });
    }


    render() {
        return (
            <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 onClick={this.handleMouseOver} className="m-0 font-weight-bold text-gray-800">Variedades en Base de Datos</h6>
                        </div>
                        <div className={`card-body ${this.state.overOnH6 && 'bg-secondary'}`}>
                            <div className="row">
                                {
                                    this.state.varietiesList.map((variety, index) => {
                                        return <Variety variety={variety.name} key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }

}

export default VarietiesInDb;
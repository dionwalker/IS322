import React from 'react';
import {connect} from 'react-redux';

class ClientList extends React.Component{

    renderList(){
        let clientArr=this.props[this.props.ClientList];

        return clientArr.map(char =>{
            return(
                <li classname="list-group-item" key={char.id}>
                    {char.name}-{char.balance}
                    <button type='button'
                        onClick={() => { }}
                        classname="btn btn-danger"
                        style={{float:'right'}}>
                            Withdraw
                        </button>
                </li>
            );
        });
    }

    render(){
        let ClientList=this.renderList();

        return(
            <div className="bank" style={{padding: '10px'}}>
                <h3>{this.props.title}</h3>
                <ul classname="list-group" style={{marginTop: '15px'}}></ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        withdraws: state.clients.withdraws,
        deposits: state.clients.deposits
    }
};

export default connect(mapStateToProps)(ClientList);
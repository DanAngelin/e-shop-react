import React from 'react';
import {connect } from 'react-redux';
import { filterPrice0999, filterPrice102999, filterPrice303999, filterPrice407999, filterPriceNoFilter } from '../redux/actions/filterPrice';

class BaseListSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
      }


    render() {
        return( 
            <div>
                <form>
                    <label className='mr-2'><input type="radio" name="filter-price" onChange={() => this.props.filterPrice0999()}/>€ 0-9.99</label>
                    <label className='mr-2'><input type="radio" name="filter-price" onChange={() => this.props.filterPrice102999()}/>€ 10-29.99</label>
                    <label className='mr-2'><input type="radio" name="filter-price" onChange={() => this.props.filterPrice303999()}/>€ 30-39.99</label>
                    <label className='mr-2'><input type="radio" name="filter-price" onChange={() => this.props.filterPrice407999()}/>€ 40-79.99</label>
                    <label className='mr-2'><input type="radio" name="filter-price" defaultChecked onChange={() => this.props.filterPriceNoFilter()}/>No Filter</label>
                </form>
            </div>
        )
}

}


const mapDispatchToProps = (dispatch) => {
    return {
      filterPrice0999: () => dispatch(filterPrice0999()),
      filterPrice102999: () => dispatch(filterPrice102999()),
      filterPrice303999: () => dispatch(filterPrice303999()),
      filterPrice407999: () => dispatch(filterPrice407999()),
      filterPriceNoFilter: () => dispatch(filterPriceNoFilter())
    }
  }

export default connect(null, mapDispatchToProps)(BaseListSidebar);

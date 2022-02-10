import React from 'react';
import {connect } from 'react-redux';
import { filterPrice } from '../../redux/FilterPrice/FilterPriceActions';
import './BaseListSidebar.css'

class BaseListSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          filter0999: 'FILTER_0_999',
          filter102999: 'FILTER_10_2999',
          filter303999: 'FILTER_30_3999',
          filter407999: 'FILTER_40_7999',
          noFilter: 'NO_FILTER'
        }
      }

      // RESET PRICE FILTER
      componentDidMount() {
        const resetFilter = () => this.props.filterPrice(this.state.noFilter);
        resetFilter()
      }

    render() {
        return( 
            <div className='filter_price'>
              <h4>Price Filter:</h4>
                <form>
                    <label className='mr-2'><input type="radio" name="filter-price" onChange={() => this.props.filterPrice(this.state.filter0999)}/>€ 0-9.99</label>
                    <label className='mr-2'><input type="radio" name="filter-price" onChange={() => this.props.filterPrice(this.state.filter102999)}/>€ 10-29.99</label>
                    <label className='mr-2'><input type="radio" name="filter-price" onChange={() => this.props.filterPrice(this.state.filter303999)}/>€ 30-39.99</label>
                    <label className='mr-2'><input type="radio" name="filter-price" onChange={() => this.props.filterPrice(this.state.filter407999)}/>€ 40-79.99</label>
                    <label className='mr-2'><input type="radio" name="filter-price" defaultChecked={this.state.noFilter} onChange={() => this.props.filterPrice(this.state.noFilter)}/>No Filter</label>
                </form>
            </div>
        )
}

}


const mapDispatchToProps = (dispatch) => {
    return {
      filterPrice: (type) => dispatch(filterPrice(type)),
    }
  }


export default connect(null, mapDispatchToProps)(BaseListSidebar);

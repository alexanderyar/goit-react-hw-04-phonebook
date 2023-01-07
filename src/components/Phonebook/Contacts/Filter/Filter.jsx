

import PropTypes from 'prop-types'


    
export const  Filter = ({filterFunc,inputValue}) => {

        return (
        <label htmlFor="filter">
            <input name="filter" type="text" value={inputValue} onChange={filterFunc} />
        </label>
       
    )
    }
    


Filter.propTypes = {
    inputValue: PropTypes.string,
    filterFunc: PropTypes.func
}
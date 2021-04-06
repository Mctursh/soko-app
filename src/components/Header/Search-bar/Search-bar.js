import React from 'react'

function Search() {
    return (
        <div>
            <div class="input-group">
                <div class="form-outline">
                    <input type="search" id="form1" class="form-control" placeholder="Search for products..." />
                </div>
                <button type="button" class="btn btn-primary">
                    <i class="fas fa-search"></i>
                </button>
          </div>
        </div>
    )
}

export default Search

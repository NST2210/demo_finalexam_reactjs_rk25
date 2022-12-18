import React, { Component } from 'react';

function SearchForm (props) {
    
    let {search_key, onHandleSearch} = props // Khai báo State này để lưu giá trị cần tìm kiếm
    let ids = "";
// Xử lý khi search_key thay đổi khi nhập liệu, lấy lại State lưu lại
let    onChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        ids = value;
        console(ids)
    }
// Xử lý sự kiện khi onClick vào nút Search, truyền lại giá trị State: search_key ra bên App.js để xử lý
let    handleSearch = (id) =>{
        // console.log(this.state.search_key)
        // this.props.onSearchForm(this.state.search_key)
        onHandleSearch(id);
    }

    
        
        return (        
            <div className="row">
                <div className="input-group">
                    <input 
                    type="search"
                     className="form-control rounded" 
                     id="input-search-department"
                     placeholder="Search by id account" 
                     aria-label="Search"
                     aria-describedby="search-addon" 
                     name="search_key"
                     value= {search_key}
                     onChange ={onChange}
                     ></input>
                    <button type="button" 
                            className="btn btn-outline-primary"
                            onClick = {() => handleSearch(ids)}>search</button>
                </div>
            </div>
        );
    
}

export default SearchForm;



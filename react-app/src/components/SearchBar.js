import React, { Component } from 'react';
export default class SearchBar extends Component {
    state = {
        searchValue: localStorage.getItem('searchValue'),
    };
    render() {
        return (React.createElement("div", { className: "relative mt-20 flex justify-center" },
            React.createElement("input", { className: "w-54 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent border shadow-sm border-slate-300 ", type: "text", placeholder: "Search", value: this.state.searchValue, onChange: (event => this.setState({ searchValue: event.target.value })) }),
            React.createElement("button", { className: "top-0 right-0 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50", onClick: () => localStorage.setItem('searchValue', this.state.searchValue) }, "Search")));
    }
}

import React, { Component } from 'react';

class BackToTop extends Component {
    backToTop(){
        document.documentElement.scrollIntoView({behavior: "smooth"});
    }
    render() {
        return (
            <div onClick={this.backToTop} className="back--to--top">
                <i className="fas fa-arrow-up" />
            </div>
        );
    }
}

export default BackToTop;
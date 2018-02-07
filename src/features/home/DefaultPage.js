import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {RedditList} from './';
import {counterPlusOne, counterMinusOne, resetCounter, fetchRedditReactjsList} from './redux/actions';
import Navigation from "./Navigation.js";
import Hero from "./Hero.js";
import TitleList from "./TitleList.js";

export class DefaultPage extends Component {
    constructor(){
        super();
        this.state={
            searchTerm:"",
            searchUrl:"",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }
    // static propTypes = {
    //     home: PropTypes.object.isRequired,
    //     actions: PropTypes.object.isRequired,
    // };


    //input handle change
    handleChange(e){
        console.log(e.target.value)
        this.setState({
            searchTerm: e.target.value
        })
    }

    //handle enter button after inputing in the input button
    handleKeyUp(e){
        console.log(this.state.searchTerm)
        if(e.key==='Enter' && this.state.searchTerm !==''){
            var searchUrl= "search/multi?query=" + this.state.searchTerm + "&api_key=" + this.apiKey;
            console.log(searchUrl)
            this.setState({searchUrl:searchUrl})
        }
    }


    render() {

        return (
            <div className="home-default-page">
                <header className="Header">
                {/*Logo*/}
                <Navigation/>
                <div id="search" className="Search">
                    <input onKeyUp={this.handleKeyUp} onChange={this.handleChange} type="search"
                           placeholder="Search for a title..." defaultValue={this.state.searchTerm}/>
                </div>
                </header>
                <Hero/>

                <TitleList title="Search Results" url={this.state.searchUrl} />
                <TitleList title="Top TV picks for Jack" url='discover/tv?sort_by=popularity.desc&page=1' />
                <TitleList title="Trending now" url='discover/movie?sort_by=popularity.desc&page=1' />
                <TitleList title="Most watched in Horror" url='genre/27/movies?sort_by=popularity.desc&page=1' />
                <TitleList title="Sci-Fi greats" url='genre/878/movies?sort_by=popularity.desc&page=1' />
                <TitleList title="Comedy magic" url='genre/35/movies?sort_by=popularity.desc&page=1' />
            </div>
        );
    }
}

/* istanbul ignore next */
// function mapStateToProps(state) {
//     return {
//         home: state.home,
//     };
// }

/* istanbul ignore next */
// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators({counterPlusOne, counterMinusOne, resetCounter, fetchRedditReactjsList}, dispatch)
//     };
// }
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(DefaultPage);

export default DefaultPage;
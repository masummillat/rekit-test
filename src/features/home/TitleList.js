import React, { Component } from 'react';
import ListToggle from "./ListToggle.js";

export default class TitleList extends Component {

  constructor(){
    super();
    this.state={
      apiKey:'87dfa1c669eea853da609d4968d294be',
      data:[],
      mounted:false,
    }
  }

  loadContent(){
    var requestUrl = 'https://api.themoviedb.org/3/' + this.props.url + '&api_key=' + this.state.apiKey;
    fetch(requestUrl).then((response)=>{
      return response.json();
    }).then((data)=>{
      this.setState({data : data});
    }).catch((err)=>{
      console.log("There has been an error");
    });
  }

  componentDidMount(){
    if(this.props.url !==''){
      this.loadContent();
      this.setState({
        mounted:true,
      })
    }
  }

  componentWillReceiveProps(nextProps){

    if (nextProps.url !== this.props.url && nextProps.url !==''){
        this.setState({
          mounted:true,
          url:nextProps.url,
        },()=>this.loadContent())
    }

  }
  static propTypes = {

  };

  render() {
    var titles='';
    if(this.state.data.results){
      titles = this.state.data.results.map((title,i)=>{
        if(i<5){
          var name = '';
          var backDrop = 'http://image.tmdb.org/t/p/original' + title.backdrop_path;
          if(!title.name) {
            name = title.original_title;
          } else {
            name = title.name;
          }
          return  <Item key={title.id} title={name} score={title.vote_average} overview={title.overview} backdrop={backDrop} />

        }else{
          return (<div key={title.id}></div>);
        }
      })
    }
    return (
        <div ref="titlecategory" className="TitleList" data-loaded={this.state.mounted}>
          <div className="Title">
            <h1>{this.props.title}</h1>
            <div className="titles-wrapper">
              {titles}
            </div>
          </div>
        </div>
    );
  }
}


const Item = ({backdrop, title, score,overview}) => (
    <div className="Item" style={{backgroundImage: 'url(' + backdrop + ')'}} >
      <div className="overlay">
        <div className="title">{title}</div>
        <div className="rating">{score} / 10</div>
        <div className="plot">{overview}</div>
        <ListToggle />
      </div>
    </div>
)
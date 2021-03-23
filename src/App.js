import React, {Component} from 'react';
import './App.css';

const marked=require("marked");

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      markdown:'# Welcome to my project. \n ## Here is some **git command**. \n \n  To initiate a repository \'git init\'  \n To add file to your repo \'git add .\'  \n  To commit \'git commit -m "message"\'  \n   \'git remote add origin "url of your repo"\'  \n  \'git push origin master\' \n \'git pull origin master\'  \n  To check status on GitHub use the command `git status`.  \n   You can do other things in GitHub such as reset. \n```\nx = 2\ny = 2\nz = x + y\nprint(z)\n5\n ```  \n* Satyam Gupta  \n[British Computer Society](https://www.bcs.org) \n\nThere are blockquotes\n> Thank you for your kind words\n\nImage Links  \n ![Google Logo](http://www.google.com/images/errors/logo_sm.gif)\n## Computing  \n* Word Processing - include **Clipart Images, Headers and Footers** \n* Spreadsheets - include **Charts and Formula** \n* Presentations - include **Slide Layouts** '
    };
    //bindind this
    this.update=this.update.bind(this);
  }
//Updating markdown on change of form

update=function(event){
  this.setState({markdown:event.target.value});
}

render(){
  const {markdown}=this.state;
  return(
    <div className="container">
      <div>
      <h1>Markdown Previewer</h1>
      <div>
      <h2>Editor</h2>
      <textarea id="editor"  rows="15" cols="40" className="form-control" value={markdown}
      onChange={this.update}/>
      </div>
      </div>
      <div >
        <h2>Previewer</h2>
        <div id="preview" dangerouslySetInnerHTML = {{__html:marked(markdown)}}>
        </div>
      </div>
    </div>
    );
}
}


export default App;

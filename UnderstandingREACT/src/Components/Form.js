import React from 'react';

export default class form extends React.Component {

    state = {
        title : 'JavaScript',
        text : 'JavaScript is a programming language',
        library : 'React',
        isAwesome : true
    }

    handleChange = (e) => { 
        if(e.target.name === 'text'){
            console.log(e.target.value);  
            this.setState({
                text: e.target.value
            })
        } 
        else if(e.target.name === 'title'){
            console.log(e.target.value);
            this.setState({
                title: e.target.value
            })
        } 
        else if(e.target.name === 'library'){
            console.log(e.target.value);
            this.setState({
                library: e.target.value
            })
        }
        else if(e.target.name === 'isAwesome'){
            console.log(e.target.checked);
            this.setState({
                isAwesome: e.target.checked,
            })
        }
    }

    submitHandler = (e) => {
        const {title, text, library, isAwesome} = this.state;
        e.preventDefault();
        console.log(this.state);
        console.log(title, text, library, isAwesome);
    }
    render(){
        const {title, text, library, isAwesome} = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input name='title'
                    type="text" 
                    placeholder="Enter title" 
                    value= {title} 
                    onChange={this.handleChange}
                    />
                <br/>
                <br/>
                <textarea name="text" 
                value={text} 
                onChange={this.handleChange} />
                <br/>
                <br/>
                <select name='library' value = {library} onChange={this.handleChange} >
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                </select>
                <br/>
                <br/>
                <input type="checkbox" name="isAwesome" checked={isAwesome} onChange={this.handleChange} />
                <br/>
                <input type = "submit" value= "Submit" /> 
                </form>
            </div>
        );
    }
}
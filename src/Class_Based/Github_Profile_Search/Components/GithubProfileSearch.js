import React from "react";
import axios from "axios";
import {CLIENT_ID,CLIENT_SECRET} from "./Github.credentials";

class GithubProfileSearch extends React.Component{
    constructor(props){ 
      super(props);
      this.state={
        githubUsername:'',
        githubProfileInfo:{},
        githubReposInfo:[],
        errorMessage:''
      }
    };

    githubSearch=(e)=>{
        e.preventDefault();
        this.githubProfileInfo(this.state.githubUsername);
        this.githubReposInfo(this.state.githubUsername);

    };

    githubProfileInfo=async (githubUsername)=>{
        let dataURL=` https://api.github.com/users/${githubUsername}?client id=${CLIENT_ID}&client secret=${CLIENT_SECRET}`;
        await axios.get(dataURL).then((response)=>{
            this.setState({
                ...this.state,
                githubProfileInfo:response.data

            })
        })
        .catch((error)=>{this.setState({
            ...this.state,
            errorMessage:'error fetching profile data'

        })});

    };

    githubReposInfo=async (githubUsername)=>{
        let dataURL=` https://api.github.com/users/${githubUsername}/repos?client id=${CLIENT_ID}&client secret=${CLIENT_SECRET}`;
        await axios.get(dataURL).then((response)=>{
            this.setState({
                ...this.state,
                githubReposInfo:response.data

            })
        })
        .catch((error)=>{this.setState({
            ...this.state,
            errorMessage:'error fetching repo data'

        })});


    };


    render() {
        return (
            <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="h3 text-primary">Github Profile Search App</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatum. ipsum, dolor sit amet consectetur adipisicing elit. Sapiente corporis veritatis nulla cum ex praesentium eius optio placeat deserunt neque.</p>
                                <form className="form-inline" onSubmit={this.githubSearch}>
                                    <div className="form-group">
                                        <input
                                        name='githubUsername'
                                        value={this.state.githubUsername}
                                        onChange={e=>{this.setState({githubUsername:e.target.value})}}
                                         type="text" className="" placeholder="Github Username" />
                                    </div>
                                    <div className="form-group">
                                    <input type="submit" className="btn btn-primary btn-sm" value="Search" /> 
                                    </div>
                                     
                                </form>
                                <pre>{this.state.githubUsername}</pre>
                                <pre>{JSON.stringify(this.state.githubProfileInfo)}</pre>
                                <pre>{JSON.stringify(this.state.githubReposInfo)}</pre>
                                <pre>{this.state.errorMessage}</pre>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default GithubProfileSearch;
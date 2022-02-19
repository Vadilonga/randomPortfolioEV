import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Portfolio  from './Components/portfolio/Portfolio';
import { IUser } from './Interfaces/IUser';
import ServiceHelper from './Service/ServiceHelper';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { Spinner, SpinnerSize } from '@fluentui/react';
initializeIcons();

interface IStateApp{
  currentUser: IUser | undefined;
}

export default class App extends React.Component<{},IStateApp>{

  public async componentDidMount(){
      const currentUser: IUser | undefined = await ServiceHelper.getCurrentUser();
      this.setState({
        ...this.state,
        currentUser
      });
  }

  constructor(props:any){
    super(props);
    this.state={
      currentUser: undefined
    }
  }

  public render(){
    return(
      <div className="App">
        {this.state.currentUser?
          <Portfolio currentUser={this.state.currentUser}></Portfolio>
        :
        <Spinner className={"spinner"} size={SpinnerSize.large} />
        }
      </div>
    )
  }
}



import { Fragment,  Component } from "react";
import UsersContext from "../store/user-context";
import classes from "./UserFinder.module.css";
import Users from "./Users";


class UserFinder extends Component {
    static contextType=UsersContext;
    componentDidMount(){
        this.setState({
            filteredUsers:this.context.users
        })
    }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }
  searchChangeHandler = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };
  render() {
    return (
      <Fragment>
        <input
          type="search"
          className={classes.finder}
          onChange={this.searchChangeHandler.bind(this)}
        />
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}

export default UserFinder;

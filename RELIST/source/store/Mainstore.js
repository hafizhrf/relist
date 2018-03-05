import User from './user';
import Todo from './todo';
export default class Mainstore{
    user = new User(this);
    todo = new Todo(this);   
}
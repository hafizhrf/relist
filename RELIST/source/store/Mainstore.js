import User from './user';
import Todo from './todo';
import List from './list';
export default class Mainstore{
    user = new User(this);
    todo = new Todo(this);  
    list = new List(this); 
}
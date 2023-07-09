import './styles.scss';

import { RecoilRoot } from 'recoil';

import AddItemForm from './components/AddItemForm';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

export default function App() {
  return (
    <RecoilRoot>
      <div id="app">
        <h1 className="app-title">React & Recoil To-do List</h1>
        <AddItemForm />
        <TodoList />
        <Footer />
      </div>
    </RecoilRoot>
  );
}

import TodoList from './components/to-do-list/to-do-list';
import MusicPlayer from './components/music-player/music-player';
import './app-wrapper.css';
import PomodoroMain from './components/pomodoro/pomodoro-main';




function AppWrapper() {
  
  return (
  <div>
  
    <main style={{height: '52vh'}}><PomodoroMain/></main>
    <div>
      <MusicPlayer />
    </div>
    <div className='todo-app'>
      <TodoList />
    </div>
    
  </div>
    
  );
}

export default AppWrapper;

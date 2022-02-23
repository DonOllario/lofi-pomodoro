import TodoList from './components/to-do-list/to-do-list';
import MusicPlayer from './components/music-player/music-player';
import PomodoroMain from './components/pomodoro/pomodoro-main';

import './app-wrapper.css';



function AppWrapper() {
  
  return (
  <div>
    <div style={{height: '570px'}}>
      <PomodoroMain/>
    </div>
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

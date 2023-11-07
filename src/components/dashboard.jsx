import './dashboard.css';
import Sidebar from '../layout/Sidebar/Sidebar';
import Content from '../layout/Content/Content';

function dashboard() {
  return (
    <>
      <div className='dashboard'>
        <Sidebar />
        <Content />
      </div>
    </>
  )
}

export default dashboard

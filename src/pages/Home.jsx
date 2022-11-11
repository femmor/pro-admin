import { Sidebar } from '../components';
import '../styles/Home.scss';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">container</div>
    </div>
  );
};
export default Home;

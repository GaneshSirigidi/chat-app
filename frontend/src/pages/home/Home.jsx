import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex flex-col sm:flex-row sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <Sidebar className='sm:w-1/3' /> {/* Sidebar will take 1/3 of the width on small screens */}
            <MessageContainer className='sm:w-2/3' /> {/* MessageContainer will take 2/3 of the width on small screens */}
        </div>
	);
};
export default Home;

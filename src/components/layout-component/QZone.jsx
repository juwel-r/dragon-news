import swiming from './../../assets/swimming.png'
import classRoom from './../../assets/class.png'
import playground from './../../assets/playground.png'

const QZone = () => {
  return (
    <div className="bg-gray-200/70">
      <h1 className="text-xl font-semibold mt-7 mb-3 p-4">Find Us On</h1>
      <div className='p-4 space-y-4 flex flex-col
       justify-center items-center'>
        <img className='border border-dashed border-gray-400 p-1' src={swiming} alt="" />
        <img className='border border-dashed border-gray-400 p-1' src={classRoom} alt="" />
        <img className='border border-dashed border-gray-400 p-1' src={playground} alt="" />
      </div>
    </div>
  );
};

export default QZone;

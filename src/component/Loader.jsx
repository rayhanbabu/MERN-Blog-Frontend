import { RotatingLines } from 'react-loader-spinner'



function Loader() {
    return (
        <div>
            <p className='text-center'>
            <RotatingLines
      strokeColor="grey"
     strokeWidth="5"
     animationDuration="0.75"
     width="96"
    visible={true}
      />

            </p>
          
        </div>
    )
}

export default Loader

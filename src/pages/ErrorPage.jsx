import { Link } from 'react-router-dom'
import errorpage from '../assets/ErrrorPage.png'
export const ErrorPage = () => {
  return (
    <div className='container '>
      <img src={errorpage} className='img-fluid errorpage' />
      <p className='text-center  mt-3'>
      <Link to="/" className='btn btn-danger btn-sm'>Go to Home</Link></p>
    </div>
  )
}

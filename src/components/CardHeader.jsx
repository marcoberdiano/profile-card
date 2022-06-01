import cardbg from '../images/bg-pattern-card.svg';
const CardHeader = () => {
    return ( 
        <div className="card-bg-container">
                <img className='card-bg' src={cardbg} alt='cadrbg' />
        </div>
     );
}
 
export default CardHeader;
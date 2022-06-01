import profilepic from '../images/image-victor.jpg';
const CardBody = () => {
    return ( 
        <div className='card-body-container'>
                
                <div className='card-profile-img-container'>
                    <img className='card-profile-img' src={profilepic} alt='victor'/>
                </div>

                <div className='profile-info'>
                    <h1 className='profile-name'>Victor Crest</h1>
                    <p className='profile-age'>26</p>
                </div>
                
                <p className='card-city'>London</p>

            </div>
     );
}
 
export default CardBody;
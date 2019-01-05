import React from 'react' ;
import './imagelist.css' ;
import Image from './Image.js' ;

const ImageList = (props) => {
	const images = props.images.map( (image, i) => <Image key={i} url={image.urls.regular} desc={image.description} /> ) ;

	return (
		<div className="list">
			{images} 
		</div>
		) ;
}

export default ImageList ;

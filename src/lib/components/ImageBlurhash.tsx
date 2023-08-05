import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Blurhash } from 'react-blurhash';


export const ImageBlurhash = () => {



	const width: number = 600;
	const height: number = 333.33;

	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		console.log(loaded)
	}, [loaded])

	return (

		<motion.div
			style={{
				// width: width,
				// height: height,
				width: 500,
				height: 400,
			}}
			className="m-2 rounded-md "
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.3 }}
		>
			<motion.img
				initial={{ opacity: 0 }}
				animate={{ opacity: loaded ? 1 : 0 }}
				className='rounded-md'
				style={{
					width: width,
					height: height,
					display: !loaded ? 'none' : 'block'
				}}
				onLoadStart={() => {
					console.log('onLoadStart')
				}}
				src="https://firebasestorage.googleapis.com/v0/b/photo-log-94d7a.appspot.com/o/beer%2F462f9f0c-b635-4606-bdcc-9e4d14f1bbbb.jpeg?alt=media&token=ee8103e0-4ba6-47c8-8992-e2cb43ab2c76"
				onLoad={() => {
					setLoaded(true)
				}}
			/>
			<Blurhash

				style={{
					width: width,
					height: height,

				// width: 500,
				// height: 400,
					display: loaded ? 'none' : 'block'
				}}
				className="rounded-md overflow-hidden "
				hash="U5CuX;yG00k4-;xcbcIB00%w.hV#DhDOMy-="
			/>
		</motion.div>
	)
}

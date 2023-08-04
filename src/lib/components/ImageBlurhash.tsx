import { motion } from 'framer-motion';
import { Blurhash } from 'react-blurhash';

export const ImageBlurhash = () => {

	const width: number = 334;
	const height: number = 225;



	return (

		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.3 }}
		>
			<Blurhash
				// style={{ borderRadius: '10px', overflow: 'hidden'}}
				className="h-52 w-52 m-2 p-1 rounded-md overflow-hidden "
				hash="U5CuX;yG00k4-;xcbcIB00%w.hV#DhDOMy-="

			// width={400}
			// height={300}
			// resolutionX={32}
			// resolutionY={32}
			// punch={1}
			/>
			{/* <Image /> */}

		</motion.div>
	)
}

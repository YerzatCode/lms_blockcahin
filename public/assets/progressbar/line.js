const Line = ({ value }) => (
	<svg xmlns='http://www.w3.org/2000/svg' width={24} height={181} fill='none'>
		<rect width={24} height={181} fill='#F3F3F3' rx={12} />
		<rect width={24} height={value} fill='#50D177' rx={12} />
	</svg>
)
export default Line

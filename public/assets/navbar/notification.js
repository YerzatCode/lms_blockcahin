const Notification = ({ style }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		fill='none'
		className={style}>
		<g strokeWidth={2} clipPath='url(#a)'>
			<path
				stroke='#181818'
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M18 8A6 6 0 1 0 6 8c0 7-3 9-3 9h18s-3-2-3-9ZM13.73 21a1.999 1.999 0 0 1-3.46 0'
			/>
			<circle cx={19} cy={3} r={4} fill='red' stroke='#F7F8FA' />
		</g>
		<defs>
			<clipPath id='a'>
				<path fill='#fff' d='M0 0h24v24H0z' />
			</clipPath>
		</defs>
	</svg>
)
export default Notification

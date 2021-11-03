import React from 'react'
import Heading from '../Heading'
import TargetCard from './TargetCard'

import '../../style/target.scss'

const Target = () => {
	return (
		<div className="target section">
			<Heading
				text="ჩვენი მიზანია"
				image="images/target.svg"
			/>

			<div className="section-content">
				<TargetCard
					image="images/book.svg"
					text="ქართული ლიტერატურის შესწავლა და გააზრება გაგიადვილოთ"
				/>

				<TargetCard
					image="images/eye.svg"
					text="კონკრეტულ საკითხზე სხვადასხვა ხედვა მოგაწოდოთ"
				/>
				
				<TargetCard
					image="images/cloud.svg"
					text="ნაშრომები შევინახოთ და გავავრცელოთ"
				/>
				
				<TargetCard
					image="images/favicon.svg"
					text="წარუშლელი ნაკვალევი დავტოვოთ"
				/>
			</div>
		</div>
	)
}

export default Target
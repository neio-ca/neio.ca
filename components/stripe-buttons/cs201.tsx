
export function CS201PayButton() {
	return (<>
		<script async src="https://js.stripe.com/v3/buy-button.js"></script>
		{/* @ts-ignore */}
		<stripe-buy-button buy-button-id="buy_btn_1PEBu7P4ZMnctcmqsf5iBP3N" publishable-key="pk_live_51PCCatP4ZMnctcmqcXby8CI7376Yg3LdwCYtvpzLhY4whqGLlYDklodYzb8Hf1QFyFtM0PoOkZWVdFSXTBWAieUN00argIG7hc"></stripe-buy-button>
	</>)
}
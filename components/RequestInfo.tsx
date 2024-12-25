import { NameBadge } from "./Badge";

export function RequestInfo({
	title,
	rfqNo,
	requestor,
	expectedDeliveryDate,
}: {
	title: string;
	rfqNo: string;
	requestor: {
		name: string;
		designation: string;
		department: string;
	};
	expectedDeliveryDate: string;
}) {
	return (
		<div className="px-9 py-6 rounded-lg border border-gray-200 space-y-8">
			<hgroup className="flex items-center justify-between">
				<h2 className="text-gray-800 font-bold text-xl">
					Request Information
				</h2>
			</hgroup>
			<div className="flex justify-between items-start">
				<div className="w-[559px] flex items-center justify-between">
					<div className="space-y-4">
						<p className="font-medium text-base text-[#555E68]">
							Title
						</p>
						<p className="font-medium text-base text-[#555E68]">
							RFQ No
						</p>
						<p className="font-medium text-base text-[#555E68]">
							Requestor
						</p>
						<p className="font-medium text-base text-[#555E68]">
							Status
						</p>
						<p className="font-medium text-base text-[#555E68]">
							Expected delivery date
						</p>
					</div>

					<div className="space-y-4">
						<p className="font-medium text-base text-gray-700">
							{title}
						</p>
						<p className="font-medium text-base text-gray-700">
							{rfqNo}
						</p>
						<div className="flex gap-2 items-center">
							<NameBadge name={requestor?.name} />
							<svg
								width="6"
								height="6"
								viewBox="0 0 6 6"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle
									cx="3"
									cy="3"
									r="3"
									fill="#D9D9D9"
								/>
							</svg>
							<p className="text-base font-medium text-gray-400">
								{requestor?.designation}
							</p>
						</div>

						<p className="font-medium text-base text-gray-700">
							{requestor?.department}
						</p>
						<p className="font-medium text-base text-gray-700">
							{expectedDeliveryDate}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

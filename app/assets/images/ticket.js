import * as React from "react";
import Svg, {SvgProps, Defs, Path, ClipPath, Use, Text, Rect} from "react-native-svg";

function Ticket(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 400 145"
			{...props}
		>
			<Defs>
				<Path
					id="prefix__a"
					d="M372.6 16h-25.4c-1.7 4-5.7 6.8-10.3 6.8h-.3c-4.5-.1-8.3-2.9-10-6.8H33.1c-7.2 0-13 5.8-13 13v90.7c0 7.2 5.8 13 13 13h293.1c1.3-4.6 5.4-8 10.4-8.2h.3c5.1 0 9.4 3.5 10.8 8.2h24.9c7.2 0 13-5.8 13-13V29c0-7.2-5.9-13-13-13z"
				/>
			</Defs>
			<ClipPath id="prefix__b">
				<Use xlinkHref="#prefix__a" overflow="visible" />
			</ClipPath>
			<Path clipPath="url(#prefix__b)" fill="#4A94FF" d="M8.5 5.5h396v159H8.5z" />
		</Svg>
	);
}

export default Ticket;

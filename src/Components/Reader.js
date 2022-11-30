import React, { useRef, useState } from "react";
import { ReactReader, ReactReaderStyle } from "react-reader";
import Ebook from "../epubs/Pooh.epub";
import { Box } from "@mui/system";

export default function Reader() {
	const [location, setLocation] = useState(null);
	const [firstRenderDone, setFirstRenderDone] = useState(false);
	const renditionRef = useRef(null);
	const locationChanged = (epubcifi) => {
		// Since this function is also called on initial rendering, we are using custom state
		// logic to check if this is the initial render.
		// If you block this function from running (i.e not letting it change the page on the first render) your app crashes.

		if (!firstRenderDone) {
			setLocation(localStorage.getItem("book-progress")); // getItem returns null if the item is not found.
			setFirstRenderDone(true);
			return;
		}

		// This is the code that runs everytime the page changes, after the initial render.
		// Saving the current epubcifi on storage...
		localStorage.setItem("book-progress", epubcifi);
		// And then rendering it.
		setLocation(epubcifi); // Or setLocation(localStorage.getItem("book-progress"))
	};

	// hide react reader menu
	const style = {
		...ReactReaderStyle,
		menu: {
			...ReactReaderStyle.menu,
			display: "none",
		},
	};
	return (
		<Box
			style={{
				height: "100vh",
				maxWidth: "100%",
				marginBlock: "5rem",
				padding: "2rem",
				background: "rgb(242, 242, 242)",
			}}
		>
			<ReactReader
				location={location}
				locationChanged={locationChanged}
				url={Ebook}
				getRendition={(rendition) => (renditionRef.current = rendition)}
				style={style}
			/>
		</Box>
	);
}

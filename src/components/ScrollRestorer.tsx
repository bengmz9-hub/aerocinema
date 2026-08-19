"use client";

import { useEffect } from "react";

export function ScrollRestorer() {
	useEffect(() => {
		if (typeof window !== "undefined") {
			const savedScroll = sessionStorage.getItem("lastScrollY");
			if (savedScroll) {
				sessionStorage.removeItem("lastScrollY");
				window.scrollTo({
					top: parseInt(savedScroll, 10),
					behavior: "instant",
				});
			}
		}
	}, []);

	return null;
}

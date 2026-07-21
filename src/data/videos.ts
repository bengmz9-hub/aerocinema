export interface VideoItem {
	id: string;
	title: string;
	description: string;
	url: string;
	layout: "standard" | "tall" | "wide" | "large";
	duration: string;
}

export const portfolioData: Record<string, VideoItem[]> = {
	paisajes: [
		{
			id: "p1",
			title: "Costas Prohibidas",
			url: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c085fdbc2de4885827725514f9d29f4b&profile_id=165&oauth2_token_id=57447761",
			layout: "large",
			duration: "0:24",
			description: "Vuelo rasante sobre acantilados.",
		},
		{
			id: "p2",
			title: "Niebla en la Cúspide",
			url: "https://player.vimeo.com/external/435674703.sd.mp4?s=6f4afdee70d6f2afad57abcb2b8fa28b58a183d2&profile_id=165&oauth2_token_id=57447761",
			layout: "tall",
			duration: "0:15",
			description: "Amanecer entre nubes.",
		},
	],
	propiedades: [
		{
			id: "pr1",
			title: "Mansión Minimalista",
			url: "https://player.vimeo.com/external/409223701.sd.mp4?s=67d4ed5c6210f03541530933703ee40fa979f4c3&profile_id=165&oauth2_token_id=57447761",
			layout: "wide",
			duration: "0:22",
			description: "Arquitectura vista desde el aire.",
		},
	],
	eventos: [
		{
			id: "e1",
			title: "Festival de Luz",
			url: "https://player.vimeo.com/external/482348395.sd.mp4?s=6c2ef5352c6f1088926b010b9bdc7ad9fa960b7c&profile_id=165&oauth2_token_id=57447761",
			layout: "large",
			duration: "0:28",
			description: "Seguimiento dinámico de escenarios.",
		},
	],
};

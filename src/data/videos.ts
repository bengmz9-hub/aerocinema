export interface VideoItem {
  id: string;
  title: string;
  description: string;
  url: string;
  layout: 'standard' | 'tall' | 'wide' | 'large';
  duration: string;
}

export const portfolioData: Record<string, VideoItem[]> = {
  paisajes: [
    {
      id: 'p1',
      title: 'Costas Prohibidas',
      description: 'Vuelo rasante sobre acantilados del atlántico.',
      url: 'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c085fdbc2de4885827725514f9d29f4b&profile_id=165&oauth2_token_id=57447761',
      layout: 'large',
      duration: '0:24'
    },
    {
      id: 'p2',
      title: 'Niebla en la Cúspide',
      description: 'Amanecer en picos de Europa entre nubes.',
      url: 'https://player.vimeo.com/external/435674703.sd.mp4?s=6f4afdee70d6f2afad57abcb2b8fa28b58a183d2&profile_id=165&oauth2_token_id=57447761',
      layout: 'tall',
      duration: '0:15'
    },
    {
      id: 'p3',
      title: 'Horizonte Dorado',
      description: 'Luz crepuscular sobre campos de trigo.',
      url: 'https://player.vimeo.com/external/517602284.sd.mp4?s=d007b4af6b50af4972d73f150493af20beaf8d20&profile_id=165&oauth2_token_id=57447761',
      layout: 'wide',
      duration: '0:18'
    },
    {
      id: 'p4',
      title: 'Reflejos Glaciares',
      description: 'Simetría perfecta en lagos nórdicos.',
      url: 'https://player.vimeo.com/external/538568775.sd.mp4?s=b6fb3e743a6d71b312788e072b22b10dfd2366b5&profile_id=165&oauth2_token_id=57447761',
      layout: 'standard',
      duration: '0:30'
    }
  ],
  propiedades: [
    {
      id: 'pr1',
      title: 'Mansión Minimalista',
      description: 'Tomas interiores y exteriores fluidas en 4K.',
      url: 'https://player.vimeo.com/external/409223701.sd.mp4?s=67d4ed5c6210f03541530933703ee40fa979f4c3&profile_id=165&oauth2_token_id=57447761',
      layout: 'wide',
      duration: '0:22'
    },
    {
      id: 'pr2',
      title: 'Ático Vanguardista',
      description: 'Perspectiva aérea de terrazas urbanas.',
      url: 'https://player.vimeo.com/external/455646197.sd.mp4?s=4bfa85a6691c9b63435fa50f2ff47e24b341f531&profile_id=165&oauth2_token_id=57447761',
      layout: 'tall',
      duration: '0:12'
    }
  ],
  eventos: [
    {
      id: 'e1',
      title: 'Festival de Luz',
      description: 'Seguimiento dinámico de escenarios masivos.',
      url: 'https://player.vimeo.com/external/482348395.sd.mp4?s=6c2ef5352c6f1088926b010b9bdc7ad9fa960b7c&profile_id=165&oauth2_token_id=57447761',
      layout: 'large',
      duration: '0:28'
    }
  ]
};

import {env} from 'cloudflare:workers';
export function database(){if(!env.DB)throw Error('Dados temporariamente indisponíveis. Tente novamente.');return env.DB;}

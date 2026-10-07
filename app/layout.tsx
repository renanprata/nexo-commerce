import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'Nexo Commerce | Design para o seu dia',description:'Loja fictícia e demonstração de e-commerce, gestão e análise de dados. Projeto de portfólio de Renan Pratavieira Santos.',icons:{icon:'/favicon.svg'}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}

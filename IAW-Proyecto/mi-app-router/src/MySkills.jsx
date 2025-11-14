import { useParams } from 'react-router-dom';

export default function MySkills() {
  const { nombre } = useParams();
  return <h2>Sobre mi {nombre}</h2>;
}
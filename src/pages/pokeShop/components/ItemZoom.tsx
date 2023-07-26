import { useParams } from "react-router-dom";

export default function ItemZoom() {
  const { name } = useParams();
  return <div>{name}</div>;
}

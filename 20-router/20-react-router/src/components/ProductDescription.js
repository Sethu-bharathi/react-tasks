import { Link, useParams } from "react-router-dom";

function ProductDesciprition() {
  const params = useParams();
  return (
    <div>
      <h2>{params.id}</h2>
      <Link to=".." >Back</Link>
    </div>
  );
}

export default ProductDesciprition

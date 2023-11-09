import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const TelephoneDetail = () => {
  const { id } = useParams();
  const [TlpData, setTlpData] = useState({});
  useEffect(() => {
    fetch("http://localhost:8000/Telephone/" + id)
      .then((res) => res.json())
      .then((data) => {
        setTlpData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6">
        <div className="container">
          <div className="card row">
            <div className="card-title">
              <h2>Telephone Detail</h2>
            </div>
            {TlpData && (
              <div className="card-body">
                <img src={TlpData.image + "&" + TlpData.id} alt="student" />
                <div className="card-text">
                  <h3>
                    {" "}
                    {TlpData.name} - ({TlpData.id})
                  </h3>
                  <h4>Contact Detail:</h4>
                  <h4>brand: {TlpData.brand}</h4>
                  <h4>model: {TlpData.model}</h4>
                  <h4>price: {TlpData.price}</h4>
                  <h4>color: {TlpData.color}</h4>
                  <h4>image: {TlpData.image}</h4>
                </div>
                <Link className="btn btn-danger" to="/">
                  Back to Listing
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelephoneDetail;

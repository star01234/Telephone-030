import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const TelephoneList = () => {
  const [stdData, setStdData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8000/Telephone")
      .then((res) => res.json())
      .then((response) => {
        setStdData(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

   const loadEdit = (id) => {
     navigate("/Telephone/edit/" + id);
   };
   const loadDetail = (id) => {
     navigate("/Telephone/detail/" + id);
   };
   const removeTelephone = (id) => {
    if(window.confirm("Do you want to remove ?")){
     fetch("http://localhost:8000/Telephone/" + id, {
      method: "DELETE",
    })
    .then((res) => {
      alert("remove successfully");
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
      });
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Telephone List</h2>
        </div>
        <div className="card-body">
          <div className="btn">
            <Link to="/Telephone/create" className="btn btn-success">
              Add New (+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>brand</td>
                <td>model</td>
                <td>price</td>
                <td>color</td>
              </tr>
            </thead>
            <tbody>
              {stdData &&
                stdData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.brand}</td>
                    <td>{item.model}</td>
                    <td>{item.price}</td>
                    <td>{item.color}</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        onClick={() => {
                          loadEdit(item.id);
                        }}
                      >
                        Edit
                      </a>
                      <a
                        className="btn btn-danger"
                        onClick={() => {
                          removeTelephone(item.id);
                        }}
                      >
                        Remove
                      </a>
                      <a
                        className="btn btn-info"
                        onClick={() => {
                          loadDetail(item.id);
                        }}
                      >
                        Detail
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TelephoneList;

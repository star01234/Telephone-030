import { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';

const AddTelephone = () => {
  const [Telephone, setTelephone] = useState({
        brand: "",
        model: "",
        price: "",
        color: "",
        image: "https://source.unsplash.com/random/200x200/?portrait",

  });
  const navigate = useNavigate();
   const handleChange = (e) => {
    setTelephone({...Telephone, [e.target.name]: e.target.value});
   };
   const handleSubmit = (e) =>{
    e.preventDefault()
    const TelephoneData = {
        brand: Telephone.brand,
        model: Telephone.model,
        price: Telephone.price,
        color: Telephone.color,
        image: Telephone.image,

   };
   fetch("http://localhost:8000/Telephone",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify(TelephoneData)
   }).then(
    (res) =>{
      alert("Save sucessFully")
      navigate("/")
    }
   ).catch((err)=>{
    console.log(err);
   })
  }
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-title">
                <h2>Add new Telephone</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="brand">brand</label>
                      <input
                        type="text"
                        required
                        name="brand"
                        id="brand"
                        onChange={handleChange}
                        value={Telephone.brand}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="model">model</label>
                      <input
                        type="text"
                        required
                        name="model"
                        id="model"
                        onChange={handleChange}
                        value={Telephone.model}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="price">price</label>
                      <input
                        type="double"
                        required
                        name="price"
                        id="price"
                        onChange={handleChange}
                        value={Telephone.price}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="">color</label>
                      <input
                        type="string"
                        required
                        name="color"
                        id="color"
                        onChange={handleChange}
                        value={Telephone.color}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="image">image</label>
                      <input
                        type="text"
                        required
                        name="image"
                        id="image"
                        onChange={handleChange}
                        value={Telephone.image}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="sudmit">
                        Save
                      </button>
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


export default AddTelephone
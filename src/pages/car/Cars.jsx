import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const API_KEY = "ci_9ebdadebef0bd878d513ee248b7334ca5af7de507f8754020114075c";

  useEffect(() => {
    const fetchCars = async () => {
      try {

        const res = await fetch("https://xxxx.mockapi.io/cars");
        const data = await res.json();

        const carsWithImages = await Promise.all(
          data.map(async (car) => {
            try {
              const imgRes = await fetch(
                `https://api.carimagesapi.com/v1/images?make=${car.brand}`,
                {
                  headers: {
                    Authorization: `Bearer ${ci_9ebdadebef0bd878d513ee248b7334ca5af7de507f8754020114075c}`,
                  },
                }
              );

              const imgData = await imgRes.json();

              return {
                ...car,
                image: imgData[0]?.imageUrl || "https://via.placeholder.com/300",
              };
            } catch {
              return {
                ...car,
                image: "https://via.placeholder.com/300",
              };
            }
          })
        );

        setCars(carsWithImages);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCars();
  }, []);

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">🚗 Cars List</h2>

      <input
        className="form-control mb-4"
        placeholder="Search car..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && (
        <div className="text-center">
          <div className="spinner-border"></div>
        </div>
      )}

      <div className="row">
        {filteredCars.map((car) => (
          <div className="col-md-4 mb-4" key={car.id}>
            <div className="card h-100 shadow">
              <img src={car.image} className="card-img-top" />

              <div className="card-body">
                <h5>{car.name}</h5>
                <p>Brand: {car.brand}</p>
                <p className="text-danger fw-bold">${car.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cars;
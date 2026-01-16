import { useState } from "react";

const carsData = [
  {
    name: "Ferrari LaFerrari",
    year: 2023,
    price: "$140,000",
    engine: "V12 Hybrid",
    colors: {
      red: "https://pngimg.com/uploads/ferrari/ferrari_PNG102799.png",
      yellow: "https://pngimg.com/uploads/ferrari/ferrari_PNG102808.png",
      black: "https://pngimg.com/uploads/ferrari/ferrari_PNG102802.png",
    }
  },
  {
    name: "Lamborghini Aventador",
    year: 2022,
    price: "$310,000",
    engine: "V12",
    colors: {
      green: "https://static.vecteezy.com/system/resources/thumbnails/019/067/232/small_2x/sport-car-isolated-on-transparent-background-3d-rendering-illustration-free-png.png",
      orange: "https://pngimg.com/uploads/lamborghini/lamborghini_PNG10705.png",
      black: "https://pngimg.com/uploads/lamborghini/lamborghini_PNG10704.png",
    }
  }
];

export default function App() {
  const [selectedCar, setSelectedCar] = useState(carsData[0]);
  const [selectedColor, setSelectedColor] = useState(
    Object.values(carsData[0].colors)[0]
  );

  const changeCar = (car) => {
    setSelectedCar(car);
    setSelectedColor(Object.values(car.colors)[0]);
  };

  return (
    < div style={{
        background: "radial-gradient(circle at top, #111 0%, #050505 70%)",
        minHeight: "100%",
        height: "100%",
        width: "100%",
        color: "white",
        fontFamily: "Inter, Arial",
        display: "flex",
        flexDirection: "column"
      }}>


      {/* Navbar */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px"
      }}>
        <h2>CARBIDDER</h2>
        <img src="https://lh3.googleusercontent.com/rd-d/ALs6j_EWygFRzQspXYQohO6yPNOh8DthLc1cEJ-P2JtA3TxIRfj8mZ3GXrFZYmei5mmEANz1PpK8RzLNj2w2vXIxka-ki7Co6tZHFYk62T9NKXTVU6WoPnug9cPUsT5Zm_LoHWpzlZeQvUzIOxZiFUvbH9Cc76VojZYn_NUOnBsngsDJyLu8WGTs7GASOhVhkfrmjn86SO0YAyxLwL2bTYfzokbvE5weyP4jcjKfREBCHUWh6FjYBr8OKr1e0gTgiICxPlhHtqjoyuaDiPwXPW3Cz9oku3V8nYLwDFuYn2sQIvKAc_EZrVKGaalyMzgNR4rkE9Snj5zZEPkvu36MuRxLQPJchAl_Bl0dBVuPspBto7GuIDXE_ZOjNAOEu7ImINUqIWaXIIlX76qMxir9esbKBgbwr3SUQMswS24XnuHUDQUNjlFs8sXTapVEAU6oV43NFtka4qtUYSkjP0wxGgmcSd_BAxs_do4FBR2WtzMBAFqfRRywE9uffNELRrXOwAx6xY9oyt1rYo_uWdnpBCbccIDlhw-PMuAnWB2BVa7qWff_n5YgK4huA_RAYzxgk-EzAyMpTgJNMaYE3M5n3KcqNqcEuhHA0xoIVDlz4peaP-5RdnjYfRVbOYTdylmB_wIddgeg3vFqZu13EYN6VG3Y69a7XzPLgHnZXMINw9stJojE4TyShaRvK-UCOzPy5sihFO_j9PrYRJ6x-vOZFThNCaU5cI7pV6cXRqKjiH437t3JrnSUj3vJ2FJvJ9sUvEt86iFwH4sqENQDYzUbI74MgQm_CXj5q30-8Sa2x5RVMHDaCqoXFNfdH7k3nNL_rWMEm6-hYOvF9VkHrPg7e5iav_v_0zAwusnXjpVkY9fT8f4qS9Lgy6LRXgZMP6ib6xaioon50X1Wz78Bg_2z2wSUlHcYCvNrZoUWbkugTU-VoK21KJMcvo3KcM7zRlwuwbZhwjRTePxGCxJ4PvsRxWGoycFCeSO3YrS9ErJcBu4I8i47VoixxL_G7OUmpfTjEqO5Dw6D2xNWhVpclvAblk61o-FGa5BTI8tKBTf8EqYPfPvSaibJ9vlZqjY6QqIyN7l_FaxyMvUj58E9ZAsN6m-Xubd0dbkhpNj4hEqfSRmnuqPieikxcHnj75cX3w=w1910-h872?auditContext=prefetch" alt="" style={{width: "100px"}}/>
        <button style={{
          background: "#f5ff00",
          border: "none",
          padding: "10px 20px",
          borderRadius: "999px",
          fontWeight: "bold",
          cursor: "pointer"
        }}>
          Place Order
        </button>
      </div>

      {/* Main Layout */}
      <div style={{ display: "flex", gap: "30px" }}>

        {/* Sidebar */}
        <div style={{
          width: "260px",
          background: "rgba(255,255,255,0.03)",
          padding: "20px",
          borderRadius: "20px",
          backdropFilter: "blur(10px)"
        }}>
          <h3 style={{ marginBottom: "15px" }}>Available Cars</h3>

          {carsData.map(car => (
            <div
              key={car.name}
              onClick={() => changeCar(car)}
              style={{
                padding: "15px",
                borderRadius: "14px",
                marginBottom: "10px",
                cursor: "pointer",
                background: selectedCar.name === car.name
                  ? "linear-gradient(135deg, #222, #111)"
                  : "transparent",
                border: selectedCar.name === car.name
                  ? "1px solid #333"
                  : "1px solid transparent"
              }}
            >
              <strong>{car.name}</strong>
              <div style={{ fontSize: "12px", color: "#777" }}>
                {car.year} · {car.engine}
              </div>
            </div>
          ))}
        </div>

        {/* Main Card */}
        <div style={{
          flex: 1,
          background: "linear-gradient(145deg, #111, #0a0a0a)",
          borderRadius: "30px",
          padding: "40px",
          position: "relative",
          overflow: "hidden"
        }}>

          {/* Info */}
          <div>
            <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
              {selectedCar.name}
            </h1>
            <p style={{ color: "#888" }}>
              {selectedCar.year} · {selectedCar.engine}
            </p>

            <h2 style={{ marginTop: "20px", color: "#f5ff00" }}>
              {selectedCar.price}
            </h2>
          </div>

          {/* Car Image */}
          <img
            src={selectedColor}
            alt="car"
            style={{
              width: "100%",
              maxWidth: "700px",
              margin: "40px auto",
              display: "block",
              filter: "drop-shadow(0 40px 40px rgba(0,0,0,0.8))",
              transition: "0.3s ease"
            }}
          />

          {/* Color selector */}
          <div style={{ textAlign: "center" }}>
            <p style={{ marginBottom: "10px", color: "#888" }}>Select color</p>
            <div style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px"
            }}>
              {Object.entries(selectedCar.colors).map(([color, img]) => (
                <div
                  key={color}
                  onClick={() => setSelectedColor(img)}
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "50%",
                    background: color,
                    cursor: "pointer",
                    border: selectedColor === img
                      ? "3px solid #f5ff00"
                      : "2px solid #333"
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

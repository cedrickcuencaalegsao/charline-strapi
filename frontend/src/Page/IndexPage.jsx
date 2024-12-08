import { FaSearch } from "react-icons/fa";
import "./design.scss"; // Importing the Sass file
import { useState } from "react";
import { useGetTodo } from "../Hooks/useGetData";

export default function IndexPage() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [showResult, setShowResult] = useState(false);

  // Call the hook here, not inside a function
  const { getAllTodos } = useGetTodo(search); // Assuming useGetTodo returns an object with the function getAllTodos

  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await getAllTodos(); // Call getAllTodos function from the hook
    setResult(data); // Set the result state
    setShowResult(true);
  };

  return (
    <div className="index-page">
      <div className="header">
        <h1>Pore Clogging Identifier</h1>
        <h3>A quick and reliable way to identify acne-safe beauty products.</h3>
      </div>

      <form onSubmit={handleSearch}>
        <div className="search-input">
          <input
            type="text"
            placeholder="Search for a brand..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button type="submit">
            <FaSearch className="icon" />
          </button>
        </div>
      </form>

      {showResult && result.length > 0 ? (
        <div className="result">
          <div className="result-cards">
            {result.map((item, index) => (
              <div key={index} className="card">
                <img
                  className="card-image"
                  src={item.image || "default-image.jpg"}
                  alt={item.name}
                />
                <h4 className="card-title">{item.name}</h4>
                <p className="card-description">{item.description}</p>
                <button className="buy-button">Buy Now</button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        showResult && <p className="no-result">No Results Found</p>
      )}

      <div className="info-text">
        <p>
          Acne can often be triggered by ingredients that clog pores, that's why
          it's essential to examine the ingredients in your products carefully.
          Many well-known brands include pore-clogging ingredients that can
          aggravate acne. To help your skin stay clear and healthy, avoid
          makeup, body care, or hair care products containing these
          pore-clogging ingredients.
        </p>
        <span className="footer">
          © Charlene A. Barrientos | ACLC College of Mandaue
        </span>
      </div>
    </div>
  );
}

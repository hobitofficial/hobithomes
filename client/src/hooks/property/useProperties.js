import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
const useProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { currentUser } = useSelector((state) => state.user);
  useEffect(() => {
    if (!currentUser._id) return;

    const fetchProperties = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `http://localhost:8000/api/property/adminProperty/${currentUser._id}`
        );
        setProperties(response.data || []);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch properties");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [currentUser._id]);

  return { properties, loading, error };
};

export default useProperties;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Container, Button, Spinner } from "react-bootstrap";
import { toast } from "react-hot-toast";
import BASE_URL from "../Pages/Config/Config.js";

const DemoRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRequests = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/demo`);
      setRequests(data);
    } catch (error) {
      console.error("Error fetching demo requests:", error);
      toast.error("Failed to load demo requests");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this request?")) return;
    try {
      await axios.delete(`${BASE_URL}/api/demo/${id}`);
      toast.success("Request deleted successfully");
      fetchRequests();
    } catch (error) {
      toast.error("Failed to delete request");
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Demo Requests</h2>
      <Table striped bordered hover responsive>
        <thead className="bg-primary text-white">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
            <th>Product</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.length > 0 ? (
            requests.map((req) => (
              <tr key={req._id}>
                <td>{req.name}</td>
                <td>{req.email}</td>
                <td>{req.phone}</td>
                <td>{req.companyName}</td>
                <td>{req.product}</td>
                <td>{new Date(req.createdAt).toLocaleDateString()}</td>
                <td>
                  <Button variant="danger" size="sm" onClick={() => handleDelete(req._id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No demo requests found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default DemoRequests;

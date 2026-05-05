import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Container, Button, Spinner } from "react-bootstrap";
import { toast } from "react-hot-toast";
import BASE_URL from "../Pages/Config/Config.js";

const ContactMessages = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchContacts = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/contact`);
      if (data.success) {
        setContacts(data.contacts);
      }
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      toast.error("Failed to load contact messages");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;
    try {
      await axios.delete(`${BASE_URL}/api/contact/${id}`);
      toast.success("Message deleted successfully");
      fetchContacts();
    } catch (error) {
      toast.error("Failed to delete message");
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
      <h2 className="mb-4">Contact Messages</h2>
      <Table striped bordered hover responsive>
        <thead className="bg-success text-white">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
            <th>Subject/Type</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <tr key={contact._id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>{contact.company || "N/A"}</td>
                <td>{contact.queryType}</td>
                <td>{new Date(contact.createdAt).toLocaleDateString()}</td>
                <td>
                  <Button variant="danger" size="sm" onClick={() => handleDelete(contact._id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No contact messages found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default ContactMessages;

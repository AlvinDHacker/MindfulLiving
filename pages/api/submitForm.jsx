import axios from 'axios';

export default async (req, res) => {
  if (req.method === 'POST') {
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdLtYd3LLH5X5zlx9V-qgaKcujKwttvn4aw3wgIkTj8su8DWA/formResponse?"; // Replace with your actual Google Form URL

    try {
      // Send a POST request to the Google Form
      const response = await axios.post(formUrl, req.body);

      // Handle the response, if needed
      // For example, you can send a success message back to the client
      res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error submitting the form' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

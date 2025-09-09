import React, { useState } from 'react';

// The main App component contains the responsive contact form.
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    message: '',
    type: '', // 'success' or 'error'
  });

  const [isGenerating, setIsGenerating] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleGenerateSubject = async () => {
    if (!formData.message.trim()) {
      setFormStatus({
        message: 'Please write a message before generating a subject line.',
        type: 'error',
      });
      return;
    }

    setIsGenerating(true);
    setFormStatus({ message: '', type: '' });

    try {
      const apiKey = "";
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

      const payload = {
        contents: [{
          parts: [{
            text: `Generate a short and concise subject line (5-10 words) for the following message. Do not include a period at the end. \n\nMessage: ${formData.message}`
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topP: 0.9,
          topK: 40,
        }
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const result = await response.json();
      const generatedText = result?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || '';

      if (generatedText) {
        setFormData(prevData => ({ ...prevData, subject: generatedText }));
        setFormStatus({
          message: 'Subject line generated successfully!',
          type: 'success',
        });
      } else {
        setFormStatus({
          message: 'Could not generate a subject. Please try again.',
          type: 'error',
        });
      }
    } catch (error) {
      console.error("Error generating subject:", error);
      setFormStatus({
        message: 'An error occurred while generating the subject line. Please check your network.',
        type: 'error',
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ message: '', type: '' });

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormStatus({
        message: 'Please fill in all the fields.',
        type: 'error',
      });
      return;
    }

    // In a real application, you would send this data to a server.
    // For this example, we will just log the data and show a success message.
    console.log('Form data submitted:', formData);

    setFormStatus({
      message: 'Thank you for your message! We will get back to you soon.',
      type: 'success',
    });

    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 lg:p-12 w-full max-w-2xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">Contact Me</h2>
        <p className="text-center text-gray-600 mb-8 sm:text-lg">
          Feel free to reach out with any questions or collaboration ideas!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Status Message */}
          {formStatus.message && (
            <div
              className={`p-3 rounded-lg text-sm text-center font-medium ${
                formStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}
            >
              {formStatus.message}
            </div>
          )}

          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm"
              aria-required="true"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm"
              aria-required="true"
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm resize-none"
              aria-required="true"
            ></textarea>
          </div>

          {/* Subject Input with Gemini API Integration */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              Subject
            </label>
            <div className="flex space-x-2">
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject Line"
                className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm"
                aria-required="true"
              />
              <button
                type="button"
                onClick={handleGenerateSubject}
                disabled={isGenerating}
                className={`py-3 px-4 rounded-lg text-sm font-medium text-white transition duration-150 ease-in-out ${
                  isGenerating ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
                }`}
              >
                {isGenerating ? 'Generating...' : '✨ Generate'}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

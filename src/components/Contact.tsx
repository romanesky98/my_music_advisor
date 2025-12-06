import { Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    message: '',
    privacy: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        reason: '',
        message: '',
        privacy: false,
      });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
            <MessageCircle className="w-8 h-8 text-red-600" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's talk about discoveries.
          </h2>

          <p className="text-xl text-gray-600">
            Write to us for collaborations, reports of emerging artists, or special requests.
          </p>
        </div>

        {submitted ? (
          <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-10 text-center">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Thank you!</h3>
            <p className="text-lg text-green-700">
              We can't wait to listen to what you want to share.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 md:p-10 shadow-lg">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="reason" className="block text-gray-700 font-semibold mb-2">
                  Reason for message
                </label>
                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                >
                  <option value="">Select a reason</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="artist">Artist report</option>
                  <option value="special">Special request</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all resize-none"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleChange}
                  required
                  className="mt-1 w-5 h-5 text-red-600 focus:ring-red-500 rounded"
                />
                <label htmlFor="privacy" className="text-gray-600">
                  I accept the privacy policy and consent to the processing of my data.
                </label>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Send className="w-5 h-5" />
                Send
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

'use client';

import axios from 'axios';
import { useState } from 'react';

export default function FileUpload() {
  const [file, setFile] = useState(null); // State to hold the selected file
  const [uploading, setUploading] = useState(false); // State to handle uploading status
  const [uploadedUrl, setUploadedUrl] = useState(null); // State to hold uploaded file URL
  const [error, setError] = useState(null); // State to handle any errors

  // Handle file selection
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setUploadedUrl(null); // Reset uploaded URL if a new file is selected
      setError(null); // Reset any previous error
    }
  };

  // Handle file upload to the backend
  const uploadFile = async () => {
    if (!file) {
      setError('Please select a file before uploading.');
      return;
    }

    setUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('/api/upload', formData)
                                  .then(res => res.data)
                                  .then(data => data.result)
                                  .then(result => setUploadedUrl(result.url))
                                  .catch(error => console.error(error.message))

      // const data = await response.json();
      // console.log(data)
      // if (response.ok) {
      //   setUploadedUrl(data.url); // Set the uploaded URL on successful upload
      //   setFile(null); // Reset file input after successful upload
      // } else {
      //   setError(data.error || 'Upload failed.');
      // }
    } catch (err) {
      console.error('Error uploading file:', err);
      setError('An error occurred during the upload. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Upload a File</h2>

      <input
        type="file"
        onChange={handleFileChange}
        accept="image/*"
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none mb-4"
      />

      {file && (
        <p className="text-sm text-gray-500 mb-2">
          Selected file: {file.name}
        </p>
      )}

      {error && (
        <p className="text-sm text-red-500 mb-2">
          {error}
        </p>
      )}

      {uploadedUrl && (
        <div className="mt-4">
          <p className="text-sm text-gray-500 mb-2">Uploaded Image:</p>
          <img src={uploadedUrl} alt="Uploaded file" className="max-w-full h-auto rounded-lg shadow-md" />
        </div>
      )}

      <button
        onClick={uploadFile}
        disabled={uploading}
        className={`mt-4 w-full py-2 px-4 text-white font-semibold rounded-lg shadow-md ${
          uploading
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {uploading ? 'Uploading...' : 'Upload File'}
      </button>
    </div>
  );
}


// // components/UploadForm.jsx
// "use client"
// import { useState } from 'react';

// const UploadForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [file, setFile] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [message, setMessage] = useState('');
//   const [messageType, setMessageType] = useState(''); // 'success' or 'error'

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!file) {
//       setMessage('Please select a file to upload.');
//       setMessageType('error');
//       return;
//     }

//     const payload = { email , password }
//     const formData = new FormData();
//     formData.append('payload', JSON.stringify(payload));
//     formData.append('file', file);

//     try {
//       setUploading(true);
//       setMessage('');
//       setMessageType('');

//       const response = await fetch('/api/upload', {
//         method: 'POST',
//         body: formData,
//       });

//       const result = await response.json();
//       console.log(result);
      
//       if (response.ok) {
//         setMessage(`Upload successful! File URL: ${result.url}`);
//         setMessageType('success');
//       } else {
//         setMessage(`Upload failed: ${result.error}`);
//         setMessageType('error');
//       }
//     } catch (error) {
//       console.error('Error uploading file:', error);
//       setMessage('An unexpected error occurred.');
//       setMessageType('error');
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
//       <h2 className="text-2xl font-semibold mb-6 text-center">Upload File</h2>
//       <form onSubmit={handleSubmit} encType="multipart/form-data">
//         {/* Email Field */}
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
//             Email:
//           </label>
//           <input
//             type="email"
//             id="email"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             placeholder="Enter your email"
//           />
//         </div>

//         {/* Password Field */}
//         <div className="mb-4">
//           <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
//             Password:
//           </label>
//           <input
//             type="password"
//             id="password"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             placeholder="Enter your password"
//           />
//         </div>

//         {/* File Upload Field */}
//         <div className="mb-6">
//           <label htmlFor="file" className="block text-gray-700 font-medium mb-2">
//             File:
//           </label>
//           <input
//             type="file"
//             id="file"
//             accept="image/*" // Adjust as needed
//             className="w-full text-gray-700"
//             onChange={(e) => setFile(e.target.files[0])}
//             required
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           disabled={uploading}
//           className={`w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 ${
//             uploading ? 'opacity-50 cursor-not-allowed' : ''
//           }`}
//         >
//           {uploading ? 'Uploading...' : 'Upload'}
//         </button>

//         {/* Message Display */}
//         {message && (
//           <p
//             className={`mt-4 text-center text-sm ${
//               messageType === 'success' ? 'text-green-600' : 'text-red-600'
//             }`}
//           >
//             {message}
//           </p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default UploadForm;


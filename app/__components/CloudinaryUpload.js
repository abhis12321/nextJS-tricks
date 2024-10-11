// 'use client'

// // // import axios from 'axios'
// // // import { useState } from 'react'

// // // export default function CloudinaryUpload() {
// // //   const [file, setFile] = useState(null)
// // //   const [uploading, setUploading] = useState(false)
// // //   const [uploadedUrl, setUploadedUrl] = useState(null)

// // //   const handleFileChange = (e) => {
// // //     if (e.target.files && e.target.files[0]) {
// // //       setFile(e.target.files[0])
// // //     }
// // //   }

// // //   const uploadToCloudinary = async () => {
// // //     if (!file) return

// // //     setUploading(true)

// // //     const formData = new FormData()
// // //     formData.append('file', file)
// // //     formData.append('upload_preset', 'my-lab') // Replace with your actual upload preset

// // //     try {
// // //       const response = axios.post(
// // //         `https://api.cloudinary.com/v1_1/dak3c5zwi/image/upload`, // Replace YOUR_CLOUD_NAME with your actual cloud name
// // //         {
// // //             formData,
// // //         }
// // //       )
// // //       .then(res => res.data)
// // //       .then(data => console.log(res))
// // //       .catch(error => console.error(error.message))

// // //       if (!response.ok) {
// // //         throw new Error('Upload failed')
// // //       }

// // //       const data = await response.json()
// // //       setUploadedUrl(data.secure_url)
// // //     } catch (error) {
// // //       console.error('Error uploading to Cloudinary:', error)
// // //     } finally {
// // //       setUploading(false)
// // //     }
// // //   }

// // //   return (
// // //     <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
// // //       <h2 className="text-2xl font-bold mb-4">Upload to Cloudinary</h2>
// // //       <div className="space-y-4">
// // //         <input
// // //           type="file"
// // //           onChange={handleFileChange}
// // //           accept="image/*"
// // //           className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
// // //         />
// // //         {file && (
// // //           <p className="text-sm text-gray-500">
// // //             Selected file: {file.name}
// // //           </p>
// // //         )}
// // //         {uploadedUrl && (
// // //           <div className="mt-4">
// // //             <p className="text-sm text-gray-500 mb-2">Uploaded Image:</p>
// // //             <img src={uploadedUrl} alt="Uploaded" className="max-w-full h-auto rounded-lg shadow-md" />
// // //           </div>
// // //         )}
// // //       </div>
// // //       <button
// // //         onClick={uploadToCloudinary}
// // //         disabled={!file || uploading}
// // //         className={`mt-4 w-full py-2 px-4 text-white font-semibold rounded-lg shadow-md ${
// // //           uploading
// // //             ? 'bg-gray-400 cursor-not-allowed'
// // //             : 'bg-blue-600 hover:bg-blue-700'
// // //         }`}
// // //       >
// // //         {uploading ? 'Uploading...' : uploadedUrl ? 'Uploaded' : 'Upload to Cloudinary'}
// // //       </button>
// // //     </div>
// // //   )
// // // }


// // 'use client'

// // import { useState } from 'react'

// // export default function CloudinaryUpload() {
// //   const [file, setFile] = useState(null)
// //   const [uploading, setUploading] = useState(false)
// //   const [uploadedUrl, setUploadedUrl] = useState(null)
// //   const [error, setError] = useState(null)

// //   const handleFileChange = (e) => {
// //     if (e.target.files && e.target.files[0]) {
// //       setFile(e.target.files[0])
// //       setUploadedUrl(null) // Reset the uploaded URL when a new file is chosen
// //     }
// //   }

// //   const uploadToCloudinary = async () => {
// //     if (!file) return

// //     setUploading(true)
// //     setError(null) // Reset error message

// //     const formData = new FormData()
// //     formData.append('file', file)
// //     formData.append('upload_preset', 'my-lab') // Replace with your Cloudinary upload preset

// //     try {
// //       const response = await fetch(
// //         `https://api.cloudinary.com/v1_1/dak3c5zwi/image/upload`, // Replace with your Cloudinary cloud name
// //         {
// //           method: 'POST',
// //           body: formData,
// //         }
// //       )

// //       if (!response.ok) {
// //         throw new Error('Upload failed')
// //       }

// //       const data = await response.json()
// //       setUploadedUrl(data.secure_url)
// //     } catch (error) {
// //       setError('Error uploading to Cloudinary.')
// //       console.error('Error uploading to Cloudinary:', error)
// //     } finally {
// //       setUploading(false)
// //     }
// //   }

// //   return (
// //     <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
// //       <h2 className="text-2xl font-bold mb-4">Upload to Cloudinary</h2>
// //       <div className="space-y-4">
// //         <input
// //           type="file"
// //           onChange={handleFileChange}
// //           accept="image/*"
// //           className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
// //         />
// //         {file && (
// //           <p className="text-sm text-gray-500">
// //             Selected file: {file.name}
// //           </p>
// //         )}
// //         {error && (
// //           <p className="text-sm text-red-500">
// //             {error}
// //           </p>
// //         )}
// //         {uploadedUrl && (
// //           <div className="mt-4">
// //             <p className="text-sm text-gray-500 mb-2">Uploaded Image:</p>
// //             <img src={uploadedUrl} alt="Uploaded" className="max-w-full h-auto rounded-lg shadow-md" />
// //           </div>
// //         )}
// //       </div>
// //       <button
// //         onClick={uploadToCloudinary}
// //         disabled={!file || uploading}
// //         className={`mt-4 w-full py-2 px-4 text-white font-semibold rounded-lg shadow-md ${
// //           uploading
// //             ? 'bg-gray-400 cursor-not-allowed'
// //             : 'bg-blue-600 hover:bg-blue-700'
// //         }`}
// //       >
// //         {uploading ? 'Uploading...' : uploadedUrl ? 'Uploaded' : 'Upload to Cloudinary'}
// //       </button>
// //     </div>
// //   )
// // }


// import { useState } from 'react';

// export default function FileUpload() {
//   const [file, setFile] = useState(null); // State to hold the selected file
//   const [uploading, setUploading] = useState(false); // State to handle uploading status
//   const [uploadedUrl, setUploadedUrl] = useState(null); // State to hold uploaded file URL
//   const [error, setError] = useState(null); // State to handle any errors

//   // Handle file selection
//   const handleFileChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       setFile(e.target.files[0]);
//       setUploadedUrl(null); // Reset uploaded URL if a new file is selected
//       setError(null); // Reset any previous error
//     }
//   };

//   // Handle file upload to the backend
//   const uploadFile = async () => {
//     if (!file) {
//       setError('Please select a file before uploading.');
//       return;
//     }

//     setUploading(true);
//     setError(null);

//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       const response = await fetch('/api/upload', {
//         method: 'POST',
//         body: formData,
//       });

//       const data = await response.json();
//       console.log("data --> " , data);
//       if (response.ok) {
//         setUploadedUrl(data.url); // Set the uploaded URL on successful upload
//         setFile(null); // Reset file input after successful upload
//       } else {
//         setError('Upload failed: ' + data.message);
//       }
//     } catch (err) {
//       console.error('Error uploading file:', err);
//       setError('An error occurred during the upload. Please try again.');
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-bold mb-4">Upload a File</h2>

//       <input
//         type="file"
//         onChange={handleFileChange}
//         accept="image/*"
//         className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none mb-4"
//       />

//       {file && (
//         <p className="text-sm text-gray-500 mb-2">
//           Selected file: {file.name}
//         </p>
//       )}

//       {error && (
//         <p className="text-sm text-red-500 mb-2">
//           {error}
//         </p>
//       )}

//       {uploadedUrl && (
//         <div className="mt-4">
//           <p className="text-sm text-gray-500 mb-2">Uploaded Image:</p>
//           <img src={uploadedUrl} alt="Uploaded file" className="max-w-full h-auto rounded-lg shadow-md" />
//         </div>
//       )}

//       <button
//         onClick={uploadFile}
//         disabled={uploading}
//         className={`mt-4 w-full py-2 px-4 text-white font-semibold rounded-lg shadow-md ${
//           uploading
//             ? 'bg-gray-400 cursor-not-allowed'
//             : 'bg-blue-600 hover:bg-blue-700'
//         }`}
//       >
//         {uploading ? 'Uploading...' : 'Upload File'}
//       </button>
//     </div>
//   );
// }


// components/FileUpload.js

'use client';

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
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setUploadedUrl(data.url); // Set the uploaded URL on successful upload
        setFile(null); // Reset file input after successful upload
      } else {
        setError(data.error || 'Upload failed.');
      }
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

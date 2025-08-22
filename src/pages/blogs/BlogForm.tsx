// import React, { useState, useEffect, useCallback } from 'react';
// import toast from 'react-hot-toast';
// import { X, Eye, Edit2, Upload } from 'lucide-react';
// import { blogService } from '../../services/blogService';
// import RichTextEditor from './RichTextEditor';
// import { Blog } from '../../utils/types';

// interface BlogFormProps {
//   blog?: Blog;
//   onClose: () => void;
//   onSuccess: () => void;
// }

// export default function BlogForm({ blog, onClose, onSuccess }: BlogFormProps) {
//   const [formData, setFormData] = useState({
//     title: '',
//     excerpt: '',
//     content: '',
//     cover_image: '',
//     author: '',
//     read_time: '',
//     date: new Date().toISOString().split('T')[0]
//   });

//   const [showPreview, setShowPreview] = useState(false);
//   const [imageError, setImageError] = useState(false);
//   const [isDragging, setIsDragging] = useState(false);

//   useEffect(() => {
//     if (blog) {
//       setFormData({
//         title: blog.title,
//         excerpt: blog.excerpt,
//         content: blog.content,
//         cover_image: blog.cover_image,
//         author: blog.author || '',
//         read_time: blog.read_time || '',
//         date: blog.date || new Date().toISOString().split('T')[0]
//       });
//     }
//   }, [blog]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Validation
//     if (!formData.title.trim()) {
//       toast.error('Title is required');
//       return;
//     }
//     if (!formData.excerpt.trim()) {
//       toast.error('Excerpt is required');
//       return;
//     }
//     if (!formData.content.trim()) {
//       toast.error('Content is required');
//       return;
//     }
//     if (!formData.cover_image.trim()) {
//       toast.error('Cover image is required');
//       return;
//     }
//     if (imageError) {
//       toast.error('Please provide a valid image file (PNG, .webp, JPEG)');
//       return;
//     }

//     try {
//       const loadingToast = toast.loading(blog?.id ? 'Updating blog...' : 'Creating blog...');
      
//       if (blog?.id) {
//         await blogService.updateBlog(blog.id, formData);
//         toast.success('Blog updated successfully', { id: loadingToast });
//       } else {
//         await blogService.createBlog(formData as any);
//         toast.success('Blog created successfully', { id: loadingToast });
//       }
//       onSuccess();
//       onClose();
//     } catch (error: any) {
//       console.error('Error saving blog:', error);
//       toast.error(error.message || (blog?.id ? 'Failed to update blog' : 'Failed to create blog'));
//     }
//   };

//   const handleImageError = () => {
//     setImageError(true);
//     toast.error('Invalid image file');
//   };

//   const handleImageLoad = () => {
//     setImageError(false);
//   };

//   const handleDragOver = useCallback((e: React.DragEvent) => {
//     e.preventDefault();
//     setIsDragging(true);
//   }, []);

//   const handleDragLeave = useCallback((e: React.DragEvent) => {
//     e.preventDefault();
//     setIsDragging(false);
//   }, []);

//   const handleDrop = useCallback((e: React.DragEvent) => {
//     e.preventDefault();
//     setIsDragging(false);

//     const file = e.dataTransfer.files[0];
//     if (file) {
//       if (file.type.match(/^image\/(jpeg|.webp|png)$/i)) {
//         const reader = new FileReader();
//         reader.onload = (event) => {
//           if (event.target?.result) {
//             setFormData(prev => ({ ...prev, cover_image: event.target.result as string }));
//           }
//         };
//         reader.readAsDataURL(file);
//       } else {
//         toast.error('Please drop a valid image file (PNG, .webp, or JPEG)');
//       }
//     }
//   }, []);

//   const Preview = () => (
//     <div className="bg-white p-8 rounded-lg">
//       <div className="relative h-[400px] mb-8">
//         <img
//           src={formData.cover_image}
//           alt={formData.title}
//           className="w-full h-full object-cover rounded-lg"
//           onError={handleImageError}
//           onLoad={handleImageLoad}
//         />
//       </div>
//       <h1 className="text-3xl font-bold mb-4">{formData.title}</h1>
//       <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
//         {formData.date && <span>{formData.date}</span>}
//         {formData.read_time && <span>{formData.read_time}</span>}
//         {formData.author && <span>By {formData.author}</span>}
//       </div>
//       <p className="text-gray-600 mb-8 italic">{formData.excerpt}</p>
//       <div 
//         className="prose max-w-none"
//         dangerouslySetInnerHTML={{ __html: formData.content }}
//       />
//     </div>
//   );

//   return (
//     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
//       <div className="bg-white rounded-xl w-full max-w-6xl max-h-[90vh] overflow-y-auto shadow-2xl">
//         <div className="p-6">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               {blog?.id ? 'Edit Blog' : 'Create New Blog'}
//             </h2>
//             <div className="flex items-center gap-2">
//               <button
//                 onClick={() => setShowPreview(!showPreview)}
//                 className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-200"
//               >
//                 {showPreview ? (
//                   <>
//                     <Edit2 className="w-4 h-4" />
//                     Edit
//                   </>
//                 ) : (
//                   <>
//                     <Eye className="w-4 h-4" />
//                     Preview
//                   </>
//                 )}
//               </button>
//               <button
//                 onClick={onClose}
//                 className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//               >
//                 <X className="w-6 h-6" />
//               </button>
//             </div>
//           </div>

//           {showPreview ? (
//             <Preview />
//           ) : (
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Title
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.title}
//                   onChange={(e) =>
//                     setFormData((prev) => ({ ...prev, title: e.target.value }))
//                   }
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//                   placeholder="Enter blog title"
//                   required
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Cover Image
//                 </label>
//                 <div
//                   className={`relative border-2 border-dashed rounded-lg transition-all duration-200 ${
//                     isDragging
//                       ? 'border-blue-500 bg-blue-50'
//                       : imageError
//                       ? 'border-red-500'
//                       : 'border-gray-300'
//                   }`}
//                   onDragOver={handleDragOver}
//                   onDragLeave={handleDragLeave}
//                   onDrop={handleDrop}
//                 >
//                   <input
//                     type="file"
//                     accept="image/png,image/jpeg,image/.webp"
//                     onChange={(e) => {
//                       const file = e.target.files?.[0];
//                       if (file) {
//                         const reader = new FileReader();
//                         reader.onload = (event) => {
//                           if (event.target?.result) {
//                             setFormData(prev => ({ ...prev, cover_image: event.target.result as string }));
//                           }
//                         };
//                         reader.readAsDataURL(file);
//                       }
//                     }}
//                     className="w-full px-4 py-2 bg-transparent rounded-lg focus:outline-none"
//                     required
//                   />
//                   {!formData.cover_image && (
//                     <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//                       <div className="text-center text-gray-400">
//                         <Upload className="w-8 h-8 mx-auto mb-2" />
//                       </div>
//                     </div>
//                   )}
//                 </div>
//                 {formData.cover_image && (
//                   <div className="mt-2 relative h-40 bg-gray-50 rounded-lg overflow-hidden">
//                     <img
//                       src={formData.cover_image}
//                       alt="Preview"
//                       className="w-full h-full object-contain"
//                       onError={handleImageError}
//                       onLoad={handleImageLoad}
//                     />
//                   </div>
//                 )}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Excerpt
//                 </label>
//                 <textarea
//                   value={formData.excerpt}
//                   onChange={(e) =>
//                     setFormData((prev) => ({ ...prev, excerpt: e.target.value }))
//                   }
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//                   rows={3}
//                   placeholder="Write a brief summary of your blog"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Content
//                 </label>
//                 <RichTextEditor
//                   content={formData.content}
//                   onChange={(content) =>
//                     setFormData((prev) => ({ ...prev, content }))
//                   }
//                 />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Author
//                   </label>
//                   <input
//                     type="text"
//                     value={formData.author}
//                     onChange={(e) =>
//                       setFormData((prev) => ({ ...prev, author: e.target.value }))
//                     }
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//                     placeholder="Author name"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Read Time
//                   </label>
//                   <input
//                     type="text"
//                     value={formData.read_time}
//                     onChange={(e) =>
//                       setFormData((prev) => ({ ...prev, read_time: e.target.value }))
//                     }
//                     placeholder="e.g., 5 min read"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Date
//                   </label>
//                   <input
//                     type="date"
//                     value={formData.date}
//                     onChange={(e) =>
//                       setFormData((prev) => ({ ...prev, date: e.target.value }))
//                     }
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//                   />
//                 </div>
//               </div>

//               <div className="flex justify-end gap-4 pt-4">
//                 <button
//                   type="button"
//                   onClick={onClose}
//                   className="px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-200"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-6 py-2 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
//                 >
//                   {blog?.id ? 'Update Blog' : 'Create Blog'}
//                 </button>
//               </div>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }